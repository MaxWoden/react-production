import { ToggleFeatures } from "@/shared/features";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Loader as LoaderDeprecated } from "@/shared/ui/deprecated/Loader";
import { Modal as ModalDeprecated } from "@/shared/ui/deprecated/Modal";
import { Loader } from "@/shared/ui/redesigned/Loader";
import { Modal } from "@/shared/ui/redesigned/Modal";
import { Suspense } from "react";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";

interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose: () => void;
  portal?: boolean;
}

export const LoginModal = (props: LoginModalProps) => {
  const { className, isOpen, onClose, portal = true } = props;
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <ModalDeprecated
          lazy
          portal={portal}
          isOpen={isOpen}
          onClose={onClose}
          className={classNames("", {}, [className])}
        >
          <Suspense fallback={<LoaderDeprecated />}>
            <LoginFormAsync onSuccess={onClose} />
          </Suspense>
        </ModalDeprecated>
      }
      on={
        <Modal
          lazy
          portal={portal}
          isOpen={isOpen}
          onClose={onClose}
          className={classNames("", {}, [className])}
        >
          <Suspense fallback={<Loader />}>
            <LoginFormAsync onSuccess={onClose} />
          </Suspense>
        </Modal>
      }
    />
  );
};
