import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CadastroUsuarioGeral } from './pages/Cadastro/CadastroUsuarioGeral';
import { CadastroConcluido } from './pages/Cadastro/CadastroConcluido';
import { MudancaPermicao } from './pages/Cadastro/MudancaPermicao';
import { CadastroEditais } from './pages/Cadastro/CadastroEditais';
import Header from './Components/Header/Index'
import Login from "./pages/Login/Login";
import React from 'react';
import PaginaInicial from './Components/pages/pagina-inicial-usuario/Index'
import PgCoordPesquisa from './Components/pages/paginaInicialCoordPesquisa/Index';

function App() {
  return (
    <>
    <div className="app">
      <Header/>
      <Routes>
        <Route path="/cadastro/usuario" element={<CadastroUsuarioGeral />} />
        <Route path="/cadastro/concluido" element={<CadastroConcluido />} />
        <Route path="/adm/mudanca/permicao" element={<MudancaPermicao />} />
        <Route path="/edital" element={<CadastroEditais />} />
        <Route path="/" element={<Login />} />
        <Route path="/paginainicial" element={<PaginaInicial/>} />
        <Route path="/paginainicialCoordPesquisa" element={<PgCoordPesquisa/>} />
      </Routes>
    </div>
    </>
  );
  
}

export default App;
