import Image from "next/image";
import { useState } from "react";

interface OptimizedImageProps {
  src: string | any; // Allow StaticImageData from imports
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
}

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  fill = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 85,
  placeholder = "empty",
  blurDataURL,
  ...props
}: OptimizedImageProps) => {
  const [imgSrc, setImgSrc] = useState(() => {
    // If src is a StaticImageData object (from import), use it as is
    if (typeof src === "object" && src.src) {
      return src;
    }

    // If src is already an optimized path, use it as is
    if (
      typeof src === "string" &&
      src.includes("/images/projects/optimized/")
    ) {
      return src;
    }

    // Convert original path to optimized WebP path
    if (typeof src === "string") {
      const pathWithoutExtension = src.replace(/\.[^/.]+$/, "");
      const optimizedPath = src.startsWith("/images/")
        ? src.replace("/images/", "/images/projects/optimized/")
        : `/images/projects/optimized/${src.replace(/^\//, "")}`;

      return optimizedPath.replace(/\.[^/.]+$/, ".webp");
    }

    return src;
  });

  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && typeof imgSrc === "string") {
      setHasError(true);
      // Fallback to optimized JPEG
      const jpegPath = imgSrc.replace(".webp", ".jpg");
      setImgSrc(jpegPath);
    }
  };

  const imageProps = {
    src: imgSrc,
    alt,
    className,
    priority,
    quality,
    placeholder,
    blurDataURL,
    onError: handleError,
    ...props,
  };

  if (fill) {
    return (
      <Image
        {...imageProps}
        fill
        sizes={sizes}
        style={{ objectFit: "cover" }}
      />
    );
  }

  return <Image {...imageProps} width={width} height={height} sizes={sizes} />;
};

export default OptimizedImage;
