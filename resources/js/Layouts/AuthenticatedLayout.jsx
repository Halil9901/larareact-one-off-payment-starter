import SideNav from "@/Components/SideNav.jsx";
import { Button, Navbar } from "flowbite-react";
import TopNav from "@/Components/TopNav.jsx";

export default function Authenticated({ user, header, children }) {

    return (
        // <div className="min-h-screen bg-gray-100 flex flex-col h-screen">
        //     <TopNav auth={user}/>
        <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row h-screen">
            <SideNav/>
            <main className="flex-1 overflow-y-auto p-6 md:py-8 md:px-8 w-full">
                {children}
            </main>
        </div>
    );
}
