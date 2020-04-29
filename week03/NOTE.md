
### JavaScript Expression

  * Unary 单目运算
  
    返回undefined 一般使用 void 0; 任何数字前面添加 void 都可以返回 undefined

* IIFE (Immediately Invoked Function Expression) 立即执行的函数表达式
  
  ```JavaScript
    // 不采用 IIFE 的函数声明和函数调用
    function foo(){
      var a = 10;
      console.log(a);
    }
    foo();

    // 采用 IIFE, 使用()的方式 前面不加分号时容易产生粘连，造成无法预知的错误
    (function foo(){
      var a = 10;
      console.log(a);
    })()
    // 采用 IIFE 使用void的方式, 推荐使用此种方式
    void function foo(){
      var a = 10;
      console.log(a);
    }()
  ```

  * 涉及装箱/拆箱操作的四种类型：
    
    把基本数据类型转换为对应的引用类型的操作称为装箱，把引用类型转换为基本的数据类型称为拆箱。

     * 装箱: Number String Boolean Symbol => Object

          (function() { return this }).apply(Symbol("x")) 将 Symbol("x") 装箱

     * 拆箱: Object => Number String Boolean Symbol

        拆箱时优先调用对象中的 toPrimitive 方法,如果没有 toPrimitive 会执行默认的 toPrimitive 调用 valueOf, 如果 没有 valueOf 则执行 toString。执行的优先级顺序如下：

         \[Symbol.toPrimitive]() > valueOf() > toString() 

    
[ECMA 第四章](https://www.ecma-international.org/ecma-262/#sec-overview) 对语言进行了整体介绍，涵盖Web Script语言环境，ES基本概念和专业术语，以及ECMA规范文档的组织方式。其中提到JavaScript有七种语言类型: Undefined, Null, Boolean, String, Symbol, Number, Object，四种object: ordinary object, exotic object, standard object, build-in object。

## 七种Type
### Undefined Type
Undefined 类型表示未定义，它的类型只有一个值，就是 undefined。任何变量在赋值前是 Undefined 类型、值为 undefined，一般我们可以用全局变量 undefined（就是名为 undefined 的这个变量）来表达这个值，或者 void 运算来把任意一个表达式变成 undefined 值。
由于undefined在JavaScript中不是一个关键字，而是一个变量，为了防止被篡改，一般使用void 0来获取undefined值。
### Null Type
Null 类型也只有一个值，就是 null，它的语义表示空值，表示"定义了但是为空"。注意：变量只声明未赋值时值未undefined不是null。
### Boolean Type
Boolean 类型有两个值， true 和 false，它用于表示逻辑意义上的真和假
### String Type
有有限的零个或多个16位无符号整数值的有序序列(共计2e53 - 1个元素)。
String中的每一个字符都是UTF16编码，即占2个字节，作用在字符串上的所有操作都视它们为无差别的16位无符号整数。

> Note：现行的字符集国际标准，字符是以 Unicode 的方式表示的，每一个 Unicode 的码点表示一个字符，理论上，Unicode 的范围是无限的。UTF 是 Unicode 的编码方式，规定了码点在计算机中的表示方法，常见的有 UTF16 和 UTF8。 Unicode 的码点通常用 U+??? 来表示，其中 ??? 是十六进制的码点值。 0-65536（U+0000 - U+FFFF）的码点被称为基本字符区域（BMP）
    
JavaScript 中的字符串是永远无法变更的，一旦字符串构造出来，无法用任何方式改变字符串的内容，所以字符串具有值类型的特征。

### Symbol Type
Symbol 是 ES6 中引入的新类型，它是一切非字符串的对象 key 的集合。它的值就有唯一性。将变量声明为Symbol类型的值时，不能使用关键词new
如下：
* var a = Symbol(a)       //√
* var a = new Symbol(a)   //×
* Symbol(1) === Symbol(1) //false

### Number Type
Number 是双精度浮点数(符合IEEE 754-2008规则的数字)，以及NaN, Infinity, -Infinty的集合。

### Object Type
Object 是 JavaScript 中最复杂的类型，也是 JavaScript 的核心机制之一。Object 表示对象的意思，它是一切有形和无形物体的总称。
在 JavaScript 中，对象的定义是“属性的集合”。属性分为数据属性和访问器属性，二者都是 key-value 结构，key 可以是字符串或者 Symbol 类型。

## 四种object
### ordinary object(普通对象)
object that has the default behaviour for the essential internal methods that must be supported by all objects. 具有所有对象支持的基本内部方法的默认行为的对象。

All ordinary objects have an internal slot called [[Prototype]]. The value of this internal slot is either null or an object and is used for implementing inheritance. 
所有ordinary object都有一个称为[[Prototype]]的内部插槽。此内部插槽的值可以为null或一个对象，用于实现继承。

Data properties of the [[Prototype]] object are inherited (and visible as properties of the child object) for the purposes of get access, but not for set access. Accessor properties are inherited for both get access and set access. 

the [[Prototype]] object的数据属性被继承(作为子对象的属性可见)是出于获取访问，而不是设置的目的。访问器属性被继承是为了获取和设置访问权限。

##### ECMAScript function object


### exotic object(外来对象)
object that does not have the default behaviour for one or more of the essential internal methods. 没有一个或多个基本内部方法默认行为的对象。

* Array
* String
* Arguments
* Bound Function Exotic Objects
* Integer-Indexed Exotic Objects
* Module Namespace Exotic Objects
* Immutable Prototype Exotic Objects

注意: 任何一个object不是ordinary object 就是exotic object.
### standard object(标准对象)
object whose semantics are defined by this specification.
被ECMA规范定了其语义的对象。

https://cs.lmu.edu/~ray/notes/javascriptstandardobjects/
(ECMAScript Standard Objects + Typical Browser Objects + Node.js Objects)

### build-in object(内置对象)
object specified and supplied by an ECMAScript implementation. 由ECMAScript实现指定和提供的对象。

注意：标准的内置对象已被规范定义。 ECMAScript实现可能指定和提供了其他种类的内置对象。内置构造函数是一个内置对象，它也是一个构造函数。

##### Well-Known Intrinsic Objects
Well-Known Intrinsic是build-in对象，这些对象由规范的算法明确引用，并且通常具有特定领域的标识。除非另有说明，否则每个intrinsic object实际上对应于一组类似对象，每个领域一个。
* Array
* ArrayBuffer
* Atomics
* Boolean
* DataView
* Date
* Error
* EvalError
* Float32Array
* Float64Array
* Function
* Int8Array
* Int16Aray
* Int32Array
* JSON
* Map
* Math
* Number
* Object
* Promise
* Proxy
* RangeError
* ReferenceError
* Reflect
* RegExp
* Set
* SharedArrayBuffer
* String
* Symbol
* TypeError
* Uint8Array
* Uint16Array
* Uint32Array
* URIError
* WeakMap
* WeakSet
