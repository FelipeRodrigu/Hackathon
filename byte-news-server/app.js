import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import noticiaRoutes from './rotas/noticia.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB conectado'))
    .catch(error => console.error('Erro ao conectar ao MongoDB:', error));

// Middlewares
app.use(cors());
app.use(express.json());

// Definindo as rotas
app.use('/api/noticias', noticiaRoutes);

// Rota inicial para verificar o funcionamento do servidor
app.get('/', (req, res) => {
    res.send('API do Blog está rodando 🚀');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});