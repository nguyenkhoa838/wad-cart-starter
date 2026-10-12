# Plan - Bổ sung test hành vi cartTotal

Ngày: 12/10/2026. Sinh viên giao lập plan chi tiết, review kỹ rồi thực hiện bước bổ sung tests. Plan được lưu và review trước khi sửa `test/cart.test.js`. **Bước tests đã hoàn thành với 47 tests**, bao gồm hai case bổ sung sau review nhánh validation khi miễn ship. Kết quả cuối cùng ở mục 10 và evidence mục 13. Hàm bài vẫn còn stub.

## 1. Mục tiêu và phạm vi

Viết bộ tests kiểm hành vi theo `README.md`, contract/quy ước trong `AGENTS.md` mục 3-6 và ma trận đã chốt trong `BRIEF_IMPLEMENTATION.md`. Expected được tính độc lập; tests không kiểm tên biến hoặc cách tổ chức hàm.

| File | Thay đổi trong bước này |
|---|---|
| `TEST_PLAN.md` | Lưu brief cho bước tests, ma trận, review và tiêu chí hoàn thành. |
| `test/cart.test.js` | Giữ nguyên test ví dụ starter; thêm tests hành vi. |
| `AI-LOG.md` | Thêm entry ngắn theo sáu trường template. |
| `SELF_ASSESSMENT_EVIDENCE.md` | Cập nhật trạng thái tests và ghi kết quả kiểm chứng thực tế. |

Hàm hiện còn ném `Error('not implemented')`. Bước được giao là bổ sung tests trước triển khai hàm: source, README, rules, package, checker, workflow, brief cũ và thay đổi có sẵn được bảo toàn. Không thêm dependency, lockfile, skip/todo, commit hoặc push. Bản sao tham chiếu và biến thể lỗi chỉ dùng để QA tests trong thư mục tạm ngoài repo bài nộp; không được dùng kết quả của chúng để báo hàm bài đã đúng.

Baseline đầu bước: HEAD `dcdd05694f4839f9f2d4e01576eca12a954da77e`; Node `v24.11.1`, npm `11.6.2`; `npm test` có 1 test, 0 pass, 1 fail do stub, exit `1`. Đã lưu bản sao/hash 13 file trước khi làm, bao gồm các tài liệu đang có thay đổi chưa commit.

## 2. Contract làm oracle

- Subtotal là tổng `price × qty` của mọi item. VAT chỉ áp dụng lên subtotal với rate dạng tỷ lệ, ví dụ `0.08` là 8%.
- Shipping bằng `0` khi subtotal trước VAT/ship `>= freeShipFrom`, ngược lại bằng `shipFee`. Phí ship chỉ cộng một lần.
- Trả số, làm tròn tổng cuối cùng đến đồng. Giá lẻ hợp lệ; name không tham gia phép tính. Dùng options được truyền vào.
- Giỏ rỗng trả số `0`, không VAT/ship, kể cả options rút gọn `{ vatRate: 0.08 }` theo brief/rules đã review.
- Giá âm hoặc qty không phải số nguyên dương ném `RangeError`, dù lỗi ở item sau. Không ràng buộc message lỗi.
- Giữ input nguyên vẹn theo quy ước hàm thuần của repo, cả khi input hợp lệ và khi phát hiện lỗi.

Không áp đặt hành vi chưa đặc tả cho items không phải array, item không phải object, thiếu price/name, price chuỗi/NaN/Infinity, options thiếu/sai ở giỏ không rỗng, rate/fee âm hoặc tổng vượt giới hạn số an toàn. Các case qty sai kiểu thuộc contract số nguyên dương đã được rules/brief xác nhận. Không suy ra options hoàn toàn tùy chọn từ case giỏ rỗng có options rút gọn.

## 3. Ma trận trả số - 22 tests

Trừ override, options là `{ vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }`; qty là `1`; mọi item có name. Mỗi dòng là một test riêng; expected là literal dùng `assert.equal` từ `node:assert/strict`, kiểm đồng thời giá trị và kiểu number.

| ID | Hành vi/input | Override options | Expected |
|---|---|---|---:|
| C01 | Ví dụ starter: `180000 × 2 + 45000 × 1` | Mặc định | `467400` |
| C02 | Giỏ rỗng `[]` | Mặc định | `0` |
| C03 | Giỏ rỗng `[]`, options rút gọn | Chỉ `{ vatRate: 0.08 }` | `0` |
| C04 | Đúng ngưỡng: `500000 × 1` | Mặc định | `540000` |
| C05 | Sát dưới ngưỡng: `499999 × 1` | Mặc định | `569999` |
| C06 | Sát trên ngưỡng: `500001 × 1` | Mặc định | `540001` |
| C07 | VAT đẩy tổng qua ngưỡng, subtotal vẫn dưới: `490000 × 1` | Mặc định | `559200` |
| C08 | Làm tròn lên: `10 × 1` | `shipFee: 0` | `11` |
| C09 | Không làm tròn item/subtotal/VAT sớm: `10.2 × 1 + 10.2 × 1` | `vatRate: 0.5, shipFee: 0` | `31` |
| C10 | Giỏ không rỗng giá 0: `0 × 1` | Mặc định | `30000` |
| C11 | VAT bằng 0: `100 × 1` | `vatRate: 0` | `30100` |
| C12 | Options riêng, còn ship: `100 × 2` | `vatRate: 0.1, freeShipFrom: 250, shipFee: 7` | `227` |
| C13 | Options riêng, miễn ship: `100 × 3` | Như C12 | `330` |
| C14 | Làm tròn xuống: `10.49 × 1` | `vatRate: 0, shipFee: 0` | `10` |
| C15 | Đúng nửa đồng: `10.5 × 1` | `vatRate: 0, shipFee: 0` | `11` |
| C16 | Nhiều item cộng đúng ngưỡng: `250000 × 1 + 125000 × 2` | Mặc định | `540000` |
| C17 | Ship chỉ cộng một lần: `100 × 1 + 200 × 1` | `vatRate: 0, freeShipFrom: 1000, shipFee: 7` | `307` |
| C18 | Không tính VAT lên ship: `100 × 1` | `vatRate: 0.1, freeShipFrom: 200, shipFee: 10` | `120` |
| C19 | Mọi item đều nhân qty: `10 × 3 + 20 × 2 + 5 × 4` | `vatRate: 0, freeShipFrom: 1000, shipFee: 0` | `90` |
| C20 | Ngưỡng bằng 0 vẫn có hiệu lực: `0 × 1` | `freeShipFrom: 0` | `0` |
| C21 | Name không dùng làm giá: name `'999999'`, `100 × 2` | Như C12 | `227` |
| C22 | Ship lẻ cũng cộng trước khi làm tròn: `10.2 × 1` | `vatRate: 0, freeShipFrom: 100, shipFee: 0.4` | `11` |

C01-C13 kế thừa ma trận đã review. C14-C22 bổ sung nhánh làm tròn xuống/nửa đồng, tổng nhiều item/ngưỡng/ship, VAT không áp lên ship, giá trị 0 của options và làm tròn ship. C21 xác nhận name chỉ là thông tin; không test việc thiếu name vì input đó chưa được đặc tả.

## 4. Ma trận lỗi - 22 tests

Mỗi test chỉ có một item lỗi và mọi field còn lại hợp lệ. Dùng `assert.throws(..., RangeError)` để phân biệt RangeError với Error/TypeError; không chỉ kiểm có ném lỗi.

| ID | Input lỗi | Expected |
|---|---|---|
| E01 | Một item `price: -1, qty: 1` | `RangeError` |
| E02 | Qty `0` | `RangeError` |
| E03 | Qty `-1` | `RangeError` |
| E04 | Qty `1.5` | `RangeError` |
| E05 | Qty `'2'` | `RangeError` |
| E06 | Qty `NaN` | `RangeError` |
| E07 | Qty `Infinity` | `RangeError` |
| E08 | Qty `-Infinity` | `RangeError` |
| E09 | Qty `undefined` có field | `RangeError` |
| E10 | Qty `null` | `RangeError` |
| E11 | Qty `true` | `RangeError` |
| E12 | Qty `false` | `RangeError` |
| E13 | Qty object `{}` | `RangeError` |
| E14 | Qty array `[]` | `RangeError` |
| E15 | Qty BigInt `2n` | `RangeError` |
| E16 | Qty Symbol | `RangeError` |
| E17 | Qty function | `RangeError` |
| E18 | Item không có field qty | `RangeError` |
| E19 | Giá âm ở item sau một item hợp lệ | `RangeError` |
| E20 | Qty `0` ở item sau một item hợp lệ | `RangeError` |
| E21 | Item đầu `price: 600000, qty: 1`; item sau `price: -1, qty: 1`; tổng giá vẫn trên ngưỡng | `RangeError` |
| E22 | Item đầu `price: 600000, qty: 1`; item sau `price: 100, qty: 0`; giỏ vẫn trên ngưỡng | `RangeError` |

E02-E18 bao phủ các nhóm số không hợp lệ và các kiểu JavaScript khác number, cùng field thiếu. Có thể tạo tests bằng vòng lặp dữ liệu nhưng phải có tên riêng cho từng case, không gộp tất cả assert vào một test.

## 5. Tính thuần - 3 tests

| ID | Tình huống | Assertion |
|---|---|---|
| P01 | Input hợp lệ; freeze từng item, array và options | `assert.doesNotThrow` khi gọi hàm. |
| P02 | Input hợp lệ, mutable; item có thứ tự dễ phát hiện sort/reverse | Snapshot trước gọi, `assert.deepEqual` toàn bộ items/options sau gọi. |
| P03 | Input mutable; item lỗi nằm sau item hợp lệ | Xác nhận `RangeError`, rồi `assert.deepEqual` input với snapshot. |

P01 bắt các phép ghi lên input frozen trong ES modules. P02 bổ sung vì frozen có thể bỏ sót implementation chỉ sửa input mutable hoặc nuốt lỗi ghi. P03 kiểm nhánh validation; các assert cùng phục vụ việc xác nhận nhánh lỗi giữ nguyên input. Không kiểm I/O/global bằng mock; phần này thuộc review source khi triển khai hàm.

## 6. Trình tự và review trước code

1. Đọc rules/README/brief/source/test, ghi baseline và sao lưu thay đổi có sẵn.
2. Lưu plan này. Đối chiếu từng yêu cầu với C/E/P, tính lại 22 expected bằng số nguyên BigInt với đơn vị chia nhỏ ở script độc lập không import `cartTotal`. Kiểm literal trong bảng, tổng 47 tests, tên/ID duy nhất và các case lỗi chỉ có một nguyên nhân.
3. Review đối kháng: xác định case bắt việc dùng `>` thay `>=`, xét ngưỡng sau VAT/ship, hardcode options, bỏ qty/item, làm tròn sai hoặc sớm, trả chuỗi, không phân biệt empty/zero, sai loại lỗi/ép qty và sửa input. Bổ sung case có căn cứ nếu phát hiện lỗ hổng. Chỉ bắt đầu sửa tests sau khi review plan và số liệu đạt.
4. Thêm tests trong file hiện có bằng Node built-in, giữ nguyên test starter. Review diff trước chạy, expected literals, options/input mới cho mỗi case và không skip/todo.
5. Chạy `npm run check` trong repo. Dự kiến format đạt, 47 tests được runner nhận diện và fail vì stub. Xác nhận không có lỗi syntax/import, cancelled/skipped/todo. Test đỏ đúng baseline không phải bộ tests đã pass.
6. QA tests trên bản sao tạm: dùng một hàm tham chiếu riêng để xác nhận 47 tests pass; thay từng lỗi cố ý để xác nhận tests phát hiện. Không chỉnh source bài hoặc expected để làm bản sao pass. Nếu QA phát hiện thiếu case hoặc expected sai, sửa plan có căn cứ trước khi sửa tests rồi chạy lại phần bị ảnh hưởng.
7. Cập nhật log/evidence và review toàn bộ diff. So hash với đầu bước cho các file được bảo toàn; kiểm AI log giữ nguyên phần có sẵn; kiểm newline/whitespace cả file mới; lưu kết quả test và mutation ngoài repo.

## 7. Điều kiện hoàn thành bước tests

- Có plan đã review trước khi sửa tests; mọi expected đã kiểm toán độc lập; đủ các nhóm contract và biên có căn cứ.
- Có 47 tests riêng (22 kết quả số, 22 lỗi, 3 tính thuần), giữ ví dụ starter, không skip/todo/dependency và không oracle lấy từ implementation.
- Format đạt; runner nhận đủ tests và thất bại đúng do stub. QA tham chiếu đạt 47/47 và mọi biến thể lỗi được chọn bị phát hiện, với kết quả có thật trong evidence.
- Không ghi đè tài liệu có sẵn; source/harness/brief cũ giữ nguyên. Log/evidence phân biệt rõ kết quả repo và bản sao tham chiếu.
- Bài chưa hoàn tất Behaviour hoặc điều kiện `npm test` xanh cho bài nộp. Triển khai hàm, kiểm chứng gate xanh và CI của commit sau là bước tiếp theo.

Review không thể chứng minh mọi input/bug có thể tồn tại. Ma trận bao phủ các lớp hành vi và trường hợp biên của contract; mutation QA chỉ chứng minh phát hiện những biến thể đã chạy.

## 8. Biên bản review trước triển khai

Trạng thái: **review ban đầu đạt trước khi sửa tests** ngày 12/10/2026. Review bổ sung hai case được ghi dưới đây trước khi thêm chúng.

- Script độc lập `tmp/behaviour-tests-review-20261012/review-plan.mjs` trong workspace phân tích tính bằng BigInt: **22/22 expected đúng**, 20 ID lỗi và 3 ID tính thuần duy nhất, tổng **45 tests**. Exit `0`; không import hàm hoặc chạy tests bài. Hash của cả 13 file đầu bước còn nguyên ở mốc này.
- Đối chiếu contract: C01/C16/C19 kiểm mọi item và qty; C04-C07/C16 kiểm ba phía ngưỡng và subtotal trước VAT; C17/C18 kiểm ship một lần và VAT chỉ trên subtotal; C08/C09/C14/C15/C22 kiểm kiểu số và làm tròn cuối cùng; C02/C03/C10/C20 phân biệt rỗng, giá 0 và options bằng 0; C11-C13 kiểm options truyền vào; C21 kiểm name; E01-E20 kiểm lỗi/loại lỗi/từng kiểu qty và lỗi item sau; P01-P03 kiểm input nguyên vẹn.
- Review đối kháng xác nhận có case phân biệt từng nhóm bug dự kiến: `>` thay `>=`, ngưỡng sau VAT/ship, trả chuỗi, bỏ qty/item, VAT sai rate, bỏ/cộng ship sai, hardcode options, round xuống/lên hoặc round item/subtotal/VAT/ship sớm, coi subtotal 0 là giỏ rỗng, nhận qty sai/ép kiểu, chỉ validate item đầu, ném sai loại lỗi và sửa input. C09 cho `31` trong khi ba kiểu round sớm đã chốt cho `30`; C22 cho `11` thay `10` nếu round ship trước.
- Case chưa đặc tả được giữ ngoài suite; không thêm default/validation/error message. Các case biên bổ sung chỉ dựa vào công thức và quy ước repo. Tổng số test không được dùng để tự suy ra điểm.
- Kết quả/script chi tiết lưu ngoài repo tại `C:/Users/vongu/OneDrive/Documents/ChatGPT/IA#1 - Webdev/tmp/behaviour-tests-review-20261012/plan-review-results.json`. Từ mốc này bắt đầu bước 4.

### Review bổ sung nhánh validation khi miễn ship

- Sau QA ban đầu, review đường đi validation theo hai nhánh shipping phát hiện E01-E20 đều dùng giỏ dưới ngưỡng. Thử một biến thể trả tổng trước validation nếu giỏ được miễn ship: nó **pass 45/45 tests ban đầu**, chứng minh suite có lỗ hổng. Probe và kết quả lưu ngoài repo trong `free-shipping-validation-probe.mjs/.json/.tap`; bản plan trước bổ sung lưu trong `plan-before-free-shipping-review.md`.
- Chốt E21/E22 **trước khi sửa tests**: subtotal dự tính lần lượt `599999` và `600000`, đều vượt `500000`, nhưng giá âm hoặc qty 0 vẫn phải ném `RangeError` theo contract bất kể shipping. Mỗi case chỉ có một lỗi; không thêm yêu cầu validation mới.
- Nâng ma trận thành 22 case số + 22 case lỗi + 3 case tính thuần = **47 tests**. Giữ các case/expected trước; thêm hai biến thể chỉ bỏ validation giá hoặc qty khi miễn ship để QA chính xác nhánh này. Bắt đầu thêm E21/E22 sau mốc review bổ sung này.

## 9. Kết quả lần QA ban đầu - 45 tests

- Giữ nguyên test ví dụ starter; thêm 44 tests, tổng 45 tests với tên riêng, không skip/todo. Script QA đối chiếu lại literal/input/options của 20 fixture trong bảng code với fixture đã kiểm toán; C01 giữ nguyên, C03 kiểm trực tiếp options rút gọn.
- `node --check test/cart.test.js`: exit `0`. `npm run check`: format đạt trên 4 file; 45 tests, 0 pass, 45 fail, 0 cancelled/skipped/todo, exit `1` vì source còn stub. Đây là kết quả repo bài nộp.
- Bản sao tạm với hàm tham chiếu riêng: **45/45 tests pass**, exit `0`. Mutation QA chạy **44 biến thể lỗi**, đủ **44/44 bị tests phát hiện**, không survivor; mỗi run nhận đủ 45 tests, không cancelled/skipped/todo. Kết quả này kiểm chất lượng tests, chưa chứng minh source bài đúng.
- Các nhóm lỗi đã chạy gồm tính toán/VAT/qty/item, ngưỡng ship, options hardcode/giá trị 0, empty/zero, kiểu kết quả, làm tròn cuối/sớm, validation/loại lỗi/ép kiểu, name và mutation input ở cả nhánh thành công/lỗi. JSON/gate log của mốc ban đầu được bảo toàn trong `initial-45-test-qa-results.json` và `initial-45-repository-gate.log`; các TAP hiện có thuộc lần QA cuối cùng.
- Không thay đổi source hoặc harness; chưa triển khai hàm, commit/push hay xác minh CI cho bộ tests mới. Bước tiếp theo là triển khai hàm theo brief, chạy gate local xanh rồi kiểm chứng CI khi được giao.

## 10. Kết quả cuối cùng - 47 tests

- Thêm E21/E22 theo review bổ sung; giữ 45 tests trước đó. Tổng **47 tests**: 22 trả số, 22 lỗi, 3 tính thuần, không cancelled/skipped/todo. Test starter được giữ nguyên.
- `node --check test/cart.test.js` và `git diff --check`: exit `0`. `npm run check`: format đạt trên 4 file; **0 pass, 47 fail**, exit **1**. Source còn stub; không có lỗi syntax/import.
- Bản tham chiếu tạm: **47/47 pass**, exit **0**. Mutation QA cuối cùng: **46/46 biến thể bị phát hiện**, 0 survivor. Hai biến thể mới bỏ validation giá hoặc qty khi miễn ship bị E21/E22 phát hiện tương ứng.
- Expected số không đổi; chất lượng fixture numeric được đối chiếu lại, và SHA-256 của tests trong `test-qa-results.json` khớp file bàn giao. Kết quả gate, JSON và TAP chi tiết được lưu ngoài repo; mốc QA ban đầu vẫn được lưu riêng.
- Source, harness, rules, README và các brief cũ được bảo toàn; AI log/evidence đã cập nhật kết quả cuối cùng. Bước tests hoàn thành; Behaviour của hàm và gate xanh vẫn cần bước triển khai hàm tiếp theo.
