import React from "react";
import RightsideFoodChartd from "./RightSideFoodChart";

function Question8() {
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
                        <form action="https://my.lazarangelov.diet/2" method="POST" id="genderForm" style={{display: 'none'}}>
                            <input type="hidden" name="gender" value="" id="genderInput"/>
                            <input type="hidden" name="type" value="gender"/>
                            <input type="hidden" name="_token" value="WFB6BpScEyX9uFMwmEnX6eImvJ0QBbnnYmjZjVmX"/>
                        </form>
                        <div className="col-lg-6 col-md-6">
                            <button className="btn btn-red btn-block mb-4"><b>1 Time</b></button>
                            <button className="btn btn-red btn-block mb-4"><b>2 Times</b></button>
                            <button className="btn btn-red btn-block mb-4"><b>3 Times</b></button>
                            <button className="btn btn-red btn-block mb-4"><b>4 Times or More</b></button>
                            <button className="btn btn-red btn-block mb-4"><b>I eat a different number of times every day</b></button>
                            <button className="btn btn-secondary btn-block mb-4"><b>BACK</b></button>
                        </div>
                        <RightsideFoodChartd/>
                    </div>
                </div>

            </div>
        </section>

    );
}


export  default Question8;