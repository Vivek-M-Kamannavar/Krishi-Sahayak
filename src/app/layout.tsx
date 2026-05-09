import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import BackgroundSlider from '@/components/BackgroundSlider';
import ClientCron from '@/components/ClientCron';
import Navbar from '@/components/Navbar';
export const metadata: Metadata = {
  title: 'Krishi Sahayak - Farmer Portal',
  description: 'Report agricultural issues directly to respective officers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ClientCron />
        <BackgroundSlider />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
