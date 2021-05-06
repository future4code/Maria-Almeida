import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E03AQF0xFgbfEeHxg/profile-displayphoto-shrink_800_800/0/1617061753583?e=1625097600&v=beta&t=Zh-3laIe518Ep_MXnIIdoCzI9_CO915lyyr2AK3fQLo" 
          nome="Maria Fernanda" 
          descricao="Olá, eu sou a Maria Fernanda. Sou apaixonada por fotografia, educação e tecnologia. Já uni as minhas paixões trabalhando com educação ambiental em escolas e documentando tudo através da fotografia. No momento o meu objetivo é migrar para a área da tecnologia, e já estou nesse caminho fazendo o curso de Frontend com React na Labenu. "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>



      <div className="page-section-container">
        <h2>Email</h2>
        <CardPequeno 
          imagem="https://images.vexels.com/media/users/3/140137/isolated/preview/d5ce03b9b26818e8020ad0972de98baa-iacute-cone-redondo-de-email-by-vexels.png" 
          nome="" 
          descricao="m.franchidealmeida@gmail.com" 
        />

      </div>




      <div className="page-section-container">
        <h2>Endereço</h2>
        <CardPequeno 
          imagem="https://images.vexels.com/media/users/3/157400/isolated/lists/b4bca87dcb08043c59bb030665e90030-casa-com-um-icone-de-coracao-preto.png" 
          nome="" 
          descricao="Avenida Dois de Dezembro 776, Centro. Aripuanã - MT" 
        />

      </div>
      


      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
