import Image from "next/image"
import { FaBoxArchive } from "react-icons/fa6";
import { GiGrandPiano } from "react-icons/gi";
import { IoIosFootball } from "react-icons/io";
import { GiAncientSword } from "react-icons/gi";


const elementos = [
    {
        path: "/productos/cajas",
        titulo: "Cajas de juguetes",
        subtitulo: "Muy lindas",
        icono: <FaBoxArchive />
    },
    {
        path: "/productos/pianos",
        titulo: "Pianos",
        subtitulo: "Muy antiguos",
        icono: <GiGrandPiano />
    },
    {
        path: "/productos/balones",
        titulo: "Balones",
        subtitulo: "De muchos deportes",
        icono: <IoIosFootball />
    }
]


export const MenuLateral = () => {
    return (
        <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed left-0 h-screen overflow-y-scroll">
            <div id="logo" className="my-4 px-6">
                <h1 className="text-lg md:text-2xl font-bold text-white">Dash<span className="text-blue-500">8</span>.</h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">WelCUM back</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>

                        <Image
                            width={40}
                            height={40}
                            className="rounded-full w-8 h-8"
                            src="https://images.unsplash.com/photo-1742201835989-4e346e36b364?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
                            alt="" />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Mi tienda
                    </span>
                </a>
            </div>
            <div id="nav" className="w-full px-6">
            <a href="#" className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 bg-blue-800 hover:bg-white/5 transition ease-linear duration-150">
                    <div>
                    {
                        elementos[1].icono
                    }
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-bold leading-5 text-white">Dashboard</span>
                        <span className="text-sm text-white/50 hidden md:block">Data Overview</span>
                    </div>
                </a>
                <a href="#" className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg text-slate-300 font-bold leading-5">Database</span>
                        <span className="text-sm text-slate-500 hidden md:block">Database Manager</span>
                    </div>
                </a>


            </div>
        </div>
    );
}