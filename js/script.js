
$( document ).ready(function() {

	var $dogImgHolder = $('#dog-img-container');
	var dogs = [{name: 'Bunty', img_url:'images/bunty.jpg'}, {name: 'Mark', img_url:'images/mark.jpg'}];
	
	for (var i = 0; i < dogs.length; i++) {
		var dogImg = '<div class="col-sm-6"><label id="dog-name">'+dogs[i].name+'</label><img class="text-center img-clicker" id="img-clicker" src="'+dogs[i].img_url+'" width="500"></div>'
		$dogImgHolder.append(dogImg);
		console.log(dogImg);
	}
	
	var $imgClicker = $('.img-clicker');
	var $count = $('#count');



	$imgClicker.on('click', function(){
		var count = parseInt($count.text());
		$count.text('');
		count++;
		$count.text(count);
	});

	

});