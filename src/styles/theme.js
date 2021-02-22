import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#FD5BCD",
            light: "#C166FA",
            dark: "#D352E3",
            normalText: "#fff",
            lightText: "#A0A0A0",
            darkText: "##000",
        },
        secondary: {
            main: "#8452E3",
            dark: "#675BFD",
        },
        default: {
            main: "#fff",
            dark: "#000",
        },
    },
});

theme.overrides = {
    MuiListItemIcon: {
        root: {
            minWidth: 36,
        },
    },
    MuiFormControl: {
        marginNormal: {
            marginTop: 0,
            marginBottom: theme.spacing(3),
        },
    },
    MuiButton: {
        root: {
            textTransform: "capitalize",
        },
        containedPrimary: {
            backgroundColor: theme.palette.primary.main,
            margin: theme.spacing(0, 0, 0),
        },
    },
    MuiAppBar: {
        root: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
    },
    MuiSelect: {
        select: {
            transition: "none !important",
        },
    },
};

export default theme;
