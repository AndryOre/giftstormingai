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

  const handleAcceptAll = () => {
    setCookie("cookieConsent", "all", { maxAge: 60 * 60 * 24 * 365 });
    setShowBanner(false);
    updateAnalyticsStorage("granted");
  };

  const handleDeclineOptional = () => {
    setCookie("cookieConsent", "essential", { maxAge: 60 * 60 * 24 * 365 });
    setShowBanner(false);
    updateAnalyticsStorage("denied");
  };

  const updateAnalyticsStorage = (newValue: "granted" | "denied") => {
    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });
    // For Testing
    console.log("Cookie Consent: ", newValue);
  };

  if (!showBanner) return null;

  return (
    <div className="z-50 flex justify-center	">
      <div className="fixed bottom-4 w-[87.5%] rounded bg-neutral-200 p-4 shadow-lg dark:bg-neutral-800 dark:shadow-[0px_10px_15px_-3_rgba(255,255,255,0.1),0px_4px_6px_-4px_rgba(255,255,255,0.1)] lg:w-[87.87%]">
        <div className="flex flex-col items-center gap-4 lg:flex-row">
          <div className="flex flex-col items-center gap-2 text-center lg:flex-row lg:text-start">
            <Cookie className="h-10 w-10 lg:h-6 lg:w-6" />
            <div>
              <span className="font-bold">{t("we_use_cookies")}</span>{" "}
              {t("essential_cookies_text")}{" "}
              <span className="hover:text-neutral-800 hover:underline hover:dark:text-neutral-200">
                <Link href="/cookies-policy">{t("learn_more")}</Link>
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <Button variant="contained" onClick={handleAcceptAll}>
                {t("accept_all")}
              </Button>
            </div>
            <div>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleDeclineOptional}
              >
                {t("decline_optional")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesBanner;
