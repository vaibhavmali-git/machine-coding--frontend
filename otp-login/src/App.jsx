import React from "react";
import OTPInput from "./components/OTPInput";

const App = () => {
  const handleComplete = (otp) => {
    console.log("OTP", otp);

    setTimeout(() => {
      alert(`OTP Submitted: ${otp}`);
    }, 500);
  };
  return (
    <div className="app">
      <main>
        <h2>OTP Verification</h2>

        <OTPInput length={6} onComplete={handleComplete} />
      </main>
    </div>
  );
};

export default App;
