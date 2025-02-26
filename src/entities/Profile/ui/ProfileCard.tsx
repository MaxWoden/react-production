import { useTranslation } from "react-i18next";
import classes from "./ProfileCard.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useSelector } from "react-redux";
import { getProfileData } from "../model/selectors/getProfileData/getProfileData";
import { getProfileError } from "../model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation("profile");
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={classNames(classes.ProfileCard, {}, [className])}>
      <div className={classes.header}>
        <Text title={t("Профиль")} />
        <Button className={classes.editBtn} theme={ButtonTheme.OUTLINE}>
          {t("Редактировать")}
        </Button>
      </div>
      <div className={classes.data}>
        <Input
          className={classes.input}
          value={data?.firstname}
          placeholder={t("Ваше имя")}
        />
        <Input
          className={classes.input}
          value={data?.lastname}
          placeholder={t("Ваша фамилия")}
        />
      </div>
    </div>
  );
};
