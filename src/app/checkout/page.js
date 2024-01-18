
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Checkout">
                <div>
                    {/* checkout-section end */}
                    <section className="checkout-section pt_150 pb_150">
                        <div className="container">
                            <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 upper-column">
                                <div className="upper-box">
                                <div className="coupon single-box">
                                    Have a Coupon?{' '}
                                    <Link href="/checkout">Click here to enter your code</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12 left-column">
                                    <div className="inner-box">
                                        <div className="billing-info">
                                        <h2 className="sub-title">Billing Details</h2>
                                        <form action="#" method="post" className="billing-form">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <label>First Name*</label>
                                                    <div className="field-input">
                                                    <input type="text" name="first_name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <label>Last Name*</label>
                                                    <div className="field-input">
                                                    <input type="text" name="last_name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <label>Company Name*</label>
                                                    <div className="field-input">
                                                    <input type="text" name="company_name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <label>Email Address*</label>
                                                    <div className="field-input">
                                                    <input type="email" name="email" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <label>Phone Number*</label>
                                                    <div className="field-input">
                                                    <input type="text" name="phone" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <label>Country*</label>
                                                    <div className="select-column select-box">
                                                        <select className="selectmenu" name="subject">
                                                            <option value="*">Select Option</option>
                                                            <option value=".category-1">United State</option>
                                                            <option value=".category-2">Australia</option>
                                                            <option value=".category-3">Canada</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <label>Address*</label>
                                                    <div className="field-input">
                                                    <input type="text" name="address" className="address" />
                                                    <input type="text" name="address" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <label>Town/City*</label>
                                                    <div className="field-input">
                                                    <input type="text" name="town_city" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <label>State*</label>
                                                    <div className="select-column select-box">
                                                        <select className="selectmenu" name="subject">
                                                            <option value="*">Select Option</option>
                                                            <option value=".category-1">United State</option>
                                                            <option value=".category-2">Australia</option>
                                                            <option value=".category-3">Canada</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <label>Zip Code*</label>
                                                    <div className="field-input">
                                                    <input type="text" name="zip" />
                                                    </div>
                                                </div>
                                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                    <div className="create-acc">
                                                    <div className="custom-controls-stacked">
                                                        <label className="custom-control material-checkbox">
                                                        <input type="checkbox" className="material-control-input" />
                                                        <span className="material-control-indicator"></span>
                                                        <span className="description">Create an Account?</span>
                                                        </label>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        </div>
                                        <div className="additional-info">
                                            <div className="note-book">
                                                <label>Order Notes</label>
                                                <textarea
                                                name="note_box"
                                                placeholder="Notes about your order, e.g. special notes for your delivery"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 right-column">
                                    <div className="inner-box">
                                        <div className="order-info">
                                        <h2 className="sub-title">Your Order</h2>
                                        <div className="order-product">
                                            <ul className="order-list clearfix">
                                            <li className="title">
                                                <h4>Product</h4>
                                                <h4>Total</h4>
                                            </li>
                                            <li>
                                                <div className="single-box clearfix">
                                                <figure className="image-box">
                                                    <img src="assets/images/shop/cart-1.png" alt="" />
                                                </figure>
                                                <p>Wooden Tea Table x 1</p>
                                                <span>$19:20</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="single-box clearfix">
                                                <figure className="image-box">
                                                    <img src="assets/images/shop/cart-2.png" alt="" />
                                                </figure>
                                                <p>Armchair Black Leather x 1</p>
                                                <span>$19:20</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="single-box clearfix">
                                                <figure className="image-box">
                                                    <img src="assets/images/shop/cart-3.png" alt="" />
                                                </figure>
                                                <p>Nordic Kitchen Teapot x 1</p>
                                                <span>$19:20</span>
                                                </div>
                                            </li>
                                            <li className="sub-total clearfix">
                                                <h4>Sub Total</h4>
                                                <span>$57:60</span>
                                            </li>
                                            <li className="order-total clearfix">
                                                <h4>Order Total</h4>
                                                <span>$57:60</span>
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                        <div className="payment-info">
                                        <h2 className="sub-title">Payment</h2>
                                        <div className="payment-inner">
                                            <div className="option-block">
                                            <div className="custom-controls-stacked">
                                                <label className="custom-control material-checkbox">
                                                <input type="checkbox" className="material-control-input" />
                                                <span className="material-control-indicator"></span>
                                                <span className="description">Create an account?</span>
                                                </label>
                                            </div>
                                            <p>
                                                Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                                            </p>
                                            </div>
                                            <div className="option-block">
                                            <div className="custom-controls-stacked">
                                                <label className="custom-control material-checkbox">
                                                <input type="checkbox" className="material-control-input" />
                                                <span className="material-control-indicator"></span>
                                                <span className="description">
                                                    Paypal
                                                    <Link href="/checkout">What is paypal?</Link>
                                                </span>
                                                </label>
                                            </div>
                                            </div>
                                            <div className="btn-box">
                                            <Link href="/checkout" className="theme-btn-one">
                                                Place Your Order
                                            </Link>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}