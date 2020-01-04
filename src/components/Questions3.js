import React from "react";
import RightsideFoodChartd from "./RightSideFoodChart";
import '../css/radio-button.css';
function Question3() {
    return(
        <section className="gender">
            <div className="container">
                <h2>Veggies & Grains</h2>
                <div className="">
                    <div className="row">
                        <div className="col-md-12 font-color-primary mb-3">
                            The greater number of foods you select in the "I like" column, the richer your diet will be.
                        </div>
                        <div className="col-lg-3 col-md-3 text-left">
                            <div className="choiceInfo">
                                <ul className="clearfix">
                                    <li><i className="fa fa-exclamation-circle" aria-hidden="true"> Please note: </i></li>
                                    <li className="help-text">
                                        The vegetables you have designated as "INCLUDE" may also be included,
                                        so that your diet is well-balanced. To completely exclude a product, click on the
                                        "EXCLUDE" column.
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
                                    <td className="text-left">Avocados</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-1" className="radio-custom" name="Avocados" value="Yes" type="radio"
                                            />
                                            <label htmlFor="radio-1" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-2" className="radio-custom radio-custom1" name="Avocados" value="No" type="radio"
                                            />
                                            <label htmlFor="radio-2" className="radio-custom-label radio-custom-label1"></label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-left">Potato</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-3" className="radio-custom" name="Potato" value="Yes" type="radio"
                                            />
                                            <label htmlFor="radio-3" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-4" className="radio-custom radio-custom1" name="Potato" value="No" type="radio"
                                            />
                                            <label htmlFor="radio-4" className="radio-custom-label radio-custom-label1"></label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-left">Green Salads</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-5" className="radio-custom" name="GreenSalads" value="Yes" type="radio"
                                            />
                                            <label htmlFor="radio-5" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-6" className="radio-custom radio-custom1" name="GreenSalads" value="No" type="radio"
                                            />
                                            <label htmlFor="radio-6" className="radio-custom-label radio-custom-label1"></label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-left">Rice</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-7" className="radio-custom" name="Rice" value="Yes" type="radio"
                                            />
                                            <label htmlFor="radio-7" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-8" className="radio-custom radio-custom1" name="Rice" value="No" type="radio"
                                            />
                                            <label htmlFor="radio-8" className="radio-custom-label radio-custom-label1"></label>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="text-left">Olives</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-9" className="radio-custom" name="Olives" value="Yes" type="radio"
                                            />
                                            <label htmlFor="radio-9" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-10" className="radio-custom radio-custom1" name="Olives" value="No" type="radio"
                                            />
                                            <label htmlFor="radio-10" className="radio-custom-label radio-custom-label1"></label>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="text-left">Black Beans</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-11" className="radio-custom" name="BlackBeans" value="Yes" type="radio"
                                            />
                                            <label htmlFor="radio-11" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-12" className="radio-custom radio-custom1" name="BlackBeans" value="No" type="radio"
                                            />
                                            <label htmlFor="radio-12" className="radio-custom-label radio-custom-label1"></label>
                                        </div>
                                    </td>
                                </tr>


                                <tr>
                                    <td className="text-left">Rolled Oats</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-13" className="radio-custom" name="RolledOats" value="Yes" type="radio"
                                            />
                                            <label htmlFor="radio-13" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-14" className="radio-custom radio-custom1" name="RolledOats" value="No" type="radio"
                                            />
                                            <label htmlFor="radio-14" className="radio-custom-label radio-custom-label1"></label>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="text-left">Quinoa</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-15" className="radio-custom" name="Quinoa" value="Yes" type="radio"
                                            />
                                            <label htmlFor="radio-15" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-16" className="radio-custom radio-custom1" name="Quinoa" value="No" type="radio"
                                            />
                                            <label htmlFor="radio-16" className="radio-custom-label radio-custom-label1"></label>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="text-left">Sweet Potato</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-17" className="radio-custom" name="SweetPotato" value="Yes" type="radio"
                                            />
                                            <label htmlFor="radio-17" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-18" className="radio-custom radio-custom1" name="SweetPotato" value="No" type="radio"
                                            />
                                            <label htmlFor="radio-18" className="radio-custom-label radio-custom-label1"></label>
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


export  default Question3;