# 组件化基础

- 对象
        - Properties
        - Methods
        - Inherit
- 组件
        - Properties
        - Methods
        - Inherit
        - Attribute
        - Config & State
        - Event
        - Lifecycle
        - Children

- Attribute vs Property
    - Attribute 强调属性
    - Property 强调从属关系
    
    - 第一种类型区别 实际一样 名字不同
        - case 1
            ```Javascript
                // Attribute:
                <my-component attribute="v" />
                myComponent.getAttribute("a");
                myComponent.setAttribute("a", "value");

                // Property
                myComponent.a = "value";
            ```
        - case2
            ```HTML
                <div class="cls1 cls2"></div>
                <script>
                    var div = document.getElementByTagName('div');

                    div.className; // cls1 cls2
                </script>
            ```
    - 第二种区别 语义相通 调用方式不一样
        - case1
            ```Javascript
                var div = document.getElementByTagName('div');
                div.style // 对象
            ```
    - 其他
        - case1
            ```HTML
                <a href="//m.taobao.com"></a>
                <script>
                    var a = document.getElementsByTagName('a');

                    a.href // "http://m.taobao.com" 这个url是resolve过的结果

                    a.getAttribute('href'); // m.taobao.com 跟html代码中完全一致m.
                </script>
            ```
        - case2
            ```HTML
                <input value="cute"></input>
                <script>
                    var input = document.getElementsByTagname("input")[0]; // 若property没有设置，则结果是Attribute

                    input.value // cute

                    input.getAttribute("value") // cute

                    input.value = "hello"; // 若value属性已经设置 则attribute不变，property变化 元素实际上的效果是property优先
                    input.value // hello
                    input.getAttribute("value") // cute
                </script>
            ```

- 如何设置组件状态
    |  Markup set   | JS set  | JS Change |  user Input Change | item
    |  ----  | ----  | ----  | ----  | ----  | ----  
    | false  | true | true | ? | property
    | true  | true | true | ? | attribute
    | false | false | flase | true | state
    | false | true | flase | flase | config


- Lifecycle

- Children
    - Content型children
        ```JSX   
            <my-button>
                <img src="{{icon}}">{{title}}</img>
            </my-button>
        ```
    - Template型children
        ```JSX
            <my-list data>
                <li>
                    <img src="{{icon}}">{{title}}</img>
                </li>
            </my-list>
        ```