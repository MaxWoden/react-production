import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from "@/shared/ui/deprecated/Button";
import { Card as CardDeprecated } from "@/shared/ui/deprecated/Card";
import { Drawer as DrawerDeprecated } from "@/shared/ui/deprecated/Drawer";
import { Input as InputDeprecated } from "@/shared/ui/deprecated/Input";
import { Modal as ModalDeprecated } from "@/shared/ui/deprecated/Modal";
import { Drawer } from "@/shared/ui/redesigned/Drawer";
import { Input } from "@/shared/ui/redesigned/Input";
import { Modal } from "@/shared/ui/redesigned/Modal";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { StarRating as StarRatingDeprecated } from "@/shared/ui/deprecated/StarRating";
import { StarRating } from "@/shared/ui/redesigned/StarRating";
import { Text as TextDeprecated } from "@/shared/ui/deprecated/Text";
import { Text } from "@/shared/ui/redesigned/Text";
import { memo, useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { ToggleFeatures } from "@/shared/features";
import { Card } from "@/shared/ui/redesigned/Card";
import { Button } from "@/shared/ui/redesigned/Button";

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
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <>
          <TextDeprecated title={feedbackTitle} />
          <InputDeprecated
            data-testid="RatingCard.Input"
            value={feedback}
            onChange={onChangeFeedback}
            placeholder={t("Ваш отзыв")}
          />
        </>
      }
      on={
        <>
          <Text title={feedbackTitle} />
          <Input
            data-testid="RatingCard.Input"
            value={feedback}
            onChange={onChangeFeedback}
            placeholder={t("Ваш отзыв")}
          />
        </>
      }
    />
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <CardDeprecated max className={className} data-testid="RatingCard">
          <VStack max align="center" gap="8">
            <TextDeprecated
              title={starsCount ? t("Спасибо за оценку!") : title}
            />
            <StarRatingDeprecated
              size={40}
              onSelect={onSelectStars}
              selectedStars={starsCount}
            />
          </VStack>
          {hasFeedback && (
            <>
              <BrowserView>
                <ModalDeprecated onClose={cancelHandle} isOpen={isModalOpen}>
                  <VStack max gap="32">
                    {modalContent}
                    <HStack max gap="16" justify="end">
                      <ButtonDeprecated
                        data-testid="RatingCard.Close"
                        onClick={cancelHandle}
                        theme={ButtonTheme.OUTLINE_RED}
                      >
                        {t("Закрыть")}
                      </ButtonDeprecated>
                      <ButtonDeprecated
                        data-testid="RatingCard.Send"
                        onClick={acceptHandle}
                        theme={ButtonTheme.OUTLINE_GREEN}
                      >
                        {t("Отправить")}
                      </ButtonDeprecated>
                    </HStack>
                  </VStack>
                </ModalDeprecated>
              </BrowserView>
              <MobileView>
                <DrawerDeprecated isOpen={isModalOpen} onClose={cancelHandle}>
                  <VStack max gap="32">
                    {modalContent}
                    <ButtonDeprecated
                      fullWidth
                      onClick={acceptHandle}
                      theme={ButtonTheme.OUTLINE_GREEN}
                    >
                      {t("Отправить")}
                    </ButtonDeprecated>
                  </VStack>
                </DrawerDeprecated>
              </MobileView>
            </>
          )}
        </CardDeprecated>
      }
      on={
        <Card max className={className} data-testid="RatingCard">
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
                        data-testid="RatingCard.Close"
                        onClick={cancelHandle}
                        variant="filled"
                      >
                        {t("Закрыть")}
                      </Button>
                      <Button
                        data-testid="RatingCard.Send"
                        onClick={acceptHandle}
                        variant="filled"
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
                    <Button fullWidth onClick={acceptHandle} variant="filled">
                      {t("Отправить")}
                    </Button>
                  </VStack>
                </Drawer>
              </MobileView>
            </>
          )}
        </Card>
      }
    />
  );
});
