import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import AboutIcon from "shared/assets/icons/about.svg";
import Blog from "shared/assets/icons/blog.svg";
import HomeIcon from "shared/assets/icons/home.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import { SidebarItemType } from "../types/sidebar";

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: RoutePath.main,
      text: "Главная",
      Icon: HomeIcon,
    },
    {
      path: RoutePath.about,
      text: "О нас",
      Icon: AboutIcon,
    },
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: RoutePath.profile + userData.id,
        text: "Профиль",
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: `${RoutePath.articles}/1`,
        text: "Блог",
        Icon: Blog,
        authOnly: true,
      }
    );
  }

  return sidebarItemsList;
});
