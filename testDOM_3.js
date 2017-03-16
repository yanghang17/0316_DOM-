/*0.获取需要的节点与节点值，创建需要的dl.dt.dd元素节点，追加节点:dt=文本节点，dd=属性title节点
追加到DOM树种。done...
1.拿到abbr元素（addrs=document.getElementsByTagName("abbr");//是一个数组
1.1 for (var i = 0; i < addrs.length; i++) {
	title=addrs[i].getAttribute(title);
	txt=addrs[i].lastChild.nodeValue;
};
2.获取addr中的属性节点title（title=addr[i].getAttribute);//遍历时[i]获取
3.获取文本节点(txt=addr[i].lastChild.nodeValue);//addr里面最后也是第一个子元素只有文本节点。
4.1.创建一个<dl>元素，newdl=createElement("dl");//用一个声明变量接住。
4.2.（创建一个<dt>元素，文本小标题），newdt=createElement("dt");
4.3.（创建一个<dt>元素，文本内容），newdd=createElement("dd");
5.  插入dt,dt.insertBefore(txt) 遍历title和txt 插入dd,dd.insertBefore(title);
6.把dt追加到dl中，把dd追求到dl中
7.把dl追加到body中;
*/
/*
window.onload = function() {
	display9();
	displayblock();
	displayacc();
}
*/
addLoadEvent(display9);
 function display9() {
 	//标签名别写错
	abbreviations = document.getElementsByTagName("abbr");
	var defs = new Array();
	for (var i = 0; i < abbreviations.length; i++) {
		var current_abbr = abbreviations[i];
		//获取属性title节点
		var definition = abbreviations[i].getAttribute("title");
		//获取文本节点
		var key = current_abbr.lastChild.nodeValue;
		//给defs数组值与键；
		//下标就是每个文本节点，下标所对应的的是值是title
		defs[key] = definition;
	};
	var newdl = document.createElement("dl");
	for (key in defs) {
		//获取到每个所对应下标key下的值
		var definition = defs[key];
		//创建dt元素节点
		var dtitle = document.createElement("dt");
		var txt = document.createTextNode(key);
		dtitle.appendChild(txt);
        //创建dd元素节点
		var ddesc = document.createElement("dd");	
		var ddesc_text = document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		newdl.appendChild(dtitle);
		newdl.appendChild(ddesc);
	};
	//abbr元素le7以前浏览器不支持，会返回一个错误值零，不再执行后续代码
	if (newdl.childNodes.length < 1) {return false};
	var newh2 = document.createElement("h2");
	var txth2 = document.createTextNode("介绍");
	newh2.appendChild(txth2);
	document.body.appendChild(newh2);
	document.body.appendChild(newdl);
}
