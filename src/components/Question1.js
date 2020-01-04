import React from "react";
import RightsideFoodChartd from "./RightSideFoodChart";

function Question1() {
    return(
        <section className="gender">
            <div className="container">
                <h2>Physical Activity</h2>
                <div className="">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 text-left">
                            <div className="choiceInfo">
                                <ul className="clearfix">
                                    <li><i className="fa fa-exclamation-circle" aria-hidden="true"></i></li>
                                    <li>
                                        Your level of physical activity is the single most important factor which determines the
                                        amount of food in your meal program. Please select the answer most closely corresponding to your
                                        lifestyle in order to achieve your target weight.
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
                        <button className="btn btn-red btn-block mb-4"><b>ALMOST NO PHYSICAL ACTIVITY</b></button>
                        <button className="btn btn-red btn-block mb-4"><b>I often go for a walk</b></button>
                        <button className="btn btn-red btn-block mb-4"><b>I exercise 1 - 2 a week</b></button>
                        <button className="btn btn-red btn-block mb-4"><b>I exercise 3 - 5 times a week</b></button>
                        <button className="btn btn-red btn-block mb-4"><b>I exercise 5 - 7 times a week</b></button>
                        <button className="btn btn-secondary btn-block mb-4"><b>BACK</b></button>
                        </div>
                        <RightsideFoodChartd/>
                    </div>
                </div>

            </div>
        </section>

);
}


export  default Question1;