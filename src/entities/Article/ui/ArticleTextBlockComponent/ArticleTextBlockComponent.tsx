import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";
import { ArticleTextBlock } from "../../model/types/article";
import { VStack } from "shared/ui/Stack";

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  ({ className, block }: ArticleTextBlockComponentProps) => {
    const { t } = useTranslation();

    return (
      <VStack gap="16" className={classNames("", {}, [className])}>
        {block.title && <Text title={t(block.title)} />}
        <VStack gap="8">
          {block.paragraphs.map((paragraph) => (
            <Text key={paragraph} text={paragraph} />
          ))}
        </VStack>
      </VStack>
    );
  }
);
