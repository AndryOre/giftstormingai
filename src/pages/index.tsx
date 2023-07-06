import Head from "next/head";
import type { NextPage, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import ThemeToggle from "~/components/ThemeToggle/ThemeToggle";
import LangDropdown from "~/components/LangDropdown/LangDropdown";
import Footer from "~/components/Footer/Footer";
import Button from "~/components/Button/Button";
import { Heart } from "@phosphor-icons/react";

const Home: NextPage = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="font-montserrat text-xl font-bold">GiftstormingAi</div>
        <div className="flex justify-end gap-2 p-8">
          <LangDropdown />
          <ThemeToggle />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 p-4">
          <div>{t("testi18n")}</div>
          <div>
            <Button variant="text" size="sm">
              Text Small
            </Button>
          </div>

          <div>
            <Button variant="text" size="md" startIcon={<Heart />}>
              Text Medium with Start Icon
            </Button>
          </div>

          <div>
            <Button variant="text" size="lg" endIcon={<Heart />}>
              Text Large with End Icon
            </Button>
          </div>

          <div>
            <Button variant="outlined" size="sm">
              Outlined Small
            </Button>
          </div>

          <div>
            <Button variant="outlined" size="md" startIcon={<Heart />}>
              Outlined Medium with Start Icon
            </Button>
          </div>

          <div>
            <Button variant="outlined" size="lg" endIcon={<Heart />}>
              Outlined Large with End Icon
            </Button>
          </div>

          <div>
            <Button variant="contained" size="sm">
              Get Early Access
            </Button>
          </div>

          <div>
            <Button variant="contained" size="md" startIcon={<Heart />}>
              Contained Medium with Start Icon
            </Button>
          </div>

          <div>
            <Button variant="contained" size="lg" endIcon={<Heart />}>
              Contained Large with End Icon
            </Button>
          </div>

          <div>
            <Button variant="contained" size="lg" disabled>
              Disabled Contained Large
            </Button>
          </div>

          <Button variant="contained" size="md" fullWidth>
            Full Width Contained Medium
          </Button>
        </div>
        <Footer />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || "en", ["common"])),
  },
});

export default Home;
