import { axiosInstance } from "@services/AxiosConfig"; // is working issue vscode
import { type DateItem } from "../models";
import type IGame from "@models/GameModel";

const getMatchesByDate = async (date: DateItem): Promise<IGame[]> => {
	// const response = await axiosInstance.get(`matches?date=${date.ISOFormat}`);
	const matches = [
		{
			id: "ebc16dac-6f44-4446-ac28-a43cd9ba682a",
			title: "Cornellà",
			type: "7vs7",
			hour: "11:30h",
			status: "Disponible",
			description: "Fútbol Campo",
		},
		{
			id: "ksc16dac-6f44-4446-ac28-a43cd9ba682a",
			title: "Gran Via",
			type: "8vs8",
			hour: "12:30h",
			status: "Lleno",
			description: "Fútbol Campo",
		},
		{
			id: "omgc16dac-6f44-4446-ac28-a43cd9ba682a",
			title: "Barceloneta",
			type: "8vs8",
			hour: "11:30h",
			status: "Encurso",
			description: "Fútbol Campo",
		},
		{
			id: "lgc16dac-6f44-4446-ac28-a43cd9ba682a",
			title: "Hospitalet",
			type: "8vs8",
			hour: "9:30h",
			status: "Cancelado",
			description: "Fútbol Campo",
		},
	];

	return matches;
};

export { getMatchesByDate };
