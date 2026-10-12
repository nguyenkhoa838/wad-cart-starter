# Rules — IA#1: cartTotal with a harness

These rules apply to the entire repository. The goal is to complete the individual IA#1 assignment correctly, keep the code easy to explain, and provide evidence of actual verification. For each task, perform only the assigned work; do not implement the remaining parts of the assignment on your own.

## 1. Requirements and scope

- `README.md` is the starter's functional specification; the IA#1 rubric defines the grading criteria and deliverables. The rubric and template PDFs are currently in the repository's parent directory. If another checkout lacks these source documents, state the limitation instead of guessing their contents.
- The contract in section 3 contains functional requirements. Node `24.x`, style conventions, the absence of devDependencies, and the checker design are choices made for this repository and its harness brief; do not present them as wording taken directly from the rubric.
- `BRIEF.md` is the only brief and describes the function, tests, and harness. Use the current request and any existing authorization that still applies to determine scope; the brief does not authorize work that has not been assigned.
- Check the actual `package.json`, source, and tests before using commands or describing the current state. Do not treat plans in documentation as existing features.
- If conflicting requirements affect the result, identify the sources and the conflict. Continue independent work and ask for clarification only where there is not enough information to decide.
- This assignment consists of one JavaScript function and a verification harness. Do not add a UI, server, database, framework, or other shopping-cart features.

## 2. Stack and file locations

| Component | Rule |
|---|---|
| Runtime | Node.js `24.x`; use the same major version locally and in CI. |
| Language | Plain JavaScript with ES modules; keep `"type": "module"` in `package.json`. |
| Dependencies | Do not add `dependencies` or `devDependencies`; use Node built-in modules. |
| Function to implement | Named export `cartTotal(items, options)` in `src/cart.js`. |
| Tests | `test/cart.test.js`, using `node:test` and `node:assert/strict`. |
| Rules | `AGENTS.md` at the repository root. |
| Harness | `scripts/check-format.js`, scripts in `package.json`, and `.github/workflows/ci.yml`; record verification status in `README.md` and `AI-LOG.md`. |
| Assignment documents | `BRIEF.md`, `AI-LOG.md`; create `SELF_ASSESSMENT_REPORT.md` when the submission-report task is assigned. |

Do not create a lockfile or run `npm install`, `npm ci`, or `npx` to download tools for this assignment, which has no package dependencies. Keep the function name, import paths, and starter metadata unless the task requires a change.

## 3. Required cartTotal contract

```js
cartTotal(items, options)
// items: [{ name, price, qty }]
// options: { vatRate, freeShipFrom, shipFee }
// return: number, rounded to the whole dong
```

For a nonempty cart with valid input:

```text
subtotal = sum(price × qty)
vat = subtotal × vatRate
shipping = subtotal >= freeShipFrom ? 0 : shipFee
result = Math.round(subtotal + vat + shipping)
```

- `vatRate: 0.08` means 8%; do not divide it by 100 again.
- Compare the shipping threshold against the subtotal before VAT and shipping. Shipping is free exactly at the threshold.
- Round only the final total; do not round individual items, the subtotal, or VAT before adding them.
- Return a `number`; do not return an object, a currency string, or the string produced by `toFixed(0)`.
- `items: []` returns `0` immediately, without VAT or shipping. An empty cart does not need to read the options fields to calculate the result.
- Any item with `price < 0` must cause the function to throw `RangeError`.
- `qty` must be a positive integer. Any value that fails this condition must cause the function to throw `RangeError`, including `0`, negative numbers, fractions, strings, `NaN`, `Infinity`, or `undefined` when an item has no `qty`. Do not coerce strings into numbers.
- Check every item; an earlier valid item must not hide an error in a later item.
- `price: 0` is valid. A cart containing a zero-price item is still nonempty and follows the shipping threshold rule. Do not use `subtotal === 0` to identify an empty cart.
- The assignment does not require `price` to be an integer; fractional prices are allowed within valid input. `name` does not affect the formula.
- Worked example: `180000 × 2 + 45000 × 1 = 405000`; VAT is `32400`, shipping is `30000`, and the result is the number `467400`.

Apart from the `qty` rules above, the assignment does not fully specify behavior when `items` is not an array, an item is not an object, `price`/`name` is missing, `price` is a string/`NaN`/`Infinity`, options are missing or invalid for a nonempty cart, rates/fees are negative, or the total exceeds the safe integer limit. Do not invent defaults, coercion, validation, or an error contract for these cases. If a task requires handling them, document the assumptions in the brief before implementation; do not present assumptions as official requirements.

## 4. Code design and style

The design and style rules below are repository conventions. Tests check behavior and must not require particular variable names or internal structures.

- Keep the function pure: do not modify `items`, its objects, or `options`; do not use I/O, network calls, environment variables, time, or global state to calculate the total.
- Use local variables and direct control flow. Avoid classes, abstractions, or helpers that merely wrap a simple calculation.
- Use `const` by default and `let` when reassignment is needed. Use names that describe their roles, such as `subtotal`, `vat`, and `shipping`.
- Check integers with `Number.isInteger`; do not truncate fractions to turn invalid quantities into valid ones.
- Indent with 2 spaces and no tabs; use single quotes for JavaScript strings and no semicolons, following the starter.
- Use ES module imports with the `.js` extension for local files and the `node:` prefix for built-in modules. JSON must still use double quotes as required by its syntax.
- Do not leave trailing whitespace; text files must end with a newline. Accept LF or CRLF and avoid changing all line endings unnecessarily.
- Keep trailing commas in multiline structures, following the existing style. Comments should explain reasons or edge cases rather than restating each addition.
- Keep changes small and focused; do not reformat unrelated files, rename files, or edit unrelated documentation.

## 5. Testing rules

Keep the starter example test and its expected value of `467400`. Each test must have one clear reason to fail; its name should describe the behavior or boundary being checked. Calculate expected values independently from the contract; do not call implementation helpers to generate them.

When assigned to implement the function or tests, cover the cases below. The “Basis” column distinguishes coverage stated directly in the rubric from additional boundaries used to verify this repository's contract.

| Behavior | Input/expected result to demonstrate | Basis |
|---|---|---|
| Worked example | The starter's two items → `467400`. | Rubric |
| Empty cart | `[]` → the number `0`, without shipping. | Rubric |
| Exact shipping threshold | Subtotal `500000`, VAT `0.08` → `540000`. | Rubric |
| Negative price | At least one item with `price: -1` → `RangeError`. | Rubric |
| Fractional quantity | `qty: 1.5` → `RangeError`. | Rubric |
| Zero or negative quantity | Separate cases for `qty: 0` and `qty: -1` → `RangeError`. | Positive-integer contract |
| Immediately below and above the threshold | Subtotal `499999` → `569999`; `500001` → `540001`. | Additional boundaries |
| Threshold checked before VAT | Subtotal `490000`, VAT `0.08`, shipping `30000` → `559200`. | Additional boundary |
| Rounding and return type | `price: 10`, `qty: 1`, VAT `0.08`, shipping `0` → the number `11`. | Contract verification |
| Round only the final total | Two items, each with `price: 10.2`, `qty: 1`; VAT `0.5`, shipping `0` → the number `31`. | Detects early rounding |
| Nonempty cart with a zero price | `price: 0`, threshold `500000`, shipping `30000` → `30000`. | Additional boundary |

Unless a row states otherwise, use `vatRate: 0.08`, `freeShipFrom: 500000`, `shipFee: 30000`, and qty `1` for single-price cases. Use `assert.equal` for results and `assert.throws(..., RangeError)` for the error type; do not require exact error messages that the assignment has not specified.

Add tests for an invalid item after a valid one, zero VAT, or unchanged input when needed to verify the design. Do not add tests merely to check internals, increase the test count, or impose validation beyond the specification. Do not use snapshots, mocks, or new testing libraries for this function.

The fractional-price case above has subtotal `20.4`, VAT `10.2`, and total `30.6` → `31`. Rounding individual items, the subtotal, or VAT before addition can produce `30`; the single-item `price: 10` case does not detect those errors. For both sides of the threshold or multiple invalid quantities, write separate tests so each result has one clear reason to fail.

## 6. Commands and reporting results

Run commands from the `wad-cart-starter` root, not from the parent directory containing the PDFs or the analysis workspace.

| Command | Purpose and conditions |
|---|---|
| `node --version` / `npm --version` | Confirm the environment when comparing local and CI versions. |
| `npm test` | Existing command: `node --test`, which runs the test suite. |
| `node --test test/cart.test.js` | Run only the cart test file. |
| `git status --short` / `git diff` | Check scope and uncommitted changes. |
| `git diff --check` / `git diff --cached --check` | Check whitespace in unstaged/staged changes; does not check untracked files or replace the format gate. |
| `npm run format:check` | Existing command: check whitespace and required paths with `node scripts/check-format.js`. |
| `npm run check` | Existing command: run format first, then all tests; stop on format errors and propagate test failures. |

- Read `package.json` to confirm the existing scripts. Do not report a planned command as successfully executed.
- When a task adds or changes scripts or the workflow, update the commands table and corresponding instructions in `README.md` and these rules in the same change.
- `git diff` does not show untracked file contents either. Read new files listed by `git status`; check their contents, whitespace, and final newlines separately before delivery.
- For documentation or rules tasks, review the content and diff. Do not edit source/tests to obtain a passing result or rerun tests without a relevant reason.
- When changing behavior or the harness, run appropriate checks afterward. Report the commands, results, exit codes, and remaining errors.
- The unimplemented starter has a failing test due to `Error: not implemented`. Treat this as the baseline only while the actual source remains in that state; do not assume every test failure is a baseline failure.
- Report “tests pass” only after an actual successful run. Report “CI passes” only after checking the run for the corresponding commit; the existence of YAML is not evidence that CI has run.

## 7. Building and maintaining the harness

This section defines harness design and maintenance. The checker, scripts, and workflow have been created. Read `README.md` and `AI-LOG.md` for verification results and CI limitations; do not infer them from the existence of files.

### Format checker

- Write `scripts/check-format.js` with Node built-in modules, without adding packages.
- Check `package.json` and every `.js` file under `src/`, `test/`, and `scripts/`, including subdirectories.
- Read UTF-8 and accept LF/CRLF. Detect indentation tabs, trailing whitespace, and missing final newlines.
- Check and report errors only; do not rewrite files. Report the path and reason, including the line number where applicable.
- Locate the root relative to the checker and use regular files/directories. Report symbolic links in checked directories; do not silently skip them or follow directory cycles.
- Violations, missing required paths, and read errors must cause exit `1`; exit `0` only after a successful check. Required paths include `package.json`, `src/`, `test/`, `scripts/`, `src/cart.js`, `test/cart.test.js`, and `scripts/check-format.js`. Empty directories or missing test files must not produce a false pass.
- Test violations separately on temporary copies outside the working tree; confirm that valid LF/CRLF files pass and each violation fails. Do not leave invalid fixtures in the submitted source.
- State the limitations accurately: this checker checks whitespace and does not enforce every rule about 2 spaces, single quotes, or no semicolons. `node --check` checks syntax only and does not replace the format checker.

### Gate and CI

- Keep the `test` script as `node --test`. Add `format:check` to run `node scripts/check-format.js`; `check` runs `npm run format:check && npm test`.
- The gate must propagate failure exit codes and stop when format fails. Do not omit tests, swallow errors, add `continue-on-error`, or run commands that always succeed.
- CI in `.github/workflows/ci.yml` runs on pushes to every branch, on Linux, checking out the repository and setting up Node `24.x` with official actions, then running `npm run check`.
- CI needs only `contents: read` permission. Do not install packages or configure caching that requires a nonexistent lockfile. Pin specific action versions and verify compatibility when creating the workflow.
- If the function is still a stub, the gate and CI must keep failing at the tests. Do not weaken the gate to hide the unimplemented state.
- The custom checker provides an approach without added dependencies; do not claim that the instructor will definitely accept it or infer the Harness score from that choice alone.

## 8. Task workflow

1. Read the current request, relevant files, and `git status`; note existing changes and do not overwrite the student's ongoing work.
2. Determine the scope: rules, harness, or function/tests. If assigned only rules, create the rules and update related records; do not treat that as authorization for the entire assignment.
3. For implementation tasks, save the actual brief before writing code: goals, files allowed to change, contract/errors, constraints, and verification steps. Do not write a brief afterward and claim it was the original prompt.
4. Edit only the necessary files, review the diff, run appropriate checks, and fix errors within the task's scope.
5. Update the AI log and README status honestly; deliver the changed files, verification results, and any missing work.

Do not request confirmation again for clearly assigned work. For documentation-only tasks, do not commit/push, change remotes, create branches, or implement other parts on your own. When assigned to commit/push, keep task changes separate and push to `origin`, the personal fork; do not push to the instructor's `upstream`.

## 9. AI log and self-assessment evidence

- Write `AI-LOG.md` during the task or immediately after completing a milestone. Use one entry per task involving AI, preserve existing entries, and keep the six fields `Tool`, `Asked for`, `Kept`, `Changed`, `Rejected`, and `By hand`. Do not wait until the whole assignment is complete to reconstruct the log.
- `Asked for` summarizes the task in one sentence; keep the other fields short, specific, and verifiable against actual changes. Record necessary verification commands and CI runs in `README.md`; reference actual files, tests, or commits in the report when assigned the self-assessment task.
- Do not invent work written by the student, rejected output, review activities, passing tests, or commits. If an activity has not been recorded, say so.
- Distinguish historical baselines, new results, and planned work. Update the current README status when adding deliverables; preserve earlier milestones with context in the AI log and Git history.
- When assigned the submission report, create `SELF_ASSESSMENT_REPORT.md` using the template and place it at the zip root: real student ID/full name, total score, the four columns `Criterion`, `Max`, `I claim`, `Evidence`, all 5 criteria with maxima `30/20/20/15/15`, specific evidence, `What I did not manage`, and `What I would do differently`.
- Do not invent identities, deadlines, or CI URLs. Claimed scores, including full marks, must be based on the rubric and evidence; do not claim 100 merely because tests pass. The table sum, claimed total, and zip name `<StudentID>_<total>.zip` must agree when packaging the submission.
- The student must be able to explain the formula, boundaries, tests, and gate. Prefer readable code and do not add techniques that are hard to explain when the assignment does not need them.

## 10. Never — prohibited actions

- **Never** add dependencies/devDependencies, switch to TypeScript, or introduce frameworks outside the scope.
- **Never** change the contract, remove valid tests, use `.skip`/`.todo` for required tests, or weaken the gate to justify an incorrect implementation.
- **Never** ignore invalid items, take the absolute value of prices, repair quantities automatically, catch `RangeError` and return `0`, or treat an invalid cart as empty.
- **Never** commit secrets, `.env`, `node_modules`, or temporary files, or include API keys, real data, or someone else's work in prompts/logs.
- **Never** delete or overwrite existing changes, reset history, or force-push unless the task explicitly requires it.
- **Never** report the task, harness, or submission as complete while required evidence is missing. State what has been done and the limits of the verification.
