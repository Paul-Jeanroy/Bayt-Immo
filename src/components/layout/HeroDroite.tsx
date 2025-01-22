import Image from "next/image";

const testimonialImages = [
    { src: "/testi-1.jpg", alt: "témoignage portait client" },
    { src: "/testi-2.jpg", alt: "témoignage portait client" },
    { src: "/testi-3.jpg", alt: "témoignage portait client" },
    { src: "/testi-4.jpg", alt: "témoignage portait client" },
];

export function HeroDroite() {
    return (
        <div className="rounded-full w-[45%] h-[700px] border-white border relative">
            <div className="flex absolute top-10 right-10">
                <div className="bg-[#cbb3ff] z-10 p-3 font-semibold rounded-full">+3K Biens Immobilier</div>
                <div className="bg-[#cbb3ff] z-10 flex items-center text-black p-3 rounded-full cursor-pointer">
                    <Image src="/fleche.png" alt="fleche" width={20} height={20} className="rotate-[320deg]" />
                </div>
            </div>
            <div className="flex absolute bottom-10 left-10">
                <div className="bg-white z-10 p-3 rounded-lg max-w-[300px]">
                    <div className="flex items-center mb-2">
                        {testimonialImages.map((image, index) => (
                            <div
                                key={index}
                                className={`rounded-full w-10 h-10 bg-gray-500 border-white border relative ${
                                    index > 0 ? "-ml-3" : ""
                                }`}
                            ></div>
                        ))}
                    </div>
                    <div className="flex gap-2 items-center">
                        <p className="text-4xl italic font-bold">1,5K+</p>
                        <p className="text-[14px] font-medium">clients satisfaits et des transactions réussies</p>
                    </div>
                </div>
            </div>
            <Image src="/image-2.avif" alt="logo" fill className="object-cover rounded-[50px]" />
        </div>
    );
}
