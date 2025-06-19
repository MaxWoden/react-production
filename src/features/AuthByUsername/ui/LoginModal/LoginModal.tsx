import { Modal } from "@/shared/ui/deprecated/Modal";
import { classNames } from "@/shared/lib/classNames/classNames";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import { Suspense } from "react";
import { Loader } from "@/shared/ui/deprecated/Loader";

interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  portal?: boolean;
}

export const LoginModal = (props: LoginModalProps) => {
  const { className, isOpen, onClose, portal = true } = props;
  return (
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
  );
};
