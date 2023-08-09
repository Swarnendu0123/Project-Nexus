const Navbar = () => {
    return (
        <header className="navbar">
            <div className="logo"><h1>Nexus</h1></div>
            <div className="search-bar">
                <input type="text" placeholder="Search Here" />
                <button className="blueButton">Search</button>
            </div>
            <div className="auth-buttons">
                <button className="blueButton">Login</button>
                <button className="blueButton">Sign Up</button>
            </div>
        </header>

    );
}

export default Navbar;