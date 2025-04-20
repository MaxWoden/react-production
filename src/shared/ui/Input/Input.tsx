import {
  InputHTMLAttributes,
  memo,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Input.module.scss";
import { HStack } from "../Stack";

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
  readonly?: boolean;
  "data-testid"?: string;
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
    readonly,
    "data-testid": dataTestId = "Input",
    ...otherProps
  } = props;

  const ref = useRef() as MutableRefObject<HTMLInputElement>;
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(value?.length);

  const isCaretVisible = isFocused && !readonly;

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

  const onSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current.focus();
    }
  }, []);

  return (
    <HStack
      data-testid={dataTestId}
      gap="4"
      className={classNames("", { [classes.readonly]: readonly }, [className])}
    >
      {placeholder && (
        <div className={classes.placeholder}>{`${placeholder}> `}</div>
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
          readOnly={readonly}
          {...otherProps}
        />
        {isCaretVisible && (
          <span
            className={classes.caret}
            style={{ left: `${caretPosition * CARET_WIDTH}px` }}
          ></span>
        )}
      </div>
    </HStack>
  );
});
