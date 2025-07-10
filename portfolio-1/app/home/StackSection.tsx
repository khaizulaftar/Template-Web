import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function StackSection() {
    return (
        <>
            <div className="mt-12">
                <h1 className=" font-semibold text-2xl">Stack</h1>
                <div className="grid grid-cols-3 gap-6 mt-6">
                    <div className=" bg-white rounded-2xl p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-gray-300">
                                <Image src="https://img.icons8.com/color/100/figma--v1.png" width={100} height={100} alt="" className=" size-10" />
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Figma</p>
                                <p className="text-gray-600">Interface Desigan Tool</p>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-white rounded-2xl p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-gray-300">
                                <Image src="https://img.icons8.com/color/100/figma--v1.png" width={100} height={100} alt="" className=" size-10" />
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Figma</p>
                                <p className="text-gray-600">Interface Desigan Tool</p>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-white rounded-2xl p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-gray-300">
                                <Image src="https://img.icons8.com/color/100/figma--v1.png" width={100} height={100} alt="" className=" size-10" />
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Figma</p>
                                <p className="text-gray-600">Interface Desigan Tool</p>
                            </div>
                        </div>
                    </div>

                    <div className=" bg-white rounded-2xl p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-gray-300">
                                <Image src="https://img.icons8.com/color/100/figma--v1.png" width={100} height={100} alt="" className=" size-10" />
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Figma</p>
                                <p className="text-gray-600">Interface Desigan Tool</p>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-white rounded-2xl p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-gray-300">
                                <Image src="https://img.icons8.com/color/100/figma--v1.png" width={100} height={100} alt="" className=" size-10" />
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Figma</p>
                                <p className="text-gray-600">Interface Desigan Tool</p>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-white rounded-2xl p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-gray-300">
                                <Image src="https://img.icons8.com/color/100/figma--v1.png" width={100} height={100} alt="" className=" size-10" />
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Figma</p>
                                <p className="text-gray-600">Interface Desigan Tool</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mt-6">
                    <Button variant="outline" className="rounded-full cursor-pointer">View Full Stack</Button>
                </div>
            </div>
        </>
    )
};
