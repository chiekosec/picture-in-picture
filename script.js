const videoElement = document.getElementById("video");
const button = document.getElementById("button");

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log(error);
  }
}

// show screen in pictur-in-picture mode
async function showPicinPic() {
  await videoElement.requestPictureInPicture();
}

button.addEventListener("click", showPicinPic);

// prompt screen capture on page load
window.onload = selectMediaStream();
