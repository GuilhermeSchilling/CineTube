import { Link } from "react-router-dom";
import logo from './logotipo.png';
import styles from './Cabecalho.module.css';
import CabecalhoLink from "components/CabecalhoLink";

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="Logo marca"></img>
            </Link>
            <nav>
                <CabecalhoLink url="./"> Início </CabecalhoLink>
                <CabecalhoLink url="./Favoritos"> Favoritos </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho;