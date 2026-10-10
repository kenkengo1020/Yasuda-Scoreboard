# 卓球スコアボード

シングルス・ダブルスの試合進行、メンバー管理、対戦履歴、リーグ戦などに対応した、ブラウザーで動作する卓球用スコアボードです。HTMLファイルをブラウザーで開いて利用できます。

## 主な機能

### スコアボード・試合進行

-   左右のプレイヤー／チームへの得点加算
-   直前の得点を戻す操作
-   シングルス・ダブルスの試合設定
-   最初にサーブする選手の設定
-   得点、サーブ交代間隔、最大ゲーム数などのルール設定
-   タイムアウトの設定と管理
-   試合の中断・再開
-   コートチェンジ
-   ゲームごとのスコア記録
-   試合結果の記録

### メンバー管理

-   選手の追加・管理
-   登録選手を使った対戦設定
-   選手ごとの対戦成績の確認

### リーグ戦・トーナメント

-   リーグ戦やトーナメントの作成
-   対戦表の表示
-   試合結果の記録
-   順位・勝敗の確認

### 履歴・分析

-   対戦履歴の保存と確認
-   ゲームごとのスコア確認
-   試合中に記録された得点ログを利用した分析
-   試合結果の共有・出力に関する機能

※
得点推移やサーブ別の分析など、一部の分析は対応する記録がある試合で利用できます。

### 表示・操作のカスタマイズ

-   ライト／ダークテーマ
-   アクセントカラーの変更
-   スコア数字や画面レイアウトの調整
-   PC・タブレットなどの大きな画面向け表示設定
-   キーボード操作とキー割り当ての設定
-   誤操作防止用の画面ロック
-   効果音、音量、音声コールの設定
-   時計・アラーム・カウントダウンタイマーなどの表示設定
-   ダブルスのサーブ／レシーブ順などの表示設定

## 起動方法

### 方法 1：HTMLファイルを直接開く

1.  `scoreboard (2).html` をパソコンに保存します。
2.  ファイルをダブルクリックするか、Chrome、Edge
    などのブラウザーにドラッグ＆ドロップして開きます。
3.  メンバーを登録し、試合形式とルールを設定してスコアボードを開始します。

ファイル名は任意に変更できますが、拡張子 `.html` は維持してください。

### 方法 2：Webサイトとして公開する

HTMLファイルをWebサーバーにアップロードし、発行されたURLにアクセスして使用できます。HTTPSで公開すると、ブラウザーのService
Workerによるキャッシュ機能を利用できる構成になっています。

## 基本的な使い方

1.  **メンバー管理**で選手を登録します。
2.  **新規対戦設定**でシングルス／ダブルス、対戦する選手、最初のサーバー、試合ルールを設定します。
3.  **スコアボード**で左右の得点を操作します。
4.  必要に応じて、得点を戻す、タイムアウト、コートチェンジ、試合の中断などを使用します。
5.  試合終了後、対戦履歴やリーグ戦の結果を確認します。
6.  表示やキー操作を変更したい場合は、**設定**を開きます。

画面に表示されるボタン名や設定項目は、実際のアプリ画面を確認してください。

## データ保存について

このアプリは、ブラウザーの `localStorage`
を使ってデータを保存します。通常、同じブラウザー・同じ保存元で再度開くと、登録したメンバーや設定などを引き続き利用できます。

-   ブラウザーのサイトデータ／保存データを削除すると、保存内容が失われる場合があります。
-   HTMLファイルを別のPCやスマートフォンにコピーしただけでは、保存データは自動で共有されません。
-   ブラウザーや公開URLが変わると、別の保存領域として扱われる場合があります。
-   大切な試合記録は、ブラウザーのデータ削除前に必要な方法で別途保管してください。

## オフライン利用について

HTMLファイルを直接開いて動作する機能は、ローカル環境でも利用できる場合があります。ただし、オフライン時の動作はブラウザーや利用環境に左右されます。

HTML内には `sw.js` を登録する処理がありますが、Service
Workerによるキャッシュを有効にするには、対応する `sw.js`
ファイルをHTMLと同じ公開場所に配置し、HTTPSなどService
Workerが利用できる環境から配信する必要があります。このHTMLファイルだけで、すべてのリソースのオフライン利用が保証されるわけではありません。

## 技術情報

-   種類：ブラウザーで動作するHTMLアプリ
-   UI：React、Tailwind CSS系のクラスを使用
-   データ保存：ブラウザーの `localStorage`
-   オフラインキャッシュ：`sw.js` が配置された対応Web環境でService
    Workerを登録
-   主な想定環境：PC・タブレットなどのWebブラウザー

## 注意事項

-   試合前に、得点方式・サーブ交代・ゲーム数などの設定が実際の試合ルールに合っているか確認してください。
-   試合中の誤操作を防ぐため、必要に応じて画面ロックやキー操作設定を利用してください。
-   ブラウザーの保存データに依存するため、端末間での自動同期やクラウドバックアップが常に提供されるわけではありません。

------------------------------------------------------------------------

# Table Tennis Scoreboard

A browser-based table tennis scoreboard for managing singles and doubles
matches, player lists, match history, and league play. Open the HTML
file in a compatible web browser to use the app.

## Features

### Scoreboard and Match Flow

-   Add points to either player or team
-   Undo the most recent scoring action
-   Configure singles and doubles matches
-   Choose the first server
-   Configure match rules, including points required to win,
    serve-change interval, and maximum games
-   Configure and manage timeouts
-   Pause and resume a match
-   Change court sides
-   Record scores for each game
-   Save match results

### Player Management

-   Add and manage players
-   Select registered players when setting up a match
-   Review player match records

### League and Tournament Play

-   Create leagues or tournaments
-   View match schedules
-   Record match results
-   Review standings and wins/losses

### History and Statistics

-   Review match history
-   View scores for individual games
-   Use recorded scoring logs for analysis
-   Access available match-result sharing or export features

Some statistics require the relevant match data to have been recorded.

### Display and Control Customization

-   Light and dark themes
-   Accent-color customization
-   Score display and layout options
-   Display settings for larger screens, including PCs and tablets
-   Keyboard controls and key-binding settings
-   Screen lock to help prevent accidental input
-   Sound effects, volume, and voice-call settings
-   Clock, alarm, and countdown-timer settings
-   Display options for doubles serving and receiving order

## Getting Started

### Option 1: Open the HTML File

1.  Save `scoreboard (2).html` to your computer.
2.  Double-click the file, or drag it into a browser such as Chrome or
    Microsoft Edge.
3.  Register players, configure the match format and rules, and start
    using the scoreboard.

You may rename the file, but keep the `.html` extension.

### Option 2: Host It as a Website

Upload the HTML file to a web server and open the URL provided by the
hosting service. The app includes code to register a Service Worker,
which can support caching when hosted over HTTPS with the required
service-worker file in place.

## Basic Usage

1.  Add players in **Player Management**.
2.  In **New Match Setup**, select singles or doubles, choose the
    players, select the first server, and configure the match rules.
3.  Use the **Scoreboard** to update the score.
4.  If needed, undo a point, manage timeouts, change court sides, or
    pause the match.
5.  After the match, review the history or league results.
6.  Open **Settings** to customize the display or keyboard controls.

The exact labels and locations of controls may vary according to the
current app interface.

## Data Storage

The app uses the browser's `localStorage` to save data. Saved players
and settings are generally available when you reopen the app in the same
browser and storage context.

-   Clearing browser site data or saved data may delete stored
    information.
-   Copying the HTML file to another PC or phone does not automatically
    synchronize saved data.
-   A different browser or hosting URL may use a separate storage area.
-   Keep separate backups of important match records before clearing
    browser data.

## Offline Use

Some features may work when the HTML file is opened locally, but offline
behavior depends on the browser and the environment.

The HTML includes code that registers `sw.js`. For Service Worker
caching to work, the corresponding `sw.js` file must be available at the
appropriate location, and the app must be served from a supported
context such as HTTPS. Offline use of every resource is not guaranteed
by the HTML file alone.

## Technical Information

-   Type: Browser-based HTML application
-   UI: React and Tailwind CSS-style utility classes
-   Data storage: Browser `localStorage`
-   Offline caching: Service Worker registration when `sw.js` is
    available in a supported web environment
-   Intended environment: Modern web browsers on PCs, tablets, and
    similar devices

## Notes

-   Before a match, confirm that the scoring format, serve-change rules,
    and number of games match the rules you intend to use.
-   Use the screen lock or keyboard settings as needed to reduce
    accidental input during a match.
-   Automatic cross-device synchronization and cloud backup are not
    guaranteed; saved data depends on the browser's storage.
