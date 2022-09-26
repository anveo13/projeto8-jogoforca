import { useState } from "react"
import "./style.css";
import "./reset.css";
import inicial from "./assets/forca0.png"
import erro1 from "./assets/forca1.png"
import erro2 from "./assets/forca2.png"
import erro3 from "./assets/forca3.png"
import erro4 from "./assets/forca4.png"
import erro5 from "./assets/forca5.png"
import fim from "./assets/forca6.png"

import { randomWord } from "./palavras"

export default function App() {
    const alfabeto = ["a", "ã", "á", "â", "b", "c", "ç", "d", "e", "é", "ẽ", "f", "g", "h", "i", "í", "j", "k", "l", "m", "n", "o", "õ", "ô", "ó", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    const tracejada = [];
    const [tracejado, setTracejado] = useState();
    const [palavra, setPalavra] = useState(randomWord());


    function transformaEmArray() {

        const arr = palavra.split('');

        for (let i = 0; i < palavra.length; i++)
            tracejada.push("_");
        setTracejado(tracejada);
        
    }




    const [showElement, setShowElement] = useState(false)
    const [novaClasse, setNovaClasse] = useState('letras');
    function HabilitaTeclado() {
        let classe = novaClasse
        if (showElement) {
            setShowElement(false)
            classe = 'letras'
        } else {
            setShowElement(true)
            classe = 'letras-jogo'
        }
        setNovaClasse(classe)

    }
    function iniciarJogo() {
        transformaEmArray();
        HabilitaTeclado();
        setJogoComecou(true);



    }

    const [valorCerto, setValorCerto] = useState();
    const [clicados, setClicados] = useState([]);
    const [jogoComecou, setJogoComecou] = useState(false);

    function clicou(botaoClicado) {
        const letrasClicadas = [...clicados, botaoClicado]
        setClicados(letrasClicadas);
        const aparece = palavra.split('').map((letra) => letrasClicadas.includes(letra) ? letra : "_")
        setTracejado(aparece);
        console.log(aparece)
    }
    
    const [verifica, setVerifica] = useState();
    const [chute, setChute] = useState();
    const [erro, setErro] = useState(0);
    function chutar() {
        if (verifica === palavra)
            setChute(verifica);

        if (verifica !== palavra) {
            setChute(verifica)
            setTracejado(palavra)
            setErro(6)
        }
    }
    console.log(tracejado)
    return (
        <>
            <main>
                <img src={inicial} alt="forca0"></img>
                <div className="direita">
                    <button className="inicia-jogo"
                        onClick={() => iniciarJogo()}>
                        Escolher a Palavra
                    </button>
                    <p className="tracos">
                        {tracejado}
                    </p>
                </div>
            </main>
            <footer>
                <ul>
                    <li>
                        {alfabeto.map((letra) => (<button onClick={() => clicou(letra)} className={jogoComecou ? clicados.includes(letra) ? "letras" : "letras-jogo" : "letras"}>{letra}</button>))}
                    </li>
                </ul>
                <div className="chute" >
                    <input value={verifica} onChange={e => setVerifica(e.target.value)} type="text" id="palavra" placeholder="Já descobriu a palavra?"></input>
                    <button onClick={() => chutar()}>Chutar</button>
                </div>
            </footer>
        </>
    )
}