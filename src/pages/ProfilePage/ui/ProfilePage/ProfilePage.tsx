import { EditableProfileCard } from "@/features/editableProfileCard";
import { ProfileRating } from "@/features/profileRating";
import { ProfileAverageRating } from "@/features/profileRating";
import { getFeatureFlags } from "@/shared/features";
import { VStack } from "@/shared/ui/Stack";
import { Page } from "@/widgets/Page";
import { memo, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { id: profileId } = useMemo(() => useParams<{ id: string }>(), []);
  const [profileNotFound, setProfileNotFound] = useState(false);
  const isProfileRatingEnabled = getFeatureFlags("isProfileRatingEnabled");
  const showProfileRating = !profileNotFound && isProfileRatingEnabled;

  if (!profileId) {
    return null;
  }

  return (
    <Page data-testid="ProfilePage">
      <VStack max gap="32">
        {showProfileRating && <ProfileAverageRating profileId={profileId} />}
        <EditableProfileCard
          setProfileNotFound={setProfileNotFound}
          profileId={profileId}
        />
        {showProfileRating && <ProfileRating profileId={profileId} />}
      </VStack>
    </Page>
  );
};

export default memo(ProfilePage);
