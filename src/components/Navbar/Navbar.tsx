import { useEffect, useState } from "react";
import Button from "../Button/Button";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LangDropdown from "../LangDropdown/LangDropdown";
import { List, X } from "@phosphor-icons/react";
import { useTranslation } from "next-i18next";

function Navbar() {
  const { t } = useTranslation("common");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const sections = ["home", "how-it-works", "features"];
    const scrollY = window.scrollY;

    const currentSection = sections.find((section) => {
      const element = document.querySelector(`#${section}`);
      if (element) {
        const top = (element as HTMLElement).offsetTop - 100;
        const bottom = top + (element as HTMLElement).offsetHeight;
        return scrollY >= top && scrollY <= bottom;
      } else {
        return false;
      }
    });

    setActiveSection(currentSection || "");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav className="sticky top-0 z-50">
      <div
        className={`flex items-center justify-between px-5 py-4 lg:px-24 lg:py-8 ${
          isMenuOpen
            ? "bg-neutral-50 dark:bg-neutral-950"
            : "bg-neutral-50 bg-opacity-50 backdrop-blur-sm dark:bg-neutral-950 dark:bg-opacity-50"
        }`}
      >
        <div className="font-montserrat text-xl font-bold lg:text-2xl">
          <span className="bg-gradient-to-t from-neutral-950 to-neutral-950/50 bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-50/50">
            Giftstorming {""}
          </span>
          <span className="bg-gradient-to-t from-red-500 to-red-500/50 bg-clip-text text-transparent dark:bg-gradient-to-b">
            Ai
          </span>
        </div>
        <div className="hidden lg:flex lg:items-center lg:justify-between">
          <div className="flex justify-center gap-8">
            <a
              href="#"
              className={`${
                activeSection === ""
                  ? "text-red-500"
                  : "transform transition-all duration-300 hover:-translate-y-1 hover:text-red-500"
              }`}
            >
              {t("home")}
            </a>
            <a
              href="#how-it-works"
              className={`${
                activeSection === "how-it-works"
                  ? "text-red-500"
                  : "transform transition-all duration-300 hover:-translate-y-1 hover:text-red-500"
              }`}
            >
              {t("how_it_works")}
            </a>
            <a
              href="#features"
              className={`${
                activeSection === "features"
                  ? "text-red-500"
                  : "transform transition-all duration-300 hover:-translate-y-1 hover:text-red-500"
              }`}
            >
              {t("features")}
            </a>
          </div>
        </div>
        <div className="flex gap-2 lg:hidden">
          <ThemeToggle />
          <LangDropdown />
        </div>
        <div className="hidden items-center gap-4 lg:inline-flex">
          <Button
            variant="contained"
            size="md"
            onClick={() =>
              window.open(
                "https://giftstorming-ai.beehiiv.com/subscribe",
                "_blank"
              )
            }
          >
            {t("get_early_access")}
          </Button>
          <div className="flex gap-2">
            <ThemeToggle />
            <LangDropdown />
          </div>
        </div>
        <button
          onClick={handleMenuClick}
          className="flex items-center justify-center lg:hidden"
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
      {isMenuOpen && (
        <div className="fixed left-0 top-14 z-10 flex h-full w-full flex-col items-center justify-start gap-6 bg-neutral-50 px-5 py-4 font-lato dark:bg-neutral-950 lg:hidden">
          <a href="#" className={activeSection === "" ? "text-red-500" : ""}>
            {t("home")}
          </a>
          <a
            href="#how-it-works"
            className={activeSection === "how-it-works" ? "text-red-500" : ""}
          >
            {t("how_it_works")}
          </a>
          <a
            href="#features"
            className={activeSection === "features" ? "text-red-500" : ""}
          >
            {t("features")}
          </a>
          <Button
            variant="contained"
            size="lg"
            fullWidth
            onClick={() =>
              window.open(
                "https://giftstorming-ai.beehiiv.com/subscribe",
                "_blank"
              )
            }
          >
            {t("get_early_access")}
          </Button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
