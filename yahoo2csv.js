javascript:(function(){
	function e(e){
		var t="\n";
		var n=",";
		var r='"';
		var i=[r+r,"\\"+r][1];
		var s=false;
		var o=true;
		var u=[];
		$.each(e,function(){
			var e=[];
			$.each(this,function(){
				var t=this;
				var u=s;
				if(t.indexOf(n)>=0)u=true;
				if(t.indexOf(r)>=0){
					u=u||o;
					t=t.replace(r,i)}
					if(u)t=r+t+r;
					e.push(t)
				});
			u.push(e.join(n))
		});
	return u.join(t)}
	function t(t,n){
		var r=[];
		var i=[];
		i.push(["Name","Email"]);
		$(t).each(function(){
			$(this).children(n).each(function(){
				var e=$(this);
				var t={};
				t.name=$.trim(e.find("div > span > b").text()).replace(/ +(?= )/g,'');
				t.email=$.trim(e.find("div > .c").text());
				r.push(t);
				i.push([t.name,t.email])
			})
		});
		i=e(i);
		$("<textarea/>").text(i).css({position:"fixed",width:"80%25",height:"80%25",top:"10%25",left:"10%25"}).appendTo("body").focus().select()}function r(){
			var e=window.jQuery;
			if(!e){setTimeout(r,100);
				return}
			e(function(){t(".trow",".tcell")})}
			var n=document.createElement("script");
			n.setAttribute("src","https://code.jquery.com/jquery.min.js");
			n.setAttribute("type","text/javascript");
			document.getElementsByTagName("body")[0].appendChild(n);
			r()})()