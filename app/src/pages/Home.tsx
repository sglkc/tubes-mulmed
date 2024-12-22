import { useRef } from 'preact/hooks'
import { useLocation } from 'preact-iso'
import Neutralino from '@neutralinojs/lib'
import Button from '../components/Button'

export default function HomeScreen() {
  const location = useLocation()
  const overlay = useRef<HTMLDivElement>(null)

  const startGame = () => {
    if (overlay.current.getAnimations().length) return

    overlay.current.classList.remove('hidden')
    overlay.current
      .animate(
        [ { opacity: 0 }, { opacity: 1 } ],
        { duration: 3000, fill: 'forwards' }
      )
      .addEventListener('finish', () => location.route('/play', true))
  }

  const quitGame = () => {
    Neutralino.app.exit()
  }

  return (
    <div class="relative p-16 grid gap-8 h-full animate-mode-backwards animate-fade-in animate-0.5s">
      <div ref={overlay} class="z-10 fixed inset-0 bg-black hidden" />
      <video
        class="absolute inset-0 bg-black -z-1"
        src="/home-slow.mp4"
        volume="0"
        autoplay
        loop
        muted
      />
      <header class="max-h-16">
        <h1 class="text-8xl fw-bold">Location</h1>
        <h2 class="text-neutral italic">Can you find him?</h2>
      </header>
      <section class="grid grid-cols-3 gap-8">
        <ul class="grid gap-4 text-3xl">
          <Button onClick={startGame}>Start</Button>
          <Button class="opacity-50">Continue</Button>
          <Button href="/credits">Credits</Button>
          <Button onClick={quitGame}>Quit</Button>
        </ul>
      </section>
      <footer class="mt-auto grid grid-cols-3 justify-between items-end text-sm">
        <p class="text-left">Kelompok 3</p>
        <p class="text-center">&copy;2024</p>
        <p class="text-right">IFB-303 Teknik Multimedia BB</p>
      </footer>
    </div>
  );
}
