- [HW1 git Sub-module](#HW1-git-sub-module)
- [HW2 React Redux](#HW2-react-redux)
- [HW3 docker build](#HW3-docker-build)

---

# HW1 git Sub-module

### 什麼是 git Sub-module ?

git 有許多指令，從一開始我自己一個人寫 project 用的 status、add、commit、push，到有協作經驗後的 checkout、branch、pull、merge，這些都還不是 git 指令的全部，因為這個新人作業有緣認識了 Sub-module，那這個我以前不認識的 Sub-module 究竟是什麼？
在網路上爬了一些文章後，我理解到的是：
他其實就也只是一種 git 工具，**用來處理使用別處的程式碼又希望能夠將兩個項目視為獨立的項目**

### 使用時機與實際演練該如何使用

#### 使用時機

1. 一個專案要用到其他專案的程式碼，希望能直接拿到其他專案的程式碼，這樣不用自己再去載，麻煩之外可能還會載到錯誤的版本。另外，又不想把對方的程式全部加到我的 repository 裡面，這樣會未來會很容易出問題，上游的程式碼修改，要自己手動更新，沒辦法用 git 的方式更新，增加錯誤的機會。

2.在開發過程中，專案隨著時間變得越來越大，開始生出子專案，此時就會遇到需要各專案共用一些 Code 的部分，如果共用的部分是用複製貼上的方式去同步，那就一定會造成兩邊不同步，維護困難。

#### 實際演練

git Sub-module 其實就是巢狀的 Git 結構，也就是你有一個 repository，裡面還有一個子 repository，兩個 repository 參考的是不同的 remote 的情況。而如果用一般的 Git Push 的話，子 repository 的資料並不會同步到 remote repository，因此這邊就要加入 Git Submodule 的指令操作

#### 情況一 使用別人的程式碼

`git submodule init`
`git submodule update`
或是
`git submodule update --init --recursive`

#### 情況二 自己的程式碼

##### 1.在主 repository 加入 git Sub-module

`git submodule add <remote repository> <local path>`
remote repository 是要填子 repository 的 URL，local path 指的是要放在本地端主 repository 的路徑位置
這時候在主 repository 會發現多了一個檔案，那就是 **.gitmodules**
接著對主 repository 進行 push 的動作，看遠端的 repository 會怎樣去連接子模組
push 成功後會看到有一個 Hash 值，對應到 git-sub-module 第一次 commit 的 Hash 值，因此這邊如果點擊的話，會自動跳到 git-sub-module repository 的頁面，表示成功建立子模組的關係

##### 2.子模組進行更新後，如何同步

1.在本地端對子模組進行新的內容更改，並 push 到 remote repository

2.主模組的子模組同步更新
這邊轉移到本地端 git-main-module 主模組這邊進行子模組的更新
`git submodule update --remote --merge`

3.當執行完後，在看看 git-sub-module 裡面的內容會發現同步更新了！
這時候就可以把更新內容 push 上去到主模組那邊，讓 remote 那邊的子模組也可以指到新的內容

#### 3.如果我直接對主模組下的子模組進行更新，那要怎麼操做

這時候的話，需要分兩次 push，分別是子模組的內容的 push，主模組的內容的 push 1.在主模組的子模組下修改完成後，直接下 commmit push 上去 2.再回到主模組 下 commmit push 上去 就可以了

參考資料：
[Kenny's-Blog][1]
[Git][2]
[Puck's-Blog][3]

[1]: https://blog.kennycoder.io/2020/06/14/Git-submodule-%E4%BD%BF%E7%94%A8%E6%95%99%E5%AD%B8/ "Kenny's Blog"
[2]: https://git-scm.com/book/en/v2/Git-Tools-Submodules "Git"
[3]: https://blog.puckwang.com/post/2020/git-submodule-vs-subtree/ "Puck's-Blog"

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

# HW3 docker build
# sky
