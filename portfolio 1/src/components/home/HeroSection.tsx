import { useState } from "react"
import { Button } from "../ui/button"

export default function () {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const items = [
        {
            title: "UI/UX Designer",
            description: "Designing user-friendly and visually engaging interfaces that prioritize functionality and enhance digital experiences.",
            img: "https://img.icons8.com/pulsar-color/100/portraits.png",
        },
        {
            title: "Web Designer",
            description: "Building responsive, visually appealing websites that combine creativity with functionality to deliver online experiences.",
            img: "https://img.icons8.com/pulsar-color/100/design.png",
        },
        {
            title: "SEO Specialist",
            description: "Optimizing websites to boost search rankings, drive organic traffic, and deliver user-focused value.",
            img: "https://img.icons8.com/pulsar-color/100/search.png",
        },
    ];

    return (
        <div className="px-4 w-full my-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
                <h1 className="text-4xl font-semibold">Hey👋, I'm Aftar!</h1>
                <div className="flex items-center gap-3">
                    <p className="text-sm">Available for Projects</p>
                    <Button className="rounded-full cursor-pointer">Contact Me</Button>
                </div>
            </div>
            <div className="mt-6 text-gray-600">
                <p>
                    I’m Nicole Harper, a passionate Creative Designer with multiple hats as you will see
                    below. I focus on creating intuitive, user-friendly, and visually engaging digital
                    experiences that solve real problems and deliver measurable results.
                </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12">
                {items.map((v, i) => {
                    const isOpen = openIndex === i;
                    return (
                        <div
                            onClick={() => setOpenIndex(isOpen ? null : i)}
                            key={i}
                            className="p-6 flex flex-col bg-white items-center rounded-4xl shadow cursor-pointer"
                        >
                            <img src={v.img} className={isOpen ? "size-20" : "size-30"} alt="" />
                            <div className="w-full mt-6">
                                <div className="flex justify-between items-center">
                                    <p className="font-semibold">{v.title}</p>
                                    {isOpen ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                        </svg>
                                    )}
                                </div>
                                <p className={`text-sm mt-3 text-gray-600 ${isOpen ? "block" : "hidden"}`}>
                                    {v.description}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}