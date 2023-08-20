import mixpanel from "mixpanel-browser";
import { useEffect } from "react";
import { useRouter } from "next/router";

interface IMixpanelTracking {
  pageViewed(): void;
  buttonClicked(buttonName: string): void;
  socialClicked(socialName: string): void;
  themeChanged(themeName: string): void;
  langChanged(langsName: string): void;
}

class MixpanelTracking implements IMixpanelTracking {
  private static _instance: MixpanelTracking = new MixpanelTracking();

  public static getInstance(): MixpanelTracking {
    return this._instance;
  }

  private constructor() {
    mixpanel.init("7b3f436a08fedb21b8b0ad0e91e390ae" || "", {
      debug: true,
      ignore_dnt: true,
    });
  }

  protected track(name: string, data: object = {}) {
    mixpanel.track(name, data);
  }

  public pageViewed() {
    this.track("page_viewed");
  }

  public buttonClicked(buttonName: string) {
    this.track("button_clicked", { buttonName: buttonName });
  }

  public socialClicked(socialName: string) {
    this.track("social_clicked", { socialName: socialName });
  }

  public themeChanged(themeName: string) {
    this.track("theme_changed", { theme: themeName });
  }

  public langChanged(langName: string) {
    this.track("lang_changed", { lang: langName });
  }
}

const Mixpanel = () => {
  const router = useRouter();

  useEffect(() => {
    const mixpanelInstance = MixpanelTracking.getInstance();
    mixpanelInstance.pageViewed();

    const handleRouteChange = () => {
      mixpanelInstance.pageViewed();
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return null;
};

export default Mixpanel;
export { MixpanelTracking };
export type { IMixpanelTracking };
