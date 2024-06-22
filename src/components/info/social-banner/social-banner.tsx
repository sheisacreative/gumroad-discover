import Link from "next/link";
import styles from "./social-banner.module.css";

export default async function SocialBanner() {
  return (
    <section className={styles.bannerSocialSection}>
      <div className={`container ${styles.content}`}>
        <p>
          By Maiane Gabriele (
          <a href="https://www.linkedin.com/in/sheisacreative/">
            @sheisacreative
          </a>
          ).
        </p>
        <ul className={styles.linksList}>
          <li>
            <a href="https://github.com/sheisacreative/gumroad-discover/tree/main">
              Github
            </a>{" "}
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sheisacreative/">Linkedin</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
