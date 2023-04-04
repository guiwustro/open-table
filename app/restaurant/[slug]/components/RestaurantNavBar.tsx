import Link from "next/link";

const RestaurantNavBar = () => {
	return (
		<nav className="flex text-reg border-b pb-2">
			<Link href="/restaurant/restaurante-da-mamae" className="mr-7">
				Visão geral
			</Link>
			<Link href="/restaurant/restaurante-da-mamae/menu" className="mr-7">
				Menu
			</Link>
		</nav>
	);
};

export default RestaurantNavBar;
