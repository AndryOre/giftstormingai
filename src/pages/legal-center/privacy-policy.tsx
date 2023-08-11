import type { NextPage, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import LegalLayout from "~/components/Layouts/Legal Layout/LegalLayout";
import Head from "next/head";
import Link from "next/link";
import Button from "~/components/Button/Button";

const PrivacyPolicy: NextPage = () => {
  const { t } = useTranslation("common");
  return (
    <LegalLayout>
      <Head>
        <title>{t("legal_center.privacy.title")}</title>
      </Head>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <div>
            <div className="font-montserrat text-3xl font-bold">
              {t("legal_center.privacy.heading")}
            </div>
          </div>
          <div>
            <div className="font-montserrat text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t("legal_center.privacy.information_we_collect")}
            </div>
            <div className="font-lato text-neutral-700 dark:text-neutral-300">
              {t("legal_center.privacy.information_we_collect_desc")}
            </div>
          </div>
          <div>
            <div className="font-montserrat text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t("legal_center.privacy.information_automatically_collected")}
            </div>
            <div className="font-lato text-neutral-700 dark:text-neutral-300">
              {t(
                "legal_center.privacy.information_automatically_collected_desc"
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-montserrat text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t("legal_center.privacy.how_we_use_your_information")}
            </div>
            <ul className="flex list-inside list-disc flex-col gap-1 font-lato text-neutral-700 dark:text-neutral-300">
              <li>{t("legal_center.privacy.provide_services")}</li>
              <li>{t("legal_center.privacy.send_communications")}</li>
              <li>{t("legal_center.privacy.respond_to_requests")}</li>
              <li>{t("legal_center.privacy.analyze_activity")}</li>
            </ul>
          </div>
          <div>
            <div className="font-montserrat text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t("legal_center.privacy.share_and_disclose_information")}
            </div>
            <div className="font-lato text-neutral-700 dark:text-neutral-300">
              {t("legal_center.privacy.share_and_disclose_information_desc")}
            </div>
          </div>
          <div>
            <div className="font-montserrat text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t("legal_center.privacy.your_options_and_rights")}
            </div>
            <div className="font-lato text-neutral-700 dark:text-neutral-300">
              {t("legal_center.privacy.your_options_and_rights_desc")}
            </div>
          </div>
          <div>
            <div className="font-montserrat text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t("legal_center.privacy.changes_to_this_policy")}
            </div>
            <div className="font-lato text-neutral-700 dark:text-neutral-300">
              {t("legal_center.privacy.changes_to_this_policy_desc")}
            </div>
          </div>
          <div>
            <div className="font-montserrat text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t("legal_center.privacy.contact")}
            </div>
            <div className="font-lato text-neutral-700 dark:text-neutral-300">
              {t("legal_center.privacy.contact_desc")}{" "}
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
            <Link href="/legal-center">
              {t("legal_center.back_to_legal_center")}
            </Link>
          </Button>
        </div>
      </div>
    </LegalLayout>
  );
};

export default PrivacyPolicy;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || "en", ["common"])),
  },
});
