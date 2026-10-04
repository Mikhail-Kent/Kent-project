import { useEffect, useState } from "react";
import WelcomePage from "./pages/WelcomePage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import "./hello_screen.css";

function App() {
    const [page, setPage] = useState(window.location.hash);

    useEffect(() => {
        function changePage() {
            setPage(window.location.hash);
        }

        // Слушаем изменение адреса, в том числе кнопки «Назад» и «Вперёд».
        window.addEventListener("hashchange", changePage);

        // Удаляем обработчик, если компонент больше не используется.
        return () => {
            window.removeEventListener("hashchange", changePage);
        };
    }, []);

    if (page === "#/profile") {
        return <ProfilePage />;
    }

    return <WelcomePage />;
}

export default App;

