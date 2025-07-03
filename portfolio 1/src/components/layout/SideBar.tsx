import { Link } from "react-router-dom"

export default function SideBar() {
    const item1 = [
        {
            "logo":
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>,
            "name": "Home",
            "link":"/"
        },
        {
            "logo":
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>,
            "name": "About",
            "link":"/about"
        },
        {
            "logo":
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>,
            "name": "Projects",
            "link":"/projects"
        },
        {
            "logo":
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
                </svg>,
            "name": "Stack",
            "link":"/stack"
        }
    ]

    const item2 =[
        {
            "logo": "https://img.icons8.com/fluency/100/linkedin.png",
            "name": "Linkedin"
        },
        {
            "logo": "https://img.icons8.com/fluency/100/github.png",
            "name": "Github"
        },
        {
            "logo": "https://img.icons8.com/fluency/100/instagram-new.png",
            "name": "Instagram"
        },
        {
            "logo": "https://img.icons8.com/color/100/tiktok--v1.png",
            "name": "Tiktok"
        }
    ]

    return (
        <>
            <div className="items-center h-screen hidden lg:flex sticky top-0">
                <aside className="flex flex-col w-64 h-[90vh] p-6 overflow-y-auto bg-white shadow ml-6 dark:bg-gray-900 dark:border-gray-700 rounded-2xl" style={{ scrollbarWidth: "none" }}>
                    <div className="flex gap-3 items-center">
                        <img className="object-cover w-13 h-13 rounded-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" />
                        <div>
                            <h2 className="text-lg font-semibold">Khaizul Aftar</h2>
                            <p className="text-xs text-gray-600">Web Developer</p>
                        </div>
                    </div>

                    <div className="flex flex-col mt-6 gap-3">
                        <nav className="flex flex-col gap-4">
                            {item1.map((v, i) => (
                                <Link to={v.link} key={i} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-800  dark:hover:text-gray-200 hover:text-gray-700 focus:text-gray-700">
                                    {v.logo}
                                    <span className="mx-2 text-sm">{v.name}</span>
                                </Link>
                            ))}
                        </nav>
                        <hr className="text-gray-300"/>
                        <nav className="flex flex-col gap-2">
                            {item2.map((v, i) => (
                                <a key={i} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <img src={v.logo} className="size-8" alt="" />
                                    <span className="mx-2 text-sm">{v.name}</span>
                                </a>
                            ))}
                        </nav>
                    </div>
                </aside>
            </div>
        </>
    )
}