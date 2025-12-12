# FX学習ミニアプリ

スマホアプリ風のシングルページでFX基礎を学べるMVPです。10本のレッスンと各3問のクイズ、30語の用語集、PWA対応の簡易実装を含みます。

## セットアップ

依存ライブラリはありません。静的ホスティングやローカルサーバーで `index.html` を開くだけで動作します。
アイコンはSVGで同梱しており、バイナリファイルを扱えない環境でもそのまま表示・PWA登録できます。

### ローカルプレビュー例

```bash
python -m http.server 8000
# http://localhost:8000 へアクセス
```

## 主な機能
- ホーム：続きから学べるカード、進捗バー、口座開設CTA
- 学ぶ：カテゴリフィルタ付きレッスン一覧、詳細で読了管理
- クイズ：各レッスン3問の選択式、採点とシェアボタン
- 用語辞典：30語の検索・カテゴリフィルタ、詳細表示
- マイ：完了レッスンとクイズ履歴をLocalStorageで保持
- PWA：`manifest.json` と `service-worker.js` でキャッシュし、ホーム画面追加に対応

## 計測イベント（ログ出力）
- `lesson_complete`（slug）
- `quiz_complete`（slug, score）
- `quiz_share`（text）
- `cta_open_account_click`（placement）
