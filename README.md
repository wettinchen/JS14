## JavaScript Chapter 14
It is my coding practice with the TUTORIAL of Dave Gray. 

## Source
### Dave Gray 的 JavaScript 課程
https://youtube.com/playlist?list=PL0Zuz27SZ-6Oi6xNtL_fwCrwpuqylMsgT

### Dave Gray 的 YouTube 頻道
https://www.youtube.com/@DaveGrayTeachesCode

## JavaScript Chapter 14
   Quick Concept outline
   中文摘要說明與重點提問

###  1. Intro 
        教學影片開頭和介紹

###  2. What makes var different
        (1)指派 var x = 1。
        (2)重複的 var 指派不會顯示錯誤。

###  3. What makes let different
        (1)重複的 let 指派會導致 Uncaught SyntaxError。
        (2)重複的指派不會顯示錯誤。

###  4. What makes const different
        (1)重複的 const 指派會導致 Uncaught SyntaxError。
        (2)重複的指派會導致 Uncaught TypeError。

###  5. A discussion of scope
        scope 分為 global scope 和 local scope

###  6. Global Scope
        用 global scope 進行宣告

###  7. Local Scope
        local scope 分為 block scope 和 function scope

###  8. Block Scope
        用 block scope 進行宣告

###  9. Function Scope
        用 Function scope 進行宣告

### 10. Local Scope variables declared with let or const are not available in global scope
        (1)在 global scope 不指派 y 並回傳 y，會導致 Uncaught ReferenceError。
        (2)在 global scope 不指派 y ，並在 block scope 回傳 y
        (3)在 global scope 不指派 z 並回傳 y，會導致 Uncaught ReferenceError。
        (4)在 global scope 不指派 z ，在 function scope 回傳 z，設定函數回傳結果

### 11. Nested block scope inside of a function
        將 block scope 放入function scope 回傳 z，設定函數回傳結果

### 12. Global scope variables are available in local scopes
        觀察 y 在 global scope 和 local scope 的結果

### 13. Global scope is available to all scopes

### 14. If statements have block scopes

### 15. for loops have block scopes

### 16. switch statements have block scopes

### 17. Review of scopes so far...
        block scope 的 const 只會影響block 以內的部分，不會影響到 block 以外的部分

### 18. A 2nd Example of global, function, and block scopes
        (1)指派 x, y, z，設定 global scope, function scope 和 block scope，並觀察結果。
        (2)指派 x, z，設定 function scope，並觀察結果。
        (3)指派 x, z，設定 block scope，並觀察結果。
        (4)移動 block scope，並觀察結果。

### 19. Note: var is function scoped; const & let are block scoped

### 20. Review with helpful graphic