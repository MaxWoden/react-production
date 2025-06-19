import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from "@/entities/User";
import { getRouteAdmin, getRouteProfile } from "@/shared/const/router";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Avatar } from "@/shared/ui/deprecated/Avatar";
import { Dropdown } from "@/shared/ui/deprecated/Popups";
import { memo, useCallback } from "react";
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

  return (
    <Dropdown
      className={className}
      items={[
        ...(isAdminPanelAvailable
          ? [
              {
                content: t("Админка"),
                href: getRouteAdmin(),
              },
            ]
          : []),
        {
          content: t("Профиль"),
          href: getRouteProfile(authData.id),
        },
        { content: t("Выйти"), onClick: onLogout },
      ]}
      trigger={<Avatar size={50} src={authData?.avatar} />}
    />
  );
});
