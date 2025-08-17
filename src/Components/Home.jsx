import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation('global');

  return (
    <div>
      <p>{t('home.body')}</p>
    </div>
  );
};

export default Home;
