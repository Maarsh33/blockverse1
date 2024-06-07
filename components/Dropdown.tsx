import React from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

type DropdownProps = {
  items: string[];
  onSelect: (value: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ items, onSelect }) => {
  const [selectedValue, setSelectedValue] = React.useState("");

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue) => {
          setSelectedValue(itemValue);
          onSelect(itemValue);
        }}
      >
        {items.map((item) => (
          <Picker.Item key={item} label={item} value={item} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  picker: {
    width: "100%",
  },
});

export default Dropdown;
