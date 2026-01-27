import './globals.css';
import ReduxProvider from '../src/providers/ReduxProvider';

export const metadata = {
  title: 'Nesine Case Study',
  description: 'Nesine Case Study using Next.js, TypeScript and Redux Toolkit'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
