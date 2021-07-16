import "./styles/Nav.scss";

function Nav(){
    return (
        <nav className="Nav">

            <a href="#"><img src="./logo-ramo.svg" alt="Logo Ramo Estudantil CEFET-RJ" id="logo-ramo"></img></a>
            <ul id="menu">
                <li className="menu-options">Home</li>
                <li className="menu-options">Notícias</li>
                <li className="menu-options">Equipes</li>
                <li className="menu-options">Projetos</li>
                <li className="menu-options">Prêmios</li>
                <li className="menu-options">PSE</li> 
            </ul>
            <div id="user-content">
                <img src="./thaigo.jpeg" alt="Imagem de perfil de usuário" id="user-img"></img>
                <div id="user-data">
                    <h4 id="user-name">Thaigo Endrá</h4>
                    <p id="user-role">Diretor de Marketing</p>
                </div>
                <a href="#" id="arrow">Sair</a>
            </div>

        </nav>
    );
}

export default Nav;