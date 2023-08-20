import { Heart } from "@phosphor-icons/react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { MixpanelTracking } from "../Analytics/Mixpanel/Mixpanel";
import type { IMixpanelTracking } from "../Analytics/Mixpanel/Mixpanel";

export default function Footer() {
  const { t } = useTranslation("common");

  const handleTwitterClick = () => {
    const mixpanelInstance: IMixpanelTracking = MixpanelTracking.getInstance();
    mixpanelInstance.socialClicked("twitter");
  };

  const handleGithubrClick = () => {
    const mixpanelInstance: IMixpanelTracking = MixpanelTracking.getInstance();
    mixpanelInstance.socialClicked("github");
  };

  return (
    <footer className="flex flex-col gap-4 px-5 py-3 font-lato text-neutral-800 dark:text-neutral-200 lg:gap-2 lg:px-24 lg:py-6">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <Link
          href="/"
          className="font-montserrat text-xl font-bold lg:text-2xl"
        >
          <span className="bg-gradient-to-t from-neutral-950 to-neutral-950/50 bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-50/50">
            Giftstorming {""}
          </span>
          <span className="bg-gradient-to-t from-red-500 to-red-500/50 bg-clip-text text-transparent dark:bg-gradient-to-b">
            Ai
          </span>
        </Link>
        <div className="flex flex-col gap-2 lg:flex-row lg:gap-8">
          <a
            href="https://github.com/AndryOre/giftstormingai"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-900 hover:text-red-500 dark:text-neutral-100 dark:hover:text-red-500"
            onClick={handleGithubrClick}
          >
            Github
          </a>
          <Link
            href="/legal-center/privacy-policy"
            className="text-neutral-900 hover:text-red-500 dark:text-neutral-100 dark:hover:text-red-500"
          >
            Privacy Policy
          </Link>
          <Link
            href="/legal-center/terms-and-conditions"
            className="text-neutral-900 hover:text-red-500 dark:text-neutral-100 dark:hover:text-red-500"
          >
            Terms and Conditions
          </Link>
        </div>
      </div>
      <div className="h-px w-full bg-neutral-300 bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-100 dark:bg-gradient-to-r dark:from-neutral-900 dark:via-neutral-700 dark:to-neutral-900"></div>
      <div className="flex items-center gap-2 lg:justify-center">
        <span>{t("built_with")}</span>
        <Heart weight="fill" size={24} className="text-red-500" />
        <span>{t("by_AndryOre")}</span>
        <a
          href="https://twitter.com/AndryOre"
          target="_blank"
          rel="noreferrer"
          className="hover:text-red-500"
          onClick={handleTwitterClick}
        >
          AndryOre
        </a>
      </div>
    </footer>
  );
}
