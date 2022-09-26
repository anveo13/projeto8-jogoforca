import "./style.css";
import "./reset.css";
import forca0 from "./assets/forca0.png"

export default function App() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
    
    
    
    
    return (
        <>
            <main>
                <img src={forca0} alt="forca0"></img>
                <div className="direita">
                    <button className="inicia-jogo"> Escolher a Palavra</button>
                </div>
            </main>
            <footer>
                <ul>
                    <li>
                        {alfabeto.map((a) => (<button className="letras">{a}</button>))}
                    </li>
                </ul>
                <div className="chute" >
                    <input type="text" placeholder="Já descobriu a palavra?"></input>
                    <button>Chutar</button>
                </div>
            </footer>
        </>
    )
}