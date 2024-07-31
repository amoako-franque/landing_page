import { hamburger } from "../assets/icons"
import { headerLogo } from "../assets/images"
import { navLinks } from "../constants"

const Nav = () => {
	return (
		<header className="padding-x top-0 sticky py-8 bg-amber-50 shadow-lg shadow-slate-200 z-50 w-full">
			<nav className="flex justify-between items-center max-container">
				<a href="/">
					<img
						src={headerLogo}
						alt="logo"
						width={129}
						height={29}
						className="m-0 w-[129px] h-[29px]"
					/>
				</a>
				<ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
					{navLinks.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								className="font-montserrat  hover:text-amber-500 hover:font-extrabold leading-normal text-lg text-slate-gray">
								{item.label}
							</a>
						</li>
					))}
				</ul>
				<div className="flex  gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
					<a className="hover:text-amber-500 hover:font-extrabold" href="/">
						Sign in
					</a>
					<span>/</span>
					<a className="hover:text-amber-500 hover:font-extrabold" href="/">
						Explore now
					</a>
				</div>
				<div className="hidden max-lg:block">
					<img src={hamburger} alt="hamburger icon" width={25} height={25} />
				</div>
			</nav>
		</header>
	)
}

export default Nav
