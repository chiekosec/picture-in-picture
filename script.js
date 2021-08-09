const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// capture selected screen and pass it to video elemet
async function selectMediaStream() {
  try {
    if (typeof videoElement.requestPictureInPicture !== "function") {
      document.body.innerText =
        "This browser doesn't support picture-in-picture mode. Please try Chrome/Safari?Edge";
    } else {
      const mediaStream = await navigator.mediaDevices.getDisplayMedia();
      videoElement.srcObject = mediaStream;
      videoElement.onloadedmetadata = () => {
        videoElement.play();
        videoElement.requestPictureInPicture();
      };
    }
  } catch (error) {
    console.log(error);
  }
}

// prompt screen capture on clicking button
button.addEventListener("click", selectMediaStream);
