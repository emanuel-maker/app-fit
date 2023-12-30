import { axiosInstance } from "@services/AxiosConfig"; // is working issue vscode
import { DateItem } from "../models";
import IGame from "@models/GameModel";

const getMatchesByDate = async (date: DateItem): Promise<IGame[]> => {
  const response = await axiosInstance.get(`matches?date=${date.ISOFormat}`);
  return response.data;
};

export { getMatchesByDate };
