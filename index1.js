var http = require("http");
var cheerio =require('cheerio');

function download(url,callback){
	http.get(url,function(res){
		var data = "";
		res.on('data',function(chunk){
			data += chunk;
		});
		res.on("end",function(){
			callback(data);
		});
	}).on("error",function(){
		callback(null);
	});
}
var baseUrl = 'http://www.quanjing.com';
download(baseUrl,function(data){
	if(data){
		var $ = cheerio.load(data);
		$(".tabCon img").each(function(i,e){
			//console.log($(e).attr("src")) ;打印出来的是相对地址
			var fileUrl = null ;
			if($(e).attr("src").indexOf("/")===0){
				fileUrl = baseUrl + $(e).attr("src");
			}else{
				fileUrl = baseUrl + "/" + $(e).attr("src");
			}
			console.log(fileUrl);
		});
		console.log("done")
	}
})