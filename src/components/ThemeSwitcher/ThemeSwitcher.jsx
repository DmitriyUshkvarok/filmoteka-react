import { useSelector, useDispatch } from 'react-redux';
import { FaCloudMoon } from 'react-icons/fa';
import { BsFillCloudSunFill } from 'react-icons/bs';

import { toggleTheme } from 'redux/themeSlice';
import { BtnSwitcher, SwitcherWrapper } from './ThemeSwitcher.styled';
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
    <SwitcherWrapper>
      <BtnSwitcher onClick={handleThemeToggle}>
        {isDarkMode ? (
          <FaCloudMoon size={16} />
        ) : (
          <BsFillCloudSunFill size={16} />
        )}
      </BtnSwitcher>
    </SwitcherWrapper>
  );
};

export default ThemeSwitcher;
