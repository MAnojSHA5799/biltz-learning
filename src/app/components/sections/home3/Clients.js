import Link from "next/link"


export default function Clients() {
    return (
        <>
            
        <section className="clients-section p_relative bg-color-2">
            <div className="auto-container">
                <div className="inner-box">
                    <figure className="clients-logo">
                        <Link href="/index-3">
                            <img src="assets/images/clients/clients-1.png" alt="" />
                        </Link>
                    </figure>
                    <figure className="clients-logo">
                        <Link href="/index-3">
                            <img src="assets/images/clients/clients-2.png" alt="" />
                        </Link>
                    </figure>
                    <figure className="clients-logo">
                        <Link href="/index-3">
                            <img src="assets/images/clients/clients-3.png" alt="" />
                        </Link>
                    </figure>
                    <figure className="clients-logo">
                        <Link href="/index-3">
                            <img src="assets/images/clients/clients-4.png" alt="" />
                        </Link>
                    </figure>
                    <figure className="clients-logo">
                        <Link href="/index-3">
                            <img src="assets/images/clients/clients-5.png" alt="" />
                        </Link>
                    </figure>
                </div>
            </div>
        </section>
        
        </>
    )
}
