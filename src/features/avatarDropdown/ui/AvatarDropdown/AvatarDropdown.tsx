import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from "@/entities/User";
import {
  getRouteAdmin,
  getRouteProfile,
  getRouteSettings,
} from "@/shared/const/router";
import { ToggleFeatures } from "@/shared/features";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Avatar as AvatarDepreacated } from "@/shared/ui/deprecated/Avatar";
import { Avatar } from "@/shared/ui/redesigned/Avatar";
import { Dropdown as DropdownDeprecated } from "@/shared/ui/deprecated/Popups";
import { Dropdown } from "@/shared/ui/redesigned/Popups";
import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const isAdminPanelAvailable = isAdmin || isManager;

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (!authData?.id) {
    return null;
  }

  const items = useMemo(
    () => [
      ...(isAdminPanelAvailable
        ? [
            {
              content: t("Админка"),
              href: getRouteAdmin(),
            },
          ]
        : []),
      {
        content: t("Настройки"),
        href: getRouteSettings(),
      },
      {
        content: t("Профиль"),
        href: getRouteProfile(authData.id),
      },
      { content: t("Выйти"), onClick: onLogout },
    ],
    [authData.id, isAdminPanelAvailable, onLogout, t]
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <DropdownDeprecated
          className={className}
          items={items}
          trigger={<AvatarDepreacated size={50} src={authData?.avatar} />}
        />
      }
      on={
        <Dropdown
          direction="bottom left"
          className={className}
          items={items}
          trigger={<Avatar size={40} src={authData?.avatar} />}
        />
      }
    />
  );
});
