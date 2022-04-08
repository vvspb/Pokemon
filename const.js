import { Pokemon } from "./classes.js";

export let count = counter();

export const fillPokemonCard = (pokemon) => {
    const card = document.querySelector('.card');
    const cardList = document.querySelector('.card-list')

    let cloneCard = card.cloneNode(true);
    let title = cloneCard.querySelector('h3');
    let image = cloneCard.querySelector('img');
    let propertiesText = cloneCard.querySelector('.properties p');
    console.log(pokemon);

    let [description] = cloneCard.getElementsByClassName('description');
    title.innerText = pokemon.name;
    image.src = pokemon.image;
    propertiesText.innerText = `Experience ${pokemon.experience}`;
    //  ['<li>wisdom</li>', 'psycho', 'smile']
    // `<li>${el}</li>` ===> '<li>' + el + '</li>'
    description.innerHTML = `
        <h4> Abilities: </h4>
        <ul>
        ${pokemon.abilities.map((el) => `<li>${el}</li>`).join('')}
        </ul>
    `;
    cardList.append(cloneCard);
};

export const GetPokemonByNameOrId = async (params) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params}`);
        const result = await response.json();
        const {
            name,
            base_experience: experience,
            abilities: rawAbilities,
            sprites: { front_default: image }
        } = result;
        const serializedAbilities = rawAbilities.map((el) => {
            const {
                ability: { name },
            } = el;
            return name;
        });

        const pokemon = new Pokemon(name, serializedAbilities, experience, image)
        return pokemon;
    } catch (error) {
        throw Error('Покемон не найден')
    }
};

function counter() {
    let cnt = 0;
    return function () {
        return cnt += 1;
    }
}

for (let i = 0; i < localStorage.length; i++) {
    if (`${localStorage.key(i)}` !== 'user') {
        fillPokemonCard(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }
}



