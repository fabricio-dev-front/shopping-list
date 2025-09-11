import { FilterStatus } from "@/types/FilterStatus";
import { CircleDashed, CircleCheck } from "lucide-react-native";

export const StatusIcon = ({ status }: { status: FilterStatus }) => {
  return status === FilterStatus.DONE ? (
    <CircleCheck size={20} color="#2c46b1" />
  ) : (
    <CircleDashed size={20} color="#6F6F7A" />
  );
};
