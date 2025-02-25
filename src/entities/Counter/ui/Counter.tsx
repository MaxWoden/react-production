import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { counterActions } from "../model/slice/counterSlice";

import { useTranslation } from "react-i18next";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button dataTestid="increment-btn" onClick={increment}>
        {t("Увеличить")}
      </Button>
      <Button dataTestid="decrement-btn" onClick={decrement}>
        {t("Уменьшить")}
      </Button>
    </div>
  );
};
