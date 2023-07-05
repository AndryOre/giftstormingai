import { useState } from "react";
import { Translate } from "@phosphor-icons/react";
import { useRouter } from "next/router";

const LangDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const changeLanguage = (lang: string) => {
    void router.push(router.pathname, router.pathname, { locale: lang });
    setIsOpen(false);
  };

  return (
    <div className="flex justify-end">
      <div className="relative">
        <button
          className="dark:shadow-[0 1px 2px 0 rgba(255,255,255,0.05)] inline-block cursor-pointer rounded border border-neutral-100 bg-neutral-50 p-1 shadow-sm dark:border-neutral-900 dark:bg-neutral-950"
          onClick={handleDropdown}
        >
          <Translate weight="regular" size={16} className="text-blue-500" />
        </button>
        {isOpen && (
          <div className="dark:shadow-[0 1px 2px 0 rgba(255,255,255,0.05)] absolute right-0 z-10 mt-1 rounded border border-neutral-200 bg-neutral-100 py-1 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <ul className="font-lato font-bold">
              <li
                className="cursor-pointer px-2 hover:bg-neutral-200 hover:dark:bg-neutral-800"
                onClick={() => changeLanguage("en")}
              >
                <a>English</a>
              </li>
              <li
                className="cursor-pointer px-2 hover:bg-neutral-200 hover:dark:bg-neutral-800"
                onClick={() => changeLanguage("es")}
              >
                <a>Spanish</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default LangDropdown;
