import type { Metadata } from 'next';
import { DM_Serif_Display, Manrope } from 'next/font/google';
import './globals.css';

const display = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
});

const body = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'ClipFlow — AI Short-Form Video Editing',
  description:
    'ClipFlow turns raw footage into captioned, attention-optimized TikToks and Reels in seconds.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
