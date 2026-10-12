import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

const standardOptions = Object.freeze({
  vatRate: 0.08,
  freeShipFrom: 500000,
  shipFee: 30000,
})

// Expected totals are literals checked independently in TEST_PLAN.md.
const numericCases = [
  {
    name: 'C02 an empty cart returns zero without shipping',
    items: [],
    expected: 0,
  },
  {
    name: 'C04 shipping is free exactly at the threshold',
    items: [{ name: 'At threshold', price: 500000, qty: 1 }],
    expected: 540000,
  },
  {
    name: 'C05 shipping is charged one dong below the threshold',
    items: [{ name: 'Below threshold', price: 499999, qty: 1 }],
    expected: 569999,
  },
  {
    name: 'C06 shipping is free one dong above the threshold',
    items: [{ name: 'Above threshold', price: 500001, qty: 1 }],
    expected: 540001,
  },
  {
    name: 'C07 VAT does not count toward the shipping threshold',
    items: [{ name: 'Below before VAT', price: 490000, qty: 1 }],
    expected: 559200,
  },
  {
    name: 'C08 the final total rounds up to a whole dong',
    items: [{ name: 'Small amount', price: 10, qty: 1 }],
    options: { shipFee: 0 },
    expected: 11,
  },
  {
    name: 'C09 items subtotal and VAT are not rounded early',
    items: [
      { name: 'First fraction', price: 10.2, qty: 1 },
      { name: 'Second fraction', price: 10.2, qty: 1 },
    ],
    options: { vatRate: 0.5, shipFee: 0 },
    expected: 31,
  },
  {
    name: 'C10 a nonempty zero-price cart still pays shipping',
    items: [{ name: 'Free item', price: 0, qty: 1 }],
    expected: 30000,
  },
  {
    name: 'C11 a zero VAT rate adds no tax',
    items: [{ name: 'Untaxed', price: 100, qty: 1 }],
    options: { vatRate: 0 },
    expected: 30100,
  },
  {
    name: 'C12 supplied VAT and shipping fee are used',
    items: [{ name: 'Custom options', price: 100, qty: 2 }],
    options: { vatRate: 0.1, freeShipFrom: 250, shipFee: 7 },
    expected: 227,
  },
  {
    name: 'C13 the supplied free-shipping threshold is used',
    items: [{ name: 'Custom threshold', price: 100, qty: 3 }],
    options: { vatRate: 0.1, freeShipFrom: 250, shipFee: 7 },
    expected: 330,
  },
  {
    name: 'C14 the final total rounds down below half a dong',
    items: [{ name: 'Below half', price: 10.49, qty: 1 }],
    options: { vatRate: 0, shipFee: 0 },
    expected: 10,
  },
  {
    name: 'C15 exactly half a dong rounds up',
    items: [{ name: 'Exactly half', price: 10.5, qty: 1 }],
    options: { vatRate: 0, shipFee: 0 },
    expected: 11,
  },
  {
    name: 'C16 combined item totals can reach the shipping threshold',
    items: [
      { name: 'First half', price: 250000, qty: 1 },
      { name: 'Second half', price: 125000, qty: 2 },
    ],
    expected: 540000,
  },
  {
    name: 'C17 shipping is charged once for multiple items',
    items: [
      { name: 'First item', price: 100, qty: 1 },
      { name: 'Second item', price: 200, qty: 1 },
    ],
    options: { vatRate: 0, freeShipFrom: 1000, shipFee: 7 },
    expected: 307,
  },
  {
    name: 'C18 VAT applies to the subtotal without taxing shipping',
    items: [{ name: 'Taxed item', price: 100, qty: 1 }],
    options: { vatRate: 0.1, freeShipFrom: 200, shipFee: 10 },
    expected: 120,
  },
  {
    name: 'C19 every item price is multiplied by its own quantity',
    items: [
      { name: 'Three units', price: 10, qty: 3 },
      { name: 'Two units', price: 20, qty: 2 },
      { name: 'Four units', price: 5, qty: 4 },
    ],
    options: { vatRate: 0, freeShipFrom: 1000, shipFee: 0 },
    expected: 90,
  },
  {
    name: 'C20 a zero shipping threshold makes a zero-price cart ship free',
    items: [{ name: 'Free item', price: 0, qty: 1 }],
    options: { freeShipFrom: 0 },
    expected: 0,
  },
  {
    name: 'C21 a numeric-looking name does not affect the total',
    items: [{ name: '999999', price: 100, qty: 2 }],
    options: { vatRate: 0.1, freeShipFrom: 250, shipFee: 7 },
    expected: 227,
  },
  {
    name: 'C22 fractional shipping is added before the final rounding',
    items: [{ name: 'Fractional price', price: 10.2, qty: 1 }],
    options: { vatRate: 0, freeShipFrom: 100, shipFee: 0.4 },
    expected: 11,
  },
]

for (const { name, items, options, expected } of numericCases) {
  test(name, () => {
    assert.equal(cartTotal(items, { ...standardOptions, ...options }), expected)
  })
}

test('C03 an empty cart returns zero with reduced options', () => {
  assert.equal(cartTotal([], { vatRate: 0.08 }), 0)
})

test('E01 a negative price throws RangeError', () => {
  const items = [{ name: 'Invalid price', price: -1, qty: 1 }]
  assert.throws(() => cartTotal(items, { ...standardOptions }), RangeError)
})

const invalidQuantityCases = [
  { name: 'E02 zero quantity', qty: 0 },
  { name: 'E03 negative quantity', qty: -1 },
  { name: 'E04 fractional quantity', qty: 1.5 },
  { name: 'E05 numeric string quantity', qty: '2' },
  { name: 'E06 NaN quantity', qty: NaN },
  { name: 'E07 positive Infinity quantity', qty: Infinity },
  { name: 'E08 negative Infinity quantity', qty: -Infinity },
  { name: 'E09 explicit undefined quantity', qty: undefined },
  { name: 'E10 null quantity', qty: null },
  { name: 'E11 true quantity', qty: true },
  { name: 'E12 false quantity', qty: false },
  { name: 'E13 object quantity', qty: {} },
  { name: 'E14 array quantity', qty: [] },
  { name: 'E15 BigInt quantity', qty: 2n },
  { name: 'E16 Symbol quantity', qty: Symbol('qty') },
  { name: 'E17 function quantity', qty: () => 2 },
  { name: 'E18 missing quantity' },
]

for (const quantityCase of invalidQuantityCases) {
  test(`${quantityCase.name} throws RangeError`, () => {
    const item = { name: 'Invalid quantity', price: 100 }
    if (Object.hasOwn(quantityCase, 'qty')) item.qty = quantityCase.qty
    assert.throws(() => cartTotal([item], { ...standardOptions }), RangeError)
  })
}

test('E19 a negative price after a valid item throws RangeError', () => {
  const items = [
    { name: 'Valid first', price: 100, qty: 1 },
    { name: 'Invalid later', price: -1, qty: 1 },
  ]
  assert.throws(() => cartTotal(items, { ...standardOptions }), RangeError)
})

test('E20 an invalid quantity after a valid item throws RangeError', () => {
  const items = [
    { name: 'Valid first', price: 100, qty: 1 },
    { name: 'Invalid later', price: 100, qty: 0 },
  ]
  assert.throws(() => cartTotal(items, { ...standardOptions }), RangeError)
})

test('E21 a negative price still throws RangeError in a free-shipping cart', () => {
  const items = [
    { name: 'Over threshold', price: 600000, qty: 1 },
    { name: 'Invalid later', price: -1, qty: 1 },
  ]
  assert.throws(() => cartTotal(items, { ...standardOptions }), RangeError)
})

test('E22 an invalid quantity still throws RangeError in a free-shipping cart', () => {
  const items = [
    { name: 'Over threshold', price: 600000, qty: 1 },
    { name: 'Invalid later', price: 100, qty: 0 },
  ]
  assert.throws(() => cartTotal(items, { ...standardOptions }), RangeError)
})

test('P01 frozen items array and options are accepted without mutation', () => {
  const items = Object.freeze([
    Object.freeze({ name: 'Zebra', price: 200, qty: 2 }),
    Object.freeze({ name: 'Apple', price: 100, qty: 1 }),
  ])
  const options = Object.freeze({ ...standardOptions })
  assert.doesNotThrow(() => cartTotal(items, options))
})

test('P02 mutable items and options retain their original values and order', () => {
  const items = [
    { name: 'Zebra', price: 200, qty: 2 },
    { name: 'Apple', price: 100, qty: 1 },
  ]
  const options = { ...standardOptions }
  const before = structuredClone({ items, options })
  cartTotal(items, options)
  assert.deepEqual({ items, options }, before)
})

test('P03 validation failure leaves items and options unchanged', () => {
  const items = [
    { name: 'Valid first', price: 100, qty: 2 },
    { name: 'Invalid later', price: -1, qty: 1 },
  ]
  const options = { ...standardOptions }
  const before = structuredClone({ items, options })
  assert.throws(() => cartTotal(items, options), RangeError)
  assert.deepEqual({ items, options }, before)
})
