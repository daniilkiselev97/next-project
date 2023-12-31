import './globals.css';
import { Roboto } from 'next/font/google';

const font = Roboto({
    subsets: ['cyrillic', 'latin'],
    weight: ['400', '500', '700'],
});

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={font.className}>
                <div id="app">{children}</div>
                <div id="modal"></div>
            </body>
        </html>
    );
}
