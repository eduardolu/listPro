import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Product } from "./components/Product";
import { NuevoProducto } from "./components/NuevoProducto";
import { Editproducto } from "./components/Editproducto";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container mt-5">
        <Routes>
          <Route exact path="/" Component={Product}/>
          <Route exact path="/productos/nuevo" Component={NuevoProducto}/>
          <Route exact path="/productos/editar/:id" Component={Editproducto}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
