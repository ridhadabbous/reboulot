let mapInstance = null;
let markerInstance = null;
let circleInstance = null;
let capturedLocation = null;

const DRAFT_KEY = 'reboulot_reg_draft';

function saveDraft() {
  const form = document.querySelector('.register-form');
  if (!form) return;
  const fd = new FormData(form);
  const data = {};
  fd.forEach((v, k) => { data[k] = v; });
  try { localStorage.setItem(DRAFT_KEY, JSON.stringify(data)); } catch (e) {}
}

function restoreDraft() {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    Object.entries(data).forEach(([key, val]) => {
      const el = document.getElementById(key) || document.querySelector(`[name="${key}"]`);
      if (el && el.type !== 'checkbox' && el.type !== 'hidden') {
        el.value = val;
      }
    });
  } catch (e) {}
}

function clearDraft() {
  try { localStorage.removeItem(DRAFT_KEY); } catch (e) {}
}

const COUNTRIES = {
  tn: { code: '+216', cities: ['Tunis', 'Ariana', 'Ben Arous', 'Manouba', 'Nabeul', 'Zaghouan', 'Bizerte', 'Beja', 'Jendouba', 'Kef', 'Siliana', 'Kairouan', 'Kasserine', 'Sidi Bouzid', 'Sousse', 'Monastir', 'Mahdia', 'Sfax', 'Gafsa', 'Tozeur', 'Kebili', 'Gabes', 'Medenine', 'Tataouine'], center: [36.8065, 10.1815] },
  dz: { code: '+213', cities: ['Algiers', 'Oran', 'Constantine', 'Annaba', 'Blida', 'Setif', 'Tlemcen', 'Bejaia', 'Batna', 'Skikda', 'Biskra', 'Tizi Ouzou', 'Djelfa', 'Sidi Bel Abbes', 'Bouira', 'Tebessa', 'Tiaret', 'Souk Ahras', 'Medea', 'Mostaganem', 'Ouargla', 'M\'Sila', 'Guelma', 'Laghouat', 'Boumerdes', 'Khenchela', 'El Oued', 'Ain Temouchent'], center: [36.7538, 3.0588] },
  ly: { code: '+218', cities: ['Tripoli', 'Benghazi', 'Misrata', 'Zawiya', 'Al Khums', 'Derna', 'Tobruk', 'Sabha', 'Bayda', 'Sirte', 'Gharyan', 'Zliten', 'Murzuq', 'Ghat', 'Nalut', 'Ajdabiya', 'Ubari', 'Brak', 'Shahhat', 'Al Marj', 'Kufra', 'Al Qatrun'], center: [32.8872, 13.1913] },
  fr: { code: '+33', cities: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier', 'Bordeaux', 'Lille', 'Rennes', 'Grenoble', 'Rouen', 'Toulon', 'Aix-en-Provence', 'Le Havre', 'Reims', 'Saint-Étienne', 'Dijon', 'Angers', 'Nîmes', 'Clermont-Ferrand', 'Le Mans', 'Brest', 'Nancy', 'Metz', 'Orléans', 'Avignon'], center: [48.8566, 2.3522] },
  de: { code: '+49', cities: ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Leipzig', 'Dortmund', 'Essen', 'Bremen', 'Dresden', 'Hanover', 'Nuremberg', 'Duisburg', 'Bochum', 'Wuppertal', 'Bielefeld', 'Bonn', 'Münster', 'Mannheim', 'Karlsruhe', 'Augsburg', 'Wiesbaden', 'Mönchengladbach', 'Gelsenkirchen', 'Aachen', 'Braunschweig', 'Kiel', 'Chemnitz'], center: [52.5200, 13.4050] },
  it: { code: '+39', cities: ['Rome', 'Milan', 'Naples', 'Turin', 'Palermo', 'Genoa', 'Bologna', 'Florence', 'Catania', 'Bari', 'Venice', 'Verona', 'Messina', 'Padua', 'Trieste', 'Brescia', 'Parma', 'Taranto', 'Modena', 'Reggio Calabria', 'Perugia', 'Livorno', 'Ravenna', 'Cagliari', 'Foggia', 'Rimini', 'Salerno', 'Ferrara', 'Sassari', 'Syracuse'], center: [41.9028, 12.4964] },
  es: { code: '+34', cities: ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Zaragoza', 'Malaga', 'Murcia', 'Palma', 'Las Palmas', 'Bilbao', 'Alicante', 'Cordoba', 'Valladolid', 'Vigo', 'Gijon', 'Granada', 'Elche', 'Oviedo', 'Santander', 'Pamplona', 'San Sebastian', 'Salamanca', 'Huelva', 'Badajoz', 'La Coruña', 'Tarragona', 'Leon', 'Cadiz', 'Jaen', 'Almeria'], center: [40.4168, -3.7038] },
  pl: { code: '+48', cities: ['Warsaw', 'Krakow', 'Lodz', 'Wroclaw', 'Poznan', 'Gdansk', 'Szczecin', 'Bydgoszcz', 'Lublin', 'Katowice', 'Bialystok', 'Gdynia', 'Czestochowa', 'Radom', 'Torun', 'Kielce', 'Rzeszow', 'Sosnowiec', 'Gliwice', 'Zabrze', 'Olsztyn', 'Bielsko-Biala', 'Rybnik', 'Ruda Slaska', 'Tychy', 'Gorzow Wielkopolski', 'Dabrowa Gornicza', 'Plock', 'Elblag', 'Opole'], center: [52.2297, 21.0122] },
  nl: { code: '+31', cities: ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Eindhoven', 'Groningen', 'Tilburg', 'Almere', 'Breda', 'Nijmegen', 'Apeldoorn', 'Haarlem', 'Arnhem', 'Enschede', 'Amersfoort', 'Zaanstad', 'Den Bosch', 'Zwolle', 'Leiden', 'Maastricht', 'Dordrecht', 'Leeuwarden', 'Ede', 'Alphen aan den Rijn', 'Emmen', 'Delft', 'Venlo', 'Deventer', 'Hilversum', 'Heerlen'], center: [52.3676, 4.9041] },
  be: { code: '+32', cities: ['Brussels', 'Antwerp', 'Ghent', 'Charleroi', 'Liège', 'Bruges', 'Namur', 'Leuven', 'Mons', 'Mechelen', 'Aalst', 'Hasselt', 'Kortrijk', 'Ostend', 'Tournai', 'Sint-Niklaas', 'Genk', 'Roeselare', 'Verviers', 'Mouscron', 'La Louvière', 'Turnhout', 'Seraing', 'Lokeren', 'Wavre', 'Vilvoorde', 'Châtelet', 'Ieper', 'Tienen', 'Binche'], center: [50.8503, 4.3517] },
  se: { code: '+46', cities: ['Stockholm', 'Gothenburg', 'Malmö', 'Uppsala', 'Linköping', 'Västerås', 'Örebro', 'Helsingborg', 'Norrköping', 'Jönköping', 'Umeå', 'Lund', 'Borås', 'Sundsvall', 'Gävle', 'Eskilstuna', 'Södertälje', 'Karlstad', 'Täby', 'Växjö', 'Halmstad', 'Luleå', 'Trollhättan', 'Kalmar', 'Kristianstad', 'Falun', 'Skövde', 'Karlskrona', 'Visby', 'Motala'], center: [59.3293, 18.0686] },
  at: { code: '+43', cities: ['Vienna', 'Graz', 'Linz', 'Salzburg', 'Innsbruck', 'Klagenfurt', 'Villach', 'Wels', 'Sankt Pölten', 'Dornbirn', 'Wiener Neustadt', 'Steyr', 'Feldkirch', 'Bregenz', 'Leonding', 'Klosterneuburg', 'Baden', 'Wolfsberg', 'Leoben', 'Krems', 'Traun', 'Amstetten', 'Lustenau', 'Kapfenberg', 'Mödling', 'Hallein', 'Kufstein', 'Traiskirchen', 'Braunau', 'Schwechat'], center: [48.2082, 16.3738] },
  pt: { code: '+351', cities: ['Lisbon', 'Porto', 'Braga', 'Coimbra', 'Funchal', 'Amadora', 'Setúbal', 'Aveiro', 'Viseu', 'Portimão', 'Faro', 'Guimarães', 'Leiria', 'Évora', 'Ponta Delgada', 'Viana do Castelo', 'Cascais', 'Oeiras', 'Matosinhos', 'Gondomar', 'Odivelas', 'Vila Nova de Gaia', 'Almada', 'Barreiro', 'Sintra', 'Loures', 'Queluz', 'Póvoa de Varzim', 'Torres Vedras', 'Maia'], center: [38.7223, -9.1393] }
};

/**
 * Initializes a Leaflet Map defaulting to Paris, France.
 * @param {boolean} requireRadius - Whether to show a working radius circle.
 */
function initMap(requireRadius = false) {
  const mapEl = document.getElementById('map');
  if (!mapEl || typeof L === 'undefined') return;

  const ccEl = document.getElementById('country_code');
  const selected = ccEl ? ccEl.value : '+33';
  const country = Object.values(COUNTRIES).find(c => c.code === selected) || COUNTRIES.fr;
  const defaultLocation = country.center;

  mapInstance = L.map('map', {
    center: defaultLocation,
    zoom: 12,
    zoomControl: true,
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(mapInstance);

  // Force render after container is visible
  setTimeout(() => mapInstance.invalidateSize(), 300);

  mapInstance.on('click', function(e) {
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;
    capturedLocation = { lat: lat.toFixed(6), lng: lng.toFixed(6) };

    if (markerInstance) {
      markerInstance.setLatLng(e.latlng);
    } else {
      markerInstance = L.marker(e.latlng).addTo(mapInstance);
    }

    if (requireRadius) {
      if (circleInstance) {
        circleInstance.setLatLng(e.latlng);
      } else {
        circleInstance = L.circle(e.latlng, {
          color: '#FF5252',
          fillColor: '#FF5252',
          fillOpacity: 0.15,
          radius: 5000
        }).addTo(mapInstance);
      }
      capturedLocation.radius_km = 5;
    }
  });
}

/**
 * Handles form submission and sends JSON payload to the registration backend
 */
async function handleRegistration(event, userType) {
  event.preventDefault();

  const form = event.target;
  const submitBtn = form.querySelector('.submit-btn');
  const messageEl = document.getElementById('form-message');
  const dict = typeof translations !== 'undefined' ? translations[currentLang] : null;

  submitBtn.disabled = true;
  const submittingText = (dict && dict['form_submitting']) || 'Submitting...';
  submitBtn.innerHTML = `<span class="spinner"></span> ${submittingText}`;
  messageEl.className = 'form-message';
  messageEl.style.display = 'none';

  const formData = new FormData(form);
  const dataObj = {};
  formData.forEach((value, key) => {
    dataObj[key] = value;
  });

  if (dataObj.city) {
    dataObj.working_city = dataObj.city;
    delete dataObj.city;
  }

  dataObj.type = userType;

  if (capturedLocation) {
    dataObj.latitude = parseFloat(capturedLocation.lat);
    dataObj.longitude = parseFloat(capturedLocation.lng);
  } else if (document.getElementById('map')) {
    const mapPrompt = (dict && dict['form_map_prompt']) || 'Please select a location on the map.';
    messageEl.textContent = mapPrompt;
    messageEl.className = 'form-message error';
    submitBtn.disabled = false;
    const submitText = (dict && dict['form_submit']) || 'Submit Registration';
    submitBtn.innerHTML = submitText;
    return;
  }

  try {
    const res = await fetch('https://registration-backend.dsridha.workers.dev/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(dataObj)
    });

    let result;
    try {
      result = await res.json();
    } catch (e) {
      result = { success: false, message: 'Invalid response from server' };
    }

    if (res.ok && result.success) {
      const successTitle = (dict && dict['modal_success_title']) || 'Success!';
      const successDesc = (dict && dict['modal_success_desc']) || 'Registration successful! We will review your account information and reach back to you soon.';
      const btnText = (dict && dict['modal_btn']) || 'Close';

      messageEl.textContent = successDesc;
      messageEl.className = 'form-message success';
      messageEl.style.display = 'block';

      const modalHtml = `
        <div id="custom-modal-overlay" class="modal-overlay">
          <div class="modal-content">
            <div class="modal-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <h3 class="modal-title">${successTitle}</h3>
            <p class="modal-desc">${successDesc}</p>
            <button class="modal-btn" onclick="document.getElementById('custom-modal-overlay').remove()">${btnText}</button>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', modalHtml);
      setTimeout(() => {
        const overlay = document.getElementById('custom-modal-overlay');
        if (overlay) {
          overlay.style.opacity = '1';
          const content = overlay.querySelector('.modal-content');
          if (content) content.style.transform = 'scale(1)';
        }
      }, 10);

      clearDraft();
      form.reset();
      if (mapInstance && markerInstance) mapInstance.removeLayer(markerInstance);
      if (mapInstance && circleInstance) mapInstance.removeLayer(circleInstance);
      capturedLocation = null;
    } else {
      throw new Error(result.error || result.message || 'Submission failed');
    }
  } catch (err) {
    console.error('Registration Error:', err);
    const errMsg = (dict && dict['form_error']) || 'Something went wrong. Please try again later.';
    messageEl.textContent = errMsg;
    messageEl.className = 'form-message error';
    messageEl.style.display = 'block';
  } finally {
    submitBtn.disabled = false;
    const submitText = (dict && dict['form_submit']) || 'Submit Registration';
    submitBtn.innerHTML = submitText;
  }
}

const COUNTRY_FLAGS = { tn: '\u{1F1F9}\u{1F1F3}', dz: '\u{1F1E9}\u{1F1FF}', ly: '\u{1F1F1}\u{1F1FE}', fr: '\u{1F1EB}\u{1F1F7}', de: '\u{1F1E9}\u{1F1EA}', it: '\u{1F1EE}\u{1F1F9}', es: '\u{1F1EA}\u{1F1F8}', pl: '\u{1F1F5}\u{1F1F1}', nl: '\u{1F1F3}\u{1F1F1}', be: '\u{1F1E7}\u{1F1EA}', se: '\u{1F1F8}\u{1F1EA}', at: '\u{1F1E6}\u{1F1F9}', pt: '\u{1F1F5}\u{1F1F9}' };

function populateCountryCode() {
  const sel = document.getElementById('country_code');
  if (!sel) return;
  sel.innerHTML = '';
  Object.entries(COUNTRIES).forEach(([key, c]) => {
    const opt = document.createElement('option');
    opt.value = c.code;
    opt.textContent = `${COUNTRY_FLAGS[key]} ${c.code}`;
    if (c.code === '+33') opt.selected = true;
    sel.appendChild(opt);
  });
}

function populateCities() {
  const ccSel = document.getElementById('country_code');
  const citySel = document.getElementById('city');
  if (!ccSel || !citySel) return;
  const dict = typeof translations !== 'undefined' ? translations[currentLang] : null;
  const placeholder = (dict && dict['form_city_sel']) || 'Select your city...';
  const country = Object.values(COUNTRIES).find(c => c.code === ccSel.value) || COUNTRIES.fr;
  citySel.innerHTML = `<option value="" disabled selected>${placeholder}</option>`;
  country.cities.forEach(name => {
    const opt = document.createElement('option');
    opt.value = name;
    opt.textContent = name;
    citySel.appendChild(opt);
  });
}

function updateMapCenter() {
  if (!mapInstance) return;
  const ccSel = document.getElementById('country_code');
  if (!ccSel) return;
  const country = Object.values(COUNTRIES).find(c => c.code === ccSel.value) || COUNTRIES.fr;
  mapInstance.setView(country.center, 12);
  if (markerInstance) {
    mapInstance.removeLayer(markerInstance);
    markerInstance = null;
  }
  if (circleInstance) {
    mapInstance.removeLayer(circleInstance);
    circleInstance = null;
  }
  capturedLocation = null;
}

document.addEventListener('DOMContentLoaded', () => {
  populateCountryCode();
  populateCities();

  const ccSel = document.getElementById('country_code');
  if (ccSel) {
    ccSel.addEventListener('change', () => {
      populateCities();
      updateMapCenter();
    });
  }

  restoreDraft();

  const form = document.querySelector('.register-form');
  if (form) {
    form.addEventListener('change', saveDraft);
  }

  if (window.innerWidth <= 900) {
    const formSide = document.querySelector('.premium-form-side');
    if (formSide) {
      setTimeout(() => {
        const yOffset = -90;
        const scrollY = window.scrollY !== undefined ? window.scrollY : window.pageYOffset;
        const y = formSide.getBoundingClientRect().top + scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 300);
    }
  }
});

