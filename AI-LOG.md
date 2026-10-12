# AI-LOG — IA#1: cartTotal with a harness

`BRIEF.md` was consolidated on 12 October 2026 from the briefs used for the
harness and implementation tasks. Old filenames in the entries below reflect
the history; the originals remain available in Git even though the auxiliary
files have been removed from the current repository.

## 2026-10-12 — Analyze requirements

- **Tool:** OpenAI Codex.
- **Asked for:** Compare the assignment, rubric, and starter.
- **Kept:** The contract, test matrix, and submission checklist.
- **Changed:** Checked the PDF template and created the AI log.
- **Rejected:** None recorded.
- **By hand:** Reviewed the requirements, contract, and submission checklist.

## 2026-10-12 — Set up the repository

- **Tool:** OpenAI Codex.
- **Asked for:** Create a fork and connect the local repository.
- **Kept:** The personal fork, main branch, and starter history.
- **Changed:** Configured remotes/tracking and added `REPOSITORY_LINK.md`.
- **Rejected:** None recorded.
- **By hand:** Reviewed the fork link and repository configuration.

## 2026-10-12 — Run the initial test

- **Tool:** OpenAI Codex.
- **Asked for:** Run `npm test` to establish the baseline.
- **Kept:** One failing test due to `Error: not implemented`.
- **Changed:** Recorded the baseline; source/tests remained unchanged.
- **Rejected:** None recorded.
- **By hand:** Reviewed the test result and the cause of the initial failure.

## 2026-10-12 — Standardize the log and evidence

- **Tool:** OpenAI Codex.
- **Asked for:** Shorten the log and separate the evidence.
- **Kept:** The six template fields and a separate evidence file.
- **Changed:** Moved detailed verification results into the evidence file.
- **Rejected:** Copying full requests and lengthy evidence into the log because it lacked focus.
- **By hand:** Reviewed the log content and the separation of evidence.

## 2026-10-12 — Draft the harness brief

- **Tool:** OpenAI Codex.
- **Asked for:** Draft a short brief for review.
- **Kept:** `BRIEF_HARNESS.md`: scope, contract, no dependencies, gate/CI.
- **Changed:** Reduced the brief from about 120 to 51 lines; kept it as a draft.
- **Rejected:** Lengthy explanations and repeated points.
- **By hand:** Reviewed the draft brief and harness scope.

## 2026-10-12 — Write the rules

- **Tool:** OpenAI Codex.
- **Asked for:** Write rules specific to IA#1.
- **Kept:** `AGENTS.md`: stack, contract, style, tests, commands, Never.
- **Changed:** Separated assignment requirements from repository conventions and distinguished existing commands from planned ones.
- **Rejected:** None recorded.
- **By hand:** Reviewed the stack, style, and Never rules.

## 2026-10-12 — Review rules

- **Tool:** OpenAI Codex.
- **Asked for:** Check correctness, completeness, and consistency.
- **Kept:** The contract and a harness without added packages.
- **Changed:** Clarified qty, rounding, the checker, and self-assessment.
- **Rejected:** An overly broad description of missing fields, an absolute ban on claiming 100, and the loop condition.
- **By hand:** Reviewed the revised rules and their fit with the assignment.

## 2026-10-12 — Analyze the gate

- **Tool:** OpenAI Codex.
- **Asked for:** Explain the gate before implementation.
- **Kept:** The checker/gate/CI scope and pass/fail cases.
- **Changed:** Clarified that the gate would fail because of the stub; no implementation yet.
- **Rejected:** None recorded.
- **By hand:** Reviewed the gate flow and pass/fail cases.

## 2026-10-12 — Build the harness

- **Tool:** OpenAI Codex.
- **Asked for:** Review and build the format/test gate and CI.
- **Kept:** The built-in checker, scripts/workflow; all 42/42 cases behaved as expected.
- **Changed:** Finalized the brief before coding and added the harness; the function/tests remained at the starter baseline.
- **Rejected:** None recorded.
- **By hand:** Reviewed the checker, scripts, and CI workflow.

## 2026-10-12 — Verify the harness and CI

- **Tool:** OpenAI Codex.
- **Asked for:** Check the gate and run CI on the fork.
- **Kept:** 42/42 cases; CI passed format, while the test failed because of the stub.
- **Changed:** Reviewed the actions, committed/pushed the harness, and recorded CI evidence.
- **Rejected:** None recorded; review found no gate errors.
- **By hand:** Reviewed the gate results and CI status while the function was still a stub.

## 2026-10-12 — Finalize the implementation brief

- **Tool:** OpenAI Codex.
- **Asked for:** Finalize and review the brief for the function and tests.
- **Kept:** `BRIEF_IMPLEMENTATION.md`; rechecked all 13/13 numeric expected values.
- **Changed:** Clarified unspecified input and added cases for hardcoded values, early rounding, and frozen input.
- **Rejected:** A `typeof` test duplicating strict equality; validation/defaults outside the specification.
- **By hand:** Reviewed the implementation scope, contract, and planned cases.

## 2026-10-12 — Shorten the log wording

- **Tool:** OpenAI Codex.
- **Asked for:** Make the log more concise.
- **Kept:** Existing milestones, the six fields, and actual results.
- **Changed:** Shortened sentences and removed repetition.
- **Rejected:** Lengthy details already recorded in the evidence file.
- **By hand:** Reviewed the wording and points that needed to remain in the log.

## 2026-10-12 — Plan and add tests

- **Tool:** OpenAI Codex.
- **Asked for:** Create a plan, review it, and then write tests.
- **Kept:** `TEST_PLAN.md` and 47 tests, including the starter example.
- **Changed:** Checked 22 expected values, added 46 tests and error cases in free-shipping carts; QA passed 47/47 tests and detected 46/46 faulty variants. The gate still failed because of the stub.
- **Rejected:** Tests outside the specification; using the implementation to generate expected values.
- **By hand:** Reviewed the test groups and boundary cases.

## 2026-10-12 — Implement cartTotal

- **Tool:** OpenAI Codex.
- **Asked for:** Write the function according to the reviewed brief and tests.
- **Kept:** A pure function matching the contract, 47 tests, and the harness.
- **Changed:** Replaced the stub and updated the records; the local gate passed format and all 47/47 tests.
- **Rejected:** None recorded.
- **By hand:** Reviewed the formula, free-shipping condition, and error handling.

## 2026-10-12 — Review the function and verify CI

- **Tool:** OpenAI Codex.
- **Asked for:** Review the function, run the gate, commit/push, and check CI.
- **Kept:** The function, 47 tests, and the harness; review found no errors.
- **Changed:** Pushed to the fork and verified CI for the exact commit, with format and all 47/47 tests passing.
- **Rejected:** None recorded.
- **By hand:** Reviewed the function and gate/CI results.

## 2026-10-12 — Clean up the repository and consolidate the brief

- **Tool:** OpenAI Codex.
- **Asked for:** Remove auxiliary files and keep one brief matching the submission criteria, using two provided sample briefs as references.
- **Kept:** Code, 47 tests, the harness, README, rules, and existing log history.
- **Changed:** Consolidated the briefs into `BRIEF.md`; removed the two old briefs, `REPOSITORY_LINK.md`, `TEST_PLAN.md`, and `SELF_ASSESSMENT_EVIDENCE.md`; updated references. Old copies were saved outside the repository. `npm run check`: format passed, all 47/47 tests passed, exit `0`.
- **Rejected:** Keeping multiple briefs or including implementation history/verification results in the task brief.
- **By hand:** The student requested repository cleanup and supplied two sample briefs; no code written by hand was recorded in this step.
