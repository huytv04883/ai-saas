import { useUser } from "@clerk/nextjs";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const UserAvartar = () => {
  const { user } = useUser();
  return (
    <Avatar className="h-8 w-8 rounded-full border border-solid border-green-600">
      <AvatarImage src={user?.profileImageUrl} />
      <AvatarFallback>
        {user?.firstName?.charAt(0)}
        {user?.lastName?.charAt(0)}
      </AvatarFallback>
    </Avatar>
  );
};

export const BotAvartar = () => {
  return (
    <Avatar className="h-8 w-8 rounded-full border border-solid border-yellow-500 ">
      <AvatarImage className="p-1" src="/logo.jpg" />
    </Avatar>
  );
};
