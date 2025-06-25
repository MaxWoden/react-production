import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Text as TextDeprecated } from "@/shared/ui/deprecated/Text";
import { Text } from "@/shared/ui/redesigned/Text";
import { ArticleTextBlock } from "../../model/types/article";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { ToggleFeatures } from "@/shared/features";

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  ({ className, block }: ArticleTextBlockComponentProps) => {
    const { t } = useTranslation();

    return (
      <VStack gap="16" className={classNames("", {}, [className])}>
        {block.title && (
          <ToggleFeatures
            feature="isAppRedesigned"
            off={<TextDeprecated title={t(block.title)} />}
            on={<Text title={t(block.title)} />}
          />
        )}

        <VStack gap="8">
          {block.paragraphs.map((paragraph) => (
            <ToggleFeatures
              key={paragraph}
              feature="isAppRedesigned"
              off={<TextDeprecated key={paragraph} text={paragraph} />}
              on={<Text key={paragraph} text={paragraph} />}
            />
          ))}
        </VStack>
      </VStack>
    );
  }
);
