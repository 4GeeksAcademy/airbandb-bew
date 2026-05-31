export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-zinc-600 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-semibold tracking-tight text-zinc-900">airbandb</p>
          <p className="text-xs text-zinc-500">
            {year} airbandb · Estancias unicas para viajar con calma.
          </p>
        </div>

        <nav aria-label="Enlaces legales" className="flex flex-wrap items-center gap-3 text-xs text-zinc-500">
          <span>Privacidad</span>
          <span aria-hidden="true" className="text-zinc-300">
            ·
          </span>
          <span>Terminos</span>
          <span aria-hidden="true" className="text-zinc-300">
            ·
          </span>
          <span>Soporte</span>
        </nav>
      </div>
    </footer>
  );
}
