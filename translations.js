/* ==========================================================================
   translations.js — complete EN / DE string catalog for the portfolio.
   Every visible, translatable string on the site lives here.
   Proper names, tech terms, and official course/paper titles stay in English.
   ========================================================================== */

const TRANSLATIONS = {
  en: {
    /* Meta */
    "meta.title": "Sai Vishnu — M.Sc. Computer Science Student & Software Developer",
    "meta.description":
      "Portfolio of Sai Vishnu, M.Sc. Computer Science student at TU Dresden and software developer specializing in Generative AI and end-to-end test automation.",

    /* Accessibility labels */
    "aria.mainNav": "Main navigation",
    "aria.langToggle": "Switch language between English and German",
    "aria.themeToggle": "Toggle dark / light mode",
    "aria.menuToggle": "Toggle navigation menu",
    "aria.github": "GitHub profile",
    "aria.linkedin": "LinkedIn profile",
    "aria.email": "Send an email",

    /* Navigation */
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    /* Hero */
    "hero.badgeLocation": "Dresden, Germany",
    "hero.badgeStatus": "Open to Werkstudent roles",
    "hero.greeting": "Hi, I'm",
    "hero.role": "M.Sc. Computer Science Student @ TU Dresden · Software Developer",
    "hero.typingPrefix": "Focused on",
    "hero.typingWords": [
      "Generative AI",
      "Test Automation",
      "LLM Evaluation",
      "Python Development"
    ],
    "hero.tagline":
      "I build Generative AI solutions and end-to-end test automation — from LLM-powered test generation to enterprise-scale document pipelines.",
    "hero.viewProjects": "View Projects",
    "hero.downloadCv": "Download CV",
    "hero.scrollHint": "Scroll to explore",

    /* About */
    "about.kicker": "01 · About",
    "about.title": "A short introduction",
    "about.p1":
      "I'm an M.Sc. Computer Science student at TU Dresden with 2+ years of industry experience in Python automation, Generative AI / LLM evaluation, and end-to-end test automation with Selenium and Cypress.",
    "about.p2":
      "I'm currently looking for a working student (Werkstudent) position in software development, AI/ML, or test automation — available up to 20 hours per week during the lecture period and full-time during semester breaks.",
    "about.langTitle": "Languages",
    "about.lang.en": "English",
    "about.lang.de": "German",
    "about.lang.te": "Telugu",
    "about.lang.kn": "Kannada",
    "about.lang.native": "Native",
    "about.stat1.label": "Years in industry",
    "about.stat2.label": "Faster test-case generation",
    "about.stat3.label": "Less manual effort",
    "about.stat4.label": "AI-generated test cases per repo",
    "about.stat4.prefix": "up to",

    /* Experience */
    "exp.kicker": "02 · Experience",
    "exp.title": "Where I've worked",
    "exp.job1.role": "Software Developer",
    "exp.job1.date": "Jul 2023 – Sep 2025",
    "exp.job1.location": "Bangalore, India",
    "exp.job1.b1":
      "Built a Generative AI test-automation suite that generates test cases, scripts, and end-to-end test scenarios directly from a GitHub repository and Jira project link — up to 100 test cases per repository.",
    "exp.job1.b2":
      "Made test-case generation and validation 90% faster than manual work by automatically evaluating LLM outputs for relevance, traceability, and quality.",
    "exp.job1.b3":
      "Extended the suite with Selenium checks that verify page elements and core user flows whenever the target project includes a web front end.",
    "exp.job1.b4":
      "Developed an enterprise-scale financial document automation framework for a healthcare client, processing 500–1,000 credit memos per week with Python, GCP, and Apache Airflow — cutting manual effort by 75%.",
    "exp.job1.b5":
      "Prepared and curated a large-scale evaluation dataset for systematic language-model testing, covering complete real-world codebases such as a fully fledged banking application.",
    "exp.job2.role": "Software Developer Intern",
    "exp.job2.date": "Mar 2023 – Jul 2023",
    "exp.job2.location": "Bangalore, India",
    "exp.job2.b1":
      "Developed a full-stack banking application with React.js, Node.js, and MongoDB.",
    "exp.job2.b2":
      "Implemented real-time transaction tracking and monthly statement generation.",

    /* Education */
    "edu.title": "Education",
    "edu.1.degree": "M.Sc. Computer Science",
    "edu.1.date": "Oct 2025 – Oct 2027 (expected)",
    "edu.1.loc": "Dresden, Germany",
    "edu.2.degree": "B.E. Computer Science & Engineering",
    "edu.2.date": "Sep 2019 – Jul 2023",
    "edu.2.loc": "Bangalore, India",

    /* Projects */
    "proj.kicker": "03 · Projects",
    "proj.title": "Things I've built",
    "proj.featured": "Featured",
    "proj.viewGithub": "View on GitHub",
    "proj.1.badge": "Built at Genpact",
    "proj.1.desc":
      "An LLM-powered suite that generates test cases, scripts, and complete end-to-end test scenarios straight from a GitHub repository and Jira project link — up to 100 test cases per repository. Automatic evaluation of LLM outputs for relevance, traceability, and quality makes generation and validation 90% faster than manual work, with integrated Selenium checks for web front ends.",
    "proj.2.badge": "Bachelor Thesis",
    "proj.2.desc":
      "A blockchain-based bidding platform tackling unfair crop pricing through transparent, decentralized transactions between farmers and buyers. Smart contracts and on-chain storage are integrated with a MERN-stack web application. Published at ICAMSNT 2023.",
    "proj.3.badge": "Mobile App",
    "proj.3.desc":
      "A social networking app for iOS and Android where users create private “houses” for group chat — with secure authentication, responsive UI components, and backend APIs for real-time interaction.",

    /* Skills */
    "skills.kicker": "04 · Skills",
    "skills.title": "What I work with",
    "skills.programming": "Programming",
    "skills.ai": "AI & Generative AI",
    "skills.testing": "Testing & Automation",
    "skills.tools": "Tools",
    "skills.web": "Web & Databases",
    "skills.also": "Also:",
    "skills.item.llmEval": "LLM Evaluation",
    "skills.item.llmWorkflows": "LLM-based Workflows",
    "skills.item.nlp": "Natural Language Processing",
    "skills.item.ml": "Machine Learning",
    "skills.item.retrieval": "Retrieval-based Methods",
    "skills.item.autoWorkflows": "Automated Test Workflows",
    "skills.item.agile": "Agile Testing",
    "skills.tools.also": "OOP · E2E Testing · Software Testing",

    /* Publication */
    "pub.kicker": "05 · Research",
    "pub.title": "Publication",
    "pub.badge": "Conference Paper · 2023",
    "pub.desc":
      "A research paper on FarmiLedger — a blockchain-powered bidding framework designed to tackle crop pricing disparities through transparent, decentralized transactions between farmers and buyers, improving data integrity, fairness, and stakeholder collaboration in agricultural supply chains.",

    /* Certifications */
    "certs.kicker": "06 · Credentials",
    "certs.title": "Certifications",

    /* Contact */
    "contact.kicker": "07 · Contact",
    "contact.title": "Let's work together.",
    "contact.text":
      "I'm open to working student (Werkstudent) positions in software development, AI/ML, and test automation. Feel free to reach out — my inbox is always open.",
    "contact.emailBtn": "Send me an email",
    "contact.or": "or find me on",

    /* Footer */
    "footer.copy": "© 2026 Sai Vishnu"
  },

  de: {
    /* Meta */
    "meta.title": "Sai Vishnu – M.Sc.-Informatikstudent & Softwareentwickler",
    "meta.description":
      "Portfolio von Sai Vishnu – M.Sc.-Informatikstudent an der TU Dresden und Softwareentwickler mit Schwerpunkt Generative AI und End-to-End-Testautomatisierung.",

    /* Accessibility labels */
    "aria.mainNav": "Hauptnavigation",
    "aria.langToggle": "Sprache zwischen Englisch und Deutsch umschalten",
    "aria.themeToggle": "Dunkel-/Hellmodus umschalten",
    "aria.menuToggle": "Navigationsmenü öffnen oder schließen",
    "aria.github": "GitHub-Profil",
    "aria.linkedin": "LinkedIn-Profil",
    "aria.email": "E-Mail senden",

    /* Navigation */
    "nav.about": "Über mich",
    "nav.experience": "Erfahrung",
    "nav.projects": "Projekte",
    "nav.skills": "Skills",
    "nav.contact": "Kontakt",

    /* Hero */
    "hero.badgeLocation": "Dresden, Deutschland",
    "hero.badgeStatus": "Offen für Werkstudentenstellen",
    "hero.greeting": "Hallo, ich bin",
    "hero.role": "M.Sc.-Informatikstudent @ TU Dresden · Softwareentwickler",
    "hero.typingPrefix": "Mein Fokus:",
    "hero.typingWords": [
      "Generative AI",
      "Testautomatisierung",
      "LLM-Evaluation",
      "Python-Entwicklung"
    ],
    "hero.tagline":
      "Ich entwickle Generative-AI-Lösungen und End-to-End-Testautomatisierung – von LLM-gestützter Testfallgenerierung bis zu Dokumenten-Pipelines im Enterprise-Maßstab.",
    "hero.viewProjects": "Projekte ansehen",
    "hero.downloadCv": "Lebenslauf herunterladen",
    "hero.scrollHint": "Mehr entdecken",

    /* About */
    "about.kicker": "01 · Über mich",
    "about.title": "Kurz vorgestellt",
    "about.p1":
      "Ich bin M.Sc.-Informatikstudent an der TU Dresden mit über zwei Jahren Berufserfahrung in Python-Automatisierung, Generative AI / LLM-Evaluation sowie End-to-End-Testautomatisierung mit Selenium und Cypress.",
    "about.p2":
      "Aktuell suche ich eine Werkstudentenstelle in der Softwareentwicklung, im Bereich AI/ML oder in der Testautomatisierung – während der Vorlesungszeit bis zu 20 Stunden pro Woche, in den Semesterferien in Vollzeit verfügbar.",
    "about.langTitle": "Sprachen",
    "about.lang.en": "Englisch",
    "about.lang.de": "Deutsch",
    "about.lang.te": "Telugu",
    "about.lang.kn": "Kannada",
    "about.lang.native": "Muttersprache",
    "about.stat1.label": "Jahre Praxiserfahrung",
    "about.stat2.label": "Schnellere Testfallerstellung",
    "about.stat3.label": "Weniger manueller Aufwand",
    "about.stat4.label": "KI-generierte Testfälle pro Repo",
    "about.stat4.prefix": "bis zu",

    /* Experience */
    "exp.kicker": "02 · Berufserfahrung",
    "exp.title": "Beruflicher Werdegang",
    "exp.job1.role": "Softwareentwickler",
    "exp.job1.date": "Juli 2023 – Sept. 2025",
    "exp.job1.location": "Bangalore, Indien",
    "exp.job1.b1":
      "Entwicklung einer Generative-AI-Testautomatisierungssuite, die Testfälle, Skripte und End-to-End-Testszenarien direkt aus einem GitHub-Repository und einem Jira-Projekt generiert – bis zu 100 Testfälle pro Repository.",
    "exp.job1.b2":
      "Beschleunigung von Testfallerstellung und -validierung um 90 % gegenüber manueller Arbeit durch automatische Bewertung von LLM-Outputs nach Relevanz, Nachvollziehbarkeit und Qualität.",
    "exp.job1.b3":
      "Erweiterung der Suite um Selenium-Checks, die Seitenelemente und zentrale User Flows prüfen, sofern das Zielprojekt ein Web-Frontend enthält.",
    "exp.job1.b4":
      "Aufbau eines Frameworks im Enterprise-Maßstab zur Automatisierung von Finanzdokumenten für einen Kunden aus dem Gesundheitswesen – Verarbeitung von 500–1.000 Gutschriften (Credit Memos) pro Woche mit Python, GCP und Apache Airflow bei 75 % weniger manuellem Aufwand.",
    "exp.job1.b5":
      "Aufbereitung und Kuratierung eines großen Evaluationsdatensatzes für systematisches LLM-Testing – u. a. auf Basis vollständiger realer Codebasen wie einer kompletten Banking-Anwendung.",
    "exp.job2.role": "Softwareentwickler – Praktikum",
    "exp.job2.date": "März 2023 – Juli 2023",
    "exp.job2.location": "Bangalore, Indien",
    "exp.job2.b1":
      "Entwicklung einer Full-Stack-Banking-Anwendung mit React.js, Node.js und MongoDB.",
    "exp.job2.b2":
      "Implementierung von Echtzeit-Transaktionsverfolgung und automatischer Erstellung monatlicher Kontoauszüge.",

    /* Education */
    "edu.title": "Studium",
    "edu.1.degree": "M.Sc. Informatik",
    "edu.1.date": "Okt. 2025 – Okt. 2027 (voraussichtlich)",
    "edu.1.loc": "Dresden, Deutschland",
    "edu.2.degree": "B.E. Computer Science & Engineering",
    "edu.2.date": "Sept. 2019 – Juli 2023",
    "edu.2.loc": "Bangalore, Indien",

    /* Projects */
    "proj.kicker": "03 · Projekte",
    "proj.title": "Was ich gebaut habe",
    "proj.featured": "Highlight",
    "proj.viewGithub": "Auf GitHub ansehen",
    "proj.1.badge": "Entwickelt bei Genpact",
    "proj.1.desc":
      "Eine LLM-gestützte Suite, die Testfälle, Skripte und komplette End-to-End-Testszenarien direkt aus einem GitHub-Repository und einem Jira-Projekt generiert – bis zu 100 Testfälle pro Repository. Die automatische Bewertung der LLM-Outputs nach Relevanz, Nachvollziehbarkeit und Qualität macht die Erstellung und Validierung um 90 % schneller als manuelle Arbeit – inklusive integrierter Selenium-Checks für Web-Frontends.",
    "proj.2.badge": "Bachelorarbeit",
    "proj.2.desc":
      "Eine Blockchain-basierte Auktionsplattform gegen unfaire Erzeugerpreise – mit transparenten, dezentralen Transaktionen zwischen Landwirten und Käufern. Smart Contracts und On-Chain-Speicherung sind in eine MERN-Stack-Webanwendung integriert. Veröffentlicht auf der ICAMSNT 2023.",
    "proj.3.badge": "Mobile App",
    "proj.3.desc":
      "Eine Social-Networking-App für iOS und Android, in der Nutzer private „Houses“ für Gruppenchats erstellen – mit sicherer Authentifizierung, responsiven UI-Komponenten und Backend-APIs für Interaktion in Echtzeit.",

    /* Skills */
    "skills.kicker": "04 · Skills",
    "skills.title": "Womit ich arbeite",
    "skills.programming": "Programmiersprachen",
    "skills.ai": "AI & Generative AI",
    "skills.testing": "Testing & Automatisierung",
    "skills.tools": "Tools",
    "skills.web": "Web & Datenbanken",
    "skills.also": "Außerdem:",
    "skills.item.llmEval": "LLM-Evaluation",
    "skills.item.llmWorkflows": "LLM-basierte Workflows",
    "skills.item.nlp": "Natural Language Processing",
    "skills.item.ml": "Machine Learning",
    "skills.item.retrieval": "Retrieval-basierte Methoden",
    "skills.item.autoWorkflows": "Automatisierte Test-Workflows",
    "skills.item.agile": "Agiles Testen",
    "skills.tools.also": "OOP · E2E-Testing · Softwaretests",

    /* Publication */
    "pub.kicker": "05 · Forschung",
    "pub.title": "Publikation",
    "pub.badge": "Konferenzbeitrag · 2023",
    "pub.desc":
      "Ein Forschungsbeitrag zu FarmiLedger – einem Blockchain-basierten Auktions-Framework, das Preisungleichheiten bei Agrarerzeugnissen durch transparente, dezentrale Transaktionen zwischen Landwirten und Käufern entgegenwirkt und Datenintegrität, Fairness sowie die Zusammenarbeit aller Beteiligten in landwirtschaftlichen Lieferketten verbessert.",

    /* Certifications */
    "certs.kicker": "06 · Nachweise",
    "certs.title": "Zertifizierungen",

    /* Contact */
    "contact.kicker": "07 · Kontakt",
    "contact.title": "Lassen Sie uns zusammenarbeiten.",
    "contact.text":
      "Ich bin offen für Werkstudentenstellen in den Bereichen Softwareentwicklung, AI/ML und Testautomatisierung. Ich freue mich über Ihre Nachricht.",
    "contact.emailBtn": "E-Mail schreiben",
    "contact.or": "oder Sie finden mich auf",

    /* Footer */
    "footer.copy": "© 2026 Sai Vishnu"
  }
};
