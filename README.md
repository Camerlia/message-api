# Message App

A small NestJS application for managing messages. The project currently includes a basic API structure and testing setup, making it a solid starting point for a message service or chat-style backend.

## Overview

This app is built with:

- NestJS
- TypeScript
- Vitest
- Supertest

It exposes a `message` controller with endpoints for listing, creating, and fetching messages. The current implementation is a scaffold, so the logic can be expanded into a real persistence-backed service later.

## Features

- NestJS app bootstrap
- `MessageModule` and `MessageController`
- Example endpoints for:
  - `GET /message`
  - `POST /message`
  - `GET /message/:id`
- Unit tests for the controller
- HTTP request examples in `requests.http`

## Project structure

```text
src/
  main.ts
  message/
    message.controller.ts
    message.controller.spec.ts
    message.module.ts
```

## Getting started

### Install dependencies

```bash
npm install
```

### Run the app

```bash
npm run start
```

For development mode with hot reload:

```bash
npm run start:dev
```

The app runs by default on:

```text
http://localhost:3000
```

## API endpoints

### Get all messages

```http
GET http://localhost:3000/message
```

### Create a message

```http
POST http://localhost:3000/message
Content-Type: application/json

{
  "content": "Hi there"
}
```

### Get a single message

```http
GET http://localhost:3000/message/409
```

## Testing

Run unit tests:

```bash
npm run test
```

Run end-to-end tests:

```bash
npm run test:e2e
```

Run coverage:

```bash
npm run test:cov
```

## Linting and formatting

```bash
npm run lint
npm run format
```

## Notes

This project is intentionally a clean foundation for a message API. The controller methods are currently placeholders and can be replaced with real business logic, validation, persistence, and authentication as the app grows.

## Optional observability

The project is configured for NestJS Observe support. If you want to enable production monitoring, configure the environment variables for `OBSERVE_APP_KEY` and `OBSERVE_APP_SECRET`, then run:

```bash
npx @nestjs/observe link
```
