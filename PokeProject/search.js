import { fillPokemonCard, GetPokemonByNameOrId, count } from "./const.js";

import { Pokemon } from "./classes.js";

const form = document.querySelector('.search');

form.addEventListener('submit', async (event)=> {
    event.preventDefault();
    const { pokemonName : {value: pokemonNameValue } } = event.target;
    if (!pokemonNameValue) {
         alert ('Введите имя покемона, пожайлуста')
    } else {
        try {
            const pokemon = await GetPokemonByNameOrId(pokemonNameValue.toLowerCase())
            fillPokemonCard(pokemon);
            //записываем в локальное хранилище ключ в виде порядкого номера и значение: объект покемон
           // localStorage.setItem(`${count()}`,JSON.stringify(pokemon))
           localStorage.setItem(pokemon.name,JSON.stringify(pokemon))
        }
        catch (error) {
            alert ('Покемон не найден', error.message)
        }
     }
})




