# Bằng chứng chuẩn bị self-assessment — IA#1

Ghi chú cập nhật ngày 12/10/2026 để tra cứu khi viết `SELF_ASSESSMENT_REPORT.md`. Đây là hồ sơ bằng chứng đang tích lũy, chưa phải báo cáo tự chấm và chưa có điểm tự nhận.

## 1. Tra cứu theo tiêu chí rubric

| Tiêu chí | Max | Bằng chứng hiện có | Trạng thái cần phản ánh khi tự đánh giá |
|---|---:|---|---|
| Behaviour | 30 | `src/cart.js:3`; mục 4 và 10 | Hàm còn ném `Error('not implemented')`; lần chạy mới vẫn fail, chưa chứng minh hành vi đúng. |
| Tests | 20 | `test/cart.test.js:7`, test `the example from the slides`; mục 4 và 10 | Có 1 test và đang fail; chưa bổ sung bộ test hành vi cho bài. |
| Harness | 20 | `AGENTS.md`, `scripts/check-format.js`, `package.json`, `.github/workflows/ci.yml`; mục 10 | Đã dựng và kiểm chứng gate local, format đạt; gate tổng đỏ do stub. Có workflow, chưa push/chưa có CI run. |
| Brief | 15 | `BRIEF_HARNESS.md`; mục 7 và 10 | Brief harness được cập nhật phạm vi đã giao trước khi code và dùng cho task dựng gate; chưa có brief triển khai hàm/tests. |
| AI-LOG.md | 15 | Các entry ngày 12/10/2026 trong `AI-LOG.md`; commit ở mục 3 | Đã ghi tác vụ phân tích/review/dựng gate cùng các mốc cũ; các entry sau commit tài liệu ở mục 3 chưa commit. |

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

- Đã viết rules và dựng checker, gate local, workflow CI; xem mục 10. Chưa triển khai `cartTotal`, bổ sung bộ test đầy đủ hoặc tạo `SELF_ASSESSMENT_REPORT.md` đã điền. Brief harness đã được dùng cho task dựng gate; chưa có brief hàm/tests, chưa có CI run và chưa chứng minh gate xanh của bài hoàn chỉnh.
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
- `git ls-remote origin refs/heads/main` xác minh remote trước push ở `64cd54ed4f07431fb531bb8c0d8817493272c7e7`; GitHub API lúc đó báo `total_count: 0` cho workflows. CI sẽ được xác minh sau push, không suy ra kết quả từ YAML.
