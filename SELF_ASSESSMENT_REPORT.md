# Self-assessment — IA#1

Submitted by: 24127191 — Võ Nguyên Khoa

Total I claim: 97 / 100

Repository: [nguyenkhoa838/wad-cart-starter](https://github.com/nguyenkhoa838/wad-cart-starter)

Submission zip filename: `24127191_97.zip`.

| Criterion | Max | I claim | Evidence |
|---|---:|---:|---|
| Behaviour | 30 | 30 | [src/cart.js](src/cart.js) calculates the subtotal and VAT, provides free shipping when `subtotal >= freeShipFrom`, and applies `Math.round` only to the final total. An empty cart returns `0`; a negative price or a qty that is not a positive integer throws `RangeError`. Tests `the example from the slides`, `C02`, `C04`, `E01`, and `E04` in [test/cart.test.js](test/cart.test.js) check these requirements, including the numeric result `467400`. |
| Tests | 20 | 20 | [test/cart.test.js](test/cart.test.js): 47 tests using `node:test` and `node:assert/strict`, with numeric expected values calculated independently from the contract. Beyond the rubric cases, they cover both sides of the threshold (`C05`, `C06`), the threshold before VAT (`C07`), final rounding (`C09`), invalid items after valid ones (`E19`–`E22`), and unchanged input (`P01`–`P03`). Calculation and validation cases are registered as separate tests. `npm test` passes 47/47, with no skipped or todo tests. |
| Harness | 20 | 20 | [AGENTS.md](AGENTS.md), sections 2, 4, 6, and 10, defines the stack, style, commands, and Never rules. [package.json](package.json) provides `test`, `format:check`, and `check`; [scripts/check-format.js](scripts/check-format.js) checks whitespace, final newlines, and required paths. [.github/workflows/ci.yml](.github/workflows/ci.yml) runs the gate on every push with Node `24.x`. [CI while the function was a stub](https://github.com/nguyenkhoa838/wad-cart-starter/actions/runs/38238927330) failed; [CI at `b1a7731`](https://github.com/nguyenkhoa838/wad-cart-starter/actions/runs/38257492392) and its `Run format and tests` step both succeeded. |
| Brief | 15 | 14 | [BRIEF.md](BRIEF.md), sections `Task and scope`, `Contract`, `Acceptance tests`, and `Harness and completion`, identifies the files allowed to change, the formula, error cases, no dependencies/devDependencies, and verification steps. |
| AI-LOG.md | 15 | 13 | [AI-LOG.md](AI-LOG.md) contains 16 recorded tasks, each with all six template fields. The entries `Review rules`, `Finalize the implementation brief`, `Plan and add tests`, and `Clean up the repository and consolidate the brief` record specific changes and rejected output; they can be checked against the history at commits `5579082`, `a42779d`, and `b1a7731`. |

## What I did not manage

I did not keep a single brief throughout the work; `BRIEF.md` was consolidated
from the harness and implementation briefs after the code was complete. Some
AI log entries do not describe the work done by hand in enough detail for a
reader to verify it. The format checker currently checks only whitespace,
final newlines, and paths; it does not automatically enforce every style rule,
such as 2 spaces, single quotes, or no semicolons. This limitation is documented
in `README.md`, under `Local gate and CI`.

## What I would do differently

I would use one brief from the start and update it when the scope changes.
After each task, I would record my decisions, the output I changed or rejected,
and the work actually done by hand in the AI log. I would also record test
names, commits, and CI runs in the corresponding entries to make the final
self-assessment easier to verify.
