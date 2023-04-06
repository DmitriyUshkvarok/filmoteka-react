import { useSelector, useDispatch } from 'react-redux';
import { FaSun, FaMoon } from 'react-icons/fa';
import { toggleTheme } from 'redux/themeSlice';
import css from './ThemeSwitcher.module.css';
import { useEffect } from 'react';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const theme = isDarkMode ? 'dark' : 'light';

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <button className={css.btnSwitcher} onClick={handleThemeToggle}>
      {isDarkMode ? <FaMoon size={16} /> : <FaSun size={16} />}
    </button>
  );
};

export default ThemeSwitcher;
