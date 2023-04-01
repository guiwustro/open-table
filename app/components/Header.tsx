const Header = () => {
	return (
		<div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
			<div className="text-center mt-10">
				<h1 className="text-white text-5xl font-bold mb-2">
					Encontre sua mesa para qualquer ocasião
				</h1>
				<div className="text-left text-lg py-3 m-auto flex justify-center">
					<input
						className="rounded  mr-3 p-2 w-[450px]"
						type="text"
						placeholder="State, city or town"
					/>
					<button className="rounded bg-red-600 px-9 py-2 text-white">
						Pesquisar
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
