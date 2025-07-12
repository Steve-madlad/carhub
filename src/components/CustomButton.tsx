"use client";

import { Button, ButtonProps } from "./ui/button";

export default function CustomButton({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  return (
    <Button asChild={asChild} className={`custom-btn ${className}`} {...props}>
      {props.children}
    </Button>
  );
}
