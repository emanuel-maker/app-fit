import styled from "styled-components/native";
import { View, Text } from "react-native";

export const ViewStyled = styled(View)`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 5px;
	padding-left: 4px;
	margin-bottom: 20px;
`;

export const TextStyled = styled(Text)<{
	fontWeight: string;
	fontSize: number;
}>`
	color: white;
	font-weight: ${props => props.fontWeight};
	font-size: ${props => props.fontSize}px;
`;
