import "./style.css";
import { Link } from 'react-router-dom';
function Footer(){
    return(
        <div className="footer">
            <p className="pF">React Nutri</p>
            <div className="dF">
                <a className="aD">Sobre</a>
                <a className="aD">Privacidade</a>
                <a className="aD">Contato</a>
            </div>
        </div>
    )
}

export default Footer