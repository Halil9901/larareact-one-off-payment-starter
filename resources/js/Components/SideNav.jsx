import React, {useState} from 'react';
import {
    HiArrowSmRight,
    HiChartPie,
    HiInbox,
    HiMenu,
    HiShoppingBag,
    HiTable,
    HiUser,
    HiViewBoards,
    HiX
} from "react-icons/hi";
import {Sidebar} from "flowbite-react";
import {Link} from "@inertiajs/react";


export default function SideNav() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="md:hidden">
                <button
                    className="absolute top-4 left-4 z-50"
                    onClick={toggleSidebar}
                >
                    {isOpen ? <HiX size={24}/> : <HiMenu size={24}/>}
                </button>
            </div>
            <div
                className={`fixed inset-0 md:static transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 z-40`}>
                <Sidebar aria-label="Default sidebar example" className="w-64 md:w-64 bg-white h-screen shadow-md">
                    <Sidebar.Logo href="#" img="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-4.png"
                                  imgAlt="Flowbite logo">
                        LOGO.
                    </Sidebar.Logo>
                    <Sidebar.Items className="flex flex-col flex-1">
                        <Sidebar.ItemGroup>
                            <Link href={route('dashboard')}>
                                <Sidebar.Item icon={HiChartPie}>
                                    Dashboard
                                </Sidebar.Item>
                            </Link>
                            <Sidebar.Item href="#" icon={HiViewBoards} label="Pro" labelColor="dark">
                                Kanban
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiInbox} label="3">
                                Inbox
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiUser}>
                                Users
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiShoppingBag}>
                                Products
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiArrowSmRight}>
                                Sign In
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiTable}>
                                Sign Up
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item href="#" icon={HiChartPie}>
                                Upgrade to Pro
                            </Sidebar.Item>
                            <Link href={route('profile.edit')}>
                                <Sidebar.Item icon={HiViewBoards}>
                                    Account
                                </Sidebar.Item>
                            </Link>
                            <Sidebar.Item href="#" icon={HiViewBoards}>
                                Help
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
        </div>
    )
        ;
}
