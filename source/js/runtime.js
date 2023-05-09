var now = new Date;

function createtime() {
	now.setTime(now.getTime() + 1e3);
	var e = new Date("11/21/2022 00:00:00"),
		t = Math.trunc(234e8 + (now - e) / 1e3 * 17),
		a = (t / 1496e5).toFixed(6),
		n = new Date("11/21/2022 00:00:00"),
		s = (now - n) / 1e3 / 60 / 60 / 24,
		o = Math.floor(s),
		r = (now - n) / 1e3 / 60 / 60 - 24 * o,
		i = Math.floor(r);
	1 == String(i).length && (i = "0" + i);
	var l = (now - n) / 1e3 / 60 - 1440 * o - 60 * i,
		b = Math.floor(l);
	1 == String(b).length && (b = "0" + b);
	var d = (now - n) / 1e3 - 86400 * o - 3600 * i - 60 * b,
		c = Math.round(d);
	1 == String(c).length && (c = "0" + c);
	let g = "";
	g = i < 18 && i >= 9 ?
		`<img class='boardsign' src='https://img.shields.io/badge/石头小屋-下课摸鱼中-6adea8?style=social&logo=cakephp' title='距离发财还需要一段时间嘞'><span class='textTip'> <br> <b>本站居然运行了 ${o} 天</span><span id='runtime'> ${i} 小时 ${b} 分 ${c} 秒 </b></span>  ` :
		`<img class='boardsign' src='https://img.shields.io/badge/石头小屋-打烊休息啦-6adea8?style=social&logo=coffeescript' title='放学了就该开开心心的玩耍，嘿嘿~'><span class='textTip'> <br> <b>本站居然运行了 ${o} 天</span><span id='runtime'> ${i} 小时 ${b} 分 ${c} 秒 </b></span>  `,
		document.getElementById("workboard") && (document.getElementById("workboard").innerHTML = g)
}
setInterval((() => {
	createtime()
}), 1e3);
