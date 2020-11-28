const { Link } = require("react-router-dom")



const NavegacaoHome = () => {
    return(
        <div>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/filmes">Filmes</Link>
                    <Link to="/apresentacao">Apresentação</Link>

                </ul>
            </nav>
        </div>
    )
}

export default NavegacaoHome