import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { ProfileCard } from "@/entities/Profile";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffects } from "@/shared/lib/hooks/useInitialEffects/useInitialsEffects";
import { VStack } from "@/shared/ui/Stack";
import { Text, TextTheme } from "@/shared/ui/Text/Text";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
} from "../../model/selectors/getProfile";
import { fetchProfileDataById } from "../../model/services/fetchProfileDataById/fetchProfileDataById";
import { profileActions, profileReducer } from "../../model/slice/profileSlice";

import { ValidateProfileErrors } from "../../model/consts/consts";
import { EditableProfileCardHeader } from "../EditableProfileCardHeader/EditableProfileCardHeader";

interface EditableProfileCardProps {
  className?: string;
  profileId: string;
  setProfileNotFound?: (value: boolean) => void;
}

const reducers: ReducersList = { profile: profileReducer };

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, profileId, setProfileNotFound } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const form = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  if (error) {
    setProfileNotFound?.(true);
  }

  const validateErrorTranslation: Record<ValidateProfileErrors, string> = {
    [ValidateProfileErrors.INCORRECT_AGE]: t("Неккоректный возраст"),
    [ValidateProfileErrors.INCORRECT_CITY]: t("Неккоректный регион"),
    [ValidateProfileErrors.INCORRECT_USER_DATA]: t("Имя и фамилия обязательны"),
    [ValidateProfileErrors.NO_DATA]: t("Данные не указаны"),
    [ValidateProfileErrors.SERVER_ERROR]: t("Ошибка сервера"),
  };

  useInitialEffects(() => dispatch(fetchProfileDataById(profileId)));

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ firstname: value || "" }));
    },
    [dispatch]
  );

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || "" }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value) | 0 }));
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || "" }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || "" }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || "" }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (value?: Currency) => {
      dispatch(profileActions.updateProfile({ currency: value }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (value?: Country) => {
      dispatch(profileActions.updateProfile({ country: value }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack
        gap="32"
        max
        className={className}
        data-testid="EditableProfileCard"
      >
        {!error && (
          <EditableProfileCardHeader
            isLoading={isLoading}
            readonly={readonly}
          />
        )}
        {validateErrors?.length &&
          validateErrors.map((error: ValidateProfileErrors) => (
            <Text
              key={error}
              theme={TextTheme.ERROR}
              text={validateErrorTranslation[error]}
              data-testid="EditableProfileCard.Error"
            />
          ))}

        <ProfileCard
          data={form}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </VStack>
    </DynamicModuleLoader>
  );
});
