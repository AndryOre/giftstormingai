import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { Montserrat, Lato } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { appWithTranslation } from "next-i18next";
import GoogleAnalytics from "~/components/Analytics/GoogleAnalytics";
import { env } from "~/env.mjs";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-lato",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <style jsx global>
        {`
          :root {
            --font-montserrat: ${montserrat.style.fontFamily};
            --font-lato: ${lato.style.fontFamily};
          }
        `}
      </style>
      <ThemeProvider enableSystem={true} attribute="class">
        <GoogleAnalytics GA_MEASUREMENT_ID="G-EXEQ23QZ0T" />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
};

const i18nApp = appWithTranslation(MyApp);
const TRPCApp = api.withTRPC(i18nApp);

export default TRPCApp;
