import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import NavBar from "./components/NavBar";
import RestaurantCard from "./components/RestaurantCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className="bg-gray-100 min-h-screen w-screen">
			<main className="max-w-screen-2xl m-auto bg-white">
				<NavBar />
				<main>
					<div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
						<div className="text-center mt-10">
							<h1 className="text-white text-5xl font-bold mb-2">
								Encontre sua mesa para qualquer ocasião
							</h1>
							<div className="text-left text-lg py-3 m-auto flex justify-center">
								<input
									className="rounded  mr-3 p-2 w-[450px]"
									type="text"
									placeholder="Estado ou cidade"
								/>
								<button className="rounded bg-red-600 px-9 py-2 text-white">
									Pesquisar
								</button>
							</div>
						</div>
					</div>
					<div className="py-3 px-36 mt-10 flex flex-wrap">
						<RestaurantCard />
					</div>
				</main>
			</main>
		</main>
	);
}
