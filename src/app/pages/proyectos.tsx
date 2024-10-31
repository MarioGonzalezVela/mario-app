import Link from "next/link";

export function Proyectos(){
    return (
    <div>
            <Link href="https://github.com/MarioGonzalezVela/Web-sencilla" className="m-10 p-10 bg-slate-500 border rounded-md">Web sencilla</Link>
            <Link href="https://github.com/MarioGonzalezVela/SuperPrestamosSA" className="m-10 p-10 bg-slate-500 rounded-md">Integrador Super Préstamos</Link>
            <Link href="https://github.com/MarioGonzalezVela/GestionNBA" className="m-10 p-10 bg-slate-500 rounded-md">Gestión NBA</Link>
    </div>
    );
}