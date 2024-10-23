"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useModal } from "./providers";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ContactModal() {
  const { isModalOpen, closeModal } = useModal();

  if (!isModalOpen) return null;

  return (
      <Dialog open={isModalOpen} onOpenChange={closeModal} >
        <DialogTrigger asChild>
          <Button variant="outline">扫码添加本人微信</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] md:max-w-[500px] lg:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>扫码添加本人微信</DialogTitle>
            <DialogDescription>
              通过微信扫一扫，添加本人微信，方便随时联系
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Image
              width={260}
              height={320}
              src="/_static/images/wechat.png"
              alt=""
              className="mx-auto"
            />
          </div>
          <DialogFooter>
            <Button type="submit" onClick={closeModal}>
              关闭
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
  );
}
