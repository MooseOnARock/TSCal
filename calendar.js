jQuery(document).ready(function(){
	var curDate = new Date();
	displayDays(curDate.getMonth());
});
function displayDays(curMonth){
	var calendar = jQuery('#calendar');
	var days = calendar.find('.day');
	var curDate = new Date();
	jQuery('#calHead').text(window.months[curMonth]);
	curDate.setMonth(curMonth,1);
	for(var i = curDate.getDay(); curDate.getMonth() == curMonth; i++){
		days.eq(i).text(curDate.getDate());
		curDate.setDate(curDate.getDate()+1);
	}
}
window.months = ['January', 'Feburary', 'March', 'April'];
