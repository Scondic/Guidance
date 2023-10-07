import { ButtonAuthorization } from '@/components/modules/ButtonAuthorization/ButtonAuthorization';

import styles from './styles.module.css';

type Props = {
  isSignedIn: boolean;
}

export default function AuthBlock(props: Props) {
  const { isSignedIn } = props;

  let AuthText;
  let AuthLink;

  if (isSignedIn) {
    AuthText = (
      <div className={styles.infoAuth}>
        <p className={styles.infoText}>Проверьте, что можете получать принимать сообщения от <a href="#">чат-бота группы</a> для получения уведомлений</p>
        <a className={styles.checkLink} href="#">Проверить</a>
      </div>);
    AuthLink = (
      <div className={styles.checkLinkBox}>
        <a className={styles.orgAuthLink} href="#">Выход</a>
      </div>);
  } else {
    AuthText = (
      <div className={styles.infoNoAuth}>
        <p className={styles.infoText}>Чтобы зарегистрироваться на мероприятия необходимо авторизоваться через ВКонтакте</p>
        <ButtonAuthorization />
      </div>
    );
    AuthLink = (
      <div className={styles.checkLinkBox}>
        <a className={styles.orgAuthLink} href="#">Вход для админов</a>
      </div>);
  }

  return (
    <article style={{ width: 'min-content' }}>
      {AuthText}
      {AuthLink}
    </article>
  )
}
