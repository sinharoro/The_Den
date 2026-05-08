import './globals.css';

export const metadata = {
  title: 'The Den | Food and Drinks — Pagadian City',
  description: 'The Den Food and Drinks in Pagadian City serves fresh meal prep boxes, healthy salads & desserts. Delivery via Boknoy. Open Mon–Sat 7AM–7PM. Call +639156560463.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/details/The Den logo.jpg" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}