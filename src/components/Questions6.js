import React from "react";
import RightsideFoodChartd from "./RightSideFoodChart";

function Question6() {
    return(
        <section className="gender">
            <div className="container">
                <h2>Describe a typical day for you</h2>
                <div className="">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 text-left">
                            <div className="choiceInfo">
                                <ul className="clearfix">
                                    <li><i className="fa fa-exclamation-circle" aria-hidden="true"></i></li>
                                    <li>
                                        Your lifestyle has a significant impact on the amount of food included in your personalized
                                        meal program. If you can not find the exact answer choose the one that most closely corresponds
                                        to your daily life.
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
                            <button className="btn btn-red btn-block mb-4"><b>At the office</b></button>
                            <button className="btn btn-red btn-block mb-4"><b>At the office, but I go out on a regular basis</b></button>
                            <button className="btn btn-red btn-block mb-4"><b>I spend the better part of the day on foot</b></button>
                            <button className="btn btn-red btn-block mb-4"><b>Manual labor</b></button>
                            <button className="btn btn-red btn-block mb-4"><b>I mostly stay at home</b></button>
                            <button className="btn btn-secondary btn-block mb-4"><b>BACK</b></button>
                        </div>
                        <RightsideFoodChartd/>
                    </div>
                </div>

            </div>
        </section>

    );
}


export  default Question6;