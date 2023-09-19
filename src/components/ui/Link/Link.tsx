import { ComponentProps } from "react";

import Link from "next/link";

import styles from './styles.module.scss';

type Props = {
  link: string
} & ComponentProps<"a">;

export default function LinkItem(props: Props) {
  const { children, link } = props;
  return (
    <Link className={styles.Link} href={link} >
      {children}
    </Link >
  )
}
