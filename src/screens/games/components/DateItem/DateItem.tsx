import React, { useEffect } from "react";
import type IDateItem from "../../models/DateItemModel";
import { TextStyled, TouchableOpacityStyled } from "./styles";

interface IProps {
	dateItem: IDateItem;
	isClicked: boolean;
	handlePress: (id: number) => void;
}

const DateItem = ({ dateItem, isClicked, handlePress }: IProps) => {
	return (
		<TouchableOpacityStyled
			key={dateItem.id}
			onPress={() => {
				handlePress(dateItem.id);
			}}
			isSelected={isClicked}
		>
			<TextStyled isSelected={isClicked}>{dateItem.dayWeek}</TextStyled>
			<TextStyled isSelected={isClicked}>{dateItem.day}</TextStyled>
		</TouchableOpacityStyled>
	);
};

export default React.memo(DateItem);
