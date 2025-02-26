// Conteúdo de src/api.js

import axios from 'axios';

// Criação de uma instância do Axios com uma URL base
const api = axios.create({
    baseURL: 'http://localhost:8000/api'  // Ajuste esse URL para a sua configuração de backend
});

export default api; // Exportar para ser usada em outros arquivos

// Função para editar notícia
export const editarNoticia = async (id, atualizacao) => {
    try {
        console.log("Enviando atualização para editar a notícia com ID:", id, "dados:", atualizacao);
        const response = await api.patch(`/noticias/${id}`, atualizacao);
        console.log("Resposta da atualização:", response.data);
        return response.data;
    } catch (error) {
        console.error("Erro ao editar notícia:", error);
        throw new Error("Erro ao editar notícia");
    }
};

// Função para deletar notícia
export const deletarNoticia = async (id) => {
    try {
        console.log("Enviando requisição para deletar a notícia com ID:", id);
        await api.delete(`/noticias/${id}`);
        console.log("Notícia deletada com sucesso.");
    } catch (error) {
        console.error("Erro ao deletar notícia:", error);
        throw new Error("Erro ao deletar notícia");
    }
};