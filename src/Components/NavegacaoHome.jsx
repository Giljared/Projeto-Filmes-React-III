const { Link } = require("react-router-dom")



const NavegacaoHome = () => {
    return(
        <div>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/filmes">Filmes</Link>
                    <Link to="/perfis">Meu Perfil</Link>

                </ul>
            </nav>
        </div>
    )
}

export default NavegacaoHome