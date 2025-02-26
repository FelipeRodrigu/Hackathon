import mongoose from 'mongoose';

const noticiaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    conteudo: { type: String, required: true },
    imagem: { type: String, required: true },
    autor: { type: String, required: true },
    dataPublicacao: { type: Date, default: Date.now },
    categoria: { type: String, required: true }
});

const Noticia = mongoose.model('Noticia', noticiaSchema);
export default Noticia;