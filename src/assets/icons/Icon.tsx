import { ComponentProps, FC, ForwardedRef, forwardRef } from "react";

import { icons } from "@/assets/icons/index";

type Icons = typeof icons;
type IconVariant = keyof Icons;

type VariantProps<Variant extends IconVariant> = ComponentProps<Icons[Variant]>;

type Props<Variant extends IconVariant> = {
  variant: Variant;
  className?: string;
} & VariantProps<Variant>;

function Icon<Variant extends IconVariant>(
  props: Props<Variant>,
  ref: ForwardedRef<SVGSVGElement>,
) {
  const { variant, ...componentProps } = props;

  if (!variant) {
    return null;
  }

  const Component = icons[variant] as FC<typeof componentProps> | undefined;

  if (!Component) {
    throw new Error(`variant (${variant}) is not supported`);
  }

  return <Component {...componentProps} forwardRef={ref} />;
}

const componentWithRef = forwardRef(Icon) as typeof Icon;

export type {
  Props as IconProps,
  IconVariant,
  VariantProps as IconVariantProps,
};
export { componentWithRef as Icon };
