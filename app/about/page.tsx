import Image from "next/image";

export default function About() {
  return (
    <div className="px-7 p-5 mt-20 m-5 border rounded-lg">
        <p className="mb-20 text-lg">Estudiante del grado superior de Desarrollo de Aplicaciones Web en la U-Tad</p>
        <p className="mb-4 text-lg">Datos personales:</p>

        <ul className="mb-20   list-disc list-inside">
            <li>Lugar de residencia: Cercedilla, Madrid</li>
            <li>Lenguajes: Java, PHP, MySQL, entre otros</li>
            <li>Soy una persona perfeccionista que se centra en los pequeños detalles</li>
        </ul>

        <p className="mb-4 text-lg">Intereses:</p>
        <ul className="list-disc list-inside">
            <li>Aprender y mejorar mi ya elevado nivel de inglés</li>
            <li>Videojuegos relacionados con Nintendo</li>
            <li>Tenis de mesa</li>
        </ul>
    </div>
  );
}
