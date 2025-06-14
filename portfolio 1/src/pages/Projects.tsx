export default function Projects() {
    const datas = [
        {
            "img": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
            "text": "Omnifood: Revolutionizing Personalized Meal Delivery"
        },
        {
            "img": "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlc2lnbiUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
            "text": "Natours: Elevating Adventure Travel Through Innovative Web Solutions"
        },
        {
            "img": "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHdlYnNpdGUlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
            "text": "Nexter: Redefining Real Estate with Cutting-Edge Web Design"
        },
        {
            "img": "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHdlYnNpdGUlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
            "text": "Trillo: Simplifying Travel Planning with Smart, User-Focused Solutions"
        }
    ]
    return (
        <>
            <div className="px-4 my-16 max-w-4xl mx-auto">
                <div className="flex items-center justify-between">
                    <h1 className="text-4xl font-semibold">Projects</h1>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center h-2 w-2 rounded-full bg-green-500">
                            <span className="absolute h-3 w-3 rounded-full bg-green-500 animate-ping duration-3000"></span>
                        </div>
                        <p className="text-sm">Available for Projects</p>
                    </div>
                </div>
                <p className="text-gray-600 mt-6">My projects reflect my commitment to solving complex challenges through design. Whether it’s building a travel platform or enhancing a real estate website, each project is a blend of innovation, strategy, and user-first design principles.</p>
                <div className="p-6 rounded-2xl mt-6 bg-white">
                    <div className="grid md:grid-cols-2 gap-x-6 gap-y-12">
                        {
                            datas.map((v, i) => (
                                <div key={i}>
                                    <img src={v.img} className="h-60 object-cover w-full rounded-2xl" alt="" />
                                    <p className="font-semibold mt-3">{v.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}