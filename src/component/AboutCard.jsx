function AboutCard({ about }) {
    return (
        <section className="info-card about-card">
            <h2>
                О себе
            </h2>

            <p>
                {about}
            </p>

            <div className="interest-tags">
                <span>IT</span>
                <span className="interest-sport">Спорт</span>
                <span>Стартапы</span>
            </div>
        </section>
    );
}

export default AboutCard;

