import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Layers, Sparkles, Waves } from 'lucide-react'
import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

export default function Features() {
    const { t } = useTranslation()
    const vibeItems = t('featuresSection.vibeCoding.items', { returnObjects: true }) as string[]
    
    return (
        <section id="solution" className="py-16 md:py-32">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">{t('featuresSection.title')}</h2>
                    <p className="mt-4">{t('featuresSection.description')}</p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 [--color-background:var(--color-muted)] [--color-card:var(--color-muted)] *:text-center md:mt-16 dark:[--color-muted:var(--color-zinc-900)]">
                    <Card className="group border-0 shadow-none bg-transparent">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Sparkles
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">{t('featuresSection.ai.title')}</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm" dangerouslySetInnerHTML={{ __html: t('featuresSection.ai.description') }}></p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 shadow-none bg-transparent">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Waves
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">{t('featuresSection.vibeCoding.title')}</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm font-medium">{t('featuresSection.vibeCoding.howWeDoIt')}</p>
                            <ul className="mt-2 text-sm list-disc pl-5 text-left">
                                {vibeItems.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 shadow-none bg-transparent">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Layers
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">{t('featuresSection.techStack.title')}</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">{t('featuresSection.techStack.description')}</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
        />
        <div
            aria-hidden
            className="bg-radial to-background absolute inset-0 from-transparent to-75%"
        />
        <div className="dark:bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t bg-white">{children}</div>
    </div>
)
