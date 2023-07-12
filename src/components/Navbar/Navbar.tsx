import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { List, X } from "@phosphor-icons/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

function Navbar() {
  const { t } = useTranslation("common");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

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
    <nav className="sticky top-0 z-50">
      <div
        className={`flex items-center justify-between px-5 py-4 lg:px-24 lg:py-8 ${
          isMenuOpen
            ? "bg-neutral-50 dark:bg-neutral-950"
            : "bg-neutral-50 bg-opacity-50 backdrop-blur-sm dark:bg-neutral-950 dark:bg-opacity-50"
        }`}
      >
        <div className="font-montserrat text-xl font-bold lg:text-2xl">
          Giftstorming Ai
        </div>
        <div className="hidden lg:flex lg:items-center lg:justify-between">
          <div className="flex justify-center gap-8">
            <a
              href="#"
              className={router.pathname === "/" ? "text-red-500" : ""}
            >
              {t("home")}
            </a>
            <a
              href="#how-it-works"
              className={
                router.pathname === "/how-it-works" ? "text-red-500" : ""
              }
            >
              {t("how_it_works")}
            </a>
            <a
              href="#features"
              className={router.pathname === "/features" ? "text-red-500" : ""}
            >
              {t("features")}
            </a>
          </div>
        </div>
        <div className="hidden lg:block">
          <Button variant="contained" size="md">
            {t("get_early_access")}
          </Button>
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
          <a href="#" className={router.pathname === "/" ? "text-red-500" : ""}>
            {t("home")}
          </a>
          <a
            href="#how-it-works"
            className={
              router.pathname === "/how-it-works" ? "text-red-500" : ""
            }
          >
            {t("how_it_works")}
          </a>
          <a
            href="#features"
            className={router.pathname === "/features" ? "text-red-500" : ""}
          >
            {t("features")}
          </a>
          <Button variant="contained" size="lg" fullWidth>
            {t("get_early_access")}
          </Button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
