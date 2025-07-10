import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
    return (
        <>
            <div className="mt-12">
                <Header desk="Hey👋, I'm Aftar!" />
                <p className="mt-6 text-gray-600">I’m Nicole Harper, a passionate Creative Designer with multiple hats as you will see below. I focus on creating intuitive, user-friendly, and visually engaging digital experiences that solve real problems and deliver measurable results.</p>
                <div className="">
                    <div className="max-w-4xl mt-12 mx-auto rounded-2xl bg-white grid grid-cols-2 gap-6 p-6 shadow sticky top-[10vh]">
                        <div className="flex flex-col justify-between">
                            <div>
                                <h1 className="font-semibold text-2xl">UI/UX Designer</h1>
                                <p className="mt-6 text-sm">Designing user-friendly and visually engaging interfaces that prioritize functionality and enhance digital experiences.</p>
                            </div>
                            <div>
                                <Button className="rounded-full p-6 cursor-pointer">View Project</Button>
                            </div>
                        </div>
                        <div>
                            <Image src="https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dWl1eCUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D" alt="" width={100} height={100} className="w-full h-50 object-cover rounded-2xl" />
                            <div className="flex gap-28 mt-6">
                                <div>
                                    <p>Usability</p>
                                    <p className="font-semibold text-2xl text-gray-600">85%</p>
                                </div>
                                <div>
                                    <p>User Retention</p>
                                    <p className="font-semibold text-2xl text-gray-600">70%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-4xl mt-12 mx-auto rounded-2xl bg-white grid grid-cols-2 gap-6 p-6 shadow sticky top-[10vh]">
                        <div className="flex flex-col justify-between">
                            <div>
                                <h1 className="font-semibold text-2xl">UI/UX Designer</h1>
                                <p className="mt-6 text-sm">Designing user-friendly and visually engaging interfaces that prioritize functionality and enhance digital experiences.</p>
                            </div>
                            <div>
                                <Button className="rounded-full p-6 cursor-pointer">View Project</Button>
                            </div>
                        </div>
                        <div>
                            <Image src="https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dWl1eCUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D" alt="" width={100} height={100} className="w-full h-50 object-cover rounded-2xl" />
                            <div className="flex gap-28 mt-6">
                                <div>
                                    <p>Usability</p>
                                    <p className="font-semibold text-2xl text-gray-600">85%</p>
                                </div>
                                <div>
                                    <p>User Retention</p>
                                    <p className="font-semibold text-2xl text-gray-600">70%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-4xl mt-12 mx-auto rounded-2xl bg-white grid grid-cols-2 gap-6 p-6 shadow sticky top-[10vh]">
                        <div className="flex flex-col justify-between">
                            <div>
                                <h1 className="font-semibold text-2xl">UI/UX Designer</h1>
                                <p className="mt-6 text-sm">Designing user-friendly and visually engaging interfaces that prioritize functionality and enhance digital experiences.</p>
                            </div>
                            <div>
                                <Button className="rounded-full p-6 cursor-pointer">View Project</Button>
                            </div>
                        </div>
                        <div>
                            <Image src="https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dWl1eCUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D" alt="" width={100} height={100} className="w-full h-50 object-cover rounded-2xl" />
                            <div className="flex gap-28 mt-6">
                                <div>
                                    <p>Usability</p>
                                    <p className="font-semibold text-2xl text-gray-600">85%</p>
                                </div>
                                <div>
                                    <p>User Retention</p>
                                    <p className="font-semibold text-2xl text-gray-600">70%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </>
    )
};
