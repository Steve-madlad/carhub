"use client";

import { Button, type ButtonProps } from "./ui/button";

export default function CustomButton({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      asChild={asChild}
      className={`custom-btn ${className}`}
      {...props}
    >
      {props.children}
    </Button>
  );
}
