import styles from "./navbar.module.css"
import { useMediaQuery } from "react-responsive";
import '@/styles/globals.css'
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";

const Navbar = () => {
 const isMobile = useMediaQuery({query: '(max-width:750px)'})

  return(
    <div className={styles.navbarList}>
        {
            !isMobile && (
            <ul className={styles.ul_navbar}>
                <li className={styles.li_navbar}><a href="/">Home</a></li>
                <li className={styles.li_navbar}><a href="#about_me">About</a></li>
                <li className={styles.li_navbar}><a href="/contact">Contact</a></li>
            </ul>
            )
        }
        {
            isMobile && ( 
             <Drawer direction="right" className="tw-w-52">
                 <DrawerTrigger asChild>
                    <img className={styles.hamb_menu} src={"/hamb_menu.svg"} alt="hamburguer_button"/>
                 </DrawerTrigger>
                <DrawerPortal >    
                <DrawerOverlay className="tw-fixed tw-inset-0 tw-bg-black/40"/>
                  <DrawerContent className="tw-bg-black tw-flex tw-flex-col tw-rounded-t-[10px] tw-h-[96%] tw-mt-24 tw-fixed tw-bottom-0 tw-left-0 tw-right-0">
                   <div className="tw-mx-auto tw-w-full tw-max-w-sm tw-text-white">
                        <DrawerHeader>
                            <ul className={styles.ul_navbar}>
                                <li className={styles.li_navbar}><a href="/">Home</a></li>
                                <li className={styles.li_navbar}><a href="#about_me">About</a></li>
                                <li className={styles.li_navbar}><a href="/contact">Contact</a></li>
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
