import Desktop from "../Components/Toolbar/Header/Desktop/Desktop";
import Mobile from "../Components/Toolbar/Header/Mobile/Mobile";
import SideDrawer from "../Components/Toolbar/Header/SideDrawer/SideDrawer";

function Layout() {
    return (
        <>
            <Desktop />
            <Mobile />
            <SideDrawer />
        </>
    );
}

export default Layout;
