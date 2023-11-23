"use client";
//@ts-nocheck
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { usePathname } from "next/navigation";
import { FaCirclePlay } from "react-icons/fa6";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";

export const Navbar = () => {
  const FloatingBubble = ({ href, children }) => (
    <div
      className={`p-2 rounded-full  w-fit h-fit ${
        href === usePathname() ? "!bg-secondary-400" : ""
      }`}
    >
      <div className="flex flex-col items-center justify-center w-20 h-20 bg-transparent rounded-full gap-y-2">
        {children}
      </div>
    </div>
  );
  return (
    <NextUINavbar className="bg-primary-500" maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            className="flex items-center justify-start gap-1 text-black"
            href="/"
          >
            <FaCirclePlay size={32} />I WANNA WATCH
          </NextLink>
        </NavbarBrand>
        <ul className="justify-start hidden gap-4 ml-2 md:flex">
          {siteConfig.navItems.map((item) => (
            <FloatingBubble href={item.href}>
              <NavbarItem key={item.href}>
                <NextLink
                  className={` font-semibold text-black`}
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            </FloatingBubble>
          ))}
        </ul>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      ></NavbarContent>
      <NavbarMenuToggle className="block md:hidden text-secondary" />

      <NavbarMenu className="overflow-hidden">
        <div className="flex flex-col gap-2 mx-4 mt-2 ">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color="foreground" href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
