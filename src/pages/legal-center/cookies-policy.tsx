import type { NextPage, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import LegalLayout from "~/components/Layouts/Legal Layout/LegalLayout";
import Head from "next/head";
import Link from "next/link";
import Button from "~/components/Button/Button";

const CookiesPolicy: NextPage = () => {
  const { t } = useTranslation("common");
  return (
    <LegalLayout>
      <Head>
        <title>{t("legal_center.cookies.title")}</title>
      </Head>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <div>
            <div className="font-montserrat text-3xl font-bold">
              {t("legal_center.cookies.heading")}
            </div>
            <div className="font-lato text-neutral-700 dark:text-neutral-300">
              {t("legal_center.cookies.intro")}
            </div>
          </div>
          <div>
            <div className="font-montserrat text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t("legal_center.cookies.what_are_cookies")}
            </div>
            <div className="font-lato text-neutral-700 dark:text-neutral-300">
              {t("legal_center.cookies.what_are_cookies_desc")}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-montserrat text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t("legal_center.cookies.how_we_use_cookies")}
            </div>
            <ul className="flex list-inside list-disc flex-col gap-1 font-lato text-neutral-700 dark:text-neutral-300">
              <li>
                <span className="font-montserrat font-semibold text-neutral-800 dark:text-neutral-200">
                  {t("legal_center.cookies.experience_personalized")}
                </span>{" "}
                {t("legal_center.cookies.experience_personalized_desc")}
              </li>
              <li>
                <span className="font-montserrat font-semibold text-neutral-800 dark:text-neutral-200">
                  {t("legal_center.cookies.navigation_improvement")}
                </span>{" "}
                {t("legal_center.cookies.navigation_improvement_desc")}
              </li>
              <li>
                <span className="font-montserrat font-semibold text-neutral-800 dark:text-neutral-200">
                  {t("legal_center.cookies.security")}
                </span>{" "}
                {t("legal_center.cookies.security_desc")}
              </li>
            </ul>
          </div>
          <div>
            <div>
              <div className="font-montserrat text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                {t("legal_center.cookies.your_options")}
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-lato text-neutral-700 dark:text-neutral-300">
                  <div>
                    <span className="font-montserrat font-semibold text-neutral-800 dark:text-neutral-200">
                      {t("legal_center.cookies.essential_cookies")}
                    </span>{" "}
                    {t("legal_center.cookies.essential_cookies_desc")}
                  </div>
                </div>
                <div>
                  <div className="font-montserrat font-semibold text-neutral-800 dark:text-neutral-200">
                    {t("legal_center.cookies.optional_cookies")}
                  </div>
                  <ul className="flex list-inside list-disc flex-col gap-1 font-lato text-neutral-700 dark:text-neutral-300">
                    <li>
                      <span className="font-montserrat font-semibold text-neutral-800 dark:text-neutral-200">
                        {t("legal_center.cookies.google_analytics")}
                      </span>{" "}
                      {t("legal_center.cookies.google_analytics_desc")}{" "}
                      <a
                        href="https://policies.google.com/technologies/cookies"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-neutral-200 hover:underline"
                      >
                        {t("legal_center.cookies.google_privacy")}
                      </a>
                    </li>
                    <li>
                      <span className="font-montserrat font-semibold text-neutral-800 dark:text-neutral-200">
                        {t("legal_center.cookies.mixpanel")}
                      </span>{" "}
                      {t("legal_center.cookies.mixpanel_desc")}{" "}
                      <a
                        href="https://mixpanel.com/legal/privacy-policy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-neutral-200 hover:underline"
                      >
                        {t("legal_center.cookies.mixpanel_privacy")}
                      </a>
                    </li>
                    <li>
                      <span className="font-montserrat font-semibold text-neutral-800 dark:text-neutral-200">
                        {t("legal_center.cookies.authentication_cookies")}
                      </span>{" "}
                      {t("legal_center.cookies.authentication_cookies_desc")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button variant="text">
            <Link href="/legal-center">
              {t("legal_center.back_to_legal_center")}
            </Link>
          </Button>
        </div>
      </div>
    </LegalLayout>
  );
};

export default CookiesPolicy;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || "en", ["common"])),
  },
});
