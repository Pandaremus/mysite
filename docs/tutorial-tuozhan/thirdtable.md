---
sidebar_position: 4
---

# C#相关知识

## 一、C#简介 ##
### 1、	简介 ###
C# 是一个现代的、通用的、面向对象的编程语言，它是由微软（Microsoft）开发的，由 Ecma 和 ISO 核准认可的。<br/>
C# 是由 Anders Hejlsberg 和他的团队在 .Net 框架开发期间开发的。<br/>
C# 是专为公共语言基础结构（CLI）设计的。CLI 由可执行代码和运行时环境组成，允许在不同的计算机平台和体系结构上使用各种高级语言。<br/>
:::note 下面列出了 C# 成为一种广泛应用的专业语言的原因：
**•	现代的、通用的编程语言。<br/>
•	面向对象。<br/>
•	面向组件。<br/>
•	容易学习。<br/>
•	结构化语言。<br/>
•	它产生高效率的程序。<br/>
•	它可以在多种计算机平台上编译。<br/>
•	.Net 框架的一部分。<br/>**
:::
### 2、编译功能 ###
虽然 C# 的构想十分接近于传统高级语言 C 和 C++，是一门面向对象的编程语言，但是它与 Java 非常相似，有许多强大的编程功能，因此得到广大程序员的青睐。<br/>

:::note 下面列出 C# 一些重要的功能：
**•	布尔条件（Boolean Conditions）<br/>
•	自动垃圾回收（Automatic Garbage Collection）<br/>
•	标准库（Standard Library）<br/>
•	组件版本（Assembly Versioning）<br/>
•	属性（Properties）和事件（Events）<br/>
•	委托（Delegates）和事件管理（Events Management）<br/>
•	易于使用的泛型（Generics）<br/>
•	索引器（Indexers）<br/>
•	条件编译（Conditional Compilation）<br/>
•	简单的多线程（Multithreading）<br/>
•	LINQ 和 Lambda 表达式<br/>
•	集成 Windows<br/>**
:::
## 二、C#环境 ##
### 1、.Net框架（.Net Framework） ###
.Net 框架是一个创新的平台，能帮您编写出下面类型的应用程序：<br/>

**•	Windows 应用程序<br/>
•	Web 应用程序<br/>
•	Web 服务<br/>**

.Net 框架应用程序是多平台的应用程序。框架的设计方式使它适用于下列各种语言：C#、C++、Visual Basic、Jscript、COBOL 等等。所有这些语言可以访问框架，彼此之间也可以互相交互。<br/>

.Net 框架由一个巨大的代码库组成，用于 C# 等客户端语言。
:::note 下面列出一些 .Net 框架的组件：
**•	公共语言运行库（Common Language Runtime - CLR）<br/>
•	.Net 框架类库（.Net Framework Class Library）<br/>
•	公共语言规范（Common Language Specification）<br/>
•	通用类型系统（Common Type System）<br/>
•	元数据（Metadata）和组件（Assemblies）<br/>
•	Windows 窗体（Windows Forms）<br/>
•	ASP.Net 和 ASP.Net AJAX<br/>
•	ADO.Net<br/>
•	Windows 工作流基础（Windows Workflow Foundation - WF）<br/>
•	Windows 显示基础（Windows Presentation Foundation）<br/>
•	Windows 通信基础（Windows Communication Foundation - WCF）<br/>
•	LINQ<br/>**
:::
### 2、C# 的集成开发环境（Integrated Development Environment - IDE） ###
微软（Microsoft）提供了下列用于 C# 编程的开发工具：<br/>

**•	Visual Studio 2010 (VS)<br/>
•	Visual C# 2010 Express (VCE)<br/>
•	Visual Web Developer<br/>**

后面两个是免费使用的，可从微软官方网址下载。使用这些工具，您可以编写各种 C# 程序，从简单的命令行应用程序到更复杂的应用程序。您也可以使用基本的文本编辑器（比如 Notepad）编写 C# 源代码文件，并使用命令行编译器（.NET 框架的一部分）编译代码为组件。<br/>

## 三、C#程序结构 ##
### 1、Hello World实例 ###
:::note 一个 C# 程序主要包括以下部分：
**•	命名空间声明（Namespace declaration）<br/>
•	一个 class<br/>
•	Class 方法<br/>
•	Class 属性<br/>
•	一个 Main 方法<br/>
•	语句（Statements）& 表达式（Expressions）<br/>
•	注释<br/>**
:::
C# 文件的后缀为 .cs。<br/>

以下创建一个 test.cs 文件，文件包含了可以打印出 "Hello World" 的简单代码：<br/>

    using System;
    namespace HelloWorldApplication
    {
    class HelloWorld
    {
        static void Main(string[] args)
        {
            /* 我的第一个 C# 程序*/
            Console.WriteLine("Hello World");
            Console.ReadKey();
        }
    }
    }
当上面的代码被编译和执行时，它会产生下列结果：<br/>

    Hello World

让我们看一下上面程序的各个部分：<br/>

•	程序的第一行 using System; - using 关键字用于在程序中包含 System 命名空间。 一个程序一般有多个 using 语句。<br/>

•	下一行是 namespace 声明。一个 namespace 里包含了一系列的类。HelloWorldApplication 命名空间包含了类 HelloWorld。<br/>

•	下一行是 class 声明。类 HelloWorld 包含了程序使用的数据和方法声明。类一般包含多个方法。方法定义了类的行为。在这里，HelloWorld 类只有一个 Main 方法。<br/>

•	下一行定义了 Main 方法，是所有 C# 程序的 入口点。Main 方法说明当执行时 类将做什么动作。<br/>

•	下一行 /*...*/ 将会被编译器忽略，且它会在程序中添加额外的 注释。<br/>

•	Main 方法通过语句 Console.WriteLine("Hello World"); 指定了它的行为。WriteLine 是一个定义在 System 命名空间中的 Console 类的一个方法。该语句会在屏幕上显示消息 "Hello World"。<br/>

•	最后一行 Console.ReadKey(); 是针对 VS.NET 用户的。这使得程序会等待一个按键的动作，防止程序从 Visual Studio .NET 启动时屏幕会快速运行并关闭。<br/>

:::danger 以下几点值得注意：
•	**C# 是大小写敏感的。<br/>
•	所有的语句和表达式必须以分号（;）结尾。<br/>
•	程序的执行从 Main 方法开始。<br/>
•	与 Java 不同的是，文件名可以不同于类的名称。<br/>**
:::
### 2、	编译&执行C#程序 ###
如果您使用 Visual Studio.Net 编译和执行 C# 程序，请按下面的步骤进行：<br/>

•	启动 Visual Studio。<br/>
•	在菜单栏上，选择 File -> New -> Project。<br/>
•	从模板中选择 Visual C#，然后选择 Windows。<br/>
•	选择 Console Application。<br/>
•	为您的项目制定一个名称，然后点击 OK 按钮。<br/>
•	新项目会出现在解决方案资源管理器（Solution Explorer）中。
•	在代码编辑器（Code Editor）中编写代码。<br/>
•	点击 Run 按钮或者按下 F5 键来运行程序。会出现一个命令提示符窗口（Command Prompt window），显示 Hello World。<br/>

您也可以使用命令行代替 Visual Studio IDE 来编译 C# 程序：<br/>

•	打开一个文本编辑器，添加上面提到的代码。<br/>
•	保存文件为 helloworld.cs。<br/>
•	打开命令提示符工具，定位到文件所保存的目录。<br/>
•	键入 csc helloworld.cs 并按下 enter 键来编译代码。<br/>
•	如果代码没有错误，命令提示符会进入下一行，并生成 helloworld.exe 可执行文件。<br/>
•	接下来，键入 helloworld 来执行程序。<br/>
•	您将看到 "Hello World" 打印在屏幕上。<br/>
## 四、C#基本语法 ##
C# 是一种面向对象的编程语言。在面向对象的程序设计方法中，程序由各种相互交互的对象组成。相同种类的对象通常具有相同的类型，或者说，是在相同的 class 中。<br/>
例如，以 Rectangle（矩形）对象为例。它具有 length 和 width 属性。根据设计，它可能需要接受这些属性值、计算面积和显示细节。<br/>
让我们来看看一个 Rectangle（矩形）类的实现，并借此讨论 C# 的基本语法：<br/>

    using System;
    namespace RectangleApplication
    {
        class Rectangle
        {
            // 成员变量
            double length;
            double width;
            public void Acceptdetails()
            {
                length = 4.5;    
                width = 3.5;
            }
            public double GetArea()
            {
                return length * width;
            }
            public void Display()
            {
                Console.WriteLine("Length: {0}", length);
                Console.WriteLine("Width: {0}", width);
                Console.WriteLine("Area: {0}", GetArea());
            }
        }
   
        class ExecuteRectangle
        {
            static void Main(string[] args)
            {
                Rectangle r = new Rectangle();
                r.Acceptdetails();
                r.Display();
                Console.ReadLine();
            }
        }
    }
当上面的代码被编译和执行时，它会产生下列结果：<br/>

    Length: 4.5
    Width: 3.5
    Area: 15.75
### 1、using关键字 ###
在任何 C# 程序中的第一条语句都是：

**using System;**

using 关键字用于在程序中包含命名空间。一个程序可以包含多个 using 语句。<br/>

### 2、class关键字 ###
class 关键字用于声明一个类。<br/>

### 3、C#中的注释 ###
注释是用于解释代码。编译器会忽略注释的条目。在 C# 程序中，多行注释以 /* 开始，并以字符 */ 终止，如下所示：

    /* 这个程序演示
    C# 的注释
    使用 */
单行注释是用 // 符号表示。例如：<br/>

    // 这一行是注释 
### 4、成员变量 ###
变量是类的属性或数据成员，用于存储数据。在上面的程序中，**Rectangle** 类有两个成员变量，名为 **length** 和 **width**。<br/>
### 5、成员函数 ###

函数是一系列执行指定任务的语句。类的成员函数是在类内声明的。我们举例的类 **Rectangle** 包含了三个成员函数： **AcceptDetails**、**GetArea** 和 **Display**。<br/>
### 6、实例化一个类 ###
在上面的程序中，类 **ExecuteRectangle** 是一个包含 **Main()** 方法和实例化 **Rectangle** 类的类。
### 7、标识符 ###
 标识符是用来识别类、变量、函数或任何其它用户定义的项目。

:::note 在 C# 中，类的命名必须遵循如下基本规则：

**•	标识符必须以字母、下划线或 @ 开头，后面可以跟一系列的字母、数字（ 0 - 9 ）、下划线（ _ ）、@。<br/>
•	标识符中的第一个字符不能是数字。<br/>
•	标识符必须不包含任何嵌入的空格或符号，比如 ? - +! # % ^ & * ( ) [ ] { } . ; : " ' / \。<br/>
•	标识符不能是 C# 关键字。除非它们有一个 @ 前缀。 例如，@if 是有效的标识符，但 if 不是，因为 if 是关键字。
•	标识符必须区分大小写。大写字母和小写字母被认为是不同的字母。<br/>
•	不能与C#的类库名称相同。**
:::

### 8、C#关键字 ###
关键字是 C# 编译器预定义的保留字。这些关键字不能用作标识符，但是，如果您想使用这些关键字作为标识符，可以在关键字前面加上 @ 字符作为前缀。<br/>
在 C# 中，有些关键字在代码的上下文中有特殊的意义，如 get 和 set，这些被称为上下文关键字（contextual keywords）。<br/>
C# 中的保留关键字（Reserved Keywords）和上下文关键字（Contextual Keywords）：<br/>
 
## 五、C#数据类型 ## 
在 C# 中，变量分为以下几种类型：

**•	值类型（Value types）
•	引用类型（Reference types）
•	指针类型（Pointer types）**

### 1、值类型（Value types） ###
值类型变量可以直接分配给一个值。它们是从类 **System.ValueType** 中派生的。值类型直接包含数据。比如 **int、char、float**，它们分别存储数字、字符、浮点数。当您声明一个 **int** 类型时，系统分配内存来存储值。

如需得到一个类型或一个变量在特定平台上的准确尺寸，可以使用 sizeof 方法。表达式 sizeof(type) 产生以字节为单位存储对象或类型的存储尺寸。下面举例获取任何机器上 int 类型的存储尺寸：\

    using System;

    namespace DataTypeApplication
    {
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Size of int: {0}", sizeof(int));
            Console.ReadLine();
        }
    }
    }
当上面的代码被编译和执行时，它会产生下列结果：

    Size of int: 4

### 2、引用类型（Reference types） ### 
引用类型不包含存储在变量中的实际数据，但它们包含对变量的引用。

换句话说，它们指的是一个内存位置。使用多个变量时，引用类型可以指向一个内存位置。如果内存位置的数据是由一个变量改变的，其他变量会自动反映这种值的变化。内置的 引用类型有：**object**、**dynamic** 和 **string**。

#### 2.1 对象（Object）类型 ####
对象（Object）类型 是 C# 通用类型系统（Common Type System - CTS）中所有数据类型的终极基类。Object 是 System.Object 类的别名。所以对象（Object）类型可以被分配任何其他类型（值类型、引用类型、预定义类型或用户自定义类型）的值。但是，在分配值之前，需要先进行类型转换。

当一个值类型转换为对象类型时，则被称为 装箱；另一方面，当一个对象类型转换为值类型时，则被称为 拆箱。

    object obj;
    obj = 100; // 这是装箱

#### 2.2 动态（Dynamic）类型 ####
您可以存储任何类型的值在动态数据类型变量中。这些变量的类型检查是在运行时发生的。
声明动态类型的语法：

    dynamic <variable_name> = value;
例如：

    dynamic d = 20;
动态类型与对象类型相似，但是对象类型变量的类型检查是在编译时发生的，而动态类型变量的类型检查是在运行时发生的。
#### 2.2 字符串（String）类型 ####
字符串（String）类型 允许您给变量分配任何字符串值。字符串（String）类型是 System.String 类的别名。它是从对象（Object）类型派生的。字符串（String）类型的值可以通过两种形式进行分配：引号和 @引号。

例如：

    String str = "runoob.com";
    一个 @引号字符串：
    @"runoob.com";
C# string 字符串的前面可以加 @（称作"逐字字符串"）将转义字符（\）当作普通字符对待，比如：

    string str = @"C:\Windows";
等价于：

    string str = "C:\\Windows";
@ 字符串中可以任意换行，换行符及缩进空格都计算在字符串长度之内。

    string str = @"<script type=""text/javascript"">
    <!--
    -->
    </script>";

用户自定义引用类型有：**class**、**interface** 或 **delegate**。我们将在以后的章节中讨论这些类型。
### 3、	指针类型（Pointer types） ###
指针类型变量存储另一种类型的内存地址。C# 中的指针与 C 或 C++ 中的指针有相同的功能。

声明指针类型的语法：

    type* identifier;
例如：

    char* cptr;
    int* iptr;

## 六、C#类型转换 ##
类型转换从根本上说是类型铸造，或者说是把数据从一种类型转换为另一种类型。

C# 中的类型转换可以分为两种：**隐式转换**和**显式转换**。
### 1、隐式类转换 ### 
隐式转换是指将一个较小范围的数据类型转换为较大范围的数据类型时，编译器会自动完成类型转换，这些转换是 C# 默认的以安全方式进行的转换, 不会导致数据丢失。

例如，从小的整数类型转换为大的整数类型，从派生类转换为基类。将一个 byte 类型的变量赋值给 int 类型的变量，编译器会自动将 byte 类型转换为 int 类型，不需要显示转换。

实例：

    byte b = 10;
    int i = b; // 隐式转换，不需要显示转换

### 2、显式转换 ###
显式类型转换，即强制类型转换。

显式转换是指将一个较大范围的数据类型转换为较小范围的数据类型时，或者将一个对象类型转换为另一个对象类型时，需要使用强制类型转换符号进行显示转换，强制转换会造成数据丢失。

例如，将一个 int 类型的变量赋值给 byte 类型的变量，需要显示转换。
实例：

    int i = 10;
    byte b = (byte)i; // 显式转换，需要使用强制类型转换符号
下面的实例显示了一个显式的类型转换：

    using System;

    namespace TypeConversionApplication
    {
        class ExplicitConversion
        {
            static void Main(string[] args)
            {
                double d = 5673.74;
                int i;

                // 强制转换 double 为 int
                i = (int)d;
                Console.WriteLine(i);
                Console.ReadKey();
            
            }
        }
    }
当上面的代码被编译和执行时，它会产生下列结果：

    5673

### 3、类型转换方法 ###
C# 提供了下列内置的类型转换方法：

|序号	|方法 & 描述|
| :------ |:------ |
|1	|ToBoolean|
||如果可能的话，把类型转换为布尔型。|
|2	|ToByte|
||把类型转换为字节类型。|
|3	|ToChar|
||如果可能的话，把类型转换为单个 Unicode 字符类型。|
|4	|ToDateTime|
||把类型（整数或字符串类型）转换为 日期-时间 结构。|
|5	|ToDecimal|
||把浮点型或整数类型转换为十进制类型。|
|6	|ToDouble|
||把类型转换为双精度浮点型。|
|7	|ToInt16|
||把类型转换为 16 位整数类型。|
|8	|ToInt32|
||把类型转换为 32 位整数类型。|
|9	|ToInt64||
||把类型转换为 64 位整数类型。|
|10	|ToSbyte|
||把类型转换为有符号字节类型。|
|11|	ToSingle|
||把类型转换为小浮点数类型。|
|12	|ToString|
||把类型转换为字符串类型。|
|13	|ToType|
||把类型转换为指定类型。|
|14	|ToUInt16|
||把类型转换为 16 位无符号整数类型。|
|15	|ToUInt32|
||把类型转换为 32 位无符号整数类型。|
|16	|ToUInt64|
||把类型转换为 64 位无符号整数类型。|
下面的实例把不同值的类型转换为字符串类型：

实例：

    namespace TypeConversionApplication
    {
        class StringConversion
        {
            static void Main(string[] args)
            {
                int i = 75;
                float f = 53.005f;
                double d = 2345.7652;
                bool b = true;

                Console.WriteLine(i.ToString());
                Console.WriteLine(f.ToString());
                Console.WriteLine(d.ToString());
                Console.WriteLine(b.ToString());
                Console.ReadKey();
            
            }
        }
    }
当上面的代码被编译和执行时，它会产生下列结果：

    75
    53.005
    2345.7652
    True
:::danger 在进行类型转换时需要注意以下几点：

•	隐式转换只能将较小范围的数据类型转换为较大范围的数据类型，不能将较大范围的数据类型转换为较小范围的数据类型；
•	显式转换可能会导致数据丢失或精度降低，需要进行数据类型的兼容性检查；
•	对于对象类型的转换，需要进行类型转换的兼容性检查和类型转换的安全性检查。
:::
## 七、C#变量 ##

一个变量只不过是一个供程序操作的存储区的名字。在 C# 中，每个变量都有一个特定的类型，类型决定了变量的内存大小和布局。范围内的值可以存储在内存中，可以对变量进行一系列操作。

我们已经讨论了各种数据类型。C# 中提供的基本的值类型大致可以分为以下几类：
 
C# 允许定义其他值类型的变量，比如 **enum**，也允许定义引用类型变量，比如 **class**。这些我们将在以后的章节中进行讨论。在本章节中，我们只研究基本变量类型。
### 1、变量定义 ###
C# 中变量定义的语法：

    <data_type> <variable_list>;
在这里，data_type 必须是一个有效的 C# 数据类型，可以是 char、int、float、double 或其他用户自定义的数据类型。variable_list 可以由一个或多个用逗号分隔的标识符名称组成。

:::note 一些有效的变量定义如下所示：
int i, j, k;
char c, ch;
float f, salary;
double d;
:::
您可以在变量定义时进行初始化：

    int i = 100;

### 2、变量初始化 ### 
变量通过在等号后跟一个常量表达式进行初始化（赋值）。初始化的一般形式为：

    variable_name = value;
变量可以在声明时被初始化（指定一个初始值）。初始化由一个等号后跟一个常量表达式组成，如下所示：

    <data_type> <variable_name> = value;
一些实例：

    int d = 3, f = 5;    /* 初始化 d 和 f. */
    byte z = 22;         /* 初始化 z. */
    double pi = 3.14159; /* 声明 pi 的近似值 */
    char x = 'x';        /* 变量 x 的值为 'x' */
正确地初始化变量是一个良好的编程习惯，否则有时程序会产生意想不到的结果。

请看下面的实例，使用了各种类型的变量：

实例：

    namespace VariableDefinition
    {
        class Program
        {
            static void Main(string[] args)
            {
                short a;
                int b ;
                double c;

                /* 实际初始化 */
                a = 10;
                b = 20;
                c = a + b;
                Console.WriteLine("a = {0}, b = {1}, c = {2}", a, b, c);
                Console.ReadLine();
            }
        }
    }
当上面的代码被编译和执行时，它会产生下列结果：

    a = 10, b = 20, c = 30

### 3、接受来自用户的值 ###
System 命名空间中的 Console 类提供了一个函数 ReadLine()，用于接收来自用户的输入，并把它存储到一个变量中。
例如：

    int num;
    num = Convert.ToInt32(Console.ReadLine());
函数 **Convert.ToInt32()** 把用户输入的数据转换为 **int** 数据类型，因为 **Console.ReadLine()** 只接受字符串格式的数据。

### 4、Lvalues和Rvalues ###

C# 中的两种表达式：

**lvalue：lvalue** 表达式可以出现在赋值语句的左边或右边。

**rvalue：rvalue**表达式可以出现在赋值语句的右边，不能出现在赋值语句的左边。

变量是 lvalue 的，所以可以出现在赋值语句的左边。数值是 rvalue 的，因此不能被赋值，不能出现在赋值语句的左边。下面是一个有效的语句：

    int g = 20;
下面是一个无效的语句，会产生编译时错误：

    10 = 20;

## 八、C#常量 ##
常量是固定值，程序执行期间不会改变。常量可以是任何基本数据类型，比如整数常量、浮点常量、字符常量或者字符串常量，还有枚举常量。

常量可以被当作常规的变量，只是它们的值在定义后不能被修改。


### 1、整数常量 ###
整数常量可以是十进制、八进制或十六进制的常量。前缀指定基数：0x 或 0X 表示十六进制，0 表示八进制，没有前缀则表示十进制。

整数常量也可以有后缀，可以是 U 和 L 的组合，其中，U 和 L 分别表示 unsigned 和 long。后缀可以是大写或者小写，多个后缀以任意顺序进行组合。

这里有一些整数常量的实例：

    212         /* 合法 */
    215u        /* 合法 */
    0xFeeL      /* 合法 */
    078         /* 非法：8 不是一个八进制数字 */
    032UU       /* 非法：不能重复后缀 */
以下是各种类型的整数常量的实例：

    85         /* 十进制 */
    0213       /* 八进制 */
    0x4b       /* 十六进制 */
    30         /* int */
    30u        /* 无符号 int */
    30l        /* long */
    30ul       /* 无符号 long */

### 2、浮点常量 ###
一个浮点常量是由整数部分、小数点、小数部分和指数部分组成。您可以使用小数形式或者指数形式来表示浮点常量。
这里有一些浮点常量的实例：

    3.14159       /* 合法 */
    314159E-5L    /* 合法 */
    510E          /* 非法：不完全指数 */
    210f          /* 非法：没有小数或指数 */
    .e55          /* 非法：缺少整数或小数 */
使用浮点形式表示时，必须包含小数点、指数或同时包含两者。使用指数形式表示时，必须包含整数部分、小数部分或同时包含两者。**有符号的指数**是用 **e** 或 **E**表示的。

### 3、字符常量 ###
字符常量是括在单引号里，例如，'**x**'，且可存储在一个简单的字符类型变量中。一个字符常量可以是一个普通字符（例如 '**x**'）、一个**转义序列**（例如 '**\t**'）或者一个通用字符（例如 '**\u02C0**'）。

在 C# 中有一些特定的字符，当它们的前面带有反斜杠时有特殊的意义，可用于表示换行符（**\n**）或制表符 **tab（\t）**。在这里，列出一些转义序列码：
 
以下是一些转义序列字符的实例：

    namespace EscapeChar
    {
        class Program
        {
            static void Main(string[] args)
            {
                Console.WriteLine("Hello\tWorld\n\n");
                Console.ReadLine();
            }
        }
    }
当上面的代码被编译和执行时，它会产生下列结果：

    Hello   World

### 4、字符串常量 ###
字符串常量是括在双引号 "" 里，或者是括在 @"" 里。字符串常量包含的字符与字符常量相似，可以是：**普通字符**、**转义序列**和**通用字符**。

使用字符串常量时，可以把一个很长的行拆成多个行，可以使用空格分隔各个部分。

这里是一些字符串常量的实例。下面所列的各种形式表示相同的字符串。

    string a = "hello, world";                  // hello, world
    string b = @"hello, world";               // hello, world
    string c = "hello \t world";               // hello     world
    string d = @"hello \t world";               // hello \t world
    string e = "Joe said \"Hello\" to me";      // Joe said "Hello" to me
    string f = @"Joe said ""Hello"" to me";   // Joe said "Hello" to me
    string g = "\\\\server\\share\\file.txt";   // \\server\share\file.txt
    string h = @"\\server\share\file.txt";      // \\server\share\file.txt
    string i = "one\r\ntwo\r\nthree";
    string j = @"one
    two
    three";

### 5、定义常量 ###

常量是使用 const 关键字来定义的 。定义一个常量的语法如下：

    const <data_type> <constant_name> = value;
下面的代码演示了如何在程序中定义和使用常量：

实例：

    using System;

    public class ConstTest
    {
        class SampleClass
        {
            public int x;
            public int y;
            public const int c1 = 5;
            public const int c2 = c1 + 5;

            public SampleClass(int p1, int p2)
            {
                x = p1;
                y = p2;
            }
        }

        static void Main()
        {
            SampleClass mC = new SampleClass(11, 22);
            Console.WriteLine("x = {0}, y = {1}", mC.x, mC.y);
            Console.WriteLine("c1 = {0}, c2 = {1}",
                            SampleClass.c1, SampleClass.c2);
        }
    }
当上面的代码被编译和执行时，它会产生下列结果：

    x = 11, y = 22
    c1 = 5, c2 = 10

## 九、C#运算符 ##

运算符是一种告诉编译器执行特定的数学或逻辑操作的符号。C# 有丰富的内置运算符，分类如下：

**•	算术运算符
•	关系运算符
•	逻辑运算符
•	位运算符
•	赋值运算符
•	其他运算符**

### 1、算术运算符 ###

下表显示了 C# 支持的所有算术运算符。假设变量 A 的值为 10，变量 B 的值为 20，则：
 
实例：

    using System;

    namespace OperatorsAppl
    {
        class Program
        {
            static void Main(string[] args)
            {
                int a = 21;
                int b = 10;
                int c;

                c = a + b;
                Console.WriteLine("Line 1 - c 的值是 {0}", c);
                c = a - b;
                Console.WriteLine("Line 2 - c 的值是 {0}", c);
                c = a * b;
                Console.WriteLine("Line 3 - c 的值是 {0}", c);
                c = a / b;
                Console.WriteLine("Line 4 - c 的值是 {0}", c);
                c = a % b;
                Console.WriteLine("Line 5 - c 的值是 {0}", c);

                // ++a 先进行自增运算再赋值
                c = ++a;
                Console.WriteLine("Line 6 - c 的值是 {0}", c);

                // 此时 a 的值为 22
                // --a 先进行自减运算再赋值
                c = --a;
                Console.WriteLine("Line 7 - c 的值是 {0}", c);
                Console.ReadLine();
            }
        }
    }

当上面的代码被编译和执行时，它会产生下列结果：

    Line 1 - c 的值是 31
    Line 2 - c 的值是 11
    Line 3 - c 的值是 210
    Line 4 - c 的值是 2
    Line 5 - c 的值是 1
    Line 6 - c 的值是 22
    Line 7 - c 的值是 21

•	c = a++: 先将 a 赋值给 c，再对 a 进行自增运算。<br/>
•	c = ++a: 先将 a 进行自增运算，再将 a 赋值给 c 。<br/>
•	c = a--: 先将 a 赋值给 c，再对 a 进行自减运算。<br/>
•	c = --a: 先将 a 进行自减运算，再将 a 赋值给 c 。<br/>
实例：

    using System;

    namespace OperatorsAppl
    {
        class Program
        {
            static void Main(string[] args)
            {
                int a = 1;
                int b;

                // a++ 先赋值再进行自增运算
                b = a++;
                Console.WriteLine("a = {0}", a);
                Console.WriteLine("b = {0}", b);
                Console.ReadLine();

                // ++a 先进行自增运算再赋值
                a = 1; // 重新初始化 a
                b = ++a;
                Console.WriteLine("a = {0}", a);
                Console.WriteLine("b = {0}", b);
                Console.ReadLine();

                // a-- 先赋值再进行自减运算
                a = 1;  // 重新初始化 a
                b= a--;
                Console.WriteLine("a = {0}", a);
                Console.WriteLine("b = {0}", b);
                Console.ReadLine();

                // --a 先进行自减运算再赋值
                a = 1;  // 重新初始化 a
                b= --a;
                Console.WriteLine("a = {0}", a);
                Console.WriteLine("b = {0}", b);
                Console.ReadLine();
            }
        }
    }

执行以上程序，输出结果为：

    a = 2
    b = 1
    a = 2
    b = 2
    a = 0
    b = 1
    a = 0
    b = 0

### 2、关系运算符 ###

下表显示了 C# 支持的所有关系运算符。假设变量 A 的值为 10，变量 B 的值为 20，则：
 
实例：

    using System;

    class Program
    {
    static void Main(string[] args)
    {
        int a = 21;
        int b = 10;
        
        if (a == b)
        {
            Console.WriteLine("Line 1 - a 等于 b");
        }
        else
        {
            Console.WriteLine("Line 1 - a 不等于 b");
        }
        if (a < b)
        {
            Console.WriteLine("Line 2 - a 小于 b");
        }
        else
        {
            Console.WriteLine("Line 2 - a 不小于 b");
        }
        if (a > b)
        {
            Console.WriteLine("Line 3 - a 大于 b");
        }
        else
        {
            Console.WriteLine("Line 3 - a 不大于 b");
        }
        /* 改变 a 和 b 的值 */
        a = 5;
        b = 20;
        if (a <= b)
        {
            Console.WriteLine("Line 4 - a 小于或等于 b");
        }
        if (b >= a)
        {
            Console.WriteLine("Line 5 - b 大于或等于 a");
        }
    }
    }
当上面的代码被编译和执行时，它会产生下列结果：

    Line 1 - a 不等于 b
    Line 2 - a 不小于 b
    Line 3 - a 大于 b
    Line 4 - a 小于或等于 b
    Line 5 - b 大于或等于 a

### 3、逻辑运算符 ###

下表显示了 C# 支持的所有逻辑运算符。假设变量 A 为布尔值 true，变量 B 为布尔值 false，则：
 
实例：

    using System;

    namespace OperatorsAppl
    {
        class Program
        {
            static void Main(string[] args)
            {
                bool a = true;
                bool b = true;
            
                if (a && b)
                {
                Console.WriteLine("Line 1 - 条件为真");
                }
                if (a || b)
                {
                    Console.WriteLine("Line 2 - 条件为真");
                }
                /* 改变 a 和 b 的值 */
                a = false;
                b = true;
                if (a && b)
                {
                    Console.WriteLine("Line 3 - 条件为真");
                }
                else
                {
                    Console.WriteLine("Line 3 - 条件不为真");
                }
                if (!(a && b))
                {
                    Console.WriteLine("Line 4 - 条件为真");
                }
                Console.ReadLine();
            }
        }
    }

当上面的代码被编译和执行时，它会产生下列结果：

    Line 1 - 条件为真
    Line 2 - 条件为真
    Line 3 - 条件不为真
    Line 4 - 条件为真

### 4、位运算符 ###

位运算符作用于位，并逐位执行操作。&、 | 和 ^ 的真值表如下所示：
 
假设如果 A = 60，且 B = 13，现在以二进制格式表示，它们如下所示：

    A = 0011 1100
    B = 0000 1101
    -----------------
    A&B = 0000 1100
    A|B = 0011 1101
    A^B = 0011 0001
    ~A  = 1100 0011
假设变量 A 的值为 60，变量 B 的值为 13，则：
 
实例：

    using System;
    namespace OperatorsAppl
    {
        class Program
        {
            static void Main(string[] args)
            {
                int a = 60;            /* 60 = 0011 1100 */  
                int b = 13;            /* 13 = 0000 1101 */
                int c = 0;          

                c = a & b;           /* 12 = 0000 1100 */
                Console.WriteLine("Line 1 - c 的值是 {0}", c );

                c = a | b;           /* 61 = 0011 1101 */
                Console.WriteLine("Line 2 - c 的值是 {0}", c);

                c = a ^ b;           /* 49 = 0011 0001 */
                Console.WriteLine("Line 3 - c 的值是 {0}", c);

                c = ~a;               /*-61 = 1100 0011 */
                Console.WriteLine("Line 4 - c 的值是 {0}", c);

                c = a << 2;     /* 240 = 1111 0000 */
                Console.WriteLine("Line 5 - c 的值是 {0}", c);

                c = a >> 2;     /* 15 = 0000 1111 */
                Console.WriteLine("Line 6 - c 的值是 {0}", c);
                Console.ReadLine();
            }
        }
    }
当上面的代码被编译和执行时，它会产生下列结果：

    Line 1 - c 的值是 12
    Line 2 - c 的值是 61
    Line 3 - c 的值是 49
    Line 4 - c 的值是 -61
    Line 5 - c 的值是 240
    Line 6 - c 的值是 15

### 5、赋值运算符 ###
下表列出了 C# 支持的赋值运算符：
 
实例：

    using System;

    namespace OperatorsAppl
    {
        class Program
        {
            static void Main(string[] args)
            {
                int a = 21;
                int c;

                c = a;
                Console.WriteLine("Line 1 - =  c 的值 = {0}", c);

                c += a;
                Console.WriteLine("Line 2 - += c 的值 = {0}", c);

                c -= a;
                Console.WriteLine("Line 3 - -=  c 的值 = {0}", c);

                c *= a;
                Console.WriteLine("Line 4 - *=  c 的值 = {0}", c);

                c /= a;
                Console.WriteLine("Line 5 - /=  c 的值 = {0}", c);

                c = 200;
                c %= a;
                Console.WriteLine("Line 6 - %=  c 的值 = {0}", c);

                c <<= 2;
                Console.WriteLine("Line 7 - <<=  c 的值 = {0}", c);

                c >>= 2;
                Console.WriteLine("Line 8 - >>=  c 的值 = {0}", c);

                c &= 2;
                Console.WriteLine("Line 9 - &=  c 的值 = {0}", c);

                c ^= 2;
                Console.WriteLine("Line 10 - ^=  c 的值 = {0}", c);

                c |= 2;
                Console.WriteLine("Line 11 - |=  c 的值 = {0}", c);
                Console.ReadLine();
            }
        }
    }

当上面的代码被编译和执行时，它会产生下列结果：

    Line 1 - =     c 的值 = 21
    Line 2 - +=    c 的值 = 42
    Line 3 - -=    c 的值 = 21
    Line 4 - *=    c 的值 = 441
    Line 5 - /=    c 的值 = 21
    Line 6 - %=    c 的值 = 11
    Line 7 - <<=    c 的值 = 44
    Line 8 - >>=    c 的值 = 11
    Line 9 - &=    c 的值 = 2
    Line 10 - ^=    c 的值 = 0
    Line 11 - |=    c 的值 = 2


### 6、其他运算符 ###

下表列出了 C# 支持的其他一些重要的运算符，包括 **sizeof、typeof** 和 **?** :。
 
实例：

    using System;

    namespace OperatorsAppl
    {
    
    class Program
    {
        static void Main(string[] args)
        {
            
            /* sizeof 运算符的实例 */
            Console.WriteLine("int 的大小是 {0}", sizeof(int));
            Console.WriteLine("short 的大小是 {0}", sizeof(short));
            Console.WriteLine("double 的大小是 {0}", sizeof(double));
            
            /* 三元运算符的实例 */
            int a, b;
            a = 10;
            b = (a == 1) ? 20 : 30;
            Console.WriteLine("b 的值是 {0}", b);

            b = (a == 10) ? 20 : 30;
            Console.WriteLine("b 的值是 {0}", b);
            Console.ReadLine();
        }
    }
    }
当上面的代码被编译和执行时，它会产生下列结果：

    int 的大小是 4
    short 的大小是 2
    double 的大小是 8
    b 的值是 30
    b 的值是 20
**typeof **关键字用于获取一个类型的类型对象，它通常用于反射和动态创建类型实例。
下面是一个使用 typeof 的简单示例：

实例：

    using System;

    class Program
    {
        static void Main(string[] args)
        {
            Type type = typeof(string);
            Console.WriteLine(type.FullName);
            Console.ReadKey();
        }
    }

在上面的代码中，我们使用 typeof 关键字来获取 string 类型的类型对象，并将其存储在 Type 类型的变量 type 中，然后，我们使用 FullName 属性打印该类型的完全限定名。

当上面的代码被编译和执行时，它会产生下列结果：

    System.String

### 7、运算符优先级 ### 
运算符的优先级确定表达式中项的组合。这会影响到一个表达式如何计算。某些运算符比其他运算符有更高的优先级，例如，乘除运算符具有比加减运算符更高的优先级。

例如 x = 7 + 3 ** 2，在这里，x 被赋值为 13，而不是 20，因为运算符 ** 具有比 + 更高的优先级，所以首先计算乘法 3**2，然后再加上 7。

在表达式中，较高优先级的运算符会优先被计算。
优先级简易概括：有括号先括号，后乘除在加减，然后位移再关系，逻辑完后条件，最后一个逗号 , 。


