import { useEffect, useState, type ReactNode } from "react"
import { useTranslation } from "react-i18next"
import { ArrowLeft, ArrowRight, ArrowUpRight, Maximize2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
import { Image } from "@/components/ui/image"
import { cn } from "@/lib/utils"

type Screenshot = {
  src: string
  alt: string
}

type ProjectShowcaseProps = {
  name: string
  description: string
  link: string
  cta: string
  logo: ReactNode
  screenshots: Screenshot[]
  reversed?: boolean
  maximizeLabel: string
  closeLabel: string
  previousLabel: string
  nextLabel: string
}

function ScreenshotCarousel({
  screenshots,
  maximizeLabel,
  closeLabel,
  previousLabel,
  nextLabel,
}: {
  screenshots: Screenshot[]
  maximizeLabel: string
  closeLabel: string
  previousLabel: string
  nextLabel: string
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const activeScreenshot =
    lightboxIndex !== null ? screenshots[lightboxIndex] : null

  useEffect(() => {
    if (lightboxIndex === null) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        setLightboxIndex(
          (current) =>
            current === null
              ? null
              : (current - 1 + screenshots.length) % screenshots.length
        )
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        setLightboxIndex(
          (current) =>
            current === null ? null : (current + 1) % screenshots.length
        )
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxIndex, screenshots.length])

  const goToPrevious = () => {
    setLightboxIndex(
      (current) =>
        current === null
          ? null
          : (current - 1 + screenshots.length) % screenshots.length
    )
  }

  const goToNext = () => {
    setLightboxIndex(
      (current) =>
        current === null ? null : (current + 1) % screenshots.length
    )
  }

  return (
    <>
      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {screenshots.map((screenshot, index) => (
              <CarouselItem key={screenshot.src}>
                <div className="group relative overflow-hidden rounded-xl border bg-muted/40 shadow-sm">
                  <button
                    type="button"
                    className="block w-full cursor-zoom-in"
                    onClick={() => setLightboxIndex(index)}
                    aria-label={maximizeLabel}
                  >
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      className="aspect-video w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </button>
                  <Button
                    type="button"
                    variant="secondary"
                    size="icon"
                    className="absolute top-3 right-3 size-8 opacity-0 transition-opacity group-hover:opacity-100"
                    onClick={() => setLightboxIndex(index)}
                    aria-label={maximizeLabel}
                  >
                    <Maximize2 />
                  </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-3 border-none bg-background/90 shadow-md" />
          <CarouselNext className="right-3 border-none bg-background/90 shadow-md" />
        </Carousel>
      </div>

      <Dialog
        open={lightboxIndex !== null}
        onOpenChange={(open) => {
          if (!open) {
            setLightboxIndex(null)
          }
        }}
      >
        <DialogContent
          showCloseButton
          className="flex max-h-[95vh] w-[calc(100vw-2rem)] max-w-[calc(100vw-2rem)] flex-col gap-0 overflow-hidden border-none bg-background/95 p-2 shadow-2xl sm:max-w-[calc(100vw-2rem)] sm:p-4 md:w-[calc(100vw-4rem)] md:max-w-[calc(100vw-4rem)]"
        >
          <DialogTitle className="sr-only">
            {activeScreenshot?.alt ?? maximizeLabel}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {closeLabel}
          </DialogDescription>
          {activeScreenshot && (
            <div className="relative">
              <Image
                src={activeScreenshot.src}
                alt={activeScreenshot.alt}
                className="max-h-[calc(95vh-2rem)] w-full rounded-lg object-contain"
              />
              {screenshots.length > 1 && (
                <>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="absolute top-1/2 left-3 size-8 -translate-y-1/2 rounded-full border-none bg-background/90 shadow-md"
                    onClick={goToPrevious}
                    aria-label={previousLabel}
                  >
                    <ArrowLeft />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="absolute top-1/2 right-3 size-8 -translate-y-1/2 rounded-full border-none bg-background/90 shadow-md"
                    onClick={goToNext}
                    aria-label={nextLabel}
                  >
                    <ArrowRight />
                  </Button>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

function ProjectShowcase({
  name,
  description,
  link,
  cta,
  logo,
  screenshots,
  reversed = false,
  maximizeLabel,
  closeLabel,
  previousLabel,
  nextLabel,
}: ProjectShowcaseProps) {
  return (
    <article
      className={cn(
        "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
        reversed && "lg:[&>*:first-child]:order-2"
      )}
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">{logo}</div>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold tracking-tight">{name}</h3>
          <p className="text-pretty text-muted-foreground leading-relaxed">
            {description}
          </p>
          <div>
            <Button variant="outline" asChild>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {cta}
                <ArrowUpRight data-icon="inline-end" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <ScreenshotCarousel
        screenshots={screenshots}
        maximizeLabel={maximizeLabel}
        closeLabel={closeLabel}
        previousLabel={previousLabel}
        nextLabel={nextLabel}
      />
    </article>
  )
}

export default function LegacyProjects() {
  const { t } = useTranslation()

  const edukeraScreenshots = t("legacySection.edukera.screenshots", {
    returnObjects: true,
  }) as Screenshot[]

  const archetypeScreenshots = t("legacySection.archetype.screenshots", {
    returnObjects: true,
  }) as Screenshot[]

  return (
    <section id="legacy" className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            {t("legacySection.title")}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t("legacySection.description")}
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-24 md:mt-24 md:gap-32">
          <ProjectShowcase
            name={t("legacySection.edukera.name")}
            description={t("legacySection.edukera.description")}
            link={t("legacySection.edukera.link")}
            cta={t("legacySection.edukera.cta")}
            maximizeLabel={t("legacySection.carousel.maximize")}
            closeLabel={t("legacySection.carousel.close")}
            previousLabel={t("legacySection.carousel.previous")}
            nextLabel={t("legacySection.carousel.next")}
            logo={
              <>
                <Image
                  src="/legacy/edukera-logo-light.png"
                  alt={t("legacySection.edukera.name")}
                  className="h-10 w-auto dark:hidden"
                />
                <Image
                  src="/legacy/edukera-logo.png"
                  alt={t("legacySection.edukera.name")}
                  className="hidden h-10 w-auto dark:block"
                />
              </>
            }
            screenshots={edukeraScreenshots}
          />

          <ProjectShowcase
            name={t("legacySection.archetype.name")}
            description={t("legacySection.archetype.description")}
            link={t("legacySection.archetype.link")}
            cta={t("legacySection.archetype.cta")}
            reversed
            maximizeLabel={t("legacySection.carousel.maximize")}
            closeLabel={t("legacySection.carousel.close")}
            previousLabel={t("legacySection.carousel.previous")}
            nextLabel={t("legacySection.carousel.next")}
            logo={
              <>
                <Image
                  src="/legacy/archetype-logo-light.svg"
                  alt={t("legacySection.archetype.name")}
                  className="h-10 w-auto dark:hidden"
                />
                <Image
                  src="/legacy/archetype-logo-dark.svg"
                  alt={t("legacySection.archetype.name")}
                  className="hidden h-10 w-auto dark:block"
                />
              </>
            }
            screenshots={archetypeScreenshots}
          />
        </div>
      </div>
    </section>
  )
}
