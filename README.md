# Modern React Template

A modern React template built with TypeScript, Vite, and Tailwind CSS.

## Features

- ⚡️ Vite for super fast development
- 🎨 Tailwind CSS for styling
- 📦 shadcn/ui components
- 🔍 ESLint configured
- 📱 Responsive layout
- 🛡️ TypeScript support
- 🎯 Error boundaries for better error handling
- 📚 Storybook for component documentation

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Storybook

This project includes Storybook for component development and documentation. To use Storybook:

1. Start Storybook development server:
   ```bash
   npm run storybook
   ```
2. Open [http://localhost:6006](http://localhost:6006) in your browser

### Writing Stories

Stories are located in the `src/stories` directory. Here's an example of how to create a story:

```typescript
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'default',
    children: 'Button',
  },
};
```

## API Integration

This project includes a complete API integration setup with:
- REST API calls (GET, POST, PUT, DELETE)
- React Query for data fetching and caching
- Zustand for global state management
- Custom hooks for API operations

### Example Usage

```typescript
// Using the todo hooks
const { todos, createTodo, updateTodo, deleteTodo } = useTodos();

// Using the global store
const { searchQuery, setSearchQuery } = useTodoStore();

// Making API calls
createTodo({ title: 'New Todo' });
updateTodo({ id: 1, data: { completed: true } });
deleteTodo(1);
```

## Project Structure

```
src/
  ├── components/     # Reusable components
  │   ├── layout/    # Layout components
  │   └── ui/        # UI components
  ├── pages/         # Page components
  ├── lib/           # Utilities and helpers
  └── styles/        # Global styles
```

## Extending the Project

Here are some ways to extend this template:

1. **Add Authentication**
   - Implement user authentication
   - Add protected routes
   - Create login/signup forms

2. **State Management**
   - Add Tanstack Query for data fetching
   - Implement context for global state
   - Add local storage persistence

3. **Additional Features**
   - Add dark mode support
   - Implement i18n for multiple languages
   - Add form validation
   - Create a dashboard layout

4. **Testing**
   - Add Jest for unit testing
   - Implement E2E testing with Cypress
   - Add testing utilities

5. **Performance**
   - Implement code splitting
   - Add PWA support
   - Optimize images and assets

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Learn More

To learn more about the technologies used in this template:

- [React Documentation](https://reactjs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
