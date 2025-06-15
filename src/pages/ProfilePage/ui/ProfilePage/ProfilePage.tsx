import { EditableProfileCard } from "@/features/editableProfileCard";
import { ProfileAverageRating, ProfileRating } from "@/features/profileRating";
import { VStack } from "@/shared/ui/Stack";
import { Page } from "@/widgets/Page";
import { memo, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { id: profileId } = useMemo(() => useParams<{ id: string }>(), []);
  const [profileNotFound, setProfileNotFound] = useState(false);

  if (!profileId) {
    return null;
  }

  const profileAverageRating = <ProfileAverageRating profileId={profileId} />;
  const profileRating = <ProfileRating profileId={profileId} />;

  return (
    <Page data-testid="ProfilePage">
      <VStack max gap="32">
        {!profileNotFound && profileAverageRating}
        <EditableProfileCard
          setProfileNotFound={setProfileNotFound}
          profileId={profileId}
        />
        {!profileNotFound && profileRating}
      </VStack>
    </Page>
  );
};

export default memo(ProfilePage);
