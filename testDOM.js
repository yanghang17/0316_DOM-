/*
1.获取所有a元素的标签
2.创建一个new Array()
3.遍历所有a元素，获取到他的NodeValue和key:getAttribute属性值
4.放进新数组里
5.创建一个ul和li，把li追加到ul上
6.li里面创建文本节点(key+":"+NodeValue);
7.创建一个h3标签元素；
8.创建一个文本节点，并把她追加到h3标签元素上。
9.把h3追加到body上
10.把ul追加嗷body上
*/
addLoadEvent(displayacc);
function displayacc() {
	var newa = document.getElementsByTagName("a");
	var arr = new Array();
	for (var i = 0; i < newa.length; i++) {
		var current_link = newa[i];
		//console.log(newa[i]);
		//获取属性值
		var key = current_link.getAttribute("accesskey");
		//console.log(key);
		//获取NodeValue
		var att = current_link.lastChild.nodeValue;
		//console.log(att);
		//装进数组里(下标是key，值是nodeValue)；
		arr[key] = att;
	};
	//必须在外面声明创建一个ul元素，不然在for循环里for结束，只能取到最后一个值；
	var newul = document.createElement("ul");
	for (key in arr) {
		//console.log(arr[key] = att);
		//取得所有NodeValue
		att = arr[key];
		var str = key+":"+att;
		//console.log(str);
		var newli = document.createElement("li");
		//创建一个文本节点
		var li_text = document.createTextNode(str);
		newli.appendChild(li_text);
		//console.log(newli);
		newul.appendChild(newli);
	};
   	 	var newh3 = document.createElement("h3");
		var newh3_text = document.createTextNode("Accrsskye");
		newh3.appendChild(newh3_text);
		document.body.appendChild(newh3);  
    	document.body.appendChild(newul); 
}
