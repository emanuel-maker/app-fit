import styled from "styled-components/native";
import { ScrollView, Text, View } from "react-native";

export const ViewStyled = styled(View)<{ paddinTop: number }>`
	padding-left: 10px;
	padding-right: 10px;
	background-color: ${props => props.theme.colors.black};
	height: 100%;
	padding-top: ${props => props.paddinTop}px;
`;

export const ViewDateStyled = styled(ScrollView)`
	flex-direction: row;
	height: 90px;
`;

export const ViewFilterStyled = styled(ScrollView)`
	display: flex;
	height: 40px;
	margin-bottom: 10px;
`;

export const ViewGamesStyled = styled(ScrollView)`
	height: 83%;
	width: 100%;
	flex-direction: column;
`;

export const TextDateStyled = styled(Text)`
	padding-left: 4px;
	font-size: 18px;
	margin-top: 10px;
	color: ${props => props.theme.colors.white};
`;
