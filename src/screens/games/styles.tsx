import styled from "styled-components/native";
import { FlatList, ScrollView, Text, View } from "react-native";

export const ViewStyled = styled(View)<{ paddinTop: number }>`
	padding-left: 10px;
	padding-right: 10px;
	background-color: ${props => props.theme.colors.black};
	height: 100%;
	padding-top: ${props => props.paddinTop}px;
`;

export const FlatListDateStyled = styled(FlatList)`
	flex-direction: row;
	height: 90px;
` as typeof FlatList;

export const ViewFilterStyled = styled(ScrollView)`
	display: flex;
	height: 40px;
	margin-bottom: 10px;
`;

export const FlatListGamesStyled = styled(FlatList)`
	height: 83%;
	width: 100%;
	flex-direction: column;
` as typeof FlatList;

export const TextDateStyled = styled(Text)`
	padding-left: 4px;
	font-size: 18px;
	margin-top: 10px;
	color: ${props => props.theme.colors.white};
	font-family: ${props => props.theme.fonts.regular};
`;
