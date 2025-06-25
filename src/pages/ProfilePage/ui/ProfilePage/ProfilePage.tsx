import { EditableProfileCard } from "@/features/editableProfileCard";
import { ProfileAverageRating, ProfileRating } from "@/features/profileRating";
import { ToggleFeatures } from "@/shared/features";
import { Text } from "@/shared/ui/deprecated/Text";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { Page } from "@/widgets/Page";
import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { t } = useTranslation();
  const { id: profileId } = useParams<{ id: string }>();
  const [profileNotFound, setProfileNotFound] = useState(false);

  if (!profileId) {
    return null;
  }

  return (
    <Page data-testid="ProfilePage">
      <VStack max gap="32">
        {!profileNotFound && (
          <ToggleFeatures
            on={<ProfileAverageRating profileId={profileId} />}
            off={<Text text={t("Оценка профиля скоро будет доступна")} />}
            feature={"isProfileRatingEnabled"}
          />
        )}
        <EditableProfileCard
          setProfileNotFound={setProfileNotFound}
          profileId={profileId}
        />
        {!profileNotFound && (
          <ToggleFeatures
            on={<ProfileRating profileId={profileId} />}
            off={<Text text={t("Оценка профиля скоро будет доступна")} />}
            feature={"isProfileRatingEnabled"}
          />
        )}
      </VStack>
    </Page>
  );
};

export default memo(ProfilePage);
