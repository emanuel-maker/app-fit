import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TittleApp() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        paddingLeft: 4,
        marginBottom: 20,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "white",
        }}
      >
        Gol
      </Text>

      <Text style={{ color: "white", fontSize: 24 }}>Para la Gloria</Text>
    </View>
  );
}
