import { data } from "../data/data"
import { useForm } from "@formspree/react"
import { useRef, useEffect } from "react"

export default function Contact() {
    const [state, handleSubmit] = useForm("mdanpyyd");
    const formRef = useRef<HTMLFormElement | null>(null);

    useEffect(() => {
        if (state.succeeded) {
            formRef.current?.reset();
        }
    }, [state.succeeded]);

    return (
        <section id="contact" className="mt-24 md:mt-30 scroll-mt-40 mb-20 w-full mx-auto max-w-6xl px-16 flex flex-col gap-8 md:gap-20 md:flex-row">
            {/* LEFT */}
            <div className="flex flex-col items-center text-center gap-4 md:justify-center lg:items-start lg:text-left lg:w-56 lg:items-center">
                <h2 className="font-extrabold text-center text-lg sm:text-xl mb-3 sm:mb-4 md:mb-5 lg:mb-6">Let's Connect!</h2>

                <div className="flex justify-center items-center gap-10">
                    {data.socials.map((s) => (
                        <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
                            <img src={s.icon} alt={s.label} className="w-8 h-auto sm:w-10" />
                        </a>
                    ))}
                </div>
            </div>

            {/* RIGHT */}
            {!state.succeeded ? (
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1">
                    <div className="flex flex-col gap-1">
                        <h3 className="font-bold">Name</h3>
                        <input name="name" required placeholder="John Doe" className="border w-full rounded-xl border-gray-300 px-3 h-9 hover:border-gray-400 focus:border-2 focus:border-gray-500 focus:outline-none"></input>
                    </div>

                    <div className="flex flex-col gap-1">
                        <h3 className="font-bold">Email</h3>
                        <input name="email" type="email" required placeholder="email@gmail.com" className="border w-full rounded-xl border-gray-300 px-3 h-9 hover:border-gray-400 focus:border-2 focus:border-gray-500 focus:outline-none"></input>
                    </div>

                    <div className="flex flex-col gap-1">
                        <h3 className="font-bold">Message</h3>
                        <textarea name="message" required placeholder="Type your message here" rows={4} className="border w-full rounded-xl border-gray-300 px-3 py-1 hover:border-gray-400 focus:border-2 focus:border-gray-500 focus:outline-none"></textarea>
                    </div>

                    <div>
                        <button type="submit" disabled={state.submitting} className="bg-[#f05776] font-sm text-white transition-colors hover:bg-[#f37891] font-semibold px-4 py-2 rounded-lg text-sm lg:text-base">Submit</button>
                    </div>
                </form>
            ) : (
                <div className="flex flex-col justify-center items-center gap-4">
                    <img src="/check.svg" className="h-auto w-12" />
                    <p className="text-center text-sm lg:text-base">Thanks for reaching out! I got your message and I'll reply as soon as I can.</p>
                </div>
            )}
            
        </section>
    )
}