'use client'
import Layout from "../components/layout/Layout";
import Link from "next/link";
import RootLayout from '../RootLayout';
import '../main.css'

export default function Home() {
  return (
    <>
     <RootLayout
            title="Privacy Policy | Custom e-Learning Services Company - Blitz Learning Technologies"
            description="Transform your team with Blitz Learning service- your go-to custom e-learning solutions company. Elevate skills and efficiency with tailored courses."
        >
            {/* Content of the page */}
        </RootLayout>
      <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Privacy Policy">
  

        <div className="col-lg-12 col-md-12 col-sm-12 mb-0">
          <div className="main mb-1">
            <h4 className="title">Our philosophy</h4>
            <p className="sub-title">
              The philosophy of Blitz Learning Technologies Private Limited (referred to as Blitz Learning, BLT, we, us, or our) is that electronic privacy is essential to the Internet’s success. As such, we ensure the confidentiality of the personal information we receive and will not disclose identifiable information about our clients to any third party. When you register or contact us, we may request your name, contact information, business information, email address, website details, and details on your specific project requirements (Inquiry Data). We use this information to personalize our services and to send clients email notifications of new features or services available. We also make improvements to the Blitz Learning website regularly to provide clients with a more personalized, relevant, and intelligent service.
            </p>
            <h4 className="title">Information collected</h4>
            <p>
              We collect information on our website for various reasons, and we have outlined what information we collect and what we do with it. We use customer contact information to send you information about our services and to contact you when necessary. We may send you e-mails or newsletters with information and offers about our services, and you can opt-out of such communications free of charge at any time. We will not disclose personal data about you to any third party without your permission, except as set forth in the Terms of Use.
            </p>
            <h4 className="title">Use of personal information</h4>
            <p>
              Some of your information may be shared on an aggregate basis only, as part of a larger set of statistics, but that information will not be sufficient to identify you. If there is a change in control of Blitz Learning, the personal contact information we collect could be sold as part of that transaction and potentially used by the purchaser. We use technologies such as cookies, beacons, tags, scripts, and other similar technologies to help administer the site, identify the total number of users, measure traffic patterns for research purposes, personalize or customize content, and to better manage content.
            </p>
            <br />
            <p>
              Some of your information may be shared on an aggregate basis only, as part of a larger set of statistics, but that information will not be sufficient to identify you. If there is a change in control of Blitz Learning, the personal contact information we collect could be sold as part of that transaction and potentially used by the purchaser. We use technologies such as cookies, beacons, tags, scripts, and other similar technologies to help administer the site, identify the total number of users, measure traffic patterns for research purposes, personalize or customize content, and to better manage content.
            </p>
            <h4 className="title">Access</h4>
            <p>
              If you want to know if we have any of your Personal Information, you can ask us and we’ll provide that information to you. 
              If your Personal Information changes or is inaccurate, you can correct it by contacting <a className="mailto-link" href=" mailto:marcom@blitzlearning.in"> marcom@blitzlearning.in </a>  
               If you want to stop using our service, you can also contact <a className="mailto-link" href=" mailto:marcom@blitzlearning.in">marcom@blitzlearning.in</a> We’ll respond to your request within 30 days.
            </p>
            <h4 className="title">Security</h4>
            <p>
              We have measures in place to protect your information from loss, misuse, and alteration. Personal information is stored in secure environments that are not accessible to the public, and all financial information submitted to our site is encrypted and stored on private servers that are not accessible to the public.
            </p>
            <h4 className="title">Data storage and data protection compliance</h4>
            <p>
              Your data may be processed in data centers located in the United States and India, which may be subject to U.S. and Indian laws and accessible to their government, law enforcement, and regulatory agencies. We’ll take measures to ensure your Personal Information is stored safely, and we comply with U.S. Data Protection Acts and the EU’s General Data Protection Regulation.
            </p>
            <h4 className="title">Your rights</h4>
            <p>
              You have a legal right to access and correct any information we have about you. You also have the right to prevent us from using your Personal Information for direct marketing purposes.
            </p>
            <h4 className="title">Opt-Out policy</h4>
            <p>
              You can opt out of receiving communications from us by emailing us at <a className="mailto-link" href=" mailto:marcom@blitzlearning.in">marcom@blitzlearning.in</a> with your username and email address.
            </p>
            <h4 className="title">Deletion of your account</h4>
            <p>
              If your membership is terminated, we’ll delete your contact information unless we’re required to store it for legal or billing reasons.
            </p>
            <h4 className="title">Service quality monitoring</h4>
            <p>
              We may monitor or record calls for quality assurance purposes.
            </p>
            <h4 className="title">Changes to this privacy policy</h4>
            <p>
              We may change this Privacy Policy from time to time. We’ll post any revised version on our website and email you if we make material changes. Your continued use of our services after any changes indicates your acceptance of those changes.
            </p>
            <h4 className="title">Contacting Biltz Learning</h4>
            <p>
              If you have any questions or concerns about this Privacy Policy or the use of your personal data, you can email us at <a className="mailto-link" href=" mailto:marcom@blitzlearning.in">marcom@blitzlearning.in</a> We reserve the right to change or update this policy at any time.
            </p>
            <div className="area">
              <h3>Get free consultation for your needs.</h3>
              <div className="message-bt">
                <button type="submit" className="theme-btn-on">
                  <i className="icon-2"></i>
                  +91-1204316127
                </button>
              </div>
            </div>
          </div>

        </div>

         {/* </section>
       sidebar-page-container end */}
      </Layout>
    </>
  );
}
