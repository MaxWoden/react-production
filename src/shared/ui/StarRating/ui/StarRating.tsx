import Star from "@/shared/assets/icons/star.svg";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import { memo, useState } from "react";
import { Icon } from "../../Icon/Icon";
import { HStack } from "../../Stack";
import classes from "./StarRating.module.scss";

interface StarRatingProps {
  className?: string;
  onSelect?: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
}

export const StarRating = memo((props: StarRatingProps) => {
  const { className, onSelect, size = 30, selectedStars = 0 } = props;
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onClick = (starNumber: number) => () => {
    if (!isSelected) {
      setIsSelected(true);
      onSelect?.(starNumber);
      setCurrentStarsCount(starNumber + 1);
    }
  };

  const onHover = (starNumber: number) => () => {
    if (!isSelected) {
      setIsHovered(true);
      setCurrentStarsCount(starNumber + 1);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const mods = (starNumber: number): Mods => ({
    [classes.hovered]: isHovered && starNumber < currentStarsCount,
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
          />
        );
      })}
    </HStack>
  );
});
