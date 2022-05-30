import { StyleSheet } from "react-native";
import { YellowBox } from "react-native-web";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
    },
    top: {
        backgroundColor: COLORS.primary,
        padding: 10,
        alignItems: 'center',
    },
    searchBox: {
        flexDirection: 'row',
        width: SIZES.width - 20,
        backgroundColor: COLORS.white,
        padding: 10,
        borderRadius: 5,
    },
    search: {
        marginLeft: 10,
        color: COLORS.title,
    },
});

export default styles;