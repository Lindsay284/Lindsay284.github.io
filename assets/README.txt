音频与图像资源命名约定：

1. 歌声技法展示（assets/audio/techniques, assets/images/f0, assets/images/spectrum）
   - 颤音：`vibrato_clean.wav`, `vibrato_effect.wav`, `vibrato_f0.png`, `vibrato_clean_f0.png`, `vibrato_spectrum.png`, `vibrato_clean_spectrum.png`
   - 滑音：`glissando_clean.wav`, `glissando_effect.wav`, `glissando_f0.png`, `glissando_clean_f0.png`
   - 混声：`mixed_voice_clean.wav`, `mixed_voice_effect.wav`, `mixed_voice_spectrum.png`, `mixed_voice_clean_spectrum.png`
   - 咽音：`throat_clean.wav`, `throat_effect.wav`, `throat_spectrum.png`, `throat_clean_spectrum.png`
   - 气声：`breathy_clean.wav`, `breathy_effect.wav`, `breathy_spectrum.png`, `breathy_clean_spectrum.png`

   *目前滑音暂未提供频谱包络图；如后续补充可命名为 `glissando_spectrum.png`。*

2. 隐空间 t-SNE（assets/images/tsne）
   - 主图：`latent_tsne.png`
   - 若有多版本，可按 `latent_tsne_v2.png`、`latent_tsne_zoom.png` 等命名，并在 data.js 中新增配置。

3. 音频 Demo（assets/audio/demo）
   - 命名格式：`demo{编号}_{类别}.mp3`，类别包含 `gt`、`prompt`、`synth`
   - 例如：`demo1_gt.mp3`, `demo1_prompt.mp3`, `demo1_synth.mp3`

将实际文件放入对应目录后即可在页面中自动加载。若需调整命名，只需修改 `js/data.js` 中的路径配置。
