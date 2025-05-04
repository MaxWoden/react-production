import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Card } from "@/shared/ui/Card/Card";
import { Drawer } from "@/shared/ui/Drawer/Drawer";
import { Input } from "@/shared/ui/Input/Input";
import { Modal } from "@/shared/ui/Modal/Modal";
import { HStack, VStack } from "@/shared/ui/Stack";
import { StarRating } from "@/shared/ui/StarRating/ui/StarRating";
import { Text } from "@/shared/ui/Text/Text";
import { memo, useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { useTranslation } from "react-i18next";

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onCancel,
    onAccept,
    rate = 0,
  } = props;
  const { t } = useTranslation();
  const [starsCount, setStarsCount] = useState(rate);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedback, setFeedback] = useState("");

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);

      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept]
  );

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [onAccept, starsCount, feedback]);

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    setStarsCount(0);
    setFeedback("");
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const onChangeFeedback = (value: string) => {
    setFeedback(value);
  };

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input
        value={feedback}
        onChange={onChangeFeedback}
        placeholder={t("Ваш отзыв")}
      />
    </>
  );

  return (
    <Card max className={className}>
      <VStack max align="center" gap="8">
        <Text title={starsCount ? t("Спасибо за оценку!") : title} />
        <StarRating
          size={40}
          onSelect={onSelectStars}
          selectedStars={starsCount}
        />
      </VStack>
      {hasFeedback && (
        <>
          <BrowserView>
            <Modal onClose={cancelHandle} isOpen={isModalOpen}>
              <VStack max gap="32">
                {modalContent}
                <HStack max gap="16" justify="end">
                  <Button
                    onClick={cancelHandle}
                    theme={ButtonTheme.OUTLINE_RED}
                  >
                    {t("Закрыть")}
                  </Button>
                  <Button
                    onClick={acceptHandle}
                    theme={ButtonTheme.OUTLINE_GREEN}
                  >
                    {t("Отправить")}
                  </Button>
                </HStack>
              </VStack>
            </Modal>
          </BrowserView>
          <MobileView>
            <Drawer isOpen={isModalOpen} onClose={cancelHandle}>
              <VStack max gap="32">
                {modalContent}
                <Button
                  fullWidth
                  onClick={acceptHandle}
                  theme={ButtonTheme.OUTLINE_GREEN}
                >
                  {t("Отправить")}
                </Button>
              </VStack>
            </Drawer>
          </MobileView>
        </>
      )}
    </Card>
  );
});
