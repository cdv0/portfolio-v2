import { data } from "../data/data";

export default function Home() {
    return (
        <section id="home" className="scroll-mt-30">
            <div className="flex flex-col gap-6 mt-2 mb-20 pt-25 md:pt-50 sm:mb-35 gap-7 md:gap-8 md:mb-46 lg:mb-48">
                <div className="flex flex-col items-center gap-1">
                    <p className="font-bold text-center text-3xl md:mb-2 md:text-4xl lg:text-5xl lg:font-semibold">Hi, I'm {data.name}</p>
                    <h2 className="text-lg font-semibold text-center md:text-xl">{data.role}</h2>
                </div>

                <p className="text-center px-10 sm:px-20 md:px-30 lg:px-50">{data.tagline}</p>


                <div className="px-10 sm:px-20 md:px-30 lg:px-50 flex flex-wrap justify-center gap-3">
                    <a href="#projects" className="flex justify-center items-center gap-2 bg-[#f05776] text-white transition-colors hover:bg-[#f37891] font-bold pl-4 pr-6 py-2 rounded-3xl transition-smooth">
                        <img src="/arrow-down.svg" className="h-6 w-6 sm:h-7 sm:w-7"/>
                        <p className="text-sm lg:text-base">Explore my work</p>
                    </a>

                    <a href={data.resumeLink} target="_blank" rel="noreferrer" className="group flex justify-center items-center gap-2 bg-white border border-gray-300 font-bold pl-4 pr-6 py-2 rounded-3xl transition-colors hover:text-[#f05776] hover:border-[#f37891]">
                        <span className="relative h-6 w-6">
                            <img src="/paper.svg" className="absolute inset-0 h-5 w-5 sm:h-6 sm:h-6 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
                            <img src="/paper-pink.svg" className="absolute inset-0 h-5 w-5 sm:h-6 sm:h-6 transition-opacity duration-200 opacity-0 group-hover:opacity-100" />
                        </span>

                        <p className="text-sm lg:text-base">View resume</p>
                    </a>
                </div>
            </div>

            <div className="hidden md:flex justify-center py-10">
                <a href="#skills" className="bg-[#f69aac] hover:bg-[#f05776] flex w-fit p-2 rounded-full transition-colors animate-bounce motion-reduce:animate-none [animation-duration:0.6s]">
                    <img src="/arrow-down.svg" />
                </a>
            </div>
        </section>
    )
}