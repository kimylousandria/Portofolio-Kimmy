import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[85vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-3">
        Error 404
      </p>
      <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-text mb-4">
        Route Not Found
      </h1>
      <p className="max-w-md text-muted mb-8">
        The page or project you are looking for does not exist or has been
        relocated.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg hover:bg-accent-deep transition-colors"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Return Home
      </Link>
    </main>
  );
}