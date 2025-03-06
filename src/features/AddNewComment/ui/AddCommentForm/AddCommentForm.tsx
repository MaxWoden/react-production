import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Loader } from "shared/ui/Loader/Loader";
import { Text, TextTheme } from "shared/ui/Text/Text";
import {
  getAddCommentFormError,
  getAddCommentFormIsLoading,
  getAddCommentFormText,
} from "../../model/selectors/addCommentFormSelectors";

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
  const isLoading = useSelector(getAddCommentFormIsLoading);
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

  let content;

  if (isLoading) {
    content = (
      <div className={classes.loaderWrapper}>
        <Loader />
      </div>
    );
  } else if (error) {
    content = (
      <Text
        theme={TextTheme.ERROR}
        text={t("Произошла непредвиденная ошибка")}
      />
    );
  } else {
    content = (
      <>
        {" "}
        <Input
          className={classes.input}
          onChange={onChange}
          value={text}
          placeholder={t("Введите комментарий")}
        />
        <Button
          disabled={disabled}
          onClick={onSendHandler}
          theme={ButtonTheme.OUTLINE}
        >
          {t("Отправить")}
        </Button>
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(classes.AddCommentForm, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
