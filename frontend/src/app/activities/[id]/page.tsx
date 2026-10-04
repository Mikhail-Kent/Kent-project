import Link from "next/link";
import { notFound } from "next/navigation";
import { getActivityById } from "@/data/activities";
import styles from "./page.module.css";

type ActivityPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ActivityPage({
  params,
}: ActivityPageProps) {
  const { id } = await params;
  const activity = getActivityById(id);

  if (!activity) {
    notFound();
  }

  const freePlaces =
    activity.participants.maximum -
    activity.participants.current;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.backLink}>
            ← Назад к ленте
          </Link>

          <span className={styles.brand}>KENT</span>
        </div>
      </header>

      <main className={styles.main}>
        <article className={styles.card}>
          <div className={styles.hero}>
            <span
              className={styles.category}
              data-category={activity.category}
            >
              {activity.category}
            </span>

            <h1 className={styles.title}>
              {activity.title}
            </h1>

            <p className={styles.summary}>
              {activity.summary}
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>
                  Когда
                </span>

                <span className={styles.infoValue}>
                  {activity.fullDate}
                </span>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>
                  Где
                </span>

                <span className={styles.infoValue}>
                  {activity.fullPlace}
                </span>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>
                    Формат
                </span>

                <span className={styles.infoValue}>
                    {activity.format}
                </span>
                </div>
            </div>
          </div>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Описание
            </h2>

            <div className={styles.description}>
              {activity.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Организатор
            </h2>

            <div className={styles.author}>
              <div className={styles.avatar}>
                {activity.author.initial}
              </div>

              <div>
                <p className={styles.authorName}>
                  {activity.author.name}
                </p>

                <p className={styles.authorFaculty}>
                  {activity.author.faculty}
                </p>
              </div>
            </div>
          </section>

          <div className={styles.actions}>
            <div>
              <p className={styles.participants}>
                {activity.participants.current} из{" "}
                {activity.participants.maximum} участников
              </p>

              <p className={styles.freePlaces}>
                Свободных мест: {freePlaces}
              </p>
            </div>

            <button
              type="button"
              className={styles.joinButton}
              disabled
            >
              Присоединиться
            </button>
          </div>
        </article>
      </main>
    </div>
  );
}