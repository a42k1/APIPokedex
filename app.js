async function fetchData(){

    try{

        const pokemonNome = document.getElementById("pokemonNome").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNome}`);

        if(!response.ok){
            throw new Error("Recurso nao encontrado");
        }

        const data = await response.json();
        const pokeName = data.name;
        const pokeSkill = data.abilities[0].ability.name;
        const pokeCry = data.cries.latest;
        const pokemonSprite = data.sprites.front_default;
        const audio = document.getElementById("pokeAudio");
        const skill = document.getElementById("pokeSkill");
        const imgElement = document.getElementById("pokemonSprite");

        skill.innerHTML = `${pokeName} <br>  uses <br> ${pokeSkill}`;
        
        audio.src = pokeCry;
        audio.play();
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        document.getElementById("pokemonNome").value = "";
    }
    catch(error){
        console.error(error);
    }
}