
    const target = new Date('2026-06-11T21:00:00-03:00');

    function pad(n) { return String(n).padStart(2, '0'); }

    function tick() {
      const diff = target - new Date();
      if (diff <= 0) { return; }

      document.getElementById('days').textContent    = Math.floor(diff / 86400000);
      document.getElementById('hours').textContent   = pad(Math.floor((diff % 86400000) / 3600000));
      document.getElementById('minutes').textContent = pad(Math.floor((diff % 3600000) / 60000));
      document.getElementById('seconds').textContent = pad(Math.floor((diff % 60000) / 1000));
    }

    tick();
    setInterval(tick, 1000);