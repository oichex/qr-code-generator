function generateQRCode() {
  const inputText = document.getElementById("inputText").value;
  const qrCodeContainer = document.getElementById("qrcode");
  const qrCodeWrapper = document.getElementById("qrcode-wrapper");
  const downloadBtn = document.getElementById("downloadBtn");
  
  qrCodeContainer.innerHTML = "";

  if (inputText.trim() !== "") {
    qrCodeWrapper.style.display = "flex";
    downloadBtn.style.display = "block"; 

    try {
      new QRCode(qrCodeContainer, {
        text: inputText,
        width: 180, 
        height: 180,
        colorDark: "#000000", 
        colorLight: "#ffffff", 
        correctLevel: QRCode.CorrectLevel.H 
      });
    } catch (error) {
      console.error("QR code could not be generated:", error);
      alert("An error occurred while generating the QR code!");
      qrCodeWrapper.style.display = "none";
      downloadBtn.style.display = "none"; 
    }
  } else {
    alert("Please enter a text or URL!");
    qrCodeWrapper.style.display = "none";
    downloadBtn.style.display = "none"; 
  }
}

function downloadQRCode() {
  const qrCodeCanvas = document.querySelector("#qrcode canvas");
  if (qrCodeCanvas) {
    const dataURL = qrCodeCanvas.toDataURL("image/png"); 
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = "qr-code.png"; 
    link.click();
  } else {
    alert("QR Code not found!");
  }
}
