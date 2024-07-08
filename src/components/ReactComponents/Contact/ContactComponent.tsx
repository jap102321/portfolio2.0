import React from "react";
import styles from "./Contact.module.css"

const ContactComponent = () => {
  return <div className={styles.contact}>
    <h1 className={styles.title}>Un poco más sobre mi</h1>
    <p className={styles.description}>
     Ingeniero de Software con casi 3 años de experiencia en desarrollo web (frontend / backend). 
     Dominio en JavaScript, TypeScript, Node, React, Java y Golang. 

     <br/>Actualmente aprendiendo arquitecturas de diseño en Golang, 
     trabajando en Capgemini actualmente como React Developer.
    </p>
    <div className={styles.contactInfo}>
        <h1 className={styles.title}>¿Quieres contactarme?</h1>
        <a className={styles.contactLink} href="https://www.linkedin.com/in/jpabgonzalez" target="_blank"><img className={styles.icons} src="./git.svg" alt="social_media"/>Linkedin</a>
        <a className={styles.contactLink} href="https://github.com/jap102321" target="_blank"><img className={styles.icons} src="./linkedin.svg" alt="social_media"/>GitHub</a>
        <a className={styles.contactLink} href="mailto:jupago14@gmail.com" target="_blank"><img className={styles.icons} src="./mail.svg" alt="social_media"/> Email</a>
    </div>
  </div>;
};

export default ContactComponent;
