"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/app/components/navbar-menu";
import { cn } from "@/lib/utils";
import wall from "@/app/wall.jpg";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("w-[40vw] top-10 inset-x-0 mx-auto z-50 p-5", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">bring me to the start</HoveredLink>
            <HoveredLink href="/interface-design">second part</HoveredLink>
            <HoveredLink href="/seo">third part</HoveredLink>
            <HoveredLink href="/branding">end</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="run">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/upload">upload</HoveredLink>
            <HoveredLink href="/status">status</HoveredLink>
            <HoveredLink href="/download">download</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="about">
          <div className="flex items-center space-x-4">
            <ProductItem
              title="Web Development"
              href="https://algochurn.com"
              src={wall}
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Data Preprocessing"
              href="https://tailwindmasterkit.com"
              src={wall}
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Model Building"
              href="https://gomoonbeam.com"
              src={wall}
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Visualization"
              href="https://userogue.com"
              src={wall}
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="sign in">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/signin">one-time</HoveredLink>
            <HoveredLink href="/status">email</HoveredLink>
            <HoveredLink href="/download">google</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
