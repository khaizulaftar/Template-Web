import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutSection() {
    return (
        <>
            <div className="mt-12">
                <h1 className=" font-semibold text-2xl">About Me</h1>
                <div className="p-6 shadow rounded-2xl mt-6 bg-white">
                    <div>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <Image src="https://img.icons8.com/forma-bold/100/graduation-cap.png" width={100} height={100} alt="" className="size-7" />
                                <h1 className="font-semibold mt-3 text-lg">Academic Education</h1>
                                <ul className="list-disc pl-5 text-gray-700 mt-6">
                                    <li>
                                        <p className=" text-gray-600">University of the Arts London – London College of Communication - Master of Arts (MA) in User Experience Design</p>
                                        <p className=" text-gray-600 mt-2">2020 – 2022</p>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <Image src="https://img.icons8.com/forma-bold/100/school.png" width={100} height={100} alt="" className="size-7" />
                                <h1 className="font-semibold mt-3 text-lg">Non-Formal Education</h1>
                                <ul className="list-disc pl-5 text-gray-700 mt-6">
                                    <li>
                                        <p className=" text-gray-600">Nielsen Norman Group [NNG] - UX Certification Program</p>
                                        <p className=" text-gray-600 mt-2">March – June 2023</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex mt-6 justify-end">
                            <Button variant="outline" className="rounded-full cursor-pointer">View Full Education</Button>
                        </div>
                    </div>

                    <div className="mt-12">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <Image src="https://img.icons8.com/forma-bold/100/certificate.png" width={100} height={100} alt="" className="size-7" />
                                <h1 className="font-semibold mt-3 text-lg">Experience</h1>
                                <ul className="list-disc pl-5 text-gray-700 mt-6">
                                    <li>
                                        <p className=" text-gray-600">Google - UX Designer</p>
                                        <p className=" text-gray-600 mt-2">January 2022 - Present</p>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <Image src="https://img.icons8.com/forma-bold/100/diploma.png" width={100} height={100} alt="" className="size-7" />
                                <h1 className="font-semibold mt-3 text-lg">Certifications</h1>
                                <ul className="list-disc pl-5 text-gray-700 mt-6">
                                    <li>
                                        <p className=" text-gray-600">Adobe - Web Designer</p>
                                        <p className=" text-gray-600 mt-2">June 2019 – December 2021</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex mt-6 justify-end">
                            <Button variant="outline" className="rounded-full cursor-pointer">View Full Experince</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
