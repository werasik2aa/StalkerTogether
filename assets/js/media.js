// demos.js - все видео с YouTube каналов о STALKER Together
const videos = [
  // Оригинальные 8
  { id: 'BB3g1J882fk', title: 'Call of Pripyat Together', desc: 'Закрытый бета-тест ЗП Together 1.0' },
  { id: 'M6gxuyGz51Y', title: 'Shadow of Chernobyl Together', desc: 'CBT ТЧ Together 1.0' },
  { id: 'eak3wD_nUsE', title: 'Фотограф в кооперативе ч.1', desc: 'Мод Фотограф на движке ТЧ' },
  { id: 'Q16hoHGr1aU', title: 'Фотограф в кооперативе ч.2', desc: 'Продолжение прохождения' },
  { id: 'SOfj1-HRoY8', title: 'Anomaly Together 2.0 #2', desc: 'Онлайн-кооператив в Anomaly' },
  { id: 'BMRDcvagyA8', title: 'Anomaly Together 2.0 #1', desc: 'Геймплей и синхронизация' },
  { id: 'rPcvaSWScY8', title: 'Как открыть порт', desc: 'Настройка фаервола для Anomaly Together' },
  { id: 'p8XyokBTBoA', title: 'Как установить мод', desc: 'Установка Anomaly Together 2.0' },
  
  // Новые из списка
  { id: 'jzUMvs_ivD8', title: 'Свалкер Абобали co-op (Отмена)', desc: 'Стрим' },
  { id: 'DA-GbzM0KRM', title: 'Anomaly по сети', desc: 'Капитан Мухтар' },
  { id: '_ixbE_6bhoE', title: 'Тень Чернобыля Together путь на...', desc: 'KAYFJ' },
  { id: 'TOQEKkepB88', title: 'Anomaly Together + моды', desc: 'Heimer West' },
  { id: 'JKeggQaiUWw', title: 'Brain Scorcher collab', desc: 'aTrickToSmile' },
  { id: 'z77SgfSWdiQ', title: 'Stalker Together collab', desc: 'aTrickToSmile' },
  { id: 'A2HG6JyK5HU', title: 'Anomaly Together ft. chaddchago', desc: 'EL TACH' },
  { id: 'GO4WxjqNN38', title: 'КТО ВЫДЕРЖИТ БОЛЬШЕ ВОЛН МУТАНТОВ', desc: 'FIRROFF' },
  { id: 'I_389j74VJ8', title: 'ПРЯТКИ на кордоне', desc: 'FIRROFF' },
  { id: 'KIapjNBmKNw', title: 'Anomaly с одной жизнью день третий', desc: 'Skiff BeaR' },
  { id: 'dyNMdixkr0Y', title: 'Anomaly день четвертый', desc: 'Skiff BeaR' },
  { id: 'ITmVm1eVdgE', title: 'Anomaly с одной жизнью день второй', desc: 'Skiff BeaR' },
  { id: '937xf9Z9eO0', title: 'Anomaly Together работает', desc: 'Skiff BeaR (shorts)' },
  { id: 'HBLy_qj0Vp8', title: 'Откуда они прибежали?', desc: 'Skiff BeaR (shorts)' },
  { id: 'gM1EEecJWfw', title: 'Засада наемников', desc: 'Skiff BeaR (shorts)' },
  { id: 'W_16_NzrEgE', title: 'План провален', desc: 'Skiff BeaR (shorts)' },
  { id: 'uIHv6d4ATSY', title: 'Проснулись и в бой', desc: 'Skiff BeaR (shorts)' },
  { id: 'JkKeIBKbF5s', title: 'ЭТО ЛУЧШИЙ МОД? КООПЕРАТИВ В СТАЛКЕР', desc: 'Tipograf' },
  { id: 'yrMrMZAhws0', title: 'G.A.M.M.A. Together Player 1', desc: 'Higglesworth' },
  { id: 'KEcpZeM5GKw', title: 'G.A.M.M.A. Together Player 2', desc: 'Balls Of Pure Diamond' },
  { id: 'P71PVm-lK-o', title: 'Rookie vs. The Zone', desc: 'Higglesworth' },
  { id: '6Mv1FjPyRMc', title: 'G.A.M.M.A 0.9.3.1 Multiplayer', desc: 'Balls Of Pure Diamond' },
  { id: 'QI4bouMphRM', title: 'G.A.M.M.A Multiplayer #2', desc: 'Balls Of Pure Diamond' },
  { id: 'g8nkFOJ3pGc', title: 'ESPECIAL 2000 SUBS ANOMALY COOP', desc: 'El Papitrol' },
  { id: 'YU14tD1XhUw', title: 'СБЭУ Штурм', desc: 'Wadimm19' },
  { id: 'F0ljlY2czW0', title: 'Anomaly по СЕТИ #1', desc: 'Miwfka' },
  { id: 'gNoRaFhfUiM', title: 'Anomaly по СЕТИ #2', desc: 'Miwfka' },
  { id: 'z4S3k3pnZvc', title: 'Anomaly по СЕТИ #3', desc: 'Miwfka' },
  { id: 'NYDIyjCF_A8', title: 'PROBANDO ANOMALY TOGETHER 2.3', desc: 'El Papitrol' },
  { id: 'aXbg_PT4nxI', title: 'STALKER ANOMALY TOGETHER', desc: 'Little Raccoon' },
  { id: '1ILAEDweLQk', title: 'Zerker Boys (Melee-only GAMMA)', desc: 'Mazurcka' },
  { id: 'GCfPL_ecwNc', title: 'Первый раз в Anomaly co-op', desc: 'Rafe' },
  { id: 'T_f1BpYYIXE', title: 'Anomaly Together | Добрались до севера', desc: 'Геолог' },
  { id: '1SRlUd1Od14', title: 'Anomaly Together | Путь на север #1', desc: 'Геолог' },
  { id: 'uuVhejyTTBs', title: 'Anomaly Together українською', desc: 'Vadymka_mem' },
  { id: 'JqVAWfwmBug', title: 'HERE AGAIN? (GAMMA TOGETHER)', desc: 'Judicator' },
  { id: 'CR6liHgFtOM', title: 'STALKER ANOMALY TOGETHER #1', desc: 'Baiano' },
  { id: 'iwU7XvrNAYo', title: 'АНОМАЛИИ КООП БИТВА ЗА КОРДОН', desc: 'Ровтаз' },
  { id: 'LcLViNSNYVU', title: 'GAMMA Coop нарезка #14', desc: 'UGEgc' },
  { id: 'iROA1DcMu_M', title: 'GAMMA Coop нарезка #8', desc: 'UGEgc' },
  { id: 'q1jhfzFc0_o', title: 'STALKER ANOMALY TOGETHER #2', desc: 'Baiano' },
  { id: 'E-636q7_UuM', title: 'ANOMALY TOGETHER (YO soy el ANORMAL)', desc: 'Yope' },
  { id: '5f2ktBpd9M8', title: 'Война группировок в Anomaly Together', desc: 'СИСКА ПИВА' },
  { id: 'SpcHClDKcz0', title: 'P.S.I.H.O.Z. 4 | Anomaly Together', desc: 'Дядя Богдан' },
  
  // Twitch VOD (как видео, ссылки на twitch)
  { id: '', title: 'G.A.M.M.A Together | ЗБТ Anomaly Together (Патч 6)', desc: 'Twitch VOD - смотреть на Twitch', twitch: 'https://www.twitch.tv/videos/2638661143' },
  { id: '', title: 'МАТЬ отправила за ХЛЕБОМ в S.T.A.L.K.E.R.', desc: 'Twitch VOD - poigralitygames', twitch: 'https://www.twitch.tv/videos/2575439614' },
  { id: '', title: 'Dodgee09 Stream', desc: 'Twitch VOD', twitch: 'https://www.twitch.tv/dodgee09/video/2558711666' }
];

function escapeHtml(text) {
  return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

function renderVideos(filter = '') {
  const query = filter.trim().toLowerCase();
  let filtered = query ? videos.filter(v => v.title.toLowerCase().includes(query) || v.desc.toLowerCase().includes(query)) : videos;
  
  const grid = document.getElementById('video-grid');
  const counter = document.getElementById('video-counter');
  
  if (!grid) return;
  
  if (filtered.length === 0) {
    grid.innerHTML = '<div class="section" style="grid-column: 1/-1; text-align: center; padding: 40px;">😢 Ничего не найдено</div>';
    if (counter) counter.textContent = '0 видео';
    return;
  }
  
  grid.innerHTML = filtered.map(v => {
    if (v.twitch) {
      return `
        <div class="video-card">
          <div class="video-info" style="text-align: center; padding: 30px;">
            <div class="video-title">📺 ${escapeHtml(v.title)}</div>
            <div class="video-desc" style="margin-bottom: 16px;">${escapeHtml(v.desc)}</div>
            <a href="${v.twitch}" class="contact-link" target="_blank" style="display: inline-block;">Смотреть на Twitch →</a>
          </div>
        </div>
      `;
    }
    return `
      <div class="video-card">
        <iframe src="https://www.youtube.com/embed/${v.id}" allowfullscreen loading="lazy"></iframe>
        <div class="video-info">
          <div class="video-title">${escapeHtml(v.title)}</div>
          <div class="video-desc">${escapeHtml(v.desc)}</div>
        </div>
      </div>
    `;
  }).join('');
  
  if (counter) counter.textContent = query ? `${filtered.length} из ${videos.length}` : `${videos.length} видео`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderVideos();
  const search = document.getElementById('video-search');
  if (search) search.addEventListener('input', e => renderVideos(e.target.value));
});