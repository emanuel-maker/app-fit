import IGame from "@models/GameModel";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

interface IProps {
  game: IGame;
}

interface IColorStatus {
  [key: string]: {
    backgroundColor: string;
  };
}

const colorStatus: IColorStatus = {
  lleno: {
    backgroundColor: "#FF0000",
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

export default function GameCard({ game }: IProps) {
  const styles = StyleSheet.create({
    cardContainer: {
      display: "flex",
      flexDirection: "row",
      padding: 10,
      marginTop: 5,
      backgroundColor: "#292929",
      borderRadius: 10,
      borderWidth: 1,
    },
  });
  return (
    <TouchableOpacity style={[styles.cardContainer]} key={game.id}>
      {/* First part */}
      <View
        style={{
          flex: 1,
          display: "flex",
          paddingTop: 4,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>{game.hour}</Text>
        <Text style={{ fontSize: 12, color: "white" }}>{game.type}</Text>
      </View>
      {/* Second part */}
      <View
        style={{
          flex: 3,
          borderLeftWidth: 1,
          paddingLeft: 10,
          borderColor: "gray",
        }}
      >
        <Text style={{ fontSize: 18, color: "white" }}>{game.title}</Text>
        <Text style={{ fontSize: 10, color: "white" }}>{game.description}</Text>
      </View>

      {/* Third part */}
      <View
        style={{
          flex: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 15,
            padding: 5,
            borderColor:
              colorStatus[game.status.replace(" ", "").toLowerCase()]
                .backgroundColor,

            borderWidth: 1,
            borderRadius: 10,
            width: Dimensions.get("window").width / 3.5,
            color: "white",
          }}
        >
          {game.status}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
