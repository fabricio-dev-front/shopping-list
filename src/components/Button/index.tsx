import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { styles } from "./style";

type ButtonProps = TouchableOpacityProps & {
  text?: string;
};

export const Button = ({ text = "props", ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
