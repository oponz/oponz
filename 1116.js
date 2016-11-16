function d31116()

{




var width = 1024;
var height = 768;
var ctrl = d3.select(".footer").append("svg").attr("width", width).attr("height", height);
d3.csv("https://oponz.github.io/oponz/test222.csv", 
	function(data)
	{
		var ln = data.length;
		console.log(data);
		var maxy = d3.max(data, function(d){ return d.VALUE; });
		var lines = d3.line().x(function(d,i){return i*(width/ln);}).y(function(d){return height-(maxy-d.VALUE)*300});
		ctrl.append("path").data([data]).attr("d", lines).attr("stroke", "red").attr("fill", "none");
	}

);
}
