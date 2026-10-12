# Brief — cartTotal with a harness

## Task and scope

Implement and test the named export `cartTotal(items, options)` for IA#1, with
rules, a local format/test gate, and CI. Use plain JavaScript ES modules and
Node.js `24.x`. **No dependencies or devDependencies**; use Node built-in modules.

Files the assistant may create or change:

| Work | Files |
|---|---|
| Implementation and tests | `src/cart.js`, `test/cart.test.js` |
| Rules and harness | `AGENTS.md`, `package.json`, `scripts/check-format.js`, `.github/workflows/ci.yml` |
| Assignment documentation | `README.md`, `AI-LOG.md` |

Keep the existing export name, function signature, starter package metadata,
and `.gitignore`. Do not add a lockfile, UI, server, framework, or extra modules.

## Contract

- `items`: an array of `{ name, price, qty }`; `name` does not affect the total.
- `options`: `{ vatRate, freeShipFrom, shipFee }`; use the supplied values.
- `subtotal = sum(price * qty)` for all items.
- `VAT = subtotal * vatRate`; `vatRate: 0.08` means 8%.
- Shipping is `0` when `subtotal >= freeShipFrom`, otherwise `shipFee`.
  Compare the subtotal before VAT; add shipping once and do not tax shipping.
- Return `subtotal + VAT + shipping` as a JavaScript `number`, rounding only
  the final total to the whole dong. Do not return a formatted string.
- An empty `items` array returns `0`, with no VAT or shipping.
- Throw `RangeError` for a negative `price` or a `qty` that is not a positive
  integer, including `0`, negative quantities, and fractions such as `1.5`.
  Check every item, including items in a cart qualifying for free shipping.
  The error message is not specified.
- Zero and fractional prices are allowed. A nonempty cart with subtotal `0`
  still follows the shipping rule. Do not change `items`, its objects, or `options`.
- Do not add defaults, coercion, or validation beyond this contract.

## Worked example

```js
const items = [
  { name: 'T-shirt', price: 180000, qty: 2 },
  { name: 'Notebook', price: 45000, qty: 1 },
]
const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
```

Subtotal `405000` + VAT `32400` + shipping `30000` = **`467400`**.

## Acceptance tests

Use `node:test` and `node:assert/strict`. Keep the starter example. Expected
values must be calculated independently from the contract; each test must have
one clear reason to fail. Cover:

1. The worked example returns the number `467400`.
2. An empty cart returns `0` without VAT or shipping.
3. Shipping is free exactly at the threshold and above it, and charged below it.
4. VAT does not count toward the free-shipping threshold.
5. Fractional totals round to the whole dong only after all amounts are added.
6. A negative price throws `RangeError`.
7. Zero, negative, and non-integer quantities each throw `RangeError`.
8. Supplied options are used, zero-price items follow the shipping rule, and
   input values and order remain unchanged.

## Harness and completion

- `AGENTS.md`: project stack, file locations, commands, style, and at least one
  `Never` rule. Never weaken tests or the gate to hide an implementation error.
- `scripts/check-format.js`: check `package.json` and all `.js` files under
  `src/`, `test/`, and `scripts/` for indentation tabs, trailing whitespace,
  and a missing final newline. Accept LF/CRLF, report errors without rewriting
  files, and fail for missing required paths, read errors, or symbolic links.
- `package.json`: keep `test` as `node --test`; provide `format:check` and
  `check`, which runs format first and then tests, preserving failures.
- `.github/workflows/ci.yml`: run `npm run check` on every push, using Linux,
  Node `24.x`, official pinned actions, and `contents: read` permissions.
- Review the diff and run `npm run check` from the repository root. Completion
  requires both format and all tests to pass, without skipped tests.
- Update `AI-LOG.md` with the actual tool, output kept, changes, rejected output,
  and work done by hand. Report CI success only after verifying a successful
  run for the corresponding commit.
