import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/Api";
import "./CadastroEditais.css";
import Cookies from 'js-cookie';

//Se der errado: usar esse link como ref: https://www.bezkoder.com/react-file-upload-axios/
//Usar formData pra lidar com o arquivo pdf que sej anexado e depois dar um append no arquivo pro
export function CadastroEditais(){
    //declaraçoes
    const navigate =  useNavigate();

    const cookie = Cookies.get('token');

    //constantes com useState que serao utilizadas
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [requisitos, setRequisitos] = useState("");
    const [edital, setEdital] = useState();
    const [prazo,setPrazo] = useState("");
    const [tipo, setTipo] = useState(cookie.tipo);
    const [coordenador, setCoordenador] = useState(cookie.nome); 
    const [errTitulo, setErrTitulo] = useState(false);
  
    async function cadastrarEdital(event) {
        event.preventDefault();
        //pelo oq eu vi somente isso aqui ja coloca o arquivo na request
        let formData = new FormData();
        formData.append(
            titulo,
            edital
            );

        await api
        .post("/edital", {
            titulo: titulo,
            descricao: descricao,
            requisitos: requisitos,
            prazo: prazo,
            tipo: tipo,
            coordenador: coordenador,
            edital: formData

        })
        .then(() => alert("Usuario cadastrado com sucesso!"),
            setTitulo(""),
            setDescricao(""),
            setRequisitos(""),
            setEdital(""),
            setPrazo(""),
            setTipo(""),
            setCoordenador(""),
            setErrTitulo(false)
        )
        .catch((err) => setErrTitulo(true));
    }

    const handleClick = () => {
        navigate('/');
    }

    return(
       
        <>
            <form onSubmit={(event) => (cadastrarEdital(event),setErrTitulo(false))} id="divGeral">
                <div className="titulo">
                    <h3>Cadastro de Editais</h3>
                </div>

                <div className="paragraph">
                    <p>Preencha o campos abaixo com as informaçoes pertinentes sobre o Edital</p>
                </div>

                <label classname="label-cadastro" htmlFor="prazo">Prazo:</label>
                <input className="input-cadastro" id="prazo" type="date" 
                onChange={(event)=> setPrazo(event.target.value)} />
                <br/>

                <label classname="label-cadastro" htmlFor="titulo">Titulo:</label>
                <input className="input-cadastro" id="titulo" type="text" required
                onChange={(event)=> setTitulo(event.target.value)} />
                {errTitulo && <span id="errTitulo">Este Titulo ja esta em uso, tente novamnete.</span>}
                <br/>

                <label classname="label-cadastro" htmlFor="descricao">Descrição:</label>
                <textarea className="textAreas" id="descricao" required
                onChange={(event)=> setDescricao(event.target.value)} />
                <br/>

                <label classname="label-cadastro" htmlFor="requisitos">Requisitos:</label>
                <textarea className="textAreas" id="requisitos" required
                onChange={(event)=> setRequisitos(event.target.value)} />
                <br/>

                <label classname="label-cadastro" htmlFor="edital">Edital:</label>
                <input className="input-cadastro" id="edital" type="file" accept=".doc,.docx,.pdf,.txt"
                onChange={(event)=> setEdital(event.target.value)} />
                <br/>

                <div className="outradiv">
                    <div className="botoes">
                        <button
                        className="button-cadastro" 
                        type="submit"
                        >Cadastrar</button> 
                        <button className="botao-voltar" onClick={handleClick}>Voltar</button>
                    </div>
                </div> 
            </form>
            
        </>
    
    );
     
}