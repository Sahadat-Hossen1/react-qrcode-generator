import React, { useState } from "react";
import QRCode from "react-qr-code";
const App = () => {
  const [QrText, setQrText] = useState("");
  // error message
  const [errorMgs, setErrorMgs] = useState("");
  const GeneratQrCode = (e) => {
    e.preventDefault();
    const form = e.target;
    const textInput = form.textInput.value.trim();
    if (!textInput) {
      setErrorMgs("Please fill the input ");
      return;
    }
    setQrText(textInput);
    setErrorMgs('')
  };
  return (
    <div className="bg-gray-50 flex items-center justify-center min-h-screen p-4">
      {/* Main Container Card */}
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-sm w-full mx-auto transform transition-all duration-300 hover:shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          QR Code Generator
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Enter text or a URL to create your QR code.
        </p>

        {/* Input and Button Container */}
        <form className="flex flex-col space-y-4 " onSubmit={GeneratQrCode}>
          <input
            type="text"
            name="textInput"
            placeholder="e.g., Hello World! or https://example.com"
            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
          />

          <button
            type="submit"
            className="w-full px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Generate QR Code
          </button>
        </form>
        {/* {
          errorMgs?(<h1 className="text-red-500 text-2xl text-center py-3">{errorMgs} </h1>):''
        } */}

        {/* QR Code Display Container */}
        <div
          id="qr-container"
          className="mt-8 flex items-center justify-center min-h-[160px] bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 p-4 transition-all delay-1000"
        >
          {
          errorMgs ?
          <h1 className="text-2xl text-red-600 text-center "> {errorMgs} </h1>
          : QrText ?
          <QRCode value={QrText}/>
          : <h1 className="text-2xl font-bold text-center">Generate a Qr Code </h1>
           }
        </div>
      </div>
    </div>
  );
};

export default App;
