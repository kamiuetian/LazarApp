import React from 'react';
import Gender from './gender';
import MobileGender from './genderMobile';
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Questions3";
import Question4 from "./Questions4";
import Question5 from "./Questions5";
import Question6 from "./Questions6";
import Question8 from "./Questions8";
import  { CookiesProvider }  from "react-cookie";
import Question9 from "./Questions9";
function Main() {
    return (
        <CookiesProvider>
            <main>
                <section id="home">
                    <div className="myProgress">
                        <div className="myProgressBar" style={{width: 31.090909090909}}></div>
                        <div className="progressIndicator" style={{left: 31.090909090909}}>
                            <div>Question 1</div>
                        </div>
                    </div>
                    {/*<Gender />*/}
                    {/*<Question1/>*/}
                    <Question2/>
                    {/*<Question3/>*/}
                    {/*<Question4/>*/}
                    {/*<Question5/>*/}
                    {/*<Question6/>*/}
                    {/* 7 Unser Process*/}
                    {/*<Question8/>*/}
                    {/*<Question9/>*/}
                </section>
            </main>
        </CookiesProvider>
    );
}

export default  Main;
