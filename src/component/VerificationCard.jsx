function VerificationCard() {
    return (
        <section className="info-card verification-card">
            <h2>
                <span className="verification-symbol" aria-hidden="true">
                    ✓
                </span>
                Подтверждённый студент
            </h2>

            <p>
                История участия пополняется
                <br />
                после совместных дел.
            </p>

            <p className="verification-count">
                Сейчас: 2 завершённых дела
            </p>
        </section>
    );
}

export default VerificationCard;

