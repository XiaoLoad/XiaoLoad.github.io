// 动态标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        // 离开当前页面时标签显示内容
        document.title = "w(ﾟДﾟ)w 不要走！再看看嘛！";
        clearTimeout(titleTime);
    }
    else {
        // 返回当前页面时标签显示内容
        document.title = '♪(^∇^*)欢迎回来！' + OriginTitle;
        // 两秒后变回正常标题
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});