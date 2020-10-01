// @ts-ignore FIXME:
import { Platform } from "react-primitives";

let styled, ThemeProvider;

import styledW, { ThemeProvider as ThemeProviderW } from "styled-components";
import styledP, {
  ThemeProvider as ThemeProviderP,
} from "styled-components/primitives";

if (Platform.OS !== "web") {
  styled = styledP;
  ThemeProvider = ThemeProviderP;
} else {
  styled = styledW;
  ThemeProvider = ThemeProviderW;
}

export { ThemeProvider };

export default styled;
