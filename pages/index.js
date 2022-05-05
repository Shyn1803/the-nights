import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Head from 'next/head';

// import Splitting from 'splitting';
import { useDesktop } from 'utils/hooks';
// Splitting();

const mappingSentenceTime = [
  { start: 9, end: 11.2 },
  { start: 11.3, end: 13.5 },
  { start: 13.6, end: 17.5 },
  { start: 18, end: 20.5 },
  { start: 20.6, end: 22.3 },
  { start: 22.4, end: 26.5 },
  { start: 26.6, end: 28.7 },
  { start: 28.8, end: 31.4 },
  { start: 31.7, end: 35.5 },
  { start: 35.6, end: 37.1 },
  { start: 37.2, end: 41 },
  { start: 41.1, end: 44.3 },
  { start: 44.6, end: 48.9 },
  { start: 49, end: 53.9 },
  { start: 54, end: 57.9 },
  { start: 58, end: 61.8 },
  { start: 61.9, end: 64.5 },
  { start: 81.6, end: 83.7 },
  { start: 83.8, end: 86 },
  { start: 86.1, end: 89.7 },
  { start: 89.8, end: 92.9 },
  { start: 93, end: 95.2 },
  { start: 95.3, end: 98.6 },
  { start: 98.9, end: 101.3 },
  { start: 101.4, end: 103.8 },
  { start: 103.9, end: 108 },
  { start: 108.1, end: 109.9 },
  { start: 110, end: 112.8 },
  { start: 112.9, end: 117 },
  { start: 117.1, end: 121 },
  { start: 121.4, end: 125.8 },
  { start: 125.9, end: 130.3 },
  { start: 130.4, end: 134.3 },
  { start: 134.4, end: 136.7 },
  { start: 148.5, end: 151.8 },
  { start: 151.9, end: 155.5 },
]

export default function Home() {
  const [isDesktop] = useDesktop();
  const [isMediaPlaying, setMediaPlaying] = useState(false);
  
  const handleClass = (target, classToRemoveArr, classToAddArr) => {
    if (!target) {
      return;
    }

    if (classToRemoveArr?.length) {
      target.classList.remove(...classToRemoveArr);
    }

    if (classToAddArr?.length) {
      target.classList.add(...classToAddArr);
    }
  }

  if (isDesktop) {
    const audioTrackElm = document.getElementById('audio-track');
    const lyricsEnglish = document.getElementById('lyrics-english');
    const lyricsVietnamese = document.getElementById('lyrics-vietnamese');
    window.lyricsVietnamese = lyricsVietnamese;

    console.log('lyricsVietnamese: ', lyricsVietnamese);

    if (audioTrackElm) {
      audioTrackElm.addEventListener('timeupdate', function () {
        const currentTimeS = audioTrackElm.currentTime;
        mappingSentenceTime.map((item, index) => {
          if (currentTimeS >= item?.start && currentTimeS <= item.end) {
            handleClass(lyricsEnglish.children[index], ['hide'], ['appear', 'fall-down']);
            handleClass(lyricsVietnamese.children[index], ['hide'], ['appear', 'fall-down']);
          } else {
            handleClass(lyricsEnglish.children[index], ['appear', 'fall-down'], ['hide']);
            handleClass(lyricsVietnamese.children[index], ['appear', 'fall-down'], ['hide']);
          }
        });
      });
    }
  }

  useEffect(() => {
    if (isDesktop) {
      const audioTrackElm = document.getElementById('audio-track');
      if (isMediaPlaying) {
        audioTrackElm.play();
      } else {
        audioTrackElm.pause();
      }
    }
  }, [isMediaPlaying]);

  return (
    <>
      <section className={styles.container}>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <h1 className="song-name">
          The Nights
        </h1>
        <span className="author">- Avicii (Cover by Angie N.) -</span>

        <div className="play-svg">
          <svg width="675" height="450" viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="transparent" d="M0 0h900v600H0z" />
            <path d="M718.76 355.709c3.785 69.748-132.577 211.572-300.654 159.078-78.17-24.417-71.549-64.942-130.99-118.352-35.43-31.833-86.336-55.905-100.495-102.176-12.231-39.94-4.73-82.868 16.475-110.791 47.69-62.796 143.966-105.796 238.829-6.856 94.863 98.941 267.053-.788 276.835 179.097z" fill="url(#a)" />
            <path d="M681.38 201.964c-13.264 23.671-42.313 26.924-88.851 22.425-35-3.389-66.917-6.012-101.919-25.096-24.5-13.348-43.893-31.407-58.047-48.947-15.338-19.001-36.747-40.687-26.252-62.232 14.423-29.595 97.829-54.521 178.82-13.76 88.969 44.791 109.224 104.474 96.249 127.61z" fill="url(#b)" />
            <path d="M343.783 491.469c-30.901-43.228-62.546-89.173-103.977-111.803-42.734-23.353-50.615-8.96-53.573 13.922-2.959 22.882 10.226 77.098 68.546 107.946 58.336 30.856 117.916 30.393 89.004-10.065z" fill="url(#c)" />
            <path d="M712.541 247.349c-13.882 3.289-28.564-8.484-28.564-8.484s7.835-17.099 21.721-20.377c13.882-3.289 28.56 8.474 28.56 8.474s-7.835 17.098-21.717 20.387z" fill="url(#d)" />
            <path d="M336.527 102.562c14.614 10.066 36.941 3.03 36.941 3.03s-1.382-23.355-16.006-33.412c-14.615-10.067-36.932-3.04-36.932-3.04s1.382 23.356 15.997 33.422z" fill="url(#e)" />
            <path d="M585.554 160.314c15.844 16.125 45.471 12.725 45.471 12.725s3.921-29.545-11.938-45.661c-15.843-16.125-45.456-12.735-45.456-12.735s-3.921 29.545 11.923 45.671z" fill="url(#f)" />
            <ellipse cx="653.724" cy="379.855" rx="11.774" ry="11.263" transform="rotate(180 653.724 379.855)" fill="rgb(30, 30, 78)" />
            <ellipse cx="534.443" cy="511.422" rx="13.31" ry="13.822" transform="rotate(180 534.443 511.422)" fill="rgb(30, 30, 78)" />
            <ellipse cx="252.366" cy="436.168" rx="15.87" ry="15.358" transform="rotate(180 252.366 436.168)" fill="rgb(30, 30, 78)" />
            <circle r="5.631" transform="matrix(-1 0 0 1 230.865 248.288)" fill="rgb(30, 30, 78)" />
            <circle r="10.751" transform="matrix(-1 0 0 1 676.249 156.139)" fill="rgb(30, 30, 78)" />
            <ellipse rx="10.751" ry="10.239" transform="matrix(-1 0 0 1 640.413 478.146)" fill="#E1E4E5" />
            <ellipse rx="11.263" ry="10.239" transform="matrix(-1 0 0 1 187.351 344.019)" fill="#E1E4E5" />
            <circle r="3.584" transform="matrix(-1 0 0 1 301.512 487.873)" fill="#E1E4E5" />
            <circle r="5.119" transform="matrix(-1 0 0 1 575.398 125.935)" fill="#E1E4E5" />
            <circle r="5.003" transform="scale(1 -1) rotate(-75 -75.2 -315.006)" fill="#E1E4E5" />
            <circle r="6.655" transform="matrix(-1 0 0 1 254.414 192.998)" fill="#E1E4E5" />
            <ellipse rx="5.119" ry="4.095" transform="matrix(-1 0 0 1 661.403 311.256)" fill="#E1E4E5" />
            <circle r="10.411" transform="scale(1 -1) rotate(-75 164.577 -335.532)" fill="#E1E4E5" />
            <path d="M735.053 309.208h.134c.793 11.236 9.149 11.409 9.149 11.409s-9.215.18-9.215 13.164c0-12.984-9.214-13.164-9.214-13.164s8.353-.173 9.146-11.409zm-439.802-177.13h.23c1.366 19.664 15.758 19.967 15.758 19.967s-15.87.315-15.87 23.036c0-22.721-15.87-23.036-15.87-23.036s14.386-.303 15.752-19.967z" fill="#E1E4E5" />
            <path fillRule="evenodd" clipRule="evenodd" d="M611.325 299.985c0 89.174-72.275 161.449-161.449 161.449s-161.449-72.275-161.449-161.449 72.275-161.449 161.449-161.449 161.449 72.275 161.449 161.449z" fill="rgb(30, 30, 78)" stroke="rgb(30, 30, 78)" strokeWidth="26.897" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M458.279 317.292c12.449 12.45 12.449 32.649 0 45.098-12.45 12.45-32.649 12.45-45.098 0-12.45-12.449-12.45-32.648 0-45.098 12.449-12.449 32.63-12.449 45.098 0z" fill="#fff" />
            <path d="M458.279 317.292c12.449 12.45 12.449 32.649 0 45.098-12.45 12.45-32.649 12.45-45.098 0-12.45-12.449-12.45-32.648 0-45.098 12.449-12.449 32.63-12.449 45.098 0" stroke="#fff" strokeWidth="26.897" strokeLinecap="round" strokeLinejoin="round" />
            <path d="m515.45 244.175-47.843-15.948v111.615" stroke="#fff" strokeWidth="26.897" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M394.209 191.32c0 33.408-27.077 60.485-60.485 60.485s-60.485-27.077-60.485-60.485 27.077-60.485 60.485-60.485 60.485 27.077 60.485 60.485z" fill="#fff" stroke="rgb(30, 30, 78)" strokeWidth="13.917" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="a" x1="555.778" y1="773.789" x2="300.704" y2="-377.016" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fff" /><stop offset="1" stopColor="#EEE" />
              </linearGradient>
              <linearGradient id="b" x1="592.027" y1="355.378" x2="473.805" y2="-175.861" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fff" />
                <stop offset="1" stopColor="#EEE" />
              </linearGradient>
              <linearGradient id="c" x1="309.279" y1="633.379" x2="207.899" y2="164.547" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fff" /><stop offset="1" stopColor="#EEE" />
              </linearGradient>
              <linearGradient id="d" x1="660.266" y1="255.526" x2="781.787" y2="198.115" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fff" />
                <stop offset="1" stopColor="#EEE" />
              </linearGradient>
              <linearGradient id="e" x1="393.456" y1="135.591" x2="278.414" y2="14.282" gradientUnits="userSpaceOnUse"><stop stopColor="#fff" />
                <stop offset="1" stopColor="#EEE" />
              </linearGradient>
              <linearGradient id="f" x1="648.768" y1="215.396" x2="534.227" y2="35.842" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fff" />
                <stop offset="1" stopColor="#EEE" />
              </linearGradient>
            </defs>
          </svg>

          {isMediaPlaying
            ? <img className="action-media pause-icon" src="/images/pause.svg" onClick={() => setMediaPlaying(false)} />
            : <img className="action-media play-icon" src="/images/play.svg" onClick={() => setMediaPlaying(true)} />
          }

        </div>

        <div className="lyrics-container">

        <div id="lyrics-english">
          <p data-splitting="chars" className='hide'>Once upon a younger year</p>
          <p data-splitting="chars" className='hide'>When all our shadows disappeared</p>
          <p data-splitting="chars" className='hide'>The animals inside came out to play</p>
          <p data-splitting="chars" className='hide'>Went face to face with all our fears</p>
          <p data-splitting="chars" className='hide'>Learned our lessons through the tears</p>
          <p data-splitting="chars" className='hide'>Made memories we knew would never fade</p>
          <p data-splitting="chars" className='hide'>One day my father, he told me</p>
          <p data-splitting="chars" className='hide'>"Son, don't let it slip away"</p>
          <p data-splitting="chars" className='hide'>He took me in his arms, I heard him say</p>
          <p data-splitting="chars" className='hide'>"When you get older</p>
          <p data-splitting="chars" className='hide'>Your wild heart will live for younger days</p>
          <p data-splitting="chars" className='hide'>Think of me if ever you're afraid"</p>
          <p data-splitting="chars" className='hide'>He said: "One day you'll leave this world behind</p>
          <p data-splitting="chars" className='hide'>So live a life you will remember"</p>
          <p data-splitting="chars" className='hide'>My father told me when I was just a child</p>
          <p data-splitting="chars" className='hide'>"These are the nights that never die"</p>
          <p data-splitting="chars" className='hide'>My father told me</p>
          <p data-splitting="chars" className='hide'>When thunder clouds start pouring down</p>
          <p data-splitting="chars" className='hide'>Light a fire they can't put out</p>
          <p data-splitting="chars" className='hide'>Carve your name into those shining stars</p>
          <p data-splitting="chars" className='hide'>He said: "Go venture far beyond the shores</p>
          <p data-splitting="chars" className='hide'>Don't forsake this life of yours</p>
          <p data-splitting="chars" className='hide'>I'll guide you home, no matter where you are"</p>
          <p data-splitting="chars" className='hide'>One day my father, he told me</p>
          <p data-splitting="chars" className='hide'>"Son, don't let it slip away"</p>
          <p data-splitting="chars" className='hide'>When I was just a kid, I heard him say</p>
          <p data-splitting="chars" className='hide'>"When you get older</p>
          <p data-splitting="chars" className='hide'>Your wild heart will live for younger days</p>
          <p data-splitting="chars" className='hide'>Think of me if ever you're afraid"</p>
          <p data-splitting="chars" className='hide'>He said: "One day you'll leave this world behind</p>
          <p data-splitting="chars" className='hide'>So live a life you will remember"</p>
          <p data-splitting="chars" className='hide'>My father told me when I was just a child</p>
          <p data-splitting="chars" className='hide'>"These are the nights that never die"</p>
          <p data-splitting="chars" className='hide'>My father told me</p>
          <p data-splitting="chars" className='hide'>"These are the nights that never die"</p>
          <p data-splitting="chars" className='hide'>My father told me</p>
          <p data-splitting="chars" className='hide'>My father told me</p>
        </div>

        <div id="lyrics-vietnamese">
        <p data-splitting="chars" className='hide'>Ngày xửa ngày xưa khi thời thơ ấu</p>
          <p data-splitting="chars" className='hide'>Khi màn đêm buông xuống</p>
          <p data-splitting="chars" className='hide'>Những con quái vật xuất hiện để chơi đùa</p>
          <p data-splitting="chars" className='hide'>Khi đối mặt với tất cả nỗi sợ hãi của bản thân</p>
          <p data-splitting="chars" className='hide'>Học được những bài học xương máu từ những giọt nước mắt</p>
          <p data-splitting="chars" className='hide'>Khiến những kí ức chúng ta trải qua không bao giờ bị lu mờ</p>
          <p data-splitting="chars" className='hide'>Một ngày, cha tôi đã nói với tôi rằng</p>
          <p data-splitting="chars" className='hide'>"Con trai, đừng để thời gian trôi qua vô ích"</p>
          <p data-splitting="chars" className='hide'>Ông ôm trọn tôi vào lòng, tôi nghe ông thầm thì</p>
          <p data-splitting="chars" className='hide'>"Khi con già đi</p>
          <p data-splitting="chars" className='hide'>Trái tim nhiệt huyết của con sẽ tiếc nuối những ngày thanh xuân</p>
          <p data-splitting="chars" className='hide'>Hãy nhớ về cha nếu con cảm thấy sợ hãi"</p>
          <p data-splitting="chars" className='hide'>Ông nói:"rồi cũng đến ngày con phải rời xa thế giớ này</p>
          <p data-splitting="chars" className='hide'>Vậy nên hãy sống một cuộc đời mà con sẽ phải nhớ"</p>
          <p data-splitting="chars" className='hide'>Cha tôi đã nói với tôi rằng khi tôi còn là một đứa trẻ</p>
          <p data-splitting="chars" className='hide'>"Bóng đêm kéo dài vô tận"</p>
          <p data-splitting="chars" className='hide'>Cha đã nói với tôi như vậy</p>
          <p data-splitting="chars" className='hide'>Khi những luồng sấm ập xuống</p>
          <p data-splitting="chars" className='hide'>Hãy thắp sáng ngọn lửa không thể nào dập tắt</p>
          <p data-splitting="chars" className='hide'>Khắc tên con lên những vì sao đang tỏa sáng kia</p>
          <p data-splitting="chars" className='hide'>Ông nói:"đi phiêu du xa sau bến bờ này</p>
          <p data-splitting="chars" className='hide'>Đừng rời bỏ cuộc sống của con</p>
          <p data-splitting="chars" className='hide'>Ta sẽ đưa con về nhà, bất kể con ở nơi đâu"</p>
          <p data-splitting="chars" className='hide'>Một ngày, cha tôi đã nói với tôi rằng</p>
          <p data-splitting="chars" className='hide'>"Con trai, đừng để thời gian trôi qua vô ích"</p>
          <p data-splitting="chars" className='hide'>Khi tôi còn là một đứa trẻ, tôi đã nghe ông nói</p>
          <p data-splitting="chars" className='hide'>"Khi con già đi</p>
          <p data-splitting="chars" className='hide'>Trái tim nhiệt huyết của con sẽ tiếc nuối những ngày thanh xuôn</p>
          <p data-splitting="chars" className='hide'>Hãy nhớ về cha nếu con cảm thấy sợ hãi"</p>
          <p data-splitting="chars" className='hide'>Ông nói:"Rồi cũng đến ngày con phải rời xa thế giớ này</p>
          <p data-splitting="chars" className='hide'>Vậy nên hãy sống một cuộc đời mà con sẽ phải nhớ"</p>
          <p data-splitting="chars" className='hide'>Cha tôi đã nói với tôi rằng khi tôi còn là một đứa trẻ</p>
          <p data-splitting="chars" className='hide'>"Bóng đêm kéo dài vô tận"</p>
          <p data-splitting="chars" className='hide'>Cha đã nói với tôi như vậy</p>
          <p data-splitting="chars" className='hide'>"Bóng đêm kéo dài vô tận"</p>
          <p data-splitting="chars" className='hide'>Cha đã nói với tôi như vậy</p>
        </div>
        </div>

        <audio controls id="audio-track" loop>
          <source src="/TheNights.mp3" type="audio/mp3" />
        </audio>

        <script>Splitting();</script>
      </section>
    </>
  )
}
