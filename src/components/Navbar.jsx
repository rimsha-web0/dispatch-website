"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

import Logo from "@/components/Logo";
import { site } from "@/config/site";

export default function Navbar() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState(null);

  const menuButtonRef = useRef(null);
  const headerRef = useRef(null);

  // Changing pages automatically closes the mobile menu.
  const isOpen = openPath === pathname;

  function closeMenu() {
    setOpenPath(null);
  }

  function isActive(href) {
    if (href === "/") {
      return pathname === "/";
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  }

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpenPath(null);
        menuButtonRef.current?.focus();
      }
    }

    function handleOutsideClick(event) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setOpenPath(null);
      }
    }

    const desktopQuery = window.matchMedia(
      "(min-width: 768px)"
    );

    function handleScreenChange(event) {
      if (event.matches) {
        setOpenPath(null);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener(
      "pointerdown",
      handleOutsideClick
    );

    desktopQuery.addEventListener(
      "change",
      handleScreenChange
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.removeEventListener(
        "pointerdown",
        handleOutsideClick
      );

      desktopQuery.removeEventListener(
        "change",
        handleScreenChange
      );
    };
  }, [isOpen]);

  const contactButton = site.hero.primaryButton;

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container navbar">
        <Logo />

        <nav
          className="nav-links"
          aria-label="Main navigation"
        >
          {site.navigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${
                  active ? "active" : ""
                }`.trim()}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="nav-actions">
          <Link
            href={contactButton.href}
            className="button button-primary"
          >
            {contactButton.label}

            <ArrowUpRight
              size={17}
              aria-hidden="true"
            />
          </Link>

          <button
            ref={menuButtonRef}
            type="button"
            className="menu-toggle"
            aria-label={
              isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => {
              setOpenPath(isOpen ? null : pathname);
            }}
          >
            {isOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav
          id="mobile-navigation"
          className="container mobile-menu"
          aria-label="Mobile navigation"
        >
          {site.navigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${
                  active ? "active" : ""
                }`.trim()}
                aria-current={active ? "page" : undefined}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href={contactButton.href}
            className="button button-primary"
            onClick={closeMenu}
          >
            {contactButton.label}

            <ArrowUpRight
              size={17}
              aria-hidden="true"
            />
          </Link>
        </nav>
      )}
    </header>
  );
}