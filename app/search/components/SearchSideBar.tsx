const SearchSideBar = () => {
	return (
		<div className="w-1/5">
			<div className="border-b pb-4">
				<h1 className="mb-2">Cidade</h1>
				<p className="font-light text-reg">São Paulo</p>
				<p className="font-light text-reg">Curitiba</p>
				<p className="font-light text-reg">Florianópolis</p>
				<p className="font-light text-reg">Xanxerê</p>
				<p className="font-light text-reg">Santa Catarina</p>
			</div>
			<div className="border-b pb-4 mt-3">
				<h1 className="mb-2">Comida</h1>
				<p className="font-light text-reg">Mexicana</p>
				<p className="font-light text-reg">Italiana</p>
				<p className="font-light text-reg">Japonesa</p>
			</div>
			<div className="mt-3 pb-4">
				<h1 className="mb-2">Preço</h1>
				<div className="flex">
					<button className="border w-full text-reg font-light rounded-l p-2">
						$
					</button>
					<button className="border-r border-t border-b w-full text-reg font-light p-2">
						$$
					</button>
					<button className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r">
						$$$
					</button>
				</div>
			</div>
		</div>
	);
};

export default SearchSideBar;
