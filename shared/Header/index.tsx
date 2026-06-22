import Image from "next/image";

const LINKS = [
    { title: "О программе", link: "/" },
    { title: "Преподаватели", link: "/professors" },
];

const Header = () => {
    return (
        <header className="flex justify-between items-center bg-white rounded-lg shadow-xs py-3 px-8 sticky top-0 left-0 -ml-[30px] -mr-[30px] z-333">
            <Image
                src={`/logo.svg`}
                width={140}
                alt="УрФУ"
                height={82}
                className="w-[140px] h-[82px] shrink-0"
            />

            <div className="flex gap-5 items-center">
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
