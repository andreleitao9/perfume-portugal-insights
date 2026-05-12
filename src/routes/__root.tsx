import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que procuras não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Ir para o início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Esta página não carregou
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo correu mal. Tenta atualizar a página ou volta ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Ir para o início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteLayout>
        <Outlet />
      </SiteLayout>
    </QueryClientProvider>
  );
}

const NAV = [
  { to: "/", label: "Página de Rosto" },
  { to: "/tema", label: "Tema e Finalidade" },
  { to: "/objetivos", label: "Objetivos" },
  { to: "/mercado", label: "Mercado" },
  { to: "/marcas", label: "Marcas" },
  { to: "/consumidor", label: "Consumidor" },
  { to: "/canais", label: "Canais de Venda" },
  { to: "/tendencias", label: "Tendências" },
  { to: "/conclusao", label: "Conclusão" },
  { to: "/docentes", label: "Docentes" },
] as const;

function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <Link to="/" className="font-serif text-lg font-semibold tracking-tight text-foreground">
            Perfumes <span className="text-accent">·</span> PT
          </Link>
          <nav className="hidden lg:flex flex-wrap items-center gap-x-5 gap-y-1 text-sm">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground font-medium" }}
                activeOptions={{ exact: true }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="lg:hidden border-t border-border overflow-x-auto">
          <div className="flex gap-4 px-6 py-2 text-xs whitespace-nowrap">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-muted-foreground hover:text-foreground"
                activeProps={{ className: "text-foreground font-semibold" }}
                activeOptions={{ exact: true }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border bg-secondary/40 mt-16">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
          <p>Mercado de Perfumes em Portugal — Trabalho escolar 2025/2026</p>
          <p>Tecnologias de Informação</p>
        </div>
      </footer>
    </div>
  );
}
