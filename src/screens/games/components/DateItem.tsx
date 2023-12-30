import { Text, TouchableOpacity, StyleSheet } from "react-native";
import IDateItem from "../models/DateItemModel";

interface IProps {
  dateItem: IDateItem;
  handlePress: (id: number) => void;
}

export default function DateItem({ dateItem, handlePress }: IProps) {
  const styles = StyleSheet.create({
    dateContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 60,
      width: 60,
      backgroundColor: "#292929",
      borderRadius: 10,
      padding: 5,
      marginLeft: 4,
    },
  });
  return (
    <TouchableOpacity
      key={dateItem.id}
      style={[
        styles.dateContainer,
        dateItem.isSelected && {
          backgroundColor: "#BEEA00",
        },
      ]}
      onPress={() => handlePress(dateItem.id)}
    >
      <Text
        style={{
          color: dateItem.isSelected ? "black" : "white",
          fontWeight: "bold",
        }}
      >
        {dateItem.dayWeek}
      </Text>
      <Text
        style={{
          color: dateItem.isSelected ? "black" : "white",
          fontWeight: "bold",
        }}
      >
        {dateItem.day}
      </Text>
    </TouchableOpacity>
  );
}
