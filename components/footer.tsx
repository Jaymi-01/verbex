"use client";

import Link from "next/link";
import { LinkedinLogo, TwitterLogo, GithubLogo } from "@phosphor-icons/react";

export const Footer = () => {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Demo", href: "#interactive-demo" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "FAQ", href: "#faq" },
        { name: "Contact", href: "#" },
        { name: "Help Center", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 group mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl group-hover:rotate-12 transition-transform">
                V
              </div>
              <span className="text-xl font-bold font-display text-foreground tracking-tight">Verbex</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Verbex AI empowers creators, professionals, and teams to write with unparalleled clarity, impact, and efficiency. Your words, perfected.
            </p>
          </div>

          {/* Navigation Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Icons and Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-border pt-8 mt-8">
          <p className="text-muted-foreground text-sm mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Verbex. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <LinkedinLogo size={24} weight="fill" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <TwitterLogo size={24} weight="fill" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <GithubLogo size={24} weight="fill" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
