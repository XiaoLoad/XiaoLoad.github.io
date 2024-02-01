function calculateRuntime() {
    var startDate = new Date("11/21/2022 00:00:00");
    var currentDate = new Date();

    var timeDiff = currentDate.getTime() - startDate.getTime();
    var secondsDiff = Math.floor(timeDiff / 1000);

    var days = Math.floor(secondsDiff / (3600 * 24));
    var hours = Math.floor((secondsDiff % (3600 * 24)) / 3600);
    var minutes = Math.floor((secondsDiff % 3600) / 60);
    var seconds = secondsDiff % 60;

    var isWorkingTime = hours >= 9 && hours < 18;
    var status = isWorkingTime ? "营业中" : "打烊休息啦";
    var statusBadge = `<img class='boardsign' src='https://img.shields.io/badge/石头小屋-${status}-6adea8?style=social&logo=${isWorkingTime ? "cakephp" : "coffeescript"}' title='${isWorkingTime ? "距离变聪明还需要一段时间嘞" : "放学了就该开开心心的玩耍，嘿嘿~"}'>`;

    var runtimeText = `<span class='textTip'><br><b>本站居然运行了 ${days} 天</span><span id='runtime'> ${hours} 小时 ${minutes} 分 ${seconds} 秒 </b></span>`;

    var workboardElement = document.getElementById("workboard");
    if (workboardElement) {
        workboardElement.innerHTML = statusBadge + runtimeText;
    }
}

setInterval(calculateRuntime, 1000);
