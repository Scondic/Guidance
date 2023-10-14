import { ButtonAuthorization } from '@/components/modules/ButtonAuthorization/ButtonAuthorization';

import classes from './styles.module.css';

type Props = {
  isSignedIn: boolean;
}

export default function AuthBlock(props: Props) {
  const { isSignedIn } = props;

  let AuthText;
  let AuthLink;

  if (isSignedIn) {
    AuthText = (
      <div className={classes.infoAuth}>
        <p className={classes.infoText}>Проверьте, что можете получать принимать сообщения от <a href="#">чат-бота группы</a> для получения уведомлений</p>
        <a className={classes.checkLink} href="#">Проверить</a>
      </div>);
    AuthLink = (
      <div className={classes.checkLinkBox}>
        <a className={classes.orgAuthLink} href="#">Выход</a>
      </div>);
  } else {
    AuthText = (
      <div className={classes.infoNoAuth}>
        <p className={classes.infoText}>Чтобы зарегистрироваться на мероприятия необходимо авторизоваться через ВКонтакте</p>
        <ButtonAuthorization />
      </div>
    );
    AuthLink = (
      <div className={classes.checkLinkBox}>
        <a className={classes.orgAuthLink} href="#">Вход для админов</a>
      </div>);
  }

  return (
    <aside className={classes.authorization}>
      {AuthText}
      {AuthLink}
    </aside>
  )
}
