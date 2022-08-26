

const botaoDadosPokemon = document.querySelector('#DadosPokemon');
const textoInput = document.querySelector('#pokemonName');

botaoDadosPokemon.addEventListener('click', function(e){
        e.preventDefault();
        let teste = textoInput.value;
        getPokemon(teste)
});


function getPokemon()
{
 return fetch(`https://pokeapi.co/api/v2/pokemon/ekans`)
 .then(data => data.json())
 .catch(error => console.log(error))
}


async function mostrarPokemon()
{
    try {
        const poke = await getPokemon();
        const propriedadePokemon = document.querySelector('#propriedades-pokemon');
        const paragrafoNomePokemon = document.createElement('p');
        const nomePokemon = `Nome: ${poke.name}`;
        paragrafoNomePokemon.textContent = nomePokemon;
        propriedadePokemon.appendChild(paragrafoNomePokemon);
        const paragrafoTipoPokemon = document.createElement('p');
        const tipoPokemon = `Tipo: ${poke.types[0].type.name}`;
        paragrafoTipoPokemon.textContent = tipoPokemon;
        propriedadePokemon.appendChild(paragrafoTipoPokemon);

        poke.abilities.map(habilidades =>{
            const propriedadePokemon = document.querySelector('#propriedades-pokemon');
            const paragrafoHabilidade = document.createElement('p');
            let nomeHabilidade = `Habilidade: ${habilidades.ability.name}`
            paragrafoHabilidade.textContent = nomeHabilidade;
            propriedadePokemon.appendChild(paragrafoHabilidade);
        })

        const imagemPokemon = document.querySelector('#imagem-pokemon');
        const imagemDoPokemon = document.createElement('img');
        imagemDoPokemon.setAttribute('width', '100%')
        imagemDoPokemon.setAttribute('src', poke.sprites.other.home.front_default);
        imagemPokemon.appendChild(imagemDoPokemon)

        poke.stats.map(estados =>{
            const nomePropriedade = `Nome da Propriedade: ${estados.stat.name} | Pontuação da Propriedade: ${estados.base_stat}`;
            const pontuacaoPropriedade = ``;

            const paragrafoNomePropriedade = document.createElement('p');
            const paragrafoPontuacaoPropriedade = document.createElement('p');

            paragrafoNomePropriedade.textContent = nomePropriedade;
            paragrafoPontuacaoPropriedade.textContent = pontuacaoPropriedade;

            const propriedadePokemon = document.querySelector('#propriedades-pokemon');
            propriedadePokemon.appendChild(paragrafoNomePropriedade);

        });
    } catch (error) {
        console.log("O erro foi" + error);
    }
}

mostrarPokemon()