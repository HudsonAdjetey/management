import React from "react";
import ControlledSwitches from "../Props/CheckLabel";

const NotificationSetting = () => {
  return (
    <div>
      <p className="flex items-center gap-3 bg-red-50 my-5 p-9 rounded-md">
        <i className="bi bi-bell-fill text-red-600 text-[1.2rem]"></i>
        <span className="text-[1rem] font-medium">
          Deactivating all notification settings may cause you to loose track of
          your activities
        </span>
      </p>

      <div className="bg-gray-100 p-3 my-3 rounded-md ">
        <p className="flex items-center justify-between">
          <span className="font-medium ">Receive All notifications</span>
          <ControlledSwitches />
        </p>
        <span className="text-sm font-medium text-gray-600">
          Get notified about new messages and software updates
        </span>
      </div>
      <div className="bg-gray-100 p-3 my-3 rounded-md ">
        <p className="flex items-center justify-between">
          <span className="font-medium ">New registration</span>
          <ControlledSwitches />
        </p>
        <span className="text-sm font-medium text-gray-600">
          Get notified on registration activities
        </span>
      </div>
    </div>
  );
};

export default NotificationSetting;
