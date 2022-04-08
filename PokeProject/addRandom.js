import {Pokemon as Poke} from './classes.js'
import {fillPokemonCard, GetPokemonByNameOrId, count} from './const.js';

const btn = document.querySelector('#add');
btn.addEventListener('click', async (event)=>{
    const randomId = Math.floor(Math.random()*100)
    try {
        const pokemon = await GetPokemonByNameOrId(randomId);
        fillPokemonCard(pokemon);
         //записываем с локальное хранилище ключ с именем покема и значением объекта покемон
        //localStorage.setItem(count(), JSON.stringify(pokemon))
        localStorage.setItem(pokemon.name, JSON.stringify(pokemon))
    }
    catch (error) {
        alert (error.message)
    }
////////////////////////////////////
/// прямой код
    // fetch(`https://pokeapi.co/api/v2/pokemon/6${randomId}`)
    // .then((response) => response.json())
    // .then((result) => {
    //     const {
    //         name, 
    //         base_experience: experience,
    //         abilities: rawAbilities, 
    //         sprites: {front_default: image}
    //     } = result;
    //      //console.log(result);

    //      const serializedAbilities = rawAbilities.map((el) => {
    //          const {
    //              ability: {name},
    //          } = el;
    //          return name;
    //     });
    //      //console.log(result);
    //      const pokemon = new Poke (name, serializedAbilities, experience, image )
    //     fillPokemonCard(pokemon) 
    //  });
   
});



