import styles from "./navbar.module.css"
import { useMediaQuery } from "react-responsive";
import '@/styles/globals.css'
import { Drawer, DrawerContent, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { useTranslations } from "@/i18n/utils";
import { getRelativeLocaleUrl } from "astro:i18n";


interface NavbarType {
  lang:any;

}


const Navbar = ({lang } : NavbarType) => {
 const isMobile = useMediaQuery({query: '(max-width:750px)'})
 const t = useTranslations(lang);

  return(
    <div className={styles.navbarList}>
        {
            !isMobile && (
            <ul className={styles.ul_navbar}>
                <li className={styles.li_navbar}><a href="/">{t('nav.home')}</a></li>
                <li className={styles.li_navbar}><a href="#about_me">{t('nav.about')}</a></li>
                <li className={styles.li_navbar}><a href={getRelativeLocaleUrl(lang, "contact")}>{t('nav.contact')}</a></li>
            </ul>
            )
        }
        {
            isMobile && ( 
             <Drawer direction="right">
                 <DrawerTrigger asChild>
                    <img className={styles.hamb_menu} src={"/hamb_menu.svg"} alt="hamburguer_button"/>
                 </DrawerTrigger>
                <DrawerPortal >    
                <DrawerOverlay className="tw-fixed tw-inset-0 tw-bg-black"/>
                  <DrawerContent className="tw-bg-red tw-flex tw-flex-col tw-rounded-t-[10px] tw-h-[96%] tw-mt-24 tw-fixed tw-bottom-0 tw-left-0 tw-right-0">
                   <div className="tw-mx-auto tw-w-full tw-max-w-sm tw-text-black">
                        <DrawerHeader>
                          <DrawerTitle>Title</DrawerTitle>
                            <ul className={styles.ul_navbar}>
                              <li className={styles.li_navbar}><a href="/">{t('nav.home')}</a></li>
                              <li className={styles.li_navbar}><a href="#about_me">{t('nav.about')}</a></li>
                              <li className={styles.li_navbar}><a href={getRelativeLocaleUrl(lang, "contact")}>{t('nav.contact')}</a></li>
                            </ul>
                        </DrawerHeader>
                    </div>
                  </DrawerContent>
                  <DrawerOverlay />
                </DrawerPortal>
              </Drawer>
            )
        }
    </div>
  );
};

export default Navbar;
