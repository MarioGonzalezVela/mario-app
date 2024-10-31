import Link from "next/link";

export function Navbar() {
    return (
        <div>
            <nav className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <li></li>
                <Link href="/" className="text-gray-900 dark:text-white hover:underline">Inicio</Link>
                <Link href="/pages/proyectos" className="text-gray-900 dark:text-white hover:underline">Proyectos</Link>
                <Link href="/pages/sobreMi" className="text-gray-900 dark:text-white hover:underline">Sobre mí</Link>
            </nav>
        </div>
    );
}
