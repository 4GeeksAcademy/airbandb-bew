import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-black/10 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          airbandb
        </Link>

        <nav className="flex items-center gap-4 text-sm font-medium text-zinc-700">
          <Link href="/">Inicio</Link>
          <Link href="/catalog">Catalogo</Link>
        </nav>
      </div>
    </header>
  );
}
