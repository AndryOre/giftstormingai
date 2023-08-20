"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { hasCookie, setCookie } from "cookies-next";
import { useTranslation } from "next-i18next";
import { Cookie } from "@phosphor-icons/react";
import Button from "~/components/Button/Button";

const CookiesBanner = () => {
  const { t } = useTranslation("common");

  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = hasCookie("cookieConsent");
    setShowBanner(!consent);
  }, []);

  const handleOkay = () => {
    setCookie("cookieConsent", "okay", { maxAge: 60 * 60 * 24 * 365 });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="z-50 flex justify-center">
      <div className="fixed bottom-4 w-[87.5%] rounded bg-neutral-200 p-4 shadow-lg dark:bg-neutral-800 dark:shadow-[0px_10px_15px_-3_rgba(255,255,255,0.1),0px_4px_6px_-4px_rgba(255,255,255,0.1)] lg:w-[87.87%]">
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
          <div className="flex flex-col items-center gap-2 text-center font-montserrat lg:flex-row lg:text-start">
            <Cookie className="h-8 w-8" />
            <div>
              <span className="font-bold">{t("we_use_cookies")}</span>{" "}
              {t("we_use_cookies_desc")}{" "}
              <span className="hover:text-neutral-800 hover:underline hover:dark:text-neutral-200">
                <Link href="/legal-center/cookies-policy">
                  {t("learn_more")}
                </Link>
              </span>
            </div>
          </div>
          <Button variant="contained" onClick={handleOkay}>
            {t("okay_cookies")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookiesBanner;
