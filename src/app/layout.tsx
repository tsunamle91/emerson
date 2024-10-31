import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Emerson Callahan | Dynamic Student Athlete and Leader',
  description: 'Dynamic Student Athlete and Leader - Courage and Resilience On and Off the Field',
  openGraph: {
    title: 'Emerson Callahan | Dynamic Student Athlete and Leader',
    description: 'Dynamic Student Athlete and Leader - Courage and Resilience On and Off the Field',
    images: [
      {
        url: '/emerson red devils.JPEG',
        width: 1200,
        height: 630,
        alt: 'Emerson Callahan - Dynamic Student Athlete and Leader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emerson Callahan | Dynamic Student Athlete and Leader',
    description: 'Dynamic Student Athlete and Leader - Courage and Resilience On and Off the Field',
    images: ['/emerson red devils.JPEG'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
