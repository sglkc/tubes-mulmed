import { useEffect, useRef, useState } from 'preact/hooks'
import { ChangeEvent } from 'preact/compat'
import Button from '../components/Button'

export default function PlayScreen() {
  const [showDialog, setShowDialog] = useState(false)
  const [isPaused, setPaused] = useState(false)
  const video = useRef<HTMLVideoElement>(null)

  const togglePauseMenu = () => {
    setPaused((state) => {
      if (state) {
        video.current.play()
      } else {
        video.current.pause()
      }

      return !state
    })
  }

  const escapeListener = (e: KeyboardEvent) => {
    if (e.key === 'Escape') togglePauseMenu()
  }

  const onChangeVolume = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(video.current.volume)
    video.current.volume = Number(e.currentTarget.value)
    console.log(video.current.volume)
  }

  useEffect(() => {
    document.addEventListener('keydown', escapeListener)
    return () => document.removeEventListener('keydown', escapeListener)
  }, [])

  return (
    <div class="relative">
      <button
        class="m-4 p-4 absolute right-0 rotate-90 fw-bold text-4xl text-light rounded-full hover:bg-light/10"
        onClick={togglePauseMenu}
        style={ isPaused && { display: 'none' } }
      >
        =
      </button>
      <video
        ref={video}
        class="w-full h-full"
        src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
        autoplay
      />
      { showDialog &&
        <section
          class="absolute inset-0 m-auto flex flex-col gap-8 max-w-128 text-2xl text-center justify-center"
        >
          <Button href="/scene/2">PILIHAN 1</Button>
          <Button href="/scene/2">PILIHAN 1</Button>
          <Button href="/scene/2">PILIHAN 1</Button>
        </section>
      }
      <section
        class="absolute inset-0 bg-black/20 text-2xl text-center"
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
          <Button href="/">EXIT</Button>
        </div>
      </section>
    </div>
  )
}
