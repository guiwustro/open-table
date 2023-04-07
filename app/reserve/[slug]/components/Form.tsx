import React from "react";

const Form = () => {
	return (
		<div className="mt-10 flex flex-wrap justify-between w-[660px]">
			<input
				type="text"
				className="border rounded p-3 w-80 mb-4"
				placeholder="Nome"
			/>
			<input
				type="text"
				className="border rounded p-3 w-80 mb-4"
				placeholder="Sobrenome"
			/>
			<input
				type="text"
				className="border rounded p-3 w-80 mb-4"
				placeholder="Número de telefone"
			/>
			<input
				type="text"
				className="border rounded p-3 w-80 mb-4"
				placeholder="Email"
			/>
			<input
				type="text"
				className="border rounded p-3 w-80 mb-4"
				placeholder="Descrição (opcional)"
			/>
			<input
				type="text"
				className="border rounded p-3 w-80 mb-4"
				placeholder="Observações (opcional)"
			/>
			<button className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300">
				Concluir reserva
			</button>
			<p className="mt-4 text-sm">
				Ao clicar em "Concluir reserva", você concorda com os Termos de
				OpenTable de Política de Uso e Privacidade. Taxas padrão de mensagem de
				texto podem ser aplicadas. Você pode cancelar o recebimento de mensagens
				de texto a qualquer momento.
			</p>
		</div>
	);
};

export default Form;
