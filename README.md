* {
  box-sizing: border-box;
}

:root {
  --bg: #090d17;
  --panel: rgba(18, 26, 43, 0.82);
  --panel-strong: rgba(17, 24, 36, 0.96);
  --line: rgba(160, 182, 226, 0.16);
  --muted: #a6b6d6;
  --text: #edf3ff;
  --white: #ffffff;
  --primary: #7c5cff;
  --accent: #17d8b7;
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: "Inter", sans-serif;
  background: var(--bg);
  color: var(--text);
}

body {
  background: radial-gradient(circle at top, rgba(124, 92, 255, 0.18), transparent 32%), var(--bg);
}

button, input, select {
  font: inherit;
}

.page-shell {
  max-width: 1240px;
  margin: 0 auto;
  padding: 24px 18px 80px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 18px 20px;
  border: 1px solid var(--line);
  border-radius: 22px;
  background: rgba(12, 17, 29, 0.82);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 12px;
  z-index: 30;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-logo {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  object-fit: cover;
}

.brand-kicker {
  margin: 0 0 2px;
  color: var(--muted);
  font-size: 0.68rem;
  letter-spacing: 0.18em;
}

.brand-wrap h1 {
  margin: 0;
  font-size: clamp(1.2rem, 2vw, 2rem);
}

.search-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  max-width: 420px;
  padding: 0 14px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.03);
}

.search-icon {
  color: var(--muted);
  font-size: 1.3rem;
}

.search-wrap input {
  width: 100%;
  background: transparent;
  border: 0;
  outline: none;
  color: var(--white);
  padding: 13px 0;
}

.hero {
  margin-top: 22px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 24px;
}

.hero-copy,
.hero-showcase,
.controls,
.results-bar,
.game-card {
  border: 1px solid var(--line);
  background: var(--panel);
  box-shadow: 0 20px 45px rgba(4, 7, 18, 0.52);
}

.hero-copy {
  border-radius: 28px;
  padding: clamp(20px, 3vw, 34px);
  position: relative;
  overflow: hidden;
}

.hero-copy::before {
  content: "";
  position: absolute;
  left: -10%;
  top: -30%;
  width: 260px;
  height: 260px;
  background: radial-gradient(circle, rgba(124, 92, 255, 0.35), transparent 62%);
}

.badge {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 7px 12px;
  background: rgba(124, 92, 255, 0.12);
  border: 1px solid rgba(124, 92, 255, 0.45);
  color: #d8d0ff;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-copy h2 {
  margin: 18px 0 14px;
  max-width: 500px;
  font-size: clamp(2rem, 4vw, 4rem);
  line-height: 1.02;
}

.hero-copy p {
  margin: 0;
  max-width: 600px;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.6;
}

.stats-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 24px;
}

.stat-card {
  min-width: 120px;
  padding: 18px 16px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
}

.stat-card strong {
  display: block;
  font-size: 1.8rem;
  margin-bottom: 4px;
}

.stat-card span {
  color: var(--muted);
  font-size: 0.8rem;
}

.hero-showcase {
  border-radius: 28px;
  padding: 18px;
  display: flex;
}

.featured-card {
  flex: 1;
  border-radius: 24px;
  padding: 22px;
  background: linear-gradient(180deg, rgba(9,13,22,0.3), rgba(9,13,22,0.7)), linear-gradient(135deg, #7c5cff, #1387ff 46%, #17d8b7 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.featured-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 20%, rgba(5,9,18,0.72) 100%);
}

.featured-meta,
.featured-actions {
  position: relative;
  z-index: 1;
}

.featured-tag {
  display: inline-flex;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.2);
  font-size: 0.72rem;
  font-weight: 700;
}

.featured-meta h3 {
  margin: 14px 0 10px;
  font-size: clamp(1.7rem, 3vw, 2.8rem);
}

.featured-meta p {
  margin: 0;
  color: rgba(236,243,255,0.82);
  line-height: 1.6;
}

.featured-actions {
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.primary-btn,
.secondary-btn,
.play-btn,
.filter-btn {
  cursor: pointer;
  transition: transform 0.2s ease;
}

.primary-btn,
.play-btn {
  border: 0;
  border-radius: 12px;
  padding: 11px 16px;
  background: var(--accent);
  color: #071611;
  font-weight: 800;
}

.secondary-btn {
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 11px 16px;
  background: rgba(255,255,255,0.08);
  color: var(--white);
}

.controls {
  margin-top: 18px;
  padding: 14px 18px;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.genre-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.filter-btn {
  padding: 8px 14px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(255,255,255,0.03);
  color: var(--white);
  font-weight: 600;
}

.filter-btn.active {
  background: linear-gradient(135deg, #7c5cff, #4269ff);
  border-color: transparent;
}

.sort-box {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--muted);
}

.sort-box select {
  background: rgba(255,255,255,0.03);
  color: var(--white);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 10px 12px;
}

.results-bar {
  margin-top: 18px;
  border-radius: 18px;
  padding: 14px 18px;
}

.results-bar p {
  margin: 0;
  color: var(--muted);
}

.game-grid {
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 18px;
}

.game-card {
  border-radius: 22px;
  overflow: hidden;
  min-height: 300px;
}

.game-art {
  min-height: 150px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 18px 18px 0;
  position: relative;
}

.game-art::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(9,13,22,0.1), rgba(9,13,22,0.6));
}

.game-icon,
.game-badge {
  position: relative;
  z-index: 1;
}

.game-icon {
  font-size: 3rem;
  filter: drop-shadow(0 8px 16px rgba(0,0,0,0.18));
}

.game-badge {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(11,15,24,0.38);
  border: 1px solid rgba(255,255,255,0.12);
  font-size: 0.7rem;
  font-weight: 700;
}

.game-body {
  padding: 18px;
}

.game-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.game-header h3 {
  margin: 0;
  font-size: 1.2rem;
}

.game-rating {
  color: #ffb100;
  font-weight: 700;
}

.game-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 10px 0;
}

.game-meta span {
  display: inline-block;
  padding: 5px 8px;
  border-radius: 999px;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.72rem;
}

.game-description {
  margin: 0 0 18px;
  color: var(--muted);
  line-height: 1.6;
  min-height: 72px;
}

.game-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.play-btn {
  flex: 1;
  border-radius: 12px;
}

.players-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.04);
  color: var(--muted);
  font-size: 0.72rem;
}

.empty-state {
  display: grid;
  place-items: center;
  text-align: center;
  min-height: 220px;
  grid-column: 1 / -1;
}

.empty-state h3 {
  margin: 0 0 10px;
}

.empty-state p {
  margin: 0;
  color: var(--muted);
}

.game-modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
}

.game-modal.hidden {
  display: none;
}

.modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(5,8,14,0.72);
  backdrop-filter: blur(4px);
}

.modal-panel {
  position: relative;
  z-index: 1;
  width: min(760px, calc(100vw - 24px));
  background: var(--panel-strong);
  border: 1px solid var(--line);
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 20px 45px rgba(4,7,18,0.52);
}

.modal-close {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.06);
  color: var(--white);
  font-size: 1.6rem;
  cursor: pointer;
  z-index: 3;
}

.modal-art {
  min-height: 180px;
  display: flex;
  align-items: flex-end;
  padding: 18px;
  font-size: 4rem;
  background: linear-gradient(135deg, #7c5cff, #1387ff 50%, #17d8b7 100%);
}

.modal-game-icon {
  display: inline-block;
  filter: drop-shadow(0 8px 16px rgba(0,0,0,0.18));
}

.modal-content {
  padding: 22px;
}

.modal-content h3 {
  margin: 14px 0 10px;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
}

.modal-content p {
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
}

.modal-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
}

.modal-meta span {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.75rem;
}

.embed-status {
  margin-top: 18px;
  color: #dfeaff;
  min-height: 20px;
  font-size: 0.9rem;
}

.modal-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

@media (max-width: 860px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-direction: column;
    align-items: stretch;
  }

  .search-wrap {
    max-width: none;
  }
}

@media (max-width: 560px) {
  .page-shell {
    padding-left: 12px;
    padding-right: 12px;
  }

  .brand-wrap {
    justify-content: center;
  }

  .controls {
    flex-direction: column;
    align-items: stretch;
  }

  .sort-box {
    width: 100%;
    justify-content: space-between;
  }

  .sort-box select {
    flex: 1;
  }
}

button:hover {
  transform: translateY(-1px);
}
