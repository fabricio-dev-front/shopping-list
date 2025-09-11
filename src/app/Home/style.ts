import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 70,
    backgroundColor: "#000",
  },

  logo: {
    height: 34,
    width: 134,
  },

  form: {
    width: "100%",
    paddingHorizontal: 20,
    gap: 15,
    marginTop: 30,
  },
  content: {
    flex: 1,
    width: "100%",
    marginTop: 30,
    paddingTop: 30,
    paddingHorizontal: 24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: "#1A1A1A",
  },
  headerFilters: {
    width: "100%",
    flexDirection: "row",
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    paddingBottom: 12,
  },
  buttonClear: {
    marginLeft: "auto",
  },
  clearText: {
    fontSize: 14,
    color: "#828282",
    fontWeight: "600",
  },
});
