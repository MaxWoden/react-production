import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import Cancel from "shared/assets/icons/cancel.svg";
import Confirm from "shared/assets/icons/confirm.svg";
import Edit from "shared/assets/icons/edit.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";

import {
  getProfileData,
  profileActions,
  updateProfileData,
} from "entities/Profile";
import { getUserAuthData } from "entities/User";
import { useSelector } from "react-redux";
import classes from "./ProfilePageHeader.module.scss";

interface ProfilePageHeaderProps {
  className?: string;
  readonly?: boolean;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { t } = useTranslation();
  const { className, readonly } = props;
  const dispatch = useAppDispatch();

  const profileData = useSelector(getProfileData);
  const userData = useSelector(getUserAuthData);
  const ownProfile = profileData?.id === userData?.id;

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onSaveEdit = useCallback(() => {
    const errors = dispatch(updateProfileData());
    const isValid = !errors.then((data) => data?.payload);
    isValid && dispatch(profileActions.saveEdit());
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  return (
    <div className={classNames(classes.ProfilePageHeader, {}, [className])}>
      <Text title={t("Профиль")} />
      {ownProfile && (
        <div className={classes.editBlock}>
          {readonly ? (
            <Button
              onClick={onEdit}
              className={classes.editBtn}
              theme={ButtonTheme.OUTLINE}
            >
              <Edit className={classNames(classes.icon, {}, [classes.edit])} />
              {t("Редактировать")}
            </Button>
          ) : (
            <>
              {" "}
              <Button
                onClick={onSaveEdit}
                theme={ButtonTheme.OUTLINE_GREEN}
                className={classes.editBtn}
              >
                <Confirm
                  className={classNames(classes.icon, {}, [classes.confirm])}
                />
                {t("Сохранить")}
              </Button>
              <Button
                onClick={onCancelEdit}
                theme={ButtonTheme.OUTLINE_RED}
                className={classes.editBtn}
              >
                <Cancel
                  className={classNames(classes.icon, {}, [classes.cancel])}
                />
                {t("Отменить")}
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};
