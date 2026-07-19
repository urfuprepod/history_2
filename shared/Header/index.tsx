"use client";

import { HIDDEN_MOBILE_FLEX, LINKS } from "@/constants";
import clsx from "clsx";
import Image from "next/image";
import HamburgerMenu from "../HamburgerMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    return (
        <header className="flex justify-between items-center bg-white rounded-lg shadow-xs py-3 px-4 md:px-8 sticky top-0 left-0 -ml-[15px] -mr-[15px] md:-ml-[30px] md:-mr-[30px] z-333">
            <Image
                src={`/logo.svg`}
                width={140}
                alt="УрФУ"
                height={82}
                className="w-[140px] h-[82px] shrink-0"
            />

            <HamburgerMenu />
            <nav className={clsx("gap-5 items-center", HIDDEN_MOBILE_FLEX)}>
                {LINKS.map(({ name, link }) => (
                    <Link
                        key={link}
                        href={link}
                        className={clsx(
                            "text-strong text-primary pbe-2 border-b-3 select-none",
                            {
                                "border-b-primary": pathname === link,
                                "border-b-transparent": pathname !== link,
                            },
                        )}
                    >
                        {name}
                    </Link>
                ))}
            </nav>
        </header>
    );
};

export default Header;
