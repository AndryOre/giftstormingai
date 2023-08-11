import type { NextPage, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import LegalLayout from "~/components/Layouts/Legal Layout/LegalLayout";
import Head from "next/head";
import Link from "next/link";
import Button from "~/components/Button/Button";

const TermsAndConditions: NextPage = () => {
  const { t } = useTranslation("common");
  return (
    <LegalLayout>
      <Head>
        <title>{t("legal_center.tos.title")}</title>
      </Head>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <div>
            <div className="font-montserrat text-3xl font-bold">
              {t("legal_center.tos.heading")}
            </div>
            <div className="font-lato text-neutral-700 dark:text-neutral-300">
              {t("legal_center.tos.acceptance")}
            </div>
          </div>
          <div>
            <div className="font-montserrat text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t("legal_center.tos.use_of_site")}
            </div>
            <div className="font-lato text-neutral-700 dark:text-neutral-300">
              <div>
                <span className="font-montserrat font-semibold text-neutral-800 dark:text-neutral-200">
                  {t("legal_center.tos.access_and_use")}
                </span>{" "}
                {t("legal_center.tos.access_and_use_desc")}
              </div>
              <div>
                <span className="font-montserrat font-semibold text-neutral-800 dark:text-neutral-200">
                  {t("legal_center.tos.levels_of_access")}
                </span>
                <ul className="flex list-inside list-disc flex-col gap-1 font-lato text-neutral-700 dark:text-neutral-300">
                  <li>
                    <span className="font-montserrat font-semibold text-neutral-800 dark:text-neutral-200">
                      {t("legal_center.tos.guest")}
                    </span>{" "}
                    {t("legal_center.tos.guest_desc")}
                  </li>
                  <li>
                    <span className="font-montserrat font-semibold text-neutral-800 dark:text-neutral-200">
                      {t("legal_center.tos.registered_user")}
                    </span>{" "}
                    {t("legal_center.tos.registered_user_desc")}
                  </li>
                </ul>
              </div>
              <div>
                <span className="font-montserrat font-semibold text-neutral-800 dark:text-neutral-200">
                  {t("legal_center.tos.prohibitions")}
                </span>{" "}
                {t("legal_center.tos.prohibitions_desc")}
              </div>
              <div>
                <span className="font-montserrat font-semibold text-neutral-800 dark:text-neutral-200">
                  {t("legal_center.tos.ai_services")}
                </span>{" "}
                {t("legal_center.tos.ai_services_desc")}
              </div>
            </div>
          </div>
          <div>
            <div className="font-montserrat text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t("legal_center.tos.registration")}
            </div>
            <div className="font-lato text-neutral-700 dark:text-neutral-300">
              {t("legal_center.tos.registration_desc")}
            </div>
          </div>
          <div>
            <div className="font-montserrat text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t("legal_center.tos.content_and_ip")}
            </div>
            <div className="font-lato text-neutral-700 dark:text-neutral-300">
              <div>
                <span className="font-montserrat font-semibold text-neutral-800 dark:text-neutral-200">
                  {t("legal_center.tos.property")}
                </span>{" "}
                {t("legal_center.tos.property_desc")}
              </div>
              <div>
                <span className="font-montserrat font-semibold text-neutral-800 dark:text-neutral-200">
                  {t("legal_center.tos.limited_license")}
                </span>{" "}
                {t("legal_center.tos.limited_license_desc")}
              </div>
            </div>
          </div>
          <div>
            <div className="font-montserrat text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t("legal_center.tos.privacy_and_cookies")}
            </div>
            <div className="font-lato text-neutral-700 dark:text-neutral-300">
              {t("legal_center.tos.privacy_and_cookies_desc1")}{" "}
              <a
                href="/legal-center/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-200 hover:underline"
              >
                {t("legal_center.tos.privacyPolicy")}
              </a>{" "}
              {t("legal_center.tos.cookies_and")}{" "}
              <a
                href="/legal-center/cookies-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-200 hover:underline"
              >
                {t("legal_center.tos.cookiesPolicy")}
              </a>{" "}
              {t("legal_center.tos.privacy_and_cookies_desc2")}
            </div>
          </div>
          <div>
            <div className="font-montserrat text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t("legal_center.tos.limitation_of_liability")}
            </div>
            <div className="font-lato text-neutral-700 dark:text-neutral-300">
              <div>
                <span className="font-montserrat font-semibold text-neutral-800 dark:text-neutral-200">
                  {t("legal_center.tos.no_warranties")}
                </span>{" "}
                {t("legal_center.tos.no_warranties_desc")}
              </div>
              <div>
                <span className="font-montserrat font-semibold text-neutral-800 dark:text-neutral-200">
                  {t("legal_center.tos.limitation_of_responsibility")}
                </span>{" "}
                {t("legal_center.tos.limitation_of_responsibility_desc")}
              </div>
            </div>
          </div>
          <div>
            <div className="font-montserrat text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t("legal_center.tos.changes_to_terms")}
            </div>
            <div className="font-lato text-neutral-700 dark:text-neutral-300">
              {t("legal_center.tos.changes_to_terms_desc")}
            </div>
          </div>
          <div>
            <div className="font-montserrat text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t("legal_center.tos.law_and_jurisdiction")}
            </div>
            <div className="font-lato text-neutral-700 dark:text-neutral-300">
              {t("legal_center.tos.law_and_jurisdiction_desc")}
            </div>
          </div>
          <div>
            <div className="font-montserrat text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t("legal_center.tos.contact")}
            </div>
            <div className="font-lato text-neutral-700 dark:text-neutral-300">
              {t("legal_center.tos.contact_desc")}{" "}
              <a
                href="mailto:legal@giftstorming-ai.com"
                className="hover:text-neutral-200 hover:underline"
              >
                legal@giftstorming-ai.com
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button variant="text">
            <Link href="/">{t("legal_center.back_to_home")}</Link>
          </Button>
        </div>
      </div>
    </LegalLayout>
  );
};

export default TermsAndConditions;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || "en", ["common"])),
  },
});
