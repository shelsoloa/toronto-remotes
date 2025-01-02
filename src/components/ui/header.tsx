import { cn } from "@/lib/utils";

export function SectionHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h2 className={cn('text-3xl font-bold', className)}>{children}</h2>;
}
