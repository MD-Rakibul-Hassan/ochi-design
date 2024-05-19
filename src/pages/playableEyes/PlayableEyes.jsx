

const PlayableEyes = () => {
  return (
		<div className="eyes w-full h-screen overflow-hidden">
			<div className="relative w-full h-full bg-center bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
				<div className="absolute w-1/2  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  flex items-center justify-center gap-6 py-10">
					<div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-200">
						<div className="flex justify-center items-center w-2/3 h-2/3 rounded-full bg-zinc-900">
                          <div className="h-10 w-full hover:rotate-[45deg]">
                          <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                            </div>
						</div>
					</div>
					<div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-200">
						<div className="flex justify-center items-center w-2/3 h-2/3 rounded-full bg-zinc-900">
                          <div className="h-10 w-full hover:rotate-[45deg]">
                          <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                            </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PlayableEyes
