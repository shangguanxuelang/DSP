var list1=document.getElementById('list1');
var list2=document.getElementById('list2');
var list3=document.getElementById('list3');
var list4=document.getElementById('list4');

var lis1=list1.getElementsByTagName('li');
var lis2=list2.getElementsByTagName('li');
var lis3=list3.getElementsByTagName('li');
var lis4=list4.getElementsByTagName('li');

$(".cn img").hide();
$(window).bind("scroll", function(){
    var top = $(this).scrollTop(); // 当前窗口的滚动距离
    if(top>300&&top<700){
       $('.cn img').show();
//     $('.cn img').addClass('animated bounceInLeft')
       $(".cn img").eq(0).addClass('animated bounceInDown');
       $('.cn img').eq(1).addClass('animated bounceInLeft');
       $('.cn img').eq(3).addClass('animated bounceInLeft');
       $('.cn img').eq(2).addClass('animated bounceInRight');
       $('.cn img').eq(4).addClass('animated bounceInRight');
       $('.cn img').eq(5).addClass('animated bounceInUp');
//     $('.cn img').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', doSomething);
       setTimeout(function(){
//  		$(".cn img").removeClass('bounceInLeft');
    		$(".cn img").eq(0).removeClass('bounceInDown');
	        $('.cn img').eq(1).removeClass('bounceInLeft');
	        $('.cn img').eq(3).removeClass('bounceInLeft');
	        $('.cn img').eq(2).removeClass('bounceInRight');
	        $('.cn img').eq(4).removeClass('bounceInRight');
	        $('.cn img').eq(5).removeClass('bounceInUp');
    	},3000)
    }
    if(top>900&&top<1500){
    	$('.centerbox img').eq(0).css({
    		left: 895,
			top: -130,
    	})
    	$('.centerbox img').eq(1).css({
    		left: 592,
			top: -50,
    	})
    	$('.centerbox img').eq(2).css({
    		left: 1192,
			top: -50,
    	})
    	$('.centerbox img').eq(3).css({
    		left: 485,
			top: 74,
    	})
    	$('.centerbox img').eq(4).css({
    		left:1300,
			top: 74,
    	})
    	$('.centerbox img').eq(5).css({
    		left: 592,
			top: 190,
    	})
    	$('.centerbox img').eq(6).css({
    		left: 1200,
			top: 190,
    	})
    }
    if(top<900&&top>1500){
    	$('.centerbox img').css({
    		left: 896,
			top: 84,
    	})
    }
    if(top>3500&&top<5000){
    	// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        option = {
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    series : [
		        {
		            name: '访问来源',
		            type: 'pie',
		            radius : '75%',
		            center: ['50%', '50%'],
		            data:[
		                {value:18, name:'视频'},
		                {value:8, name:'文学'},
		                {value:8, name:'生活服务'},
		                {value:7, name:'财经'},
		                {value:6, name:'女性'},
		                {value:5, name:'教育学习'},
		                {value:5, name:'娱乐'},
		                {value:4, name:'新闻'},
		                {value:4, name:'综合门户'},
		                {value:3, name:'军事'},
		                {value:3, name:'旅游'},
		                {value:3, name:'IT手机'},
		                {value:3, name:'汽车'},
		                {value:3, name:'购物'},
		                {value:3, name:'亲子'},
		                {value:3, name:'饮食'},
		                {value:3, name:'房产'},
		                {value:3, name:'时尚'},
		                {value:2.5, name:'期刊杂志'},
		                {value:1.5, name:'彩票'},
		                {value:2.5, name:'纠错页面'},
		                {value:1.5, name:'B2B'},
		                {value:3, name:'搜索引擎'}
		            ],
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ]
		};
// 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
});

setInterval(function(){
//	$('#list1 li').eq(rand(0,lis1.length)).addClass('center-animate').siblings().removeClass("center-animate");
//	$('#list2 li').eq(rand(0,lis2.length)).addClass('center-animate').siblings().removeClass("center-animate");
//	$('#list3 li').eq(rand(0,lis3.length)).addClass('center-animate').siblings().removeClass("center-animate");
//	$('#list4 li').eq(rand(0,lis4.length)).addClass('center-animate').siblings().removeClass("center-animate");
	$(".center-right li").eq(rand(0,17)).addClass('center-animate').siblings().removeClass("center-animate");
},1000)
function rand(min,max){
	return parseInt(Math.random()*(max-min+1)+min);
}
