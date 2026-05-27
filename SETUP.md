# Инструкция по развертыванию проекта (Setup)

## Ключи для базы данных и Yandex Cloud Object Storage расположены в .env

## Установка необходимых пакетов
```bash
npm install
```

## Запуск контейнера (Docker). Логин и пароль в .env
```bash
docker-compose up -d
```

* Порт: `5432`.
* Адрес **pgAdmin**: [http://localhost:8080].
* Логин: `PGADMIN_EMAIL`.
* Пароль: `PGADMIN_PASSWORD`.

## Применение Drizzle к Postgre SQL:
```bash
npm run db:push
```

## Поднятие локального сервера Nuxt 4 / Nitro:
```bash
npm run dev
```

Проект поднимается по адресу: [http://localhost:3000]
