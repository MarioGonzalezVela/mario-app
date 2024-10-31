import Link from "next/link";

export default function Projects(){
    return (
        <div className="flex flex-col items-center min-h-screen p-8">
            <Link href="https://github.com/MarioGonzalezVela/Web-sencilla" className="w-full max-w-lg hover:bg-sky-700 p-6 mt-20 my-4 text-center text-2xl text-white bg-sky-500 rounded-md">Web sencilla</Link>
            <Link href="https://github.com/MarioGonzalezVela/SuperPrestamosSA" className="w-full max-w-lg hover:bg-sky-700 p-6 my-4 text-center text-2xl text-white bg-sky-500 rounded-md">Integrador Super Préstamos</Link>
            <Link href="https://github.com/MarioGonzalezVela/GestionNBA" className="w-full max-w-lg hover:bg-sky-700 p-6 my-4 text-center text-2xl text-white bg-sky-500 rounded-md">Gestión NBA</Link>
        </div>
    );
}