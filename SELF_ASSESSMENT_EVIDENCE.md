# Bằng chứng chuẩn bị self-assessment — IA#1

Ghi chú cập nhật ngày 12/10/2026 để tra cứu khi viết `SELF_ASSESSMENT_REPORT.md`. Đây là hồ sơ bằng chứng đang tích lũy, chưa phải báo cáo tự chấm và chưa có điểm tự nhận.

## 1. Tra cứu theo tiêu chí rubric

| Tiêu chí | Max | Bằng chứng hiện có | Trạng thái cần phản ánh khi tự đánh giá |
|---|---:|---|---|
| Behaviour | 30 | `src/cart.js:1`; mục 14-15 | Hàm đã triển khai và review lại; local và CI đúng SHA đều đạt format và 47/47 tests. Review không phát hiện lỗi theo contract. |
| Tests | 20 | `test/cart.test.js`, `TEST_PLAN.md` mục 3-5 và 10; mục 13-15 | Giữ nguyên 47 tests đã review; tất cả pass trên source thật ở local và CI, không cancelled/skipped/todo. QA tham chiếu/mutation ở mục 13 kiểm chất lượng tests trước triển khai. |
| Harness | 20 | `AGENTS.md`, `scripts/check-format.js`, `package.json`, `.github/workflows/ci.yml`; mục 10, 11, 14-15 | Gate local exit 0; harness giữ nguyên. CI implementation ở mục 15 đã completed/success; đọc job/log xác nhận format và tests xanh. |
| Brief | 15 | `BRIEF_HARNESS.md`, `BRIEF_IMPLEMENTATION.md`, `TEST_PLAN.md`; mục 7, 10, 12-15 | Brief và plan được review trước code; triển khai và review/commit/CI theo phạm vi sinh viên giao. |
| AI-LOG.md | 15 | Các entry ngày 12/10/2026 trong `AI-LOG.md`; mục 3, 11-15 | Log/brief/plan/implementation/tests đã commit/push ở `a42779d`; hồ sơ ghi thêm kết quả CI thực tế ở mục 15. |

Khi hoàn thành bài, cập nhật bảng bằng kết quả cuối cùng và dùng file, section, commit hoặc tên test có thật cho từng dòng Evidence trong báo cáo. Baseline đỏ là bằng chứng trạng thái ban đầu, chưa chứng minh test cuối cùng pass.

## 2. Nguồn và bước đối chiếu yêu cầu

- Bản phân tích: `C:/Users/vongu/OneDrive/Documents/ChatGPT/IA#1 - Webdev/PHAN_TICH_YEU_CAU_IA1.md`, các mục 1–10. Bản có sẵn đề ngày 10/10/2026, được đối chiếu lại ngày 12/10/2026; log của lần đối chiếu được lập ngày 12/10.
- Nguồn ghi nhận đã đọc ở bước đối chiếu: `../IA#1 rubric — cartTotal.pdf` (4 trang), `../SELF_ASSESSMENT_REPORT template.pdf` (2 trang), `../AI-LOG.md` (template), `README.md`, `package.json`, `src/cart.js`, `test/cart.test.js`, `.gitignore`.
- Contract được phân tích: VAT trên subtotal; miễn ship khi `subtotal >= freeShipFrom`; trả number làm tròn đến đồng; giỏ rỗng trả 0; giá âm hoặc qty không phải số nguyên dương ném `RangeError`.
- Ma trận test và checklist trong bản phân tích là đề xuất, chưa được triển khai vào repo.
- Phân bổ điểm rubric: Behaviour 30, Tests 20, Harness 20, Brief 15, AI-LOG 15.
- Phạm vi bước đối chiếu: cập nhật bản phân tích và tạo AI log; không sửa source, test, cấu hình; chưa fork, đổi remote, commit hoặc push ở thời điểm đó.
- Repo trước khi tạo log: nhánh `main`, working tree sạch, HEAD `56048c07ba9975788dc9a55f5026ab3fbd4eb0e3`, origin trỏ tới starter của giảng viên.
- Lần test ghi nhận ở bước đối chiếu cũng có 1 test, 0 pass, 1 fail do `Error: not implemented`; không gộp lần này với lần chạy baseline ở mục 4.

## 3. Repository và commit tài liệu

- Repo cá nhân: https://github.com/nguyenkhoa838/wad-cart-starter.
- Repo gốc: https://github.com/fithcmus/wad-cart-starter.
- Ghi nhận từ bước chuẩn bị repo: fork public từ repo giảng viên; tài khoản kiểm tra qua phiên đăng nhập GitHub và endpoint `/user`, quan hệ parent của fork kiểm tra bằng GitHub API.
- Nhánh local `main` theo dõi `origin/main`; `origin` trỏ tới fork cá nhân, `upstream` trỏ tới repo giảng viên.
- Trước commit tài liệu: local `main` và `origin/main` cùng tại starter commit `56048c07ba9975788dc9a55f5026ab3fbd4eb0e3`.
- Commit tài liệu: `64cd54ed4f07431fb531bb8c0d8817493272c7e7` — `docs: record IA1 requirements review and personal repository setup`.
- `git show --stat` xác nhận commit này chỉ thêm `AI-LOG.md` và `REPOSITORY_LINK.md` (69 dòng).
- Bản phân tích ghi nhận bước chuẩn bị repo đã commit/push thành công và xác nhận HEAD local trùng main trên GitHub ở thời điểm hoàn thành bước đó.
- Kiểm tra local trong lần rút gọn này: HEAD và ref local `origin/main` cùng tại `64cd54ed4f07431fb531bb8c0d8817493272c7e7`; đây là kiểm tra ref đã lưu trên máy, không phải lần xác minh remote mới.
- `git diff 56048c07ba9975788dc9a55f5026ab3fbd4eb0e3 HEAD -- src/cart.js test/cart.test.js package.json README.md .gitignore` không có thay đổi.
- Bước chuẩn bị repository không chạy lại test; dùng baseline của bước đối chiếu. Chưa có harness hoặc CI trong bước đó.

## 4. Lần chạy baseline theo yêu cầu sinh viên

- Ngày chạy: 12/10/2026.
- Thư mục: `D:/HCMUS/HK7/Web Application Development/IA#1/wad-cart-starter`.
- Lệnh: `npm test`; script trong `package.json:6` là `node --test`.
- Môi trường: Node.js `v24.11.1`, npm `11.6.2`.
- Nhánh `main`, HEAD `64cd54ed4f07431fb531bb8c0d8817493272c7e7`; working tree sạch trước lần chạy.
- Kết quả: 1 test, 0 pass, 1 fail, 0 cancelled, 0 skipped, 0 todo; exit code `1`.
- Test lỗi: `the example from the slides`, khai báo tại `test/cart.test.js:7:1`, gọi hàm tại `test/cart.test.js:13:16`.
- Lỗi: `Error: not implemented`, tại `src/cart.js:3:9`.
- Expected của test starter: `467400` (number).
- Thời gian test runner báo: `85.6588 ms`.
- Phạm vi tác vụ: chạy test và ghi log; không sửa source, test hoặc cấu hình. Trong lần rút gọn này không chạy lại `npm test`.

## 5. Phần chưa hoàn thành và điểm cần xác nhận

- Đã triển khai/review `cartTotal`, gate local và CI implementation xanh với 47/47 tests ở mục 14-15; bộ tests được review/QA ở mục 13. Chưa tạo `SELF_ASSESSMENT_REPORT.md` đã điền.
- Deadline cần xác nhận trên Classroom.
- Tài liệu chưa xác nhận việc chấp nhận checker format/lint tự viết khi đề ghi no dependencies.
- Rubric không mô tả dải chênh lệch tự đánh giá từ -11 đến -20; chưa tự suy ra cách điều chỉnh.
- Link slide Claude không tải lại được bằng công cụ web trong lần đối chiếu trước ngày 12/10. Trong task soạn brief cùng ngày đã mở được bằng trình duyệt và đọc lại đủ 34 slide; xem mục 7.
- Trước lần chỉnh bố cục này chưa ghi nhận đầu ra AI bị sinh viên loại bỏ hoặc phần code/tài liệu do sinh viên tự viết. Lần này sinh viên yêu cầu tóm tắt `Asked for` và bỏ các mục bằng chứng/phạm vi riêng khỏi AI log; Codex chỉnh tài liệu theo yêu cầu.

## 6. Ghi nhận lần rút gọn

- Rút gọn ba entry cũ theo template và thêm một entry cho tác vụ chỉnh tài liệu này.
- Chuyển bằng chứng, phạm vi và giới hạn từ AI log sang file này, giữ phân biệt các mốc lịch sử.
- Source, test và cấu hình giữ nguyên. Thay đổi hiện tại gồm `AI-LOG.md` và file ghi chú này, chưa commit/push.

## 7. Bản nháp brief dựng harness

Các ghi nhận dưới đây phản ánh thời điểm soạn/rút gọn bản nháp. Trạng thái được giao triển khai và kết quả mới lưu ở mục 10.

- Ngày soạn: 12/10/2026; file `BRIEF_HARNESS.md`, trạng thái chờ sinh viên review. Đây chưa phải brief đã được dùng để giao task triển khai.
- Đã đọc lại đủ 4 trang rubric, 2 trang template self-assessment PDF, template AI-LOG ở thư mục cha và toàn bộ các file starter/tài liệu hiện có ở root repo.
- Công cụ web không truy cập được link slide; trình duyệt mở thành công `https://claude.ai/artifact/NvwedcF4pFmvQoJiRSUCoD`, đọc lại nội dung đủ 34 slide của Session 02 ngày 06/10/2026. Phần harness/brief/IA#1 đối chiếu từ slide 13–17, 20–24 và 29–33.
- Repo vẫn tại HEAD `64cd54ed4f07431fb531bb8c0d8817493272c7e7`; môi trường kiểm tra lại: Node `v24.11.1`, npm `11.6.2`. Trước task đã có thay đổi chưa commit ở AI log và file evidence; giữ các thay đổi đó.
- Brief nêu mục tiêu, allowlist file, contract và errors, no dependencies, rules, format checker built-in, gate local, CI, cách kiểm chứng failure và bàn giao. Phương án checker tự viết còn giới hạn chấp nhận đã ghi ở mục 3 của brief sau lần rút gọn.
- Task này chỉ tạo brief và cập nhật log/evidence; không chạy lại `npm test`, không sửa source/test/config, không dựng harness, commit hoặc push. Kết quả test đỏ trong brief dựa trên baseline đã ghi ở mục 4, không phải kết quả chạy mới.
- Khi sinh viên review, ghi các nội dung được giữ/sửa/bỏ thực tế; sau khi brief được dùng để triển khai, bổ sung evidence tương ứng. Chưa tự nhận điểm cho tiêu chí Brief hoặc Harness.
- Theo phản hồi cùng ngày, rút brief từ khoảng 120 xuống 51 dòng (giảm khoảng 60% số ký tự), bỏ diễn giải lặp và gom thành bốn mục trọng tâm. Phạm vi triển khai và các ràng buộc cốt lõi giữ nguyên; brief vẫn chờ review, chưa dựng harness hoặc commit/push.

## 8. Rules riêng cho repository

- Ngày tạo: 12/10/2026, theo yêu cầu riêng của sinh viên về rules chi tiết và đúng trọng tâm; file `AGENTS.md` tại root repo bài nộp.
- Đối chiếu trực tiếp `README.md`, `package.json`, `src/cart.js`, `test/cart.test.js`, `.gitignore`, brief harness và hồ sơ hiện có; dùng bản phân tích yêu cầu đã lưu để đối chiếu rubric. Không đọc lại PDF/slide hoặc xác minh remote trong tác vụ này.
- Rules quy định Node `24.x`, JavaScript ES modules, không dependencies/devDependencies, contract và lỗi của `cartTotal`, style starter, test cases, commands, yêu cầu checker/gate/CI khi được giao, quy trình task và log/evidence.
- Lệnh `npm test` đã có; `format:check` và `check` vẫn là yêu cầu triển khai sau. Rules không được tính là checker hoặc CI đã hoàn thành.
- Kiểm tra lại môi trường: Node `v24.11.1`, npm `11.6.2`; HEAD local vẫn là `64cd54ed4f07431fb531bb8c0d8817493272c7e7` khi bắt đầu task.
- Giữ các thay đổi tài liệu có sẵn. Task này tạo rules, thêm AI log và cập nhật evidence; không sửa source/test/config, không chạy lại `npm test`, không commit/push.
- Kiểm chứng: `git diff --check` exit `0`; kiểm riêng file mới chưa được Git theo dõi `AGENTS.md` (164 dòng), không có whitespace cuối dòng/tab thụt dòng, có newline cuối file và code fences cân bằng. Review contract, expected trong bảng test và phân biệt lệnh hiện có/lệnh dự kiến; diff của source/test/config rỗng.

## 9. Review kỹ rules

- Ngày review: 12/10/2026. Đọc toàn bộ rules và đối chiếu trực tiếp README, source/test, package.json, brief harness; đọc đủ 4 trang rubric và 2 trang template self-assessment bằng pypdf, kiểm tra các bảng qua ảnh trang đã có trong workspace. Không tải lại slide hoặc kiểm tra remote.
- Contract subtotal, VAT, ngưỡng ship, giỏ rỗng, kiểu trả về và hai nhóm lỗi đúng với starter/rubric. Các expected số có sẵn trong bảng đều đúng; không sửa công thức của bài.
- Sửa điểm mơ hồ: qty thiếu/sai kiểu thuộc quy tắc không phải số nguyên dương, không gộp vào nhóm input chưa đặc tả. Tách quy ước runtime/style/checker và các biên test bổ sung khỏi yêu cầu nguyên văn của đề; giữ hiệu lực công việc sinh viên đã giao dù brief còn nhãn nháp.
- Bổ sung case hai item giá `10.2`, qty `1`, VAT `0.5`, ship `0`: subtotal `20.4`, VAT `10.2`, tổng `30.6`, expected `31`. Phép tính thử ba cách làm tròn sai (item/subtotal/VAT) đều cho `30`; case cũ giá `10` chưa bắt được chúng.
- Sửa hướng dẫn `git diff --check` cho file staged/untracked và bỏ điều kiện vòng tròn “checker đã được kiểm chứng” trước khi chạy `format:check`. Làm rõ đường dẫn bắt buộc của checker và yêu cầu cập nhật commands khi thêm scripts.
- Sửa câu cấm tự điền điểm 100 thành yêu cầu mọi điểm tự nhận dựa trên evidence; bổ sung bốn cột báo cáo/root zip và ghi AI log trong quá trình làm bài.
- Kiểm chứng số học: một lệnh Node độc lập dùng BigInt với đơn vị chia nhỏ để đối chiếu 8 expected số trong bảng, exit `0`; không import hoặc chạy `cartTotal`. SHA-256 trước/sau của source, test, package.json, README, .gitignore, brief và repository link giống nhau. Chỉ sửa rules/log/evidence, không chạy lại `npm test`, không commit/push.

## 10. Review phạm vi và dựng gate

- Ngày: 12/10/2026, theo yêu cầu sinh viên review kỹ gate/nguyên tắc/phạm vi rồi dựng gate. Đọc lại toàn bộ rules, brief, README, package, source/test và hồ sơ; không đọc lại PDF/slide hoặc xác minh remote trong task này.
- Trước khi code, đổi trạng thái brief từ nháp sang task đã được giao, thêm phạm vi cập nhật brief và kế hoạch kiểm chứng. Thay đổi chỉ gồm brief, rules, package, checker, workflow, README, AI log và evidence. Giữ các thay đổi tài liệu có sẵn; không sửa contract hoặc triển khai hàm/tests.
- Review chốt: checker chỉ kiểm whitespace đã công bố; thiếu đường dẫn/lỗi đọc phải fail; root theo vị trí script; không âm thầm bỏ qua symbolic link; gate chạy format trước toàn bộ tests và không nuốt exit code. Node `24.x`, no devDependencies và checker này là lựa chọn repo, không suy ra điểm rubric.
- Môi trường thực tế: Node `v24.11.1`, npm `11.6.2`, Windows. HEAD vẫn `64cd54ed4f07431fb531bb8c0d8817493272c7e7`; không commit/push, đổi branch/remote hoặc thêm dependencies/lockfile.

### Sản phẩm và giới hạn

- `scripts/check-format.js`: kiểm `package.json` và mọi `.js` dưới ba thư mục quy định, kể cả file untracked/thư mục con; bắt tab thụt dòng, trailing whitespace và thiếu newline. Chấp nhận LF/CRLF, báo file/dòng, không sửa file, exit `1` khi lỗi. Các đường dẫn bắt buộc phải có kiểu phù hợp; symbolic links trong thư mục được kiểm bị báo lỗi để tránh bỏ sót/vòng lặp.
- Scripts: giữ `test: node --test`; thêm `format:check: node scripts/check-format.js` và `check: npm run format:check && npm test`.
- `.github/workflows/ci.yml`: push mọi branch, không filter path; Linux `ubuntu-latest`, Node `24.x`, quyền `contents: read`, không cài package, không cache, không `continue-on-error`. Gate giống local; chưa có run nên chưa xác nhận CI thực thi.
- Actions pin SHA đã đối chiếu release chính thức: [checkout v7.0.1](https://github.com/actions/checkout/releases/tag/v7.0.1) tại `3d3c42e5aac5ba805825da76410c181273ba90b1`; [setup-node v7.1.0](https://github.com/actions/setup-node/releases/tag/v7.1.0) tại `949feb2413d6458794dcd2491c4babbbce0c15c1`.
- Đọc `action.yml` của [checkout](https://github.com/actions/checkout/blob/v7.0.1/action.yml) và [setup-node](https://github.com/actions/setup-node/blob/v7.1.0/action.yml): cả hai dùng runtime `node24`; inputs `persist-credentials` và `package-manager-cache` có trong versions đã pin. [README setup-node](https://github.com/actions/setup-node/blob/v7.1.0/README.md) ghi yêu cầu runner tối thiểu `v2.327.1`. Dùng runner GitHub-hosted; tính tương thích mới được đối chiếu tĩnh, chưa xác nhận bằng CI run.
- Workflow được review thủ công về YAML, trigger, permissions, inputs và lệnh chạy; máy không có actionlint/YAML parser, không cài thêm công cụ và không báo đã lint/parse bằng công cụ đó.
- Checker không chứng minh mọi style 2 spaces/single quotes/không semicolon, cú pháp JS, độ bao phủ tests hoặc tính đúng của hàm. README và rules công bố giới hạn này.

### Kiểm chứng trên bản sao tạm

- Script kiểm chứng và JSON kết quả nằm ngoài repo bài nộp, tại `C:/Users/vongu/OneDrive/Documents/ChatGPT/IA#1 - Webdev/tmp/gate-review-20261012/verify-gates.mjs` và `verification-results.json`. Không đưa fixture/test tổng hợp vào source/tests của bài.
- Lệnh: `node "C:/Users/vongu/OneDrive/Documents/ChatGPT/IA#1 - Webdev/tmp/gate-review-20261012/verify-gates.mjs"`; kết quả **42/42 tình huống đúng dự kiến**, script exit `0` (35 format, 7 gate).
- Lần đầu trong sandbox dừng khi tạo junction tạm với `EPERM`; đã chạy lại ngoài sandbox theo quyền được cấp và hoàn thành. Test quyền đọc dùng Node `--permission` trên fixture, checker báo `ERR_ACCESS_DENIED` và exit `1`; đây là failure được cố ý tạo để kiểm chứng.

| Nhóm tình huống | Kết quả thực tế |
|---|---|
| LF và CRLF hợp lệ | Exit `0` cho cả hai. |
| Tab/mixed spaces-tab, trailing space, thiếu newline ở package/source/test/checker | 16 case exit `1`, có đúng file và dòng. |
| Vi phạm trong thư mục con của src/test/scripts | Cả 3 bị bắt, exit `1`. |
| Thiếu package/source/test, thiếu src/test, thư mục bị thay bằng file, file bắt buộc bị thay bằng thư mục, file rỗng | 9 case exit `1`. |
| Quyền đọc bị từ chối và junction tạo vòng lặp | Exit `1`, có chẩn đoán; không treo vòng lặp. |
| Cwd khác, file ngoài phạm vi, tab trong chuỗi/style không được checker kiểm | 3 case exit `0`, đúng phạm vi đã công bố. |
| Format lỗi | Gate exit `1`; không có output chạy `node --test`, sentinel từ test không được tạo. |
| Format đạt, test starter đỏ | Gate exit `1`, lỗi `not implemented` được giữ. |
| Format và test tổng hợp đạt | Gate exit `0`, sentinel chứng minh test chạy. Đây không phải test hành vi cartTotal. |
| Assertion lỗi hoặc test lỗi trong thư mục con | Gate exit `1`; case nested chạy đủ 2 tests, 1 pass/1 fail. |
| Thiếu checker hoặc scripts | Node loader báo `MODULE_NOT_FOUND`, gate exit `1` trước tests; không coi đây là thông báo từ checker chưa được load. |

- Mọi lần chạy format trên fixture đều so hash toàn bộ file trước/sau để chứng minh checker không ghi lại file. Fixtures của lần chạy thành công đã được xóa; bản sao của lần bị EPERM được dọn sau kiểm tra đường dẫn nằm trong thư mục review.

### Kết quả ở repository thật

| Lệnh | Exit code | Kết quả |
|---|---:|---|
| `node --check scripts/check-format.js` | 0 | Cú pháp checker hợp lệ; không dùng kết quả này thay format gate. |
| `npm run format:check` | 0 | `Format check passed (4 files)`. |
| `npm test` | 1 | 1 test, 0 pass, 1 fail; `Error: not implemented` tại `src/cart.js:3:9`. |
| `npm run check` | 1 | Format đạt rồi tests chạy và fail với cùng lỗi stub. |
| `git diff --check` | 0 | Không có lỗi whitespace trong tracked diff; file mới được kiểm riêng. |

- SHA-256 trước/sau giống nhau cho `src/cart.js`, `test/cart.test.js`, `.gitignore`, `REPOSITORY_LINK.md`; diff của bốn file này rỗng. Source hash `542ED2B06C9258D6036F9183718A2D0AB7B3CD27148F44D80CBD854DB15DF744`; test hash `A5DFD6933F701574F14E0A4A253805F8850DD6C45760685EB1132A03B1B0467B`.
- Hoàn tất dựng và kiểm chứng gate local. Workflow CI đã tạo và review, còn thiếu run thực tế sau push; CI dự kiến đỏ nếu hàm còn stub. Chưa báo harness/bài nộp hoàn tất hoặc tự nhận điểm.

## 11. Kiểm tra lại gate và xác minh CI trên GitHub

- Ngày: 12/10/2026, theo yêu cầu sinh viên kiểm tra kỹ gate một lần nữa rồi tiếp tục cấu hình CI và cho chạy trên GitHub. Phạm vi gồm commit/push harness và hồ sơ liên quan vào fork `origin`; không triển khai hàm/tests.
- Đọc lại checker, scripts, workflow, source/test, rules, README và hồ sơ. Không phát hiện lỗi cần sửa trong gate; giới hạn checker vẫn được công bố đúng trong README/rules.
- Chạy lại bộ kiểm chứng trên bản sao tạm: **42/42 tình huống đúng dự kiến**, script exit `0`, gồm 35 format và 7 gate. Kiểm tra hash trong từng case chứng minh checker không sửa file; fixtures của lần thành công được dọn.
- Lần chạy sandbox dừng ở junction với `EPERM`; đã chạy lại với quyền được cấp và hoàn thành. Đây là giới hạn sandbox khi tạo fixture, không phải lỗi checker.
- `npm run check` trên repo thật: format đạt (`4 files`), 1 test/0 pass/1 fail do `Error: not implemented` tại `src/cart.js:3:9`; exit `1`. `git diff --check` exit `0`.
- Đối chiếu lại release chính thức và `action.yml` tại đúng SHA đã pin của checkout/setup-node: versions và inputs đúng; không cần đổi workflow. Workflow vẫn push mọi branch, Linux, Node `24.x`, `contents: read`, không cài package/cache hoặc bỏ qua failure.
- `git ls-remote origin refs/heads/main` xác minh remote trước push ở `64cd54ed4f07431fb531bb8c0d8817493272c7e7`; GitHub API lúc đó báo `total_count: 0` cho workflows. Đây là mốc trước push; kết quả mới từ run thực tế được ghi bên dưới.

### Commit, push và run CI thực tế

- Commit harness: [`5579082d4cfb5a1d2ffe88df1557a07a8cedafa1`](https://github.com/nguyenkhoa838/wad-cart-starter/commit/5579082d4cfb5a1d2ffe88df1557a07a8cedafa1), `ci: add verified format and test gates`. Có 8 file thuộc phạm vi harness/hồ sơ; source/tests và contract không đổi.
- `git diff --cached --check` exit `0` trước commit; cả 8 file bàn giao có newline cuối file, không whitespace cuối dòng. `git push origin main` exit `0`, đưa remote từ `64cd54e` tới `5579082`.
- Workflow API xác nhận `CI`, path `.github/workflows/ci.yml`, state `active`. Run có event `push`, branch `main`, `head_sha` trùng toàn bộ SHA commit harness, status `completed`, conclusion `failure`.
- Run: [CI — 38238927330](https://github.com/nguyenkhoa838/wad-cart-starter/actions/runs/38238927330); job: [check — 114776398101](https://github.com/nguyenkhoa838/wad-cart-starter/actions/runs/38238927330/job/114776398101). Checkout và Setup Node.js đều `success`; bước `Run format and tests` là `failure`.
- Đã đọc log từ GitHub, không chỉ suy từ trạng thái: runner Linux, Node `v24.21.0` (cùng major `24.x` với local), lệnh `npm run check`, `Format check passed (4 files)`, 1 test/0 pass/1 fail, `Error: not implemented`, `Process completed with exit code 1`.
- Snapshot API và log lưu ngoài repo bài nộp tại `C:/Users/vongu/OneDrive/Documents/ChatGPT/IA#1 - Webdev/tmp/gate-review-20261012/github-ci-38238927330.json` và `github-ci-38238927330.log`; không lưu credential vào hồ sơ.
- Kết luận: gate local và cấu hình CI hoạt động đúng; test đỏ phản ánh hàm stub. Bước dựng/chạy CI đã được xác minh, chưa phải bài hoàn chỉnh hoặc CI xanh. Cập nhật hồ sơ kết quả bằng commit tài liệu tiếp theo; run trên đây là bằng chứng của đúng commit harness.

## 12. Chốt và review brief triển khai hàm/tests

- Ngày: 12/10/2026, sinh viên giao chốt brief triển khai hàm và yêu cầu review/kiểm tra kỹ. Task này tạo `BRIEF_IMPLEMENTATION.md`, cập nhật AI log/evidence; không triển khai source/tests, sửa harness hoặc commit/push.
- Bắt đầu tại HEAD `dcdd05694f4839f9f2d4e01576eca12a954da77e`, working tree sạch. Đọc trực tiếp rules, README, package, source/test, brief harness và hồ sơ hiện có; xác nhận Node local `v24.11.1`, npm `11.6.2`.
- Đọc lại đủ 4 trang PDF rubric gốc bằng pypdf và xem các PNG đã render từ rubric ở bước trước. Đối chiếu mục Behaviour, Tests, Brief; không tải lại slide/web hoặc xác minh remote trong task này. Case giỏ rỗng với options rút gọn dựa trên slide đã đọc và lưu ở mục 7, cùng rules hiện tại.
- Brief chốt allowlist source/tests/README/log/evidence, contract và RangeError, no dependencies/devDependencies, style/hàm thuần, test matrix và lệnh/điều kiện hoàn tất. README nằm trong scope triển khai để cập nhật câu trạng thái stub khi hàm thực sự được viết; không đổi đặc tả hoặc gate.
- Review tập trung vào VAT dạng tỷ lệ, ngưỡng subtotal trước VAT/ship với `>=`, giỏ rỗng và giỏ có item giá 0, giá lẻ/làm tròn cuối cùng, qty sai kiểu hoặc thiếu qty, lỗi ở item sau, options khác ví dụ và input không bị sửa. Tách các trường hợp chưa được đặc tả để không tự thêm validation/defaults/error contract.
- Ma trận gồm 13 case trả số, 10 case RangeError và 1 case input frozen, dự kiến 24 tests riêng; đây là kế hoạch, chưa phải tests đã được viết/chạy. `assert.equal` từ `node:assert/strict` kiểm cả giá trị và kiểu, không cần thêm test chỉ lặp lại `typeof`; message lỗi không bị ràng buộc.
- Dùng Python Decimal tính độc lập toàn bộ 13 expected: **13/13 đúng**, script exit `0`. C09 có tổng chính xác `30.60` -> `31`; làm tròn item, subtotal hoặc VAT sớm trong ba biến thể kiểm tra cho `30`. Các case C12/C13 dùng options riêng để phát hiện hardcode.
- Script và kết quả nằm ngoài repo bài nộp tại `C:/Users/vongu/OneDrive/Documents/ChatGPT/IA#1 - Webdev/tmp/brief-review-20261012/verify-brief.py` và `verification-results.json`. Script chỉ kiểm số liệu/bố cục brief và đối chiếu file với HEAD; không gọi `cartTotal` hoặc chạy bộ tests bài.
- Đối chiếu 10 file được bảo toàn với HEAD: source, test, package, checker, workflow, rules, brief harness, README, gitignore và repository link không đổi. Baseline đỏ dùng bằng chứng đã có ở mục 11; không chạy lại `npm test`/`npm run check` trong task tài liệu hoặc báo có kết quả implementation mới.
- QA tài liệu: `git diff --check` exit `0`; đọc riêng toàn bộ brief mới chưa được Git theo dõi, kiểm cả ba file tài liệu có newline cuối file và không whitespace cuối dòng. Review code fence, bảng Markdown, đủ sáu trường entry AI log và tính nhất quán giữa trạng thái brief/evidence. Chỉ có brief mới và AI log/evidence thay đổi, chưa commit/push.

## 13. Lập plan, review và bổ sung test hành vi

- Ngày: 12/10/2026. Sinh viên giao lập plan chi tiết cho bước tests, review/kiểm tra kỹ rồi thực hiện. Phạm vi là `TEST_PLAN.md`, `test/cart.test.js`, AI log và evidence; không triển khai hàm hoặc commit/push trong bước này.
- Đầu bước: HEAD `dcdd05694f4839f9f2d4e01576eca12a954da77e`; đã có thay đổi chưa commit ở AI log/evidence và brief triển khai mới. Lưu bản sao/hash 13 file trước khi làm; giữ các thay đổi đó. Môi trường: Node `v24.11.1`, npm `11.6.2`.
- Chạy baseline mới `npm test`: 1 test, 0 pass, 1 fail vì `Error: not implemented`, 0 cancelled/skipped/todo, exit `1`.

### Plan và review trước sửa tests

- Lưu `TEST_PLAN.md` trước code, với mục tiêu, allowlist, contract, nhóm input chưa đặc tả, ma trận 22 case số/20 case lỗi/3 case tính thuần, trình tự, QA đối kháng và điều kiện hoàn thành.
- Dùng script độc lập `review-plan.mjs` tính bằng BigInt theo đơn vị 1/100 và 1/10000 đồng: **22/22 expected đúng**, tổng **45 cases**, ID duy nhất; exit `0`. Không import `cartTotal` hoặc chạy tests bài ở bước kiểm toán. Tất cả 13 file đầu bước vẫn nguyên hash tại mốc review, chứng minh review xong mới sửa tests.
- Review đối chiếu README, rules và brief hiện có; dùng nguồn rubric/slide đã đối chiếu ở các mốc trước, không đọc lại PDF/slide/web hoặc xác minh remote trong task này. Không áp đặt input chưa đặc tả, default, error message hoặc chi tiết nội bộ của implementation.
- Giữ C01-C13 của brief; thêm biên làm tròn xuống/đúng nửa đồng, tổng nhiều item, ship một lần/VAT không áp lên ship, ngưỡng bằng 0, name và ship lẻ. Qty lỗi gồm các nhóm số không hợp lệ, mọi kiểu JavaScript khác number và field thiếu; mỗi case có tên riêng. Input mutable/frozen và nhánh lỗi có tests giữ nguyên dữ liệu riêng.
- Review bổ sung sau QA ban đầu: một biến thể trả kết quả trước validation khi miễn ship **pass toàn bộ 45 tests**, chứng minh thiếu case nhánh này. Cập nhật plan/review trước khi thêm E21/E22 cho giỏ `600000 + (-1)` và `600000 + 100 × 0`; cả hai vẫn vượt ngưỡng nhưng phải ném RangeError. Ma trận cuối cùng: **22 case số, 22 case lỗi, 3 case tính thuần = 47 tests**. Probe và plan mốc cũ được lưu ngoài repo, không sửa yếu expected hoặc source.

### Sản phẩm và kết quả repo thật

- Giữ nguyên toàn bộ test starter `the example from the slides` với expected `467400`; thêm 46 tests, tổng **47**. Dùng Node built-in, strict equality với expected literal và `assert.throws(..., RangeError)`, không skip/todo hoặc package mới. Test data/options riêng cho từng case; vòng lặp chỉ đăng ký tests theo dữ liệu.
- Đọc diff trước chạy. `node --check test/cart.test.js`: exit `0`.
- `npm run check` cuối cùng: checker đạt **4 files**; runner nhận **47 tests, 0 pass, 47 fail, 0 cancelled, 0 skipped, 0 todo**, exit **1**. Log có 47 stack locations `src/cart.js:3:9`; các failures do stub ném Error hoặc assertion nhận sai loại lỗi thay vì RangeError. Không có lỗi syntax/import.
- Source vẫn nguyên stub, README vẫn mô tả đúng trạng thái. Chưa đạt điều kiện `npm test` xanh của bài nộp, chưa có CI cho bộ tests mới. Các run CI mục 11 thuộc commit harness cũ, không phải kết quả task này.

### QA chất lượng tests ngoài repo bài nộp

- Bản sao tạm giữ nguyên file tests mới và sử dụng hàm tham chiếu riêng: **47 tests, 47 pass, 0 fail, 0 cancelled/skipped/todo**, exit **0**. Hàm tham chiếu chỉ nằm ngoài repo; không chép vào source bài.
- Script đối chiếu 20 fixture numeric trong bảng tests với input/options/expected đã kiểm toán, giữ nguyên C01 và chạy riêng C03 với options rút gọn. Lần đầu script QA gặp khác biệt LF/CRLF khi tìm đoạn fixture; sửa script để chuẩn hóa line endings khi đọc, rồi chạy lại thành công. Không sửa expected hoặc tests để xử lý lỗi tooling đó.
- QA ban đầu phát hiện 44/44 biến thể đã chọn, rồi probe nhánh miễn ship tìm ra lỗ hổng và thúc đẩy bổ sung hai tests. QA cuối cùng chạy **46 biến thể lỗi cố ý: 46/46 bị phát hiện, 0 survivor**; mỗi run nhận đủ 47 tests, exit `1` và không cancelled/skipped/todo. Các nhóm gồm bỏ/hardcode VAT, dùng rate như phần trăm, VAT lên ship; bỏ qty/item; sai ngưỡng/ship; empty/zero; làm tròn/kiểu trả về; validation/ép kiểu/loại lỗi ở cả hai nhánh ship; name và sửa input.
- Ví dụ evidence phân biệt bug: `M09` dùng `>` bị C04 phát hiện; `M25` round VAT sớm bị C09 phát hiện; `M26` round ship sớm bị C22 phát hiện; `M40` chỉ sửa input trước nhánh lỗi bị P03 phát hiện; `M41` dùng name làm giá bị C21 phát hiện; `M42` dùng fallback cho ngưỡng 0 bị C20 phát hiện; `M45/M46` bỏ validation giá/qty khi miễn ship bị E21/E22 phát hiện. Chi tiết tên test/fail count của đủ 46 biến thể có trong JSON/TAP.
- Kết quả tham chiếu/mutation chỉ QA bộ tests và các lỗi đã chọn; không chứng minh mọi input/bug, không được dùng để báo Behaviour của source bài đã đúng.

### Artifacts kiểm chứng và bàn giao

- Thư mục ngoài repo: `C:/Users/vongu/OneDrive/Documents/ChatGPT/IA#1 - Webdev/tmp/behaviour-tests-review-20261012/`.
- `before/` và `before-hashes.json`: snapshot đầu bước. `numeric-cases.json`, `review-plan.mjs`, `plan-review-results.json`: kiểm toán plan trước code.
- `plan-before-free-shipping-review.md`, `initial-45-test-qa-results.json`, `initial-45-repository-gate.log`, `initial-45-final-review-results.json`: mốc QA ban đầu được bảo toàn. `probe-free-shipping.mjs` và `free-shipping-validation-probe.mjs/.json/.tap`: bằng chứng lỗ hổng trước khi thêm hai tests.
- `repository-gate.log`: kết quả gate repo đỏ; `verify-tests.mjs`, `reference-cart.mjs`, `test-qa-results.json`, `mutation-logs/`: QA bản sao tạm. `test-qa-results.json` ghi SHA-256 của file tests đã kiểm chứng.
- QA bàn giao: so hash 10 file được bảo toàn (source, README, package, checker, workflow, rules, brief harness, brief implementation, gitignore, repository link); giữ nguyên phần AI log có sẵn và test starter; kiểm newline/whitespace file mới, bảng/ID plan, `git diff --check`. Kết quả chi tiết lưu trong `final-review-results.json`.
- Chỉ bốn file thuộc bước này thay đổi so với snapshot: plan mới, tests, AI log và evidence. Hàm chưa triển khai; bước tiếp theo là triển khai theo brief rồi chạy gate local và xác minh CI khi được giao.

## 14. Triển khai cartTotal và đạt gate local

- Ngày: 12/10/2026. Sinh viên giao triển khai hàm sau bước tests. Đọc rules/brief/source/tests/package và trạng thái Git; cập nhật phạm vi brief trước khi thay stub. HEAD `dcdd05694f4839f9f2d4e01576eca12a954da77e`, Node `v24.11.1`, npm `11.6.2`; giữ các thay đổi có sẵn, lưu snapshot/hash 14 file đầu bước.
- `src/cart.js`: giỏ rỗng trả `0` ngay; vòng lặp kiểm `price < 0` và qty bằng `Number.isInteger(qty)` cùng điều kiện dương, ném `RangeError` khi sai. Chỉ cộng `price × qty` sau validation; mọi item phải qua kiểm tra trước khi tính shipping, kể cả giỏ được miễn ship.
- VAT bằng subtotal nhân rate; miễn ship khi subtotal `>= freeShipFrom`, dùng nguyên options; trả `Math.round(subtotal + vat + shipping)`. Giá 0 và giá lẻ được xử lý theo contract, name không tham gia tính toán. Không sửa input, I/O/global, default/validation ngoài đặc tả hoặc dependency mới.
- Review diff trước chạy; `node --check src/cart.js`: exit **0**. `npm run check` trên repo thật: **format đạt 4 files; 47 tests, 47 pass, 0 fail, 0 cancelled, 0 skipped, 0 todo**, exit **0**. Đây là kết quả implementation thật; khác với các run tham chiếu tạm ở mục 13.
- Giữ nguyên SHA-256 của `test/cart.test.js` cùng TEST_PLAN/rules/package/checker/workflow/brief harness/gitignore/repository link so với đầu bước. Không thay expected hoặc làm yếu gate để có kết quả xanh. Chỉ source, trạng thái brief, README, AI log và evidence thay đổi trong bước này.
- README phản ánh hàm đã triển khai và gate local xanh; brief ghi phạm vi/kết quả thực tế, AI log thêm một entry đúng sáu trường. Các mốc stub/đỏ ở mục 4, 10-13 là lịch sử và được giữ nguyên.
- Artifacts kiểm chứng nằm ngoài repo tại `C:/Users/vongu/OneDrive/Documents/ChatGPT/IA#1 - Webdev/tmp/cart-implementation-review-20261012/`: `before/`, `before-hashes.json`, `repository-gate.log`, `final-review.mjs` và `final-review-results.json`. QA bàn giao kiểm hash/phạm vi, nội dung mới có newline và không whitespace lỗi, AI log giữ nguyên phần trước và `git diff --check` exit `0`.
- Hoàn tất triển khai hàm và kiểm chứng local. Chưa commit/push hoặc xác minh CI cho implementation; run ở mục 11 thuộc commit harness cũ. Không tự suy ra điểm rubric, hoàn tất báo cáo tự chấm hoặc gói nộp từ gate local xanh.

## 15. Review lại hàm, commit và xác minh CI xanh

- Ngày: 12/10/2026. Sinh viên giao review hàm, sửa lỗi nếu có, chạy lại gate, commit và xác nhận CI xanh. Đầu bước: HEAD `dcdd05694f4839f9f2d4e01576eca12a954da77e`, nhánh `main`; đã có 5 file tracked thay đổi và 2 file mới từ các bước brief/tests/implementation. Lưu snapshot/hash 14 file ngoài repo trước khi cập nhật hồ sơ, giữ các thay đổi có sẵn.
- Review toàn bộ `src/cart.js`, 47 tests, README, rules, brief/plan, package, checker và workflow. Không phát hiện lỗi cần sửa theo contract: giỏ rỗng trả trước khi đọc options; mọi item được kiểm giá/qty trước phép nhân và trước nhánh miễn ship; subtotal dùng đủ price/qty; VAT chỉ trên subtotal; ngưỡng dùng `>=` trước VAT/ship; làm tròn một lần ở cuối; input không bị sửa. Không bổ sung hành vi cho input chưa đặc tả.
- `npm run check` trên repo thật, Node `v24.11.1`, npm `11.6.2`: **format đạt 4 files; 47 tests, 47 pass, 0 fail, 0 cancelled, 0 skipped, 0 todo**, exit **0**. Log tại `C:/Users/vongu/OneDrive/Documents/ChatGPT/IA#1 - Webdev/tmp/cart-final-review-20261012/repository-gate.log`.
- `git ls-remote origin refs/heads/main` xác nhận remote ở đúng HEAD đầu bước. `git diff --check` và `git diff --cached --check` exit `0`; kiểm newline/whitespace đủ 14 file, đủ sáu trường mỗi entry AI log. So snapshot: source/tests/plan/rules/package/checker/workflow và các file còn lại được bảo toàn; chỉ brief/log/evidence cập nhật trong mốc review trước commit.
- Commit implementation/tests/hồ sơ: [`a42779d191c2d84fe188141d68daf5ab485e534c`](https://github.com/nguyenkhoa838/wad-cart-starter/commit/a42779d191c2d84fe188141d68daf5ab485e534c), `feat: implement cartTotal with reviewed behaviour tests`, đúng 7 file đã review. `git push origin main` exit `0`, remote từ `dcdd056` tới `a42779d`; working tree sạch sau commit. Chỉ push fork cá nhân, không push `upstream`.
- [CI — 38252231522](https://github.com/nguyenkhoa838/wad-cart-starter/actions/runs/38252231522): workflow `CI`, event `push`, branch `main`, full `head_sha` trùng commit implementation, status `completed`, conclusion `success`. [Job check — 114821199476](https://github.com/nguyenkhoa838/wad-cart-starter/actions/runs/38252231522/job/114821199476) và các bước checkout/setup-node/format-tests đều `success`.
- Đã đọc log GitHub: Linux, Node `v24.21.0`, lệnh `npm run check`, `Format check passed (4 files)`, **47 tests, 47 pass, 0 fail, 0 cancelled, 0 skipped, 0 todo**. Đây là CI implementation thật; run đỏ ở mục 11 vẫn giữ làm baseline lịch sử.
- Snapshot/hash, `precommit-review-results.json`, gate log và `github-ci-38252231522.json/.log/.zip` lưu ngoài repo tại `C:/Users/vongu/OneDrive/Documents/ChatGPT/IA#1 - Webdev/tmp/cart-final-review-20261012/`; không lưu credential. Hồ sơ kết quả này được commit riêng sau run thành công; commit tài liệu tiếp theo cần xác minh CI riêng trước bàn giao.
