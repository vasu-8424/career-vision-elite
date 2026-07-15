import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow justify-center"><span className="rule-line" />404</p>
        <h1 className="mt-6 text-5xl font-semibold text-foreground">Page not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link to="/" className="btn-primary">Return home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary">
            Try again
          </button>
          <a href="/" className="btn-outline">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Career Vision Educational Consultancy — Admissions to India's Top Engineering & Medical Colleges" },
      { name: "description", content: "Trusted counselling and expert guidance for Engineering, MBBS, Medical PG, BAMS, BHMS, BDS and BPT admissions across India. 15+ years experience, 5000+ successful admissions." },
      { name: "author", content: "Career Vision Educational Consultancy" },
      { name: "theme-color", content: "#0F4C81" },
      { property: "og:title", content: "Career Vision Educational Consultancy" },
      { property: "og:description", content: "Your future begins with the right guidance — admissions counselling for India's top Engineering and Medical colleges." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Career Vision Educational Consultancy" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Career Vision Educational Consultancy" },
      { name: "twitter:description", content: "Trusted admissions counselling for Engineering & Medical colleges in India." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Career Vision Educational Consultancy",
          url: "/",
          telephone: "+91-8639887319",
          email: "careervisioneduconsultancy@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Second Floor, 07/3, 18th C Main Rd, MTB Area, Marenahalli",
            addressLocality: "Jayanagar 9th Block, Bengaluru",
            addressRegion: "Karnataka",
            postalCode: "560041",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
