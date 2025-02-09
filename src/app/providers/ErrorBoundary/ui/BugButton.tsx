import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";

//Компонент для тестирования ErrorBoundary
export const BugButton = () => {
  const { t } = useTranslation();

  const [error, setError] = useState(false);
  const onThrow = () => setError(true);

  useEffect(() => {
    if (error === true) throw new Error();
  }, [error]);
  return <Button onClick={onThrow}>{t("Бросить ошибку")}</Button>;
};
