var http = require("http");
function download(url,callback){
	http.get(url,function(res){
		var data="";
		res.on('data',function(){
			data += chunk;
		});
		res.on("end",function(){
			callback(data);
		})
	}).on("error",fucntion(){
		callback(null);
	})
}
exports.download = download;