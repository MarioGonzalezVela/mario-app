import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (

        <nav className="bg-white rounded-lg shadow m-5 dark:bg-gray-800 border">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li className="mx-3">
                        <Image
                          src="/images/snom.png"
                          width={50}   
                          height={100}
                          alt="Snom icon"
                        />                   
                    </li>
                    <li>
                        <Link href="/" className="hover:bg-sky-700 p-4 me-4 md:me-6 rounded-md">Inicio</Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:bg-sky-700 p-4 me-4 md:me-6 rounded-md">Sobre Mí</Link>
                    </li>
                    <li>
                        <Link href="/projects" className="hover:bg-sky-700 p-4 me-4 md:me-6 rounded-md">Proyectos</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
