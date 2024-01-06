import React, { useEffect, useState } from "react";
import getDayWeek from "../../../utils/getDayWeek";
import type IDateItem from "../models/DateItemModel";

type IDateItems = Record<number, IDateItem>;

const useDateItems = () => {
	const [dateItems, setDateItems] = useState<IDateItem[]>([]);
	const [dateIdSelected, setDateIdSelected] = useState<number>(0);
	const NEXT_DAYS = 15;

	const loadDays = () => {
		setDateItems([]);
		const date = new Date();

		for (let i = 0; i <= NEXT_DAYS; i++) {
			const dayWeek = getDayWeek(date.getDay()).substring(0, 3);
			const day = date.getDate();
			const ISOFormat = date.toISOString();

			setDateItems(prevDateItems => [
				...prevDateItems,
				{
					id: i,
					day,
					dayWeek: i === 0 ? "Hoy" : dayWeek, // by default first item is "Hoy"
					isSelected: i === 0, // by default first item is selected
					ISOFormat,
				},
			]);

			date.setDate(date.getDate() + 1); // next day
		}
	};

	const handlePress = (id: number) => {
		setDateIdSelected(id);
	};

	React.useEffect(() => {
		loadDays();
	}, []);

	return {
		dateItems,
		handlePress,
		dateIdSelected,
	};
};

export default useDateItems;
