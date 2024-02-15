import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
            
            <section className="page-title centred">
                <div className="bg-layer" style={{ backgroundImage: 'url(/assets/header-images/Aboutus3.jpg)' }}></div>
                <div className="auto-container">
                    <div className="content-box">
                        <h1>{breadcrumbTitle}</h1>
                        <ul className="bread-crumb clearfix">
                            <li><Link href="/">Home</Link></li>
                            <li>{breadcrumbTitle}</li>
                        </ul>
                    </div>
                </div>
            </section>

        </>
    )
}
