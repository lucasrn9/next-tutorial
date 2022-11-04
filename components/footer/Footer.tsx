import Image from "next/image";
import styles from "../../styles/Footer.module.css";
import githubIcon from "../../assets/icons/github.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.brandCopyright}>Nine’s Store ©</div>
        <div className={styles.brandCopyrightDate}>2022-2023</div>
        <div className={styles.github}>
          <span className={styles.githubIconWrapper}>
            <Image src={githubIcon} />
          </span>
          lucasrn9
        </div>
      </div>
      <div>
        <div className={styles.credits}>Credits</div>
        <div className={styles.creditWrapper}>
          Model -{" "}
          <a
            href="https://www.freepik.com/free-photo/studio-shot-pretty-black-woman-with-white-shopping-bag-standing-yellow-background-trendy-spring-fashionable-look_9116120.htm#page=2&query=shopping&position=7&from_view=search&track=sph"
            target="_blank"
            rel="noreferrer"
          >
            Image by svetlanasokolova on Freepik
          </a>
        </div>
        <div className={styles.creditWrapper}>
          Vector -{" "}
          <a
            href="https://www.freepik.com/free-vector/no-time-concept-illustration_11119932.htm#query=shopping&position=43&from_view=search&track=sph"
            target="_blank"
            rel="noreferrer"
          >
            Image by storyset on Freepik
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
