function showSection(section) {
  const dashboard = document.getElementById('dashboardSection');
  const practice = document.getElementById('practiceSection');

  if (dashboard) dashboard.style.display = 'none';
  if (practice) practice.style.display = 'none';

  if (section === 'practice' && practice) {
    practice.style.display = 'block';
  } else if (dashboard) {
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

(function () {
  const WHEEL_DATA = [
    {
      area: "Predare și învățare",
      key: "teaching",
      color: "#10ECD2",
      labelClass: "dark",
      params: [
        {
          code: "1.1",
          short: "STEAM",
          label: "Educație integrată STEAM",
          levels: [
            "Standarde minime: există premise de bază pentru activități integrate și utilizarea unor resurse / echipamente elementare în contexte de învățare.",
            "Majoritatea profesorilor folosesc metode tradiționale; proiectele inovatoare sunt rare, necoordonate, iar informațiile despre ele nu sunt împărtășite între profesori.",
            "Cel puțin 20% dintre profesori au implementat învățarea inovatoare, interdisciplinară bazată pe proiecte; administrația școlii este informată și coordonează schimbul de experiențe.",
            "Cel puțin jumătate dintre profesori au adoptat noua pedagogie și sunt implicați în mod regulat în predare inovatoare, interdisciplinară.",
            "Aproape toți profesorii au adoptat noua pedagogie și sunt implicați regulat într-o predare inovatoare, interdisciplinară, care a devenit o nouă normalitate."
          ]
        },
        {
          code: "1.2",
          short: "Prof. digitali",
          label: "Competența digitală a profesorilor",
          levels: [
            "Standarde minime: școala are imagine de bază asupra nevoilor de dezvoltare digitală și există condiții minime pentru utilizarea instrumentelor digitale.",
            "Administrația școlii nu are o imagine de ansamblu sigură asupra competenței digitale a profesorilor din școală.",
            "Cel puțin 20% dintre profesori au fost instruiți și certificați la nivelul B2 al DigCompEdu.",
            "Cel puțin jumătate dintre profesori au fost instruiți și certificați la nivelul B2 al DigCompEdu.",
            "Majoritatea profesorilor au fost instruiți și certificați la nivelul B2 al DigCompEdu și folosesc zilnic tehnologii digitale în munca lor."
          ]
        },
        {
          code: "1.3",
          short: "Roluri noi",
          label: "Schimbarea rolurilor profesorului și elevilor",
          levels: [
            "Standarde minime: există premise organizatorice și pedagogice pentru colaborare și implicarea elevilor în activități de învățare asistată digital.",
            "Colaborarea dintre profesori este rară și are loc aleatoriu; nu este coordonată sau promovată.",
            "Cel puțin 20% dintre profesori au participat la activități de predare colaborativă.",
            "Cel puțin jumătate dintre profesori sunt implicați regulat în activități colaborative, iar elevii contribuie frecvent la pregătirea și implementarea predării inovatoare.",
            "Majoritatea profesorilor sunt implicați regulat în activități colaborative cu colegii și elevii lor; această colaborare este coordonată și promovată sistematic."
          ]
        },
        {
          code: "1.4",
          short: "Evaluare",
          label: "Evaluare centrată pe elev",
          levels: [
            "Standarde minime: există instrumente și condiții de bază pentru evaluare digitală și feedback elementar.",
            "Noile metode de evaluare centrate pe cursant sunt folosite rar și aleatoriu, nefiind promovate sau coordonate de administrația școlii.",
            "Cel puțin 20% dintre profesori au folosit metode noi, centrate pe cursant; acestea sunt uneori promovate sau coordonate.",
            "Mai mult de jumătate dintre profesori folosesc în mod regulat metode de evaluare noi, centrate pe cursant; acestea sunt promovate și coordonate sistematic.",
            "Majoritatea profesorilor folosesc în mod regulat metode de evaluare noi, centrate pe cursant; ele au devenit dominante și larg acceptate în toată școala."
          ]
        },
        {
          code: "1.5",
          short: "Structuri noi",
          label: "Schimbări structurale în curriculum, programare și spații de învățare",
          levels: [
            "Standarde minime: există bazele logistice și organizatorice pentru formate mai flexibile și utilizarea unor spații / echipamente adecvate.",
            "Școala are curriculum, programare și spații de învățare destul de tradiționale; schimbările nu sunt promovate sau monitorizate.",
            "Cel puțin 20% dintre profesori au încercat formate de studiu mai flexibile; acestea sunt promovate de administrația școlii.",
            "Jumătate dintre profesori folosesc regulat formate de studiu mai flexibile; experiențele sunt promovate și monitorizate.",
            "Școala a implementat sistematic mai multe schimbări structurale în curriculum, programare și utilizarea netradițională a spațiilor de învățare."
          ]
        }
      ]
    },
    {
      area: "Managementul schimbării",
      key: "change",
      color: "#4C1C57",
      labelClass: "light",
      params: [
        {
          code: "2.1",
          short: "Planificare",
          label: "Planificare strategică participativă",
          levels: [
            "Standarde minime: există un plan de dezvoltare digitală, roluri desemnate și o minimă capacitate de coordonare instituțională.",
            "Directorul a pregătit planul doar pentru conformitate; planul nu influențează resursele sau operaționalul, iar actorii școlii nu îl cunosc.",
            "Școala are un plan sau o strategie elaborată de administrație împreună cu unii profesori; cel puțin 20% dintre profesori sunt la curent și contribuie.",
            "Școala are un plan strategic atent alcătuit și un plan de acțiune detaliat, elaborat cu contribuții din partea profesorilor, elevilor și părinților.",
            "Școala a implementat sistemic un cadru de planificare strategic bine cunoscut, participativ și bazat pe analiză riguroasă și decizii bazate pe date."
          ]
        },
        {
          code: "2.2",
          short: "Date pentru decizie",
          label: "Luarea deciziilor bazate pe date",
          levels: [
            "Standarde minime: școala colectează date esențiale și are condiții minime pentru utilizarea lor în prioritizare și management.",
            "Școala nu utilizează date calitative sau cantitative pentru decizii strategice și operaționale; fiecare decizie se ia separat, de la caz la caz.",
            "Cel puțin 20% dintre profesori au fost implicați în colectarea sau utilizarea datelor pentru decizii strategice și operaționale.",
            "Cel puțin jumătate dintre profesori sunt implicați regulat în colectarea sau utilizarea datelor; administrația dezvoltă și revizuiește critic procesele de sprijin.",
            "Majoritatea profesorilor sunt implicați regulat în colectarea sau utilizarea datelor; școala dezvoltă sistemic procese de luare a deciziilor bazate pe date."
          ]
        },
        {
          code: "2.3",
          short: "Învățare org.",
          label: "Organizație de învățare",
          levels: [
            "Standarde minime: există spații / contexte de bază pentru schimb de experiență și documentarea unor practici instituționale.",
            "Școala nu colectează și nu împărtășește sistematic cele mai bune practici; partajarea are loc accidental.",
            "Profesorii mai inovatori organizează ocazional ateliere sau prezentări din proprie inițiativă; unele resurse apar pe site sau bloguri.",
            "Conducerea organizează regulat schimburi de experiență; evenimentele sunt documentate și reflectate în medii digitale.",
            "Școala a devenit o organizație de învățare, cu dezvoltare continuă, cercetare bazată pe dovezi și management strategic al schimbării."
          ]
        },
        {
          code: "2.4",
          short: "Monitorizare",
          label: "Monitorizare și analiză",
          levels: [
            "Standarde minime: există valori de bază, instrumente minime de colectare a datelor și un cadru elementar de monitorizare.",
            "Școala colectează date doar atât de rar cât cere statul; ele sunt analizate doar pentru raportare formală și nu generează decizii sau schimbări.",
            "Pe baza obiectivelor din planul de dezvoltare, se organizează cel puțin anual sondaje în rândul profesorilor, elevilor și părinților; analiza există.",
            "Pe baza metricilor din planul școlii, datele sunt colectate regulat și integrate cu alte surse; rezultatele analizei și probele sunt adăugate la autoevaluare.",
            "Conducerea folosește seturile de date pentru a planifica și anticipa dezvoltarea școlii, combinând metode calitative și cantitative și validând rezultatele cu experți."
          ]
        },
        {
          code: "2.5",
          short: "Sprijin",
          label: "Sprijin, leadership și motivație",
          levels: [
            "Standarde minime: există roluri, responsabilități și măsuri elementare de sprijin pentru inițiativele digitale din școală.",
            "Conducerea nu acordă o atenție deosebită inițiativelor de inovare digitală ale profesorilor; nu este o prioritate.",
            "Conducerea încurajează profesorii să introducă inovația și sprijină pionierii cu laude sau recunoaștere publică.",
            "Conducerea a introdus măsuri inițiale de motivare și sprijin: recompense, formare, conferințe, echipamente, sprijin pentru proiecte.",
            "Conducerea organizează cooperarea între diferite părți pentru a disemina ideile inovatoare și pentru a asigura adoptarea lor largă în rândul profesorilor."
          ]
        }
      ]
    },
    {
      area: "Infrastructură și servicii",
      key: "infra",
      color: "#245262",
      labelClass: "light",
      params: [
        {
          code: "3.1",
          short: "Rețea + securitate",
          label: "Tehnologii de rețea și securitate IT",
          levels: [
            "Standarde minime: conectivitate fiabilă la internet și condiții esențiale de securitate IT.",
            "Școala are infrastructură de rețea limitată, conectivitate instabilă și practici de securitate IT slab dezvoltate.",
            "Școala are o rețea funcțională de bază și măsuri inițiale de securitate; utilizarea este posibilă pentru activitățile curente.",
            "Școala dezvoltă și îmbunătățește în mod regulat rețeaua și măsurile de securitate; există reguli și responsabilități mai clare.",
            "Școala testează și dezvoltă în mod constant cele mai noi soluții de rețea și managementul riscului de securitate IT permite prevenirea incidentelor."
          ]
        },
        {
          code: "3.2",
          short: "Dispozitive",
          label: "Dispozitive digitale",
          levels: [
            "Standarde minime: disponibilitatea dispozitivelor de bază pentru profesori și acces minim funcțional pentru activități educaționale.",
            "Școala are un laborator de calculatoare și prezentare individuală; elevii au voie să folosească dispozitive personale doar cu permisiune specială.",
            "Școala a achiziționat un set de dispozitive inteligente moderne pentru clasă; există reguli pentru împrumut și BYOD; echipamentele de prezentare există în aproape toate clasele.",
            "Utilizarea dispozitivelor digitale, atât ale școlii, cât și personale, a devenit cotidiană și reglementată; există cerere și cozi pentru ele.",
            "Școala se asigură că dispozitivele digitale ale elevilor și profesorilor interacționează cu diverse echipamente suplimentare: senzori, imprimante 3D, roboți etc."
          ]
        },
        {
          code: "3.3",
          short: "Management IT",
          label: "Management IT",
          levels: [
            "Standarde minime: există roluri desemnate pentru coordonarea digitală și o secțiune IT / digitală în planificarea școlii.",
            "Școala nu are manager IT, capacitățile de management IT sunt limitate și nu există plan de dezvoltare IT.",
            "Școala are un manager IT responsabil de planificarea și dezvoltarea zonei IT; planul de dezvoltare include o secțiune IT.",
            "Școala își implementează strategia IT în mod intenționat; conducerea are privire de ansamblu constantă asupra infrastructurii și nevoilor de dezvoltare.",
            "Școala are management al riscului IT, monitorizare și analiză bine dezvoltate; elevii și alți actori relevanți sunt implicați ori de câte ori este posibil."
          ]
        },
        {
          code: "3.4",
          short: "Suport utilizatori",
          label: "Suport pentru utilizatori",
          levels: [
            "Standarde minime: există un nivel minim de suport IT pentru profesori și utilizatorii cunosc modalitatea de acces la el.",
            "Școala nu are practic suport IT pentru utilizatori sau suport tehnologic educațional; elevii și profesorii încearcă să se ajute reciproc informal.",
            "Școala oferă profesorilor un nivel minim de suport pentru utilizatorii IT, iar profesorii sunt conștienți de acest lucru.",
            "Școala are suport IT bine organizat, oferit de conducere sau de administrația locală.",
            "Suportul IT și tehnologic educațional este bine integrat, predictibil și suficient de bun pentru a susține activitățile zilnice și inovarea."
          ]
        },
        {
          code: "3.5",
          short: "Platforme",
          label: "Platforme digitale, interoperabilitate și servicii",
          levels: [
            "Standarde minime: existența unor platforme digitale de bază, software licențiat și servicii esențiale utilizabile la nivelul școlii.",
            "Școala folosește puține platforme, fragmentat, fără integrare coerentă și fără reguli clare de utilizare.",
            "Școala utilizează câteva platforme comune pentru administrare și învățare, dar integrarea între ele este limitată.",
            "Platformele sunt folosite mai sistematic, iar școala urmărește coerența între servicii, acces și utilizări educaționale.",
            "Școala are un ecosistem digital coerent, cu platforme și servicii integrate, utilizabile și orientate spre susținerea pedagogiei și a managementului."
          ]
        }
      ]
    }
  ];

  const svg = document.getElementById("maturityWheel");
  const segmentsGroup = document.getElementById("wheelSegments");
  const linesGroup = document.getElementById("gridLines");
  const labelsGroup = document.getElementById("paramLabels");
  const tooltip = document.getElementById("wheelTooltip");
  const descriptorTitle = document.getElementById("descriptorTitle");
  const descriptorMeta = document.getElementById("descriptorMeta");
  const descriptorBody = document.getElementById("descriptorBody");

  if (!svg || !segmentsGroup || !linesGroup || !labelsGroup) return;

  const outerRadius = 240;
  const ringStep = 48;
  const totalParams = 15;
  const sliceAngle = 360 / totalParams;
  const startAngle = -90;

  function polarToCartesian(r, angleDeg) {
    const angleRad = (angleDeg - 90) * Math.PI / 180.0;
    return {
      x: r * Math.cos(angleRad),
      y: r * Math.sin(angleRad)
    };
  }

  function arcPath(rInner, rOuter, startDeg, endDeg) {
    const p1 = polarToCartesian(rOuter, endDeg);
    const p2 = polarToCartesian(rOuter, startDeg);
    const p3 = polarToCartesian(rInner, startDeg);
    const p4 = polarToCartesian(rInner, endDeg);
    const largeArc = endDeg - startDeg <= 180 ? 0 : 1;

    return [
      "M", p1.x, p1.y,
      "A", rOuter, rOuter, 0, largeArc, 0, p2.x, p2.y,
      "L", p3.x, p3.y,
      "A", rInner, rInner, 0, largeArc, 1, p4.x, p4.y,
      "Z"
    ].join(" ");
  }

  function linePath(r, angleDeg) {
    const p = polarToCartesian(r, angleDeg);
    return { x: p.x, y: p.y };
  }

  function showDescriptor(param, levelIndex, area) {
    descriptorTitle.textContent = param.label;
    descriptorMeta.textContent = `${area} · ${param.code} · Nivel ${levelIndex + 1}`;
    descriptorBody.textContent = param.levels[levelIndex];
  }

  function showTooltip(evt, param, levelIndex, area) {
    tooltip.hidden = false;
    tooltip.innerHTML = `<strong>${param.code} · ${param.short} · Nivel ${levelIndex + 1}</strong>${param.levels[levelIndex]}`;
    tooltip.style.left = `${evt.clientX + 14}px`;
    tooltip.style.top = `${evt.clientY + 14}px`;
    showDescriptor(param, levelIndex, area);
  }

  function moveTooltip(evt) {
    if (tooltip.hidden) return;
    tooltip.style.left = `${evt.clientX + 14}px`;
    tooltip.style.top = `${evt.clientY + 14}px`;
  }

  function hideTooltip() {
    tooltip.hidden = true;
  }

  const flatParams = [];
  WHEEL_DATA.forEach(group => {
    group.params.forEach(param => {
      flatParams.push({
        ...param,
        area: group.area,
        color: group.color,
        labelClass: group.labelClass
      });
    });
  });

  for (let i = 0; i < totalParams; i++) {
    const angle = startAngle + i * sliceAngle;
    const p = linePath(outerRadius, angle);
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", "0");
    line.setAttribute("y1", "0");
    line.setAttribute("x2", p.x);
    line.setAttribute("y2", p.y);
    linesGroup.appendChild(line);
  }

  flatParams.forEach((param, paramIndex) => {
    const segStart = startAngle + paramIndex * sliceAngle;
    const segEnd = segStart + sliceAngle;

    for (let levelIndex = 0; levelIndex < 5; levelIndex++) {
      const rInner = levelIndex * ringStep;
      const rOuter = (levelIndex + 1) * ringStep;

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", arcPath(rInner, rOuter, segStart, segEnd));
      path.setAttribute("fill", param.color);
      path.setAttribute("fill-opacity", `${0.30 + levelIndex * 0.12}`);
      path.dataset.param = param.code;
      path.dataset.level = String(levelIndex + 1);

      path.addEventListener("mouseenter", (evt) => showTooltip(evt, param, levelIndex, param.area));
      path.addEventListener("mousemove", moveTooltip);
      path.addEventListener("mouseleave", hideTooltip);
      path.addEventListener("click", () => showDescriptor(param, levelIndex, param.area));

      segmentsGroup.appendChild(path);
    }

    const midAngle = segStart + sliceAngle / 2;
    const labelRadius = outerRadius + 18;
    const labelPos = polarToCartesian(labelRadius, midAngle);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", labelPos.x);
    text.setAttribute("y", labelPos.y);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("transform", `rotate(${midAngle + 90} ${labelPos.x} ${labelPos.y})`);
    text.textContent = param.short;

    if (param.labelClass === "dark") {
      text.classList.add("dark-label");
    }

    labelsGroup.appendChild(text);
  });

  showDescriptor(flatParams[0], 0, flatParams[0].area);
})();
