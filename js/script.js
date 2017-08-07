
$( document ).ready(function() {

	var $dogImgHolder = $('#dog-img-container');
	var dogs = [{name: 'Bunty', img_url:'images/bunty.jpg', count:0}, {name: 'Mark', img_url:'images/mark.jpg', count:0}];
	
	for (var i = 0; i < dogs.length; i++) {
		var $list_item = $('<li class="dog_li">'+dogs[i].name+'</li>');
		$('#dog-list').append($list_item);

		$list_item.on('click',(function(i){
			return function(){
				$dogImgHolder.text('');
				var $dogclicker = $('<div class="col-sm-6"></div>');
				var $counter = $('<label class="counter" id="counter'+i+'">'+dogs[i].count+'</label>');
				var dogImg = '<label id="dog-name">'+dogs[i].name+'</label><img class="text-center img-clicker" id="img-clicker" src="'+dogs[i].img_url+'" width="500">'
				

				$dogclicker.on('click',(function(i){
					return function(){
						dogs[i].count++;
						$('#counter'+i+'').text(dogs[i].count);
					}
				})(i));

				$dogclicker.append($counter);
				$dogclicker.append(dogImg);
				$dogImgHolder.append($dogclicker);


			}
		})(i));

	}



/*
	for (var i = 0; i < dogs.length; i++) {

		var $dogclicker = $('<div class="col-sm-6"></div>');
		var $counter = $('<label class="counter" id="counter'+i+'">'+dogs[i].count+'</label>');
		var dogImg = '<label id="dog-name">'+dogs[i].name+'</label><img class="text-center img-clicker" id="img-clicker" src="'+dogs[i].img_url+'" width="500">'
		

		$dogclicker.on('click',(function(i){
			return function(){
				dogs[i].count++;
				$('#counter'+i+'').text(dogs[i].count);
			}
		})(i));

		$dogclicker.append($counter);
		$dogclicker.append(dogImg);
		$dogImgHolder.append($dogclicker);

	}
	*/


	

});