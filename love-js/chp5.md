## 基本引用类型
引用值（或者对象）是某个特定引用类型的实例。在 ECMAScript 中，引用类型是把数据和功能组织到一起的结构，经常被人错误地称作“类。虽然从技术上讲 JavaScript 是一门面向对象语言，但ECMAScript 缺少传统的面向对象编程语言所具备的某些基本结构，包括类和接口。
引用类型有时候也被称为对象定义，因为它们描述了自己的对象应有的属性和方法。
### Date
```js
Date.parse('01/15/2022')
Date.parse('Jan 15,2022')
```
### RegExp
let exp=/pattern/flags
- g全局模式，表示查找字符串的全部内容，而不是找到第一个匹配的内容就结束
- i不区分大小写，表示在查找匹配时忽略 pattern 和字符串的大小写
- m多行模式，表示查找到一行文本末尾时会继续查找
- y粘附模式，表示只查找从 lastIndex 开始及之后的字符串
- u Unicode 模式，启用 Unicode 匹配
- s dotAll 模式，表示元字符.匹配任何字符（包括\n 或\r）
```js
// 匹配所有以"at"结尾的三字符组合，忽略大小写
let pattern3 = /.at/gi; 
// 匹配第一个"bat"或"cat"，忽略大小写
let pattern2 = /[bc]at/i; 
// 匹配第一个"[bc]at"，忽略大小写
let pattern2 = /\[bc\]at/i; 
```
RegExp 实例的主要方法是 exec()，主要用于配合捕获组使用。这个方法只接收一个参数，即要应
用模式的字符串。如果找到了匹配项，则返回包含第一个匹配信息的数组；如果没找到匹配项，则返回
null。返回的数组虽然是 Array 的实例，但包含两个额外的属性：index 和 input。index 是字符串
中匹配模式的起始位置，input 是要查找的字符串。这个数组的第一个元素是匹配整个模式的字符串，
其他元素是与表达式中的捕获组匹配的字符串。如果模式中没有捕获组，则数组只包含一个元素。
```js
let text = "mom and dad and baby"; 
let pattern = /mom( and dad( and baby)?)?/gi; 
let matches = pattern.exec(text); 
console.log(matches.index); // 0 
console.log(matches.input); // "mom and dad and baby" 
console.log(matches[0]); // "mom and dad and baby" 
console.log(matches[1]); // " and dad and baby" 
console.log(matches[2]); // " and baby" 
```
正则表达式的另一个方法是 test()，接收一个字符串参数。如果输入的文本与模式匹配，则参数
返回 true，否则返回 false。这个方法适用于只想测试模式是否匹配，而不需要实际匹配内容的情况。
```js
let text = "000-00-0000"; 
let pattern = /\d{3}-\d{2}-\d{4}/; 
if (pattern.test(text)) { 
 console.log("The pattern was matched."); 
}
```
### 原始值包装类型
为了方便操作原始值，ECMAScript 提供了 3 种特殊的引用类型：Boolean、Number 和 String。
### Gloabl

### Math