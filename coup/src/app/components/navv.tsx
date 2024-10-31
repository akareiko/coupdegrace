"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/app/components/navbar-menu";
import { cn } from "@/lib/utils";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("flex justify-center w-full z-50 p-2 font-sans", className)}
    >
      <div className="w-[20vw]">
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="home">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/#start">bring me to the start</HoveredLink>
              <HoveredLink href="/#second">continue</HoveredLink>
              <HoveredLink href="/#end">end</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="run">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/upload">upload</HoveredLink>
              <HoveredLink href="/visualize">visualize</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="learn">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/learn/#introduction">begin</HoveredLink>
              <HoveredLink href="/learn/#webdev">web development</HoveredLink>
              <HoveredLink href="/learn/#dataprep">
                data preprocessing
              </HoveredLink>
              <HoveredLink href="/learn/#modelbuild">
                model building
              </HoveredLink>
              <HoveredLink href="/learn/#visua">visualization</HoveredLink>
            </div>
          </MenuItem>
          <HoveredLink href="/signin">profile</HoveredLink>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
