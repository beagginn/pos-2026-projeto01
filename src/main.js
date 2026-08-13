import "./style.css";
import {
    buscarPersonagens,
    buscarPersonagem
} from "./api.js";

const app = document.querySelector("#app");

async function carregarPersonagens() {
    try {
        const personagens = await buscarPersonagens();

        app.innerHTML = `
            <h1>Rick and Morty</h1>

            <div id="personagens"></div>

            <div id="detalhes"></div>
        `;

        const lista = document.querySelector("#personagens");

        personagens.forEach((personagem) => {
            const card = document.createElement("button");

            card.innerHTML = `
                <img
                    src="${personagem.image}"
                    alt="${personagem.name}"
                >

                <h2>${personagem.name}</h2>
            `;

            card.addEventListener("click", () => {
                mostrarDetalhes(personagem.id);
            });

            lista.appendChild(card);
        });

    } catch (erro) {
        console.error(erro);

        app.innerHTML = `
            <p>Erro ao carregar personagens.</p>
        `;
    }
}

async function mostrarDetalhes(id) {
    const detalhes = document.querySelector("#detalhes");

    detalhes.innerHTML = `
        <p>Carregando...</p>
    `;

    try {
        const personagem = await buscarPersonagem(id);

        detalhes.innerHTML = `
            <h2>${personagem.name}</h2>

            <img
                src="${personagem.image}"
                alt="${personagem.name}"
            >

            <p>
                <strong>Status:</strong>
                ${personagem.status}
            </p>

            <p>
                <strong>Espécie:</strong>
                ${personagem.species}
            </p>

            <p>
                <strong>Gênero:</strong>
                ${personagem.gender}
            </p>

            <p>
                <strong>Origem:</strong>
                ${personagem.origin.name}
            </p>

            <p>
                <strong>Localização:</strong>
                ${personagem.location.name}
            </p>
        `;

    } catch (erro) {
        console.error(erro);

        detalhes.innerHTML = `
            <p>Erro ao carregar personagem.</p>
        `;
    }
}

carregarPersonagens();