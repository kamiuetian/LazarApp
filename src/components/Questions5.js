import React from "react";
import RightsideFoodChartd from "./RightSideFoodChart";
import '../css/radio-button.css';
function Question5() {
    return(
        <section className="gender">
            <div className="container">
                <h2>Products</h2>
                <div className="">
                    <div className="row">
                        <div className="col-md-12 font-color-primary mb-3">
                            Specify how much you like the types of products listed below:
                        </div>
                        <div className="col-lg-3 col-md-3 text-left">
                            <div className="choiceInfo">
                                <ul className="clearfix">
                                    <li><i className="fa fa-exclamation-circle" aria-hidden="true"> Please note: </i></li>
                                    <li className="help-text">
                                        The products that you choose to be Excluded will not be found in your personalized meal program.
                                        We recommend that the only products that you choose to be Excluded are foods which you are allergic
                                        to, should not eat due to a medical condition or a dietary restriction, or foods that you
                                        absolutely hate. The more products you choose to be included in you meal program, the more
                                        diverse and effective your diet will be.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <table className="table text-white">
                                <tr>
                                    <td></td>
                                    <td className="text-success text-center"><b>INCLUDE</b></td>
                                    <td className="text-red text-center"><b>EXCLUDE</b></td>
                                </tr>
                                <tr>
                                    <td className="text-left">Egg</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-1" className="radio-custom" name="Egg" value="Yes" type="radio"
                                            />
                                            <label htmlFor="radio-1" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-2" className="radio-custom radio-custom1" name="Egg" value="No" type="radio"
                                            />
                                            <label htmlFor="radio-2" className="radio-custom-label radio-custom-label1"></label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-left">Mushrooms</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-3" className="radio-custom" name="Mushrooms" value="Yes" type="radio"
                                            />
                                            <label htmlFor="radio-3" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-4" className="radio-custom radio-custom1" name="Mushrooms" value="No" type="radio"
                                            />
                                            <label htmlFor="radio-4" className="radio-custom-label radio-custom-label1"></label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-left">Nuts</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-5" className="radio-custom" name="Nuts" value="Yes" type="radio"
                                            />
                                            <label htmlFor="radio-5" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-6" className="radio-custom radio-custom1" name="Nuts" value="No" type="radio"
                                            />
                                            <label htmlFor="radio-6" className="radio-custom-label radio-custom-label1"></label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-left">Yogurt</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-7" className="radio-custom" name="Yogurt" value="Yes" type="radio"
                                            />
                                            <label htmlFor="radio-7" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-8" className="radio-custom radio-custom1" name="Yogurt" value="No" type="radio"
                                            />
                                            <label htmlFor="radio-8" className="radio-custom-label radio-custom-label1"></label>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="text-left">Soy milk</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-9" className="radio-custom" name="Soymilk" value="Yes" type="radio"
                                            />
                                            <label htmlFor="radio-9" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-10" className="radio-custom radio-custom1" name="Soymilk" value="No" type="radio"
                                            />
                                            <label htmlFor="radio-10" className="radio-custom-label radio-custom-label1"></label>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="text-left">Peanut Butter</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-11" className="radio-custom" name="PeanutButter" value="Yes" type="radio"
                                            />
                                            <label htmlFor="radio-11" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-12" className="radio-custom radio-custom1" name="PeanutButter" value="No" type="radio"
                                            />
                                            <label htmlFor="radio-12" className="radio-custom-label radio-custom-label1"></label>
                                        </div>
                                    </td>
                                </tr>


                                <tr>
                                    <td className="text-left">Feta cheese</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-13" className="radio-custom" name="Fetacheese" value="Yes" type="radio"
                                            />
                                            <label htmlFor="radio-13" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-14" className="radio-custom radio-custom1" name="Fetacheese" value="No" type="radio"
                                            />
                                            <label htmlFor="radio-14" className="radio-custom-label radio-custom-label1"></label>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="text-left">Cheese</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-15" className="radio-custom" name="Cheese" value="Yes" type="radio"
                                            />
                                            <label htmlFor="radio-15" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-16" className="radio-custom radio-custom1" name="Cheese" value="No" type="radio"
                                            />
                                            <label htmlFor="radio-16" className="radio-custom-label radio-custom-label1"></label>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="text-left">Cottage cheese</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-17" className="radio-custom" name="Cottagecheese" value="Yes" type="radio"
                                            />
                                            <label htmlFor="radio-17" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-18" className="radio-custom radio-custom1" name="Cottagecheese" value="No" type="radio"
                                            />
                                            <label htmlFor="radio-18" className="radio-custom-label radio-custom-label1"></label>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="text-left">Tofu</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-19" className="radio-custom" name="Tofu" value="Yes" type="radio"
                                            />
                                            <label htmlFor="radio-19" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-20" className="radio-custom radio-custom1" name="Tofu" value="No" type="radio"
                                            />
                                            <label htmlFor="radio-20" className="radio-custom-label radio-custom-label1"></label>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            <div className="form-row mb-3">
                                <div className="col-6">
                                    <button className="btn btn-block btn-secondary">BACK</button>
                                </div>
                                <div className="col-6">
                                    <button className="btn btn-block btn-red">CONTINUE</button>
                                </div>
                            </div>

                        </div>
                        <RightsideFoodChartd/>
                    </div>
                </div>
            </div>
        </section>

    );
}


export  default Question5;