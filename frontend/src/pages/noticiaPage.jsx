import Footer from '../components/footer/index.jsx';
import Header from './../components/header/index.jsx';
import Noticia from './../components/noticia/index.jsx';
import { useParams } from 'react-router-dom';

export default function NoticiaPage() {
  const { src, titulo, conteudo, autor, categoria, dataPublicacao } = useParams();

  return (
    <>
      <Header />
      <Noticia 
        src={decodeURIComponent(src)} 
        titulo={decodeURIComponent(titulo)} 
        conteudo={decodeURIComponent(conteudo)} 
        autor={decodeURIComponent(autor)} 
        categoria={decodeURIComponent(categoria)} 
        dataPublicacao={decodeURIComponent(dataPublicacao)}
      />
      <Footer />
    </>
  );
}