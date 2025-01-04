"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
	const pathname = usePathname();
	const [classes, setClasses] = useState("py-6");
	const [logoIconSize, setLogoIconSize] = useState(30);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const isActivePath = (key: string) => pathname === key;

	const onScroll = () => {
		if (window.scrollY > 80) {
			setClasses("py-2 lg:py-4 shadow-2xl bg-primary");
		} else {
			setClasses("py-6");
		}
	};

	useEffect(() => {
		const viewPortWidth = document.body.clientWidth;
		viewPortWidth < 768 ? setLogoIconSize(30) : setLogoIconSize(46);

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div
			className={`w-full fixed z-50 inset-x-0 top-0 transition-all ${classes}`}
		>
			<div className="w-full flex justify-between items-center px-4 xl:px-0 xl:max-w-6xl mx-auto">
				<Link
					key="home"
					href="/"
					className="justify-center items-center gap-2 md:gap-3 flex"
				>
					<Image
						src="/Logo.png"
						alt="systematic chaos logo"
						width={logoIconSize}
						height={logoIconSize}
						priority
						loading="eager"
						quality={100}
					/>
					<h4 className="text-lg md:text-xl font-heading uppercase">
						systematic chaos
					</h4>
				</Link>
				<Image
					src="/icons/menu.svg"
					alt="menu"
					width={28}
					height={28}
					priority
					loading="eager"
					quality={100}
					className="block lg:hidden p-1 bg-ternary cursor-pointer"
					onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
				/>
				<div
					className={`w-full fixed inset-y-0  transition-all ${
						isMenuOpen ? "right-0" : "-right-full"
					} flex flex-col justify-center items-center gap-4 bg-ternary`}
				>
					<Link
						key="/"
						href="/"
						className={`w-full p-2 text-center text-base font-normal capitalize bg-opacity-30 ${
							isActivePath("/") && "bg-primary"
						}`}
						onClick={() => setIsMenuOpen(false)}
						onKeyDown={(e) => e.key === "Enter" && setIsMenuOpen(false)}
					>
						Home
					</Link>
					<Link
						key="/events"
						href="/events"
						className={`w-full p-2 text-center text-base font-normal capitalize bg-opacity-30 ${
							isActivePath("/events") && "bg-primary"
						}`}
						onClick={() => setIsMenuOpen(false)}
						onKeyDown={(e) => e.key === "Enter" && setIsMenuOpen(false)}
					>
						Events
					</Link>
					<Link
						key="/teams"
						href="/teams"
						className={`w-full p-2 text-center text-base font-normal capitalize bg-opacity-30 ${
							isActivePath("/teams") && "bg-primary"
						}`}
						onClick={() => setIsMenuOpen(false)}
						onKeyDown={(e) => e.key === "Enter" && setIsMenuOpen(false)}
					>
						Teams
					</Link>
					<Link
						key="/about-us"
						href="/about-us"
						className={`w-full p-2 text-center text-base font-normal capitalize bg-opacity-30 ${
							isActivePath("/about-us") && "bg-primaryImg"
						}`}
						onClick={() => setIsMenuOpen(false)}
						onKeyDown={(e) => e.key === "Enter" && setIsMenuOpen(false)}
					>
						About Us
					</Link>
					<span
						className="w-full p-2 text-center text-base font-normal capitalize bg-opacity-30 cursor-pointer"
						onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
						onKeyDown={(e) =>
							e.key === "Enter" && setIsMenuOpen((isOpen) => !isOpen)
						}
					>
						Close
					</span>
				</div>
				<div className="hidden lg:flex justify-center items-center gap-7">
					<Link
						key="/events"
						href="/events"
						className={`text-base font-normal capitalize ${
							isActivePath("/events") && "border-b-2 border-b-ternary"
						}`}
					>
						Events
					</Link>
					<Link
						key="/teams"
						href="/teams"
						className={`text-base font-normal capitalize ${
							isActivePath("/teams") && "border-b-2 border-b-ternary"
						}`}
					>
						Teams
					</Link>
					<Link
						key="/about-us"
						href="/about-us"
						className={`text-base font-normal capitalize ${
							isActivePath("/about-us") && "border-b-2 border-b-ternary"
						}`}
					>
						About Us
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
