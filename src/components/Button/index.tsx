import { TouchableOpacity, Text } from "react-native";
import { styles } from "./style";

interface ButtonProps {
  text: string;
  activeOpacity?: number;
}

export const Button = ({ text, activeOpacity = 0.7 }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={activeOpacity}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
