import { TextStyled, ViewStyled } from "./styles";

const TittleApp = () => {
	return (
		<ViewStyled>
			<TextStyled fontWeight="bold" fontSize={30}>
				Gol Para
			</TextStyled>
			<TextStyled fontWeight="normal" fontSize={30}>
				La Gloria
			</TextStyled>
		</ViewStyled>
	);
};

export default TittleApp;
