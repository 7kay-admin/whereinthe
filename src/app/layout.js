import './globals.css';
// import { Lexend } from 'next/font/google';

import Header from '../components/header';
import Footer from '@/components/footer';

// const lexend = Lexend({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-slate-800 text-white'>
        {/* className={lexend.className} */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export const metadata = {
  title: '',
  description: '',
  //   icons: [
  //     {
  //       rel: 'icon',
  //       type: 'image/png',
  //       sizes: '32x32',
  //       url: '/favicon-32x32.png',
  //     },
  //     {
  //       rel: 'icon',
  //       type: 'image/png',
  //       sizes: '16x16',
  //       url: '/favicon-16x16.png',
  //     },
  //     {
  //       rel: 'apple-touch-icon',
  //       sizes: '180x180',
  //       url: '/apple-touch-icon.png',
  //     },
  //   ],
};
