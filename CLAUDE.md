# task-board

## プロジェクト概要

- タスクボード（タスク管理）アプリ。
- 技術構成：React + Vite（JavaScript）。タスクはブラウザのローカルストレージ（キー `task-board.tasks`）に保存し、再読み込みしても残る。
- 主なファイル：`src/App.jsx`（画面と動作）、`src/App.css`（見た目）。
- 起動：`npm run dev` → 表示された `http://localhost:5173/task-board/` をブラウザで開く。
- 整形：`npx prettier --write src`。ビルド確認：`npm run build`。
- 公開：GitHub Pages（https://typer0999.github.io/task-board/）。`main` にプッシュすると `.github/workflows/deploy.yml` が自動でビルド・公開する。公開先のパスに合わせて `vite.config.js` の `base` を `/task-board/` にしている。

## コーディングルール

- 変更は小さく、1 つの目的ごとに行う。
- コードの整形は Prettier に合わせる。
- API キーなどの秘密情報は `.env` で管理し、コードに直接書かない。

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
