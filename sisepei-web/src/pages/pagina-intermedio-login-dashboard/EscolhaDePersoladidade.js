import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './EscolhaDePersonalidade.css';
// import Cookies from 'js-cookie';

export function EscolhaDePersonalidade(){

    const navigate =  useNavigate();

    // const cookie = Cookies.get('token');

    const [ce, setCe] = useState(false);
    const [ci, setCi] = useState(false);
    const [cp, setCp] = useState(false);
    const [adm, setAdm] = useState(false);

    // useEffect(() => {

    //     // let perfil = cookie.perfis;

    //     for (let index = 0; index < perfil.length; index++) {
    //         if(perfil[index] === "ADMINISTRADOR"){
    //             setAdm(true);
    //         }
    //         if(perfil[index] === "COORDENADOR_EXTENSAO"){
    //             setCe(true);
    //         }
    //         if(perfil[index] === "COORDENADOR_PESQUISA"){
    //             setCp(true);
    //         }
    //         if(perfil[index] === "COORDENADOR_INOVACAO"){
    //             setCi(true);
    //         }
    //     }
        
    // }, []);

    
   
    return(
        <div className="container">
            <div className="cardBody">
                <div className="row">
                    <div className="col-12">
                        <h1 className="titulo">Escolha seu perfil</h1>
                    </div>
                </div>
                <div className="buttons">
                    
                    <button className="botao" disabled={!ce} onClick={navigate("/paginainicialCoordExtensao") } >Coordenador de Extensão</button>
                        
                    <button className="botao" disabled={!cp} onClick={navigate("/paginainicialCoordPesquisa")}>Coordenador de Pesquisa</button>

                    <button className="botao" disabled={!ci} onClick={navigate("/paginacoodenadorinovacao")}>Coordenador de Inovação</button>
                    
                    {/* Aqui nesse link pro ADM tem que ver como vai ser pq ele nao tem pagina inicial ne,
                    ai se precisar, so pra deixar as coisas funcinando, o adm fica somenmte com essa 
                    funcionalidade de mudar poder e pa */}
             
                    <button className="botao" disabled={!adm} onClick={navigate("/adm/mudanca/permicao")}>Administrador</button>
                        
                    <button className="botao" onClick={navigate("/paginainicial")}>Usuario Padrão</button>
                    
                </div>
            </div>
        
        </div> 
    );        

}

export default EscolhaDePersonalidade;