import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
	const maskers = ["We Create", "Eye Opening", "Presentations"];
	return (
		<div className="w-full h-screen bg-zinc-900  pt-1">
			<div className="textstructour lg:mt-52 mt-32 px-10">
				{maskers.map((masker, ind) => {
					return (
						<div key={ind} className="masker ">
							<div className="w-fit flex items-center overflow-hidden">
								{ind === 1 && <div className="w-[9vw] rounded-xl  h-[4vh] lg:h-[10vh] lg:mt-4 bg-teal-700"></div>}
								<h1 className="text-4xl md:text-6xl uppercase lg:text-9xl font-bold  leading-0  tracking-tighter px-2 ">
									{masker}
								</h1>
							</div>
						</div>
					);
				})}
			</div>
			<div className="flex justify-between items-center border-t-[1px] border-zinc-700 mt-12 lg:mt-36 px-10 py-5">
				{[
					"For public and private companies",
					"Form the first pitch to IPO",
				].map((item, index) => (
					<p key={index} className=" text-xs lg:text-xl">
						{item}
					</p>
				))}
				<div className="start ">
					<div className="px-4 hover:bg-white hover:text-black duration-700 font-semibold py-2 border-[2px] border-zinc-700  flex items-center gap-2 rounded-full text-xs lg:text-xl ml-2 uppercase">
						Start the project
                    <div className="w-4  h-4 p-3 rounded-full flex items-center justify-center border-[1px]">
                        <span className="rotate-[90deg]">
                            <FaArrowUpLong />
                        </span>
                    </div>
                    </div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
