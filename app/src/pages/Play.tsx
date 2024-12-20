import { useEffect, useRef, useState } from 'preact/hooks'
import Button from '../components/Button'

export default function PlayScreen() {
  const [showDialog, setShowDialog] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const video = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const escapeListener = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return

      setShowSettings((state) => {
        if (state) {
          video.current.play()
        } else {
          video.current.pause()
        }

        return !state
      })
    }

    document.addEventListener('keypress', escapeListener)

    return () => document.removeEventListener('keypress', escapeListener)
  }, [])

  return (
    <div class="relative">
      <video
        ref={video}
        class="w-full h-full"
        src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
        autoplay={false}
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
      { showSettings &&
        <section
          class="absolute inset-0 m-auto flex flex-col gap-8 max-w-128 text-2xl text-center justify-center"
        >
          <Button href="/scene/2">CONTINUE</Button>
          <Button href="/scene/2">PILIHAN 1</Button>
          <Button href="/">EXIT</Button>
        </section>
      }
    </div>
  )
}
