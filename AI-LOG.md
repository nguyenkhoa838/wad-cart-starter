# AI-LOG.md - IA#1: cartTotal with a harness

Theo template CSC13008. Chỉnh sửa do Codex thực hiện; `By hand` ghi yêu cầu/quyết định của sinh viên, chưa ghi nhận code tự viết. Chi tiết kiểm chứng ở `SELF_ASSESSMENT_EVIDENCE.md`.

## 2026-10-12 — Đối chiếu yêu cầu IA#1 và kiểm chứng starter

Tool: OpenAI Codex.
Asked for: Phân tích yêu cầu, rubric và starter.
Kept: Contract, ma trận test dự kiến và checklist nộp bài.
Changed: Đối chiếu template PDF và tạo AI log.
Rejected: Chưa ghi nhận.
By hand: Chưa ghi nhận.

## 2026-10-12 — Chuẩn bị repo GitHub cá nhân

Tool: OpenAI Codex, Git, GitHub API.
Asked for: Tạo fork và kết nối repo local.
Kept: Fork `nguyenkhoa838/wad-cart-starter`, main và lịch sử starter.
Changed: Cấu hình origin/upstream/tracking; thêm `REPOSITORY_LINK.md`.
Rejected: Chưa ghi nhận.
By hand: Chưa ghi nhận.

## 2026-10-12 — Chạy npm test và ghi nhận trạng thái ban đầu

Tool: OpenAI Codex, Node.js, npm.
Asked for: Chạy test để xác lập baseline.
Kept: 1 test fail do `Error: not implemented`.
Changed: Ghi baseline; source/tests giữ nguyên.
Rejected: Chưa ghi nhận.
By hand: Chưa ghi nhận.

## 2026-10-12 — Rút gọn AI log và lưu bằng chứng tự đánh giá

Tool: OpenAI Codex, Git.
Asked for: Chuẩn hóa log và tách bằng chứng.
Kept: Sáu trường template và evidence riêng.
Changed: Tóm tắt yêu cầu, chuyển chi tiết kiểm chứng sang evidence.
Rejected: Chép nguyên văn yêu cầu và đặt mục bằng chứng trong log.
By hand: Chọn cách tóm tắt và tách bằng chứng.

## 2026-10-12 — Soạn brief dựng harness để review

Tool: OpenAI Codex, công cụ PDF, trình duyệt.
Asked for: Soạn brief harness ngắn, đúng phạm vi.
Kept: `BRIEF_HARNESS.md` với scope, contract, no dependencies, gate/CI; lúc này còn chờ review.
Changed: Rút brief từ khoảng 120 xuống 51 dòng; lưu nguồn trong evidence.
Rejected: Diễn giải dài và lặp theo yêu cầu sinh viên.
By hand: Xác định phạm vi và yêu cầu brief ngắn.

## 2026-10-12 — Viết rules chi tiết cho repository

Tool: OpenAI Codex, Git.
Asked for: Viết rules cụ thể cho IA#1.
Kept: `AGENTS.md`: stack, contract, style, tests, commands và Never.
Changed: Phân biệt lệnh hiện có/dự kiến và yêu cầu đề/quy ước repo.
Rejected: Chưa ghi nhận.
By hand: Yêu cầu rules chi tiết, đúng trọng tâm.

## 2026-10-12 — Review và chỉnh rules của repository

Tool: OpenAI Codex, Git, công cụ PDF, Node.js.
Asked for: Review tính đúng, đủ và nhất quán của rules.
Kept: Contract, stack/style và harness không thêm package.
Changed: Làm rõ qty lỗi, làm tròn sớm, checks, tự đánh giá và checker.
Rejected: Codex bỏ diễn đạt “item thiếu field” quá rộng, cấm tự chấm 100 tuyệt đối và điều kiện kiểm chứng bị vòng lặp.
By hand: Yêu cầu review kỹ; chưa ghi nhận nội dung tự viết.

## 2026-10-12 — Phân tích bước dựng và kiểm chứng gate

Tool: OpenAI Codex, Git.
Asked for: Giải thích bước dựng gate trước khi làm.
Kept: Phạm vi checker/gate/CI và các tình huống pass/fail.
Changed: Làm rõ gate đỏ do stub; chưa sửa file hoặc chạy tests.
Rejected: Chưa ghi nhận.
By hand: Yêu cầu phân tích trước triển khai.

## 2026-10-12 — Review và dựng gate format, tests và CI

Tool: OpenAI Codex, Node.js, npm, Git, web.
Asked for: Review và dựng gate.
Kept: Checker built-in, scripts/workflow; 42/42 tình huống đúng dự kiến.
Changed: Chốt brief trước code, thêm harness và cập nhật commands/evidence; hàm/tests vẫn là starter.
Rejected: Chưa ghi nhận sinh viên loại bỏ đầu ra.
By hand: Giao review và dựng gate.

## 2026-10-12 — Kiểm tra lại gate và chạy CI trên GitHub

Tool: OpenAI Codex, Node.js, npm, Git, GitHub.
Asked for: Kiểm tra lại gate và chạy CI trên fork.
Kept: 42/42 tình huống đúng dự kiến; CI đúng commit, format đạt, test fail do stub.
Changed: Đối chiếu actions, commit/push harness; lưu SHA/run URL/log trong evidence.
Rejected: Chưa ghi nhận; review không phát hiện lỗi gate cần sửa.
By hand: Chọn thứ tự review gate rồi chạy CI.

## 2026-10-12 — Chốt và review brief triển khai cartTotal/tests

Tool: OpenAI Codex, Git, pypdf, Python Decimal.
Asked for: Chốt và kiểm tra brief trước triển khai.
Kept: `BRIEF_IMPLEMENTATION.md`; 13/13 expected trả số được tính lại đúng.
Changed: Làm rõ input chưa đặc tả; thêm case chống hardcode, làm tròn sớm và input frozen vào kế hoạch tests.
Rejected: Codex không thêm test `typeof` trùng strict equality hoặc validation/defaults ngoài đặc tả.
By hand: Giao chốt brief và yêu cầu kiểm tra kỹ.

## 2026-10-12 — Rút gọn lời văn AI log

Tool: OpenAI Codex.
Asked for: Viết AI log gọn lại.
Kept: Các mốc cũ, sáu trường template và kết quả thực tế.
Changed: Rút mỗi trường thành câu ngắn, bỏ diễn giải lặp và kiểm tra bố cục.
Rejected: Câu dài và chi tiết đã có trong evidence.
By hand: Yêu cầu rút gọn log.

## 2026-10-12 — Lập plan, review và bổ sung test hành vi

Tool: OpenAI Codex, Node.js, npm, Git, BigInt.
Asked for: Lập plan chi tiết, kiểm tra kỹ rồi bổ sung tests.
Kept: `TEST_PLAN.md` và 47 tests; giữ ví dụ starter.
Changed: Kiểm toán 22 expected, bổ sung case lỗi ở nhánh miễn ship sau probe; thêm 46 tests, QA tham chiếu 47/47 và phát hiện 46/46 biến thể lỗi; gate repo vẫn đỏ do stub.
Rejected: Codex không áp đặt tests cho input chưa đặc tả hoặc dùng implementation làm oracle.
By hand: Giao lập plan và review trước khi thực hiện; chưa ghi nhận code tự viết.

## 2026-10-12 — Triển khai cartTotal

Tool: OpenAI Codex, Node.js, npm, Git.
Asked for: Triển khai hàm theo brief và bộ tests đã review.
Kept: Hàm thuần đúng contract, nguyên bộ 47 tests và harness.
Changed: Thay stub, cập nhật README/brief/evidence; gate local đạt format và 47/47 tests.
Rejected: Chưa ghi nhận.
By hand: Giao triển khai hàm; chưa ghi nhận code tự viết.

## 2026-10-12 — Review hàm, commit và xác minh CI

Tool: OpenAI Codex, Node.js, npm, Git, GitHub API.
Asked for: Review lại hàm, sửa lỗi nếu có, chạy gate, commit và xác nhận CI xanh.
Kept: Hàm đúng contract, nguyên bộ 47 tests và harness; review không phát hiện lỗi cần sửa.
Changed: Commit/push implementation và hồ sơ lên fork; xác minh SHA/job/log CI xanh, format đạt và 47/47 tests pass; lưu bằng chứng trong README/evidence.
Rejected: Chưa ghi nhận.
By hand: Giao review, commit và xác nhận CI; chưa ghi nhận code tự viết.
