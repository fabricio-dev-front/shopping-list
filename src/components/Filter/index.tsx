import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

import { styles } from "./style";
import { FilterStatus } from "@/types/FilterStatus";

type FilterProps = TouchableOpacityProps & {
  status: FilterStatus;
  isActive: boolean;
};

export const Filter = ({ status, isActive, ...rest }: FilterProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, { opacity: isActive ? 1 : 0.3 }]}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={styles.title}>
        {status === FilterStatus.DONE ? "Comprados" : "Pendentes"}
      </Text>
    </TouchableOpacity>
  );
};
