"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import styles from "./page.module.css";

type ActivityDraft = {
  title: string;
  category: string;
  description: string;
  date: string;
  time: string;
  format: string;
  place: string;
  maximumParticipants: number;
};

export default function CreateActivityPage() {
  const [submittedTitle, setSubmittedTitle] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const activityDraft: ActivityDraft = {
      title: String(formData.get("title")),
      category: String(formData.get("category")),
      description: String(formData.get("description")),
      date: String(formData.get("date")),
      time: String(formData.get("time")),
      format: String(formData.get("format")),
      place: String(formData.get("place")),
      maximumParticipants: Number(formData.get("maximumParticipants")),
    };

    console.log("Новая активность:", activityDraft);

    setSubmittedTitle(activityDraft.title);
  }
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
        <div className={styles.headingBlock}>
          <p className={styles.eyebrow}>Новая активность</p>

          <h1 className={styles.title}>Создай свою активность</h1>

          <p className={styles.subtitle}>
            Расскажи, чем хочешь заняться и какую компанию ищешь.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="activity-title" className={styles.label}>
              Название активности
            </label>

            <input
              id="activity-title"
              name="title"
              type="text"
              placeholder="Например: кто хочет сегодня погулять?"
              className={styles.input}
              maxLength={80}
              required
            />

            <p className={styles.hint}>
              Напиши коротко и понятно. Максимум 80 символов.
            </p>
          </div>

          <div className={styles.field}>
            <label htmlFor="activity-category" className={styles.label}>
              Категория
            </label>

            <select
              id="activity-category"
              name="category"
              className={styles.input}
              defaultValue=""
              required
            >
              <option value="" disabled>
                Выбери категорию
              </option>
              <option value="Спорт">Спорт</option>
              <option value="Учёба">Учёба</option>
              <option value="Проект">Проект</option>
              <option value="Прогулка">Прогулка</option>
              <option value="Игры">Игры</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="activity-description" className={styles.label}>
              Описание
            </label>

            <textarea
              id="activity-description"
              name="description"
              placeholder="Расскажи подробнее, кого ищешь и чем планируете заниматься."
              className={styles.textarea}
              maxLength={500}
              required
            />

            <p className={styles.hint}>Максимум 500 символов.</p>
          </div>

          <div className={styles.fieldGrid}>
            <div className={styles.field}>
              <label htmlFor="activity-date" className={styles.label}>
                Дата
              </label>

              <input
                id="activity-date"
                name="date"
                type="date"
                className={styles.input}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="activity-time" className={styles.label}>
                Время
              </label>

              <input
                id="activity-time"
                name="time"
                type="time"
                className={styles.input}
                required
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="activity-format" className={styles.label}>
              Формат
            </label>

            <select
              id="activity-format"
              name="format"
              className={styles.input}
              defaultValue="Офлайн"
              required
            >
              <option value="Офлайн">Офлайн</option>
              <option value="Онлайн">Онлайн</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="activity-place" className={styles.label}>
              Место
            </label>

            <input
              id="activity-place"
              name="place"
              type="text"
              placeholder="Например: центр Казани или Discord"
              className={styles.input}
              maxLength={100}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="activity-participants" className={styles.label}>
              Максимальное количество участников
            </label>

            <input
              id="activity-participants"
              name="maximumParticipants"
              type="number"
              className={styles.input}
              min={2}
              max={50}
              defaultValue={2}
              required
            />
          </div>

          <div className={styles.actions}>
            <button type="submit" className={styles.submitButton}>
              Опубликовать
            </button>

            {submittedTitle ? (
              <p className={styles.successMessage} role="status">
                Черновик «{submittedTitle}» успешно собран.
              </p>
            ) : (
              <p className={styles.formNote}>
                Пока данные появятся только в консоли браузера.
              </p>
            )}
          </div>
        </form>
      </main>
    </div>
  );
}
