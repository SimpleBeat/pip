const videoElement = document.getElementById('video')
const button = document.getElementById('button')

// 1. Prompt to select a media stream
// 2. Pass video to videoElement
// 3. Play video inside videoElement
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject = mediaStream
        videoElement.onloadedmetadata = () => {
            videoElement.play()
        }
    } catch (error) {

    }
}

button.addEventListener('click', async () => {
    // Disable clicked button
    button.disabled = true
    // Start PIP
    await videoElement.requestPictureInPicture()
    // Reset button
    button.disabled = false
    
})

// On load
selectMediaStream()