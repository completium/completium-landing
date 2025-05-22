import { Link } from '@tanstack/react-router'
import { HeroHeader } from './header'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button'
import { useTranslation } from 'react-i18next'
import { AuroraText } from '@/components/magicui/aurora-text'
import { BrandLogo } from './brand-logo'

export default function HeroSection() {
    const { t } = useTranslation()
    
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                            <div className="mx-auto max-w-xl text-center z-10 relative lg:ml-0 lg:w-1/2 lg:text-left lg:pt-2">
                                <h1 className="mt-8 max-w-3xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
                                    {t('heroSection.titleStart')}
                                    <AuroraText colors={["#FF0080", "#7928CA", "#0070F3", "#38bdf8"]} speed={1.2}>
                                        {t('heroSection.aiWord')}
                                    </AuroraText>
                                    {t('heroSection.titleEnd')}
                                </h1>
                                <p className="mt-8 max-w-2xl text-pretty text-lg"><span className="font-inter uppercase">Completium</span> {t('heroSection.description')}</p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Link to="/" className="no-underline">
                                        <InteractiveHoverButton className="text-base font-semibold">
                                            {t('heroSection.cta')}
                                        </InteractiveHoverButton>
                                    </Link>
                                    {/* <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="px-5 text-base">
                                        <Link to="/">
                                            <span className="text-nowrap">Request a demo</span>
                                        </Link>
                                    </Button> */}
                                </div>
                            </div>
                            <img
                                className="order-first ml-auto h-56 w-full object-cover invert sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-[312px] lg:order-last lg:h-max lg:w-2/3 lg:object-contain dark:mix-blend-lighten dark:invert-0"
                                src="/abstract-bg.webp"
                                alt="Abstract Object"
                                height="4000"
                                width="3000"
                            />
                            <p className="hidden lg:block ml-auto w-2/3 text-right mt-2 font-mono text-sm tracking-wider text-muted-foreground lg:absolute lg:right-[190px] lg:mt-0 lg:w-2/3 lg:text-right lg:top-[480px]">
                                {t('heroSection.crystalCaption')}
                            </p>
                        </div>
                    </div>
                </section>
                <section className="bg-background pb-16 md:pb-32">
                    <div className="group relative m-auto max-w-6xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-sm">{t('heroSection.powering')}</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    pauseOnHover={false}
                                    speedOnHover={20}
                                    speed={40}
                                    gap={112}>
                                    {/* Modèles & Frameworks */}
                                    <div className="flex">
                                        <BrandLogo 
                                            brand="pytorch"
                                            height={40}
                                            className="mx-auto h-5 w-fit"
                                            url="https://pytorch.org/"
                                        />
                                    </div>
                                    <div className="flex">
                                        <BrandLogo 
                                            brand="tensorflow"
                                            height={20}
                                            className="mx-auto h-5 w-fit"
                                            url="https://www.tensorflow.org"
                                        />
                                    </div>
                                    <div className="flex">
                                        <BrandLogo 
                                            brand="hugging-face"
                                            height={35}
                                            className="mx-auto h-5 w-fit"
                                            url="https://huggingface.co/"
                                        />
                                    </div>

                                    {/* RAG & LLM apps */}
                                    <div className="flex">
                                        <BrandLogo 
                                            brand="langchain"
                                            height={20}
                                            className="mx-auto h-5 w-fit"
                                            url="https://www.langchain.com/"
                                        />
                                    </div>
                                    <div className="flex">
                                        <BrandLogo 
                                            brand="n8n"
                                            height={40}
                                            className="mx-auto h-5 w-fit"
                                            url="https://n8n.io/"
                                        />
                                    </div>
                                    <div className="flex">
                                        <BrandLogo 
                                            brand="weaviate"
                                            height={20}
                                            className="mx-auto h-5 w-fit"
                                            url="https://weaviate.io/"
                                        />
                                    </div>
                                    <div className="flex">
                                        <BrandLogo 
                                            brand="qdrant"
                                            height={25}
                                            className="mx-auto h-5 w-fit"
                                            url="https://qdrant.tech/"
                                        />
                                    </div>

                                    {/* Fine-tuning & Hosting */}
                                    
                                    <div className="flex">
                                        <BrandLogo 
                                            brand="replicate"
                                            height={20}
                                            className="mx-auto h-5 w-fit"
                                            url="https://replicate.com/"
                                        />
                                    </div>

                                    
                                </InfiniteSlider>

                                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
