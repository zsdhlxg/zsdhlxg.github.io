# 变量
## 声明
关键字`let`或`var`  变量名（字母或_或$开头）;
## 数据类型
- String `let name = 'li';`
- Number `let n = 10;`
- Boolean `let t = 'true';`
- Array `let a = [1,'li',10,true];`
- Object **JS里一切皆对象，一切皆可储存在变量中** 
  `let myHeading = document.querySelector('h1');`及以上所有事例还有函数

# 运算符
1. 加 数字相加或拼接两个字符串
2. 减乘除 - * /
3. 赋值 =
4. 等于 === 返回布尔值
5. 不等于 !== 返回布尔值
6. 取非 !
7. 、、、

# 数据结构和类型
## 数据类型
 - 七种基本类型
   - 布尔值
   - null 在数值环境中是0，在布尔环境中是false
   - undefined 在数值环境中是NaN，在布尔环境中是false
   - Number
   - 任意精度的整数BigInt
   - String
   - 代表Symbol 一种实例是唯一且不可改变的数据类型
 - 对象Object

## 数据类型转换
JavaScript 动态类型语言，在声明变量时不用指定数据类型
使用➕会把数字转化成字符串，进行字符串运算，其他运算符不会，如`“37” - 7 //30`
### 字符串转数字
 `parseInt();` (最好带上进制参数) `parseFloat();`
 使用一元加法运算符，可以不加括号 `(+"1.1") + +"1.1" = 2.2`
