import React from "react";
import {
    CssBaseline,
    makeStyles,
} from "@material-ui/core";
// import theme from "../styles/theme";
import SiteHeader from "../components/Header/SiteHeader";

const styles = makeStyles({
    root: {
        display: "flex",
    },
    content: {
        flexGrow: 1,
        height: "100vh",
        overflowX: "hidden",
    },
    // appBarSpacer: theme.mixins.toolbar,
    // container: {
    //     paddingTop: theme.spacing(1),
    //     paddingBottom: theme.spacing(4),
    // },
    alertContainer: {
        marginBottom: 10,
    },
});

const SiteLayout = ({ children }) => {
    const classes = styles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <SiteHeader />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                {children}
            </main>
        </div>
    );
}

export default SiteLayout;
