import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ProjectSection() {
    return (
        <>
            <div className="mt-12">
                <h1 className=" font-semibold text-2xl">Project</h1>
                <div className="grid grid-cols-2 gap-6 mt-6">
                    <div>
                        <Image src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D" width={100} height={100} alt="" className="w-full h-60 rounded-2xl object-cover" />
                        <div className="flex justify-between gap-3 items-center">
                            <p className="mt-3 text-gray-600 font-semibold">Omnifood: Revolutionizing Personalized Meal Delivery</p>
                            <Button variant="outline" className="rounded-full cursor-pointer">View</Button>
                        </div>
                    </div>
                    <div>
                        <Image src="https://images.unsplash.com/photo-1519222970733-f546218fa6d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D" width={100} height={100} alt="" className="w-full h-60 rounded-2xl object-cover" />
                        <div className="flex justify-between gap-3 items-center">
                            <p className="mt-3 text-gray-600 font-semibold">Natours: Elevating Adventure Travel Through Innovative Web Solutions</p>
                            <Button variant="outline" className="rounded-full cursor-pointer">View</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
