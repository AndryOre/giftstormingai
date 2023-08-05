import Head from "next/head";
import type { NextPage, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import Navbar from "~/components/Navbar/Navbar";
import Input from "~/components/Input/Input";
import Button from "~/components/Button/Button";
import {
  CursorClick,
  Gift,
  Translate,
  Sun,
  Heart,
} from "@phosphor-icons/react";
import SectionTitle from "~/components/SectionTitle/SectionTitle";
import StepCard from "~/components/Cards/StepCard/StepCard";
import FeatureCard from "~/components/Cards/FeatureCard/FeatureCard";
import Footer from "~/components/Footer/Footer";

const Home: NextPage = () => {
  const { t } = useTranslation("common");

  const [email, setEmail] = useState("");
  return (
    <>
      <Head>
        <title>Giftstorming Ai</title>
        <meta
          name="description"
          content="Discover the Perfect Gift through AI"
        />
        <link rel="icon" href="/favicon.svg" />

        <meta property="og:url" content="https://giftstorming-ai.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Giftstorming Ai" />
        <meta
          property="og:description"
          content="Discover the Perfect Gift through AI"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dhwxnbnaj/image/upload/v1681706326/bxnbnrp9wcim1hmizm78.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="giftstorming-ai.vercel.app" />
        <meta
          property="twitter:url"
          content="https://giftstorming-ai.vercel.app/"
        />
        <meta name="twitter:title" content="Giftstorming Ai" />
        <meta
          name="twitter:description"
          content="Discover the Perfect Gift through AI"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dhwxnbnaj/image/upload/v1681706326/bxnbnrp9wcim1hmizm78.png"
        />
      </Head>
      <main>
        <Navbar />
        <section className="flex flex-col items-center justify-center gap-8 px-6 py-10 text-center lg:min-h-screen lg:flex-row lg:items-start lg:justify-between lg:px-24 lg:py-32 lg:text-left">
          <div className="flex flex-col gap-6 lg:gap-10">
            <div className="flex flex-col gap-4 lg:text-lg">
              <div className="flex flex-col font-montserrat text-3xl font-bold lg:text-5xl xl:text-6xl">
                <span className="bg-gradient-to-t from-neutral-950 to-neutral-950/50 bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-50/50">
                  {t("discover_perfect_gift_start")}
                </span>
                <span className="bg-gradient-to-t from-red-500 to-red-500/50 bg-clip-text text-transparent dark:bg-gradient-to-b">
                  {t("perfect_gift")}
                </span>
                <div>
                  <span className="bg-gradient-to-t from-neutral-950 to-neutral-950/50 bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-50/50">
                    {t("discover_perfect_gift_end")}
                  </span>
                  <span className="bg-gradient-to-t from-red-500 to-red-500/50 bg-clip-text text-transparent dark:bg-gradient-to-b">
                    {t("ai")}
                  </span>
                </div>
              </div>
              <div className="font-lato text-neutral-800 dark:text-neutral-200">
                {t("storm_of_gift_ideas")}
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 lg:flex-row">
              <div className="w-full lg:w-auto">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("enter_email")}
                />
              </div>
              <div className="xl:hidden">
                <Button
                  variant="contained"
                  onClick={() =>
                    (window.location.href = `https://magic.beehiiv.com/v1/2ccc515f-1bc0-4eb2-9e0a-c8e714a8cbc8?email=${email}&redirect_to=https://giftstorming-ai.vercel.app/&utm_source=landing&utm_medium=hero&utm_campaign=early_access`)
                  }
                >
                  {t("get_early_access")}
                </Button>
              </div>
              <div className="hidden xl:block">
                <Button
                  variant="contained"
                  size="md"
                  onClick={() =>
                    (window.location.href = `https://magic.beehiiv.com/v1/2ccc515f-1bc0-4eb2-9e0a-c8e714a8cbc8?email=${email}&redirect_to=https://giftstorming-ai.vercel.app/&utm_source=landing&utm_medium=hero&utm_campaign=early_access`)
                  }
                >
                  {t("get_early_access")}
                </Button>
              </div>
            </div>
          </div>
          <div className="flex aspect-video w-full items-center justify-center lg:max-w-[50%]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="rounded border dark:shadow-[0px_1px_3px_rgba(255,255,255,0.1),0px_1px_2px_-1px_rgba(255,255,255,0.1)]"
            >
              <source
                src="https://res.cloudinary.com/dhwxnbnaj/video/upload/v1691197583/Giftstorming_Ai_Early_Access.mp4"
                type="video/mp4"
              />
              {t("browser_does_not_support_video")}
            </video>
          </div>
        </section>
        <section
          id="how-it-works"
          className="flex flex-col items-center justify-center gap-8 px-6 py-10 text-center lg:min-h-screen lg:px-24"
        >
          <SectionTitle title={t("how_it_works")} />
          <div className="flex flex-col gap-8 lg:gap-32">
            <div className="flex flex-col bg-gradient-to-t from-neutral-950 to-neutral-950/50 bg-clip-text text-center font-montserrat text-2xl font-bold text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-50/50 lg:gap-2 lg:text-4xl">
              <span>{t("follow_simple_steps_part1")}</span>
              <span>{t("follow_simple_steps_part2")}</span>
              <span>{t("follow_simple_steps_part3")}</span>
            </div>
            <div className="flex flex-col gap-6 text-left lg:flex-row">
              <StepCard
                step={1}
                title={t("tell_us_about_gift")}
                description={t("who_is_lucky_one")}
              />
              <StepCard
                step={2}
                title={t("hit_magic_button")}
                description={t("done_with_details")}
              />
              <StepCard
                step={3}
                title={t("get_your_personalized_gift_ideas")}
                description={t("voila_gift_ideas")}
              />
            </div>
          </div>
        </section>
        <section
          id="features"
          className="flex flex-col items-center justify-center gap-8 px-6 py-10 text-center lg:min-h-screen lg:px-24"
        >
          <SectionTitle title={t("features")} />
          <div className="flex flex-col gap-8 lg:gap-32">
            <div className="flex flex-col bg-gradient-to-t from-neutral-950 to-neutral-950/50 bg-clip-text text-center font-montserrat text-2xl font-bold text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-50/50 lg:gap-2 lg:text-4xl">
              <span>{t("explore_features_part1")}</span>
              <span>{t("explore_features_part2")}</span>
              <span>{t("explore_features_part3")}</span>
            </div>
            <div className="flex flex-col gap-6 text-left lg:flex-row">
              <FeatureCard
                icon={<CursorClick />}
                title={t("easy_peasy")}
                description={t("user_friendly_interface")}
                color="yellow"
              />
              <FeatureCard
                icon={<Gift />}
                title={t("tailored_just_for_you")}
                description={t("personalized_gift_ideas")}
                color="green"
              />
              <FeatureCard
                icon={<Translate />}
                title={t("lost_in_translation")}
                description={t("comfortable_in_english_or_spanish")}
                color="blue"
              />
              <FeatureCard
                icon={<Sun />}
                title={t("day_or_night_we_got_the_look")}
                description={t("choose_light_dark_theme")}
                color="purple"
              />
              <FeatureCard
                icon={<Heart />}
                title={t("bookmark_your_faves")}
                description={t("add_to_favorites")}
                color="red"
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center gap-8 px-6 py-10 text-center lg:px-24">
          <div className="bg-pattern flex w-full flex-col items-center justify-center gap-4 rounded p-6 shadow-[0px_2px_4px_-1px_rgba(239,68,68,0.06),0px_4px_6px_-1px_rgba(239,68,68,0.10)] lg:py-12">
            <div className="flex flex-col font-montserrat text-2xl font-semibold text-neutral-50 lg:text-3xl">
              <span>{t("ready_to_find_gift")}</span>
              <span>{t("start_now")}</span>
            </div>
            <Button
              variant="contained"
              size="md"
              color="secondary"
              onClick={() =>
                window.open(
                  "https://giftstorming-ai.beehiiv.com/subscribe",
                  "_blank"
                )
              }
            >
              {t("get_early_access")}
            </Button>
          </div>
        </section>
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
