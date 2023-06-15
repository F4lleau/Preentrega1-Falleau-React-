import React, { Component } from "react";
import "./App.css";

// Components
import Header from "./components/Header/Header";
import CardUser from "./components/CardUser/CardUser";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div>
          <ItemListContainer greeting="¡Gracias por visitarnos!" />
        </div>
        <Header
          title="P&S CONSTRUYE"
          subtitle="Somos una empresa proveedora de bienes y servicios de excelente calidad"
        />
        <div className="UserSection">
          <CardUser
            name="Construcciones"
            date="A privados y empresas del estado"
            description="zzzzzzzzz"
            img="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          />
          <CardUser
            name="Raul Gutierrez"
            date="Se unió en Abril 2021"
            description="zzzzzzzz"
            img="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
          />
          <CardUser
            name="Francesca Bertotti"
            date="Se unió en Julio 2021"
            description="zzzzzz"
            img="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
          />
        </div>
      </div>
    );
  }
}

export default App;

