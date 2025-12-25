import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface LightboxProps {
  images: { id: number; title: string; category: string; image: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) => {
  const currentImage = images[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown, isOpen]);

  if (!isOpen || !currentImage) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center",
        "bg-dark/95 backdrop-blur-md",
        "animate-fade-in"
      )}
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 flex h-12 w-12 items-center justify-center border border-dark-foreground/20 bg-dark/50 text-dark-foreground transition-all duration-300 hover:bg-primary hover:border-primary hover:text-primary-foreground"
        aria-label="Close lightbox"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Navigation - Previous */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 md:left-8 z-10 flex h-12 w-12 items-center justify-center border border-dark-foreground/20 bg-dark/50 text-dark-foreground transition-all duration-300 hover:bg-primary hover:border-primary hover:text-primary-foreground"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Navigation - Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 md:right-8 z-10 flex h-12 w-12 items-center justify-center border border-dark-foreground/20 bg-dark/50 text-dark-foreground transition-all duration-300 hover:bg-primary hover:border-primary hover:text-primary-foreground"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Image Container */}
      <div
        className="relative max-w-[90vw] max-h-[85vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.image}
          alt={currentImage.title}
          className="max-w-full max-h-[85vh] object-contain shadow-2xl"
        />

        {/* Image Info */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark via-dark/80 to-transparent p-6 pt-16">
          <p className="text-xs uppercase tracking-wider text-primary mb-2">
            {currentImage.category}
          </p>
          <h3 className="font-display text-2xl md:text-3xl text-dark-foreground">
            {currentImage.title}
          </h3>
        </div>
      </div>

      {/* Image Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-dark-foreground/60">
        <span className="text-dark-foreground">{currentIndex + 1}</span>
        <span className="mx-2">/</span>
        <span>{images.length}</span>
      </div>

      {/* Thumbnail Strip */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 max-w-[80vw] overflow-x-auto py-2 px-4 hide-scrollbar">
        {images.map((img, index) => (
          <button
            key={img.id}
            onClick={(e) => {
              e.stopPropagation();
              // Navigate to this image
              const diff = index - currentIndex;
              if (diff > 0) {
                for (let i = 0; i < diff; i++) onNext();
              } else if (diff < 0) {
                for (let i = 0; i < Math.abs(diff); i++) onPrev();
              }
            }}
            className={cn(
              "shrink-0 w-16 h-12 overflow-hidden border-2 transition-all duration-300",
              index === currentIndex
                ? "border-primary opacity-100 scale-110"
                : "border-transparent opacity-50 hover:opacity-80"
            )}
          >
            <img
              src={img.image}
              alt={img.title}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
