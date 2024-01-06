import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

type IColorStatus = Record<
	string,
	{
		backgroundColor: string;
	}
>;

export const colorStatus: IColorStatus = {
	lleno: {
		backgroundColor: "#FF5C5C",
	},
	disponible: {
		backgroundColor: "#BEEA00",
	},
	encurso: {
		backgroundColor: "#FFD700",
	},
	cancelado: {
		backgroundColor: "#E3E3E3",
	},
};

export const TouchableOpacityStyled = styled(TouchableOpacity)`
	flex-direction: row;
	padding: 10px;
	margin-top: 5px;
	background-color: ${props => props.theme.colors.secondary};
	border-radius: 10px;
	border-width: 1px;
`;

export const TextHourStyled = styled(Text)`
	color: white;
`;

export const ViewHourStyled = styled(View)`
	flex: 1;
	padding-top: 4px;
	align-items: center;
`;

export const ViewDescriptionStyled = styled(View)`
	flex: 3;
	border-left-width: 1px;
	border-color: gray;
	padding-left: 10px;
`;

export const ViewDetailStyled = styled(View)`
	flex-direction: row;
	gap: 6px;
`;

export const TextDescriptionStyled = styled(Text)<{ fontSize: number }>`
	color: white;
	font-size: ${props => props.fontSize}px;
`;

export const ViewTypeStyled = styled(View)`
	border-radius: 10px;
`;

export const ViewStatuStyled = styled(View)<{ status: string }>`
	flex: 2;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
`;

export const TextStatusStyled = styled(Text)<{ status: string }>`
	text-align: center;
	color: white;
	font-size: 15px;
	padding: 5px;
	border-color: ${props => colorStatus[props.status].backgroundColor};
	border-radius: 10px;
	border-width: 1px;
	margin-right: 8px;
`;
