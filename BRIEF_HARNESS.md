# Brief — Dựng harness cho IA#1: cartTotal

Ngày: 12/10/2026. Soạn ban đầu để review; **được sinh viên giao review kỹ và dựng gate ngày 12/10/2026**. Cập nhật phạm vi này trước khi triển khai; không tự commit/push.

Phạm vi tiếp theo cùng ngày: sinh viên yêu cầu kiểm tra kỹ gate một lần nữa, tiếp tục cấu hình CI và cho chạy trên GitHub. Task này gồm review lại, commit/push harness và hồ sơ liên quan vào `origin` là fork cá nhân, xác minh run của commit đã push và lưu bằng chứng. Không triển khai hàm/tests; CI dự kiến đỏ vì hàm còn stub.

Dựng rules file, gate test + format và CI chạy khi push cho `wad-cart-starter`. Dùng JavaScript ES modules, Node `24.x`, `node:test` và `node:assert/strict`. **Không thêm dependencies hoặc devDependencies.**

## 1. Phạm vi

Chỉ tạo/sửa các file sau:

| File | Công việc |
|---|---|
| `BRIEF_HARNESS.md` | Ghi phạm vi đã được giao và kế hoạch kiểm chứng trước khi code. |
| `AGENTS.md` | Giữ rules đã review; cập nhật commands và giới hạn checker theo thực tế. |
| `package.json` | Thêm `format:check`, `check`; giữ `test: node --test`, metadata và ES modules. |
| `scripts/check-format.js` | Checker format dùng Node built-in. |
| `.github/workflows/ci.yml` | CI chạy gate khi push. |
| `README.md` | Bổ sung commands và phạm vi checker; giữ đặc tả. |
| `AI-LOG.md` | Ghi task theo template, giữ entry cũ. |
| `SELF_ASSESSMENT_EVIDENCE.md` | Lưu kết quả checks/CI thực tế. |

Các file khác giữ nguyên, đặc biệt `src/cart.js`, `test/cart.test.js` và `.gitignore`. Giữ các thay đổi tài liệu đang có; không tạo lockfile hoặc triển khai hàm/tests trong task này.

## 2. Contract cần bảo toàn

`cartTotal(items, options)` nhận `items: [{ name, price, qty }]`, `options: { vatRate, freeShipFrom, shipFee }`:

- `subtotal = sum(price × qty)`; VAT bằng `subtotal × vatRate`.
- Shipping bằng `0` khi `subtotal >= freeShipFrom`, ngược lại bằng `shipFee`.
- Trả `number` là tổng subtotal + VAT + shipping, làm tròn tổng cuối cùng đến đồng. Giỏ rỗng trả `0`, không VAT/ship.
- Giá âm hoặc qty không phải số nguyên dương (0, âm, thập phân) ném `RangeError`.
- Ví dụ `180000 × 2 + 45000 × 1`, VAT `0.08`, ngưỡng `500000`, ship `30000` → số `467400`.

Không tự thêm default/validation ngoài đề, trả chuỗi từ `toFixed(0)` hoặc bỏ qua lỗi input.

## 3. Harness cần dựng

1. **Rules:** ghi stack, vị trí source/tests, commands và style theo starter (2 spaces, single quotes, không semicolon, import có `.js`). Có quy tắc `Never`: không thêm package, làm yếu tests/gate, commit secrets, `.env` hoặc `node_modules`.
2. **Format checker:** kiểm `package.json` và mọi `.js` dưới `src/`, `test/`, `scripts/`, kể cả thư mục con. Phát hiện tab thụt dòng, whitespace cuối dòng và thiếu newline cuối file. Đọc UTF-8, chấp nhận LF/CRLF; chỉ báo lỗi, không tự sửa. Vi phạm, thiếu đường dẫn bắt buộc hoặc lỗi đọc file phải báo rõ file/lý do (kèm dòng khi áp dụng) và exit `1`; hợp lệ exit `0`. Bắt buộc có ba thư mục trên cùng `package.json`, `src/cart.js`, `test/cart.test.js`, `scripts/check-format.js`; không bỏ qua đường dẫn có kiểu không phù hợp hoặc symbolic link. Xác định root theo vị trí checker để không kiểm nhầm theo cwd.
3. **Commands:** `npm run format:check` chạy `node scripts/check-format.js`; `npm run check` chạy format rồi `npm test`, truyền failure thật. Không dùng riêng kiểm cú pháp thay format, bỏ test hoặc nuốt exit code.
4. **CI:** chạy trên push mọi branch, checkout và setup Node `24.x` bằng actions chính thức trên Linux, rồi chạy `npm run check`. Chỉ cần quyền đọc contents; không cài package, chạy `npm ci` hoặc dùng `continue-on-error`.

Checker tự viết là phương án giữ “no dependencies”; chỉ kiểm các quy tắc whitespace trên. Rubric chưa xác nhận riêng việc chấp nhận checker này, nên không khẳng định chắc chắn đạt dải điểm cao nhất.

## 4. Kiểm chứng và bàn giao

- Đọc diff trước khi chạy; xác nhận đúng phạm vi và không có package mới. Trên bản sao tạm ngoài working tree, xác nhận LF/CRLF hợp lệ pass; thử riêng từng vi phạm, cả ở thư mục con và `package.json`, cùng thiếu file/thư mục bắt buộc và lỗi đọc. Kiểm tra checker không sửa file.
- Chứng minh gate dừng trước tests khi format fail; format pass nhưng test fail phải truyền exit code lỗi. Dùng test tổng hợp chỉ trong bản sao tạm để chứng minh nhánh format + tests pass có exit `0`; đây không phải bằng chứng `cartTotal` đúng. Đọc/parse workflow và đối chiếu inputs, phiên bản actions với nguồn chính thức; chưa có run thì không báo CI đã chạy.
- Baseline đang có 1 test fail vì `Error: not implemented`. `npm test` và `npm run check` phải tiếp tục fail vì lỗi đó; CI cũng dự kiến đỏ. Test/CI xanh của bài hoàn chỉnh thuộc task triển khai hàm/tests sau.
- Bàn giao diff, commands/exit codes và log/evidence trung thực để sinh viên review. Commit/push khi được yêu cầu; khi đã push, ghi CI run URL, commit SHA và kết quả. Chưa có run thì ghi CI chưa xác minh.

Nguồn đã đối chiếu: rubric IA#1, Session 02 và repo; chi tiết nguồn/baseline lưu tại mục 7 của `SELF_ASSESSMENT_EVIDENCE.md`.
