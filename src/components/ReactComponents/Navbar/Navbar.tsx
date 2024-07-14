import styles from "./navbar.module.css"
import { useMediaQuery } from "react-responsive";
import '@/styles/globals.css'
import { Drawer, DrawerContent, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTrigger } from "@/components/ui/drawer";
import { useTranslations } from "@/i18n/utils";


interface NavbarType {
  lang:any;
  getRelativeLangUrl: (url: string) => string;
}


const Navbar = ({lang, getRelativeLangUrl } : NavbarType) => {
 const isMobile = useMediaQuery({query: '(max-width:750px)'})
 const t = useTranslations(lang);

  return(
    <div className={styles.navbarList}>
        {
            !isMobile && (
            <ul className={styles.ul_navbar}>
                <li className={styles.li_navbar}><a href="/">{t('nav.home')}</a></li>
                <li className={styles.li_navbar}><a href="#about_me">{t('nav.about')}</a></li>
                <li className={styles.li_navbar}><a href={getRelativeLangUrl("about")}>{t('nav.contact')}</a></li>
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
                <DrawerOverlay className="tw-fixed tw-inset-0 tw-bg-black/40"/>
                  <DrawerContent className="tw-bg-black tw-flex tw-flex-col tw-rounded-t-[10px] tw-h-[96%] tw-mt-24 tw-fixed tw-bottom-0 tw-left-0 tw-right-0">
                   <div className="tw-mx-auto tw-w-full tw-max-w-sm tw-text-white">
                        <DrawerHeader>
                            <ul className={styles.ul_navbar}>
                              <li className={styles.li_navbar}><a href="/">{t('nav.home')}</a></li>
                              <li className={styles.li_navbar}><a href="#about_me">{t('nav.about')}</a></li>
                              <li className={styles.li_navbar}><a href="/contact">{t('nav.contact')}</a></li>
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
