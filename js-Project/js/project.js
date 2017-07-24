setInterval(function(){
//	$('#list1 li').eq(rand(0,lis1.length)).addClass('center-animate').siblings().removeClass("center-animate");
//	$('#list2 li').eq(rand(0,lis2.length)).addClass('center-animate').siblings().removeClass("center-animate");
//	$('#list3 li').eq(rand(0,lis3.length)).addClass('center-animate').siblings().removeClass("center-animate");
//	$('#list4 li').eq(rand(0,lis4.length)).addClass('center-animate').siblings().removeClass("center-animate");
	$(".center-lingxing li").eq(rand(0,24)).addClass('center-animate').siblings().removeClass("center-animate");
},1000)
function rand(min,max){
	return parseInt(Math.random()*(max-min+1)+min);
}
$(".center-lingxing li").mouseover(function(){
	$(this).addClass('animated rotateIn').siblings().removeClass("animated rotateIn");
})
