import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import {
  AnimationProvider,
  useAnimationLibs,
} from "@/shared/lib/components/AnimationProvider";
import { useModal } from "@/shared/lib/hooks/useModal/useModal";
import { Portal } from "@headlessui/react";
import { memo, ReactNode, useCallback, useEffect, useMemo } from "react";
import { Overlay } from "../../redesigned/Overlay/Overlay";
import classes from "./Drawer.module.scss";
import { toggleFeatures } from "@/shared/features";

interface DrawerProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  portal?: boolean;
  lazy?: boolean;
  children?: ReactNode;
}

const height = window.innerHeight - 100;

const DrawerContent = memo((props: DrawerProps) => {
  const { className, children, onClose, portal, lazy, isOpen } = props;
  const { Spring, Gesture } = useAnimationLibs();

  const {
    isMounted,
    isClosing,
    close: closeHandler,
  } = useModal({
    onClose: onClose,
    isOpen: isOpen,
    animationDelay: 300,
  });

  const mods: Mods = useMemo(
    () => ({
      [classes.opened]: isOpen,
      [classes.isClosing]: isClosing,
    }),
    [isClosing, isOpen]
  );

  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

  const openDrawer = useCallback(() => {
    api.start({
      y: 0,
      immediate: false,
    });
  }, [api]);

  useEffect(() => {
    isOpen && openDrawer();
  }, [api, isOpen, openDrawer]);

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    });
  };

  const bind = Gesture.useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
    }) => {
      if (my < -70) cancel();

      if (last) {
        my > height * 0.5 || (vy > 0.5 && dy > 0) ? close(vy) : openDrawer();
      } else api.start({ y: my, immediate: true });
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    }
  );

  // const display = y.to((py) => (py < height ? "block" : "none"));

  const renderComponent = useCallback(
    () => (
      <div
        className={classNames(classes.Drawer, mods, [
          className,
          toggleFeatures({
            name: "isAppRedesigned",
            on: () => classes.drawerNew,
            off: () => classes.drawerOld,
          }),
        ])}
      >
        <Overlay onClick={closeHandler} />
        <div
          {...bind()}
          className={classes.sheet}
          style={{ bottom: `calc(-100vh + ${height - 100}px)` }}
        >
          {children}
        </div>
      </div>
    ),
    [children, mods, closeHandler, bind, className]
  );

  if (!isOpen || (lazy && !isMounted)) return null;

  if (portal) {
    return <Portal>{renderComponent()}</Portal>;
  }

  return renderComponent();
});

const DrawerAsync = (props: DrawerProps) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) {
    return null;
  }

  return <DrawerContent {...props} />;
};

export const Drawer = memo((props: DrawerProps) => {
  return (
    <AnimationProvider>
      <DrawerAsync {...props} />
    </AnimationProvider>
  );
});
