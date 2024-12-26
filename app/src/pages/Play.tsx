import { useCallback, useEffect, useRef, useState } from 'preact/hooks'
import { ChangeEvent } from 'preact/compat'
import Neutralino from '@neutralinojs/lib'
import Button from '../components/Button'
import { alur, Alur, AlurNames } from '../alur'

export default function PlayScreen() {
  const savedAlurName = localStorage.getItem('saved-alur-name')
  const [showDialog, setShowDialog] = useState(false)
  const [isPaused, setPaused] = useState(false)
  const [currentAlur, setAlur] = useState<Alur>(alur[savedAlurName || 'intro'])

  const setCurrentAlur = (name: AlurNames) => useCallback(() => {
    setAlur(() => alur[name])
    setShowDialog(() => false)
    localStorage.setItem('saved-alur-name', name)
  }, [name])

  const video = useRef<HTMLVideoElement>(null)

  const togglePauseMenu = () => {
    setPaused((state) => {
      const v = video.current

      if (state && v.currentTime !== v.duration) {
        v.play()
      } else {
        v.pause()
      }

      return !state
    })
  }

  const escapeListener = (e: KeyboardEvent) => {
    if (e.key === 'Escape') togglePauseMenu()
  }

  const onChangeVolume = (e: ChangeEvent<HTMLInputElement>) => {
    video.current.volume = Number(e.currentTarget.value)
  }

  const toggleFullscreen = async () => {
    try {
      if (await Neutralino.window.isFullScreen()) {
        await Neutralino.window.exitFullScreen()
      } else {
        await Neutralino.window.setFullScreen()
      }
    } catch (error) {
      console.error(error)
    }
  }

  const onVideoProgress = () => {
    const v = video.current
    if (v.readyState < 3 || (v.duration - v.currentTime) > 5) return
    setShowDialog(true)
  }

  useEffect(() => {
    document.addEventListener('keydown', escapeListener)
    video.current.addEventListener('timeupdate', onVideoProgress)

    return () => {
      document.removeEventListener('keydown', escapeListener)
      video.current.removeEventListener('timeupdate', onVideoProgress)
    }
  }, [])

  return (
    <div class="relative">
      <button
        class="m-4 p-4 fixed right-0 rotate-90 fw-bold text-4xl text-light rounded-full hover:bg-light/10 z-10"
        onClick={togglePauseMenu}
        style={ isPaused && { display: 'none' } }
      >
        =
      </button>
      <video
        ref={video}
        class="w-full h-full"
        src={'/scenes/' + currentAlur.video}
        autoplay
        controls
      />
      { showDialog &&
        <section
          class="absolute inset-0 m-auto flex flex-col gap-8 max-w-128 text-2xl text-center justify-center"
        >
          { 'choices' in currentAlur && currentAlur.choices.map((choice) =>
            <Button onClick={setCurrentAlur(choice.alur)}>{ choice.text }</Button>
          )}
          { 'end' in currentAlur &&
            <>
              <h1>{ currentAlur.end.toUpperCase() }</h1>
              <p>ENDING</p>
              <Button href="/">Kembali ke menu</Button>
            </>
          }
        </section>
      }
      <section
        class="absolute inset-0 bg-black/20 text-2xl text-center z-10"
        style={ !isPaused && { display: 'none' } }
      >
        <div class="m-auto h-full flex flex-col gap-8 place-content-center max-w-128">
          <h1 class="mb-4 fw-bold text-6xl">PAUSED</h1>
          <Button onClick={togglePauseMenu}>CONTINUE</Button>
          <div class="grid gap-4">
            <label for="volume">Volume</label>
            <div class="flex gap-4 text-base">
              <p>0</p>
              <input
                id="volume"
                class="grow"
                type="range"
                min="0"
                max="1"
                step="0.1"
                onChange={onChangeVolume}
              />
              <p>100</p>
            </div>
          </div>
          <Button onClick={toggleFullscreen}>TOGGLE FULLSCREEN</Button>
          <Button href="/">EXIT</Button>
        </div>
      </section>
    </div>
  )
}
