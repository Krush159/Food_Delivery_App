import React from 'react'

export default class Footer extends React.Component {
    render() {
        return (
            <div className="container-fluid text-left text-dark" style={{ backgroundColor: "rgb(87, 0, 0)" }}>
                <div className="column py-5 px-5">
                    <div className="row">
                        <div className="col-md-3">
                            <h5 className="text-white ">Online store</h5>
                            <div className="gutter-bottom--mobile footer__column-list">
                                <div>Sell online</div>
                                <div>Features</div>
                                <div>Examples</div>
                                <div>Website editor</div>
                                <div>Online retail</div>
                                <div>Ecommerce website</div>
                                <div>Domain names</div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h5 className="text-white ">Point of sale</h5>
                            <div className="gutter-bottom--mobile ">
                                <div>Point of sale</div>
                                <div>Features</div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h5 className="text-white ">Support</h5>
                            <div className="gutter-bottom--mobile ">
                                <div>24/7 support</div>
                                <div>Shopify Help Center</div>
                                <div>Forums</div>
                                <div>API documentation</div>
                                <div>Free tools</div>
                                <div>Free stock photos</div>
                                <div>Websites for sale</div>
                                <div>Hatchful</div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h5 className="text-white ">Foodly</h5>
                            <div className="gutter-bottom--mobile ">
                                <div>Contact</div>
                                <ul>
                                    <li>
                                        <a href="https://wa.me/918893627252">
                                            <i class="fa fa-whatsapp" aria-hidden="true"></i>
                                            <span> +91 645121545213</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:support@foodly.com">
                                            <i class="fa fa-envelope" aria-hidden="true"></i>
                                            <span>support@foodly.com</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a> <span>FSSAI : 1545332006</span> </a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}