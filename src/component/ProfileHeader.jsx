import Button from "./Button.jsx";

function ProfileHeader({ profile }) {
    return (
        <section className="profile-header">
            <div className="profile-avatar" aria-label="Аватар">
                {profile.name.slice(0, 1)}
            </div>

            <div className="profile-identity">
                <h1>
                    {profile.name}
                </h1>

                <p>
                    {profile.faculty}
                </p>

                <p className="profile-confirmed">
                    <span aria-hidden="true">✓</span>
                    Студент КГУ подтверждён
                </p>

                <p className="profile-stats">
                    2 завершённые активности · 1 активная
                </p>
            </div>

            <Button variant="secondary">
                Редактировать
            </Button>
        </section>
    );
}

export default ProfileHeader;

