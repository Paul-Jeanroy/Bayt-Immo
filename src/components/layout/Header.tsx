import Image from "next/image";

export function Header() {
    return (
        <header className="flex">
            <div className="flex gap-5 items-center">
                <div className="rounded-full w-[35px] h-[35px] border-white border relative">
                    <Image src="/logo.avif" alt="logo" fill className="object-cover" />
                </div>
                <h1 className="text-2xl font-semibold text-gray-900">Bayt</h1>
            </div>
            <div className="flex items-center justify-end flex-1 gap-10">
                <nav className="flex gap-5">
                    <ul className="flex gap-7 text-lg">
                        <li className="cursor-pointer hover:text-gray-700">Accueil</li>
                        <li className="cursor-pointer hover:text-gray-700">Services</li>
                        <li className="cursor-pointer hover:text-gray-700">Pourquoi nous ?</li>
                        <li className="cursor-pointer hover:text-gray-700">Tarifs</li>
                        <li className="cursor-pointer hover:text-gray-700">Blog</li>
                    </ul>
                </nav>
                <div className="flex">
                    <button className="bg-[#cbb3ff] text-lg py-3 px-6 rounded-full">Démarrer maintenant</button>
                    {/* fleche */}
                    <div className="bg-[#cbb3ff] flex items-center text-black p-3 rounded-full cursor-pointer">
                        <Image src="/fleche.png" alt="fleche" width={20} height={20} className="rotate-[320deg]" />
                    </div>
                </div>
            </div>
        </header>
    );
}
