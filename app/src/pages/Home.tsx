import { PropsWithChildren } from 'preact/compat'

function Link(props: PropsWithChildren<{ class?: string, href: string }>) {
  return (
    <a
      {...props}
      class={`bg-dark-800 p-4 b-1 b-light align-center ${props.class}`}
    />
  )
}

export default function HomeScreen() {
	return (
		<div class="p-16 grid gap-8 h-full">
      <header class="max-h-16">
        <h1 class="text-8xl fw-bold">Location</h1>
        <h2 class="text-neutral italic">Can you find him?</h2>
      </header>
			<section class="grid grid-cols-3 gap-8">
        <ul class="grid gap-4 text-3xl">
          <Link href="/">Start</Link>
          <Link class="opacity-50" href="/">Continue</Link>
          <Link href="/">Credits</Link>
        </ul>
        <div></div>
      </section>
      <footer class="mt-auto grid grid-cols-3 justify-between items-end text-sm">
        <p class="text-left">Kelompok 3</p>
        <p class="text-center">&copy;2024</p>
        <p class="text-right">IFB-303 Teknik Multimedia BB</p>
      </footer>
    </div>
  );
}
