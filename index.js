//要抓取的页面
//<a class="downbtn" href="http://mov.bn.netease.com/mobilev/2013/1/F/G/S8KTEF7FG.mp4" id="M8KTEKR84" target="_blank"></a>
// 取到href属性
// $("a.downbtn").attr("href");

var cheerio = require('cheerio');
//加载一个html
var $ = cheerio.load('<h2 class="title">Hello World</h2>')
$('h2.title').text('hello ervery one !');
$('h2').addClass('welcome');
console.log($.html());  //<h2 class="title welcome">hello ervery one !</h2>