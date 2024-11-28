import React from "react";
import { Spinner } from "@chakra-ui/react";

import Button from "@/components/Button";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export interface ActionModalProps {
  title: string;
  description: string;
  action: () => void;
  openButton: string | React.ReactNode;
  actionText: string;
  loading?: boolean;
}

const ActionModal: React.FC<ActionModalProps> = ({
  title,
  description,
  action,
  openButton: OpenButton,
  actionText,
  loading,
}) => {
  return (
    <DialogRoot role="alertdialog">
      <DialogTrigger asChild>
        {typeof OpenButton === "string" ? (
          <Button variant="outline" size="sm">
            {OpenButton}
          </Button>
        ) : (
          OpenButton
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogBody fontSize="lg">
          <p>{description}</p>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button background="red.500">Cancelar</Button>
          </DialogActionTrigger>
          <Button colorPalette="red" onClick={action}>
            {loading ? <Spinner /> : actionText}
          </Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};

export default ActionModal;
