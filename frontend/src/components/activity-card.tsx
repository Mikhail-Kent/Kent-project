import Link from "next/link";
import type { Activity } from "@/data/activities";
import styles from "./activity-card.module.css";

type ActivityCardProps = {
  activity: Activity;
};

export function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <article className={styles.card}>
      <span
        className={styles.category}
        data-category={activity.category}
      >
        {activity.category}
      </span>

      <h2 className={styles.title}>{activity.title}</h2>

      <p className={styles.meta}>
        {activity.shortDate} · {activity.shortPlace}
      </p>

      <p className={styles.summary}>{activity.summary}</p>

      <div className={styles.footer}>
        <span className={styles.participants}>
          {activity.participants.current} из{" "}
          {activity.participants.maximum} участников
        </span>

        <Link
          href={`/activities/${activity.id}`}
          className={styles.openLink}
        >
          Открыть
        </Link>
      </div>
    </article>
  );
}