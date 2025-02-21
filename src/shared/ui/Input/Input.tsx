import {
  InputHTMLAttributes,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import classes from "./Input.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  placeholder?: string;
  autofocus?: boolean;
}

const CARET_WIDTH = 8.8;

export const Input = memo((props: InputProps) => {
  const {
    className,
    value = "",
    onChange,
    placeholder,
    type = "text",
    autofocus,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const [caretPosition, setCaretPosition] = useState(value.length);

  console.log(value, onChange);

  const ref = useRef<HTMLInputElement>();
  const { t } = useTranslation();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onBlur();
    }
  }, []);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current.focus();
    }
  }, []);

  useEffect(() => {
    if (isFocused) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isFocused, onKeyDown]);

  return (
    <div className={classNames(classes.InputWrapper, {}, [className])}>
      {placeholder && (
        <div className={classes.placeholder}>{`${t(placeholder)}>`}</div>
      )}
      <div className={classes.caretWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={classes.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          {...otherProps}
        />
        {isFocused && (
          <span
            className={classes.caret}
            style={{ left: `${caretPosition * CARET_WIDTH}px` }}
          ></span>
        )}
      </div>
    </div>
  );
});
