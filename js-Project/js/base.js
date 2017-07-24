var data=document.getElementById('data');
var left1=document.getElementById('left');
var mylist=document.getElementById('mylist');
var lis=mylist.getElementsByTagName('li');

var date=new Date();
var year=date.getFullYear();
var month=date.getMonth()+1;
var date=date.getDate();
data.innerHTML=" "+year+"年"+month+"月"+date+"号";

document.onmousemove=function(e){
	var e=e||window.event;
	if(e.clientX<102){
		left.style.opacity=1;
	}else{
		left.style.opacity=0;
	}
}
$("#mylist li").mousemove(function(){
	$(this).addClass("active").siblings().removeClass("active");
})


left1.style.height=document.body.scrollHeight+'px';
console.log(left1.style.height);