import styled from "./styled";
import {
  compose,
  space,
  layout,
  typography,
  color,
  flexbox,
} from "styled-system";
import css, { get } from "@styled-system/css";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { View, Text as PrimitiveText } from "react-primitives";

const sx = (props) => css(props.sx)(props.theme);
const base = (props) => css(props.__css)(props.theme);
const variant = ({ theme, variant, tx = "variants" }) =>
  css(get(theme, tx + "." + variant, get(theme, variant)))(theme);

export const Box = styled(View, {
  shouldForwardProp,
})(
  {
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
  },
  base,
  variant,
  sx,
  (props) => props.css,
  compose(space, layout, typography, color, flexbox)
);

export const Text = styled(PrimitiveText, {
  shouldForwardProp,
})(
  {
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
  },
  base,
  variant,
  sx,
  (props) => props.css,
  compose(space, layout, typography, color, flexbox)
);

export const Flex = styled(Box)({
  display: "flex",
});
