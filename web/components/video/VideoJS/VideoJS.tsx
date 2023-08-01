import React, { FC } from 'react';

import videojs from 'video.js';

import type VideoJsPlayer from 'video.js/dist/types/player';



import styles from './VideoJS.module.scss';



require('video.js/dist/video-js.css');



export type VideoJSProps = {

  options: any;

  onReady: (player: VideoJsPlayer, vjsInstance: typeof videojs) => void;

};



export const VideoJS: FC<VideoJSProps> = ({ options, onReady }) => {

  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  const playerRef = React.useRef<VideoJsPlayer | null>(null);



  React.useEffect(() => {

    // Make sure Video.js player is only initialized once

    if (!playerRef.current) {

      const videoElement = videoRef.current;



      // eslint-disable-next-line no-multi-assign

      const player: VideoJsPlayer = (playerRef.current = videojs(videoElement, options, () => {

        console.debug('player is ready');

        return onReady && onReady(player, videojs);

      }));



      player.autoplay(options.autoplay);

      player.src(options.sources);

    }



    // Add a cachebuster param to playlist URLs.

    if (

      (videojs.getPlayer(videoRef.current).tech({ IWillNotUseThisInPlugins: true }) as any)?.vhs

    ) {

      (

        videojs.getPlayer(videoRef.current).tech({ IWillNotUseThisInPlugins: true }) as any

      ).vhs.xhr.beforeRequest = o => {

        if (o.uri.match('m3u8')) {

          const cachebuster = Math.random().toString(16).substr(2, 8);

          // eslint-disable-next-line no-param-reassign

          o.uri = `${o.uri}?cachebust=${cachebuster}`;

        }



        return o;

      };

    }

  }, [options, videoRef]);



  React.useEffect(() => {

    const resizeObserver = new ResizeObserver(entries => {

      for (let entry of entries) {

        playerRef.current?.aspectRatio(`${entry.contentRect.width}:${entry.contentRect.height}`);

      }

    });



    if (videoRef.current) {

      resizeObserver.observe(videoRef.current);

    }



    return () => {

      if (videoRef.current) {

        resizeObserver.unobserve(videoRef.current);

      }

    };

  }, []);



  return (

    <div data-vjs-player>

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
