function match(element, selector) {

  if (!selector || !element.attributes)
    return false;
  
  let matchRet = selector.match(/#(.*?)>(.*)/);
  if (matchRet) { 
    var parentId = element.parent && element.parent.attributes.filter(attr => attr.name === "id")[0];
    if (parentId && parentId.value === matchRet[1] && element.tagName === matchRet[2])
      return true;
  } else
    if (selector.charAt(0) == "#") {
    var attr = element.attributes.filter(attr => attr.name === "id")[0];
    if (attr && attr.value === selector.replace("#", ''))
      return true;
  } else if (selector.charAt(0) === ".") {
    var attr = element.attributes.filter(attr => attr.name === "class")[0];

    // 处理带空格的 class 属性
    var selectorClassName = selector.replace(".", "")
    if (attr && attr.value && attr.value.split(" ").indexOf(selectorClassName) >= 0)
      return true;
  } else { 
    if (element.tagName === selector)
      return true;
  }
}

module.exports = match;