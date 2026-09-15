"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

export function BottomSheet({
  open,
  onOpenChange,
  title,
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-[70] bg-black/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild forceMount aria-describedby={undefined}>
              <motion.div
                className="safe-bottom fixed inset-x-0 bottom-0 z-[71] max-h-[80vh] overflow-y-auto rounded-t-2xl border-t border-white/10 bg-navy-deep p-6"
                initial={reduce ? undefined : { y: "100%" }}
                animate={reduce ? undefined : { y: 0 }}
                exit={reduce ? undefined : { y: "100%" }}
                transition={{ type: "tween", duration: 0.28, ease: "easeOut" }}
              >
                <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-white/20" />
                <div className="flex items-center justify-between">
                  <Dialog.Title className="text-sm font-semibold tracking-[0.15em] text-cyan uppercase">
                    {title}
                  </Dialog.Title>
                  <Dialog.Close className="focus-ring touch-manipulation rounded-sm p-1.5 text-white/60 active:bg-white/10">
                    <X className="h-5 w-5" />
                  </Dialog.Close>
                </div>
                <div className="mt-4">{children}</div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
