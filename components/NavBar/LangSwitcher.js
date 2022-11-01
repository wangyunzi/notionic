import { TranslateIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'

const LangSwitcher = () => {
  const { locale, asPath } = useRouter()

  return (
    <>
      <Link passHref href={asPath} locale={locale === 'zh' ? 'en' : 'zh'} scroll={false}>
        <button
          aria-label='LangSwitcher'
          className='hover:bg-gray-200 dark:hover:bg-gray-700 p-2 cursor-pointer rounded-lg dark:text-gray-50'
        >
          <TranslateIcon className='h-5 w-5' />
        </button>
      </Link>
    </>
  )
}

export default LangSwitcher
