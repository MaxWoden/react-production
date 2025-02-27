import { CountrySelect } from "entities/Country";
import { Currency } from "entities/Currency";
import { CurrencySelect } from "entities/Currency/ui/CurrencySelect/CurrencySelect";
import { useTranslation } from "react-i18next";
import { Country } from "entities/Country";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Input } from "shared/ui/Input/Input";
import { Loader } from "shared/ui/Loader/Loader";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Profile } from "../../model/types/profile";
import classes from "./ProfileCard.module.scss";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (value?: Currency) => void;
  onChangeCountry?: (value?: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div
        className={classNames(classes.ProfileCard, {}, [
          classes.loading,
          className,
        ])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={classNames(classes.ProfileCard, {}, [
          classes.error,
          className,
        ])}
      >
        <Text
          align={TextAlign.CENTER}
          theme={TextTheme.ERROR}
          title={t("Произошла ошибка при загрузке страницы")}
          text={t("Попробуйте обновить страницу")}
        />
      </div>
    );
  }

  const mods: Mods = {
    [classes.editing]: !readonly,
  };

  return (
    <div className={classNames(classes.ProfileCard, mods, [className])}>
      <div className={classes.data}>
        {data?.avatar && (
          <div className={classes.avatarWrapper}>
            <Avatar alt={"avatar"} src={data?.avatar} />
          </div>
        )}
        <Input
          readonly={readonly}
          onChange={onChangeFirstname}
          className={classes.input}
          value={data?.firstname}
          placeholder={t("Ваше имя")}
        />
        <Input
          readonly={readonly}
          onChange={onChangeLastname}
          className={classes.input}
          value={data?.lastname}
          placeholder={t("Ваша фамилия")}
        />
        <Input
          readonly={readonly}
          onChange={onChangeAge}
          className={classes.input}
          value={String(data?.age)}
          placeholder={t("Ваш возраст")}
        />
        <Input
          readonly={readonly}
          onChange={onChangeCity}
          className={classes.input}
          value={data?.city}
          placeholder={t("Ваш город")}
        />
        <Input
          readonly={readonly}
          onChange={onChangeUsername}
          className={classes.input}
          value={String(data?.username)}
          placeholder={t("Ваш имя пользователя")}
        />
        <Input
          readonly={readonly}
          onChange={onChangeAvatar}
          className={classes.input}
          value={String(data?.avatar)}
          placeholder={t("Введите ссылку на аватар")}
        />
        <CountrySelect
          readonly={readonly}
          value={data?.country}
          className={classes.input}
          onChange={onChangeCountry}
        />
        <CurrencySelect
          readonly={readonly}
          value={data?.currency}
          className={classes.input}
          onChange={onChangeCurrency}
        />
      </div>
    </div>
  );
};
