import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { LibraryBig, Users } from "lucide-react";
import { TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { Tooltip } from "@radix-ui/react-tooltip";
import Image from "next/image";
import { RiFacebookCircleLine } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { AiFillTikTok } from "react-icons/ai";
import { LuMapPin } from "react-icons/lu";
import { FaDumbbell, FaWhatsapp } from "react-icons/fa";

export function Sidebar() {
    return (
        <div className="flex w-full flex-col bg-muted/40 ">

            <aside className="fixed inset-y-0 left-0 z-10 hidden w-20 border-r bg-background sm:flex flex-col bg-yellow-300">
                <nav className="flex flex-col items-center gap-4 px-2 py-5">
                    <TooltipProvider>
                        <Link href="#"
                            className="flex h-9 w-9 shrink-0 items-center justify-center text-primary-foreground rounded-full"
                        >
                            <Image
                                src="/image/logo.png"
                                alt="logo do ct imperio"
                                className="w-10 h-10"
                                width={180} // largura desejada em pixels
                                height={180} // altura desejada em pixels
                            />

                            <span className="sr-only">logo do ct imperio</span>
                        </Link>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="#"
                                    className="flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground rounded-lg transition-colors hover:text-foreground"
                                >

                                    <LibraryBig className="h-5 w-5" />
                                    <span className="sr-only">Sobre</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Sobre</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="#"
                                    className="flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground rounded-lg transition-colors hover:text-foreground"
                                >

                                    <FaDumbbell className="h-5 w-5" />
                                    <span className="sr-only">Aulas</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Aulas</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="https://wa.me/5514997856670?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20de%20como%20funciona%20o%20CT%20Imp%C3%A9rio"
                                    className="flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground rounded-lg transition-colors hover:text-foreground"
                                >

                                    <FaWhatsapp className="h-5 w-5" />
                                    <span className="sr-only">Contatos</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Contatos</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="#"
                                    className="flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground rounded-lg transition-colors hover:text-foreground"
                                >

                                    <Users className="h-5 w-5" />
                                    <span className="sr-only">Professores</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Professores</TooltipContent>
                        </Tooltip>

                        <div className="flex flex-col gap-4 py-4 mt-16">
                            <Link
                                href="https://www.facebook.com/share/165fabMdE9/?mibextid=qi2Omg"
                                className="flex items-center gap-4 px-2.5 hover:text-foreground"
                                prefetch={false}
                            >
                                <RiFacebookCircleLine className="h-5 w-5 transition-all" />
                            </Link>

                            <Link
                                href="https://www.instagram.com/ct.imperio.fitness/"
                                className="flex items-center gap-4 px-2.5 hover:text-foreground"
                                prefetch={false}
                            >
                                <BsInstagram className="h-5 w-5 transition-all" />
                            </Link>

                            <Link
                                href="https://www.tiktok.com/@eusouwilll"
                                className="flex items-center gap-4 px-2.5 hover:text-foreground"
                                prefetch={false}
                            >
                                <AiFillTikTok className="h-5 w-5 transition-all" />
                            </Link>
                            <Link
                                href="https://www.google.com/maps/place/R.+Araraquara,+193+-+Alto+Cafezal,+Mar%C3%ADlia+-+SP,+17504-086/@-22.2131632,-49.9525712,17z/data=!3m1!4b1!4m6!3m5!1s0x94bfd75eea16093b:0x7312fa3826dd8775!8m2!3d-22.2131632!4d-49.9525712!16s%2Fg%2F11vjz5r1v1?entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D"
                                className="flex items-center gap-4 px-2.5 hover:text-foreground"
                                prefetch={false}
                            >
                                <LuMapPin className="h-5 w-5 transition-all" />
                            </Link>

                        </div>

                    </TooltipProvider>
                </nav>

            </aside>

            <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14 ">
                <header className="sticky top-0 z-30 flex h-14 items-center px-4 bg-background sm:static sm:h-auto border-0 sm:bg-transparent sm:px-6 bg-slate-800">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" className="sm:hidden border-0 bg-slate-800 ">
                                <svg width="256px" height="256px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

                                <span className="sr-only">abrir / fechar menu</span>
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="left" className="sm:max-w-x flex flex-col justify-between bg-yellow-300">

                            <nav className="grid gap-6 text-lg font-medium">
                                <Link href="#"
                                    className="flex h-9 w-9 shrink-0 items-center justify-center text-primary-foreground rounded-full"
                                    prefetch={false}
                                >
                                    <Image
                                        src="/image/logo.png"
                                        alt="logo do ct imperio"
                                        className="w-10 h-10"
                                        width={180} // largura desejada em pixels
                                        height={180} // altura desejada em pixels
                                    />
                                    <span className="sr-only">logo do ct imperio</span>
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false}
                                >
                                    <LibraryBig className="h-5 w-5 transition-all" />
                                    Sobre
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false}
                                >
                                    <FaDumbbell className="h-5 w-5 transition-all" />
                                    Aulas
                                </Link>

                                <Link
                                    href="https://wa.me/5514997856670?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20de%20como%20funciona%20o%20CT%20Imp%C3%A9rio"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false}
                                >
                                    <FaWhatsapp className="h-5 w-5 transition-all" />
                                    Contatos
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false}
                                >
                                    <Users className="h-5 w-5 transition-all" />
                                    Professores
                                </Link>

                                <div className="flex py-4">
                                    <Link
                                        href="https://www.facebook.com/share/165fabMdE9/?mibextid=qi2Omg"
                                        className="flex items-center gap-4 px-2.5 hover:text-foreground"
                                        prefetch={false}
                                    >
                                        <RiFacebookCircleLine className="h-5 w-5 transition-all" />
                                    </Link>

                                    <Link
                                        href="https://www.instagram.com/ct.imperio.fitness/"
                                        className="flex items-center gap-4 px-2.5 hover:text-foreground"
                                        prefetch={false}
                                    >
                                        <BsInstagram className="h-5 w-5 transition-all" />
                                    </Link>

                                    <Link
                                        href="https://www.tiktok.com/@eusouwilll"
                                        className="flex items-center gap-4 px-2.5 hover:text-foreground"
                                        prefetch={false}
                                    >
                                        <AiFillTikTok className="h-5 w-5 transition-all" />
                                    </Link>
                                    <Link
                                        href="https://www.google.com/maps/place/R.+Araraquara,+193+-+Alto+Cafezal,+Mar%C3%ADlia+-+SP,+17504-086/@-22.2131632,-49.9525712,17z/data=!3m1!4b1!4m6!3m5!1s0x94bfd75eea16093b:0x7312fa3826dd8775!8m2!3d-22.2131632!4d-49.9525712!16s%2Fg%2F11vjz5r1v1?entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D"
                                        className="flex items-center gap-4 px-2.5 hover:text-foreground"
                                        prefetch={false}
                                    >
                                        <LuMapPin className="h-5 w-5 transition-all" />
                                    </Link>

                                </div>
                            </nav>

                        </SheetContent>
                    </Sheet>

                    <h1 className="font-semibold m-auto text-yellow-50">CT Imperio</h1>
                </header>
            </div>
        </div>
    )
}