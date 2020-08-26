import React from "react";
import { AlertWrapper, Message, CloseButton } from "./elements";

const Alert = ({
  onClose = f => f,
  type,
  children,
  neverClose
}) => {
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
