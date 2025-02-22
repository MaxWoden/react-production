import { getLoginState } from "features/AuthByUsername/model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { loginActions } from "features/AuthByUsername/model/slice/loginSlice";
import { memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import classes from "./LoginForm.module.scss";
import { Text, TextTheme } from "shared/ui/Text/Text";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { username, password, error, isLoading } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  useEffect(() => {
    return () => {
      onChangeUsername("");
      onChangePassword("");
    };
  }, []);

  return (
    <div className={classNames(classes.LoginForm, {}, [className])}>
      <Text title="Форма авторизации"></Text>
      {error && <Text text={error} theme={TextTheme.ERROR}></Text>}
      <Input
        autofocus
        placeholder="Имя пользователя"
        className={classes.input}
        value={username}
        onChange={onChangeUsername}
      />
      <Input
        placeholder="Пароль"
        className={classes.input}
        value={password}
        onChange={onChangePassword}
      />
      <Button
        onClick={onLoginClick}
        theme={ButtonTheme.OUTLINE}
        className={classes.loginBtn}
        disabled={isLoading}
      >
        {t("Войти")}
      </Button>
    </div>
  );
});
