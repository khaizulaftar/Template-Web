import type { ReactNode } from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

type LayoutProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <div className="flex flex-col lg:flex-row">
                <div>
                    <NavBar />
                    <SideBar />
                </div>
                <div className="mt-20 md:mt-0 w-full">{children}</div>
            </div>
        </>
    );
}
