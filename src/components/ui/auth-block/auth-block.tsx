import styles from './styles.module.css';

export default function AuthBlock() {
  const isSignedIn = false;

  let AuthText;
  let AuthLink;

  if (isSignedIn) {
    AuthText = (
      <div className={styles.infoAuth}>
        <p className={styles.infoText}>Проверьте, что можете получать принимать сообщения от <a href="#">чат-бота группы</a> для получения уведомлений</p>
        <a className={styles.checkLink} href="#">Проверить</a>
      </div>);
    AuthLink = <a className={styles.orgAuthLink} href="#">Выход</a>;
  } else {
    AuthText = (
      <div className={styles.infoNoAuth}>
        <p className={styles.infoText}>Чтобы зарегистрироваться на мероприятия необходимо авторизоваться через ВКонтакте</p>
        <a className={styles.visitorAuthLink} href="#">Войти через ВК</a>
      </div>
    );
    AuthLink = <a className={styles.orgAuthLink} href="#">Вход для админов</a>;
  }

  return (
    <article>
      {AuthText}
      {AuthLink}
    </article>
  )
}
