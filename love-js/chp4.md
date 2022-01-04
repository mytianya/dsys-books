## 原始值与引用值
在JS中变量可以包括两种值：原始值与引用值。
- 原始值为Undefined 、 Null 、 Boolean 、 Number 、 String 和 Symbol。保存原始值的变量是按值访问的。
- 引用值指向保存在内存中对象
## 动态属性
JS中原始对象不能有动态属性，引用值指向的对象可以有动态属性。原始值使用New会创造一个Object对象实例。
```js
let user="dsys"
user.name='aa'
console.log(user.name)//undefined
let user1=new String("dsys")
user1.name="aa"
console.log(user1.name)//aa
```
## 执行上下文与作用域
变量或者函数的上下文决定了他们能够访问那些数据，以及他们的行为。每个上下文都有一个与之关联的**变量对象**，而这个上下文所有的变量跟函数都会存在于这个对象之上。
### 全局上下文
在浏览器中全局上下文，也就是最外层的上下文就是我们所说的window对象。因此所有使用var定义的对象，都会成为window对象的属性以及方法。
上下文在其所有代码都执行完毕后会被销毁，包括定义在它上面的所有变量和函数（全局上下文在应用程序退出前才会被销毁，比如关闭网页或退出浏览器）。