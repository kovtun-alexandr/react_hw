function Header({ title }) {
    return (
        <header className="header">
            <div className="header__container">
                <h2>{title}</h2>
            </div>
        </header>
    );
}

export default Header;