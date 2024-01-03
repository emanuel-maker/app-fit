import React, { useEffect, useState } from "react";
import getDayWeek from "../../../utils/getDayWeek";
import type IDateItem from "../models/DateItemModel";

const useDateItems = () => {
	const [dateItems, setDateItems] = useState<IDateItem[]>([]);
	const [dateSelected, setDaySelected] = useState<number>(0);
	const NEXT_DAYS = 15;

	const loadDays = () => {
		setDateItems([]);
		const date = new Date();

		for (let i = 0; i <= NEXT_DAYS; i++) {
			const dayWeek = getDayWeek(date.getDay()).substring(0, 3);
			const day = date.getDate();
			const month = date.getMonth();
			const year = date.getFullYear();
			const ISOFormat = date.toISOString();

			setDateItems(prevDateItems => [
				...prevDateItems,
				{
					id: i,
					day,
					month: month + 1,
					year,
					dayWeek: i === 0 ? "Hoy" : dayWeek,
					isSelected: i === 0,
					ISOFormat,
				},
			]);

			date.setDate(date.getDate() + 1);
		}
	};

	const handlePress = (id: number) => {
		setDaySelected(id);
		setDateItems(prevStates =>
			prevStates.map(dateItem => {
				if (dateItem.id === id) {
					return { ...dateItem, isSelected: true };
				}
				return { ...dateItem, isSelected: false };
			}),
		);
	};

	React.useEffect(() => {
		loadDays();
	}, []);

	return {
		dateItems,
		handlePress,
		dateSelected,
	};
};

export default useDateItems;
