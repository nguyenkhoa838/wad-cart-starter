# Rules — IA#1: cartTotal with a harness

Áp dụng cho toàn bộ repository. Mục tiêu là hoàn thành đúng bài cá nhân IA#1, giữ code dễ giải thích và có bằng chứng kiểm chứng thực tế. Khi thực hiện một task, chỉ làm phần đã được giao; không tự triển khai các phần còn lại của bài.

## 1. Nguồn yêu cầu và phạm vi

- `README.md` là đặc tả chức năng của starter; rubric IA#1 quy định tiêu chí chấm và sản phẩm nộp. Rubric và template PDF hiện ở thư mục cha của repo; nếu checkout khác thiếu tài liệu nguồn, ghi rõ giới hạn thay vì suy đoán nội dung.
- Contract tại mục 3 là yêu cầu chức năng. Node `24.x`, style, không dùng devDependencies và thiết kế checker tại đây là lựa chọn của repo/brief harness; không trình bày chúng như yêu cầu nguyên văn của rubric.
- `BRIEF.md` là brief duy nhất, mô tả hàm/tests và harness. Dùng yêu cầu hiện tại cùng các chấp thuận còn hiệu lực để xác định phạm vi; brief không tự cấp quyền triển khai phần chưa được giao.
- Đối chiếu `package.json`, source và test thực tế trước khi dùng lệnh hoặc mô tả trạng thái. Không coi kế hoạch trong tài liệu là tính năng đã có.
- Nếu có mâu thuẫn ảnh hưởng kết quả, chỉ rõ nguồn và điểm mâu thuẫn; tiếp tục phần độc lập, chỉ hỏi lại phần chưa đủ thông tin để quyết định.
- Bài này là một hàm JavaScript và harness kiểm chứng. Không bổ sung giao diện, server, database, framework hoặc chức năng giỏ hàng khác.

## 2. Stack và vị trí file

| Thành phần | Quy định |
|---|---|
| Runtime | Node.js `24.x`; dùng cùng major version ở local và CI. |
| Ngôn ngữ | Plain JavaScript, ES modules; giữ `"type": "module"` trong `package.json`. |
| Dependencies | Không thêm `dependencies` hoặc `devDependencies`; dùng Node built-in. |
| Hàm cần triển khai | Named export `cartTotal(items, options)` trong `src/cart.js`. |
| Tests | `test/cart.test.js`, dùng `node:test` và `node:assert/strict`. |
| Rules | `AGENTS.md` tại root repo. |
| Harness | `scripts/check-format.js`, scripts trong `package.json`, `.github/workflows/ci.yml`; trạng thái kiểm chứng lưu trong `README.md` và `AI-LOG.md`. |
| Hồ sơ bài | `BRIEF.md`, `AI-LOG.md`; `SELF_ASSESSMENT_REPORT.md` được tạo khi giao bước báo cáo nộp. |

Không tạo lockfile hoặc chạy `npm install`, `npm ci`, `npx` để kéo thêm công cụ cho bài không có package phụ thuộc. Giữ tên hàm, đường dẫn import và metadata starter, trừ phần thay đổi được task yêu cầu.

## 3. Contract bắt buộc của cartTotal

```js
cartTotal(items, options)
// items: [{ name, price, qty }]
// options: { vatRate, freeShipFrom, shipFee }
// return: number, làm tròn đến đồng
```

Với giỏ không rỗng và input hợp lệ:

```text
subtotal = tổng(price × qty)
vat = subtotal × vatRate
shipping = subtotal >= freeShipFrom ? 0 : shipFee
result = Math.round(subtotal + vat + shipping)
```

- `vatRate: 0.08` nghĩa là 8%; không chia thêm cho 100.
- So sánh ngưỡng ship bằng subtotal trước VAT và shipping. Đúng ngưỡng được miễn ship.
- Chỉ làm tròn tổng cuối cùng; không làm tròn từng item, subtotal hoặc VAT trước khi cộng.
- Trả về `number`; không trả object, chuỗi tiền tệ hoặc kết quả chuỗi của `toFixed(0)`.
- `items: []` trả `0` ngay, không tính VAT/ship. Giỏ rỗng không cần đọc các trường options để thực hiện phép tính.
- Bất kỳ item nào có `price < 0` phải làm hàm ném `RangeError`.
- `qty` phải là số nguyên dương. Giá trị không thỏa điều kiện này phải làm hàm ném `RangeError`, kể cả `0`, số âm, số thập phân, chuỗi, `NaN`, `Infinity` hoặc `undefined` khi item thiếu `qty`. Không ép chuỗi thành số.
- Kiểm tra mọi item; một item hợp lệ trước đó không được che lỗi ở item sau.
- `price: 0` hợp lệ. Giỏ có item giá 0 vẫn là giỏ không rỗng và tính ship theo ngưỡng. Không dùng `subtotal === 0` để nhận diện giỏ rỗng.
- Đề không bắt `price` là số nguyên; cho phép giá lẻ trong phạm vi input hợp lệ. `name` không tham gia công thức.
- Ví dụ chuẩn: `180000 × 2 + 45000 × 1 = 405000`; VAT `32400`, ship `30000`, kết quả là số `467400`.

Ngoài quy tắc về `qty` ở trên, đề chưa quy định đầy đủ hành vi khi `items` không phải array, item không phải object, thiếu `price`/`name`, `price` là chuỗi/`NaN`/`Infinity`, options thiếu hoặc sai với giỏ không rỗng, rate/fee âm, hay tổng vượt giới hạn số an toàn. Không tự đặt defaults, ép kiểu, thêm validation hoặc error contract cho những trường hợp đó. Nếu task cần xử lý chúng, ghi giả định rõ trong brief trước khi triển khai; không trình bày giả định như yêu cầu chính thức.

## 4. Cách viết code và style

Các quy tắc thiết kế và style dưới đây là quy ước repo; tests kiểm hành vi, không bắt implementation phải có tên biến hoặc cấu trúc nội bộ cụ thể.

- Giữ hàm thuần: không sửa `items`, item hoặc `options`; không I/O, gọi mạng, đọc biến môi trường, dùng thời gian hoặc trạng thái global để tính tổng.
- Dùng biến local và luồng xử lý trực tiếp. Tránh class, abstraction hoặc helper chỉ để bọc một phép tính đơn giản.
- Dùng `const` mặc định; dùng `let` khi biến cần gán lại. Đặt tên thể hiện vai trò như `subtotal`, `vat`, `shipping`.
- Kiểm tra số nguyên bằng `Number.isInteger`; không dùng cách cắt phần thập phân để biến qty lỗi thành hợp lệ.
- Thụt dòng bằng 2 spaces, không tab; dùng single quotes cho chuỗi JavaScript và không semicolon, theo starter.
- Import theo ES modules, có phần mở rộng `.js` cho file local và tiền tố `node:` cho module built-in. JSON vẫn dùng double quotes đúng cú pháp.
- Không có whitespace cuối dòng; file văn bản kết thúc bằng newline. Chấp nhận LF hoặc CRLF, không đổi toàn bộ line endings khi không cần thiết.
- Giữ trailing comma ở cấu trúc nhiều dòng theo style đang có. Comment giải thích lý do hoặc điều kiện biên; không diễn giải lại từng phép cộng.
- Thay đổi nhỏ, đúng mục tiêu; không reformat hàng loạt, đổi tên file hoặc sửa tài liệu không liên quan.

## 5. Quy tắc kiểm thử

Giữ test ví dụ starter và expected `467400`. Mỗi test có một lý do thất bại rõ; tên test mô tả hành vi hoặc biên đang kiểm tra. Tính expected độc lập từ contract, không gọi lại helper của implementation để tạo expected.

Khi được giao triển khai hàm/tests, bao phủ các trường hợp dưới đây. Cột “Căn cứ” phân biệt mức bao phủ nêu trực tiếp trong rubric với các biên bổ sung để kiểm chứng contract của repo.

| Hành vi | Input/expected cần chứng minh | Căn cứ |
|---|---|---|
| Ví dụ chuẩn | Hai item của starter → `467400`. | Rubric |
| Giỏ rỗng | `[]` → số `0`, không cộng ship. | Rubric |
| Đúng ngưỡng ship | Subtotal `500000`, VAT `0.08` → `540000`. | Rubric |
| Giá âm | Ít nhất một item có `price: -1` → `RangeError`. | Rubric |
| Qty thập phân | `qty: 1.5` → `RangeError`. | Rubric |
| Qty bằng 0 hoặc âm | Tách trường hợp `qty: 0`, `qty: -1` → `RangeError`. | Contract số nguyên dương |
| Hai phía sát ngưỡng | Subtotal `499999` → `569999`; `500001` → `540001`. | Biên bổ sung |
| Ngưỡng xét trước VAT | Subtotal `490000`, VAT `0.08`, ship `30000` → `559200`. | Biên bổ sung |
| Làm tròn và kiểu trả về | `price: 10`, `qty: 1`, VAT `0.08`, ship `0` → số `11`. | Kiểm chứng contract |
| Chỉ làm tròn tổng cuối cùng | Hai item, mỗi item `price: 10.2`, `qty: 1`; VAT `0.5`, ship `0` → số `31`. | Bắt lỗi làm tròn sớm |
| Giỏ không rỗng, giá bằng 0 | `price: 0`, ngưỡng `500000`, ship `30000` → `30000`. | Biên bổ sung |

Trừ dòng ghi khác, dùng `vatRate: 0.08`, `freeShipFrom: 500000`, `shipFee: 30000` và qty `1` cho các giá đơn. Dùng `assert.equal` cho kết quả và `assert.throws(..., RangeError)` cho loại lỗi; không ràng buộc nguyên văn message chưa được đề quy định.

Bổ sung test item lỗi nằm sau item hợp lệ, VAT bằng 0 hoặc input không bị sửa khi cần kiểm chứng thiết kế. Không thêm test chỉ để kiểm chi tiết nội bộ, tăng số lượng hoặc áp đặt validation ngoài đặc tả. Không dùng snapshot, mock hay thư viện test mới cho hàm này.

Case giá lẻ ở trên có subtotal `20.4`, VAT `10.2`, tổng `30.6` → `31`. Làm tròn từng item, subtotal hoặc VAT trước khi cộng có thể cho `30`; case `price: 10` đơn lẻ không bắt được những lỗi đó. Với hai phía ngưỡng hoặc nhiều qty lỗi, viết thành các test riêng để mỗi kết quả có một lý do thất bại rõ.

## 6. Commands và cách báo kết quả

Chạy lệnh từ root `wad-cart-starter`, không từ thư mục cha chứa PDF hoặc workspace phân tích.

| Lệnh | Mục đích và điều kiện |
|---|---|
| `node --version` / `npm --version` | Xác nhận môi trường khi cần đối chiếu local/CI. |
| `npm test` | Lệnh hiện có: `node --test`, chạy bộ test. |
| `node --test test/cart.test.js` | Chạy riêng file test của cart. |
| `git status --short` / `git diff` | Kiểm tra phạm vi và các thay đổi chưa commit. |
| `git diff --check` / `git diff --cached --check` | Kiểm whitespace của thay đổi chưa stage/đã stage; không kiểm file untracked, không thay thế format gate. |
| `npm run format:check` | Lệnh hiện có: kiểm whitespace và đường dẫn bắt buộc bằng `node scripts/check-format.js`. |
| `npm run check` | Lệnh hiện có: chạy format rồi toàn bộ tests; dừng nếu format lỗi, truyền failure của tests. |

- Đọc `package.json` để xác nhận scripts đang có. Không báo lệnh dự kiến là lệnh đã chạy thành công.
- Khi task thêm/đổi scripts hoặc workflow, cập nhật bảng commands và hướng dẫn tương ứng trong `README.md`/rules cùng thay đổi đó.
- `git diff` cũng không hiển thị nội dung file untracked. Đọc các file mới từ danh sách `git status`; kiểm riêng nội dung, whitespace và newline của chúng trước khi bàn giao.
- Với task tài liệu/rules, review nội dung và diff; không sửa source/tests để tạo kết quả xanh và không chạy lại tests nếu không có lý do liên quan.
- Khi sửa hành vi hoặc harness, chạy kiểm tra phù hợp sau thay đổi. Báo lệnh, kết quả, exit code và lỗi còn tồn tại.
- Starter chưa implement có test đỏ do `Error: not implemented`. Chỉ coi đây là baseline khi source thực tế còn ở trạng thái đó; không mặc định mọi test fail là lỗi baseline.
- Chỉ báo “tests pass” khi lần chạy thực tế thành công. Chỉ báo “CI xanh” khi đã kiểm tra run của commit tương ứng; YAML tồn tại chưa phải bằng chứng CI đã chạy.

## 7. Quy tắc dựng và bảo trì harness

Phần này quy định thiết kế và cách bảo trì harness. Checker, scripts và workflow đã được tạo; kết quả kiểm chứng và giới hạn CI phải đọc từ `README.md` và `AI-LOG.md`, không suy ra từ việc các file tồn tại.

### Format checker

- Viết `scripts/check-format.js` bằng Node built-in, không thêm package.
- Kiểm `package.json` và mọi file `.js` dưới `src/`, `test/`, `scripts/`, bao gồm thư mục con.
- Đọc UTF-8, chấp nhận LF/CRLF. Phát hiện tab trong phần thụt dòng, whitespace cuối dòng và thiếu newline cuối file.
- Chỉ kiểm tra và báo lỗi; không tự sửa file. Báo đường dẫn và nguyên nhân, kèm số dòng khi áp dụng.
- Xác định root theo vị trí checker; dùng file/thư mục thông thường. Báo lỗi khi gặp symbolic link trong các thư mục được kiểm, không âm thầm bỏ qua hoặc theo vòng lặp thư mục.
- Vi phạm, thiếu đường dẫn bắt buộc hoặc lỗi đọc file phải làm checker exit `1`; chỉ exit `0` khi kiểm tra thành công. Đường dẫn bắt buộc gồm `package.json`, `src/`, `test/`, `scripts/`, `src/cart.js`, `test/cart.test.js`, `scripts/check-format.js`; không để thư mục rỗng hoặc thiếu file test tạo kết quả pass giả.
- Thử riêng các vi phạm trên bản sao tạm ngoài working tree; xác nhận LF/CRLF hợp lệ pass và từng vi phạm fail. Không để fixture lỗi trong source bài nộp.
- Công bố đúng giới hạn: checker này kiểm whitespace, không bảo đảm toàn bộ style 2 spaces, single quotes hoặc không semicolon. `node --check` chỉ kiểm cú pháp, không thay checker format.

### Gate và CI

- Giữ script `test` là `node --test`. Thêm `format:check` chạy `node scripts/check-format.js`; `check` chạy `npm run format:check && npm test`.
- Gate phải truyền exit code lỗi và dừng nếu format fail. Không bỏ test, nuốt lỗi, thêm `continue-on-error` hoặc chạy lệnh luôn trả thành công.
- CI trong `.github/workflows/ci.yml` chạy khi push mọi branch, trên Linux, checkout và setup Node `24.x` bằng actions chính thức, rồi chạy `npm run check`.
- CI chỉ cần quyền `contents: read`; không cài package hoặc cấu hình cache yêu cầu lockfile không tồn tại. Pin phiên bản actions cụ thể và kiểm tra tính tương thích khi tạo workflow.
- Nếu hàm còn là stub, gate/CI phải tiếp tục đỏ ở test. Không làm yếu gate để che trạng thái chưa implement.
- Checker tự viết đáp ứng phương án không thêm dependency; không khẳng định chắc chắn giảng viên chấp nhận hoặc tự suy ra điểm Harness.

## 8. Quy trình thực hiện task

1. Đọc yêu cầu hiện tại, file liên quan và `git status`; ghi nhận thay đổi có sẵn, không ghi đè việc đang làm của sinh viên.
2. Xác định phạm vi: rules, harness hay hàm/tests. Nếu chỉ được giao rules thì tạo rules và cập nhật hồ sơ liên quan; không coi đó là giao toàn bộ bài.
3. Với task triển khai, lưu brief thực tế trước khi code: mục tiêu, file được sửa, contract/errors, ràng buộc và cách kiểm chứng. Không viết brief sau rồi nói đó là prompt đã dùng từ đầu.
4. Sửa đúng file cần thiết, đọc diff, chạy checks phù hợp và sửa lỗi thuộc phạm vi task.
5. Cập nhật AI log và trạng thái README trung thực; bàn giao file đã sửa, kết quả kiểm chứng và phần còn thiếu.

Không cần xin lại xác nhận cho công việc đã được giao rõ. Nếu task chỉ là tài liệu, không tự commit/push, đổi remote, tạo branch hoặc triển khai các phần khác. Khi được giao commit/push, giữ thay đổi của task riêng biệt và push vào `origin` là fork cá nhân; không push vào `upstream` của giảng viên.

## 9. AI log và bằng chứng tự đánh giá

- Ghi `AI-LOG.md` trong quá trình task hoặc ngay sau mốc vừa hoàn thành; một entry cho mỗi task có sử dụng AI, giữ entry cũ và sáu trường `Tool`, `Asked for`, `Kept`, `Changed`, `Rejected`, `By hand`. Không đợi hoàn thành toàn bài rồi dựng lại nhật ký.
- `Asked for` tóm tắt task trong một câu; các trường khác ngắn nhưng cụ thể, đối chiếu được với thay đổi thực tế. Lệnh kiểm chứng và CI run cần thiết lưu trong `README.md`; dẫn chiếu file/test/commit thực tế trong báo cáo khi được giao bước tự đánh giá.
- Không bịa phần sinh viên tự viết, nội dung bị loại, hoạt động review, test pass hoặc commit. Chưa có hoạt động thì ghi đúng là chưa ghi nhận.
- Phân biệt baseline lịch sử, kết quả mới và công việc dự kiến. Cập nhật trạng thái hiện tại trong README khi thêm sản phẩm; giữ mốc cũ có ngữ cảnh trong AI log và lịch sử Git.
- Khi được giao báo cáo nộp, tạo `SELF_ASSESSMENT_REPORT.md` theo template và đặt ở root zip: MSSV/họ tên thật, tổng điểm, bảng bốn cột `Criterion`, `Max`, `I claim`, `Evidence`; đủ 5 tiêu chí với Max `30/20/20/15/15`, evidence cụ thể, `What I did not manage`, `What I would do differently`.
- Không bịa danh tính, deadline hoặc CI URL. Điểm tự nhận, kể cả điểm tối đa, phải dựa trên rubric và evidence; không tự chấm 100 chỉ vì tests xanh. Tổng trong bảng, tổng tự nhận và tên zip `<StudentID>_<total>.zip` phải khớp khi đóng gói bài.
- Sinh viên cần giải thích được công thức, điều kiện biên, tests và gate. Ưu tiên cách viết dễ đọc, không thêm kỹ thuật khó giải thích khi bài không cần.

## 10. Never — các điều cấm

- **Never** thêm dependency/devDependency, đổi sang TypeScript hoặc đưa framework ngoài phạm vi bài.
- **Never** sửa contract, bỏ test đúng, dùng `.skip`/`.todo` cho test bắt buộc hoặc làm yếu gate để hợp thức hóa implementation lỗi.
- **Never** bỏ qua item lỗi, lấy trị tuyệt đối của giá, tự sửa qty, bắt `RangeError` rồi trả `0` hoặc coi giỏ lỗi là giỏ rỗng.
- **Never** commit secrets, `.env`, `node_modules`, file tạm hoặc đưa API key, dữ liệu thật và bài của người khác vào prompt/log.
- **Never** xóa/ghi đè thay đổi có sẵn, reset lịch sử hoặc force push nếu task không yêu cầu rõ.
- **Never** báo task/harness/bài nộp hoàn tất khi bằng chứng cần thiết còn thiếu. Viết rõ phần đã làm và giới hạn của lần kiểm chứng.
