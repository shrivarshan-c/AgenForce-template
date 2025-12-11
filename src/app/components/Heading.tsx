import { cn } from "@/lib/utils"

type HeadingProps = {
  children: React.ReactNode
  className?: string
  as?: "h1" | "h2"
}

export const Heading = ({ children, className, as = "h2" }: HeadingProps) => {
  const Tag = as

  return (
    <Tag className={cn("text-2xl md:text-4xl lg:text-6xl font-manrope  tracking-tight ", className)}>
      {children}
    </Tag>
  )
}
