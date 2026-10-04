// children — содержимое между тегами ActivityCard, например кнопка на главной.
function ActivityCard({ activity, children }) {
    const {
        category,
        categoryClass,
        title,
        meta,
        status,
        description,
        positionClass = ""
    } = activity;

    return (
        <article className={`activity-card ${positionClass}`}>
            <div className={`card-tag ${categoryClass}`}>
                {category}
            </div>

            <h3 className="card-title">
                {title}
            </h3>

            <div className="card-meta">
                {meta.join(" · ")}
            </div>

            {description && (
                <p className="activity-description">
                    {description}
                </p>
            )}

            {status && (
                <span className="card-status">
                    {status}
                </span>
            )}

            {children}
        </article>
    );
}

export default ActivityCard;

