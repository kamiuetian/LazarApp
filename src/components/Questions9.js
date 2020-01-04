import React from "react";
import RightsideFoodChartd from "./RightSideFoodChart";

function Question9() {
    return(
        <section className="gender">
            <div className="container">
                <h2 style={{ whiteSpace: 'no-wrap' }}>How many times do you eat a day</h2>
                <div className="">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 text-left">
                            <div className="choiceInfo">
                                <ul className="clearfix">
                                    <li><i className="fa fa-exclamation-circle" aria-hidden="true"></i></li>
                                    <li>
                                        You are probably aware that this factor is of the utmost importance when you want to lose weight.
                                        If you eat irregularly your metabolism slows down and as a result fat is accumulated.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">


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


export  default Question9;