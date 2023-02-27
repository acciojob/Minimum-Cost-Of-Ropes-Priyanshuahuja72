//your code here
var result = document.getElementById("result");
function mcr(event)
{
	event.preventDefault();
	var inputele = document.querySelector('input').value;
	var arr = inputele.split(',');
	arr.sort(function(a , b){return a-b});
	var cost = 0;
	while(arr.length > 1)
	{
		var res = Number(arr[0]) + Number(arr[1]);
		arr.splice(0 , 2);
		arr.push(res);
		cost += res;
		arr.sort(function(a , b){return a-b});
	}
	result.textContent = cost;
}