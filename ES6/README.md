# ES6知识点
## ES6模块化
### 导出export
```javascript
export const PI=3.14
export function say(){
    console.log("hello ES6")
}
```
推荐使用export批量导出
```javascript
const PI=3.14
function say(){
    console.log("hello ES6")
}
export {PI,say}
```
导出时重命名
```javascript
const PI=3.14
function say(){
    console.log("hello ES6")
}
export {PI as pi,say}
```
默认导出，export default一个模块只有一个
```javascript
export default function(){
    console.log("hello ES6")
}

```
### 导入import
```javascript
import {PI,say} from 'component.js'
//重命名
import {say as newsay} from 'component.js'
//创建模块对象
import * as m from 'component.js'
//动态加载
import('component.js').then((module)=>{
    module.say()
})
```