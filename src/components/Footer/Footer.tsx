import { GithubLogo, Heart } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center gap-2 px-5 py-3 text-center font-lato text-neutral-200 lg:flex-row lg:justify-between">
      <div>
        <a
          href="https://github.com/AndryOre/giftstormingai"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 lg:justify-start"
        >
          <span>Star on GitHub</span>
          <GithubLogo weight="regular" size={24} className="text-neutral-100" />
        </a>
      </div>
      <div className="flex items-center justify-center gap-2 lg:justify-end">
        <span>Built with</span>
        <Heart weight="fill" size={24} className="text-red-500" />
        <span>by</span>
        <a href="https://twitter.com/AndryOre" target="_blank" rel="noreferrer">
          AndryOre
        </a>
      </div>
    </footer>
  );
}
