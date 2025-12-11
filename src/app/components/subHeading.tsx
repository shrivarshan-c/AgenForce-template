import { cn } from "@/lib/utils"

type subHeadingProps = {
  children: React.ReactNode
  className?: string
  as?: "p" | "h2"
}

export const SubHeading = ({ children, className, as = "h2" }: subHeadingProps) => {
  const Tag = as

  return (
    <Tag className={cn("text-sm md:text-md lg:text-lg font-manrope  tracking-tighter text-neutral-600  dark:text-neutral-400 max-w-xl", className)}>
      {children}
    </Tag>
  )
}
