import React, { useState } from "react";
import SettingHeader from "../../components/settings/NavSettings";
import { Box, Tooltip, Typography } from "@mui/material";
import CardSettings from "../../components/settings/CardSettings";
import FormSetting from "../../components/settings/FormSetting";
import NotificationSetting from "../../components/settings/NotificationSetting";
import ProfileSett from "../../components/settings/ProfileSett";
import UserManagement from "../../components/UserManangement/UserManagement";

const notificationOptions = {
  title: "Notifications",
  description: `Get notified about new messages and server updates.`,
};

const GeneralSetting = () => {
  const [visible, setVisible] = useState(false);
  const [visibleConfirm, setVisibleConfirm] = useState(false);

  const handleVisibleSwitch = function () {
    setVisible(!visible);
  };
  const handleVisibleSwitchConfirm = function () {
    setVisibleConfirm(!visibleConfirm);
  };
  return (
    <section>
      <Box>
        <SettingHeader title={"Settings"} />
        <Box className="p-3 border-b-1">
          <h3 className="text-xl font-medium mb-2">Personal Info</h3>
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: ".8rem",
              color: "lightSlategray",
            }}
          >
            Update your profile, contact, details and preferences to suit your
            experience
          </Typography>
        </Box>
        <Box className=" flex items-start flex-col con-flex justify-between gap-12 md:flex-row sub_content my-5 max-[560px]:px-9">
          <Box className="flex-1 w-full  ">
            <ProfileSett />

            <Box sx={{ my: "2rem" }}>
              <Box>
                <FormSetting
                  visible={visible}
                  visibleConfirm={visibleConfirm}
                  handleVisibleSwitch={handleVisibleSwitch}
                  handleVisibleSwitchConfirm={handleVisibleSwitchConfirm}
                />

                <h3 className="font-medium border-b-1 pb-3">Notification</h3>
                <NotificationSetting />

                <h3 className="font-medium border-b-1 pb-3 mt-10">
                  User management and Permissions
                </h3>
                <UserManagement />
              </Box>
            </Box>
          </Box>
          {/* ANOTHER CONTENT */}
          <CardSettings />
          {/* ANOTHER CONTENT */}
        </Box>
      </Box>
    </section>
  );
};

export default GeneralSetting;
