

$(document).ready(function() {
  // Flash functions

  
  // Snap functions
  $('#button-3').on('click', function() {
    $(this).addClass('shrink-button') 
  })
})

let videoContent = document.getElementById("videoContent");

let videoicon = document.getElementById("videoicon");

videoicon.addEventListener("click", function(){

    videoContent.style.display = "block";
})



let btn3= document.getElementById("button-3");

let videos=document.querySelector(".videos");

let mp=document.getElementById("viedoport");

let videosa= document.getElementById("videoContent").getAttribute("data-hasprice");

let reklamSection= document.getElementById("advertisement");


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


videoicon.addEventListener("click", function(){
	
	setTimeout(function()
		{ 
			videoContent.style.display = 'block'; 

	}, 1000);


	// setTimeout(function()
	// 	{ 
	// 		videoicon.style.display = 'none'; 

	// }, 1000);

})	


function Videoss() {

	let has_price=videosa;
	if (has_price == 'true') {
		swal({
           title: "Təbriklər",
           text: "Siz qazandınız!",
           icon: "success",
           button: "Ok",
      });
		videoContent.style.display = 'none';
	}else {
		// videoicon.style.display = 'block' ;
		videoContent.style.display = 'none';
		 $('#button-3').addClass('shrinkreverse');
		 $('#button-3').removeClass('shrink-button')
	}
}
	



