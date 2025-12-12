# Tasks: Physical AI Book Structure

**Input**: Design documents from `/specs/001-physical-ai-spec/`
**Prerequisites**: plan.md, spec.md

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Initialize a new Docusaurus project in `docusaurus-book/`
- [ ] T002 Install Docusaurus dependencies in `docusaurus-book/package.json`
- [ ] T003 Configure `docusaurus.config.js` for basic site metadata and plugin setup in `docusaurus-book/docusaurus.config.js`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T004 Define comprehensive content guidelines in `specs/001-physical-ai-spec/content-guidelines.md`
- [ ] T005 Define standard lesson format (introduction, objectives, main content, project/exercise, summary) in `specs/001-physical-ai-spec/lesson-format.md`
- [ ] T006 Create the `project-code-examples/` root directory for all code examples.

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Clear Book Structure (Priority: P1) 🎯 MVP

**Goal**: Readers can easily navigate the book content.

**Independent Test**: The Docusaurus site builds successfully and the sidebar accurately reflects the 8 chapters and 3 lessons each.

### Implementation for User Story 1

- [ ] T007 [US1] Create `docusaurus-book/docs/` directory
- [ ] T008 [US1] Create `docusaurus-book/docs/intro.md` for the book introduction
- [ ] T009 [P] [US1] Create Chapter 1 directory and `_category_.json` for `docusaurus-book/docs/chapter-1/`
- [ ] T010 [P] [US1] Create Lesson 1.1 file `docusaurus-book/docs/chapter-1/lesson-1.md`
- [ ] T011 [P] [US1] Create Lesson 1.2 file `docusaurus-book/docs/chapter-1/lesson-2.md`
- [ ] T012 [P] [US1] Create Lesson 1.3 file `docusaurus-book/docs/chapter-1/lesson-3.md`
- [ ] T013 [P] [US1] Create Chapter 2 directory and `_category_.json` for `docusaurus-book/docs/chapter-2/`
- [ ] T014 [P] [US1] Create Lesson 2.1 file `docusaurus-book/docs/chapter-2/lesson-1.md`
- [ ] T015 [P] [US1] Create Lesson 2.2 file `docusaurus-book/docs/chapter-2/lesson-2.md`
- [ ] T016 [P] [US1] Create Lesson 2.3 file `docusaurus-book/docs/chapter-2/lesson-3.md`
- [ ] T017 [P] [US1] Create Chapter 3 directory and `_category_.json` for `docusaurus-book/docs/chapter-3/`
- [ ] T018 [P] [US1] Create Lesson 3.1 file `docusaurus-book/docs/chapter-3/lesson-1.md`
- [ ] T019 [P] [US1] Create Lesson 3.2 file `docusaurus-book/docs/chapter-3/lesson-2.md`
- [ ] T020 [P] [US1] Create Lesson 3.3 file `docusaurus-book/docs/chapter-3/lesson-3.md`
- [ ] T021 [P] [US1] Create Chapter 4 directory and `_category_.json` for `docusaurus-book/docs/chapter-4/`
- [ ] T022 [P] [US1] Create Lesson 4.1 file `docusaurus-book/docs/chapter-4/lesson-1.md`
- [ ] T023 [P] [US1] Create Lesson 4.2 file `docusaurus-book/docs/chapter-4/lesson-2.md`
- [ ] T024 [P] [US1] Create Lesson 4.3 file `docusaurus-book/docs/chapter-4/lesson-3.md`
- [ ] T025 [P] [US1] Create Chapter 5 directory and `_category_.json` for `docusaurus-book/docs/chapter-5/`
- [ ] T026 [P] [US1] Create Lesson 5.1 file `docusaurus-book/docs/chapter-5/lesson-1.md`
- [ ] T027 [P] [US1] Create Lesson 5.2 file `docusaurus-book/docs/chapter-5/lesson-2.md`
- [ ] T028 [P] [US1] Create Lesson 5.3 file `docusaurus-book/docs/chapter-5/lesson-3.md`
- [ ] T029 [P] [US1] Create Chapter 6 directory and `_category_.json` for `docusaurus-book/docs/chapter-6/`
- [ ] T030 [P] [US1] Create Lesson 6.1 file `docusaurus-book/docs/chapter-6/lesson-1.md`
- [ ] T031 [P] [US1] Create Lesson 6.2 file `docusaurus-book/docs/chapter-6/lesson-2.md`
- [ ] T032 [P] [US1] Create Lesson 6.3 file `docusaurus-book/docs/chapter-6/lesson-3.md`
- [ ] T033 [P] [US1] Create Chapter 7 directory and `_category_.json` for `docusaurus-book/docs/chapter-7/`
- [ ] T034 [P] [US1] Create Lesson 7.1 file `docusaurus-book/docs/chapter-7/lesson-1.md`
- [ ] T035 [P] [US1] Create Lesson 7.2 file `docusaurus-book/docs/chapter-7/lesson-2.md`
- [ ] T036 [P] [US1] Create Lesson 7.3 file `docusaurus-book/docs/chapter-7/lesson-3.md`
- [ ] T037 [P] [US1] Create Chapter 8 directory and `_category_.json` for `docusaurus-book/docs/chapter-8/`
- [ ] T038 [P] [US1] Create Lesson 8.1 file `docusaurus-book/docs/chapter-8/lesson-1.md`
- [ ] T039 [P] [US1] Create Lesson 8.2 file `docusaurus-book/docs/chapter-8/lesson-2.md`
- [ ] T040 [P] [US1] Create Lesson 8.3 file `docusaurus-book/docs/chapter-8/lesson-3.md`
- [ ] T041 [US1] Configure `docusaurus-book/sidebars.js` to reflect 8 chapters with 3 lessons each

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Consistent Content Quality (Priority: P2)

**Goal**: Content contributors can create high-quality, consistent content.

**Independent Test**: A sample lesson created using the defined guidelines passes content review with minimal revisions.

### Implementation for User Story 2

- [ ] T042 [US2] Integrate `markdownlint` into Docusaurus project for content style enforcement in `docusaurus-book/package.json` and `.markdownlint.json`
- [ ] T043 [US2] Document the content review process in `docusaurus-book/docs/CONTRIBUTING.md`

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Docusaurus-Optimized Organization (Priority: P3)

**Goal**: The online version is easy to maintain and navigate.

**Independent Test**: The Docusaurus build and deployment process runs without errors.

### Implementation for User Story 3

- [ ] T044 [US3] Configure Docusaurus build process for production deployment in `docusaurus-book/docusaurus.config.js`
- [ ] T045 [US3] Implement a link checker for the Docusaurus site to validate internal and external links in `docusaurus-book/package.json`

**Checkpoint**: All user stories should now be independently functional

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T046 Review `docusaurus-book/README.md` and update with project setup instructions.
- [ ] T047 Ensure all example code repositories are correctly structured and linked from their respective lessons in `project-code-examples/`.

---

## Dependencies & Execution Order

### Phase Dependencies

-   **Setup (Phase 1)**: No dependencies - can start immediately
-   **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
-   **User Stories (Phase 3+)**: All depend on Foundational phase completion
    -   User stories can then proceed in parallel (if staffed)
    -   Or sequentially in priority order (P1 → P2 → P3)
-   **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

-   **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
-   **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
-   **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable

### Within Each User Story

-   Models before services
-   Services before endpoints
-   Core implementation before integration
-   Story complete before moving to next priority

### Parallel Opportunities

-   All Setup tasks marked [P] can run in parallel
-   All Foundational tasks marked [P] can run in parallel (within Phase 2)
-   Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
-   Different user stories can be worked on in parallel by different team members
-   Within User Story 1, tasks T009-T040 (creating chapter/lesson files) can be done in parallel.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1.  Complete Phase 1: Setup
2.  Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3.  Complete Phase 3: User Story 1
4.  **STOP and VALIDATE**: Test User Story 1 independently
5.  Deploy/demo if ready

### Incremental Delivery

1.  Complete Setup + Foundational → Foundation ready
2.  Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3.  Add User Story 2 → Test independently → Deploy/Demo
4.  Add User Story 3 → Test independently → Deploy/Demo
5.  Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1.  Team completes Setup + Foundational together
2.  Once Foundational is done:
    -   Developer A: User Story 1
    -   Developer B: User Story 2
    -   Developer C: User Story 3
3.  Stories complete and integrate independently

---

## Notes

-   [P] tasks = different files, no dependencies
-   [Story] label maps task to specific user story for traceability
-   Each user story should be independently completable and testable
-   Commit after each task or logical group
-   Stop at any checkpoint to validate story independently
-   Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
