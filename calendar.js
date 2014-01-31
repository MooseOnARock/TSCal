jQuery(document).ready(function(){
	var curDate = new Date();
	displayDays(curDate.getMonth());
	console.log(jQuery('img .right'));
	jQuery('img .right').click(function(){
		alert('hello');
		window.curMonth++;
		displayDays(window.curMonth);
	});
});
function displayDays(curMonth){
	var calendar = jQuery('#calendar');
	var days = calendar.find('.day');
	var curDate = new Date();
	jQuery('#month').text(window.months[curMonth]);
	curDate.setMonth(curMonth,1);
	for(var i = curDate.getDay(); curDate.getMonth() == curMonth; i++){
		days.eq(i).text(curDate.getDate());
		curDate.setDate(curDate.getDate()+1);
	}
}
window.curMonth = new Date().getMonth();
window.months = ['January', 'Feburary', 'March', 'April'];
