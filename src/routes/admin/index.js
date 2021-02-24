import React from "react";
// import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import ActiveUsers from "../../pages/activeUsers/ActiveUsers";
import BlockedUsers from "../../pages/blockedUsers/BlockedUsers";
import AdminDashboard from "../../pages/dashboard/AdminDashboard";
import ExpiredUsers from "../../pages/expiredUsers/ExpiredUsers";
import PendingRegistration from "../../pages/pendingRegistration/PendingRegistration";

function AdminRoutes() {
    // const { user: { role } = {} } = useSelector((state) => state.auth);
    // const combinePaths = (parent, child) =>
    //     `${parent.replace(/\/$/, "")}/${child.replace(/^\//, "")}`;

    // const buildPaths = (navigation, parentPath = "") =>
    //     navigation.map((route) => {
    //         const path = combinePaths(parentPath, route.path);

    //         return {
    //             ...route,
    //             path,
    //             ...(route.routes && { routes: buildPaths(route.routes, path) }),
    //         };
    //     });

    const routes = [
        {
            exact: true,
            path: "/admin",
            component: AdminDashboard,
        },
        {
            path: "/admin/pending-registration",
            component: PendingRegistration,
        },
        {
            path: "/admin/active-customers",
            component: ActiveUsers,
        },
        {
            path: "/admin/blocked-customers",
            component: BlockedUsers,
        },
        {
            path: "/admin/expired-customers",
            component: ExpiredUsers,
        },
    ];

    // const flattenRoutes = (routes) =>
    //     routes
    //         .map((route) => [route.routes ? flattenRoutes(route.routes) : [], route])
    //         .flat(Infinity);

    return (
        <>
            <Switch>
                {
                    routes.map(({ exact, path, component }, index) => (
                        <Route key={index} path={path} exact component={component} />
                    ))
                }
            </Switch>
        </>
    );
}

export default AdminRoutes;
