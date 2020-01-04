import React from "react";
import RightsideFoodChartd from "./RightSideFoodChart";
import '../css/radio-button.css';
import { withCookies, Cookies } from 'react-cookie';
function HelloWorld() {
    alert('Hello World');
}

function HandleMeetPlan(e) {
    // set(e.currentTarget.name, 'dfdfdfdfd');
    alert(Cookies.get(e.currentTarget.name, 'dfdfdfsdf'));
}

function Question2() {
    return(
        <section className="gender">
            <div className="container">
                <h2>Meat</h2>
                <div className="">
                    <div className="row">
                        <div className="col-md-12 font-color-primary mb-3">
                            Please specify which meat products you would like to be Included:
                        </div>
                        <div className="col-lg-3 col-md-3 text-left">
                            <div className="choiceInfo">
                                <ul className="clearfix">
                                    <li><i className="fa fa-exclamation-circle" aria-hidden="true"> Please note: </i></li>
                                    <li className="help-text">
                                        The products that you choose to be Excluded will not be found in your personalized meal program.
                                        We recommend that the only products that you choose to be Excluded are foods which you are allergic to,
                                        should not eat due to a medical condition or a dietary restriction, or foods that you absolutely hate.
                                        The more products you choose to be included in you meal program, the more diverse and
                                        effective your diet will be.
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
                                    <td className="text-left">Beef</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-1" className="radio-custom" onChange={HandleMeetPlan} name="Beef" value="Yes" type="radio"
                                                   />
                                            <label htmlFor="radio-1" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-2" className="radio-custom radio-custom1"  onChange={HandleMeetPlan}  name="Beef" value="No" type="radio"
                                                   />
                                            <label htmlFor="radio-2" className="radio-custom-label radio-custom-label1"></label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-left">Fish</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-3" className="radio-custom" name="Fish" value="Yes" type="radio"
                                                   />
                                            <label htmlFor="radio-3" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-4" className="radio-custom radio-custom1" name="Fish" value="No" type="radio"
                                                   />
                                            <label htmlFor="radio-4" className="radio-custom-label radio-custom-label1"></label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-left">Shrimp</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-5" className="radio-custom" name="Shrimp" value="Yes" type="radio"
                                                   />
                                            <label htmlFor="radio-5" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-6" className="radio-custom radio-custom1" name="Shrimp" value="No" type="radio"
                                                   />
                                            <label htmlFor="radio-6" className="radio-custom-label radio-custom-label1"></label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-left">Chicken</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-7" className="radio-custom" name="Chicken" value="Yes" type="radio"
                                                   />
                                            <label htmlFor="radio-7" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-8" className="radio-custom radio-custom1" name="Chicken" value="No" type="radio"
                                                   />
                                            <label htmlFor="radio-8" className="radio-custom-label radio-custom-label1"></label>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="text-left">Pork</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-9" className="radio-custom" name="Pork" value="Yes" type="radio"
                                                   />
                                            <label htmlFor="radio-9" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-10" className="radio-custom radio-custom1" name="Pork" value="No" type="radio"
                                                   />
                                            <label htmlFor="radio-10" className="radio-custom-label radio-custom-label1"></label>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="text-left">Turkey</td>
                                    <td className="text-right text-center"  style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-11" className="radio-custom" name="Turkey" value="Yes" type="radio"
                                                   />
                                            <label htmlFor="radio-11" className="radio-custom-label"></label>
                                        </div>
                                    </td>
                                    <td className="text-right text-center" style={{ width: "10%" }}>
                                        <div>
                                            <input id="radio-12" className="radio-custom radio-custom1" name="Turkey" value="No" type="radio"
                                                   />
                                            <label htmlFor="radio-12" className="radio-custom-label radio-custom-label1"></label>
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
                            <button onClick={HelloWorld} className="btn btn-success">Hello World</button>
                        </div>
                        <RightsideFoodChartd/>
                    </div>
                </div>
            </div>
        </section>

    );
}


export  default withCookies(Question2);