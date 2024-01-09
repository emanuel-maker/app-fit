import { StyleSheet } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-native-gesture-handler";
import { ThemeProvider } from "styled-components/native";
import theme from "./theme";
import Menu from "@components/Menu/Menu";
import { useFonts } from "expo-font";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 3, // cache after 3 minutes
		},
	},
});

export default function App() {
	const [fontsLoaded] = useFonts({
		bold: require("./assets/fonts/Roboto-Bold.ttf"),
		light: require("./assets/fonts/Roboto-Light.ttf"),
		regular: require("./assets/fonts/Roboto-Regular.ttf"),
		thin: require("./assets/fonts/Roboto-Thin.ttf"),
	});

	return (
		<ThemeProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				{fontsLoaded && <Menu />}
			</QueryClientProvider>
		</ThemeProvider>
	);
}
