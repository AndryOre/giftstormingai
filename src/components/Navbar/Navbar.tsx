import { useEffect } from "react";
import { useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LangDropdown from "../LangDropdown/LangDropdown";
import Button from "../Button/Button";
import { List, X } from "@phosphor-icons/react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav>
      <div className="flex items-center justify-between px-5 py-4">
        <div className="font-montserrat text-xl font-bold">Giftstorming Ai</div>
        <div className="flex items-center gap-2">
          <LangDropdown />
          <ThemeToggle />
          <button
            onClick={handleMenuClick}
            className="flex items-center justify-center"
          >
            {isMenuOpen ? (
              <X size={24} className="text-neutral-800 dark:text-neutral-200" />
            ) : (
              <List
                size={24}
                className="text-neutral-800 dark:text-neutral-200"
              />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed left-0 top-14 z-10 flex h-full w-full flex-col items-center justify-start gap-6 bg-neutral-50 px-5 py-4 font-lato dark:bg-neutral-950">
          <a href="#">Home</a>
          <a href="#how-it-works">How it works</a>
          <a href="#features">Features</a>
          <Button variant="contained" size="lg" fullWidth>
            Get Early Access
          </Button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
