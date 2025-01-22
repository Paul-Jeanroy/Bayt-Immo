import { Header } from "@/components/layout/Header";
import { HeroDroite } from "@/components/layout/HeroDroite";
import { HeroGauche } from "@/components/layout/HeroGauche";

export default function Home() {
    return (
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-[40px] flex flex-col gap-[100px]">
            <Header />
            <div className="flex gap-10">
                <HeroGauche />
                <HeroDroite />
            </div>
        </div>
    );
}
