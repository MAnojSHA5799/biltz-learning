'use client'
import QuantityInput from "@/components/elements/QuantityInput"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Shopping Cart">
                <div>
                    <section className="cart-section p_relative">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-12 col-md-12 col-sm-12 table-column">
                                    <div className="table-outer">
                                        <table className="cart-table">
                                            <thead className="cart-header">
                                                <tr>
                                                    <th>&nbsp;</th>
                                                    <th className="prod-column">Product</th>
                                                    <th>&nbsp;</th>
                                                    <th>&nbsp;</th>
                                                    <th className="price">Price</th>
                                                    <th className="quantity">Quantity</th>
                                                    <th>Subtotal</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td colSpan="4" className="prod-column">
                                                    <div className="column-box">
                                                        <div className="remove-btn">
                                                            <i className="icon-40"></i>
                                                        </div>
                                                        <div className="prod-thumb">
                                                            <img src="assets/images/shop/cart-1.png" alt="" />
                                                        </div>
                                                        <div className="prod-title">
                                                            <h4>Wooden Tea Table</h4>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="price">$19:20</td>
                                                <td className="qty">
                                                    <div className="item-quantity">
                                                        <QuantityInput />
                                                    </div>
                                                </td>
                                                <td className="sub-total">$19:20</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="4" className="prod-column">
                                                      <div className="column-box">
                                                        <div className="remove-btn">
                                                            <i className="icon-40"></i>
                                                        </div>
                                                        <div className="prod-thumb">
                                                            <img src="assets/images/shop/cart-2.png" alt="" />
                                                        </div>
                                                        <div className="prod-title">
                                                            <h4>Armchair Black Leather</h4>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="price">$19:20</td>
                                                <td className="qty">
                                                <div className="item-quantity">
                                                        <QuantityInput />
                                                    </div>
                                                </td>
                                                <td className="sub-total">$19:20</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="4" className="prod-column">
                                                    <div className="column-box">
                                                        <div className="remove-btn">
                                                            <i className="icon-40"></i>
                                                        </div>
                                                        <div className="prod-thumb">
                                                            <img src="assets/images/shop/cart-3.png" alt="" />
                                                        </div>
                                                        <div className="prod-title">
                                                            <h4>Nordic Kitchen Teapot</h4>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="price">$19:20</td>
                                                <td className="qty">
                                                <div className="item-quantity">
                                                        <QuantityInput />
                                                    </div>
                                                </td>
                                                <td className="sub-total">$19:20</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="othre-content">
                                    <div className="coupon-box">
                                        <input type="text" placeholder="Coupon code..." />
                                        <button type="button" className="theme-btn-one">
                                        Apply Coupon
                                        </button>
                                    </div>
                                    <div className="update-btn">
                                        <button type="button" className="theme-btn-two">
                                        Update Cart
                                        </button>
                                    </div>
                                </div>
                                <div className="cart-total">
                                    <div className="row">
                                        <div className="col-xl-5 col-lg-12 col-md-12 offset-xl-7 cart-column">
                                        <div className="total-cart-box clearfix">
                                            <h3 className="fs_20 fw_medium lh_30 d_block pb_20">Cart Totals</h3>
                                            <ul className="list clearfix mb_30">
                                            <li>Subtotal:<span>$57:60</span></li>
                                            <li>Total:<span>$57:60</span></li>
                                            </ul>
                                            <Link href="/shopping-cart" className="theme-btn-one">Proceed to Checkout</Link>
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