import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          submit: 'Submit AED',
          error_pos: 'Position is required.',
          error_reporter: 'Reporter is required.',
          placeholder_reporter: 'John Doe',
          reporter: 'Reporter',
        }
      },
      de: {
        translation: {
          access: 'Zugänglich',
          contact_support: 'Support kontaktieren',
          description: 'Beschreibung',
          error_api: 'Es ist ein Fehler beim erstellen des Defibrillators aufgetreten. Versuche es nocheinmal,  bitte kontaktiere bei wiederholtem Fehler unseren Support. Fehlermeldung: <1>{{errorMsg}}</1>',
          error_api_title: 'Defibrillator konnte nicht gemeldet werden!',
          error_description: 'Die maximale Länge beträgt 200 Zeichen',
          error_location: 'Der Standort wird benötigt, maximale Länge 200 Zeichen',
          error_openinghours: 'Die eingegebenen Öffnungzeiten entsprechen nicht dem geforderten Format.',
          error_operatorphone: 'Der Wert muss eine gültige Telefonummer sein.',
          error_pos: 'Die Position ist erforderlich. Wähle die Position auf der Karte aus.',
          error_reporter: 'Der Melder ist erforderlich.',
          indoor: 'Im Gebäude',
          level: 'Stockwerk',
          location: 'Standort',
          openinghours: 'Öffnungszeiten',
          operator: 'Betreiber',
          operatorphone: 'Telefon',
          placeholder_description: 'z.B.: während Öffnungszeiten verfügbar',
          placeholder_level: '6. OG',
          placeholder_location: 'Schulhaus Zürich West, neben Eingang',
          placeholder_operator: 'Gemeinde, Verein, Privatperson',
          placeholder_operatorphone: '+41 79 000 00 00',
          placeholder_openinghours: 'Mo-Fr: 08:00-17:00',
          placeholder_reporter: 'Max Mustermann',
          position: 'Koordinaten',
          reporter: 'Melder',
          select: 'Position bestätigen',
          start: 'Neuer Defibrillator erfassen',
          step_one: '1. Position auswählen',
          step_success: 'Defibrillator erforlgreich erfasst!',
          step_two: '2. Informationen erfassen',
          submit: 'Meldung absenden',
          thanks: 'Besten Dank für deine Unterstützung!',
          title: 'Defibrillator melden',
          try_again: 'Erneut versuchen',
        }
      }
    }
  });

export default i18n;