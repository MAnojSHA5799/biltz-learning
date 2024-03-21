import React from 'react';
import { Helmet } from 'react-helmet';
import { inter, jost } from './lib/font'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
export default function RootLayout({ children, title, description }) {
    return (
        <html lang="en" className={`${inter.variable} ${jost.variable}`}>
            <head>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="description" content={description} />
            </head>
            <body>{children}</body>
        </html>
    );
}