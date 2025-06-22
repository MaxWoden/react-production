import { getUserAuthData } from "@/entities/User";
import Cancel from "@/shared/assets/icons/cancel.svg";
import Confirm from "@/shared/assets/icons/confirm.svg";
import Edit from "@/shared/assets/icons/edit.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "@/shared/ui/deprecated/Button";
import { HStack } from "@/shared/ui/redesigned/Stack";
import { Text } from "@/shared/ui/deprecated/Text";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";
import { profileActions } from "../../model/slice/profileSlice";
import classes from "./EditableProfileCardHeader.module.scss";
import { getProfileData } from "../../model/selectors/getProfile";

interface EditableProfileCardHeaderProps {
  className?: string;
  isLoading?: boolean;
  readonly?: boolean;
}

export const EditableProfileCardHeader = (
  props: EditableProfileCardHeaderProps
) => {
  const { className, isLoading, readonly } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const userData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
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

  const title = isLoading
    ? t("Профиль")
    : canEdit
    ? t("Ваш профиль")
    : `${t("Профиль пользоватея")} ${profileData?.username}`;

  return (
    <HStack justify="between" max className={className}>
      <HStack gap="16">
        <Text title={title} />
      </HStack>

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
