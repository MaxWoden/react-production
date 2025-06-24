import { classNames } from "@/shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from "@/shared/ui/deprecated/Button";
import { Input as InputDeprecated } from "@/shared/ui/deprecated/Input";
import { Text as TextDeprecated, TextTheme } from "@/shared/ui/deprecated/Text";
import { Button } from "@/shared/ui/redesigned/Button";
import { Input } from "@/shared/ui/redesigned/Input";
import { Text } from "@/shared/ui/redesigned/Text";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from "../../model/selectors/addCommentFormSelectors";
import { ToggleFeatures } from "@/shared/features";
import { Card } from "@/shared/ui/redesigned/Card";
import { HStack } from "@/shared/ui/redesigned/Stack";
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "../../model/slice/addCommentFormSlice";
import classes from "./AddCommentForm.module.scss";

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (value: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [disabled, setDisabled] = useState(true);

  const error = useSelector(getAddCommentFormError);
  const text = useSelector(getAddCommentFormText);

  const onChange = useCallback(
    (value: string) => {
      if (value.length && disabled) {
        setDisabled(false);
      } else if (!value.length && !disabled) {
        setDisabled(true);
      }

      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch, disabled]
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || "");
    onChange("");
  }, [onChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <ToggleFeatures
        feature="isAppRedesigned"
        off={
          <HStack
            max
            data-testid="AddCommentForm"
            className={classNames(classes.AddCommentForm, {}, [className])}
          >
            {error ? (
              <TextDeprecated
                theme={TextTheme.ERROR}
                text={t("Произошла непредвиденная ошибка")}
              />
            ) : (
              <>
                <InputDeprecated
                  data-testid="AddCommentForm.Input"
                  className={classes.input}
                  onChange={onChange}
                  value={text}
                  placeholder={t("Введите комментарий")}
                />
                <ButtonDeprecated
                  data-testid="AddCommentForm.Button"
                  disabled={disabled}
                  onClick={onSendHandler}
                  theme={ButtonTheme.OUTLINE}
                >
                  {t("Отправить")}
                </ButtonDeprecated>
              </>
            )}
          </HStack>
        }
        on={
          <Card
            max
            padding="24"
            data-testid="AddCommentForm"
            className={className}
          >
            {error ? (
              <Text
                variant="error"
                text={t("Произошла непредвиденная ошибка")}
              />
            ) : (
              <HStack max gap="24">
                <Input
                  size="l"
                  data-testid="AddCommentForm.Input"
                  className={classes.input}
                  onChange={onChange}
                  value={text}
                  placeholder={t("Введите комментарий")}
                />
                <Button
                  size="l"
                  data-testid="AddCommentForm.Button"
                  disabled={disabled}
                  onClick={onSendHandler}
                  variant="outline"
                >
                  {t("Отправить")}
                </Button>
              </HStack>
            )}
          </Card>
        }
      />
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
