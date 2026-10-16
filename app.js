'use strict';

// Treść oferty jest oddzielona od obsługi interfejsu.
const insuranceTopics = [
  {
    id: 'auto',
    name: 'Samochód',
    short: 'OC, autocasco i pomoc w drodze. Sprawdź, czego potrzebujesz za kierownicą.',
    description:
      'Przy rozmowie o samochodzie rozważ obowiązkowe OC oraz dobrowolne AC, NNW i assistance. Każde z nich odpowiada na inne potrzeby.',
    icon: '<path d="m5 16 3-7h16l3 7M4 16h24v10H4zM8 26v3m16-3v3M8 21h3m10 0h3"/>',
    questions: [
      'Jaki zakres AC obejmuje uszkodzenie, kradzież i szkody parkingowe?',
      'Jakie limity holowania i zasady pomocy ma assistance?',
      'Czy umowa przewiduje udział własny lub ograniczenia sposobu naprawy?',
    ],
  },
  {
    id: 'dom',
    name: 'Dom i mieszkanie',
    short: 'Twoje miejsce na ziemi. Mury, wyposażenie i odpowiedzialność w życiu prywatnym.',
    description:
      'Ubezpieczenie nieruchomości może obejmować mury, stałe elementy i ruchomości. Zakres dla właściciela i najemcy może się różnić.',
    icon: '<path d="m3 15 13-11 13 11M7 13v16h18V13M13 29V19h7v10"/>',
    questions: [
      'Czy suma ubezpieczenia odpowiada wartości nieruchomości i wyposażenia?',
      'Czy zakres obejmuje zalanie, przepięcia i kradzież?',
      'Jak działa OC w życiu prywatnym i pomoc fachowca?',
    ],
  },
  {
    id: 'zycie',
    name: 'Życie i zdrowie',
    short: 'Pomyśl o sobie i swoich bliskich. Przygotuj plan na nieprzewidziane sytuacje.',
    description:
      'Przy wyborze ochrony życia i zdrowia ważne są sytuacja rodzinna, zobowiązania i oczekiwane wsparcie finansowe.',
    icon: '<path d="M16 28 5 17C-3 7 9 0 16 10 23 0 35 7 27 17Z"/>',
    questions: [
      'Jakie zdarzenia objęto ochroną i jak je zdefiniowano?',
      'Jakie obowiązują karencje, limity wieku i wyłączenia?',
      'Jaka suma świadczenia odpowiada potrzebom moich bliskich?',
    ],
  },
  {
    id: 'podroz',
    name: 'Podróż',
    short: 'Mały wypad lub wielka wyprawa. Koszty leczenia i pomoc poza domem.',
    description:
      'Zakres turystyczny dobierz do kraju, długości wyjazdu i aktywności. Koszty leczenia oraz transportu mogą wymagać osobnych limitów.',
    icon: '<path d="M12 8V4h8v4M6 9h20v20H6zM11 9v20m10-20v20M3 15h26"/>',
    questions: [
      'Czy zakres obejmuje kraj wyjazdu i planowane sporty?',
      'Jakie są limity leczenia, ratownictwa i transportu?',
      'Czy potrzebne jest rozszerzenie o choroby przewlekłe?',
    ],
  },
  {
    id: 'firma',
    name: 'Firma',
    short: 'Majątek, odpowiedzialność i ciągłość działalności. Ochrona dla Twojego biznesu.',
    description:
      'Potrzeby firmy zależą od branży i skali działalności. Warto osobno przeanalizować mienie, odpowiedzialność i ryzyko przestoju.',
    icon: '<path d="M4 12h24v17H4zM11 12V6h10v6M4 20h24M13 18h6v5h-6z"/>',
    questions: [
      'Czy zakres OC odpowiada faktycznie wykonywanej działalności?',
      'Jakie mienie i ryzyka obejmuje ochrona?',
      'Czy polisa uwzględnia utratę przychodów po szkodzie?',
    ],
  },
  {
    id: 'grupa',
    name: 'Ubezpieczenia grupowe',
    short: 'Możliwości ochrony dla zespołu i rodziny. Poznaj zasady przystąpienia.',
    description:
      'Przy ochronie grupowej sprawdź warunki przystąpienia, wariant świadczeń i zasady kontynuowania umowy.',
    icon: '<circle cx="16" cy="9" r="5"/><path d="M7 29v-6a9 9 0 0 1 18 0v6M3 11a4 4 0 0 1 4-6m18 0a4 4 0 0 1 4 6M2 27v-7m28 0v7"/>',
    questions: [
      'Kto może przystąpić do ubezpieczenia?',
      'Jakie świadczenia, karencje i wyłączenia zawiera wariant?',
      'Jakie są zasady zakończenia i kontynuacji ochrony?',
    ],
  },
];

document.documentElement.classList.add('js');

const topicSelect = document.querySelector('#topic');
const dialog = document.querySelector('#offer-dialog');
let selectedTopic = insuranceTopics[0];

function openTopic(topic) {
  selectedTopic = topic;
  document.querySelector('#dialog-title').textContent = topic.name;
  document.querySelector('#dialog-description').textContent = topic.description;
  document.querySelector('#dialog-questions').replaceChildren(
    ...topic.questions.map((question) => {
      const item = document.createElement('li');
      item.textContent = question;
      return item;
    }),
  );
  dialog.showModal();
}

function renderTopics() {
  const cards = document.querySelector('#offer-cards');

  insuranceTopics.forEach((topic) => {
    topicSelect.add(new Option(topic.name, topic.id));

    const card = document.createElement('article');
    card.className = 'card';
    // Poniższy szablon używa wyłącznie stałych z tego pliku, bez danych użytkownika.
    card.innerHTML = `
      <svg class="card-icon" viewBox="0 0 32 32" fill="none"
        stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"
        aria-hidden="true">${topic.icon}</svg>
      <h3>${topic.name}</h3>
      <p>${topic.short}</p>
      <button type="button" class="card-link" aria-haspopup="dialog"
        aria-label="Poznaj zakres: ${topic.name}">
        Poznaj zakres <span aria-hidden="true">↗</span>
      </button>
    `;
    card.querySelector('button').addEventListener('click', () => openTopic(topic));
    cards.append(card);
  });
}

function createPlan(event) {
  event.preventDefault();
  const topic = insuranceTopics.find((item) => item.id === topicSelect.value);
  const priority = document.querySelector('#priority').value;
  const result = document.querySelector('#plan-result');
  result.replaceChildren();

  const heading = document.createElement('h3');
  heading.id = 'plan-heading';
  heading.textContent = `Twoja lista: ${topic.name.toLowerCase()}`;
  const introduction = document.createElement('p');
  introduction.textContent = `Twój priorytet: ${priority.toLowerCase()}. Zapytaj doradcę:`;
  const questions = document.createElement('ol');
  topic.questions.forEach((question) => {
    const item = document.createElement('li');
    item.textContent = question;
    questions.append(item);
  });

  const note = document.createElement('p');
  note.className = 'fine';
  note.textContent =
    'To lista do rozmowy, a nie wycena ani rekomendacja produktu. Formularz nie wysyła danych.';
  const printButton = document.createElement('button');
  printButton.type = 'button';
  printButton.textContent = 'Drukuj lub zapisz jako PDF';
  printButton.addEventListener('click', () => window.print());
  result.append(heading, introduction, questions, note, printButton);
  result.hidden = false;
  result.focus();
}

function configureContact() {
  const config = window.MULTIAGENT_CONFIG || {};
  const links = document.querySelector('#contact-links');
  const note = document.querySelector('#contact-note');
  const contacts = [];

  // Błędna konfiguracja nie może tworzyć dowolnych adresów URL.
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email || '')) {
    contacts.push({ href: `mailto:${config.email}`, label: config.email });
  }
  if (/^\+?[\d ()-]{7,20}$/.test(config.phone || '')) {
    contacts.push({
      href: `tel:${config.phone.replace(/[^+\d]/g, '')}`,
      label: config.phone,
    });
  }
  if (contacts.length) {
    links.replaceChildren();
    contacts.forEach((contact) => {
      const link = document.createElement('a');
      link.className = 'button light';
      link.href = contact.href;
      link.textContent = contact.label;
      links.append(link);
    });
    note.textContent =
      config.address || 'Skontaktuj się z biurem i porozmawiaj o swoich potrzebach.';
  }
}

document.querySelector('.menu').addEventListener('click', (event) => {
  const open = document.querySelector('#nav').classList.toggle('open');
  event.currentTarget.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('#nav a').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('#nav').classList.remove('open');
    document.querySelector('.menu').setAttribute('aria-expanded', 'false');
    const target = document.querySelector(link.hash);
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });
});

// Escape zwija menu i oddaje fokus przyciskowi, bez pozostawiania go w ukrytej treści.
document.querySelector('#nav').addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.querySelector('#nav').classList.remove('open');
    const menuButton = document.querySelector('.menu');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.focus();
  }
});

dialog.querySelector('.close').addEventListener('click', () => dialog.close());
document.querySelector('#choose-topic').addEventListener('click', () => {
  topicSelect.value = selectedTopic.id;
  dialog.close();
  document.querySelector('#dobor').scrollIntoView({ behavior: 'auto' });
  topicSelect.focus({ preventScroll: true });
});

document.querySelector('#planner-form').addEventListener('submit', createPlan);
document.querySelector('#year').textContent = new Date().getFullYear();
renderTopics();
configureContact();
