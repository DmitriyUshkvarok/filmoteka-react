import Container from 'components/Container/Container';
import Navigation from 'components/Navigation/Navigation';
import css from './Header.module.css';
import { FaReact } from 'react-icons/fa';
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';
import { Link } from 'react-router-dom';
import AuthNav from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import authSelector from 'redux/auth/auth-selector';
import UserBar from 'components/UserBar/UserBar';
// import BellNotification from 'components/BellNotification/BellNotification';

function Header() {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);

  return (
    <header className={css.header}>
      <Container>
        <div className={css.navigationWrapper}>
          <ThemeSwitcher />
          <div className={css.navContainer}>
            <Navigation />
            {isLoggedIn ? <UserBar /> : <AuthNav />}
          </div>
          {/* <BellNotification /> */}
          <div className={css.logo}>
            <Link to="/">
              <FaReact className={css.reactLogo} />
              <span>Filmoteka on React</span>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
