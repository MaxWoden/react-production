import { useTranslation } from "react-i18next";
import classes from "./LoginForm.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useState } from "react";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  const [login, setLogin] = useState("login");
  const [password, setPassword] = useState("");

  return (
    <div className={classNames(classes.LoginForm, {}, [className])}>
      <Input
        autofocus
        placeholder="Имя пользователя"
        className={classes.input}
        value={login}
        onChange={setLogin}
      />
      <Input
        placeholder="Пароль"
        className={classes.input}
        value={password}
        onChange={setPassword}
      />
      <Button className={classes.loginBtn}>{t("Войти")}</Button>
    </div>
  );
};
