import { ReactNode } from "react";

export interface NavSublinkProps {
  id: number;
  title: string;
  href: string;
  image: string;
  description: string;
  linkText: string;
  icon: ReactNode;
  backgroundColor?: string;
}

export interface NavLinkProps {
  id: number;
  href: string;
  title: string;
  imageType?: "object" | "screen";
  sublinks?: NavbarSublinkProps[];
}
