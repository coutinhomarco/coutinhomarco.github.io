const body = document.body;
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-link");
const themeToggle = document.querySelector(".theme-toggle");
const languageToggle = document.querySelector(".language-toggle");
const themeIcon = document.querySelector(".theme-icon");
const sections = document.querySelectorAll("main section[id]");
const contactForm = document.querySelector("#form-contato");
const toast = document.querySelector("#toast");
const currentYear = document.querySelector("#ano-atual");
let toastTimer;

// Centraliza todos os textos traduzíveis para alternar o idioma sem duplicar HTML.
const translations = {
  pt: {
    pageTitle: "Portfólio Pessoal | Currículo Online",
    metaDescription: "Portfólio pessoal desenvolvido com HTML, CSS e JavaScript puro.",
    navAria: "Navegação principal",
    brandAria: "Ir para o início",
    brandText: "Marco Coutinho",
    menuOpen: "Abrir menu",
    menuClose: "Fechar menu",
    preferencesAria: "Preferências",
    linkedinAria: "Abrir LinkedIn de Marco Soares Coutinho",
    languageToggle: "EN",
    languageToggleAria: "Switch to English",
    themeDark: "Escuro",
    themeLight: "Claro",
    themeDarkAria: "Alternar para tema escuro",
    themeLightAria: "Alternar para tema claro",
    navAbout: "Sobre mim",
    navEducation: "Formação",
    navExperience: "Experiência",
    navPortfolio: "Portfólio",
    navContact: "Contato",
    heroEyebrow: "Currículo online",
    heroTitle: "Olá, eu sou <span>Marco Soares Coutinho</span>.",
    heroDescription:
      "Comecei minha trajetória cursando Física, onde tive contato com programação e descobri um interesse real por criar soluções com código. Essa experiência me levou a migrar para a área de tecnologia, hoje com foco em backend, agentes de IA, sistemas com LLMs e produtos cloud-native.",
    heroActionsAria: "Ações principais",
    heroProjects: "Ver projetos",
    heroContact: "Entrar em contato",
    profileAria: "Resumo pessoal",
    profilePhotoAlt: "Foto de Marco Soares Coutinho",
    profileName: "Marco Soares Coutinho",
    profileSummary:
      "Senior Software Engineer | Backend, AI Agents & LLM Systems | Applied AI Engineer.",
    profileInterests:
      "<strong>Interesses:</strong> IA aplicada, agentes de IA, backend, arquitetura de software e sistemas distribuídos.",
    profileHobbies:
      "<strong>Hobbies:</strong> projetos pessoais, estudos de sistemas, Rust, algoritmos e tecnologia.",
    profileGoal:
      "<strong>Objetivo:</strong> construir sistemas confiáveis com IA, automação e impacto real em produtos digitais.",
    educationEyebrow: "Trajetória",
    educationTitle: "Formação",
    educationIntro:
      "Minha formação combina engenharia de software, física, desenvolvimento web full stack e experiência prática com produtos digitais.",
    educationDate1: "2025",
    educationItem1Title: "Engenharia de Software",
    educationItem1Text:
      "Bacharelado no Centro Universitário Internacional UNINTER.",
    educationDate2: "2020 - 2024",
    educationItem2Title: "Física",
    educationItem2Text:
      "Bacharelado pela Universidade Federal de Minas Gerais, com base forte em raciocínio analítico e resolução de problemas.",
    languagesDate: "2021 - 2022",
    languagesTitle: "Desenvolvimento Web Full Stack",
    languagesText: "Formação em desenvolvimento web pela Trybe.",
    languageDate: "Idiomas",
    languageTitle: "Inglês",
    languageText: "Proficiência bilíngue.",
    skillsTitle: "Tecnologias estudadas",
    experienceEyebrow: "Experiência profissional",
    experienceTitle: "Experiência",
    experienceIntro:
      "Atuação em engenharia de software, produtos de IA, desenvolvimento backend, frontend e plataformas web.",
    experience1Date: "Outubro de 2025 - presente",
    experience1Role: "Senior Software Engineer, Backend / Applied AI Engineer",
    experience1Company: "Datagrid AI, atualmente parte da Procore",
    experience1Text:
      "Trabalho no time Applied AI Core Agent, com foco em infraestrutura backend, qualidade de execução, confiabilidade, fluxos de tool calling, parsing, evals e comportamento de agentes de IA.",
    experience2Date: "Junho de 2024 - outubro de 2025",
    experience2Role: "Software Engineer, Backend-heavy Full Stack / AI Platform",
    experience2Company: "Adapta",
    experience2Text:
      "Atuei na Adapta ONE, plataforma multi-LLM com RAG para clientes corporativos. Ajudei a escalar a base de clientes, integrar modelos de IA e otimizar custos operacionais.",
    experience3Date: "Fevereiro de 2023 - junho de 2024",
    experience3Role: "Frontend Developer",
    experience3Company: "The Brooklyn Brothers",
    experience3Text:
      "Trabalhei em suporte técnico, desenvolvimento e migração de sites para marcas globais da Unilever, usando AEM, React, Vue, Sanity e Netlify em rotinas com comunicação em inglês.",
    experience4Date: "Julho de 2021 - fevereiro de 2023",
    experience4Role: "Fullstack Engineer",
    experience4Company: "Growth2data",
    experience4Text:
      "Desenvolvi e mantive aplicações web full stack com React, Node.js, SQL Server, MySQL, Azure, AWS, Cloudflare, Nginx e infraestrutura em nuvem.",
    portfolioEyebrow: "Trabalhos",
    portfolioTitle: "Portfólio",
    portfolioIntro:
      "Projetos pessoais e acadêmicos publicados no GitHub, com foco em Rust, IA, algoritmos e análise de dados.",
    project1Tag: "Rust • Segurança",
    project1Title: "Port Scan Detection Firewall",
    project1Text:
      "Firewall inteligente em Rust para detecção de port scanning.",
    project2Title: "Game of Life",
    project2Text: "Implementação simples do Game of Life em Rust.",
    project3Tag: "Rust • IA",
    project3Title: "LLM Sheet Analysis",
    project3Text:
      "Microserviço em Rust para extrair dados de planilhas e enviar informações para um agente de IA.",
    project4Tag: "Grafos • Dados",
    project4Title: "BH Nível",
    project4Text:
      "Projeto para encontrar caminhos com menor elevação em Belo Horizonte.",
    project5Title: "Text Summarizer GPT",
    project5Tag: "IA",
    project5Text:
      "Aplicação criada para resumir textos usando inteligência artificial.",
    project6Tag: "Acadêmico",
    project6Title: "Sorting Algorithms",
    project6Text: "Trabalho acadêmico de Física sobre algoritmos de ordenação.",
    projectLink: "Ver projeto",
    project1Aria: "Abrir projeto Port Scan Detection Firewall",
    project2Aria: "Abrir projeto Game of Life",
    project3Aria: "Abrir projeto LLM Sheet Analysis",
    project4Aria: "Abrir projeto BH Nível",
    project5Aria: "Abrir projeto Text Summarizer GPT",
    project6Aria: "Abrir projeto Sorting Algorithms",
    contactEyebrow: "Mensagem",
    contactTitle: "Contato",
    contactIntro:
      "Preencha o formulário abaixo para simular o envio de uma mensagem.",
    contactEmail: "marquinco@outlook.com",
    contactNetwork: "linkedin.com/in/coutinhomarco",
    formName: "Nome",
    formEmail: "E-mail",
    formMessage: "Mensagem",
    formSubmit: "Enviar mensagem",
    footerText: "Marco Soares Coutinho. Desenvolvido com HTML, CSS e JavaScript puro.",
    errorName: "Informe seu nome.",
    errorEmailRequired: "Informe seu e-mail.",
    errorEmailInvalid: "Informe um e-mail válido, como usuario@dominio.com.",
    errorMessage: "Escreva uma mensagem.",
    successMessage: "Mensagem enviada com sucesso!",
  },
  en: {
    pageTitle: "Personal Portfolio | Online Resume",
    metaDescription: "Personal portfolio built with plain HTML, CSS, and JavaScript.",
    navAria: "Main navigation",
    brandAria: "Go to the beginning",
    brandText: "Marco Coutinho",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    preferencesAria: "Preferences",
    linkedinAria: "Open Marco Soares Coutinho's LinkedIn",
    languageToggle: "PT",
    languageToggleAria: "Alternar para português",
    themeDark: "Dark",
    themeLight: "Light",
    themeDarkAria: "Switch to dark theme",
    themeLightAria: "Switch to light theme",
    navAbout: "About me",
    navEducation: "Education",
    navExperience: "Experience",
    navPortfolio: "Portfolio",
    navContact: "Contact",
    heroEyebrow: "Online resume",
    heroTitle: "Hi, I am <span>Marco Soares Coutinho</span>.",
    heroDescription:
      "I started my path studying Physics, where I had my first real contact with programming and discovered that I enjoyed building solutions with code. That experience led me to move into technology, now focused on backend engineering, AI agents, LLM systems, and cloud-native products.",
    heroActionsAria: "Main actions",
    heroProjects: "View projects",
    heroContact: "Get in touch",
    profileAria: "Personal summary",
    profilePhotoAlt: "Photo of Marco Soares Coutinho",
    profileName: "Marco Soares Coutinho",
    profileSummary:
      "Senior Software Engineer | Backend, AI Agents & LLM Systems | Applied AI Engineer.",
    profileInterests:
      "<strong>Interests:</strong> applied AI, AI agents, backend engineering, software architecture, and distributed systems.",
    profileHobbies:
      "<strong>Hobbies:</strong> personal projects, systems study, Rust, algorithms, and technology.",
    profileGoal:
      "<strong>Goal:</strong> build reliable systems with AI, automation, and real impact in digital products.",
    educationEyebrow: "Background",
    educationTitle: "Education",
    educationIntro:
      "My education combines software engineering, physics, full-stack web development, and practical experience with digital products.",
    educationDate1: "2025",
    educationItem1Title: "Software Engineering",
    educationItem1Text:
      "Bachelor's degree at Centro Universitário Internacional UNINTER.",
    educationDate2: "2020 - 2024",
    educationItem2Title: "Physics",
    educationItem2Text:
      "Bachelor's degree at Universidade Federal de Minas Gerais, with a strong foundation in analytical reasoning and problem solving.",
    languagesDate: "2021 - 2022",
    languagesTitle: "Full Stack Web Development",
    languagesText: "Web development program at Trybe.",
    languageDate: "Languages",
    languageTitle: "English",
    languageText: "Bilingual proficiency.",
    skillsTitle: "Technologies studied",
    experienceEyebrow: "Professional experience",
    experienceTitle: "Experience",
    experienceIntro:
      "Work across software engineering, AI products, backend development, frontend development, and web platforms.",
    experience1Date: "October 2025 - present",
    experience1Role: "Senior Software Engineer, Backend / Applied AI Engineer",
    experience1Company: "Datagrid AI, now part of Procore",
    experience1Text:
      "I work on the Applied AI Core Agent team, focused on backend infrastructure, execution quality, reliability, tool-calling flows, parsing, evals, and AI agent behavior.",
    experience2Date: "June 2024 - October 2025",
    experience2Role: "Software Engineer, Backend-heavy Full Stack / AI Platform",
    experience2Company: "Adapta",
    experience2Text:
      "I worked on Adapta ONE, a multi-LLM platform with RAG for enterprise clients. I helped scale the customer base, integrate AI models, and optimize operational costs.",
    experience3Date: "February 2023 - June 2024",
    experience3Role: "Frontend Developer",
    experience3Company: "The Brooklyn Brothers",
    experience3Text:
      "I worked on technical support, development, and website migration for global Unilever brands, using AEM, React, Vue, Sanity, and Netlify in routines with English communication.",
    experience4Date: "July 2021 - February 2023",
    experience4Role: "Fullstack Engineer",
    experience4Company: "Growth2data",
    experience4Text:
      "I developed and maintained full-stack web applications with React, Node.js, SQL Server, MySQL, Azure, AWS, Cloudflare, Nginx, and cloud infrastructure.",
    portfolioEyebrow: "Work",
    portfolioTitle: "Portfolio",
    portfolioIntro:
      "Personal and academic projects published on GitHub, focused on Rust, AI, algorithms, and data analysis.",
    project1Tag: "Rust • Security",
    project1Title: "Port Scan Detection Firewall",
    project1Text:
      "Intelligent firewall in Rust for port scanning detection.",
    project2Title: "Game of Life",
    project2Text: "Simple implementation of Conway's Game of Life in Rust.",
    project3Tag: "Rust • AI",
    project3Title: "LLM Sheet Analysis",
    project3Text:
      "Rust microservice for extracting spreadsheet data and sending information to an AI agent.",
    project4Tag: "Graphs • Data",
    project4Title: "BH Nível",
    project4Text:
      "Project for finding paths with lower elevation in Belo Horizonte.",
    project5Title: "Text Summarizer GPT",
    project5Tag: "AI",
    project5Text:
      "Application built to summarize texts using artificial intelligence.",
    project6Tag: "Academic",
    project6Title: "Sorting Algorithms",
    project6Text: "Academic Physics project about sorting algorithms.",
    projectLink: "View project",
    project1Aria: "Open Port Scan Detection Firewall project",
    project2Aria: "Open Game of Life project",
    project3Aria: "Open LLM Sheet Analysis project",
    project4Aria: "Open BH Nível project",
    project5Aria: "Open Text Summarizer GPT project",
    project6Aria: "Open Sorting Algorithms project",
    contactEyebrow: "Message",
    contactTitle: "Contact",
    contactIntro:
      "Fill out the form below to simulate sending a message.",
    contactEmail: "marquinco@outlook.com",
    contactNetwork: "linkedin.com/in/coutinhomarco",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formSubmit: "Send message",
    footerText: "Marco Soares Coutinho. Built with plain HTML, CSS, and JavaScript.",
    errorName: "Enter your name.",
    errorEmailRequired: "Enter your email.",
    errorEmailInvalid: "Enter a valid email, such as user@domain.com.",
    errorMessage: "Write a message.",
    successMessage: "Message sent successfully!",
  },
};

let currentLanguage = localStorage.getItem("idioma") || "pt";

currentYear.textContent = new Date().getFullYear();

function text(key) {
  return translations[currentLanguage][key];
}

// Aplica o idioma escolhido nos textos, atributos acessíveis, título e meta description.
function applyLanguage(language) {
  currentLanguage = language;
  localStorage.setItem("idioma", language);
  document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  document.title = text("pageTitle");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = text(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = text(element.dataset.i18nHtml);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", text(element.dataset.i18nAriaLabel));
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", text(element.dataset.i18nAlt));
  });

  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    element.setAttribute("content", text(element.dataset.i18nContent));
  });

  clearErrors();
  updateThemeButton();
}

function updateThemeButton() {
  // Mantém o rótulo e o ícone sincronizados com o tema ativo.
  const isDark = body.classList.contains("dark-theme");
  document.querySelector(".theme-label").textContent = isDark
    ? text("themeLight")
    : text("themeDark");
  themeIcon.textContent = isDark ? "☀" : "☾";
  themeToggle.setAttribute(
    "aria-label",
    isDark ? text("themeLightAria") : text("themeDarkAria")
  );
}

const savedTheme = localStorage.getItem("tema");
if (savedTheme === "escuro") {
  body.classList.add("dark-theme");
}

// Abre e fecha a navegação mobile atualizando atributos de acessibilidade.
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? text("menuClose") : text("menuOpen"));
});

navItems.forEach((link) => {
  // Fecha o menu depois do clique para liberar a tela no celular.
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", text("menuOpen"));
  });
});

themeToggle.addEventListener("click", () => {
  // Salva a preferência para manter o tema escolhido em visitas futuras.
  body.classList.toggle("dark-theme");
  const theme = body.classList.contains("dark-theme") ? "escuro" : "claro";
  localStorage.setItem("tema", theme);
  updateThemeButton();
});

languageToggle.addEventListener("click", () => {
  applyLanguage(currentLanguage === "pt" ? "en" : "pt");
});

// Destaca no menu a seção que está visível durante a navegação.
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      navItems.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`
        );
      });
    });
  },
  { rootMargin: "-45% 0px -45% 0px" }
);

sections.forEach((section) => sectionObserver.observe(section));

function setError(fieldId, message) {
  document.querySelector(`#erro-${fieldId}`).textContent = message;
}

function clearErrors() {
  setError("nome", "");
  setError("email", "");
  setError("mensagem", "");
}

function showToast(message) {
  // Reaproveita o mesmo toast e reinicia o temporizador a cada envio válido.
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Valida o formulário no navegador e simula sucesso sem enviar dados para servidor.
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  clearErrors();

  const name = contactForm.nome.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.mensagem.value.trim();
  let hasError = false;

  if (!name) {
    setError("nome", text("errorName"));
    hasError = true;
  }

  if (!email) {
    setError("email", text("errorEmailRequired"));
    hasError = true;
  } else if (!isValidEmail(email)) {
    setError("email", text("errorEmailInvalid"));
    hasError = true;
  }

  if (!message) {
    setError("mensagem", text("errorMessage"));
    hasError = true;
  }

  if (hasError) {
    return;
  }

  contactForm.reset();
  showToast(text("successMessage"));
});

applyLanguage(currentLanguage);
