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

//STEP 15 — Create a new branch
//
//ACTUAL RESULT:

//STEP 16 — Make changes on the new branch
//
//ACTUAL RESULT:

//STEP 17 — Create a commit on the new branch
//
//ACTUAL RESULT:

//STEP 18 — Push the branch to GitHub
//
//ACTUAL RESULT:

//STEP 19 — Open a Pull Request
//
//ACTUAL RESULT:

//STEP 20 — Merge the Pull Request into the main branch
//
//ACTUAL RESULT:

//STEP 21 — Check the final result
//
//ACTUAL RESULT: