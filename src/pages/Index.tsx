
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TodoList } from "@/components/TodoList";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold tracking-tight mb-8 text-center">
            Todo List Example
          </h1>
          <TodoList />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
