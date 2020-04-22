# 编程语言通识

* 产生式 BNF 可以迭代
* DecimalNumber 是十进制数字
* 带""的是终结符( Number + - * / )
* 不带""的是非终结符( MultiplicativeExpression AdditiveExpression )
  
```

<Number> = "0" | "1" | ..... | "9"

<DecimalNumber> = "0" | { {"1" | "2" | ... | "9"} <Number>* }

<PrimaryExpression> = <DecimalNumber> |
  "(" <LogicalExpression> ")"

<AdditiveExpression> = <DecimalNumber> | 
    <AdditiveExpression> "+" <DecimalNumber> |
    <AdditiveExpression> "-" <DecimalNumber>

<MultiplicativeExpression> = <DecimalNumber> | 
  <MutiplicativeExpression> "*" <DecimalNumber> |
  <MutiplicativeExpression> "/" <DecimalNumber>

<LogicalExpression> = <AdditiveExpression> |
  <LogicalExpression> "||" <AdditiveExpression> |
  <LogicalExpression> "&&" <AdditiveExpression>

```

## 动态 vs 静态

* 动态
  动态语言是在运行时确定数据类型的语言。变量使用之前不需要类型声明，通常变量的类型是被赋值的那个值的类型。
  * 在用户的设备/在线服务器上
  * 产品实际运行时
  * Runtime
  * PHP/ASP/Ruby/Python/Perl/ABAP/SQL/JavaScript/Unix Shell
  * 优势
    1. 思维不受束缚，可以任意发挥，把更多的精力放在产品本身上；
    2. 集中思考业务逻辑实现，思考过程即实现过程；
* 静态
  静态语言是在编译时变量的数据类型即可确定的语言，多数静态类型语言要求在使用变量之前必须声明数据类型。
  * 在程序员的设备上
  * 产品开发时
  * Compiletime
  * C++、Java、Delphi、C#等
  * 优势
    1. 由于类型的强制声明，使得IDE有很强的代码感知能力，故，在实现复杂的业务逻辑、开发大型商业系统、以及那些生命周期很长的应用中，依托IDE对系统的开发很有保障；
    2. 由于静态语言相对比较封闭，使得第三方开发包对代码的侵害性可以降到最低；
  
## 强类型 vs 弱类型

* 强类型(无隐式转换)
  强制数据类型定义的语言。也就是说，一旦一个变量被指定了某个数据类型，如果不经过强制转换，那么它就永远是这个数据类型了。举个例子：如果你定义了一个整型变量a,那么程序根本不可能将a当作字符串类型处理。强类型定义语言是类型安全的语言。

* 弱类型(有隐式转化)
  数据类型可以被忽略的语言。它与强类型定义语言相反, 一个变量可以赋不同数据类型的值。强类型定义语言在速度上可能略逊色于弱类型定义语言，但是强类型定义语言带来的严谨性能够有效的避免许多错误。

强类型语言是一旦变量的类型被确定，就不能转化的语言。 
弱类型语言则反之，一个变量的类型是由其应用上下文确定的。


# JavaScript 词法，类型

```
// 打印 Unicode 字符
<script>
  for (let i = 0; i<128; i++)
  {
    console.log(String.fromCharCode(i));
  }
</script>
```

## 查看字符串的 Unicode 编码

charCodeAt() 方法可返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数。
codePointAt() 方法返回 一个 Unicode 编码点值的非负整数。 获取整个代码点的值，使用 codePointAt()。
toString(16) 转为16进制
Unicode编码是反斜杠 \u5389\u5bb3

```
"厉害".charCodeAt(0).toString(16)  //5389
"厉害".charCodeAt(1).toString(16)  //5bb3
```

## Number Practice
  * Safe Integer
    * Number.MAX_SAFE_INTEGER.toString(16)  // "1fffffffffffff"
  * Float Compare
    * Mathf.abs(0.1 + 0.2 - 0.3) <= Number.EPSILCON
  


## 相关链接
* https://home.unicode.org/
* https://www.fileformat.info/info/unicode/
* 