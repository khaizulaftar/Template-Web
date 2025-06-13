import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <>
            <div className="px-4 my-12 max-w-4xl mx-auto">
                <div className="flex items-center justify-center bg-white">
                    <img src="https://images.unsplash.com/photo-1585834565211-2bf75c296c59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkwfHx3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D" className="w-full h-75 object-cover rounded-2xl" alt="" />
                    <div className="flex flex-col items-center absolute">
                        <p className="max-w-xs text-center font-semibold">Do you have any project idea you want to discuss about?</p>
                        <Link to="" className="group relative inline-flex mt-6 items-center overflow-hidden rounded-full bg-black hover:bg-black/80 px-8 py-3 text-white">
                            <span className="absolute -end-full transition-all group-hover:end-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                            <span className="text-sm font-medium transition-all group-hover:me-4">Contact Me</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}