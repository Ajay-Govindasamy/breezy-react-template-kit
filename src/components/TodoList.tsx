
import { useState } from 'react';
import { useTodos } from '@/hooks/useTodos';
import { useTodoStore } from '@/store/todo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const TodoList = () => {
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const { todos, isLoading, createTodo, updateTodo, deleteTodo } = useTodos();
  const { searchQuery, setSearchQuery } = useTodoStore();

  const handleCreateTodo = () => {
    if (!newTodoTitle.trim()) return;
    createTodo({ title: newTodoTitle });
    setNewTodoTitle('');
  };

  const filteredTodos = todos.filter(todo => 
    todo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="flex gap-4 mb-4">
        <Input
          placeholder="Search todos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1"
        />
      </div>

      <div className="flex gap-2 mb-4">
        <Input
          placeholder="New todo title"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleCreateTodo()}
        />
        <Button onClick={handleCreateTodo}>Add Todo</Button>
      </div>

      <ul className="space-y-2">
        {filteredTodos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-2 p-2 border rounded">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => updateTodo({ 
                id: todo.id, 
                data: { completed: !todo.completed } 
              })}
            />
            <span className={todo.completed ? 'line-through' : ''}>
              {todo.title}
            </span>
            <Button
              variant="destructive"
              size="sm"
              className="ml-auto"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
