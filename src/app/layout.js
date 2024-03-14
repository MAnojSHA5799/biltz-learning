import "../../node_modules/react-modal-video/css/modal-video.css"
import "./public/assets/css/bootstrap.css"
import "./public/assets/css/style.css"
import "./public/assets/css/responsive.css"
import "./public/assets/css/color.css"
// import "./main.css"
import 'swiper/css'
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { inter, jost } from './lib/font'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
export const metadata = {
    title: 'Custom E-learning Solutions Company | Blitz Learning Technologies',
    description: 'Transform your team with Blitz Learning service- your go-to custom e-learning solutions company. Elevate skills and efficiency with tailored courses.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${jost.variable}`}>
            <body>{children}</body>
        </html>
    )
}