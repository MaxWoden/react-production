import { EditableProfileCard } from "features/editableProfileCard";
import { memo } from "react";
import { useParams } from "react-router-dom";
import { Page } from "widgets/Page";

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Page>
      <EditableProfileCard id={id} />
    </Page>
  );
};

export default memo(ProfilePage);
