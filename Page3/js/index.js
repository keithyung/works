
$(function() {

	if(location.href.indexOf('127.0.0.1')!=-1){
		var script=document.createElement("script");
		script.type="text/javascript";
		if(script.readyState){//IE
			script.onreadystatechange=function(){
		        console.log('livereload.js leaded.');
			};
		}else{//Others
			script.onload=function(){
		        console.log('livereload.js leaded.');
			};
		}
		script.src='/vendor/livereload.js?_'+new Date().getTime();
		document.getElementsByTagName("head")[0].appendChild(script);
	}
	
});


console.log('%c带有样式的文字','color:#fff;background-color:orange;');

console.table([[1,2,3],[4,5,6]]);

console.assert(!true, 'This is not true');

console.time('timeLabel');

console.timeEnd('timeLabel');

