import type { NextPage, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import LegalLayout from "~/components/Layouts/Legal Layout/LegalLayout";
import Head from "next/head";
import Link from "next/link";
import Button from "~/components/Button/Button";

const LegalCenter: NextPage = () => {
  const { t } = useTranslation("common");

  return (
    <LegalLayout>
      <Head>
        <title>{t("legal_center.title")}</title>
      </Head>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <div>
            <div className="font-montserrat text-3xl font-bold">
              {t("legal_center.title")}
            </div>
            <div className="font-lato text-neutral-700 dark:text-neutral-300">
              {t("legal_center.intro")}
            </div>
          </div>
          <div>
            <div className="font-montserrat text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t("legal_center.privacy_policy")}
            </div>
            <div className="font-lato text-neutral-700 dark:text-neutral-300">
              {t("legal_center.privacy_policy_desc1")}{" "}
              <Link
                href="/legal-center/privacy-policy"
                className="hover:text-neutral-200 hover:underline"
              >
                {t("legal_center.privacy_policy")}
              </Link>{" "}
              {t("legal_center.privacy_policy_desc2")}
            </div>
          </div>
          <div>
            <div className="font-montserrat text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t("legal_center.terms_and_conditions")}
            </div>
            <div className="font-lato text-neutral-700 dark:text-neutral-300">
              {t("legal_center.terms_and_conditions_desc1")}{" "}
              <Link
                href="/legal-center/terms-and-conditions"
                className="hover:text-neutral-200 hover:underline"
              >
                {t("legal_center.terms_and_conditions")}
              </Link>{" "}
              {t("legal_center.terms_and_conditions_desc2")}
            </div>
          </div>
          <div>
            <div className="font-montserrat text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t("legal_center.cookies_policy")}
            </div>
            <div className="font-lato text-neutral-700 dark:text-neutral-300">
              {t("legal_center.cookies_policy_desc1")}{" "}
              <Link
                href="/legal-center/cookies-policy"
                className="hover:text-neutral-200 hover:underline"
              >
                {t("legal_center.cookies_policy")}
              </Link>{" "}
              {t("legal_center.cookies_policy_desc2")}
            </div>
          </div>
          <div className="font-lato text-neutral-700 dark:text-neutral-300">
            {t("legal_center.contact")}{" "}
            <a
              href="mailto:legal@giftstorming-ai.com"
              className="hover:text-neutral-200 hover:underline"
            >
              legal@giftstorming-ai.com
            </a>
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

export default LegalCenter;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || "en", ["common"])),
  },
});
