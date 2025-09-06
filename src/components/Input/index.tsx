import { TextInput, TextInputProps } from "react-native";
import { styles } from "./style";

export const Input = ({ ...rest }: TextInputProps) => {
  return (
    <TextInput style={styles.input} placeholderTextColor="#6F6F7A" {...rest} />
  );
};
