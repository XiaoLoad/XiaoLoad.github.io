---
title: JavaScript学习笔记
tags: Web
categories: 笔记
description: JavaScript 笔记
top_img: 'https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/top-1669041484911-3.jpg'
cover: 'https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/top-1669041484911-3.jpg'
abbrlink: 20244
date: 2022-11-21 22:33:38
---

# JavaScript学习

## 1.声明变量

##### 1.1 变量的声明

1. **var** 声明变量 `var name = '德华'`
2. **console.log();** 后台日志 `console.log(sss);`
3. 变量的命名规范
   - 由字母，数字，下划线，美元符号组成
   - 区分大小写
   - 不能以数字开头
   - 不能是关键字，保留字
   - 使用严格检查模式 `use strict` 预防JavaScript随意性导致出现问题 写在第一行
   - 局部变量推荐使用`let`定义

##### 1.2 声明变量的案例

1. 案例1

   ```javascript
   var myname = proment('请输入你的名字');//定义并存输入
   alert(myname);//输出
   ```

2. 声明多个变量

   ```javascript
   //声明多个变量
   var age = 18,
       name = '德华',
       ge = 2000;
   //若只声明不赋值结果是undefined 解释器也不知道里面存放的是什么
   var sex;
   //不声明,不赋值直接使用报错
   //不声明直接使用赋值使用不会报错
   q = 100;
   console.log(q);
   ```

   

## 2.数据类型

- Javascript 是支持变量的数据类型动态化

##### 1.1 数字类型

1. `var sum = 10;//数字型可包含整数和小数`
2. `var str = 'love';//字符串型`
3. **prompt** 取得的值为字符型

##### 1.2 字符串类型 String

1. Javascript可以用单引号嵌套双引号，或者双引号嵌套单引号

   ```javascript
   var strMsg = '我是"高富帅"程序员';
   var strMsg2 = "我是'高富帅'程序员";
   ```

2. 字符串转义字符

   ```javascript
   var str1 = "一二三四\n大大"
   ```

3. 检查获取字符串的长度 length

   ```javascript
   var str = 'my name is link';
   console.log(str.length);//15
   ```

4. 多行字符串编写

   ```javascript
   var str = 
       `hello
       world
       你好
       您好ya`;
   console.log(str);
   ```

   输出结果：

   <img src="https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20221118173304809.png" alt="image-20221118173304809" style="zoom:67%;" />

5. 模板字符串(ES6新特性)

   ```javascript
   let name = '朋友';
   let age = 3;
   
   let msg = '您好呀,&{name}';
   console.log(msg);
   ```

6. 大小写转换 **toUpperCase()**

   ```javascript
   let name = 'love';
   console.log(name.toUpperCase());
   //> LOVE
   ```

   输出结果:

   <img src="https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20221118174418949.png" alt="image-20221118174418949" style="zoom:67%;" />

7. 获取指定下标位置 **indexOf();**

   ```javascript
   var str = 'I Love You';
   console.log(str.indexOf('Y'));
   //> 7
   ```

8. 截取字符串 **substring();**

   ```javascript
   var str = 'student';
   console.log(str.substring(1));
   //> udent
   console.log(str.substring(1,2));
   //> t
   ```

   

9. 字符串的拼接

   ```javascript
   console.log('Love' + 'of' + 'my' + 'life.');
   console.log('age' + 18);
   var age = 20;
   console.log('我今年' + age + '岁');
   ```

10. Undefined || Null

   ```javascript
//一个声明后没有被赋值的变量会有一个默认值undefined(如果进行相连或者相加时，注意结果)
var variable = undefined;
console.log(variable + 'pink');//undefinedpink
console.log(variable + 1);//NaN
//一个声明变量给null值，里面存的值为空
var space = null;
console.log(space + 'pink');//nullpink
console.log(space + 1);//1
   ```

11. 进制 || 最值 || NaN || infinity || isNaN()

    ```javascript
    var num1 = 010;//表示八进制
    var num2 = 0x9;//表示十六进制
    console.log(Number.MAX_VALUE);//获取数字类型的最大值
    console.log(Number.MIN_VALUE);//获取数字类型的最小值
    console.log(Number.MAX_VALUE * 2);//infinity 输出无穷大
    console.log( - Number.MAX_VALUE * 2);//-infinity 输出无穷小
    console.log('pink' - 2);//NaN 输出非数字
    console.log(isNaN(12));//isNaN();来判断是否为非数字的类型
    ```

##### 1.2 获取数据类型 typeof

```javascript
var num = 10;
var str = 'pink';
var flag = true;
var timer = null;
console.log(typeof num);//number;
console.log(typeof str);//string;
console.log(typeof flag);//boolean;
console.log(typeof timer);//object;
```

##### 1.3 数据类型的转换

1. 使用表单，prompt获取过来的数据默认是字符串类型的，此时就不能直接简单的进行加法运算，而需要转换变量的数据类型。通俗来讲就是把一种数据类型的变量转换成另外一种数据类型。

   - 转换为字符串类型
   - 转换为数字类型
   - 转换为布尔型

2. 转换字符串

   ```javascript
   //1.把数字转换为字符串型 变量.toString();
   var num = 10;
   var str = num.toString();
   console.log(str);
   console.log(typeof str);
   //2.利用String(变量)转换
   console.log(String(num));
   //3.利用 + 拼接字符串的方法实现转换效果 这种也称隐式转换
   console.log(num + '');
   ```

3. 转换数字类型

   ```javascript
   //1.利用parseInt();
   console.log(parseInt('3.15'));//取整 3
   console.log(parseInt('120px'));//120 会去掉px单位
   console.log(parseInt('rem120px'));//NaN
   //2.利用parseFloat(); 转换成浮点数
   console.log(parseFloat('3.14'));//可保留小数
   //3.利用Number();
   var str = '123';
   console.log(Number(str));
   //4.利用算术运算 - * \
   console.log('12' - 0);//结果为数字型12
   ```

4. 转换布尔型

   ```javascript
   //Boolean();
   console.log(Boolean(''));//false
   console.log(Boolean(0));//false
   console.log(Boolean(NaN));//false
   console.log(Boolean(null));//false
   console.log(Boolean(undefined));//false
   //除了以上其他基本为true
   ```



## 3.逻辑运算符-短路运算(逻辑中断)

- 用布尔值参与逻辑运算 `true && false == false`
- `123 &7 456`是值 或者是 表达式 参与逻辑运算?
- 如果有空或者否定的为假 其余都为真 `' ' null undefined NaN`
- 逻辑中段很重要，会影响程序的运行结果

1. 短路与运算 如果表达式1为真则返回表达式2，如果表达式1为假则返回表达式1

   ```javascript
   console.log(123 && 456);//456
   console.log(0 && 1 + 2 && 456 * 56789); //表达式1 为假，则后续表达式不执行
   ```

2. 短路或运算 如果表达式1 结果为真 则返回的是表达式1 如果表达式1为假 则返回表达式2

   ```javascript
   console.log(123 || 456); //123
   console.log(0 || 456); //456
   console.log(123 || 456 || 789); //123
   ```

   ```javascript
   var num = 0;
   console.log(123 || num++);//123
   console.log(num); //0
   ```

##### 1.4 数据类型案例

1. 计算年龄案例

   ```javascript
   //计算年龄案例  要求输入出生年份计算出年龄
   while (true) {
   				var year = prompt('请输入您的出生年份:');
   				var nowYear = prompt('请输入今年的年份:');
   				//判断输入的出生年份是否小于今年年份
   				if (year <= nowYear) {
   					alert('您今年' + (nowYear - year) + '岁了');
   					alert(typeof year + '\n' + typeof nowYear);
   					break;
   				} else {
   					alert('数据有误！请重新输入');
   					continue;
   				}
   			}
   ```

   

## 4.分支选择结构 - Switch

1. `Switch(num)`num是全等的需要数据类型相匹配



## 5.数组

##### 	5.1 数组的创建

1. 利用 ***new*** 创建

   ```javascript
   var 数组名 = new Array();
   var arr = new Array(); //创建一个空的数组
   ```

2. 利用数组字面量创建

   ```javascript
   var 数组名 = [];
   var array = ['小白','大黄',19,'llll',true];
   //数组的字面量的是方括号[]
   //声明数组并赋值称为数组的初始化
   //这种字面量方式也是常用的
   //可以存放不同数据类型的元素 可以是字符串，数字，布尔值等
   ```

##### 5.2 获取和遍历数组的元素

1. 索引下标获取

   ```javascript
   var array = ['小白','大黄',19,'llll',true];
   console.log(arr1);//返回全部元素
   console.log(arr1[0]);//返回小白
   ```

2. 遍历数组元素

   ```javascript
   var array = ['小白','大黄',19,'llll',true];
   for(var i = 0; i < array.length; i++){
       console.log(array[i]);
   }
   ```

##### 5.4 数组中新增元素

1. 通过修改 ***length*** 长度

   > 注意：给 length 赋值，数组大小会发生变化，如果赋值长度过小，则数组元素丢失

   ```javascript
   var array = ['小白','大黄'];//当前数组元素为2
   array.length = 5;//把数组长度修改到5,但新增元素没有值
   ```

2. 通过修改索引号来新增元素

   ```javascript
   var arr = [11,22,33];
   arr[3] = 'lv';
   //此时追加了元素3,如果元素已有则覆盖替换
   arr = 12;
   //不要给数组名赋值 否则清除数组所有元素
   ```

##### 5.5 数组案例

1. 数组筛选

   ```javascript
   //将数组中的大于10的数组选出来，并放入新数组中
   var arr = [2, 3, 5, 6, 71, 24, 1, -2, 23];
   var newArr = [];
   var count = 0;
   
   for (var i = 0; i < arr.length; i++) {
   	if (arr[i] > 10) {
   		newArr[count] = arr[i]; 
   		count++;
   	}
   }
   
   for(var i = 0; i < newArr.length; i++){
   	console.log(newArr[i]);
   }
   ```

2. 筛选方法2

   ```javascript
   //将数组中的大于10的数组选出来，并放入新数组中
   var arr = [2, 3, 5, 6, 71, 24, 1, -2, 23];
   var newArr = [];
   //刚开始的newArr的length长度为0
   for (var i = 0; i < arr.length; i++) {
   	if (arr[i] > 10) {
   		newArr[newArr.length] = arr[i]; //新增后长度+1
   	}
   }
   
   for(var i = 0; i < newArr.length; i++){
   	console.log(newArr[i]);
   }
   ```

3. 数组翻转

   ```javascript
   let arr = [1,2,3,4,5];
   let newArr = [];
   for (let i = arr.length - 1; i >= 0; i++){
       newArr[newArr.length] = arr[i];
   }
   console.log(newArr);
   ```

4. 冒泡排序

   ```javascript
   let array = [5,1,2,4,3,0];
   for (let i = 0; i < array.length - 1; i++){
       for (let j = 0; j < array.length - i - 1; j++){
           if(array[j] > array[j + 1]){
               let temp;
               temp = array[j + 1];
               array[j + 1] = array[j];
               array[j] = temp;
           }
       }
   }
   console.log(array);
   ```



## 6.函数

#### 1.1 声明函数

1. 第一种声明

   ```javascript
   function 函数名() {
       // 函数体
   }
   
   function sayHi() {
   	console.log('Hi');
   }
   ```

2. 函数表达式声明(匿名函数)

   ```javascript
   var 变量名 = function(){};
   var fun = function(){
       console.log('函数表达式');
   }
   fun();
   
   // 1.fun 是变量名，不是函数名
   // 2.函数表达式声明方式跟声明变量差不多，只不过变量里面存的是值，而 函数表达式里面存的是函数
   // 3.函数表达式也可以进行传递参数
   ```

   

#### 1.2 函数调用

```javascript
sayHi();// 函数调用
function sayHi() {
    console.log('Hi');
}
```



#### 1.3 带参数的函数

1. 声明带参数的函数

   ```javascript
   function 函数名(形参1,形参2...) {
       
   }
   
   function cook(aru) {
       console.log(aru);
   }
   cook('德华');// 存放实参
   
   // > 德华
   ```

   > 注意：
   >
   > > 1. 如果实参的个数多于形参的个数，则只会取到形参的个数
   > > 2. 如果实参的个数小于形参的个数，形参则被看做没有被定义的变量  undefined 结果为 NaN

2. 函数可以互相调用

   ```javascript
   function fn1() {
       cosole.log(11);
       fn2();
   }
   
   function fn2() {
   	cosole.log(22);
       fn1();
   }
   fn1();
   // > 会进入无限循环
   ```

   输出结果：<img src="https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20221120112556650.png" alt="image-20221120112556650" style="zoom:67%;" />

   

#### 1.4 函数的返回值

1. 返回值的注意事项：

   > 1. return 具有终止性
   > 2. return 只能返回一个值，可利用数组来存放返回多个值
   > 3. 如果没有 return 则返回 undefined

2. 返回值格式

   ```javascript
   function 函数名() {
       return 返回的结果;
   }
   ```

3. 例子

   ```javascript
   function getResult() {
       return 123;
   }
   getResult(); // getResult = 666;
   console.log(getResult());
   // > 666
   
   function cook(aru) {
       return aru;
   }
   console.log(cook('德华'););
   ```

   ```javascript
   function getSum(num1,num2) {
       return num1 + num2;
   }
   console.log(getSum(1, 2));
   // > 3
   ```



#### 1.5 函数接受数组和返回数组

1. 求数组最大值：

   ```javascript
   function getMax(arr) {
       let max = arr[0];
       for (let i = 0; i < arr.length; i++){
           if (arr[i] > max){
               max = arr[i];
           }
       }
       return max;
   }
   
   let arrayMax = getMax([0,1,3,4,9]);
   console.log(arrayMax);
   // > 9
   ```

2. 求数的加减乘除：

   ```javascript
   function getResult(num1, num2) {
       return [num1 + num2, num1 * num2, num1 \ num2, num1 - num2];
   }
   
   console.log(getResult(5,4));
   ```

   输出结果：

   <img src="https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20221118214411803.png" alt="image-20221118214411803" style="zoom:67%;" />

#### 1.5 arguments 的使用

> 但我们不确定有多少个参数传递的时候，可以用 ==arguments== 来获取。在 JavaScript 中，arguments 实际上它是当前函数的一个==内置对象==，所有函数都内置了一个arguments 对象，arguments 对象中==存储了传递的所有实参==

1. 使用

   ```javascript
   function fn() {
       console.log(arguments);
       console.log(arguments.length);
       console.log(arguments[3]);// > 4
       // 我们可以按照数组的方式遍历 arguments
       for (let i = 0; i < arguments.length; i++){
           console.log(arguments[i]);
       }
   }
   fn(1,2,3,4);
   ```

   输出结果：

   <img src="https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20221118221832692.png" alt="image-20221118221832692" style="zoom:67%;" />

   > 注意：
   >
   > 1. 伪数组，并不是真正意义上的数组
   > 2. 具有数组的 length 属性
   > 3. 按照索引的方式来进行存储的
   > 4. 它没有真正数组的一些方法 pop()  push() 等等


#### 1.6 函数的案例

1. 利用函数封装输入年份输出2月份天数

   ```javascript
   // 案例：输入年份，输出该年份的2月份有几天
   			// 返回年份天数
   			function backDay() {
   				let year = prompt('请输入年份：');
   				if(isRunYear(year)){
   					alert('当前年份是闰年，2月份有29天');
   				} else {
   					alert('当前年份是平年，2月份有28天');
   				}
   			}
   			backDay();
   			
   			// 返回平年闰年
   			function isRunYear(year) {
   				let flag = false;
   				if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
   					flag = true;
   				}
   				return flag;
   			}
   ```

   

## 7.作用域

> 1. JavaScript 代码名字在某个范围起效果 提高程序的可靠性和减少命名冲突
>
> 2. js 作用域 (es6) 之前：分全局作用域和局部作用域
> 3. 全局：整个script标签，或者是整js文件
> 4. 全局变量只有浏览器关闭的时候才会销毁，比较占内存资源
> 5. 局部变量，但程序执行完毕之后就会销毁，节约内存资源

```javascript
var num = 10; // 全局作用域
function fun1() {
    var num = 20; // 局部作用域
}
```



#### 1.1 全局变量

1. 在全局作用域下的变量，在全局都可以使用

   ```javascript
   var num = 10;
   console.log('这里是外部:' + num);
   
   function fun() {
       console.log('这里是函数内部:' + num);
   }
   fun();
   ```

   输出结果：<img src="https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20221120163944040.png" alt="image-20221120163944040" style="zoom:67%;" />



#### 1.2 局部变量

1. 在局部作用域下的的变量，后者在函数内部的变量就是局部变量

   ```javascript
   function fun() {
       var num1 = 20; // 此时 num1 就是局部变量
       num2 = 30;
   }
   fun();
   console.log(num2); //如果在函数内部，没有声明直接赋值的变量也属于全局变量
   ```

   输出结果：<img src="https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20221120164800523.png" alt="image-20221120164800523" style="zoom:67%;" />

   > 注意： 函数的形参也可以看做是局部变量

#### 1.3 块级作用域(es6 新增)

1. 目前暂无

   ```javascript
   if (3 < 5) {
       var num = 10;
   }
   console.log(num);
   // 是可以调用的
   ```

#### 1.4 链式作用域

1. 作用域链

   > 根据在内部函数可以访问外部函数变量的机制，用链式查找决定那些数据能被内部函数访问，就称为作用域链

   ```javascript
   var num = 10;
   function fn() { // 外部函数
       var num = 20;
       function fun() { // 内部函数
           console.log(num);
       }
   }
   // 此时会链式查找，一层一层往上查找，结果为20
   ```

   查找原理：<img src="https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20221120170156732.png" alt="image-20221120170156732" style="zoom:67%;" />

   输出结果：<img src="https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20221120193753035.png" alt="image-20221120193753035" style="zoom: 67%;" />



## 8.JavaScript 预解析

#### 1.1 预解析

1. Js 引擎运行 Js 分为两步：预解析，代码执行

   > 1. 预解析 js 引擎会把 js 里面所有的 **var**  还有 **function** 提升到当前作用域的最前面
   > 2. 代码执行，按照代码书写的顺序从上往下执行

2. 预解析分为 变量预解析 (变量提升) 和函数预解析 (函数提升)

   > 1. 变量提升 就是把所有的变量声明提升到当前的作用域最前面  不提升赋值操作
   > 2. 函数提升 就是把所有的函数声明提升到当前作用域的最前面 不调用函数

   代码例子:

   ```javascript
   console.log(num); // > undefined
   var num = 10;
   
   // 预解析后执行顺序为：
   var num; // 先定义
   console.log(num); // 然后输出 因为没有赋值，所以输出结果为undefined
   num = 10; // 再赋值
   ```

   ```javascript
   fun();
   var fun = function() {
       console.log(22);
   }
   
   // 预解析之后相当于执行了：
   var fun;
   fun();
   fun = function() {
       console.log(22);
   }
   // 因此函数表达式一定要先定义后调用
   ```

#### 1.2 预解析案例

1. 案例-1

   ```javascript
   var num = 10;
   fun();
   
   function fun() {
       console.log(num);
       var num = 20;
   }
   
   // 预解析之后：
   var num;
   function fun() {
       var num;
       console.log(num);
       num = 20;
   }
   num = 10;
   fun();
   ```

   输出结果：<img src="https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20221120200139054.png" alt="image-20221120200139054" style="zoom:80%;" />

2. 案例-2

   ```javascript
   var num = 10;
   function fn() {
       console.log(num);
       var num = 20;
       console.log(num);
   }
   fn();
   
   // 预解析之后：
   var num;
   function fn() {
       var num;
       console.log(num); // > undefined
       num = 20;
       console.log(num); // > 20
   }
   num = 10;
   fn();
   ```

   输出结果：<img src="https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20221120200533098.png" alt="image-20221120200533098" style="zoom:67%;" />

3. 案例-3

   ```javascript
   var a = 18;
   f1();
   function f1() {
       var b = 9;
       console.log(a);
       console.log(b);
       var a = '123';
   }
   //预解析之后：
   var a;
   function f1() {
       var b;
       var a;
       b = 9;
       console.log(a); // > undefined
       console.log(b); // > 9
       a = '123';
   }
   a = 18;
   f1();
   ```

   输出结果：<img src="https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20221120201019434-1668946228035-1.png" alt="image-20221120201019434" style="zoom:67%;" />

4. 案例-4

   ```javascript
   f1();
   console.log(c);
   console.log(b);
   console.log(a);
   function f1() {
       var a = b = c = 9;
       console.log(a);
       console.log(b);
       console.log(c);
   }
   
   // 预解析之后：
   function f1() {
       var a;
       a = b = c = 9;
       // 相当于 var a = 9; b = 9; c = 9; b 和 c 直接赋值 没有var 声明 当全局变量看
       console.log(a); // > 9
       console.log(b); // > 9
       console.log(c); // > 9
   }
   f1();
   console.log(c); // > 9
   console.log(b); // > 9
   console.log(a); // 报错
   ```

   输出结果：<img src="https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20221120201730938.png" alt="image-20221120201730938" style="zoom:67%;" />





## 9.对象

#### 1.1 什么是对象

> 万物皆对象 一个具体的事务，看得见，摸得着。例如，一本书，一辆汽车，一个人

+ 属性：事物的**特征**，来对象中用**属性**来表示(常用名词)
+ 方法：事物的**行为**，在对象中用**方法**来表示(常用动词)



#### 1.2 创建对象的三种方式

1. 在 JavaScript 中，现阶段可以采用三种方式来创建对象(object)
   + 利用**字面量**创建对象
   + 利用 **new Object** 创建对象
   + 利用**构造函数**创建对象

##### 1.2.1 利用字面量创建对象
