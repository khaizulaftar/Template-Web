import { Button } from "./ui/button";

export default function Header(params: any) {
    return (
        <>
            <div className="flex justify-between items-center">
                <h1 className="text-4xl font-semibold">{params.desk}</h1>
                <div className="flex flex-col sm:flex-row items-center gap-3 mt-6 sm:mt-0">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center h-2 w-2 rounded-full bg-green-500">
                            <span className="absolute h-3 w-3 rounded-full bg-green-500 animate-ping duration-3000"></span>
                        </div>
                        <p className="text-sm">Available to work</p>
                    </div>
                    <Button className="rounded-full cursor-pointer">Contat Me</Button>
                </div>
            </div>
        </>
    )
};
