import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const ThemeButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(className)} ref={ref} {...props} />;
  }
);

ThemeButton.displayName = 'ThemeButton';

export default ThemeButton;
