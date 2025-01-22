import Image from "next/image";

export function HeroGauche() {
    return (
        <div className="flex flex-col relative">
            <h1 className="text-6xl max-w-3xl leading-[80px] font-semibold  tracking-wider">
                LE PREMIER CHOIX EN MATIÈRE DE SERVICES IMMOBILIERS.
            </h1>
            <p className="max-w-lg text-lg mt-[50px]">
                Gestion. Louer. Vendre. Notre application complète de gestion immobilière est conçue pour répondre à
                tous vos besoins.
            </p>
            <div className="flex mt-[50px]">
                <button className="bg-[#cbb3ff] text-lg py-3 px-6 rounded-full">Démarrer maintenant</button>
                {/* fleche */}
                <div className="bg-[#cbb3ff] flex items-center text-black p-3 rounded-full cursor-pointer">
                    <Image src="/fleche.png" alt="fleche" width={20} height={20} className="rotate-[320deg]" />
                </div>
            </div>

            <div className="absolute bottom-0 -right-6">
                <div className="relative">
                    <div className="bg-white absolute right-5 top-5 z-10 rounded-xl p-3 max-w-[200px] after:content-[''] after:absolute after:bottom-[-8px] after:right-8 after:w-4 after:h-4 after:bg-white after:rotate-45">
                        Libérer le vrai potentiel avec notre application
                    </div>
                    <div className="rounded-[50px] w-[280px] h-[280px] border-white border-2 relative overflow-hidden">
                        <Image src="/image-1.avif" alt="logo" fill className="object-cover" priority />
                    </div>
                </div>
            </div>
            <div className="flex flex-1">
                <p className="items-end flex text-xl cursor-pointer">Votre chemin débute ici</p>
            </div>
        </div>
    );
}
