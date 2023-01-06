function heroSearch(){
    let heroName=document.getElementById('hero').value;
fetch("https://hp-api.onrender.com/api/characters")
.then(response => response.json())
.then(heroes => {
    for(let hero of heroes){
        if (heroName == hero.name){
            console.log(hero);
        }
    }
    console.log(heroes);
})
.catch(err => console.log(err));
}
