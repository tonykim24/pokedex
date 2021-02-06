let a = null;
let sitename = null;
let moveTypes = null;
let response = async (apiurl) => {
    var rng =  Math.floor(Math.random() * (807 - 1 + 1)) + 1;
    sitename = "https://pokeapi.co/api/v2/pokemon/" + rng;
    await fetch(apiurl).then(
        function(response){
            return response.json();
        }
    ).then(
        function(response){
            a = response;
        }
    )
    document.getElementsByClassName("number").innerHTML = "No. " + rng;
}
response();
function myFunction(e) {
    //document.getElementById("demo").innerHTML = "Hello World";
    /*
    console.log(a);
    console.log(a.moves);*/
    var rng =  Math.floor(Math.random() * (807 - 1 + 1)) + 1;
    response("https://pokeapi.co/api/v2/pokemon/" + rng);
    console.log(sitename);
    for (let i = 0; i < 4; i++){
        document.getElementsByClassName("move")[i].innerHTML = a.moves[i].move.name;
        moveTypes = a.moves[i].move.url;
        console.log(moveTypes);
        /*await fetch(moveTypes).then(
            function(movetype){
                console.log(movetype);
            }
        ).then(
            function(response){
                console.log(type.name);
            }
        )*/ 
    }
    console.log(document.getElementsByClassName("name"));
    document.getElementsByClassName("name")[0].innerHTML = a.species.name;
    document.getElementsByClassName("type")[0].innerHTML = a.types[0].type.name;
    if (a.types.length > 1){
        document.getElementsByClassName("type")[1].innerHTML = a.types[1].type.name;
    }
    document.getElementsByClassName("number")[0].innerHTML = "No. " + a.id;
    document.getElementById("sprite").src = a.sprites.front_default;
  }