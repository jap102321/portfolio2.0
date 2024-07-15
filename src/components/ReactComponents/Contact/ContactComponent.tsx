import React from "react";
import styles from "./Contact.module.css"
import { useTranslations } from "@/i18n/utils";

interface ContactProps{
  currentLang : string
}


const ContactComponent = ({currentLang}: ContactProps) => {
  const t = useTranslations(currentLang as any);

  return <div className={styles.contact}>
    <h1 className={styles.title}>{t("title.contact")}</h1>
    <p className={styles.description}>{t("description_one.contact")}

     <br/>{t("description_two.contact")}
    </p>
    <div className={styles.contactInfo}>
        <h1 className={styles.title}>{t("contact_me.contact")}</h1>
        <a className={styles.contactLink} href="https://www.linkedin.com/in/jpabgonzalez" target="_blank"><img className={styles.icons} src="/linkedin.svg" alt="social_media"/>LinkedIn</a>
        <a className={styles.contactLink} href="https://github.com/jap102321" target="_blank"><img className={styles.icons} src="/git.svg" alt="social_media"/>GitHub</a>
        <a className={styles.contactLink} href="mailto:jupago14@gmail.com" target="_blank"><img className={styles.icons} src="/mail.svg" alt="social_media"/> Email</a>
    </div>
  </div>;
};

export default ContactComponent;
