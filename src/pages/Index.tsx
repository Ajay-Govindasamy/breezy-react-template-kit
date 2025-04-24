
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Welcome to Your New App
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Start building something amazing with this modern React template.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-xl mx-auto">
              <div className="p-6 rounded-lg border bg-card">
                <h2 className="font-semibold mb-2">TypeScript Ready</h2>
                <p className="text-sm text-muted-foreground">
                  Built with TypeScript for better development experience.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h2 className="font-semibold mb-2">Modern Stack</h2>
                <p className="text-sm text-muted-foreground">
                  Using Vite, Tailwind CSS, and shadcn/ui components.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
