import {motion} from 'framer-motion'

const Marquee = () => {
	return (
		<div className="w-full py-10 bg-teal-700 rounded-xl">
			<div className="text border-t-2 border-b-2 border-zinc-400 flex whitespace-nowrap gap-7">
				<motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{ease:'linear',repeat:Infinity,duration:5}} className="lg:text-[17vh] text-4xl leading-none uppercase font-semibold   py-10">We are ochi</motion.h1>
				<motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{ease:'linear',repeat:Infinity,duration:5}} className="lg:text-[17vh] text-4xl leading-none uppercase font-semibold   py-10">We are ochi</motion.h1>
			</div>
		</div>
	);
};

export default Marquee;
