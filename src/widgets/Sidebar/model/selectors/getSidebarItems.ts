import { getUserAuthData } from "@/entities/User";
import AboutIconDeprecated from "@/shared/assets/icons/about-deprecated.svg";
import ArticleIconDeprecated from "@/shared/assets/icons/article-deprecated.svg";
import ArticleIcon from "@/shared/assets/icons/article.svg";
import ProfileIcon from "@/shared/assets/icons/avatar.svg";
import MainIcon from "@/shared/assets/icons/home.svg";
import AboutIcon from "@/shared/assets/icons/Info.svg";
import MainIconDeprecated from "@/shared/assets/icons/home-deprecated.svg";
import ProfileIconDeprecated from "@/shared/assets/icons/profile-deprecated.svg";
import { createSelector } from "@reduxjs/toolkit";

import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from "@/shared/const/router";
import { toggleFeatures } from "@/shared/features";
import { SidebarItemType } from "../types/sidebar";

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      icon: toggleFeatures({
        name: "isAppRedesigned",
        off: () => MainIconDeprecated,
        on: () => MainIcon,
      }),
      text: "Главная",
    },
    {
      path: getRouteAbout(),
      icon: toggleFeatures({
        name: "isAppRedesigned",
        off: () => AboutIconDeprecated,
        on: () => AboutIcon,
      }),
      text: "О сайте",
    },
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: getRouteProfile(userData.id),
        icon: toggleFeatures({
          name: "isAppRedesigned",
          off: () => ProfileIconDeprecated,
          on: () => ProfileIcon,
        }),
        text: "Профиль",
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        icon: toggleFeatures({
          name: "isAppRedesigned",
          off: () => ArticleIconDeprecated,
          on: () => ArticleIcon,
        }),
        text: "Статьи",
        authOnly: true,
      }
    );
  }

  return sidebarItemsList;
});
