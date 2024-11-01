import Link from "next/link";

export default function Footer() {
    return (
        
        <footer className="fixed bottom-0 w-full bg-white rounded-lg shadow m-4 dark:bg-gray-800 border">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">2024/2025 Projects
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <Link href="https://www.linkedin.com/in/mario-gonz%C3%A1lez-vela/" className="hover:bg-sky-700 p-4 me-4 md:me-6 rounded-md">Linkedin</Link>
                </li>
                <li>
                    <Link href="https://github.com/MarioGonzalezVela" className="hover:bg-sky-700 p-4 me-4 md:me-6 rounded-md">GitHub</Link>
                </li>
            </ul>
            </div>
        </footer>

    );
}
