import type { ReactNode } from "react";
import Head from "next/head";
import Navbar from "~/components/Navbar/Navbar";
import Footer from "~/components/Footer/Footer";

type LegalLayoutProps = {
  children: ReactNode;
};

const LegalLayout = ({ children }: LegalLayoutProps) => {
  return (
    <>
      <Head>
        <title>Legal Center - Giftstorming Ai</title>
      </Head>
      <div className="flex min-h-screen flex-col">
        <Navbar layoutType="legalCenter" />
        <main className="flex grow flex-col px-6 lg:px-24">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default LegalLayout;
