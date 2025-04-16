import { memo } from "react";
import { Flex, FlexProps } from "../Flex/Flex";

type HStackProps = Omit<FlexProps, "direction">;

export const HStack = memo((props: HStackProps) => {
  //@ts-ignore
  return <Flex direction="row" {...props} />;
});
