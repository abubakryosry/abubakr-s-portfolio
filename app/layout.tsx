import './globals.css';
import { Montserrat } from 'next/font/google';
const montserratFont = Montserrat({
  subsets: ['latin'],
  weight: ['400'],
});
export const metadata = {
  title: 'Now Playing: Abubakr Yosry',
  description:
    '🎧 Explore the portfolio of Abubakr Yosry – a frontend developer blending clean code with creative rhythm.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body className={`${montserratFont.className}`} >{children}</body>
    </html>
  );
}
    