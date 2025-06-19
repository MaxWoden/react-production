import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "@/shared/ui/deprecated/Button";
import { Input } from "@/shared/ui/deprecated/Input";
import { VStack } from "@/shared/ui/deprecated/Stack";
import { Text, TextTheme } from "@/shared/ui/deprecated/Text";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import classes from "./LoginForm.module.scss";

export interface LoginFormProps {
  className?: string;
  onSuccess?: () => void;
}

const reducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = (props: LoginFormProps) => {
  const { className, onSuccess } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

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

  const onLoginClick = useCallback(async () => {
    try {
      const result = await dispatch(loginByUsername({ username, password }));
      if (result.meta.requestStatus === "fulfilled") {
        onSuccess && onSuccess();
      }
    } catch (error) {
      console.error("Dispatch failed", error);
    }
  }, [dispatch, password, username, onSuccess]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack className={classNames(classes.LoginForm, {}, [className])}>
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
      </VStack>
    </DynamicModuleLoader>
  );
};

export default memo(LoginForm);
