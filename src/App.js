import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Product } from "./components/Product";
import { NuevoProducto } from "./components/NuevoProducto";
import { Editproducto } from "./components/Editproducto";

//redux
import { Provider } from "react-redux";
import store from "./store";


function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <Header />
      <div className="container mt-5">
        <Routes>
          <Route exact path="/" Component={Product}/>
          <Route exact path="/productos/nuevo" Component={NuevoProducto}/>
          <Route exact path="/productos/editar/:id" Component={Editproducto}/>
        </Routes>
      </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
