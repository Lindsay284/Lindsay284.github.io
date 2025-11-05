document.addEventListener("DOMContentLoaded", () => {
  renderTechniqueSection();
  renderTsneSection();
  renderDemoTable();
});

function renderTechniqueSection() {
  const grid = document.getElementById("techniqueGrid");
  if (!grid || !Array.isArray(techniqueData)) return;

  techniqueData.forEach((technique) => {
    const card = document.createElement("article");
    card.className = "technique-card";
    card.append(createTechniqueHeader(technique));
    card.append(createTechniqueContent(technique));
    grid.append(card);
  });
}

function createTechniqueHeader({ name, description }) {
  const header = document.createElement("header");
  const title = document.createElement("h3");
  title.textContent = name;
  const desc = document.createElement("p");
  desc.textContent = description;
  header.append(title, desc);
  return header;
}

function createTechniqueContent({ audio, visuals = [] }) {
  const content = document.createElement("div");
  content.className = "technique-content";

  if (audio && (audio.technique || audio.clean)) {
    const audioColumns = document.createElement("div");
    audioColumns.className = "audio-columns";

    if (audio.technique) {
      audioColumns.append(createAudioColumn(audio.technique.label, audio.technique.source));
    }

    if (audio.clean) {
      audioColumns.append(createAudioColumn(audio.clean.label, audio.clean.source));
    }

    content.append(audioColumns);
  }

  if (visuals.length) {
    const visualBlocks = document.createElement("div");
    visualBlocks.className = "visual-blocks";
    visuals.forEach((visual) => {
      visualBlocks.append(createVisualCard(visual));
    });
    content.append(visualBlocks);
  }

  return content;
}

function createAudioColumn(label, source) {
  const column = document.createElement("div");
  column.className = "audio-column";

  const heading = document.createElement("h4");
  heading.textContent = label;

  const player = document.createElement("audio");
  player.controls = true;
  player.preload = "metadata";
  player.src = source;

  column.append(heading, player);
  return column;
}

function createVisualCard({ title, path, alt, note }) {
  const container = document.createElement("div");
  container.className = "visual-card";

  if (title) {
    const heading = document.createElement("h5");
    heading.textContent = title;
    container.append(heading);
  }

  const image = document.createElement("img");
  image.loading = "lazy";
  image.src = path;
  image.alt = alt || title || "";
  container.append(image);

  if (note) {
    const description = document.createElement("p");
    description.textContent = note;
    container.append(description);
  }

  return container;
}

function renderTsneSection() {
  const caption = document.getElementById("tsneCaption");
  if (caption && tsneInfo && typeof tsneInfo.caption === "string") {
    caption.textContent = tsneInfo.caption;
  }
}

function renderDemoTable() {
  const tbody = document.getElementById("demoTableBody");
  if (!tbody || !Array.isArray(demoData)) return;

  demoData.forEach((demo) => {
    const row = document.createElement("tr");
    row.append(
      createDemoCell(demo.gt?.label ?? `${demo.id} GT`, demo.gt?.source),
      createDemoCell(demo.prompt?.label ?? `${demo.id} Prompt`, demo.prompt?.source),
      createDemoCell(demo.synth?.label ?? `${demo.id} 合成 Demo`, demo.synth?.source)
    );
    tbody.append(row);
  });
}

function createDemoCell(label, source) {
  const cell = document.createElement("td");
  if (!source) {
    const placeholder = document.createElement("span");
    placeholder.textContent = "暂无音频";
    cell.append(placeholder);
    return cell;
  }

  const player = document.createElement("audio");
  player.className = "demo-audio";
  player.controls = true;
  player.preload = "metadata";
  player.src = source;
  player.setAttribute("aria-label", label);
  player.title = label;
  cell.append(player);
  return cell;
}
