import Link from "next/link";

export default function Projects(){
    return (
        <div>
            <Link href="https://github.com/MarioGonzalezVela/Web-sencilla" className="hover:bg-sky-700 p-4 mx-5 me-4 md:me-6 rounded-md">Web sencilla</Link>
            <Link href="https://github.com/MarioGonzalezVela/SuperPrestamosSA" className="hover:bg-sky-700 p-4 mx-5 me-4 md:me-6 rounded-md">Integrador Super Préstamos</Link>
            <Link href="https://github.com/MarioGonzalezVela/GestionNBA" className="hover:bg-sky-700 p-4 mx-5 me-4 md:me-6 rounded-md">Gestión NBA</Link>
        </div>
    );
}