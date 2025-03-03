import { RoutePath } from "shared/config/routerConfig/routerConfig";
import AboutIcon from "shared/assets/icons/about.svg";
import HomeIcon from "shared/assets/icons/home.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
import Blog from "shared/assets/icons/blog.svg";

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
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
  {
    path: RoutePath.profile,
    text: "Профиль",
    Icon: ProfileIcon,
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    text: "Блог",
    Icon: Blog,
    authOnly: true,
  },
];
