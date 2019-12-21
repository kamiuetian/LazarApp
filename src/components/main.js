import React from 'react';
import Gender from './gender';
import MobileGender from './genderMobile';
function Main() {
  return (
    <main>
        <section id="home">
        <div className="myProgress">
            <div className="myProgressBar" style={{width: 11.090909090909}}></div>
            <div className="progressIndicator" style={{left: 11.090909090909}}>
                <div>Question 1</div>
            </div>
        </div>
        <Gender />
        <MobileGender />
        </section>
    </main>
  );
}

export default Main;
