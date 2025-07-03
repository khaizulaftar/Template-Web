import { Link } from "react-router-dom";

interface datas {
    img: string
    text: string
}

export default function StackSection() {

    const items: datas[] = [
        {
            "img": "https://img.icons8.com/color/100/figma--v1.png",
            "text": "Figma"
        },
        {
            "img": "https://img.icons8.com/color/100/javascript--v1.png",
            "text": "Javascript"
        },
        {
            "img": "https://img.icons8.com/color/100/typescript.png",
            "text": "Typescript"
        },
        {
            "img": "https://img.icons8.com/color/100/tailwind_css.png",
            "text": "Tailwind CSS"
        },
        {
            "img": "https://img.icons8.com/officel/100/react.png",
            "text": "React Js"
        },
        {
            "img": "https://img.icons8.com/fluency/100/nextjs.png",
            "text": "Next Js"
        },

    ]
    return (
        <>
            <div className="px-4 my-16 max-w-4xl mx-auto">
                <p className="text-4xl font-semibold">Stack</p>
                <div className="p-6 rounded-2xl mt-6 bg-white shadow">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {items.map((v, i) => (
                            <div data-aos="fade" data-aos-delay={i * 300} key={i} className="flex items-center gap-3">
                                <div className="bg-gray-100 p-4 sm:p-6 rounded-2xl">
                                    <img src={v.img} className="size-12" alt="" />
                                </div>
                                <p className="font-semibold text-xl">{v.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 flex justify-end">
                        <Link to="" className="group relative inline-flex items-center overflow-hidden px-8 py-3">
                            <span className="absolute -end-full transition-all group-hover:end-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                            <span className="text-gray-600 font-medium transition-all group-hover:me-4">View Full Stack</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}