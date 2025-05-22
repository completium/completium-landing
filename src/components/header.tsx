import { Link } from '@tanstack/react-router'
import { Logo } from '@/components/logo'
import { Menu, X } from 'lucide-react'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './language-switcher'
import { ThemeSwitcher } from '@/components/ui/kibo-ui/theme-switcher'

const menuItems = [
    //{ name: 'header.features', href: '/' },
    { name: 'header.solution', href: '/#solution' },
    { name: 'header.about', href: '/#equipe' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const { t } = useTranslation()
    
    useEffect(() => {
        // Fonction pour gérer le défilement fluide vers les ancres
        const handleSmoothScroll = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest('a');
            if (link && link.getAttribute('href')?.startsWith('/#')) {
                e.preventDefault();
                const id = link.getAttribute('href')?.replace('/#', '');
                const element = document.getElementById(id || '');
                if (element) {
                    setMenuState(false); // Fermer le menu mobile si ouvert
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        const handleMenuItemClick = (e: Event) => {
            handleSmoothScroll(e as MouseEvent);
        };

        document.querySelectorAll('nav a[href^="/#"]').forEach(link => {
            link.addEventListener('click', handleMenuItemClick);
        });

        return () => {
            document.querySelectorAll('nav a[href^="/#"]').forEach(link => {
                link.removeEventListener('click', handleMenuItemClick);
            });
        };
    }, [setMenuState]);
    
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="bg-background/50 fixed z-20 w-full border-b backdrop-blur-3xl">
                <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <Link
                                to="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                                <span 
                                  className="ml-2 text-xl font-light tracking-wider transition-opacity duration-300"
                                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 300 }}
                                >
                                  COMPLETIUM
                                </span>
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                to={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{t(item.name)}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                to={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{t(item.name)}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col items-center space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <ThemeSwitcher className="mr-2" />
                                <LanguageSwitcher />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
