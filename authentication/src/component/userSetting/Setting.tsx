import SettingCard from "./SettingCard";

const Setting = () => {
    return (
        <div className="mt-16 flex flex-wrap w-full items-center">
            <SettingCard clickName={"Edit Account"} routeLink={"/"}/>
            <SettingCard clickName={"Change Password"} routeLink={"/"}/>
            <SettingCard clickName={"Delete Account"} routeLink={"/"}/>
            <SettingCard clickName={"Logout"} routeLink={"/"}/>
        </div>
    );
}
export default Setting