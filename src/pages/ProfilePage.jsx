import Sidebar from "../component/Sidebar.jsx";
import ProfileHeader from "../component/ProfileHeader.jsx";
import AboutCard from "../component/AboutCard.jsx";
import VerificationCard from "../component/VerificationCard.jsx";
import ActivityCard from "../component/ActivityCard.jsx";
import "./profile.css";

const profile = {
    name: "Михаил Петров",
    faculty: "ИТИС · 1 курс",
    about: "Интересуюсь IT, спортом и стартапами.\nИщу людей, с которыми можно делать вещи,\nа не только обсуждать идеи."
};

const activities = [
    {
        id: 1,
        category: "Спорт",
        categoryClass: "tag-sport",
        title: "Ищу напарника в зал",
        meta: ["Сегодня", "19:00"],
        description: "Организатор · Набор закрыт",
        status: "Мест нет"
    },
    {
        id: 2,
        category: "Проект",
        categoryClass: "tag-project",
        title: "Команда на хакатон",
        meta: ["Сб–Вс", "Онлайн"],
        description: "Участник · 1 место",
        status: null
    },
    {
        id: 3,
        category: "Игры",
        categoryClass: "tag-games",
        title: "Настольные игры",
        meta: ["Вчера", "18:30"],
        description: "Завершено",
        status: "Завершена"
    }
];

function ProfilePage() {
    return (
        <div className="app-layout">
            <Sidebar profile={profile} />

            <main className="profile-page">
                <ProfileHeader profile={profile} />

                <div className="profile-info">
                    <AboutCard about={profile.about} />
                    <VerificationCard />
                </div>

                <section
                    className="activities-section"
                    id="profile-activities"
                >
                    <h2>
                        Мои активности
                    </h2>

                    <div className="activities-grid">
                        {activities.map((activity) => (
                            <ActivityCard
                                key={activity.id}
                                activity={activity}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default ProfilePage;

