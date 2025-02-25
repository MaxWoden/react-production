import { profileReducer } from "entities/Profile";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const initialReducers: ReducersList = { profile: profileReducer };

const ProfilePage = memo(() => {
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div>{t("Страница профиля")}</div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
