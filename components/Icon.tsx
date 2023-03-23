import Image, { StaticImageData } from "next/image";

interface propType {
  className: string,
  src: StaticImageData,
  alt: string
}

function Icon({ className, src, alt }: propType) {
  return (
    <div className={className}>
      <Image fill src={src} alt={alt} />
    </div>
  )
}

export default Icon;
