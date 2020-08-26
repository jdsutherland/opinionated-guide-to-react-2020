import React from "react";
import { AlertWrapper, Message, CloseButton } from "./elements";

interface Props {
  onClose: (event: React.MouseEvent) => void;
  type: "success" | "error" | "warning";
  children: React.ReactNode;
  neverClose?: boolean;
}

const Alert = ({
  onClose = f => f,
  type,
  children,
  neverClose
}: Props) => {
  const [open, setOpen] = useState(true);

  return open ? (
    <AlertWrapper type={type}>
      {!neverClose ? (
        <CloseButton
          onClick={(e) => {
            setOpen(false);
            onClose(e);
          }}
        >
          x
        </CloseButton>
      ) : null}
      <Message>{children}</Message>
    </AlertWrapper>
  ) : null;
};
