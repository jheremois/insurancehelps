import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { getDictionary } from '@/locales/getDictionary'
import { useRouter } from 'next/router';

export default function Home() {

  type Locale = 'en' | 'es';

  const { locale } = useRouter() as { locale: Locale };

  const dict = getDictionary(locale);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {dict.welcome}
    </main>
  )
}
