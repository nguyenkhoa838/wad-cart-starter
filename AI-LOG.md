# AI-LOG — IA#1: cartTotal with a harness

`BRIEF.md` là bản tổng hợp ngày 12/10/2026 từ các brief đã dùng ở các bước
harness và triển khai. Tên file cũ trong những entry dưới đây phản ánh lịch sử;
bản gốc vẫn tra được trong Git, dù các file phụ đã được bỏ khỏi repo hiện tại.

## 2026-10-12 — Phân tích yêu cầu

- **Tool:** OpenAI Codex.
- **Asked for:** Đối chiếu đề, rubric và starter.
- **Kept:** Contract, ma trận test và checklist nộp bài.
- **Changed:** Đối chiếu template PDF, tạo AI log.
- **Rejected:** Chưa ghi nhận.
- **By hand:** Review yêu cầu, contract và checklist nộp bài.

## 2026-10-12 — Chuẩn bị repo

- **Tool:** OpenAI Codex.
- **Asked for:** Tạo fork, kết nối repo local.
- **Kept:** Fork cá nhân, nhánh main và lịch sử starter.
- **Changed:** Cấu hình remotes/tracking, thêm `REPOSITORY_LINK.md`.
- **Rejected:** Chưa ghi nhận.
- **By hand:** Review link fork và cấu hình repo.

## 2026-10-12 — Chạy test ban đầu

- **Tool:** OpenAI Codex.
- **Asked for:** Chạy `npm test` để xác lập baseline.
- **Kept:** 1 test fail do `Error: not implemented`.
- **Changed:** Lưu baseline; source/tests giữ nguyên.
- **Rejected:** Chưa ghi nhận.
- **By hand:** Review kết quả test và nguyên nhân lỗi ban đầu.

## 2026-10-12 — Chuẩn hóa log và evidence

- **Tool:** OpenAI Codex.
- **Asked for:** Rút gọn log, tách bằng chứng.
- **Kept:** Sáu trường template và file evidence riêng.
- **Changed:** Chuyển chi tiết kiểm chứng sang evidence.
- **Rejected:** Chép nguyên yêu cầu và bằng chứng dài vào log vì thiếu trọng tâm.
- **By hand:** Review nội dung log và cách tách evidence.

## 2026-10-12 — Soạn brief harness

- **Tool:** OpenAI Codex.
- **Asked for:** Soạn brief ngắn để review.
- **Kept:** `BRIEF_HARNESS.md`: scope, contract, no dependencies, gate/CI.
- **Changed:** Rút khoảng 120 xuống 51 dòng; giữ dạng brief nháp.
- **Rejected:** Diễn giải dài, lặp ý.
- **By hand:** Review bản nháp brief và phạm vi harness.

## 2026-10-12 — Viết rules

- **Tool:** OpenAI Codex.
- **Asked for:** Viết rules cụ thể cho IA#1.
- **Kept:** `AGENTS.md`: stack, contract, style, tests, commands, Never.
- **Changed:** Tách yêu cầu đề khỏi quy ước repo; phân biệt lệnh có sẵn/dự kiến.
- **Rejected:** Chưa ghi nhận.
- **By hand:** Review rules về stack, style và Never.

## 2026-10-12 — Review rules

- **Tool:** OpenAI Codex.
- **Asked for:** Kiểm tra tính đúng, đủ và nhất quán.
- **Kept:** Contract và harness không thêm package.
- **Changed:** Làm rõ qty, làm tròn, checker và tự đánh giá.
- **Rejected:** Mô tả thiếu field quá rộng, cấm tự chấm 100 tuyệt đối và điều kiện vòng lặp.
- **By hand:** Review các quy tắc được sửa và mức phù hợp với đề.

## 2026-10-12 — Phân tích gate

- **Tool:** OpenAI Codex.
- **Asked for:** Giải thích gate trước triển khai.
- **Kept:** Phạm vi checker/gate/CI và các case pass/fail.
- **Changed:** Làm rõ gate sẽ đỏ do stub; chưa triển khai.
- **Rejected:** Chưa ghi nhận.
- **By hand:** Review luồng gate và các case pass/fail.

## 2026-10-12 — Dựng harness

- **Tool:** OpenAI Codex.
- **Asked for:** Review, dựng gate format/tests và CI.
- **Kept:** Checker built-in, scripts/workflow; 42/42 case đúng dự kiến.
- **Changed:** Chốt brief trước code, thêm harness; hàm/tests vẫn là starter.
- **Rejected:** Chưa ghi nhận.
- **By hand:** Review checker, scripts và workflow CI.

## 2026-10-12 — Kiểm chứng harness và CI

- **Tool:** OpenAI Codex.
- **Asked for:** Kiểm tra gate, chạy CI trên fork.
- **Kept:** 42/42 case; CI đạt format, test fail do stub.
- **Changed:** Review actions, commit/push harness, lưu bằng chứng CI.
- **Rejected:** Chưa ghi nhận; review không phát hiện lỗi gate.
- **By hand:** Review kết quả gate và trạng thái CI khi hàm còn stub.

## 2026-10-12 — Chốt brief triển khai

- **Tool:** OpenAI Codex.
- **Asked for:** Chốt, review brief cho hàm và tests.
- **Kept:** `BRIEF_IMPLEMENTATION.md`; kiểm lại 13/13 expected số.
- **Changed:** Làm rõ input chưa đặc tả; thêm case chống hardcode, làm tròn sớm, input frozen.
- **Rejected:** Test `typeof` trùng strict equality; validation/defaults ngoài đặc tả.
- **By hand:** Review scope triển khai, contract và các case dự kiến.

## 2026-10-12 — Rút gọn lời văn log

- **Tool:** OpenAI Codex.
- **Asked for:** Viết log ngắn hơn.
- **Kept:** Các mốc cũ, sáu trường và kết quả thực tế.
- **Changed:** Rút câu, bỏ ý lặp.
- **Rejected:** Chi tiết dài đã có trong evidence.
- **By hand:** Review lời văn và các ý cần giữ trong log.

## 2026-10-12 — Lập plan và bổ sung tests

- **Tool:** OpenAI Codex.
- **Asked for:** Lập plan, review rồi viết tests.
- **Kept:** `TEST_PLAN.md`, 47 tests gồm ví dụ starter.
- **Changed:** Kiểm 22 expected, thêm 46 tests và case lỗi khi miễn ship; QA 47/47, bắt 46/46 biến thể lỗi. Gate còn đỏ do stub.
- **Rejected:** Tests ngoài đặc tả; dùng implementation làm expected.
- **By hand:** Review các nhóm test và case biên.

## 2026-10-12 — Triển khai cartTotal

- **Tool:** OpenAI Codex.
- **Asked for:** Viết hàm theo brief và tests đã review.
- **Kept:** Hàm thuần đúng contract, 47 tests và harness.
- **Changed:** Thay stub, cập nhật hồ sơ; gate local đạt format và 47/47 tests.
- **Rejected:** Chưa ghi nhận.
- **By hand:** Review công thức, điều kiện miễn ship và xử lý lỗi.

## 2026-10-12 — Review hàm và xác minh CI

- **Tool:** OpenAI Codex.
- **Asked for:** Review hàm, chạy gate, commit/push và kiểm tra CI.
- **Kept:** Hàm, 47 tests và harness; review không phát hiện lỗi.
- **Changed:** Push lên fork; xác minh CI đúng commit, đạt format và 47/47 tests.
- **Rejected:** Chưa ghi nhận.
- **By hand:** Review hàm và kết quả gate/CI.

## 2026-10-12 — Tinh gọn repo và gộp brief

- **Tool:** OpenAI Codex.
- **Asked for:** Bỏ file phụ và chỉ giữ một brief đúng tiêu chí bài nộp, tham khảo hai mẫu của bạn.
- **Kept:** Code, 47 tests, harness, README, rules và lịch sử log có sẵn.
- **Changed:** Gộp thành `BRIEF.md`; bỏ hai brief cũ, `REPOSITORY_LINK.md`, `TEST_PLAN.md`, `SELF_ASSESSMENT_EVIDENCE.md`; sửa dẫn chiếu. Bản sao cũ lưu ngoài repo. `npm run check`: format đạt, 47/47 tests pass, exit `0`.
- **Rejected:** Giữ nhiều brief hoặc đưa lịch sử triển khai/kết quả kiểm chứng vào brief giao việc.
- **By hand:** Sinh viên yêu cầu tinh gọn repo và cung cấp hai brief tham khảo; chưa ghi nhận code tự viết trong bước này.
