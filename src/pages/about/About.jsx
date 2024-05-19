import image from '../../assets/bg.jpg'

const About = () => {

	return (
		<div className="w-full p-20 bg-[#CDEA64] rounded-tr-3xl rounded-tl-3xl text-black">
			<p className="text-[3vw]">
				Ochi is a strategic partner for fast-grow­ing tech businesses that need
				to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
				peo­ple.
			</p>
			<div className="w-full border-t-[1px] mt-16 border-[#5f6a39] flex flex-col lg:flex-row">
				<div className="w-full flex-grow lg:w-1/2 pt-10">
					<h1 className="text-[3vw] font-semibold">Our Approach</h1>
					<button className="px-10 py-6 bg-zinc-900 rounded-full text-white mt-10 flex justify-center items-center gap-6">
						Read More
						<div className="w-2 h-2 bg-white rounded-full"></div>
					</button>
				</div>
				<div
					style={{
						backgroundImage: `url(${image})`,
						backgroundRepeat: "no-repeat ",
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
					className="w-full flex-grow lg:w-1/2 rounded-xl bg-slate-500 h-[55vh] mt-10"
				></div>
			</div>
		</div>
	);
};

export default About;
