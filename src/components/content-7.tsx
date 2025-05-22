import { Button } from "@/components/ui/button"
import { useTranslation } from 'react-i18next'
import { Image } from '@/components/ui/image'

export default function ContentSection() {
    const { t } = useTranslation()

    return (
        <section id="equipe" className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 relative">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">{t('contentSection.title')}</h2>
                <div className="grid gap-6 sm:grid-cols-3 md:gap-12 lg:gap-24">
                    <div className="relative space-y-4 sm:col-span-2">
                        <p className="text-muted-foreground">
                        <Button variant="link" className="p-0 font-normal h-auto" asChild>
                            <a href="https://www.linkedin.com/in/benoitrognier/" target="_blank" rel="noopener noreferrer">Benoit</a>
                        </Button> {t('contentSection.and')} <Button variant="link" className="p-0 font-normal h-auto" asChild>
                            <a href="https://www.linkedin.com/in/guillaumeduhamel/" target="_blank" rel="noopener noreferrer">Guillaume</a>
                        </Button> {t('contentSection.founderText1')} <Button variant="link" className="p-0 font-bold h-auto" asChild>
                            <a href="https://edukera.com/" target="_blank" rel="noopener noreferrer">{t('contentSection.edukera')}</a>
                        </Button> {t('contentSection.founderText2')}
                        </p>
                        <p className="text-muted-foreground">
                        {t('contentSection.blockchainText1')} <Button variant="link" className="p-0 font-bold h-auto" asChild>
                            <a href="https://archetype-lang.org/" target="_blank" rel="noopener noreferrer">{t('contentSection.archetypeLanguage')}</a>
                        </Button> {t('contentSection.blockchainText2')}
                        </p>
                        <p className="text-muted-foreground">{t('contentSection.completiumText')} <span className="font-bold text-foreground">{t('contentSection.completium')}</span> {t('contentSection.completiumText2')}</p>
                        
                    </div>
                    <div className="relative sm:absolute sm:right-6 sm:-top-[-20px] sm:w-1/3 lg:w-1/4">
                        <div className="aspect-67/34 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image 
                                src="/br_gd.png" 
                                className="rounded-[15px] transform scaleX(-1) w-full max-w-[300px] mx-auto" 
                                style={{ transform: 'scaleX(-1)' }} 
                                alt="payments illustration" 
                                width={1206} 
                                height={612} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
