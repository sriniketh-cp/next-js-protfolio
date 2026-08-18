import Navbar from '../components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Sriniketh Sudheendra | Portfolio',
  description: 'Freelance Full Stack Developer & Mobile App Developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" 
        />
      </head>
      <body>
        {/* The Navbar will now render at the top of every page */}
        <Navbar />
        
        {/* The current page's content gets injected here */}
        {children}
      </body>
    </html>
  );
}