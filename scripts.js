  function showSection(section) {
    const dashboard = document.getElementById('dashboardSection');
    const practice = document.getElementById('practiceSection');
    if (section === 'practice') {
      dashboard.style.display = 'none';
      practice.style.display = 'block';
    } else {
      practice.style.display = 'none';
      dashboard.style.display = 'block';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function activateDomain(domain) {
    document.querySelectorAll('.domain-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.domain === domain);
    });
    document.querySelectorAll('.domain-content').forEach(content => {
      content.classList.remove('active');
    });
    document.getElementById('domain-' + domain).classList.add('active');
    showSection('dashboard');
    setTimeout(() => {
      document.getElementById('domain-' + domain).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  }
