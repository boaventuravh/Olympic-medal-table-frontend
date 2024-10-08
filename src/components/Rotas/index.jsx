import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import { ToastContainer } from "react-toastify";
import Pais from "../Pais";
import Navbar from "../Navbar";
import CadastroUsuario from "../Usuario/Cadastro";
import LoginUsuario from "../Usuario/Login";
import Medalhaendpoint from "../Medalha";


function Rotas() {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={ <Home />} />
                <Route path="/pais/codigo/:codigoPais" element={<Pais />}/>
                <Route path="/usuario" element={<CadastroUsuario />} />
                <Route path="/login" element={<LoginUsuario />} />
                <Route path="/medalha" element={<Medalhaendpoint />} />
            </Routes>
        </BrowserRouter>
    )

}export default Rotas;