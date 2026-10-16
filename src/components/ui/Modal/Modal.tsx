import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import IconButton from "../IconButton/IconButton";
import { cx } from "@/utils/classNames";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** id of the element that titles the dialog. */
  labelledBy: string;
  closeLabel?: string;
  className?: string;
  children: ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  labelledBy,
  closeLabel = "Close dialog",
  className,
  children,
}: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEscapeKey(onClose, isOpen);
  useLockBodyScroll(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();
    return () => previouslyFocused?.focus();
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-100 grid animate-fade-in place-items-center bg-[rgba(3,8,16,.78)] p-6 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div
        ref={dialogRef}
        className={cx(
          "relative max-h-[calc(100vh-48px)] w-[min(840px,100%)] animate-modal-in overflow-auto rounded-2xl border border-line bg-surface shadow-card outline-none",
          className,
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        tabIndex={-1}
      >
        <IconButton icon="close" label={closeLabel} className="absolute top-4 right-4 z-2 bg-[rgba(8,17,31,.85)] text-white" onClick={onClose} />
        {children}
      </div>
    </div>,
    document.body,
  );
}
