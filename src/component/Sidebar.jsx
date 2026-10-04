function Sidebar({ profile }) {
    function scrollToActivities() {
        const section = document.getElementById("profile-activities");

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <aside className="sidebar">
            <a className="logo" href="#/">
                <span className="sidebar-logo-icon">K</span>
                <span>KENT</span>
            </a>

            <p className="sidebar-caption">
                Совместные дела
            </p>

            <nav aria-label="Навигация профиля">
                <button type="button" disabled>
                    <span className="nav-dot" />
                    Лента
                </button>

                <button type="button" disabled>
                    <span className="nav-dot" />
                    Создать
                </button>

                <button type="button" onClick={scrollToActivities}>
                    <span className="nav-dot" />
                    Мои активности
                </button>

                <button type="button" disabled>
                    <span className="nav-dot" />
                    Сообщения
                </button>

                <a href="#/profile" aria-current="page">
                    <span className="nav-dot" />
                    Профиль
                </a>
            </nav>

            <div className="sidebar-user">
                <span className="sidebar-avatar">
                    {profile.name.slice(0, 1)}
                </span>

                <div>
                    <strong>{profile.name}</strong>
                    <small>{profile.faculty}</small>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;

