import { EditableProfileCard } from "@/features/editableProfileCard";
import { ProfileRating } from "@/features/profileRating";
import ProfileAverageRating from "@/features/profileRating/ui/ProfileAverageRating/ProfileAverageRating";
import { VStack } from "@/shared/ui/Stack";
import { Page } from "@/widgets/Page";
import { memo, useState } from "react";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { id: profileId } = useParams<{ id: string }>();
  const [profileNotFound, setProfileNotFound] = useState(false);

  if (!profileId) {
    return null;
  }

  return (
    <Page>
      <VStack max gap="32">
        {!profileNotFound && <ProfileAverageRating profileId={profileId} />}
        <EditableProfileCard
          setProfileNotFound={setProfileNotFound}
          profileId={profileId}
        />
        {!profileNotFound && <ProfileRating profileId={profileId} />}
      </VStack>
    </Page>
  );
};

export default memo(ProfilePage);
