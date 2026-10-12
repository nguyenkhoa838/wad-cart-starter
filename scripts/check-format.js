import { lstatSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const files = new Set([
  'package.json',
  'src/cart.js',
  'test/cart.test.js',
  'scripts/check-format.js',
])
let failures = 0

function report(file, reason, line) {
  failures += 1
  const location = line === undefined ? file : `${file}:${line}`
  console.error(`${location}: ${reason}`)
}

function collectFiles(directory) {
  let entries
  try {
    if (!lstatSync(join(root, directory)).isDirectory()) {
      report(directory, 'expected a regular directory')
      return
    }
    entries = readdirSync(join(root, directory), { withFileTypes: true })
  } catch (error) {
    report(directory, `cannot read directory (${error.code})`)
    return
  }

  entries.sort((a, b) => a.name.localeCompare(b.name))
  for (const entry of entries) {
    const file = `${directory}/${entry.name}`
    if (entry.isDirectory()) {
      collectFiles(file)
    } else if (entry.isSymbolicLink()) {
      // Do not silently skip linked files or follow directory cycles.
      report(file, 'symbolic links are not supported in checked directories')
    } else if (entry.isFile()) {
      if (entry.name.endsWith('.js')) files.add(file)
    } else {
      report(file, 'expected a regular file or directory')
    }
  }
}

for (const directory of ['src', 'test', 'scripts']) {
  collectFiles(directory)
}

for (const file of [...files].sort()) {
  let content
  try {
    if (!lstatSync(join(root, file)).isFile()) {
      report(file, 'expected a regular file')
      continue
    }
    content = readFileSync(join(root, file), 'utf8')
  } catch (error) {
    report(file, `cannot read file (${error.code})`)
    continue
  }

  const lines = content.split(/\r?\n/)
  for (const [index, line] of lines.entries()) {
    if (/^[^\S\r\n]*\t/.test(line)) {
      report(file, 'tab in indentation', index + 1)
    }
    if (/\s$/.test(line)) {
      report(file, 'trailing whitespace', index + 1)
    }
  }
  if (!content.endsWith('\n')) {
    report(file, 'missing final newline', lines.length)
  }
}

if (failures > 0) {
  console.error(`Format check failed (${failures} errors)`)
  process.exitCode = 1
} else {
  console.log(`Format check passed (${files.size} files)`)
}
