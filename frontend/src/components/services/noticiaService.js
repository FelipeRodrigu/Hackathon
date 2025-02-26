import axios from 'axios';

// Defina a URL base da API
const API_URL = 'http://localhost:8000/api/noticias';

// Função para criar uma nova notícia
export const criarNoticia = async (novaNoticia) => {
  try {
    const response = await axios.post(API_URL, novaNoticia);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar notícia:', error);
    throw error;  // Relança o erro para ser capturado no componente
  }
};

// Função para editar uma notícia
export const editarNoticia = async (_id, updatedData) => {
  try {
    const response = await axios.patch(`${API_URL}/${_id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Erro ao editar a notícia:', error);
    throw error;  // Relança o erro para ser capturado no componente
  }
};

// Função para deletar uma notícia
export const deletarNoticia = async (_id) => {
  try {
    const response = await axios.delete(`${API_URL}/${_id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar a notícia:', error);
    throw error;  // Relança o erro para ser capturado no componente
  }
};

// Função para obter notícias (pode ser todas ou filtradas)
export const obterNoticias = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter notícias:', error);
    throw error;  // Relança o erro para ser capturado no componente
  }
};

// Função para obter uma notícia específica por ID
export const obterNoticiaPorId = async (_id) => {
  try {
    const response = await axios.get(`${API_URL}/${_id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter notícia:', error);
    throw error;  // Relança o erro para ser capturado no componente
  }
};

// Função opcional para obter notícias por categoria, se necessário
export const obterNoticiasPorCategoria = async (categoria) => {
  try {
    const response = await axios.get(`${API_URL}/categoria/${categoria}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter notícias por categoria:', error);
    throw error;  // Relança o erro para ser capturado no componente
  }
};