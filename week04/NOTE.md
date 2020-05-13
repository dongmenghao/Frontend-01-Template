# JavaScipt 结构化程序设计里的基础设施

* JSContext => Realm
* 宏任务（setTimeout）
* 微任务（Promise，MutationObserver监控 DOM 变化）
* 函数调用（Execution Context）
* 语句/声明
* 表达式
* 直接量/变量/this ...

## Realm

A realm object abstracts the notion of a distinct global environment, with its own global object, copy of the standard library, and "intrinsics" (standard objects that are not bound to global variables, like the initial value of Object.prototype)

Realm 是一个JS全局对象的集合，是一个抽象的全局环境。

## LexialEnvironment 词法环境

* this
* new.target
* super
* 变量

## VariableEnvironment 变量环境

VariableEnvironment 是个历史遗留包袱，仅仅用于处理 var 声明
