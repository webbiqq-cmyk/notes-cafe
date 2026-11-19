import Image from "next/image";
import type { Photo as PhotoData } from "@/data/photos";

type Props = {
  photo: PhotoData;
  sizes: string;
  caption?: React.ReactNode;
  priority?: boolean;
  className?: string;
  reveal?: boolean;
};

export function Photo({ photo, sizes, caption, priority, className, reveal = true }: Props) {
  return (
    <figure className={className}>
      <div data-reveal={reveal ? "clip" : undefined} style={{ overflow: "hidden" }}>
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes={sizes}
          priority={priority}
          quality={90}
        />
      </div>
      {caption && <figcaption className="caption">{caption}</figcaption>}
    </figure>
  );
}
