import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/Api";
import "./CadastroEditais.css";
import Cookies from 'js-cookie';
import FormData from "form-data";

//Se der errado: usar esse link como ref: https://www.bezkoder.com/react-file-upload-axios/
//Usar formData pra lidar com o arquivo pdf que sej anexado e depois dar um append no arquivo pro
export function CadastroEditais(){
    //declaraçoes
    const navigate =  useNavigate();

    //constantes com useState que serao utilizadas
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [requisitos, setRequisitos] = useState("");
    const [edital, setEdital] = useState();
    const [prazo,setPrazo] = useState("");
    const [tipo, setTipo] = useState("");
    const [errTitulo, setErrTitulo] = useState(false);

    const tipos = {
        COORDENADOR_EXTENSAO: "EXTENSAO",
        COORDENADOR_PESQUISA: "PESQUISA",
        COORDENADOR_INOVACAO: "INOVACAO"
    }


    async function cadastrarEdital(event) {
        event.preventDefault();
        //pelo oq eu vi somente isso aqui ja coloca o arquivo na request
        let bodyformData = new FormData();
        
        bodyformData.append("titulo", titulo);
        bodyformData.append("arquivo", edital);
        bodyformData.append("descricao", descricao);
        bodyformData.append("requisitos", requisitos);
        bodyformData.append("prazo", prazo);
        bodyformData.append("tipo", tipo);

        console.log("1");
        await api
        .post("/edital", bodyformData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${Cookies.get("token")}`
            }
          }
        )
        .then(() => alert("Usuario cadastrado com sucesso!"),
            // setTitulo(""),
            // setDescricao(""),
            // setRequisitos(""),
            // setEdital(""),
            // setPrazo(""),
            // setTipo(""),
            setErrTitulo(false)
        )
        .catch((err) => {
            console.log(err)
            setErrTitulo(true)
        });
    }

    const handleClick = () => {
        navigate('/intermedio');
    }

    return(
       
        <>
            <form  id="divGeral">
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

                <label classname="label-cadastro" htmlFor="tipo">Tipo:</label>
                <select id="tipo" required
                onChange={(event)=> setTipo(event.target.value)}>
                    {Cookies.get("perfis").split(",").map((perfil) => <option value={tipos[perfil]}>{tipos[perfil]}</option>)}
                </select>
                <br/>
                
                <label classname="label-cadastro" htmlFor="edital">Edital:</label>
                <input className="input-cadastro" id="edital" type="file" accept=".doc,.docx,.pdf,.txt"
                 onChange={(event)=> {
                    setEdital(event.target.files.item(0))
                 }} />
                <br/>

                <div className="outradiv">
                    <div className="botoes">
                        <button
                        className="button-cadastro" 
                        type="submit"
                        onClick={(event) => (cadastrarEdital(event),setErrTitulo(false))}
                        >Cadastrar</button> 
                        <button className="botao-voltar" onClick={handleClick}>Voltar</button>
                    </div>
                </div> 
            </form>
            
        </>
    
    );
     
}