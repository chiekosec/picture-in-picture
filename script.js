const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// capture selected screen and pass it to video elemet
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
      videoElement.requestPictureInPicture();
    };
  } catch (error) {
    console.log(error);
  }
}

// prompt screen capture on clicking button
button.addEventListener("click", selectMediaStream);
