const ReservationCard = () => {
	return (
		<div className="fixed w-[15%] bg-white rounded p-3 shadow">
			<div className="text-center border-b pb-2 font-bold">
				<h4 className="mr-7 text-lg">Faça uma reserva</h4>
			</div>
			<div className="my-3 flex flex-col">
				<label htmlFor="">Quantidade de pessoas</label>
				<select name="" className="py-3 border-b font-light" id="">
					<option value="">1 pessoa</option>
					<option value="">2 pessoas</option>
				</select>
			</div>
			<div className="flex justify-between">
				<div className="flex flex-col w-[48%]">
					<label htmlFor="">Data</label>
					<input type="text" className="py-3 border-b font-light w-28" />
				</div>
				<div className="flex flex-col w-[48%]">
					<label htmlFor="">Horário</label>
					<select name="" id="" className="py-3 border-b font-light">
						<option value="">7:30</option>
						<option value="">9:30</option>
					</select>
				</div>
			</div>
			<div className="mt-5">
				<button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16">
					Agende um horário
				</button>
			</div>
		</div>
	);
};

export default ReservationCard;
