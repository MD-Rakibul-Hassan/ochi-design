import { useState } from "react";
import {HiOutlineMenuAlt1} from 'react-icons/hi'

const Navbar = () => {
    const links = ["Services", "Our Work", "About us", "Insights", "content"];
    const [toggle, setToggle] = useState(false);
	return (
		<div>
			<nav className=" w-full mt-3 flex justify-between px-8 fixed z-[999] ">
				<div className="logo">
					<h1 className="font-bold text-2xl ">
						Rak<span className="text-teal-600">i</span>b
					</h1>
				</div>
				<div className="lg:hidden fixed top-3 right-5">
					<button onClick={() => setToggle(!toggle)}>
						<HiOutlineMenuAlt1 className="text-4xl" />
					</button>
				</div>
				<div
					className={`${
						toggle
							? "flex flex-col w-full justify-center items-center text-teal-600 translate-x-36  translate-y-10 duration-500 text-xl"
							: "hidden"
					}  lg:block`}
				>
					{links.map((link, index) => (
						<a
							href="#"
							key={index}
							className={`capitalize font-bold mx-5 ${
								index === links.length - 1 && !toggle ? "ml-28" : ""
							}`}
						>
							{link}
						</a>
					))}
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
