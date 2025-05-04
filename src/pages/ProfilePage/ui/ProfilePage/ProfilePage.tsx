import { EditableProfileCard } from "@/features/editableProfileCard";
import { memo } from "react";
import { useParams } from "react-router-dom";
import { Page } from "@/widgets/Page";
import { ProfileRating } from "@/features/profileRating";
import { VStack } from "@/shared/ui/Stack";

const ProfilePage = () => {
  const { id: profileId } = useParams<{ id: string }>();

  if (!profileId) {
    return null;
  }

  return (
    <Page>
      <VStack max gap="32">
        <EditableProfileCard profieId={profileId} />
        <ProfileRating profileId={profileId} />
      </VStack>
    </Page>
  );
};

export default memo(ProfilePage);
