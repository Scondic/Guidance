import { PropsWithChildren } from "react";

import { Icon } from "@/assets/icons/Icon";

import styles from "./styles.module.scss";

type Props = {
  subtitle?: string;
  title?: string;
  fullName?: string;
  typeEvent?: string;
} & PropsWithChildren;

export const Banner = (props: Props) => {
  const { subtitle, title, fullName, typeEvent, children } = props;

  return (
    <section className={styles.Banner}>
      <div className={styles.Banner__header}>
        {subtitle && <div className={styles.Banner__subtitle}>{subtitle}</div>}
        {title && <div className={styles.Banner__title}>{title}</div>}
      </div>
      <div className={styles.Banner__main}>{children}</div>
      <div className={styles.Banner__footer}>
        {fullName && (
          <div className={styles.Banner__item}>
            <div className={styles.Banner__item_icon}>
              <Icon variant={"user"} />
            </div>
            <div className={styles.Banner__item_text}>{fullName}</div>
          </div>
        )}
        {typeEvent && (
          <div className={styles.Banner__item}>
            <div className={styles.Banner__item_icon}>
              <Icon variant={"users"} />
            </div>
            <div className={styles.Banner__item_text}>{typeEvent}</div>
          </div>
        )}
      </div>
    </section>
  );
};
