import { GithubLogo, Heart } from "@phosphor-icons/react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LangDropdown from "../LangDropdown/LangDropdown";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 px-5 py-3 font-lato text-neutral-800 dark:text-neutral-200 lg:px-24 lg:py-6">
      <div className="flex flex-col items-center gap-1 lg:flex-row lg:justify-between">
        <div>
          <a
            href="https://github.com/AndryOre/giftstormingai"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 text-neutral-900 hover:text-red-500 dark:text-neutral-100 dark:hover:text-red-500 lg:justify-start"
          >
            <span>Star on GitHub</span>
            <GithubLogo weight="regular" size={24} />
          </a>
        </div>
        <div className="flex items-center justify-center gap-2 lg:justify-end">
          <span>Built with</span>
          <Heart weight="fill" size={24} className="text-red-500" />
          <span>by</span>
          <a
            href="https://twitter.com/AndryOre"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500"
          >
            AndryOre
          </a>
        </div>
      </div>
      <div className="flex justify-between">
        <ThemeToggle />
        <LangDropdown />
      </div>
    </footer>
  );
}
