export function Header() {
	return (
		<header className="flex justify-between py-10">
			<h1 className="text-yellow-50 font-brand font-black text-3xl">Movie Universe</h1>
			<ul className="flex gap-4">
				<li className="font-body font-bold text-yellow-50 hover:text-yellow-200 transition-all duration-300"><a className="cursor-pointer hover:underline">Specials</a></li>
				<li className="font-body font-bold text-yellow-50 hover:text-yellow-200 transition-all duration-300"><a className="cursor-pointer hover:underline">IMDB</a></li>
				<li className="font-body font-bold text-yellow-50 hover:text-yellow-200 transition-all duration-300"><a className="cursor-pointer hover:underline">About us</a></li>
			</ul>
		</header>
	)
}
