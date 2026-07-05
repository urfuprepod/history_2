import { HIDDEN_MOBILE_FLEX } from "@/constants";
import clsx from "clsx";
import Image from "next/image";
import HamburgerMenu from "../HamburgerMenu";

const LINKS = [
    { title: "О программе", link: "/" },
    { title: "Преподаватели", link: "/professors" },
];

const Header = () => {
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
            <div className={clsx("gap-5 items-center", HIDDEN_MOBILE_FLEX)}>
                {/* {LINKS.map(({ title, link }) => (
                    <Link key={link} url={link}>
                        {title}
                    </Link>
                ))} */}
            </div>
        </header>
    );
};

export default Header;
