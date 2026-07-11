import React, { useEffect, useRef, useState } from "react";

const OTPInput = ({ length, onComplete }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(()=>{
    inputRefs.current[0]?.focus()
  },[])

  const handleChange = (e, index) => {
    const value = e.target.value.replaceAll(" ", "")
    const digit = value.slice(-1);
    if (digit && isNaN(digit)) return;

    const newOTP = [...otp];
    newOTP[index] = digit;
    setOtp(newOTP);

    if (digit && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }

    if (newOTP.every((item) => item !== "")) {
      onComplete(newOTP.join(""));
    }
  };

  const handleBackspace=(e, index) =>{
    if(e.key !== "Backspace") return
    const newOTP = [...otp]

    if(otp[index]){
        newOTP[index] =""
        setOtp(newOTP)
        return 
    }

    if(index>0){
        inputRefs.current[index-1].focus()
        newOTP[index-1]=""
        setOtp(newOTP)
    }
  }

  const handleArrowNavigation=(e, index) => {
    if(e.key === "ArrowLeft" && index>0){
        inputRefs.current[index-1].focus()
    }

    if(e.key === "ArrowRight" && index<length-1){
        inputRefs.current[index+1].focus()
    }
  }

  return (
    <div className="otp-container" role="group" aria-label="One-time password">
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          value={digit}
          maxLength={1}
          className="opt-input"
          onChange={(e) => handleChange(e, index)}
          ref={(el) => (inputRefs.current[index] = el)}
          onKeyDown={(e) =>{ handleBackspace(e, index); 
            handleArrowNavigation(e, index)}}
          aria-label={`OTP digit ${index+1}`}
          autoComplete="one-time-code"
          patter="\d*"
        />
      ))}
    </div>
  );
};

export default OTPInput;
