const techniqueData = [
  {
    id: "vibrato",
    name: "颤音",
    description: "通过短周期的音高波动增强声音的表现力，常用于拖长音或强调尾句。",
    audio: {
      technique: {
        label: "颤音演唱示例",
        source: "assets/audio/techniques/vibrato_effect.wav",
      },
      clean: {
        label: "未加颤音对照",
        source: "assets/audio/techniques/vibrato_clean.wav",
      },
    },
    visuals: [
      {
        type: "f0",
        title: "颤音 F0 曲线",
        path: "assets/images/f0/vibrato_f0.png",
        alt: "带有颤音的 F0 曲线",
        note: "F0 基频围绕目标音做细小且稳定的周期波动。",
      },
      {
        type: "f0",
        title: "未使用颤音 F0 曲线",
        path: "assets/images/f0/vibrato_clean_f0.png",
        alt: "不带颤音的 F0 曲线",
        note: "未使用颤音时 F0 走势更平直，无周期性波动。",
      },
      {
        type: "spectrum",
        title: "颤音频谱",
        path: "assets/images/spectrum/vibrato_spectrum.png",
        alt: "颤音的频谱分布",
        note: "谐波能量呈周期性抖动，高频部分亦然。",
      },
      {
        type: "spectrum",
        title: "未使用颤音频谱",
        path: "assets/images/spectrum/vibrato_clean_spectrum.png",
        alt: "不带颤音的频谱分布",
        note: "频谱能量稳定，无周期性抖动。",
      },
    ],
  },
  {
    id: "glissando",
    name: "滑音",
    description: "音高滑向目标音的过程中，会先滑向另一个临近的音，使歌声更曲折、更有表现力。",
    audio: {
      technique: {
        label: "滑音演唱示例",
        source: "assets/audio/techniques/glissando_effect.wav",
      },
      clean: {
        label: "未加滑音对照",
        source: "assets/audio/techniques/glissando_clean.wav",
      },
    },
    visuals: [
      {
        type: "f0",
        title: "滑音 F0 曲线",
        path: "assets/images/f0/glissando_f0.png",
        alt: "带滑音的 F0 曲线",
        note: "F0在滑向目标音时，先上滑到一个临近音，再滑到目标音。",
      },
      {
        type: "f0",
        title: "未使用滑音 F0 曲线",
        path: "assets/images/f0/glissando_clean_f0.png",
        alt: "不带滑音的 F0 曲线",
        note: "未使用滑音时 F0 直接跳变到目标音，呈阶梯状变化。",
      },
    ],
  },
  {
    id: "mixed-voice",
    name: "假声",
    description: "假声。",
    audio: {
      technique: {
        label: "假声音色示例",
        source: "assets/audio/techniques/mixed_voice_effect.wav",
      },
      clean: {
        label: "未假声对照",
        source: "assets/audio/techniques/mixed_voice_clean.wav",
      },
    },
    visuals: [
      {
        type: "spectrum",
        title: "假声频谱",
        path: "assets/images/spectrum/mixed_voice_spectrum.png",
        alt: "假声音色频谱",
        note: "假声高频会有一定程度的缺失",
      },
      {
        type: "spectrum",
        title: "未使用假声频谱",
        path: "assets/images/spectrum/mixed_voice_clean_spectrum.png",
        alt: "未假声频谱",
        note: "未使用假声的音频，频谱图的高频显示正常。",
      },
    ],
  },
  {
    id: "throat",
    name: "咽音",
    description: "通过收窄咽腔形成共鸣，声音偏亮且带有金属色彩。2.5kHz到4.5Hz会更亮。",
    audio: {
      technique: {
        label: "咽音演唱示例",
        source: "assets/audio/techniques/throat_effect.wav",
      },
      clean: {
        label: "未加咽音对照",
        source: "assets/audio/techniques/throat_clean.wav",
      },
    },
    visuals: [
      {
        type: "spectrum",
        title: "咽音频谱",
        path: "assets/images/spectrum/throat_spectrum.png",
        alt: "咽音的频谱分布",
        note: "中高频能量显著增强，出现集中峰值体现咽腔共鸣。",
      },
      {
        type: "spectrum",
        title: "未使用咽音频谱",
        path: "assets/images/spectrum/throat_clean_spectrum.png",
        alt: "未加咽音的频谱分布",
        note: "未加咽音时中高频能量较弱，共鸣不明显。",
      },
    ],
  },
  {
    id: "breathy",
    name: "气声",
    description: "降低声带闭合度让气息通过，营造柔和且带气息感的音色。",
    audio: {
      technique: {
        label: "气声演唱示例",
        source: "assets/audio/techniques/breathy_effect.wav",
      },
      clean: {
        label: "未加气声对照",
        source: "assets/audio/techniques/breathy_clean.wav",
      },
    },
    visuals: [
      {
        type: "spectrum",
        title: "气声频谱",
        path: "assets/images/spectrum/breathy_spectrum.png",
        alt: "气声的频谱分布",
        note: "高频噪声成分增加，谐波对比度降低，能量更分散。",
      },
      {
        type: "spectrum",
        title: "未使用气声频谱",
        path: "assets/images/spectrum/breathy_clean_spectrum.png",
        alt: "未加气声的频谱分布",
        note: "未使用气声时高频噪声显著减少，谐波结构更清晰。",
      },
    ],
  },
];

const tsneInfo = {
  caption:
    "彩色点代表不同歌声样本在隐空间中的分布，簇状结构显示出音色和技法的聚合关系。",
};

const demoData = [
  {
    id: "demo1",
    title: "Demo 1",
    gt: {
      label: "Demo 1 原始演唱（GT）",
      source: "assets/audio/demo/gt/0000.wav",
    },
    prompt: {
      label: "Demo 1 提示音频（参考）",
      source: "assets/audio/demo/ref/0000.wav",
    },
    synth: {
      label: "Demo 1 模型输出",
      source: "assets/audio/demo/infer_out/vc_0000_0000_1.0_25_0.7.wav",
    },
  },
  {
    id: "demo2",
    title: "Demo 2",
    gt: {
      label: "Demo 2 原始演唱（GT）",
      source: "assets/audio/demo/gt/0001.wav",
    },
    prompt: {
      label: "Demo 2 提示音频（参考）",
      source: "assets/audio/demo/ref/0001.wav",
    },
    synth: {
      label: "Demo 2 模型输出",
      source: "assets/audio/demo/infer_out/vc_0001_0001_1.0_20_0.7.wav",
    },
  },
  {
    id: "demo3",
    title: "Demo 3",
    gt: {
      label: "Demo 3 原始演唱（GT）",
      source: "assets/audio/demo/gt/0002.wav",
    },
    prompt: {
      label: "Demo 3 提示音频（参考）",
      source: "assets/audio/demo/ref/0002.wav",
    },
    synth: {
      label: "Demo 3 模型输出",
      source: "assets/audio/demo/infer_out/vc_0002_0002_1.0_20_0.7.wav",
    },
  },
  {
    id: "demo4",
    title: "Demo 4",
    gt: {
      label: "Demo 4 原始演唱（GT）",
      source: "assets/audio/demo/gt/0003.wav",
    },
    prompt: {
      label: "Demo 4 提示音频（参考）",
      source: "assets/audio/demo/ref/0003.wav",
    },
    synth: {
      label: "Demo 4 模型输出",
      source: "assets/audio/demo/infer_out/vc_0003_0003_1.0_20_0.7.wav",
    },
  },
  {
    id: "demo5",
    title: "Demo 5",
    gt: {
      label: "Demo 5 原始演唱（GT）",
      source: "assets/audio/demo/gt/0004.wav",
    },
    prompt: {
      label: "Demo 5 提示音频（参考）",
      source: "assets/audio/demo/ref/0004.wav",
    },
    synth: {
      label: "Demo 5 模型输出",
      source: "assets/audio/demo/infer_out/vc_0004_0004_1.0_20_0.7.wav",
    },
  },
];
