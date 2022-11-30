function countDown(){
var start = new Date();  //开始时间
var end = new Date('2023/1/1,00:00:00');//结束时间，可以设置时间
//parseInt()取整
var result = parseInt((end.getTime()-start.getTime())/1000);//计算出豪秒
var d = parseInt(result/(24*60*60));//用总共的秒数除以1天的秒数
var h = parseInt(result/(60*60)%24);//精确小时，用去余
var m = parseInt(result/60%60);//剩余分钟就是用1小时等于60分钟进行趣余
var s = parseInt(result%60);
document.querySelector('.box_time').innerHTML = '距离新年还有'+ '<br>'+d+' 天 '+h+' 小时 '+m+' 分 '+s+' 秒 ';
setTimeout(countDown,500);
//当倒计时结束时，改变内容
if(result<=0){
    document.querySelector('.box_time').innerHTML = '新年快乐'
}
}

countDown()
