---
title: Java学习笔记
tags: Java
categories: 笔记
description: Java 笔记
top_img: 'https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/top-1669041484911-3.jpg'
cover: 'https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/top-1669041484911-3.jpg'
abbrlink: 9845
date: 2022-12-16 22:33:38
---



# Java Notes

## 1.数组

- **数组**：是一种容器，可以用来存储同种数据类型的多个值。

#### 1.1 数组的定义格式

1. 数据类型[] 数组名

   `int[] array;`

2. 数据类型 数组名[]

   `int array[];`

3. 完整格式：数据类型[] 数组名 = new 数据类型[] {1,2,3..};	

   `int[] array = new int[]{111,22,33};`

   `double[] array2 = {11.1,22.2,33.2};`

4. 简化格式：数据类型[] 数组名 = {元素1,元素2,元素3...}

   `double[] array = {1,2,3,4};`

5. 数组有索引下标从0开始且数组长度 - 1

#### 1.2 数组的动态初始化

1. 初始化时至指定数组长度，由系统为数组分配初始值。

   > 格式：数据类型[] 数组名 = new 数据类型 [数组长度];
   >
   > > 范例：`int[] arr = new int[3];`

2. 数组默认初始化值的规律：

   > 整数类型：默认初始化值0；
   >
   > 小数类型：默认初始化值0.0；
   >
   > 字符类型：默认初始化类型'/u0000' 空格;
   >
   > 布尔类型：默认初始化值 false;
   >
   > 引用数据类型：默认初始化值 null;

3. 数组的空间可以共用，两个数组指向同一个空间的内存图。

   ```java
   public static void main(String[] args){
       int[] arr1 = {11,22};
       int[] arr2 = arr1;
       
       System.out.println(arr1[0]);
       System.out.println(arr2[0]);
       
       arr2[0] = 33;
       
       System.out.println(arr1[0]);
       System.out.println(arr2[0]);
   }
   
   //输出结果为： 11 11 33 33
   ```

#### 1.3 数组的遍历

1. idea 自带的数组遍历快速写法

   ```java
   //数组名.fori
   arr1.fori;
   //for(数组类型 变量 : 数组名)
   for(double s : arr5){
       System.out.println(s);
   }
   ```

2. 数组的遍历:

   ```java
   int i;
   int arr1[] = {1,2,3}
   for(i = 0;i < arr1.length){
       System.out.println(arr1[i]);
   }
   ```



## 2.随机类 Random

#### 2.1 Random 格式

1. 导包

   `import java.util.Random;`

2. 创建

   `Random random_number = new Random()`

3. 调用

   `int a = random_number.nextInt(参数范围)`

4. 注意事项：参数范围 填写一个值 = 首与尾;

   例如：`int a = random_number.nextInt(100)`则是0~99范围

5. 范围值形同数组长度-1；若要定义范围则要减去或增加对应数：

   例如：`int a = random_number.nextInt(100) + 1` 则为1~100



## 3.Java 的内存分配

1. 栈  方法运行时使用的内存，比如main方法运行，进入方法栈中执行。

2. 堆   存储对象或者数组，new 来创建的，都存储在堆。
3. 方法区   存储可以运行的class文件。
4. 本地方法栈    JVM在使用操作系统功能的时候使用，和开发无关。
5. 寄存器       给CPU使用。



## 4.方法

#### 1.1 方法

- 方法是程序中的最小执行单位。

1. 方法简单定义：

   ```java
   public class test{
       public static void main(String[] args){
           //调用方法
           playgame();
       }
       
       //定义方法
       public static void playgame(){
           System.out.println("方法1");
       }
   }
   ```

2. 方法可以嵌套：

   ```java
   public class day_10_Method_test_2 {
       public static void main(String[] args) {
           Method();
           System.out.println("main~");
       }
   
       public static void Method(){
           Method_1();
           System.out.println("这是方法0");
       }
   
       public static void Method_1(){
           System.out.println("这是方法1");
       }
   }
   ```



## 5.二维数组

#### 1.1 二维数组的静态初始化

1. `{% raw %}int[][] arr = new int[][]{{11,22},{33,44}};{% endraw %}`

2. ``{% raw %}int[][] arr = {{11,22},{33,44}};{% endraw %}`

3. `{% raw %}int arr[][] = {{11,22},{33,44}};{% endraw %}`

4. 优化格式：

   ```java
   	int[][] arr3 = {
       {1,2,3,4},//第一个一维数组
       {5,6,7,8,9}//第二个二维数组
   };
   ```

#### 1.2 二维数组的元素获取与遍历

1. 获取元素

   ```java
   System.out.println(arr3[0]);//表示获取阿arr3的第一个二维数组。但不获取其元素，因此返回第一个一维数组的地址值
   System.out.println(arr3[0][5]);//表示获取arr3的第一个一维数组的索引为5的元素
   System.out.println(arr3[1][5]);//表示获取arr3的第二个一位数组的索引为5的元素
   ```

2. 遍历元素

   ```java
   int[][] arr3 = {%
       {1,2,3,4},
       {5,6,7,8,9}
   %};
   
   for(int i = 0; i < arr3.length; i++){  //获取二维数组里的一维数组
       System.out.println("");
       for(int j = 0; j < arr3[i].length; j++){ //获取一维数组中的元素
           System.out.println(arr3[i][j] + " ");
      }
   }
   ```



#### 1.3 二维数组的动态初始化

1. 初始化格式

   ```java
   int[][] arr = new int[3][5]; //表示二维数组长度为3，可以装3个一维数组，每个一维数组的长度为5
   ```

2. 因二维数组的动态初始化的内存图中来看，二维数组里可存放地址值，故此我们可将数组写成

   ```java
   public static void main(String[] args) {
       int[][] arr = new int[2][];
       int[] arr1 = {11,22};
       int[] arr2 = {44,55,66};
       
       arr[0] = arr1;
       arr[1] = arr2;
   }
   ```

3. 优化写法

   ```java
   public static void main(String[] args) {
       int[][] arr = {
           {22,33,44},
           {22,66,77}
       };
   }
   ```



## 6.面对对象

#### 1.1 类和对象

1. 类：是共同特征的描述（设计图）；
2. 对象：是真实存在的具体实例。
3. 类名首字母建议大写
4. 一个Java文件中可以定义多个class类，且只能一个类是public修饰，而且public修饰的必须是文件名

#### 1.2 使用对象

- 对象.成员变量
- 对象.成员方法(...)

  ```java
  // 新建类
  public class GirlFriend {
      // 属性
      String name;
      int age;
      String gender;
      
      // 行为
      public void sleep() {
          System.out.println("女朋友在睡觉");
      }
      
      public void eat() {
          System.out.println("女朋友在吃饭");
      }
  }
  ```

  

#### 1.3 获取对象并使用

```java
public class 类名 {
    成员变量(代表属性)
    成员方法(代表方法)
}
// main 里面
类名 对象名 = new 类型(); 
```

```java
public class GirlFriendTest() {
    // 创建女朋友的对象
    GirlFriend gf1 = new GirlFriend();
    gf1.name = "肖德华";
    gf1.age = 19;
    gf1.gender = "男";
    
    System.out.println(gf1.name);
    System.out.println(gf1.age);
    System.out.println(gf1.gender);
    // 使用方法
    gf1.eat();
    gf1.sleep();
    
    System.out.println("======================");
    GirlFriend gf2 = new GirlFriend();
    gf2.name = "肖烊千玺";
    gf2.age = 20;
    gf2.gender = "女";
    
    System.out.println(gf2.name);
    System.out.println(gf2.age);
    System.out.println(gf2.gender);
}
```

#### 1.4 封装

> 1. 对象代表什么，就是封装对应的数据，并提供数据相应的行为
> 2. 告诉我们如何正确的设计对象的属性和方法

#### 1. 5 private 关键字

- 是一个权限修饰符
- 可以修饰成员(成员变量和成员方法)
- 被**private**修饰的成员只能在本类中才能访问

1. 使用方法

   ```java
   public class day_12_GirlFriend {
       String name;
       private int age;
   
   
       //自我介绍
       public void selfIntroduction() {
           System.out.println("我叫" + name);
           System.out.println("今年" + age + "岁");
       }
   
       //年龄校验
       public void setAge() {
           Scanner sc = new Scanner(System.in);
           while (true) {
               System.out.println("请输入年龄：");
               int a = sc.nextInt();
               if (a >= 18 && a <= 30) {
                   age = a;
                   break;
               } else {
                   System.out.println("非法数据，请重新输入");
               }
           }
       }
   }
   ```

2. main 调用 

   ```java
   public static void main(String[] args) {
           day_12_GirlFriend girl = new day_12_GirlFriend();
           Scanner sc = new Scanner(System.in);
           System.out.println("请输入姓名:");
           girl.name = sc.next(); // 输入传递给girl.name
   
           girl.setAge(); // 年龄
           girl.selfIntroduction(); // 开始自我介绍
       }
   ```

   输出结果：<img src="https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20221123102250672.png" alt="image-20221123102250672" style="zoom:67%;" />

#### 1.5 This 关键字

###### 1.5.1 局部变量和全局变量

```java
public class GirlFriend {
    private int age; // 全局变量
    public void method() {
        int age = 10; // 局部变量 
       // System.out.println(age);  此时调用的是局部变量 就近原则
        System.out.println(this.age); // 此时调用的是全局变量	
    }
}
```



#### 1.5 构造方法

> 1. 构造方法也叫构造器，构造函数
> 2. 作用： 在创建对象的时候给成员变量进行初始化的

1. 构造方法的格式

   > 1. 方法名与类名相同大小写也一致
   >
   >          	2. 没有返回值类型，连void都没有
   >          	3. 没有具体的返回值(不能由return带回结果数据)
   >          	4. 构造方法的重载，带参构造方法，和无参构造方法，两者方法名相同，但是参数不同，这叫做构造方法的重载
   >          	5. 推荐无论是否使用，都手动书写无参数构造方法，和带全部参数的构造方法

   ```sd
   public class Stundet {
       修饰符 类名(参数) {
           方法体;
       }
   }
   ```

   ```java
   public class Stundet {
       private String name;
       private int age;
       
       public Student() {
           ... // 空参构造
       }
       
       public Student(String name,int age) {
           ... // 带参构造
       }
   }
   
   // 执行时机：
   // 1.创建对象的时候由虚拟机调用，不能手动调用构造方法
   // 2.每创建一次对象，就会调用一次构造方法
   ```

2. 构造实例

   ```java
   public class Student {
       private String name;
       private int age;
       
       // 如果没有写任何构造方法
       // 那么虚拟机会自动加一个空参构造方法
       // 如果定义了构造，则不会自动加
       public Student() {
           
       }
       
       public Studnet(String name,int age) { // 接受有参
           this.name = name; // 全局变量的 name = 局部变量的 name
           this.age = age;
       }
       
   }
   
   ```

   ```java
   public class StundentTest {
       // 创建对象
       // 调用的空参构造
       // Student s = new Student();
       Student s = new Student("张三",23); // 传递有参
   }
   ```



#### 1.6 标准的 Javabean 类

1. 类名需要见名知意
2. 成员变量使用 **private** 修饰
3. 提供至少两个构造方法
   + 无参构造方法
   + 带全部参数的构造方法
4. 成员方法
   + 提供每一个成员变量对应的setXxx()/getXxx()
   + 如果还有其他行为，也需要写上
5. Alt + insert 可以快捷生成



#### 1.7 Java内存分配介绍

+ **栈**
+ **堆**
+ **方法区**
+ 本地方法栈
+ 寄存器

注意：

从JDK8开始，取消方法区，新增元空间。把原来方法区的多种功能进行拆分，有的功能放到了堆中，有的功能则放到了元空间中。

**示例：**

```java
// 创建Student类
public class Student {
    String name;
    int age;
    
    public void study() {
        System.out.println("好好学");
    }
}
```

```java
// 创建Test类
public class TestStudent {
    public static void main(String[] args) {
    	Student s = new Student();
        System.out.println(s);
        System.out.println(s.name + "..." + s.age);
        s.name = "阿强";
        s.age = 23;
        System.out.println(s.name + "..." + s.age);
        s.study();
    }
}
```

##### **创建一个对象的内存运行图**

![Snipaste_2023-03-03_15-53-11](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/Snipaste_2023-03-03_15-53-11.webp)

1. **加载class文件**

   将StudentTest.class的字节码文件加载到方法区内。此后加载main方法到栈内存。之后代码运行到创建对象，又将Student类的字节码文件加载到方法区。

   <img src="Java Notes.assets/Snipaste_2023-03-03_15-53-11-1677830597074-2.webp" alt="Snipaste_2023-03-03_15-53-11" style="zoom:50%;" />

2. **申明局部变量**

   在main方法创建对象的变量 **s**

   <img src="https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/main方法导入创建对象的变量.webp" alt="main方法导入创建对象的变量" style="zoom:50%;" />

3. **在堆内存中开辟一个空间**

   创建了Student对象，则在栈内存创建内存地址

   <img src="https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/在栈内存创建对象的内存.webp" alt="在栈内存创建对象的内存" style="zoom:50%;" />

4. **默认初始化**

   读取成员变量的默认化值，因为没有定义所以为默认值

   ![没有定义值](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/没有定义值.webp)

5. **显示初始化**

   如果定义了值，则将定义的值传递到堆内存，将对内存的默认值覆盖

   ![如果定义了值](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/如果定义了值.webp)

6. **构造方法初始化**

   因为没有设置有参构造，所以并没有将有参构造的值传递到栈内存进行覆盖

   

7. **将堆内存中的地址值赋值给左边的局部变量**

   ![将栈内存的对象地址传递给main方法的s](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/将栈内存的对象地址传递给main方法的s.webp)

若栈内存里没有方法再指向堆内存里的对象，则对象清除

本节视频教学：[面向对象-07-三种情况的对象内存图](https://www.bilibili.com/video/BV17F411T7Ao/?p=87)

##### 两个引用指向同一个对象

![两个引用指向同一个对象](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/两个引用指向同一个对象.webp)

当栈内存没有方法指向栈内存的对象，则对象清除

#### 1.8 基本数据类型和引用数据类型

基本数据类型：数据值是存储在自己空间的，赋值给其他变量，也是赋的真实的值。

引用数据类型：数据值是存储到其他空间的，自己空间中存储的是地址值。赋值给其他变量是给的地址值。

#### 1.9 this的内存原理

this的作用：区分局部变量和成员变量。

this的本质：代表方法调用者的地址值。

**内存图：**

![this的内存原理图](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/this的内存原理图.webp)

当main里的`s.method();`调用了对象里的方法，则进入栈内存

![调用对象的方法，方法进栈](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/调用对象的方法，方法进栈.webp)

此时调用者为 s，故此this则指向调用者s

![this地址为调用者s](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/this地址为调用者s.webp)



#### 2.0 数组存放对象

![image-20230313172738719](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20230313172738719.png)

当创建对象的语句写在循环外面，则循环内的数据一直在更改的是同一地址的对象。



## 7.键盘录入

第一套体系

`nextInt()`接收整数

`nextDouble()` 接收小数

`next()` 接收字符串

> 遇到空格，制表符，回车就停止接收。



第二条体系

`nextLine()` 接收字符串

> 遇到回车停止接收，接收空格，制表符不会停止接收。

**以上两个体系不能混用**

**先用`nextInt()`，再用`nextLine()`会导致下面的`nextLine()`额接收不到数据**



## 8.API&字符串

**API(Application Programming Interface) : 应用程序编程接口**

#### 1.String概述

> `java.lang.String` 类代表字符串，Java程序中的所有字符串文字都为此类的对象。



#### 2.创建String对象的两种方式

+ **直接赋值**

  + `String name = "张大头";`

+ **new**

  + | 构造方法                        | 说明                             |
    | ------------------------------- | -------------------------------- |
    | public String()                 | 创建空白字符，不含任何内容       |
    | public  String(String original) | 根据传入的字符串，创建字符串对象 |
    | public String(char[] chs)       | 根据字符数组，创建字符串对象     |
    | public String(byte[] chs)       | 根据字节数组，创建字符串对象     |



#### 3.String 在Java的内存模型



**直接赋值的内存模型：**

![image-20230314172624176](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20230314172624176.png)

> 当使用双引号直接赋值时，系统会检查该字符串在串池中是否存在。不存在则创建新的，存在则复用。



**new String 的内存模型： **

![image-20230314172915380](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20230314172915380.png)

> 每次new一次都会开阔一个新空间，不会复用。但在新版本java中貌似不会再开阔。



#### 4.Java的常用方法（比较）

**`==` 比较规则**

：基本数据类型比较的是数据值，字符串比较的是地址值

![image-20230314173534197](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20230314173534197.png)