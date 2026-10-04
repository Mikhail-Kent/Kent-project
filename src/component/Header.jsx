import Button from "./Button.jsx";

function Header() {
    return (
        <header className="welcome-header">
            <a className="logo" href="#/">
                <span className="logo-icon">K</span>
                <span>KENT</span>
            </a>

            <nav aria-label="Навигация">
                <a href="#/">Лента</a>
                <button type="button" disabled>Создать</button>
                <button type="button" disabled>Сообщения</button>
                <a href="#/profile">Профиль</a>
            </nav>

            <Button>
                Открыть ленту
            </Button>
        </header>
    );
}

export default Header;

