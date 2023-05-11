import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import {
  StyleFiGlobe,
  LanguageList,
  LanguageTitle,
  LanguageItem,
  LanguageName,
} from './LanguageSelection.styled';
import { LanguageContext } from 'components/context/languageContext';

const URL = `https://api.themoviedb.org/3/`;
const key = 'f27eea818d2010463700365b0c06a16e';

const LanguageSelection = () => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [languages, setLanguages] = useState([]);
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);

  const handleToggleList = () => {
    setIsListOpen(!isListOpen);
  };

  const handleLanguageItemClick = language => {
    setSelectedLanguage(language);
    setIsListOpen(false);
    localStorage.setItem('selectedLanguage', JSON.stringify(language));
  };

  useEffect(() => {
    const fetchAllLanguages = () => {
      axios
        .get(`${URL}/configuration/languages?api_key=${key}`)
        .then(response => {
          const allLanguages = response.data;
          const languagesToDisplay = [
            'ru',
            'uk',
            'en',
            'de',
            'fr',
            'no',
            'fi',
            'pl',
            'cs',
            'es',
            'ja',
            'pt',
            'zh',
            'he',
            'ar',
            'bg',
            'tr',
            'ko',
            'it',
          ];
          const filteredLanguages = allLanguages.filter(lang =>
            languagesToDisplay.includes(lang.iso_639_1)
          );
          setLanguages(filteredLanguages);
          const savedLanguage = JSON.parse(
            localStorage.getItem('selectedLanguage')
          );
          setSelectedLanguage(
            savedLanguage ||
              filteredLanguages.find(lang => lang.iso_639_1 === 'en')
          );
        })
        .catch(error => console.log(error));
    };
    fetchAllLanguages();
  }, [setSelectedLanguage]);

  return (
    <>
      <StyleFiGlobe onClick={handleToggleList} />
      {isListOpen && (
        <LanguageList>
          <LanguageTitle>select a language</LanguageTitle>
          {languages.map(language => (
            <LanguageItem
              key={language.iso_639_1}
              onClick={() => handleLanguageItemClick(language)}
              active={language.iso_639_1 === selectedLanguage.iso_639_1}
            >
              <LanguageName>{language.english_name}</LanguageName>
            </LanguageItem>
          ))}
        </LanguageList>
      )}
    </>
  );
};

export default LanguageSelection;
