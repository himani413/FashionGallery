import React from "react";

const Countdown = () => {
    return (
        <section className="timer-container">
            <section className="timer">
                <div>
                    <span className="mdi mdi-calendar-clock timer-icon"></span>
                    <h2>Countdown Timer</h2>
                    <p>Countdown to a really special date.</p>
                </div>
                <div>
                    <section>
                        <p>87</p>
                        <p><small>Days</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>87</p>
                        <p><small>Hours</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>87</p>
                        <p><small>Minutes</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>87</p>
                        <p><small>Seconds</small></p>
                    </section>
                </div>
            </section>

        </section>
    );

};

export default Countdown;