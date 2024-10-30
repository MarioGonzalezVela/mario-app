import Link from "next/link";

export function Navbar() {
    return (
        <nav>
            <Link href="/" className="m-10 p-10 bg-slate-500 border rounded-md">Inicio</Link>
            <Link href="/proyectos" className="m-10 p-10 bg-slate-500 rounded-md">Proyectos</Link>
            <Link href="/sobreMi" className="m-10 p-10 bg-slate-500 rounded-md">Sobre mí</Link>
        </nav>
    );
}
