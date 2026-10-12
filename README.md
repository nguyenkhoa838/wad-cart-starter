# cart — session 2 starter

Run the behaviour tests:

```bash
npm test
```

## What to implement

`cartTotal(items, options)` in `src/cart.js`. Plain JavaScript, **no dependencies**.

- `items`: `[{ name, price, qty }]` · `options`: `{ vatRate, freeShipFrom, shipFee }`
- `subtotal` = sum of `price × qty`
- VAT = `vatRate` applied to the subtotal
- shipping = `0` when `subtotal >= freeShipFrom`, otherwise `shipFee`
- return `subtotal + VAT + shipping`, **a number**, rounded to the whole đồng
- an empty cart returns `0` — no VAT, no shipping
- a negative `price`, or a `qty` that is not a positive integer, throws `RangeError`

Worked example: 2 × 180000 + 1 × 45000 = 405000 subtotal, VAT 32400,
shipping 30000 (below the 500000 threshold) → **467400**.

## Local gate and CI

Use Node.js `24.x`. Run these commands from the repository root; no package
installation or lockfile is needed:

| Command | Checks |
|---|---|
| `npm test` | All tests using `node --test`. |
| `npm run format:check` | Whitespace and required paths using the built-in Node checker. |
| `npm run check` | Format first, then all tests; stops if format fails. |

The checker reads `package.json` and every `.js` file recursively under `src/`,
`test/`, and `scripts/`, including itself and files not tracked by Git. It accepts
LF and CRLF, and reports indentation tabs, trailing whitespace, and missing final
newlines with a file path and line number. It never rewrites files.

The three directories and `package.json`, `src/cart.js`, `test/cart.test.js`, and
`scripts/check-format.js` must exist as regular directories/files. Missing paths,
read failures, or symbolic links in the checked directories cause failure rather
than silently reducing coverage. The checker locates the root relative to itself.
Violations exit `1`; a successful format check exits `0`.

This is a limited whitespace checker. It does not enforce every style rule in
`AGENTS.md`, such as two-space indentation, quote style, or semicolons, and does
not prove JavaScript syntax or test coverage. Tests and code review handle the
remaining checks. The choice of Node `24.x` and this checker belongs to this repo.

`.github/workflows/ci.yml` runs `npm run check` on Linux with Node `24.x` for every
push, without branch or path filters. The official actions are pinned to full
commit SHAs, permissions are limited to `contents: read`, and package caching is
disabled. No dependency installation is performed. A failed check fails the job;
this workflow does not itself block commits or pushes.

`cartTotal` is implemented. The local gate has been verified with format passing
and all 47 tests passing, including shipping boundaries, rounding, validation,
and unchanged inputs. CI execution must be confirmed from a run for the pushed
commit; the workflow file alone is not a completed run.

## What you hand in

One zip named `<StudentID>_<total>.zip` — the total being the mark you give
yourself against the rubric — containing:

1. This repository, with `npm test` green
2. The brief you gave your assistant
3. `AI-LOG.md` — template on Classroom
4. `SELF_ASSESSMENT_REPORT.md` — template on Classroom, one row per rubric
   criterion with evidence

The rubric is attached to the assignment on Classroom. Read it before you start:
30 of the 100 marks are for behaviour, and they are checked by running your code.
