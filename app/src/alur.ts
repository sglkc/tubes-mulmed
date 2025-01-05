export type AlurNames = [
  'intro',
  'irigasi', 'irigasi-lari', 'irigasi-telusuri',
  'perum',
  'pojokan', 'pojokan-telusuri',
  'bad-ending'
][number]

export type Alur = {
  video: string,
  choices: {
    alur: AlurNames
    text: string
  }[]
} | {
  video: string
  end: 'good' | 'bad'
}

export const alur: Record<AlurNames, Alur> = {
  'bad-ending': {
    video: 'ending/bad-ending.mp4',
    end: 'bad'
  },
  'intro': {
    video: 'intro.mp4',
    choices: [
      { alur: 'irigasi', text: 'Irigasi' },
      { alur: 'perum', text: 'Perumahan' },
      { alur: 'pojokan', text: 'Area Pojokan' },
    ]
  },
  'irigasi': {
    video: 'irigasi.mp4',
    choices: [
      { alur: 'irigasi-telusuri', text: 'Telusuri' },
      { alur: 'irigasi-lari', text: 'Lari!' },
    ]
  },
  'irigasi-telusuri': {
    video: 'irigasi/telusuri.mp4',
    choices: [
      { alur: 'pojokan-telusuri', text: 'Telusuri' },
      { alur: 'bad-ending', text: 'Biarkan' },
    ]
  },
  'irigasi-lari': {
    video: 'irigasi/lari.mp4',
    end: 'bad'
  },
  'perum': {
    video: 'perum.mp4',
    choices: [
      { alur: 'irigasi', text: 'Irigasi' },
      { alur: 'pojokan', text: 'Area Pojokan' },
    ]
  },
  'pojokan': {
    video: 'pojokan.mp4',
    choices: [
      { alur: 'pojokan-telusuri', text: 'Telusuri' },
      { alur: 'bad-ending', text: 'Biarkan' },
    ]
  },
  'pojokan-telusuri': {
    video: 'pojokan/telusuri.mp4',
    end: 'good'
  },
}
