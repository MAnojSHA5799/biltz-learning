import React from 'react';
import { Helmet } from 'react-helmet';

export default function RootLayout({ children, title, description }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="description" content={description} />
            </head>
            <body>{children}</body>
        </html>
    );
}