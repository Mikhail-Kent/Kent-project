import Button from "./Button.jsx";
import ActivityCard from "./ActivityCard.jsx";

const welcomeActivities = [
    {
        id: 1,
        category: "Спорт",
        categoryClass: "tag-sport",
        title: "Ищу напарника в зал",
        meta: ["Сегодня", "19:00", "Центр"],
        positionClass: "card-1",
        status: null
    },
    {
        id: 2,
        category: "Проект",
        categoryClass: "tag-project",
        title: "Команда на хакатон",
        meta: ["Сб–Вс", "Онлайн", "2 места"],
        positionClass: "card-2",
        status: null
    }
];

function Hero() {
    return (
        <main className="main-container">
            <section className="hero-left">
                <div className="badge">
                    Только для КГУ
                </div>

                <h1>
                    Всегда есть с кем
                    <br />
                    заняться делом
                </h1>

                <p className="hero-desc">
                    Спорт, учёба, прогулки, игры и проекты —
                    <br />
                    с конкретным временем, местом и людьми.
                </p>

                <div className="cta-group">
                    <Button>
                        Открыть ленту
                    </Button>

                    <Button variant="secondary">
                        Создать активность
                    </Button>
                </div>

                <div className="verification">
                    <span className="check-icon" aria-hidden="true">
                        ✓
                    </span>

                    <span>
                        Только подтверждённые студенты КГУ
                    </span>
                </div>
            </section>

            <section className="hero-right" aria-label="Примеры активностей">
                <div className="gradient-circle">
                    {/* map создаёт одну карточку для каждого объекта в массиве. */}
                    {welcomeActivities.map((activity) => (
                        <ActivityCard
                            key={activity.id}
                            activity={activity}
                        >
                            {activity.id === 1 && (
                                <Button className="btn-card">
                                    Присоединиться
                                </Button>
                            )}
                        </ActivityCard>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Hero;

