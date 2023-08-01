const URL = '/api/ping';
const INTERVAL = 4000;

function ping() {
  try {
    fetch(URL);
  } catch (e) {
    console.error(e);
  }
}

class ViewerPing {
  timer: ReturnType<typeof setInterval>;

  start() {
    this.stop();

    this.timer = setInterval(() => {
      ping();
    }, INTERVAL);
  }

  stop() {
    clearInterval(this.timer);
  }
}

export default ViewerPing;

    // Resize video

    const resizeVideo = () => {

      const videoElement = videoRef.current;

      videoElement.style.width = '100%';

      videoElement.style.height = '100%';

    };

    window.addEventListener('resize', resizeVideo);

    resizeVideo();


