export default function About() {
    const datas = [
        {
            "icon": "https://img.icons8.com/pulsar-color/100/motarboard.png",
            "title": "Academic Education",
            "data": [
                {
                    "text": "University of the Arts London – London College of Communication - Master of Arts (MA) in User Experience Design",
                    "year": "2020 – 2022"
                },
                {
                    "text": "Parsons School of Design - Master of Science (MS) in Strategic Design an Management",
                    "year": "2018 – 2020"
                },
                {
                    "text": "Savannah College of Art and Design [SCAD] - Bachelor of Fine Arts (BFA) in Interactive Design and Game Development",
                    "year": "2015 – 2017"
                }
            ]
        },
        {
            "icon": "https://img.icons8.com/pulsar-color/100/book.png",
            "title": "Non-Formal Education",
            "data": [
                {
                    "text": "Nielsen Norman Group [NNG] - UX Certification Program",
                    "year": "March – June 2023"
                },
                {
                    "text": "General Assembly - User Experience Design Immersive",
                    "year": "October 2022 – January 2023"
                },
                {
                    "text": "Interaction Design Foundation [IDF] - UX Design Specialization Course",
                    "year": "January – June 2022"
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
                },
                {
                    "text": "Adobe - Web Designer",
                    "year": "June 2019 – December 2021"
                },
                {
                    "text": "Hubspot - SEO Specialist",
                    "year": "July 2017 – May 2019"
                },
                {
                    "text": "Spotify - UI/UX Designer intern",
                    "year": "January 2017 – June 2017"
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
                },
                {
                    "text": "NNG UX Certification - Issued by Nielsen Norman Group (NNG)",
                    "year": "2022"
                },
                {
                    "text": "Adobe Certified UX Design Specialist - Issued by Adobe",
                    "year": "2021"
                },
                {
                    "text": "Professional Diploma in UX Design - Issued by the UX Design Institute",
                    "year": "2021"
                }
            ]
        },

    ]
    return (
        <>
            <div className="px-4 my-16 max-w-4xl mx-auto">
                <div className="flex items-center justify-between overflow-hidden">
                    <h1 data-aos="fade-up" className="text-4xl font-semibold">About Me</h1>
                    <div data-aos="fade-up" data-aos-delay="300" className="flex items-center gap-3">
                        <div className="flex items-center justify-center h-2 w-2 rounded-full bg-green-500">
                            <span className="absolute h-3 w-3 rounded-full bg-green-500 animate-ping duration-3000"></span>
                        </div>
                        <p className="text-sm">Available to work</p>
                    </div>
                </div>
                <p data-aos="fade" data-aos-delay="900" className="text-gray-600 mt-6">My journey has been shaped by a strong academic foundation, industry-recognized certifications, and hands-on experience with companies like Google and Adobe. I’m dedicated to designing solutions that blend creativity, functionality, and user-centric thinking.</p>
                <div data-aos="fade" data-aos-delay="1200" className="p-6 rounded-2xl mt-6 bg-white">
                    <div className="grid md:grid-cols-2 gap-12">
                        {
                            datas.map((v, i) => (
                                <div key={i}>
                                    <img src={v.icon} className="size-7" alt="" />
                                    <p className="mt-3 font-semibold text-lg">{v.title}</p>

                                    {
                                        v.data.map((val, ind) => (
                                            <div key={ind} className="mt-6 flex gap-4 overflow-hidden">
                                                <div className="flex flex-col items-center gap-1">
                                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full block" />
                                                    <span className="w-px bg-gray-200 h-full block" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-600">{val.text}</p>
                                                    <p className="text-sm text-gray-600 mt-3">{val.year}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}