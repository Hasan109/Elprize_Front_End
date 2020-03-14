

$(document).ready(function () {
	// Flash functions


	// Snap functions
	$('#button-3').on('click', function () {
		$(this).addClass('shrink-button')
	})
})

let videoContent = document.getElementById("videoContent");

let videoicon = document.getElementById("videoicon");

videoicon.addEventListener("click", function () {

	videoContent.style.display = "block";
})



let btn3 = document.getElementById("button-3");

let videos = document.querySelector(".videos");

let mp = document.getElementById("viedoport");

let videosa = document.getElementById("videoContent").getAttribute("data-hasprice");

let reklamSection = document.getElementById("advertisement");


// btn3.addEventListener("click", function(){

// 	setTimeout(function()
// 		{ 
// 			reklamSection.style.height = '600px'; 

// 	}, 1000);


// 	setTimeout(function()
// 		{ 
// 			mp.style.display = 'block'; 

// 	}, 1000);


// 	setTimeout(function()
// 		{ 
// 			btn3.style.display = 'none'; 
// 	}, 2000);	
// })	


videoicon.addEventListener("click", function () {

	setTimeout(function () {
		videoContent.style.display = 'block';

	}, 1000);


	// setTimeout(function()
	// 	{ 
	// 		videoicon.style.display = 'none'; 

	// }, 1000);

})


// COIN RAIN
const coins = document.querySelector("#coins-rain")
const innerX = window.innerWidth
const innerY = window.innerHeight
coins.style.width = innerX+'px'
coins.style.height = innerY+'px'
coins.style.display = 'none';
document.querySelector('style').innerHTML += `
@keyframes fall{
    to{
        top:${innerY * 3}px;
    }
}`

const random = (min, max) => {
	var randomNum;
	do {
		randomNum = Math.floor(Math.random() * 10000)
	} while (randomNum > max || randomNum < min)

	return randomNum
}
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
class Coin {
	placeX;
	placeY;
	id;
	constructor(id) {
		this.placeX = random(0, innerX)
		this.placeY = random(0, innerY) * -1
		this.id = "coins-fx-coin-" + id
	}
	addToCoins() {
		document.querySelector("#coins-rain").innerHTML += `<img id="${this.id}" src="./assets/images/coin.png" style="top:${this.placeY}px;left:${this.placeX}px;">`
	}
}
const fallCoins = (n) => {
	var coinsArr = []
	for (var i = 0; i < n; i++) {
		coinsArr.push(new Coin(i))
	}
	var k = 0
	var id = setInterval(falling, 100)
	function falling() {
		if (k == n) {
			clearInterval(id)
		}
		for (var i = k; i < n / 5; i++) {
			coinsArr[i].addToCoins()
			console.log(k)
		}
		k += n / 5
		console.log()
	}
}
//COIN RAIN END

function Videoss() {

	let has_price = videosa;
	if (has_price == 'true') {
		//Coins falling
		coins.style.display = 'block';
		swal({
			title: "Təbriklər",
			text: "Siz qazandınız!",
			icon: "success",
			button: "Ok",
		});
		fallCoins(500);
		setTimeout(() => {
			coins.style.display = 'none';
		}, 3500)
		//
		videoContent.style.display = 'none';
	} else {
		// videoicon.style.display = 'block' ;
		videoContent.style.display = 'none';
		$('#button-3').addClass('shrinkreverse');
		$('#button-3').removeClass('shrink-button')
	}
}




