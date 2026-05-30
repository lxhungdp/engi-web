import Link from "next/link";
import type { ComponentProps } from "react";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

type ButtonProps = ComponentProps<"button"> & {
  href?: never;
};

type LinkButtonProps = ComponentProps<typeof Link> & {
  href: string;
};

export function PrimaryButton({
  className,
  children,
  ...props
}: ButtonProps | LinkButtonProps) {
  const classes = cn(tc.btnPrimary, className);

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...(props as ButtonProps)}>
      {children}
    </button>
  );
}

export function SecondaryButton({
  className,
  children,
  ...props
}: ButtonProps | LinkButtonProps) {
  const classes = cn(tc.btnSecondary, className);

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...(props as ButtonProps)}>
      {children}
    </button>
  );
}
