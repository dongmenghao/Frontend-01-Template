# 前端知识体系

## HTML
  ### HTML as 通用计算机语言
  * 词法
  * 语法
  ### HTML as SGML
  * DTD
  * Entity
  ### HTML as XML
  * Namespace
    * svg
    * mathml
    * aria
    * TAG (111)
      html
      head
      title
      base
      link
      meta
      style
      body
      article
      section
      nav
      aside
      h1
      h2
      h3
      h4
      h5
      h6
      hgroup
      header
      footer
      address
      p
      hr
      pre
      blockquote
      ol
      ul
      menu
      li
      dl
      dt
      dd
      figure
      figcaption
      main
      div
      a
      em
      strong
      small
      s
      cite
      q
      dfn
      abbr
      ruby
      rt
      rp
      data
      time
      code
      var
      samp
      kbd
      sub
      sup
      i
      b
      u
      mark
      bdi
      bdo
      span
      br
      wbr
      area
      ins
      del
      picture
      source
      img
      iframe
      embed
      object
      param
      video
      audio
      track
      map
      table
      caption
      colgroup
      col
      tbody
      thead
      tfoot
      tr
      td
      th
      form
      label
      input
      button
      select
      datalist
      optgroup
      option
      textarea
      output
      progress
      meter
      fieldset
      legend
      details
      summary
      dialog
      script
      noscript
      template
      slot
      canvas

## JavsScript
  ### Grammar
  * 词法(Lex)
    * WhiteSpace
    * LineTerminator
    * Comment
    * Token
  * 语法(Sytax)
    * Atom
    * Expression
    * Structure
    * Script &Module
  ### 语义(Semantics)
  ### 运行时(Runtime)
  * Type
    * Number
    * String
    * Boolean
    * Null
    * Undefined
    * Object
    * Symbol
    * 内部类型
      * Reference
      * Completion Record
  * 执行过程
    * Job
    * Script & Module
    * Statement
    * Subtopic 5

## CSS
### 词法/语法
### @规则
### 普通规则
  * 选择器
    * 简单选择器
      * .class
      * #id
      * tag
      * *
      * [attr=v]
    * 复合选择器
    * 复杂选择器
    * 选择器列表
  * Property
  * Value
### 机制
  * 排版
  * 伪元素
  * 动画
  * 优先级

## API
### Browser
  * DOM
    * Nodes
    * Ranges
    * Events
  * BOM
### Node
### Electron
### 小程序

# 课后总结

## 学习方法
1. 整理法
   * 顺序关系
   * 分类关系
   * 组合关系
   * 维度关系
2. 追溯法
   * 追根溯源
   * 找到对应的引用
   * 找到对应的概念提出人
   * 找到最初的文献定义

## 前端学习网站
  * https://www.w3.org/
  * http://w3school.com/
  * https://whatwg.org/
  * https://scholar.google.com/
  * https://developer.mozilla.org/
  * https://docs.microsoft.com/
  * https://developer.apple.com/ 
  
## 前端知识模型
* 编程能力：目的是能否解决问题（难的维度）。
* 架构能力：解决复杂的系统，解决多人协同（项目大的维度），从多看源码和参与开源提升。
* 工程能力：解决人员组织的问题（人的维度）。
* 领域知识：指业务领域，像切图、埋点之类的知识，可以去Qcon等一下平台找。

## 课堂演示小伎俩
console 窗口输入字符串
`”var\UEFFa=1"` 会显示 vara=1，var和 a 之间没有空格
![](./使用%20unicode零宽空格演示.jpg)

## tag标签整理
在[whatwg页面](https://html.spec.whatwg.org/multipage/) 第 4 章 The elements of HTML 整理。
在 Chrome 浏览器开发者工具输入
```JavaScript
var arrs = $0.querySelectorAll('code')  //$0 表示当前选中的元素
var tags = Array.prototype.map.call(arrs, item => { return item.innerText })
var uniqueTags = new Set(tags) //使用 Set 去重
tags = Array.from(uniqueTags) // 将 Set 转化为数组
var tagsString = tags.join('\n')

```
$0 用到了Chrome Console Utilities API
链接在 https://developers.google.com/web/tools/chrome-devtools/console/utilities
