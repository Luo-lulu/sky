# HW2 React Redux

以前還在寫原生 js 的超菜鳥時期也有寫過計算機，那時候還不知道有 React 的存在，更不知道 Redux 這個管理資料的模式，當時寫的蠻辛苦的ＸＤ，勉勉強強才寫出加減乘除跟小數計算的功能，整個程式碼還冗長到不行（當時還只會用 if else），還不能夠連續使用，但回頭想想當初寫的經驗也是減少了一些我這次開發的時間

#### React

首先是在 React 的部分，善用組建可重複使用的特性，程式碼簡短了不少，像是在計算機的按鈕組件，將傳入的 sign 或 number 呈現在按鈕上，以及 onClick 函式與 onClick event 連結，只要把共用邏輯提取出來，組件就可以重複在 container 一直使用

#### Redux

以前的作品都太小了幾乎不太需要用到 Redux，所以可以說對 Redux 是根本沒經驗，拿到這份作業的時候想說要好好加強在這方面，再看了好幾次教學跟官方文件後大致了解 Redux 的基礎運作方式，參照以前看過的大型專案，用了 connect（）的方式，不知道 Redux 存在的 dumb components 檔案放在 components 裡，會跟資料有連接的 smart components 就放在 containers，對我來說有比較職責分明的感覺

### 加減乘除」基本功能與「小數計算」

因為涉及到小數點所以在按下數字鈕顯示時基本上是用字串的形式接起來，按下等於時再使用 parseFloat（）的方式把字串數字轉成數值數字做計算

### 自己實作專案基礎建設，目標轉譯到 ES5 版本支援 IE10 版本

以前自己寫的作品都是用 `npx creact-react- app`來完成的，所以基本配置都交給官方了ＸＤ
嚴格來說這是我第一次自己手動建環境，整個過程不算順利，好在最後還是有成功建起來

#### webpack

因為使用 react 會用到 import，那就需要 webpack 幫忙 bundle 把檔案都打包在一起

1.`npm init`
就會多出一個 package.json 檔案
接著就可以裝 webpack 了

2.｀ npm i webpack webpack-cli ｀
新增一個 webpack.config.js 的設定檔寫入設定（可以參考官方文件）

3.在 package.json 的 script 中寫入指令，例如：
"start": "webpack --mode development"
完成後在終端機只要下 `npm run start`就會跑上方的指令了
接著就會依照 webpack.config.js 所寫的 filename 打包出一個檔案
回到 html 加入`<script defer src="filename的路徑"></script>` 就ＯＫ了

#### babel

因為多數的開發已經在使用 ES6 甚至 ES7 了但很多瀏覽器其實還是不支援，所以就要仰賴 babel 的幫忙

1.`npm i babel-loader @babel/core @babel/preset-env`

2.新增一個.babelrc 的設定檔寫入設定

3.融合進 webpack
在 webpack.config.js 的設定 loader，例如：

```
module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
```

這樣 webpack 在打包的時候看見.js 結尾的檔案就會用指定的 loader，最後就會透過 babel 把程式碼轉成 ES5 了
exclude 可以排除不需編譯的部分

#### 把 react 加進來

1.`npm react react-dom @babel/preset-react`

2.在 babelrc 裡加入@babel/preset-react

React 的部分到這邊其實就可以用了～～
有時間的話再把開發中很好用的 webpack-dev-server 補充進來

### Production 版本使用 NodeJs 作為伺服器架起專案

這題目我真的看了超久沒有看懂ＸＤ，在我覺得我好像知道該查什麼資料的時候又發覺我好像還是沒懂，甚至請我男友來幫我解惑，總之最後我們覺得題目應該是在表達，我 build 完有個 production 版本了，把它用 node.js 跑起來

開發版本：我一改程式碼刷新 localhost(甚至不用刷新)，app 就會動
產品版本：我改本地端的程式碼，不上 code，產品版本是不會理我的

參考了很多資料才拼拼湊湊完成的
[How To Develop and Build React App With NodeJS][1]
[ 第一次 NodeJS 就上手 Part 2][2]
[Express][3]
[1]: https://medium.com/bb-tutorials-and-thoughts/how-to-develop-and-build-react-app-with-nodejs-bc06fa1c18f3 "How To Develop and Build React App With NodeJS"
[2]: https://ithelp.ithome.com.tw/articles/10091129 " 第一次 NodeJS 就上手 Part 2"
[3]: https://expressjs.com/zh-tw/ "Express"

1.首先我開了一個 server 的資料夾（參考的範例主要是放 API 相關的東西，雖然我的作品沒有用到，但還是跟著範例一步一步做）
對了，要特別再開一個資料夾是因為 npm 套件後會有 node_modules，會與根目錄的相撞容易出問題

2.`npm init` 生成一個 package.json 檔案

3.`npm i express nodemon`
完成後回到 package.json 在 scripts 寫入

```
"start": "node server.js",
   "build": "webpack",
   "dev": "nodemon ./server.js localhost"
```

4.新增一個 server.js 檔，依照 express 的文檔寫入內容

5.接著`npm run dev`就成功啦！！

雖然回頭寫這些心得跟過程感覺好像步驟很少，但其實真的要花很多時間去了解跟實作，就算我今天真的做出來了，我也完全不敢說我已經掌握它了，只能說很感謝網路上有很多願意分享經驗的人，才讓我這個小白有辦法能夠完成作業
