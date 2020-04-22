### UTF-8

UTF-8（UTF8-bit Unicodve Transformation Format）是一种针对Unicode的可变长度字符编码，也是一种前缀码。
它可以用来表示Unicode标准中的任何字符，且其编码中的第一个字节仍与ASCII兼容，这使得原来处理ASCII字符的软件无须或只须做少部分修改，即可继续使用。因此，它逐渐成为电子邮件、网页及其他存储或发送文字的应用中，优先采用的编码。

参考阮一峰老师的文章 [字符编码笔记：ASCII，Unicode 和 UTF-8](http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html) 中对UTF-8编码的介绍
>UTF-8 是 Unicode 的实现方式之一。
  UTF-8 最大的一个特点，就是它是一种变长的编码方式。它可以使用1~4个字节表示一个符号，根据不同的符号而变化字节长度。
> UTF-8 的编码规则很简单，只有二条：
> 
>  1）对于单字节的符号，字节的第一位设为0，后面7位为这个符号的 Unicode 码。因此对于英语字母，UTF-8 编码和 ASCII 码是相同的。
> 
>  2）对于n字节的符号（n > 1），第一个字节的前n位都设为1，第n + 1位设为0，后面字节的前两位一律设为10。剩下的没有提及的二进制位，全部为这个符号的 Unicode 码。
>

1. 使用浏览器提供的接口 encodeURI/encodeURIComponent, 只支持非英文字符
   ```JavaScript
   function encodeUTF8(str) {
     let uri = encodeURI(str);
     return uri.replace(/%/g,' ').substring(1);
   }
    // encodeUTF8('中')
    // "E4 B8 AD"
   ```
2. 字符串转化为 UTF-8 编码的字节
   ```JavaScript
   function encodeUTF8(str) {
     var back = [];
      var byteSize = 0;
      for (var i = 0; i < str.length; i++) {
          var code = str.charCodeAt(i);
          if (0x00 <= code && code <= 0x7f) {
                byteSize += 1;
                back.push(code);
          } else if (0x80 <= code && code <= 0x7ff) {
                byteSize += 2;
                back.push((192 | (31 & (code >> 6))));
                back.push((128 | (63 & code)))
          } else if ((0x800 <= code && code <= 0xd7ff) 
                  || (0xe000 <= code && code <= 0xffff)) {
                byteSize += 3;
                back.push((224 | (15 & (code >> 12))));
                back.push((128 | (63 & (code >> 6))));
                back.push((128 | (63 & code)))
          }
       }
       for (i = 0; i < back.length; i++) {
            back[i] &= 0xff;
       }
       return back.map(item => item.toString(16).toUpperCase()).join(' ');
   }
   
   ```
### utf8 编码以&#x 开头的原因
形如 &name; &#dddd; &#xhhhh; 的一串字符是 HTML、XML 等 SGML 类语言的转义序列（escape sequence）。它们不是「编码」。以 HTML 为例，这三种转义序列都称作 character reference：第一种是 character entity reference，后接预先定义的 entity 名称，而 entity 声明了自身指代的字符。
后两种是 numeric character reference（NCR），数字取值为目标字符的 Unicode code point；以「&#」开头的后接十进制数字，以「&#x」开头的后接十六进制数字。

链接: https://www.zhihu.com/question/21390312/answer/18091465
