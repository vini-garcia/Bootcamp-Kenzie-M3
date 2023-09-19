import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      primaryPoppins: string;
      secondaryNerko: string;
      primaryFocusNarrow: string;
    };
    colors: {
      greenPrimary: string;
      greenSecondary: string;
      orangePrimary: string;
      primaryFocus: string;
      BackgroundLight: string;
      backgroundDark: string;
      gray600: string;
      gray300: string;
      gray150: string;
      gray100: string;
      gray0: string;
      white: string;
    };
  }
}
