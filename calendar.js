jQuery(document).ready(function(){
	var calendar = jQuery('#calendar');
	var days = calendar.find('.day');
	var curDate = new Date();
	var curMonth = curDate.getMonth();
	curDate.setMonth(curMonth,1);
	console.log(curDate);
	for(var i = curDate.getDay(); curDate.getMonth() == curMonth; i++){
		days.eq(i).text(curDate.getDate());
		curDate.setDate(curDate.getDate()+1);
	}
});
window.months = ['January', 'Feburary', 'March', 'April'];
