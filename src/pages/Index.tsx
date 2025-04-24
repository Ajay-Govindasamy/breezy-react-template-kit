
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold tracking-tight mb-8 text-center">
            Welcome to the App
          </h1>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
