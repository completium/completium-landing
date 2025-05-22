import { getAssetPath } from "@/lib/constants"
import type { ImgHTMLAttributes } from "react"

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string
}

export function Image({ src, ...props }: ImageProps) {
  const correctedSrc = getAssetPath(src)
  
  return <img src={correctedSrc} {...props} />
} 