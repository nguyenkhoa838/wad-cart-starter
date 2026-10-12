# Brief - Triển khai cartTotal và tests cho IA#1

Ngày: 12/10/2026. **Đã chốt nội dung và review trước khi code** theo yêu cầu sinh viên. Ở mốc soạn/review brief ban đầu, hàm/tests chưa được triển khai.

Bước tiếp theo cùng ngày đã bổ sung/review bộ 47 tests theo `TEST_PLAN.md`; source vẫn là stub và gate local đỏ. **Sinh viên hiện giao triển khai hàm**: sửa source, cập nhật trạng thái README/log/evidence và brief này; giữ nguyên bộ 47 tests, expected và harness. Phạm vi này được cập nhật trước khi thay stub; không tự commit/push trong bước triển khai hàm.

Triển khai named export `cartTotal(items, options)` đúng README và `AGENTS.md`, bổ sung tests có expected độc lập, đưa gate local về xanh. Giữ JavaScript ES modules, Node `24.x`, `node:test`, `node:assert/strict`; **no dependencies**, kể cả devDependencies.

## 1. Phạm vi triển khai

| File được sửa khi triển khai | Công việc |
|---|---|
| `BRIEF_IMPLEMENTATION.md` | Ghi phạm vi triển khai hiện được giao trước khi code và trạng thái sau kiểm chứng. |
| `src/cart.js` | Thay stub bằng hàm tính tổng; giữ tên export và chữ ký. |
| `test/cart.test.js` | Bộ 47 tests đã hoàn tất ở bước trước; giữ nguyên file trong bước triển khai hàm này. |
| `README.md` | Chỉ cập nhật đoạn trạng thái hàm/gate sau khi có kết quả mới; giữ đặc tả và commands. |
| `AI-LOG.md` | Thêm entry task triển khai theo sáu trường của template, giữ lịch sử. |
| `SELF_ASSESSMENT_EVIDENCE.md` | Cập nhật trạng thái và bằng chứng chạy checks/CI có thật, giữ baseline. |

Giữ nguyên `package.json`, checker, workflow, rules, brief harness, `TEST_PLAN.md`, remote và các file ngoài bảng. Không tạo helper/module mới, lockfile, giao diện hoặc báo cáo tự chấm trong task triển khai này. Nếu phát hiện vấn đề ngoài phạm vi, ghi rõ trước khi mở rộng thay đổi.

## 2. Contract và lỗi

Input: `items: [{ name, price, qty }]`, `options: { vatRate, freeShipFrom, shipFee }`. Với giỏ không rỗng và input hợp lệ:

```text
subtotal = tổng(price × qty)
vat = subtotal × vatRate
shipping = subtotal >= freeShipFrom ? 0 : shipFee
result = Math.round(subtotal + vat + shipping)
```

- Trả `number`; chỉ làm tròn tổng cuối cùng. `vatRate: 0.08` là 8%. Ngưỡng ship xét theo subtotal trước VAT/ship; đúng ngưỡng được miễn ship. Dùng các giá trị options được truyền vào, không hardcode ví dụ.
- `items: []` trả số `0`, không VAT/ship; xử lý trước các phép tính cần options. Case `([], { vatRate: 0.08 })` cũng trả `0`; không từ đó suy ra options tùy chọn với giỏ không rỗng.
- Kiểm tra mọi item. `price < 0` ném `RangeError`; qty không phải số nguyên dương ném `RangeError`. Dùng `Number.isInteger(qty)` và điều kiện dương, không ép kiểu hoặc cắt phần thập phân. Item lỗi sau item hợp lệ vẫn phải bị phát hiện.
- Qty lỗi gồm `0`, số âm, thập phân, chuỗi, `NaN`, `Infinity`, `undefined` khi thiếu qty; không cố định message lỗi chưa được đặc tả.
- `price: 0` hợp lệ; giỏ có item giá 0 vẫn có thể tính ship. Giá lẻ hợp lệ; `name` không tham gia công thức. Giữ hàm thuần, không sửa array, item hoặc options, không I/O hay trạng thái global.
- Ngoài quy tắc qty trên, chưa đặc tả hành vi cho items không phải array, item không phải object, thiếu price/name, price là chuỗi/NaN/Infinity, options thiếu/sai với giỏ không rỗng, rate/fee âm hoặc tổng vượt giới hạn số an toàn. Không thêm defaults, ép kiểu, validation/error contract hoặc tests áp đặt hành vi cho các trường hợp này.

## 3. Ma trận tests

Ma trận dưới đây là kế hoạch ban đầu của brief trước khi viết tests. Bộ tests thực tế đã mở rộng thành 47 tests (22 case số, 22 case lỗi, 3 case tính thuần), được lưu/review trong `TEST_PLAN.md` và kiểm chứng ở evidence mục 13. Bước triển khai hàm dùng nguyên bộ tests thực tế đó, bao gồm validation ở cả hai nhánh shipping; không giảm về ma trận ban đầu.

Trừ trường hợp ghi khác, options là `{ vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }`, qty là `1`, mỗi item có name bất kỳ. Expected là số literal, dùng `assert.equal` từ `node:assert/strict` để kiểm đồng thời giá trị và kiểu number. Mỗi dòng/trường hợp là một test có tên riêng.

| Case | Input/override | Expected | Căn cứ |
|---|---|---:|---|
| C01 Ví dụ starter | `180000 × 2 + 45000 × 1` | `467400` | Rubric |
| C02 Giỏ rỗng | `items: []`, options đầy đủ | `0` | Rubric |
| C03 Giỏ rỗng với options rút gọn | `items: []`, chỉ `{ vatRate: 0.08 }` | `0` | Ví dụ slide đã đối chiếu; rules |
| C04 Đúng ngưỡng | `price: 500000` | `540000` | Rubric |
| C05 Sát dưới ngưỡng | `price: 499999` | `569999` | Biên bổ sung |
| C06 Sát trên ngưỡng | `price: 500001` | `540001` | Biên bổ sung |
| C07 Ngưỡng trước VAT | `price: 490000` | `559200` | Biên bổ sung |
| C08 Làm tròn đến đồng | `price: 10`, `shipFee: 0` | `11` | Contract |
| C09 Không làm tròn sớm | Hai item `price: 10.2`, qty `1`; `vatRate: 0.5`, `shipFee: 0` | `31` | Contract; bắt làm tròn item/subtotal/VAT sớm |
| C10 Giá 0 trong giỏ không rỗng | Một item `price: 0` | `30000` | Biên bổ sung |
| C11 VAT bằng 0 | `price: 100`, `vatRate: 0` | `30100` | Biên bổ sung |
| C12 Options khác ví dụ, còn ship | `price: 100`, qty `2`; options `{ vatRate: 0.1, freeShipFrom: 250, shipFee: 7 }` | `227` | Contract; không hardcode rate/fee |
| C13 Options khác ví dụ, miễn ship | `price: 100`, qty `3`; cùng options C12 | `330` | Contract; không hardcode ngưỡng |

Tests lỗi dùng `assert.throws(..., RangeError)`; mỗi test chỉ có một loại input lỗi, các trường khác hợp lệ:

| Case | Input lỗi | Expected |
|---|---|---|
| E01 Giá âm | Một item `price: -1`, qty `1` | `RangeError` |
| E02-E08 Qty không hợp lệ | Tách riêng qty `0`, `-1`, `1.5`, `'2'`, `NaN`, `Infinity` và item không có field qty; price `100` | Mỗi trường hợp `RangeError` |
| E09 Giá âm ở item sau | Item đầu `price: 100`, qty `1`; item sau `price: -1`, qty `1` | `RangeError` |
| E10 Qty lỗi ở item sau | Item đầu `price: 100`, qty `1`; item sau `price: 100`, qty `0` | `RangeError` |

Thêm test riêng cho input không bị sửa: dùng input hợp lệ với từng item, array items và options đều `Object.freeze`; gọi hàm phải không ném lỗi (`assert.doesNotThrow`). Đây là quy ước hàm thuần của repo. Review code để kiểm việc không dùng I/O/global; không thêm mock hoặc tests ràng buộc tên biến/cấu trúc nội bộ. Nếu dùng vòng lặp tạo tests qty, mỗi case phải có tên riêng; không dùng `.skip`/`.todo`.

## 4. Ràng buộc code và kiểm chứng

Giữ xử lý trực tiếp, dễ giải thích; không thêm class/abstraction không cần thiết. Theo style starter: 2 spaces, single quotes, không semicolon, import local có `.js`, built-in có `node:`. Không bắt lỗi rồi trả 0, lấy trị tuyệt đối của giá, sửa qty hoặc thay expected để hợp thức hóa hàm sai.

Thực hiện từ root `wad-cart-starter`:

1. Đọc brief/rules và `git status`; giữ thay đổi có sẵn. Baseline trước bước hàm: HEAD `dcdd05694f4839f9f2d4e01576eca12a954da77e`, hàm stub, 47 tests; gate local đỏ do `not implemented`, theo evidence mục 13. Run CI mục 11 là baseline harness cũ, không phải run cho implementation.
2. Bước tests trước đã xong theo `TEST_PLAN.md`: 47 tests fail vì stub, không lỗi cú pháp/import; 22 expected trả số đã kiểm toán độc lập. Giữ nguyên tests khi triển khai hàm. C09 có subtotal `20.4`, VAT `10.2`, tổng `30.6` làm tròn thành `31`.
3. Triển khai hàm, review diff về contract, đủ mọi item và tính thuần. Chạy `npm run check`; hoàn tất local khi format và tất cả tests pass, exit `0`, không skip/todo. Nếu fail, sửa nguyên nhân thuộc phạm vi rồi chạy lại.
4. Cập nhật trạng thái README, AI log và evidence theo kết quả thực tế. Kiểm `git diff --check` và nội dung file mới nếu có; bàn giao diff, số test/pass/fail, commands/exit codes và giới hạn còn lại.
5. Commit/push theo phạm vi task được giao. Khi push vào fork `origin`, xác minh run CI có SHA trùng commit; chỉ báo CI xanh khi run `success`. Trước bước đó ghi chưa xác minh CI của implementation, không dùng run đỏ của harness làm bằng chứng code mới.

Nguồn: `README.md` (đặc tả), `AGENTS.md` mục 3-6 (contract/quy ước), `../IA#1 rubric — cartTotal.pdf` mục Behaviour, Tests, Brief; nguồn slide/baseline đã lưu trong evidence. Ma trận trên giữ kế hoạch ban đầu; bộ 47 tests thực tế và kết quả bước tests lưu trong `TEST_PLAN.md`/evidence mục 13.

## 5. Kết quả triển khai hàm

Ngày 12/10/2026: đã thay stub bằng hàm thuần, kiểm giá/qty của mọi item trước VAT/ship, xử lý giỏ rỗng và chỉ làm tròn tổng cuối. Giữ nguyên bộ 47 tests và harness; không thêm package hoặc validation/defaults ngoài contract.

`node --check src/cart.js`: exit `0`. `npm run check`: format đạt trên 4 file; **47 tests pass, 0 fail, 0 cancelled/skipped/todo**, exit `0` trên source repo thật. README, AI log và evidence đã cập nhật. Kết quả chi tiết tại evidence mục 14; CI của implementation chưa được xác minh, chưa commit/push trong bước này.

## 6. Phạm vi review, commit và xác minh CI

Ngày 12/10/2026, sinh viên giao review lại hàm, sửa lỗi nếu có, chạy lại gate, commit và xác nhận CI xanh. Đọc lại source/tests và contract; nếu có lỗi, chỉ sửa hành vi thuộc đặc tả rồi chạy gate lại. Cập nhật brief/log/evidence, giữ các thay đổi từ các bước trước và commit phần implementation/tests/hồ sơ đã review. Push vào fork `origin` trên `main`; xác minh run có `head_sha` trùng commit và kết luận `success`, đọc job/log thực tế. Kết quả tại evidence mục 15; phạm vi này thay thế giới hạn chưa commit/push của bước triển khai trước.
