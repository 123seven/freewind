"use client";

import Link from "next/link";

import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/base/icons";
import MaxWidthWrapper from "@/components/base/max-width-wrapper";

import { ModeToggle } from "./mode-toggle";
import { useModal } from "../modals/providers";

interface NavBarProps {
  scroll?: boolean;
  large?: boolean;
}

export function NavBar({ scroll = false }: NavBarProps) {
  const scrolled = useScroll(50);
  const { openModal } = useModal();

  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? "border-b" : "bg-transparent") : "border-b"
      }`}
    >
      <MaxWidthWrapper className="flex h-14 items-center justify-between py-4">
        <div className="flex items-center gap-6 md:gap-10 ml-2 md:ml-0">
          <Link href="/" className="flex items-center space-x-1.5 ">
            <Icons.logo />
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex">
            <ModeToggle />
          </div>
          <div className="hidden text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80 md:block">
            <Button
              className=""
              variant="outline"
              size="sm"
              rounded="lg"
              onClick={() => {
                openModal();
              }}
            >
              联系我
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
}
