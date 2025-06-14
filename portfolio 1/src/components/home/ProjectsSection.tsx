import { Link } from "react-router-dom";

export default function ProjectsSection() {
    return (
        <>
            <div className="px-4 my-16 max-w-4xl mx-auto">
                <p className="text-4xl font-semibold">Projects</p>
                <div className="p-6 rounded-2xl mt-6 bg-white">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div data-aos="fade" >
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D" className="h-60 object-cover w-full rounded-2xl" alt="" />
                            <p data-aos-delay="300"  className="font-semibold mt-3">Omnifood: Revolutionizing Personalized Meal Delivery</p>
                        </div>
                        <div data-aos="fade" data-aos-delay="300">
                            <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlc2lnbiUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D" className="h-60 object-cover w-full rounded-2xl" alt="" />
                            <p className="font-semibold mt-3">Natours: Elevating Adventure Travel Through Innovative Web Solutions</p>
                        </div>
                    </div>
                    <div className="mt-12 flex justify-end">
                        <Link to="/projects" className="group relative inline-flex items-center overflow-hidden px-8 py-3">
                            <span className="absolute -end-full transition-all group-hover:end-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                            <span className="text-gray-600 font-medium transition-all group-hover:me-4">View Full Projects</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}