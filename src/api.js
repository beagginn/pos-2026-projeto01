const API_URL = "https://rickandmortyapi.com/api";

export async function buscarPersonagens() {
    const resposta = await fetch(`${API_URL}/character`);

    if (!resposta.ok) {
        throw new Error("Erro ao buscar personagens");
    }

    const dados = await resposta.json();

    return dados.results;
}

export async function buscarPersonagem(id) {
    const resposta = await fetch(`${API_URL}/character/${id}`);

    if (!resposta.ok) {
        throw new Error("Erro ao buscar personagem");
    }

    return await resposta.json();
}