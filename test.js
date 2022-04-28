const config = {
  "key": "9042ce90-9b8f-43f2-bf1a-5bb20bf30655",
  logs: {
      level: "debug"
  },
};
const container = document.getElementById('player-test1');
const player = new bitmovin.player.Player(container, config);

const source = {
    "hls": "https://bitmovin-amer-public.s3.amazonaws.com/internal/dani/Wed_Apr_21_17%3A48%3A00_EDT_2021/zd7929-test1.m3u8",
    "subtitleTracks": [{url: "https://bitmovin-amer-public.s3.amazonaws.com/internal/dani/Wed_Apr_21_17%3A48%3A00_EDT_2021/zd7929-positioning-1.vtt", id:"positioning-external-id", label:"positioning-external", lang:"es"}],
  };
player.load(source).then(
  function()
  {
    for (ii of player.subtitles.list()) console.log(ii);
    console.log('[info] player.load() resolved - success');
  },
  function (reason)
  {
    console.log('[!] player.load() resolved - fail');
  }
);