# AI-LOG.md - IA#1: cartTotal with a harness

Nhật ký sử dụng AI cho bài cá nhân CSC13008. Mỗi tác vụ được ghi theo các trường của template AI-LOG trên Classroom và cập nhật khi thực hiện.

## 2026-10-12 — Đối chiếu yêu cầu IA#1 và kiểm chứng starter trước bước fork repo

Tool: OpenAI Codex (ứng dụng desktop).

Asked for: Kiểm tra và phân tích kỹ yêu cầu IA#1, cập nhật AI log theo template, rồi báo hoàn thành để chuyển sang bước fork repo.

Kept: Giữ phần phân tích contract và checklist trong bản phân tích đề ngày 10/10/2026 sau khi Codex đối chiếu lại với tài liệu hiện có: tính VAT trên subtotal, miễn phí ship khi subtotal >= freeShipFrom, trả về number làm tròn đến đồng, giỏ rỗng trả 0, price âm hoặc qty không phải số nguyên dương ném RangeError; giữ ma trận test dự kiến, phân bổ điểm 30/20/20/15/15 và yêu cầu rules file, gate test + format/lint, CI khi push, brief, AI-LOG và self-assessment. Các test trong ma trận mới là đề xuất, chưa được thêm vào repo.

Changed: Codex cập nhật bản phân tích để tham chiếu template self-assessment hiện có dạng PDF (2 trang), phân biệt với ghi nhận DOCX của lần đọc trước; cập nhật trạng thái AI-LOG và ghi giới hạn nguồn slide trong lần kiểm tra này. Tạo log thực tế ở root repo theo template, giữ nguyên file template ở thư mục cha; không thay đổi src/cart.js, test/cart.test.js, package.json, README.md hoặc .gitignore.

Rejected: Không ghi nhận đầu ra AI nào được sinh viên xác nhận đã loại bỏ trong tác vụ này. Chưa có triển khai để ghi nhận code AI bị bỏ; các điểm đề chưa quy định được ghi là giả định hoặc câu hỏi cần xác nhận, không được coi là yêu cầu bắt buộc.

By hand: Chưa có phần code hoặc tài liệu nào được xác nhận do sinh viên tự viết trong bước này. Việc đọc và đối chiếu tài liệu, kiểm tra repo, chạy test và cập nhật bản phân tích cùng log ở entry này do Codex thực hiện.

Bằng chứng kiểm tra ngày 12/10/2026:

- Bản phân tích: `C:/Users/vongu/OneDrive/Documents/ChatGPT/IA#1 - Webdev/PHAN_TICH_YEU_CAU_IA1.md`, các mục 1-10. Bản có sẵn đề ngày 10/10; entry này được lập ngày 12/10 sau khi đối chiếu lại, không được coi là log đã ghi ngày 10/10.
- Nguồn đọc trực tiếp: `../IA#1 rubric — cartTotal.pdf` (đủ 4 trang), `../SELF_ASSESSMENT_REPORT template.pdf` (đủ 2 trang), `../AI-LOG.md` (template), `README.md`, `package.json`, `src/cart.js`, `test/cart.test.js`, `.gitignore`.
- `npm test`: 1 test, 0 pass, 1 fail; test `the example from the slides` thất bại với `Error: not implemented` tại `src/cart.js:3`. Đây là baseline của starter, chưa phải kết quả sau triển khai.
- Repo trước khi tạo log: nhánh `main`, working tree sạch, HEAD `56048c07ba9975788dc9a55f5026ab3fbd4eb0e3`; origin `https://github.com/fithcmus/wad-cart-starter.git`.
- Chưa có rules file, gate format/lint, workflow CI, brief hoặc self-assessment đã điền; chưa fork, đổi remote, commit hoặc push trong tác vụ này.

Giới hạn còn ghi nhận: deadline phải xác nhận trên Classroom; việc chấp nhận checker format/lint tự viết khi đề ghi no dependencies chưa được tài liệu xác nhận; rubric không mô tả dải chênh lệch tự đánh giá -11 đến -20. Link slide Claude không tải lại được bằng công cụ web lần này; nhận xét về slide được giữ theo bản phân tích đã lưu, không khai là đã đọc lại slide ngày 12/10.

## 2026-10-12 — Chuẩn bị repo GitHub cá nhân

Tool: OpenAI Codex (ứng dụng desktop), Git, Git Credential Manager và GitHub REST API.

Asked for: "tiếp theo là chuẩn bị repo github cá nhân cho tôi".

Kept: Dùng fork `nguyenkhoa838/wad-cart-starter` từ `fithcmus/wad-cart-starter`, giữ nhánh `main` và lịch sử starter. Tài khoản được xác nhận qua phiên đăng nhập GitHub đã có trên máy và endpoint `/user`.

Changed: Cấu hình `origin` thành `https://github.com/nguyenkhoa838/wad-cart-starter.git`, giữ repo giảng viên tại `upstream`, fetch nhánh `main` của fork và đặt tracking local `main` về `origin/main`. Thêm `REPOSITORY_LINK.md` và entry này vào log đã tạo ở tác vụ trước, chuẩn bị commit tài liệu và push lên fork cá nhân. GitHub fork ở chế độ public như repo starter.

Rejected: Không có đầu ra AI nào được sinh viên xác nhận đã loại bỏ trong tác vụ này.

By hand: Chưa ghi nhận phần code hoặc tài liệu do sinh viên tự viết trong bước này. Codex kiểm tra tài khoản, fork, cấu hình remote và ghi tài liệu.

Bằng chứng và phạm vi tại thời điểm ghi entry, trước commit/push tài liệu:

- Repo cá nhân: https://github.com/nguyenkhoa838/wad-cart-starter.
- Repo gốc (`upstream`): https://github.com/fithcmus/wad-cart-starter.
- Local `main` và `origin/main` cùng tại starter commit `56048c07ba9975788dc9a55f5026ab3fbd4eb0e3` trước commit tài liệu; remote được kiểm tra bằng Git và thông tin parent của fork được kiểm tra bằng GitHub API.
- Chỉ đưa `AI-LOG.md` và `REPOSITORY_LINK.md` vào commit của bước này. Source, tests, package.json, README.md và .gitignore giữ nguyên.
- Không chạy lại test trong bước chỉ chuẩn bị repository; baseline đã kiểm chứng ở entry trước là 1 test thất bại với `Error: not implemented`. Chưa có harness hoặc CI trong tác vụ này.
- Commit/push được thực hiện sau khi ghi entry; chỉ báo hoàn tất tác vụ khi Git xác nhận local HEAD trùng với `refs/heads/main` của fork và working tree sạch.
