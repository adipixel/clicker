var $imgClicker = $('#img-clicker');
var $count = $('#count');
$imgClicker.on('click', function(){
	var count = parseInt($count.text());
	$count.text('');
	count++;
	$count.text(count);
});