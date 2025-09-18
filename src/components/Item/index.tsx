import { Text, TouchableOpacity, View } from "react-native";
import { Trash2 } from "lucide-react-native";

import { StatusIcon } from "@/components/StatusIcon";
import { FilterStatus } from "@/types/FilterStatus";

import { styles } from "./style";

type ItemData = {
  status: FilterStatus;
  description: string;
};

type Props = {
  data: ItemData;
  onStatus: () => void;
  onRemove: () => void;
};

export const Item = ({ data, onStatus, onRemove }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={onStatus}>
        <StatusIcon status={data.status} />
      </TouchableOpacity>

      <Text style={styles.description}>{data.description}</Text>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onRemove}
        style={{
          paddingHorizontal: 14,
          height: "100%",
        }}
      >
        <Trash2 size={18} />
      </TouchableOpacity>
    </View>
  );
};
