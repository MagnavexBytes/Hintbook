```text
hintbook/
├── .env                        # Секретные ключи (БД, Yandex Cloud)
├── drizzle.config.ts           # Конфигурация базы данных Drizzle
├── nuxt.config.ts              # Главный конфиг Nuxt 4
├── package.json                # Зависимости проекта
├── app/                        # --- ФРОНТЕНД (VUE 3) ---
│   ├── app.vue                 # Главный компонент-оболочка
│   ├── components/
│   │   └── AppHeader.vue       # Шапка сайта
│   └── pages/
│       ├── index.vue           # Главная страница (Список работ)
│       └── loadwork.vue        # Страница загрузки работы
└── server/                     # --- БЭКЕНД (NITRO) ---
    ├── api/
    │   ├── works.get.ts        # Получение списка работ из БД
    │   └── upload.post.ts      # Загрузка файла в Yandex и запись в БД
    ├── database/
    │   ├── db.ts               # Инициализация подключения к SQLite
    │   └── schema.ts           # Схема таблиц БД (Drizzle)
    └── utils/
        └── s3.ts               # Утилита для работы с Yandex Object Storage
```