import CounterUp from "@/components/elements/CounterUp"
import VideoPopup from "@/components/elements/VideoPopup"
import Link from "next/link"


export default function video() {
    return (
        <>
            <section className="video-section centred">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/video-bg.jpg)' }}></div>
                        <div className="video-btn">
                            <div className="video-btn">
                                    <VideoPopup />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
