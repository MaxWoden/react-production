import { Modal } from "shared/ui/Modal/Modal";
import { classNames } from "shared/lib/classNames/classNames";
import { LoginForm } from "../LoginForm/LoginForm";

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
      <LoginForm />
    </Modal>
  );
};
