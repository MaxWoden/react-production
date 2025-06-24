import { getUserAuthData } from "@/entities/User";
import Cancel from "@/shared/assets/icons/cancel.svg";
import Confirm from "@/shared/assets/icons/confirm.svg";
import Edit from "@/shared/assets/icons/edit.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from "@/shared/ui/deprecated/Button";
import { Button } from "@/shared/ui/redesigned/Button";
import { HStack } from "@/shared/ui/redesigned/Stack";
import { Text as TextDeprecated } from "@/shared/ui/deprecated/Text";
import { Text } from "@/shared/ui/redesigned/Text";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";
import { profileActions } from "../../model/slice/profileSlice";
import classes from "./EditableProfileCardHeader.module.scss";
import { getProfileData } from "../../model/selectors/getProfile";
import { ToggleFeatures } from "@/shared/features";
import { Card } from "@/shared/ui/redesigned/Card";

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
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <HStack justify="between" max className={className}>
          <HStack gap="16">
            <TextDeprecated title={title} />
          </HStack>

          {canEdit &&
            (readonly ? (
              <ButtonDeprecated
                disabled={isLoading}
                data-testid="EditableProfileCardHeader.EditButton"
                onClick={onEdit}
                theme={ButtonTheme.OUTLINE}
              >
                <HStack gap="16">
                  <Edit
                    className={classNames(classes.icon, {}, [classes.edit])}
                  />
                  {t("Редактировать")}
                </HStack>
              </ButtonDeprecated>
            ) : (
              <HStack className={classes.editBlock} gap="32">
                <ButtonDeprecated
                  disabled={isLoading}
                  data-testid="EditableProfileCardHeader.SaveButton"
                  onClick={onSaveEdit}
                  theme={ButtonTheme.OUTLINE_GREEN}
                >
                  <HStack gap="16">
                    <Confirm
                      className={classNames(classes.icon, {}, [
                        classes.confirm,
                      ])}
                    />
                    {t("Сохранить")}
                  </HStack>
                </ButtonDeprecated>
                <ButtonDeprecated
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
                </ButtonDeprecated>
              </HStack>
            ))}
        </HStack>
      }
      on={
        <Card border="partial" padding="24" max>
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
                  variant="outline"
                >
                  <HStack gap="16">
                    <Edit
                      className={classNames(classes.icon, {}, [classes.edit])}
                    />
                    {t("Редактировать")}
                  </HStack>
                </Button>
              ) : (
                <HStack className={classes.editBlock} gap="32">
                  <Button
                    disabled={isLoading}
                    data-testid="EditableProfileCardHeader.SaveButton"
                    onClick={onSaveEdit}
                    variant="outline"
                    color="success"
                  >
                    <HStack gap="16">
                      <Confirm
                        className={classNames(classes.icon, {}, [
                          classes.confirm,
                        ])}
                      />
                      {t("Сохранить")}
                    </HStack>
                  </Button>
                  <Button
                    disabled={isLoading}
                    data-testid="EditableProfileCardHeader.CancelButton"
                    onClick={onCancelEdit}
                    variant="outline"
                    color="error"
                  >
                    <HStack gap="16">
                      <Cancel
                        className={classNames(classes.icon, {}, [
                          classes.cancel,
                        ])}
                      />
                      {t("Отменить")}
                    </HStack>
                  </Button>
                </HStack>
              ))}
          </HStack>
        </Card>
      }
    />
  );
};
