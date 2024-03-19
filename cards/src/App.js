import React from 'react';
import Card from './Card'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

const App = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
      <Card
        image="path-to-your-image-1.jpg"
        title="Заголовок карточки 1"
        text="Некоторый текст для карточки 1."
      >
        <a href="#" className="btn btn-primary">Перейти куда-нибудь</a>
      </Card>
    </div>

      <div className="d-flex justify-content-center">
      <Card
        title="Заголовок карточки 2"
        text="Некоторый текст для карточки 2."
      >
        <a href="#" className="btn btn-primary">Перейти куда-нибудь</a>
      </Card>
    </div>
  </div> 
  );
};

export default App;
