# task-board

## プロジェクト概要

- タスクボード（タスク管理）アプリ。タスクの追加、完了・未完了の切り替え、削除ができ、完了済みはグレーで表示する。
- タスクはブラウザのローカルストレージ（キー `task-board.tasks`）に保存し、再読み込みしても残る。
- 主なファイル：`src/App.jsx`（画面と動作）、`src/App.css`（見た目）、`src/main.jsx`（起動処理）。
- 起動：`npm run dev` → 表示された `http://localhost:5173/task-board/` をブラウザで開く。
- 整形：`npx prettier --write src`。ビルド確認：`npm run build`。

## 技術スタック

- 言語：JavaScript（JSX）。TypeScript は使っていない。
- UI：React 19（関数コンポーネントと Hooks：`useState`、`useEffect`）。
- ビルド・開発サーバー：Vite 8（`@vitejs/plugin-react`）。
- スタイル：素の CSS（`src/App.css`）。CSS フレームワークは使っていない。
- 整形：Prettier 3（設定ファイルなし＝標準設定）。
- データ保存：ブラウザのローカルストレージ。サーバーやデータベースは無い。
- 実行環境：Node.js 24 / npm 11。
- 公開：GitHub Pages ＋ GitHub Actions（`.github/workflows/deploy.yml`）。

## デプロイ先

https://typer0999.github.io/task-board/

- `main` にプッシュすると、GitHub Actions が自動でビルドして公開する（数分かかる）。
- 公開先のパスに合わせて、`vite.config.js` の `base` を `/task-board/` にしている。リポジトリ名を変えたら、ここも合わせて変える。

## コーディングルール

- 変更は小さく、1 つの目的ごとに行う。
- コードの整形は Prettier に合わせる。
- API キーなどの秘密情報は `.env` で管理し、コードに直接書かない。
- コメントは日本語で、処理のまとまりごとに「何をするか」を短く書く。

## 命名規約

- コンポーネント：PascalCase（例：`App`）。1 ファイルに 1 コンポーネントとし、ファイル名もコンポーネント名と同じにする（例：`App.jsx`）。
- コンポーネントを分けるときは `src/components/` に置く（例：`src/components/TaskItem.jsx`）。
- 関数：camelCase で「動詞＋対象」にする（例：`addTask`、`toggleTask`、`deleteTask`、`loadTasks`）。
- state：`[値, set値]` の組にする（例：`[tasks, setTasks]`、`[text, setText]`）。
- 定数：UPPER_SNAKE_CASE（例：`STORAGE_KEY`）。
- CSS クラス：kebab-case（例：`add-form`、`task-list`）。状態を表すクラスは短い単語で付け足す（例：`task done`）。
- ローカルストレージのキー：`task-board.<データ名>`（例：`task-board.tasks`）。

## Git 運用ルール

- コードを変更したら、そのたびにコミットして GitHub にプッシュする。
  - 「1 つの作業（機能追加・修正など）が終わり、動作を確認できた時点」を 1 回の区切りとする。1 行直すごとではない。
  - 動かない状態のコードはプッシュしない。
- コミットの前に必ず確認する：
  - `git status` で、意図しないファイルが含まれていないか。
  - `.env` が含まれていないか（`.gitignore` に `.env` が入っていること）。
- コミットメッセージは日本語で、何をしたかを 1 行で書く（例：「タスクの削除ボタンを追加」）。
- `git push --force` や履歴の書き換えはしない。
- プッシュに失敗したら、自己判断で強引に解決せず、原因と対処をユーザーに説明して確認する。
