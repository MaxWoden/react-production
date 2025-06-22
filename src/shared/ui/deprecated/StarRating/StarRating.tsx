import Star from "@/shared/assets/icons/star.svg";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import { memo, useCallback, useEffect, useState } from "react";
import { Icon } from "../Icon";
import { HStack } from "../../redesigned/Stack";
import classes from "./StarRating.module.scss";

interface StarRatingProps {
  className?: string;
  onSelect?: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const StarRating = memo((props: StarRatingProps) => {
  const { className, onSelect, size = 30, selectedStars = 0 } = props;
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  useEffect(() => {
    setCurrentStarsCount(selectedStars);
    setIsSelected(Boolean(selectedStars));
  }, [selectedStars]);

  const onClick = useCallback(
    (starNumber: number) => () => {
      if (!isSelected) {
        setIsSelected(true);
        setCurrentStarsCount(starNumber + 1);
        onSelect?.(starNumber + 1);
      }
    },
    [isSelected, onSelect]
  );

  const onHover = useCallback(
    (starNumber: number) => () => {
      if (!isSelected) {
        setIsHovered(true);
        setCurrentStarsCount(starNumber + 1);
      }
    },
    [isSelected]
  );

  const onLeave = useCallback(() => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  }, [isSelected]);

  const mods = (starNumber: number): Mods => ({
    [classes.hovered]:
      (isHovered || isSelected) && starNumber < currentStarsCount,
    [classes.selected]: isSelected,
  });

  return (
    <HStack
      max
      gap="4"
      className={classNames(classes.StarRating, {}, [className])}
    >
      {new Array(5).fill(0).map((_, starNumber) => {
        return (
          <Icon
            onClick={onClick(starNumber)}
            onMouseEnter={onHover(starNumber)}
            onMouseLeave={onLeave}
            className={classNames(classes.starIcon, mods(starNumber))}
            Svg={Star}
            key={starNumber}
            width={size}
            height={size}
            data-testid={`StarRating.${starNumber + 1}`}
            data-selected={currentStarsCount >= starNumber}
          />
        );
      })}
    </HStack>
  );
});
