export function HeroSection() {
	return (
		<section className="relative h-[30vh] min-h-[600px] w-full rounded-lg overflow-hidden">
			<div 
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
				}}
			>
				<div className="absolute inset-0 bg-black/60 blur-2xl" />
			</div>

			<div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<h1 className="font-brand mb-4 text-4xl font-extrabold tracking-tight text-yellow-50 sm:text-5xl md:text-6xl">
						Your Movie Universe Awaits
					</h1>
					<p className="font-body mb-8 text-xl text-yellow-50 sm:text-2xl">
						Discover, explore, and dive deep into your favorite films
					</p>
				</div>
			</div>
    </section>
	)
}
