import { getTranslations } from 'next-intl/server';



const LocaleNotFound = async () => {

  const t = await getTranslations('notFound');



  return (

    <div className="flex-1 flex flex-col bg-deep-space text-stardust font-noigrotesk">

      <section className="flex-1 flex flex-col items-center justify-center gap-6 px-8 py-12 text-center">

        <span className="text-6xl">⚠️</span>

        <h2 className="text-heading font-noigrotesk text-stardust">{t('title')}</h2>

      </section>

    </div>

  );

};

export default LocaleNotFound;
