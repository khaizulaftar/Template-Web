import { Link } from "react-router-dom";

export default function AboutSection() {

    const datas = [
        {
            "icon": "https://img.icons8.com/pulsar-color/100/motarboard.png",
            "title": "Academic Education",
            "data": [
                {
                    "text": "University of the Arts London – London College of Communication - Master of Arts (MA) in User Experience Design",
                    "year": "2020 – 2022"
                },
            ]
        },
        {
            "icon": "https://img.icons8.com/pulsar-color/100/book.png",
            "title": "Non-Formal Education",
            "data": [
                {
                    "text": "Nielsen Norman Group [NNG] - UX Certification Program",
                    "year": "March – June 2023"
                }
            ]
        },
        {
            "icon": "https://img.icons8.com/pulsar-color/100/bag-diagonal-view.png",
            "title": "Experience",
            "data": [
                {
                    "text": "Google - UX Designer",
                    "year": "January 2022 - Present"
                }
            ]
        },
        {
            "icon": "https://img.icons8.com/pulsar-color/100/certificate.png",
            "title": "Certifications",
            "data": [
                {
                    "text": "Certified Usability Analyst (CUA) - Issued by Human Factors International (HFI)",
                    "year": "2023"
                }
            ]
        },

    ]

    return (
        <>
            <div className="px-4 my-16 max-w-4xl mx-auto">
                <p className="text-4xl font-semibold">About Me</p>
                <div className="p-6 rounded-2xl mt-6 bg-white">
                    <div className="grid md:grid-cols-2 gap-12">
                        {
                            datas.map((v, i) => (
                                <div key={i}>
                                    <img src={v.icon} className="size-7" alt="" />
                                    <p className="mt-3 font-semibold text-lg">{v.title}</p>
                                    {v.data.map((val, ind) => (
                                        <div key={ind} className="mt-3 flex gap-4">
                                            <div className="mt-2">
                                                <span className="block w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                                            </div>
                                            <div className="">
                                                <p className="text-sm text-gray-600">{val.text}</p>
                                                <p className="text-sm text-gray-600 mt-3">2{val.year}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))
                        }
                    </div>
                    <div className="mt-12 flex justify-end">
                        <Link to="/about" className="group relative inline-flex items-center overflow-hidden px-8 py-3">
                            <span className="absolute -end-full transition-all group-hover:end-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                            <span className="text-gray-600 font-medium transition-all group-hover:me-4">View Full</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}