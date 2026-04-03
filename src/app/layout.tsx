import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './styles/globals.css';
import styles from './styles/layout.module.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'HelenKo Blog',
  description: 'A blog about Me and my projects',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <main className={styles.main}>
          {children}
        </main>
      </body>
    </html>
  );
}
