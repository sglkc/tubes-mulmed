import Button from "../components/Button";

export default function CreditsScreen() {
  return (
		<div class="relative p-16 flex flex-col gap-4 h-full items-start justify-end animate-mode-backwards animate-fade-in animate-0.5s">
      <img class="absolute inset-0 -z-1 opacity-50" src="/credits.webp" />
      <table>
        <thead>
          <tr>
            <th>NIM</th>
            <th>Nama</th>
            <th>Tugas</th>
          </tr>
        </thead>
        <tbody class="text-right">
          <tr>
            <td>152022088</td>
            <td class="pl-4">M. Praditia Haikal Febriansyah</td>
            <td class="pl-4">Tim Kamera dan Visual</td>
          </tr>
          <tr>
            <td>152022099</td>
            <td>Cikal Gemintang Seya</td>
            <td>Tim Produksi</td>
          </tr>
          <tr>
            <td>152022105</td>
            <td>Andrew Reynaldo</td>
            <td>Tim Pasca-Produksi</td>
          </tr>
          <tr>
            <td>152022113</td>
            <td>Raden Dika Natakusumah</td>
            <td>Tim Produksi</td>
          </tr>
          <tr>
            <td>152022119</td>
            <td>Wika Aditya Pradani</td>
            <td>Tim Produksi, Aktor</td>
          </tr>
          <tr>
            <td>152022129</td>
            <td>Sugiri Satrio Wicaksono</td>
            <td>Tim Produksi, Aktor</td>
          </tr>
          <tr>
            <td>152022135</td>
            <td>M. Fauzan Aryawardhana</td>
            <td>Tim Produksi</td>
          </tr>
          <tr>
            <td>152022164</td>
            <td>Rhestu Dzulkifli</td>
            <td>Aktor</td>
          </tr>
        </tbody>
      </table>
      <Button href="/">Kembali</Button>
    </div>
  )
}
