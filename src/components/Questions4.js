import React from "react";
import RightsideFoodChartd from "./RightSideFoodChart";
import '../css/radio-button.css';
function Question4() {
    return(
        <section className="gender">
            <div className="container">
                <h2>Fruits</h2>
                <div className="">
                    <div className="row">
                        <div className="col-md-12 font-color-primary mb-3">
                            Tell us which of the fruits listed below you would like to include in your personalized meal program:
                        </div>
                        <div className="col-lg-3 col-md-3 text-left">
                            <div className="choiceInfo">
                                <ul className="clearfix">
                                    <li><i className="fa fa-exclamation-circle" aria-hidden="true"> Please note: </i></li>
                                    <li className="help-text">
                                        The products that you choose to be Excluded will not be found in your personalized
                                        meal program. We recommend that the only products that you choose to be Excluded are foods
                                        which you are allergic to, should not eat due to a medical condition or a dietary restriction,
                                        or foods that you absolutely hate. The more products you choose to be included in you meal
                                        program, the more diverse and effective your diet will be.
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
                                    <td className="text-left">Orange</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-1" className="radio-custom" name="Orange" value="Yes" type="radio"
                                            />
                                            <label htmlFor="radio-1" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-2" className="radio-custom radio-custom1" name="Orange" value="No" type="radio"
                                            />
                                            <label htmlFor="radio-2" className="radio-custom-label radio-custom-label1"></label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-left">Pumpkin</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-3" className="radio-custom" name="Pumpkin" value="Yes" type="radio"
                                            />
                                            <label htmlFor="radio-3" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-4" className="radio-custom radio-custom1" name="Pumpkin" value="No" type="radio"
                                            />
                                            <label htmlFor="radio-4" className="radio-custom-label radio-custom-label1"></label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-left">Berries</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-5" className="radio-custom" name="Berries" value="Yes" type="radio"
                                            />
                                            <label htmlFor="radio-5" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-6" className="radio-custom radio-custom1" name="Berries" value="No" type="radio"
                                            />
                                            <label htmlFor="radio-6" className="radio-custom-label radio-custom-label1"></label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-left">Apples</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-7" className="radio-custom" name="Apples" value="Yes" type="radio"
                                            />
                                            <label htmlFor="radio-7" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-8" className="radio-custom radio-custom1" name="Apples" value="No" type="radio"
                                            />
                                            <label htmlFor="radio-8" className="radio-custom-label radio-custom-label1"></label>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="text-left">Bananas</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-9" className="radio-custom" name="Bananas" value="Yes" type="radio"
                                            />
                                            <label htmlFor="radio-9" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-10" className="radio-custom radio-custom1" name="Bananas" value="No" type="radio"
                                            />
                                            <label htmlFor="radio-10" className="radio-custom-label radio-custom-label1"></label>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="text-left">Pineapple</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-11" className="radio-custom" name="Pineapple" value="Yes" type="radio"
                                            />
                                            <label htmlFor="radio-11" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-12" className="radio-custom radio-custom1" name="Pineapple" value="No" type="radio"
                                            />
                                            <label htmlFor="radio-12" className="radio-custom-label radio-custom-label1"></label>
                                        </div>
                                    </td>
                                </tr>


                                <tr>
                                    <td className="text-left">Grapefruit</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-13" className="radio-custom" name="Grapefruit" value="Yes" type="radio"
                                            />
                                            <label htmlFor="radio-13" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-14" className="radio-custom radio-custom1" name="Grapefruit" value="No" type="radio"
                                            />
                                            <label htmlFor="radio-14" className="radio-custom-label radio-custom-label1"></label>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="text-left">Melon</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-15" className="radio-custom" name="Melon" value="Yes" type="radio"
                                            />
                                            <label htmlFor="radio-15" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-16" className="radio-custom radio-custom1" name="Melon" value="No" type="radio"
                                            />
                                            <label htmlFor="radio-16" className="radio-custom-label radio-custom-label1"></label>
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


export  default Question4;