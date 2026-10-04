"use client";

import { useState } from "react";
import Link from "next/link";
import { ActivityCard } from "@/components/activity-card";
import { activities } from "@/data/activities";
import styles from "./page.module.css";

const filters = [
  "Все",
  "Спорт",
  "Учёба",
  "Проект",
  "Прогулка",
  "Игры",
] as const;

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState("Все");
  const [searchQuery, setSearchQuery] = useState("");

  const normalizedSearch = searchQuery.trim().toLowerCase();

  const visibleActivities = activities.filter((activity) => {
    const matchesCategory =
      selectedFilter === "Все" || activity.category === selectedFilter;

    const matchesSearch =
      activity.title.toLowerCase().includes(normalizedSearch) ||
      activity.summary.toLowerCase().includes(normalizedSearch);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.brand}>
            <div className={styles.logo}>K</div>
            <span className={styles.brandName}>KENT</span>
          </div>

          <h1 className={styles.pageTitle}>Лента</h1>

          <Link href="/activities/create" className={styles.createLink}>
            Создать
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <section aria-labelledby="feed-heading">
          <h2 id="feed-heading" className={styles.heading}>
            Найди компанию
          </h2>

          <p className={styles.subtitle}>
            Посмотри, что предлагают студенты рядом.
          </p>

          <div className={styles.searchArea}>
            <label htmlFor="activity-search" className={styles.visuallyHidden}>
              Поиск активностей
            </label>

            <input
              id="activity-search"
              type="search"
              placeholder="Поиск активностей"
              className={styles.searchInput}
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </div>

          <div className={styles.filterList}>
            {filters.map((filter) => {
              const isActive = filter === selectedFilter;

              const className = isActive
                ? `${styles.filterChip} ${styles.activeFilter}`
                : styles.filterChip;

              return (
                <button
                  key={filter}
                  type="button"
                  className={className}
                  aria-pressed={isActive}
                  onClick={() => setSelectedFilter(filter)}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <div className={styles.activitiesGrid}>
            {visibleActivities.length > 0 ? (
              visibleActivities.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
              ))
            ) : (
              <div className={styles.emptyState}>
                <h3 className={styles.emptyTitle}>Ничего не найдено</h3>

                <p className={styles.emptyText}>
                  Измени поисковый запрос или выбери другую категорию.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <nav className={styles.bottomNavigation} aria-label="Основная навигация">
        <button
          type="button"
          className={`${styles.navigationItem} ${styles.activeNavigationItem}`}
        >
          Лента
        </button>

        <Link href="/activities/create" className={styles.navigationItem}>
          Создать
        </Link>

        <button type="button" className={styles.navigationItem}>
          Профиль
        </button>
      </nav>
    </div>
  );
}
