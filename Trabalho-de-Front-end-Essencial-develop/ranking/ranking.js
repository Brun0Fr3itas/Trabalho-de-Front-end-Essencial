const teams = [
  { rank: 1, name: "França", conf: "UEFA", pts: 1877, flag: "https://flagcdn.com/w80/fr.png" },
  { rank: 2, name: "Espanha", conf: "UEFA", pts: 1876, flag: "https://flagcdn.com/w80/es.png" },
  { rank: 3, name: "Argentina", conf: "CONMEBOL", pts: 1874, flag: "https://flagcdn.com/w80/ar.png" },
  { rank: 4, name: "Inglaterra", conf: "UEFA", pts: 1825, flag: "https://flagcdn.com/w80/gb-eng.png" },
  { rank: 5, name: "Portugal", conf: "UEFA", pts: 1763, flag: "https://flagcdn.com/w80/pt.png" },
  { rank: 6, name: "Brasil", conf: "CONMEBOL", pts: 1761, flag: "https://flagcdn.com/w80/br.png", brasil: true },
  { rank: 7, name: "Holanda", conf: "UEFA", pts: 1757, flag: "https://flagcdn.com/w80/nl.png" },
  { rank: 8, name: "Marrocos", conf: "CAF", pts: 1755, flag: "https://flagcdn.com/w80/ma.png" },
  { rank: 9, name: "Bélgica", conf: "UEFA", pts: 1734, flag: "https://flagcdn.com/w80/be.png" },
  { rank: 10, name: "Alemanha", conf: "UEFA", pts: 1730, flag: "https://flagcdn.com/w80/de.png" },

  { rank: 11, name: "Croácia", conf: "UEFA", pts: 1717, flag: "https://flagcdn.com/w80/hr.png" },
  { rank: 12, name: "Colômbia", conf: "CONMEBOL", pts: 1693, flag: "https://flagcdn.com/w80/co.png" },
  { rank: 13, name: "Senegal", conf: "CAF", pts: 1688, flag: "https://flagcdn.com/w80/sn.png" },
  { rank: 14, name: "México", conf: "CONCACAF", pts: 1681, flag: "https://flagcdn.com/w80/mx.png" },
  { rank: 15, name: "EUA", conf: "CONCACAF", pts: 1673, flag: "https://flagcdn.com/w80/us.png" },
  { rank: 16, name: "Uruguai", conf: "CONMEBOL", pts: 1673, flag: "https://flagcdn.com/w80/uy.png" },

  { rank: 17, name: "Japão", conf: "AFC", pts: 1660, flag: "https://flagcdn.com/w80/jp.png" },
  { rank: 18, name: "Suíça", conf: "UEFA", pts: 1655, flag: "https://flagcdn.com/w80/ch.png" },
  { rank: 19, name: "Dinamarca", conf: "UEFA", pts: 1648, flag: "https://flagcdn.com/w80/dk.png" },
  { rank: 20, name: "Irã", conf: "AFC", pts: 1640, flag: "https://flagcdn.com/w80/ir.png" },
  { rank: 21, name: "Turquia", conf: "UEFA", pts: 1635, flag: "https://flagcdn.com/w80/tr.png" },
  { rank: 22, name: "Equador", conf: "CONMEBOL", pts: 1628, flag: "https://flagcdn.com/w80/ec.png" },

  { rank: 23, name: "Áustria", conf: "UEFA", pts: 1620, flag: "https://flagcdn.com/w80/at.png" },
  { rank: 24, name: "Coreia do Sul", conf: "AFC", pts: 1615, flag: "https://flagcdn.com/w80/kr.png" },
  { rank: 25, name: "Nigéria", conf: "CAF", pts: 1608, flag: "https://flagcdn.com/w80/ng.png" },
  { rank: 26, name: "Austrália", conf: "AFC", pts: 1600, flag: "https://flagcdn.com/w80/au.png" },
  { rank: 27, name: "Argélia", conf: "CAF", pts: 1595, flag: "https://flagcdn.com/w80/dz.png" },
  { rank: 28, name: "Egito", conf: "CAF", pts: 1588, flag: "https://flagcdn.com/w80/eg.png" },

  { rank: 29, name: "Canadá", conf: "CONCACAF", pts: 1580, flag: "https://flagcdn.com/w80/ca.png" },
  { rank: 30, name: "Noruega", conf: "UEFA", pts: 1575, flag: "https://flagcdn.com/w80/no.png" },
  { rank: 31, name: "Panamá", conf: "CONCACAF", pts: 1560, flag: "https://flagcdn.com/w80/pa.png" },
  { rank: 32, name: "Costa do Marfim", conf: "CAF", pts: 1555, flag: "https://flagcdn.com/w80/ci.png" },
  { rank: 33, name: "Suécia", conf: "UEFA", pts: 1530, flag: "https://flagcdn.com/w80/se.png" },
  { rank: 34, name: "Paraguai", conf: "CONMEBOL", pts: 1520, flag: "https://flagcdn.com/w80/py.png" },

  { rank: 35, name: "República Tcheca", conf: "UEFA", pts: 1515, flag: "https://flagcdn.com/w80/cz.png" },
  { rank: 36, name: "Escócia", conf: "UEFA", pts: 1505, flag: "https://flagcdn.com/w80/gb-sct.png" },
  { rank: 37, name: "Tunísia", conf: "CAF", pts: 1500, flag: "https://flagcdn.com/w80/tn.png" },
  { rank: 38, name: "Camarões", conf: "CAF", pts: 1495, flag: "https://flagcdn.com/w80/cm.png" },
  { rank: 39, name: "RD Congo", conf: "CAF", pts: 1490, flag: "https://flagcdn.com/w80/cd.png" },
  { rank: 40, name: "Uzbequistão", conf: "AFC", pts: 1465, flag: "https://flagcdn.com/w80/uz.png" },

  { rank: 41, name: "Catar", conf: "AFC", pts: 1440, flag: "https://flagcdn.com/w80/qa.png" },
  { rank: 42, name: "Arábia Saudita", conf: "AFC", pts: 1435, flag: "https://flagcdn.com/w80/sa.png" },
  { rank: 43, name: "Iraque", conf: "AFC", pts: 1430, flag: "https://flagcdn.com/w80/iq.png" },
  { rank: 44, name: "África do Sul", conf: "CAF", pts: 1410, flag: "https://flagcdn.com/w80/za.png" },
  { rank: 45, name: "Jordânia", conf: "AFC", pts: 1390, flag: "https://flagcdn.com/w80/jo.png" },
  { rank: 46, name: "Cabo Verde", conf: "CAF", pts: 1350, flag: "https://flagcdn.com/w80/cv.png" },
  { rank: 47, name: "Gana", conf: "CAF", pts: 1320, flag: "https://flagcdn.com/w80/gh.png" },
  { rank: 48, name: "Nova Zelândia", conf: "OFC", pts: 1250, flag: "https://flagcdn.com/w80/nz.png" }
];

const grid = document.getElementById('teams-grid');
const searchInput = document.getElementById('search-input');
const filterBtns = document.querySelectorAll('.filter-btn');
const countEl = document.getElementById('count');

let activeFilter = 'all';

function confLabel(conf) {
  const labels = {
    CONMEBOL: 'América do Sul',
    UEFA: 'Europa',
    CAF: 'África',
    CONCACAF: 'Américas N/C',
    AFC: 'Ásia',
    OFC: 'Oceania'
  };
  return labels[conf] || conf;
}

function buildCards(list) {
  grid.innerHTML = '';

  if (!list.length) {
    grid.innerHTML = '<div class="empty-state"><p>Nenhuma seleção encontrada.</p></div>';
    countEl.textContent = 0;
    return;
  }

  countEl.textContent = list.length;

  list.forEach(function(team, index) {
    var card = document.createElement('div');
    card.className = 'card rank-' + team.rank + (team.brasil ? ' brasil' : '');
    card.style.animationDelay = (index * 0.03) + 's';

    card.innerHTML =
      '<div class="rank-badge">#' + team.rank + '</div>' +
      '<img class="flag-img" src="' + team.flag + '" alt="' + team.name + '">' +
      '<div class="team-name">' + team.name + '</div>' +
      '<div class="continent-label">' + confLabel(team.conf) + '</div>' +
      '<div class="fifa-pts">' + team.pts.toLocaleString('pt-BR') + ' pts</div>';

    grid.appendChild(card);
  });
}

function render() {
  var list = teams.slice();

  if (activeFilter !== 'all') {
    list = list.filter(function(t) { return t.conf === activeFilter; });
  }

  var query = searchInput.value.toLowerCase().trim();
  if (query) {
    list = list.filter(function(t) { return t.name.toLowerCase().includes(query); });
  }

  buildCards(list);
}

filterBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    filterBtns.forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    activeFilter = btn.getAttribute('data-filter');
    render();
  });
});

searchInput.addEventListener('input', render);

render();