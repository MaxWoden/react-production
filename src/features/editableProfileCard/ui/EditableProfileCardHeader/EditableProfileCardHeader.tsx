import { getUserAuthData } from "@/entities/User";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Cancel from "@/shared/assets/icons/cancel.svg";
import Confirm from "@/shared/assets/icons/confirm.svg";
import Edit from "@/shared/assets/icons/edit.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { HStack } from "@/shared/ui/Stack/HStack/HStack";
import { Text } from "@/shared/ui/Text/Text";
import {
  getProfileData,
  getProfileIsLoading,
  getProfileReadonly,
} from "../../model/selectors/getProfile";
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";
import { profileActions } from "../../model/slice/profileSlice";
import classes from "./EditableProfileCardHeader.module.scss";

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = (
  props: EditableProfileCardHeaderProps
) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const isLoading = useSelector(getProfileIsLoading);
  const profileData = useSelector(getProfileData);
  const userData = useSelector(getUserAuthData);
  const readonly = useSelector(getProfileReadonly);
  const canEdit = profileData?.id === userData?.id;

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
    <HStack justify="between" max className={className}>
      <Text title={t(canEdit ? "Ваш профиль" : "Профиль")} />
      {canEdit &&
        (readonly ? (
          <Button
            disabled={isLoading}
            data-testid="EditableProfileCardHeader.EditButton"
            onClick={onEdit}
            theme={ButtonTheme.OUTLINE}
          >
            <HStack gap="16">
              <Edit className={classNames(classes.icon, {}, [classes.edit])} />
              {t("Редактировать")}
            </HStack>
          </Button>
        ) : (
          <HStack className={classes.editBlock} gap="32">
            <Button
              disabled={isLoading}
              data-testid="EditableProfileCardHeader.SaveButton"
              onClick={onSaveEdit}
              theme={ButtonTheme.OUTLINE_GREEN}
            >
              <HStack gap="16">
                <Confirm
                  className={classNames(classes.icon, {}, [classes.confirm])}
                />
                {t("Сохранить")}
              </HStack>
            </Button>
            <Button
              disabled={isLoading}
              data-testid="EditableProfileCardHeader.CancelButton"
              onClick={onCancelEdit}
              theme={ButtonTheme.OUTLINE_RED}
            >
              <HStack gap="16">
                <Cancel
                  className={classNames(classes.icon, {}, [classes.cancel])}
                />
                {t("Отменить")}
              </HStack>
            </Button>
          </HStack>
        ))}
    </HStack>
  );
};
