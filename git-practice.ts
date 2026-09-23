//GIT-practice:
//
//STEP 1 — Create a new project
//WebStorm: File → New → Project/Name

//STEP 2 — Check Git installation
//Terminal command = git --version
//ACTUAL RESULT:

//STEP 3 — Initialize Git
//Terminal command = git init
//ACTUAL RESULT: WebStorm показал: Reinitialized existing Git repository in C:/Users/vladh/WebstormProjects/git-practice/.git/
//Это означает, что Git уже был инициализирован автоматически при создании проекта, а git init просто повторно подтвердил существующий репозиторий.

//STEP 4 — Check Git status
//Terminal command = git status
//ACTUAL RESULT: показывает: On branch master + Changes to be committed: modified: git-practice.ts
//То есть git-practice.ts уже изменён и добавлен в staging.

//Terminal command = git remote -v
//ACTUAL RESULT: ничего не вывелось. Это значит: локальный репозиторий пока не подключён к GitHub.

//STEP 5 — Stage project files
//Terminal command = git add .  (Точка . означает: добавить все файлы текущего проекта)
//ACTUAL RESULT: Git ответил только предупреждениями: LF will be replaced by CRLF - Это не ошибка. Это предупреждение о формате окончания строк Windows.

//STEP 6 — Make the first commit:
//Terminal command = git commit -m "Initial commit"
//ACTUAL RESULT: 95e81e1 (HEAD -> master) Initial commit.
// Это означает:
// 95e81e1 → короткий идентификатор commit;
// HEAD -> master → ты сейчас находишься на ветке master;
// Initial commit → первый commit создан и находится в истории.

//STEP 7 — Check commit history:
//Terminal command = git log --oneline
//ACTUAL RESULT:

//STEP 8 — Create a GitHub repository
//Открой обычный GitHub: https://github.com/new
//New repository → Repository name: git-practice → Выбери:Public
//НЕ ставь галочки: ❌ Add a README file/❌ Add .gitignore/❌ Choose a license (Потому что всё это уже есть/будет в нашем локальном проекте)
// → Create repository
//ACTUAL RESULT: GitHub создал URL: https://github.com/vladimirpodobed/git-practice.git

//STEP 9 — Connect the local project to the GitHub repository
//Terminal command = git remote add origin https://github.com/vladimirpodobed/git-practice.git

//Terminal command = git remote -v
//ACTUAL RESULT:
// origin  https://github.com/vladimirpodobed/git-practice.git (fetch)
// origin  https://github.com/vladimirpodobed/git-practice.git (push)
//Это означает:
//origin → имя удалённого GitHub-репозитория;
//(fetch) → откуда Git будет получать изменения;
//(push) → куда Git будет отправлять изменения.

//STEP 10 — Push the project to GitHub
//Terminal command = git push -u origin master (запустила отправку проекта на GitHub)
//ACTUAL RESULT:
//Enumerating objects: 14, done.
//Writing objects: 100% (14/14), done.
//To https://github.com/vladimirpodobed/git-practice.git
//* [new branch]      master -> master
//branch 'master' set up to track 'origin/master'.

//Это означает:
//локальный проект успешно отправлен на GitHub (The local project was successfully pushed to GitHub.);
//ветка master появилась на GitHub;
//локальная master теперь связана с origin/master (The local master branch is now connected to origin/master);
//авторизация через токен работает

//STEP 11 — Make some changes
//Added a new comment to practice making changes after the first push.
//ACTUAL RESULT:
//Добавил изменение в git-practice.ts.
//Во время работы появился файл gcm-diagnose.log.
//Не стал добавлять его в Git, а добавил gcm-diagnose.log в .gitignore.
//Изменение .gitignore тоже относится к подготовке STEP 11 перед вторым commit.

//STEP 12 — Check the changes via Terminal = git status
//Terminal command = git add .gitignore
//Terminal command = git status - результат для STEP 12
//ACTUAL RESULT: On branch master
//Branch is up to date with 'origin/master'.
//Changes to be committed:
//    modified: .gitignore
//    modified: git-practice.ts
//gcm-diagnose.log is not shown because it is now ignored by .gitignore.

//STEP 13 — Create a second commit
//Terminal command = git commit -m "Update project"
//ACTUAL RESULT:
//Changes not staged for commit:
//     modified: git-practice.ts - т.е. часть последних изменений git-practice.ts не попала во второй commit, т.к. commit забрал только то, что было в staging.

//[master 4e95a45] Update project
//2 files changed, 59 insertions(+), 6 deletions(-)

//This means:
//The second commit was successfully created.
//Commit ID: 4e95a45
//Commit message: Update project

//STEP 14 — Push the changes to GitHub
//Terminal command = git status
//ACTUAL RESULT: git status показывает:  Your branch is ahead of 'origin/master' by 1 commit. - после commit я ещё немного изменил git-practice.ts(добавил комментарии)
//Changes not staged for commit:
//     modified: git-practice.ts - последние изменения файла не вошли во второй commit.

//Добавляю эти изменения в тот же второй commit, а не создаваю третий commit:
//Terminal command = git add git-practice.ts
//Terminal command = git commit --amend --no-edit  - --amend = обновить последний commit, а --no-edit = сохранить его название Update project.
//Terminal command = git status
//ACTUAL RESULT:
//[master ae19984] Update project
//2 files changed, 92 insertions(+), 11 deletions(-)
//On branch master
//Branch is ahead of 'origin/master' by 1 commit.
//nothing to commit, working tree clean

//This means:
//The second commit was successfully updated.
//All changes are included in the second commit.
//The working tree is clean.

//Terminal command = git push
//ACTUAL RESULT:
//Enumerating objects: 7, done.
//Counting objects: 100% (7/7), done.
//Writing objects: 100% (4/4), done.
//To https://github.com/vladimiropodobed/git-practice.git
//95e81e1..ae19984  master -> master

//This means:
//The second commit was successfully pushed to GitHub.
//The remote master branch now contains the latest changes. - второй commit ae19984 успешно отправлен на GitHub

//⚠️ STEP 15 — Create a new branch
//Terminal command = git switch -c feature-update - Эта команда создаст новую ветку feature-update и сразу переключает меня на неё.
//Terminal command = git branch
//ACTUAL RESULT:
//Switched to a new branch 'feature-update'
//* feature-update
//  master

//This means:
//A new branch feature-update was created.
//I am currently working on feature-update.
//The master branch remains unchanged.

//⚠️ STEP 16 — Make changes on the new branch
//В самом конце git-practice.ts, после STEP 21, добавлено:
// STEP 16 practice change
//This change was made on the feature-update branch.

//STEP 16 practice change
//This change was made on the feature-update branch.
//Terminal command = git status
//ACTUAL RESULT:
//On branch feature-update

//Changes not staged for commit:
//    modified: git-practice.ts

//This means:
//A change was made in git-practice.ts.
//The change exists only in the feature-update branch.
//The change has not been staged or committed yet.

//⚠️ STEP 17 — Create a commit on the new branch
//Terminal command = git add git-practice.ts - Добавляем изменение в staging
//Terminal command = git commit -m "Add feature branch change"
//ACTUAL RESULT: commit на feature-update создан успешно:
//[feature-update 927c93c] Add feature branch change
// 1 file changed, 53 insertions(+), 4 deletions(-)

//⚠️ STEP 18 — Push the branch to GitHub
//Terminal command = git push -u origin feature-update - отправил локальную ветку feature-update на GitHub и установит связь: feature-update → origin/feature-update
//ACTUAL RESULT:
//The feature-update branch was successfully pushed to GitHub.
//GitHub created the remote branch feature-update.
//The local branch feature-update is now tracking origin/feature-update.
//GitHub provided a link to create a Pull Request: https://github.com/vladimirodobed/git-practice/pull/new/feature-update

//⚠️ STEP 19 — Open a Pull Request
//Terminal command = git push -u origin feature-update - command pushes the feature-update branch to GitHub.
//ACTUAL RESULT:
//GitHub created a link to open a Pull Request:
//https://github.com/vladimirodobed/git-practice/pull/new/feature-update

//On GitHub:
//Base branch = master
//Compare branch = feature-update
//GitHub showed: Able to merge - the branches can be merged automatically without conflicts.

//Pull Request title = Add feature branch change
//Pull Request was created successfully.

//The Pull Request contains 1 commit with the changes from the feature-update branch.

//⚠️ STEP 20 — Merge the Pull Request into the main branch
//On GitHub:
//Pull Request = feature-update → master
//GitHub showed: No conflicts with base branch

//Terminal command is not required for this step because
//the Pull Request is merged directly on GitHub.

//Action = click "Merge pull request"
//Then = click "Confirm merge"

//ACTUAL RESULT:
//The Pull Request was successfully merged into the master branch.
//The feature-update changes are now included in master.
//The Pull Request was automatically closed after the merge.

//⚠️ STEP 21 — Check the final result
//On GitHub:
//Selected branch = master
//ACTUAL RESULT:
//The changes from feature-update are now included in master.
//The Pull Request was successfully merged.
//The feature-update branch was merged into master.

//The GitHub repository now contains:
//- Initial commit
//- Update project commit
//- Feature branch change

//The Git workflow practice is completed successfully.

//STEP 16 practice change - Это мое изменение только в новой ветке.
//This change was made on the feature-update branch.

//⚠️ STEP 22 — Локальная проверка после merge с GitHubЖ
//Terminal command = git switch master
//Terminal command = git status
//Terminal command = git log --oneline --graph --all
//
//ACTUAL RESULT:
//Working branch: master
//master is synchronized with origin/master.
//Pull Request #1 was successfully merged into master.
//The merge commit 05f1679 was created.
//The feature branch commit 927c93c is now part of the master history.
//The final Git history contains:
//95e81e1 Initial commit
//ae19984 Update project
//927c93c Add feature branch change
//05f1679 Merge pull request #1 from vladimiropodobed/feature-update

//The Git practice is completed successfully.

//STEP 23 — Финальная проверка изменений после выполнения Git practice
//1. Проверяем статус:
//Terminal command = git status
//EXPECTED RESULT: modified: git-practice.ts

//2. Добавляем изменения в staging:
//Terminal command = git add git-practice.ts

//3. Создаём финальный commit:
//Terminal command = git commit -m "Complete Git practice notes"

//4. Отправляем финальный commit на GitHub:
//Terminal command = git push

//5. Обновляем страницу GitHub:
//Browser command = Ctrl + F5
