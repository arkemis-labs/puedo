# ¿puedo?

<img width="1000" height="913" alt="image" src="https://github.com/user-attachments/assets/85ffa636-97ab-44db-bc0f-2d4bd8929b0a" />

A type-safe permission management library for TypeScript applications.

## Features

- 🔒 Role-based access control (RBAC)
- 📝 Type-safe permission definitions
- 🔍 Nested permission support
- ✅ Runtime validation using Zod schemas
- 🚀 Simple and intuitive API

## Installation

```bash
npm install puedo
# or
yarn add puedo
# or
pnpm add puedo
```

## Usage

First, define your permissions structure:

```typescript
const permissions = {
    users: {
      create: false,
      read: false,
      update: false,
      delete: false,
    },
    posts: {
      create: false,
      read: false,
      update: false,
      delete: false,
    }
}
```

Then create your roles with their specific permissions:

```typescript
const roles = [
  {
    id: "admin",
    permissions: {
      users: {
        create: true,
        read: true,
        update: true,
        delete: true,
      },
      posts: {
        create: true,
        read: true,
        update: true,
        delete: true,
      },
    },
  },
  {
    id: "editor",
    permissions: {
      users: {
        read: true,
      },
      posts: {
        create: true,
        read: true,
        update: true,
      },
    },
  },
];
```

Initialize Puedo with your permissions and roles:

```typescript
const puedo = new Puedo({
  accessorKey: "role", // The key to look for in your user object
  roles,
  permissions
});
```

Check permissions in your application:

```typescript
const user = { role: "admin" };
const canCreatePost = puedo.can(user, "posts.create"); // true
const canDeleteUser = puedo.can(user, "users.delete"); // true

const editor = { role: "editor" };
const canCreatePost = puedo.can(editor, "posts.create"); // true
const canDeleteUser = puedo.can(editor, "users.delete"); // false
```

## Type Safety

Puedo provides full TypeScript support with type inference for your permission structure. 

## License

MIT
