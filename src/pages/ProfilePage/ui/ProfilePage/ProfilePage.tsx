import { profileReducer } from "entities/Profile";
import { fetchProfileData } from "entities/Profile/index";
import { ProfileCard } from "entities/User";
import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

const initialReducers: ReducersList = { profile: profileReducer };

const ProfilePage = memo(() => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <ProfileCard />
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
