// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react';

export const metadata = {
  title: 'Admin Panel',
  description: 'Panel de administración para ecommerce',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
