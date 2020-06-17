# HTML

### DOM

* 伪元素不在 dom 树上，伪元素出现在 computeCSS 阶段
* Events
  * EventTarget.addEventListener('事件名', 方法, 是否捕获)，事件是先捕获才冒泡的。父捕获 > 子捕获 > target > 子冒泡 > 父冒泡

    例如 document.body.addEventListener('click', function(){ console.log('clicked'), false }) // 冒泡

    document.body.addEventListener('click', function(){ console.log('clicked'),  true }) // 捕获
* 移动dom节点操作

    ```

    ```

### CSS property

使用 getComputedStyle提取document.body 的css属性
```
let styles = Array.from(getComputedStyle(document.body))
let properties = []
styles.forEach(p => {
  if (!p.startWidth("-webkit"))
    properties.push(p);
})

// ret
/*
[
    animation-delay
    animation-direction
    animation-duration
    animation-fill-mode
    animation-iteration-count
    animation-name
    animation-play-state
    animation-timing-function
    background-attachment
    background-blend-mode
    background-clip
    background-color
    background-image
    background-origin
    background-position
    background-repeat
    background-size
    border-bottom-color
    border-bottom-left-radius
    border-bottom-right-radius
    border-bottom-style
    border-bottom-width
    border-collapse
    border-image-outset
    border-image-repeat
    border-image-slice
    border-image-source
    border-image-width
    border-left-color
    border-left-style
    border-left-width
    border-right-color
    border-right-style
    border-right-width
    border-top-color
    border-top-left-radius
    border-top-right-radius
    border-top-style
    border-top-width
    bottom
    box-shadow
    box-sizing
    break-after
    break-before
    break-inside
    caption-side
    clear
    clip
    color
    content
    cursor
    direction
    display
    empty-cells
    float
    font-family
    font-kerning
    font-optical-sizing
    font-size
    font-stretch
    font-style
    font-variant
    font-variant-ligatures
    font-variant-caps
    font-variant-numeric
    font-variant-east-asian
    font-weight
    height
    image-orientation
    image-rendering
    isolation
    justify-items
    justify-self
    left
    letter-spacing
    line-height
    list-style-image
    list-style-position
    list-style-type
    margin-bottom
    margin-left
    margin-right
    margin-top
    max-height
    max-width
    min-height
    min-width
    mix-blend-mode
    object-fit
    object-position
    offset-distance
    offset-path
    offset-rotate
    opacity
    orphans
    outline-color
    outline-offset
    outline-style
    outline-width
    overflow-anchor
    overflow-wrap
    overflow-x
    overflow-y
    padding-bottom
    padding-left
    padding-right
    padding-top
    pointer-events
    position
    resize
    right
    scroll-behavior
    speak
    table-layout
    tab-size
    text-align
    text-align-last
    text-decoration
    text-decoration-line
    text-decoration-style
    text-decoration-color
    text-decoration-skip-ink
    text-underline-position
    text-indent
    text-rendering
    text-shadow
    text-size-adjust
    text-overflow
    text-transform
    top
    touch-action
    transition-delay
    transition-duration
    transition-property
    transition-timing-function
    unicode-bidi
    vertical-align
    visibility
    white-space
    widows
    width
    will-change
    word-break
    word-spacing
    z-index
    zoom
    backface-visibility
    column-count
    column-gap
    column-rule-color
    column-rule-style
    column-rule-width
    column-span
    column-width
    backdrop-filter
    align-content
    align-items
    align-self
    flex-basis
    flex-grow
    flex-shrink
    flex-direction
    flex-wrap
    justify-content
    grid-auto-columns
    grid-auto-flow
    grid-auto-rows
    grid-column-end
    grid-column-start
    grid-template-areas
    grid-template-columns
    grid-template-rows
    grid-row-end
    grid-row-start
    row-gap
    hyphens
    order
    perspective
    perspective-origin
    shape-outside
    shape-image-threshold
    shape-margin
    transform
    transform-origin
    transform-style
    user-select
    buffered-rendering
    clip-path
    clip-rule
    mask
    filter
    flood-color
    flood-opacity
    lighting-color
    stop-color
    stop-opacity
    color-interpolation
    color-interpolation-filters
    color-rendering
    fill
    fill-opacity
    fill-rule
    marker-end
    marker-mid
    marker-start
    mask-type
    shape-rendering
    stroke
    stroke-dasharray
    stroke-dashoffset
    stroke-linecap
    stroke-linejoin
    stroke-miterlimit
    stroke-opacity
    stroke-width
    alignment-baseline
    baseline-shift
    dominant-baseline
    text-anchor
    writing-mode
    vector-effect
    paint-order
    d
    cx
    cy
    x
    y
    r
    rx
    ry
    caret-color
    line-break"
]
*/
``` JavaScript

参考链接:
  1. https://www.processon.com/view/link/5eccafdd1e08530a9b1f1d3d#map