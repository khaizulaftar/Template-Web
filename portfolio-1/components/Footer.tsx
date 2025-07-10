import { Button } from "./ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Footer() {
    return (
        <>
            <footer className="mt-12 mb-6">
                <div className="px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:pt-24 shadow rounded-2xl bg-white">
                    <div className="text-center max-w-sm mx-auto">
                        <h2 className="text-xl font-semibold text-gray-900">
                            Do you have any project idea you want to discuss about?
                        </h2>
                        <Button className="mt-6 p-6 rounded-full">Contact Me</Button>
                    </div>

                    <div
                        className="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24 dark:border-gray-800"
                    >
                        <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
                            <li>
                                <a href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
                                    Terms & Conditions
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
                                    Cookies
                                </a>
                            </li>
                        </ul>

                        <div className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
                            <Tooltip>
                                <TooltipTrigger>Hover</TooltipTrigger>
                                <TooltipContent>
                                    <p>Add to library</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger>Hover</TooltipTrigger>
                                <TooltipContent>
                                    <p>Add to library</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger>Hover</TooltipTrigger>
                                <TooltipContent>
                                    <p>Add to library</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger>Hover</TooltipTrigger>
                                <TooltipContent>
                                    <p>Add to library</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger>Hover</TooltipTrigger>
                                <TooltipContent>
                                    <p>Add to library</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
};
