

//Write Code for Task One below this line!
//1. Create two arrays with two image links to TV show recommendations for each type: comedy, action, drama. Use doc in task one.
	let comedy = ["https://img.hulu.com/user/v3/artwork/a46bf587-e14c-4875-af83-731455537128?base_image_bucket_name=image_manager&base_image=97ca23cc-f1e6-4e6d-af76-7d62c57301ca&size=550x825&format=jpeg", "https://observer.com/wp-content/uploads/sites/2/2020/05/long-running-comedy-shows.jpg?quality=80","https://cdn.mos.cms.futurecdn.net/JPHcAdsZJfxw8yrGJ59Tjn.jpg"];
	 let action =["https://smoda.elpais.com/wp-content/uploads/2020/06/bob-esponja.jpg", "https://cfm.yidio.com/images/tv/27847/backdrop-640x360.jpg","https://images-na.ssl-images-amazon.com/images/I/810O9vmLTsL.jpg"];
  let drama =["https://m.media-amazon.com/images/M/MV5BMDk1YzQ4ZTAtNmI2OC00ODE2LWIyNWUtMjM2Y2MxYzRkNmQzXkEyXkFqcGdeQXVyMzQxNzU3NA@@._V1_FMjpg_UX1000_.jpg", "https://m.media-amazon.com/images/I/51N5hUjbjsL._SY445_.jpg","https://images.justwatch.com/poster/11815512/s332"];

$(".submit-button").click(function(){
    let genreInput=$(".get-suggestions").val();
     $(".shows").empty();
//Write code for Task Two below this line!
//2. Write an if-else if statements so the computer will show certain images when the user types in certain genre.
    if(genreInput==="comedy"){
     for(let show of comedy){
    $(".shows").append("<img src="+show+">");
    }
	}
    else if(genreInput==="action"){
    for (let show of "action"){
    $(".shows").append("<img src="+ show+">");
    }
    }
   else if(genreInput==="drama"){
    for (let show of drama){
    $(".shows").append("<img src="+ show+">");
    }
    }
});

$(".suggestion-button").click(function(){
    let suggestion=$(".give-suggestions").val();
    $(".shows").text("Thanks for your suggestion! Check the console to see that it was added!");
//Write code for Task Three below this line!
//3. Write a code using .push to allow the user to make TV show suggestions.
	comedy.push(suggestion);
     console.log(comedy);
    action.push(suggestion);
    console.log(action);
    drama.push(suggestion);
    console.log(drama);

    
});