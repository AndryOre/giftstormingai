import Head from "next/head";
import type { NextPage, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import Navbar from "~/components/Navbar/Navbar";
import Input from "~/components/Input/Input";
import Button from "~/components/Button/Button";
import {
  Play,
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
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <section className="flex flex-col items-center justify-center gap-8 px-6 py-10 text-center lg:flex-row lg:items-start lg:justify-between lg:px-24 lg:text-left">
          <div className="flex flex-col gap-6 lg:mt-8 lg:gap-10">
            <div className="flex flex-col gap-4 lg:text-lg">
              <div className="font-montserrat text-3xl font-bold lg:text-5xl">
                <span className="bg-gradient-to-t from-neutral-950 to-neutral-950/50 bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-50/50">
                  {t("discover_perfect_gift_start")}
                </span>
                <span className="bg-gradient-to-t from-red-500 to-red-500/50 bg-clip-text text-transparent dark:bg-gradient-to-b">
                  {t("perfect_gift")}
                </span>
                <span className="bg-gradient-to-t from-neutral-950 to-neutral-950/50 bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-50/50">
                  {t("discover_perfect_gift_end")}
                </span>
                <span className="bg-gradient-to-t from-red-500 to-red-500/50 bg-clip-text text-transparent dark:bg-gradient-to-b">
                  {t("ai")}
                </span>
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
              <div>
                <Button variant="contained" size="md">
                  {t("get_early_access")}
                </Button>
              </div>
            </div>
          </div>
          <div className="flex aspect-video w-full items-center justify-center rounded border border-neutral-400 bg-neutral-200 shadow dark:border-neutral-600 dark:bg-neutral-800 dark:shadow-[0px_1px_3px_rgba(255,255,255,0.1),0px_1px_2px_-1px_rgba(255,255,255,0.1)] lg:max-w-[50%]">
            <video controls className="rounded ">
              <source
                src="https://res.cloudinary.com/dhwxnbnaj/video/upload/v1689133535/Rick_Rolled_dojqni.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center gap-8 px-6 py-10 text-center lg:px-24">
          <SectionTitle title={t("how_it_works")} />
          <div className="flex w-full flex-col justify-center bg-gradient-to-t from-neutral-950 to-neutral-950/50 bg-clip-text text-center font-montserrat text-2xl font-bold text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-50/50 lg:text-3xl">
            {t("follow_simple_steps")}
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
        </section>
        <section className="flex flex-col items-center justify-center gap-8 px-6 py-10 text-center lg:px-24">
          <SectionTitle title={t("features")} />
          <div className="flex w-full flex-col justify-center bg-gradient-to-t from-neutral-950 to-neutral-950/50 bg-clip-text text-center font-montserrat text-2xl font-bold text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-50/50 lg:text-3xl">
            {t("explore_features")}
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
        </section>
        <section className="flex flex-col items-center justify-center gap-8 px-6 py-10 text-center lg:px-24">
          <div className="flex w-full flex-col items-center justify-center gap-4 rounded bg-gradient-to-bl from-red-500 to-red-600 p-6 shadow-[0px_2px_4px_-1px_rgba(239,68,68,0.06),0px_4px_6px_-1px_rgba(239,68,68,0.10)] lg:py-12">
            <div className="font-montserrat text-2xl font-semibold text-neutral-50">
              {t("ready_to_find_gift")}
            </div>
            <Button variant="contained" size="md">
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
