import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode, use } from "react";

export function Nav({ children }: { children: ReactNode }) {
  return (
    <nav className="bg-primary text-primary-foreground flex justify-center px-4">
      {children}
    </nav>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathmame = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        `p-4 
        hover:bg-secondary hover:text-secondary-foreground
        foucs:bg-secondary foucs:text-secondary-foreground`,
        pathmame === props.href && "bg-background text-foreground"
      )}
    />
  );
}
