import type { ReactNode } from "react";
import Head from "next/head";
import Navbar from "~/components/Navbar/Navbar";
import Footer from "~/components/Footer/Footer";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>Giftstorming Ai</title>
      </Head>
      <Navbar layoutType="guestUser" />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
