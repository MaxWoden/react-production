import { Country, CountrySelect } from "@/entities/Country";
import { Currency, CurrencySelect } from "@/entities/Currency";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import { Avatar } from "@/shared/ui/Avatar";
import { Input } from "@/shared/ui/Input";
import { Loader } from "@/shared/ui/Loader";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Text, TextAlign, TextTheme } from "@/shared/ui/Text";
import { useTranslation } from "react-i18next";
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
      <HStack
        max
        justify="center"
        className={classNames(classes.ProfileCard, {}, [
          classes.loading,
          className,
        ])}
      >
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack
        justify="center"
        max
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
      </HStack>
    );
  }

  const mods: Mods = {
    [classes.editing]: !readonly,
  };

  return (
    <VStack
      align="none"
      max
      gap="16"
      className={classNames(classes.ProfileCard, mods, [className])}
    >
      {data?.avatar && (
        <HStack justify="center">
          <Avatar alt={"avatar"} src={data?.avatar} />
        </HStack>
      )}
      <Input
        readonly={readonly}
        onChange={onChangeFirstname}
        className={classes.input}
        value={data?.firstname}
        placeholder={t("Ваше имя")}
        data-testid="ProfileCard.firstname"
      />
      <Input
        readonly={readonly}
        onChange={onChangeLastname}
        className={classes.input}
        value={data?.lastname}
        placeholder={t("Ваша фамилия")}
        data-testid="ProfileCard.lastname"
      />
      <Input
        readonly={readonly}
        onChange={onChangeAge}
        className={classes.input}
        value={String(data?.age)}
        placeholder={t("Ваш возраст")}
        data-testid="ProfileCard.age"
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
        placeholder={t("Ваше имя пользователя")}
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
    </VStack>
  );
};
