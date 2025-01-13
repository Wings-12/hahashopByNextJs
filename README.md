# 花と服のお店のウェブサイト
[Translate in English](./README_EN.md)

## イメージ

### 1. ホーム
<img width="1566" alt="image" src="https://github.com/user-attachments/assets/2e631f6e-99fa-497a-9f7c-1cf72b73378b" />

### 2. 商品・サービス
<img width="1589" alt="image" src="https://github.com/user-attachments/assets/366e876a-2fe6-4b88-ba43-4d7f91f54904" />

### 3. ワークショップ
<img width="1578" alt="image" src="https://github.com/user-attachments/assets/00d6f39a-3c76-49c9-84db-e1864f796ef4" />

## 概要
このアプリケーションは、ユーザーが1日の振り返りをするための Web アプリです。Next.js と Supabase を用いた認証機能や、感情レベル（落ち込み・落ち込み気味・普通・元気・とても元気）を可視化するコンポーネントを備えています。ユーザーはログインして日々の気持ちを記録し、振り返ることができます。

## 動作環境
- Node.js 18.x
- npm 9.x
- Next.js 13.x
- Supabase

## 環境構築
- リポジトリをクローン後、以下のコマンドで依存関係をインストールしてください。
```
nmp install
```
- Next.js の開発サーバーを起動します。
```
npm run dev
```

## 使い方
日記ページでは、気持ちと感情レベルを入力して記録できます。

## 注意事項
環境変数は .env.local などで設定してください。

## 実装予定
1. 環境変数を使用したリダイレクトURL設定
1. Next.jsでは静的コンテンツを自動でキャッシュしているか確認
1. DBデータをキャッシュした方が安く運用できるか確認
1. 今の気持ちを10メモリに変更
1. Googleカレンダーと連携して、時間ブロックして予定を入れられるようにする
