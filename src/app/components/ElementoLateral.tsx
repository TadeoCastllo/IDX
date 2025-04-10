'use client'
import {usePathname} from "next/navigation";
import {JSX} from "react";

interface Props{
    path: string
    icon: JSX.Element
    title: string
    subtitle: string
}

export const ElementoLateral = (
    {path, icon, title, subtitle}: Props) => {
    const currentPath = usePathname(); //hook
    console.log(currentPath);
    return(
        <a href={path} className="inline-flex space-x-2 items center">
            <div>
                {icon}
            </div>
            <div className="flex flex-col">
                <span className="text-lg text-slate-300 font-bold leading-5">{title}</span>
                <span className="text-sm text-slate-500 hidden md:block">{subtitle}</span>
            </div>
        </a>
    );
}
