# AI-LOG.md - IA#1: cartTotal with a harness

Nhật ký sử dụng AI cho bài cá nhân CSC13008, ghi theo template trên Classroom.

## 2026-10-12 — Đối chiếu yêu cầu IA#1 và kiểm chứng starter

Tool: OpenAI Codex (ứng dụng desktop).

Asked for: Phân tích yêu cầu và rubric IA#1, kiểm chứng starter và lập nhật ký sử dụng AI.

Kept: Bản phân tích contract `cartTotal`, ma trận test dự kiến và checklist nộp bài.

Changed: Codex cập nhật nguồn self-assessment sang template PDF hiện có và tạo `AI-LOG.md` theo template.

Rejected: Chưa ghi nhận đầu ra AI bị sinh viên loại bỏ.

By hand: Chưa ghi nhận phần do sinh viên tự viết trong tác vụ này.

## 2026-10-12 — Chuẩn bị repo GitHub cá nhân

Tool: OpenAI Codex (ứng dụng desktop), Git và GitHub REST API.

Asked for: Thiết lập repository GitHub cá nhân từ starter và kết nối với repository local.

Kept: Fork `nguyenkhoa838/wad-cart-starter`, giữ nhánh `main` và lịch sử starter.

Changed: Codex cấu hình `origin`, `upstream` và tracking nhánh `main`; thêm `REPOSITORY_LINK.md` và ghi log.

Rejected: Chưa ghi nhận đầu ra AI bị sinh viên loại bỏ.

By hand: Chưa ghi nhận phần do sinh viên tự viết trong tác vụ này.

## 2026-10-12 — Chạy npm test và ghi nhận trạng thái ban đầu

Tool: OpenAI Codex (ứng dụng desktop), npm và Node.js test runner.

Asked for: Xác lập baseline kiểm thử của starter và lưu kết quả vào nhật ký AI.

Kept: Kết quả `npm test`: 1 test, 0 pass, 1 fail do `Error: not implemented` tại `src/cart.js:3`.

Changed: Codex ghi kết quả vào log; source, test và cấu hình giữ nguyên.

Rejected: Chưa ghi nhận đầu ra AI bị sinh viên loại bỏ.

By hand: Chưa ghi nhận phần do sinh viên tự viết trong tác vụ này.

## 2026-10-12 — Rút gọn AI log và lưu bằng chứng tự đánh giá

Tool: OpenAI Codex (ứng dụng desktop) và Git.

Asked for: Chuẩn hóa nhật ký theo template và lưu bằng chứng để chuẩn bị self-assessment.

Kept: Các entry theo sáu trường của template và ghi chú bằng chứng trong `SELF_ASSESSMENT_EVIDENCE.md`.

Changed: Codex tóm tắt `Asked for`, rút ngắn các entry và chuyển phần bằng chứng, phạm vi, giới hạn sang file riêng.

Rejected: Theo yêu cầu sinh viên, bỏ cách chép nguyên văn yêu cầu trong `Asked for` và các mục bằng chứng, phạm vi riêng khỏi AI log.

By hand: Sinh viên xác định cách ghi `Asked for` và yêu cầu bố cục theo template; Codex thực hiện chỉnh sửa tài liệu.

## 2026-10-12 — Soạn brief dựng harness để review

Tool: OpenAI Codex (ứng dụng desktop), công cụ đọc PDF và trình duyệt.

Asked for: Soạn brief dựng harness dựa trên yêu cầu IA#1, slide và repo, sau đó rút gọn để sinh viên review.

Kept: Phạm vi file, contract/error cases, no dependencies, rules, gate, CI và cách kiểm chứng trong `BRIEF_HARNESS.md`; bản nháp vẫn chờ review.

Changed: Codex rút brief từ khoảng 120 xuống 51 dòng, gom nội dung thành phạm vi, contract, harness và kiểm chứng; lưu chi tiết nguồn trong evidence. Source, test và cấu hình giữ nguyên.

Rejected: Theo yêu cầu sinh viên, bỏ phần diễn giải dài và lặp; giữ yêu cầu cốt lõi và giới hạn của checker tự viết.

By hand: Sinh viên xác định task và yêu cầu brief ngắn, trọng tâm; Codex soạn và rút gọn nội dung.

## 2026-10-12 — Viết rules chi tiết cho repository

Tool: OpenAI Codex (ứng dụng desktop) và Git.

Asked for: Viết rules chi tiết, đúng trọng tâm và phù hợp repository IA#1.

Kept: `AGENTS.md` với stack, contract, style, ma trận tests, commands, quy tắc harness, quy trình và các điều cấm.

Changed: Codex phân biệt commands hiện có với gate chưa triển khai, quy tắc bắt buộc với input chưa được đặc tả; cập nhật trạng thái rules trong evidence.

Rejected: Chưa ghi nhận đầu ra AI bị sinh viên loại bỏ trong tác vụ này.

By hand: Sinh viên xác định yêu cầu về mức độ chi tiết và trọng tâm; chưa ghi nhận phần nội dung do sinh viên tự viết trong tác vụ này.

## 2026-10-12 — Review và chỉnh rules của repository

Tool: OpenAI Codex (ứng dụng desktop), Git, công cụ đọc PDF và Node.js.

Asked for: Review kỹ `AGENTS.md` về tính đúng, đủ, nhất quán và phù hợp repo.

Kept: Contract tính tiền, stack/style starter, cấu trúc rules và ràng buộc harness không thêm package.

Changed: Codex làm rõ qty lỗi, phân biệt yêu cầu đề với quy ước repo, thêm case bắt làm tròn sớm, sửa hướng dẫn checks/điểm tự nhận và bổ sung chi tiết còn thiếu về checker, log và báo cáo.

Rejected: Qua review, Codex thay cách viết “item thiếu field” quá rộng, câu cấm tự điền điểm 100 và điều kiện phải kiểm chứng checker trước khi được chạy lệnh kiểm chứng; không ghi nhận sinh viên tự loại bỏ các nội dung này.

By hand: Sinh viên yêu cầu review kỹ; chưa ghi nhận phần nội dung do sinh viên tự viết trong tác vụ này.

## 2026-10-12 — Phân tích bước dựng và kiểm chứng gate

Tool: OpenAI Codex (ứng dụng desktop), Git và công cụ đọc file.

Asked for: Giải thích cụ thể bước dựng và kiểm chứng gate sau khi viết rules, trước khi thực hiện.

Kept: Phân tích format checker, gate local, CI, các tình huống pass/fail và phạm vi harness.

Changed: Codex đối chiếu repo và giải thích vì sao gate phải còn đỏ khi hàm chưa implement; lượt phân tích không sửa file hoặc chạy tests.

Rejected: Chưa ghi nhận đầu ra AI bị sinh viên loại bỏ trong tác vụ này.

By hand: Sinh viên yêu cầu phân tích trước khi thực hiện; chưa ghi nhận phần nội dung do sinh viên tự viết.

## 2026-10-12 — Review và dựng gate format, tests và CI

Tool: OpenAI Codex (ứng dụng desktop), Node.js, npm, Git và công cụ web.

Asked for: Review kỹ các gate, nguyên tắc và phạm vi rồi dựng gate cho repository IA#1.

Kept: Checker Node built-in, scripts format/check và workflow CI; 42 tình huống kiểm chứng trên bản sao tạm cho kết quả đúng dự kiến.

Changed: Codex lưu brief triển khai trước khi code, thêm checker/scripts/workflow, cập nhật commands và evidence; giữ source/tests và ghi đúng gate đỏ do hàm stub.

Rejected: Chưa ghi nhận sinh viên loại bỏ đầu ra trong tác vụ này; không thay tests hoặc implementation để tạo kết quả xanh.

By hand: Sinh viên giao review và dựng gate; chưa ghi nhận phần code do sinh viên tự viết trong tác vụ này.

## 2026-10-12 — Kiểm tra lại gate và chạy CI trên GitHub

Tool: OpenAI Codex (ứng dụng desktop), Node.js, npm, Git và GitHub.

Asked for: Kiểm tra kỹ gate thêm một lần, tiếp tục cấu hình CI và cho chạy trên GitHub.

Kept: Checker, scripts và workflow đã có; lần chạy mới kiểm chứng lại 42/42 tình huống đúng dự kiến và gate thật vẫn fail do `not implemented`.

Changed: Codex đối chiếu lại actions chính thức, mở rộng phạm vi brief cho bước commit/push và ghi kết quả review; bằng chứng CI thực tế được bổ sung ở mục 11 của evidence sau khi có run.

Rejected: Không có lỗi gate cần thay implementation qua lần review này; chưa ghi nhận sinh viên loại bỏ đầu ra.

By hand: Sinh viên xác định thứ tự review gate rồi chạy CI; chưa ghi nhận phần code do sinh viên tự viết trong tác vụ này.
