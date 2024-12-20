import Button from '../components/Button'

export default function HomeScreen() {
  return (
    <div class="p-16 grid gap-8 h-full">
      <header class="max-h-16">
        <h1 class="text-8xl fw-bold">Location</h1>
        <h2 class="text-neutral italic">Can you find him?</h2>
      </header>
      <section class="grid grid-cols-3 gap-8">
        <ul class="grid gap-4 text-3xl">
          <Button href="/play">Start</Button>
          <Button class="opacity-50" href="/">Continue</Button>
          <Button href="/credits">Credits</Button>
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
