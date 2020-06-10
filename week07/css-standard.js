var lis = document.getElementById("container").children;

var result = [];

for (let li of lis) {
  if (li.getAttribute('data-tag').match(/css/)) {
    result.push({
      name: li.children[1].innerText,
      url: li.children[1].children[0].href
    })
  }
}

console.log(result);
// 爬取的页面 url: 
// 格式化打印
console.log(JSON.stringify(reuslt, null, "    "))