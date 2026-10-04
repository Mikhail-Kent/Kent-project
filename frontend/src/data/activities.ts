export type ActivityCategory =
  | "Спорт"
  | "Учёба"
  | "Проект"
  | "Прогулка"
  | "Игры";

export type ActivityFormat = "Офлайн" | "Онлайн";

export type Activity = {
  id: string;
  category: ActivityCategory;
  title: string;

  shortDate: string;
  fullDate: string;

  shortPlace: string;
  fullPlace: string;

  format: ActivityFormat;
  summary: string;
  description: string[];

  participants: {
    current: number;
    maximum: number;
  };

  author: {
    name: string;
    faculty: string;
    initial: string;
  };
};

export const activities: Activity[] = [
  {
    id: "1",
    category: "Спорт",
    title: "Ищу напарника в зал",

    shortDate: "Сегодня · 19:00",
    fullDate: "Сегодня, 19:00",

    shortPlace: "Центр",
    fullPlace: "Центр города",

    format: "Офлайн",
    summary: "Тренировка на спину и руки. Уровень любой.",

    description: [
      "Тренировка на спину и руки.",
      "Подойдёт любой уровень подготовки.",
      "Без обязательств — просто потренируемся вместе.",
    ],

    participants: {
      current: 1,
      maximum: 2,
    },

    author: {
      name: "Алексей Смирнов",
      faculty: "ИТИС · 2 курс",
      initial: "А",
    },
  },
  {
    id: "2",
    category: "Проект",
    title: "Собираем команду на хакатон",

    shortDate: "Сб–Вс",
    fullDate: "Суббота и воскресенье",

    shortPlace: "Онлайн",
    fullPlace: "Онлайн, Discord",

    format: "Онлайн",
    summary: "Нужен дизайнер или фронтендер.",

    description: [
      "Собираем небольшую команду для участия в хакатоне.",
      "Ищем дизайнера или frontend-разработчика.",
      "Опыт необязателен — главное желание сделать рабочий проект.",
    ],

    participants: {
      current: 2,
      maximum: 4,
    },

    author: {
      name: "Алина Валеева",
      faculty: "ИТИС · 1 курс",
      initial: "А",
    },
  },
];

export function getActivityById(id: string): Activity | undefined {
  return activities.find((activity) => activity.id === id);
}