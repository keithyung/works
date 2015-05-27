
$(function() {

	if(location.href.indexOf('127.0.0.1')!=-1){
		var script=document.createElement("script");
		script.type="text/javascript";
		script.src='/vendor/livereload.js?_'+new Date().getTime();
		document.getElementsByTagName("head")[0].appendChild(script);
	}

});

