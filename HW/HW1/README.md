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
