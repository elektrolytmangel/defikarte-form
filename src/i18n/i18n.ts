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
    debug: false,
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          access: 'Accessible',
          contact_support: 'Contact Support',
          description: 'Description',
          environment_info: 'You are using propably a non production deployment. Environment name:',
          error_api:
            'An error occured while sending the request. Try again, or contact our support if error occures again and again. Errormessage: <1>{{errorMsg}}</1>',
          error_api_title: 'Request was not successful!',
          error_default: 'Value is not valid',
          error_description: 'Max length allowed is 200.',
          error_location: 'Location is required, max length is 200.',
          error_openinghours: 'The entered opening hours does not match the pattern needed.',
          error_operatorphone: 'Not a valid phonenumber.',
          error_pos: 'Position is required. Select position on the map.',
          error_reporter: 'Reporter is required.',
          indoor: 'Indoor',
          level: 'Level',
          location: 'Location',
          openinghours: 'Opening hours',
          operator: 'Operator',
          operatorphone: 'Operators phone',
          placeholder_description: 'i.e.: while Store is open',
          placeholder_level: '6',
          placeholder_location: 'Schoolhouse Zurich West, near entrance',
          placeholder_operator: 'Municipality, association, private person',
          placeholder_operatorphone: '+41 79 000 00 00',
          placeholder_openinghours: '24/7 or Mo-Fr 08:00-17:00',
          placeholder_reporter: 'John Doe',
          position: 'Position',
          reporter: 'Reporter',
          select: 'Confirm position',
          start: 'Create new AED',
          step_one: '1. Select position',
          step_success: 'AED successful created!',
          step_two: '2. Add informationen',
          submit: 'Create',
          thanks: 'Thank you for your support! The AED will appear in the next hours on the map.',
          title: 'Report AED',
          try_again: 'Try again',
          yes: 'Yes',
          private: 'Private',
          permissive: 'Permissive',
          access_info_title: 'What does "Accessible" mean?',
          access_info:
            '<strong>Yes:</strong> The public has an official, legally-enshrined right of access. <br/><strong>Permissive:</strong> Open to general traffic until such time as the owner revokes the permission which they are legally allowed to do at any time in the future. <br/><strong>Private:</strong> General public access is not allowed. Access is granted with individual permission only.',
          more_information: 'Further information',
        },
      },
      de: {
        translation: {
          access: 'Zugänglich',
          contact_support: 'Support kontaktieren',
          description: 'Beschreibung',
          environment_info: 'Dies ist möglicherweise keine produktive Version der Webseite. Versionsname:',
          error_api:
            'Es ist ein Fehler beim Erstellen des Defibrillators aufgetreten. Versuche es noch einmal,  bitte kontaktiere bei wiederholtem Fehler unseren Support. Fehlermeldung: <1>{{errorMsg}}</1>',
          error_api_title: 'Defibrillator konnte nicht gemeldet werden!',
          error_default: 'Wert ist ungültig',
          error_description: 'Die maximale Länge beträgt 200 Zeichen',
          error_location: 'Der Standort wird benötigt, maximale Länge 200 Zeichen',
          error_openinghours: 'Die eingegebenen Öffnungzeiten entsprechen nicht dem geforderten Format.',
          error_operatorphone: 'Der Wert muss eine gültige Telefonummer sein.',
          error_pos: 'Die Position ist erforderlich. Wähle die Position auf der Karte aus.',
          error_reporter: 'Der Melder ist erforderlich.',
          indoor: 'Im Gebäude',
          level: 'Stockwerk in Nummern',
          location: 'Standort',
          openinghours: 'Öffnungszeiten',
          operator: 'Betreiber',
          operatorphone: 'Betreiber Telefon (im internationalen Format +41 XX)',
          placeholder_description: 'z.B.: während Öffnungszeiten verfügbar',
          placeholder_level: '0',
          placeholder_location: 'Schulhaus Zürich West, neben Eingang',
          placeholder_operator: 'Gemeinde, Verein, Privatperson',
          placeholder_operatorphone: '+41 79 000 00 00',
          placeholder_openinghours: '24/7 oder Mo-Fr 08:00-17:00',
          placeholder_reporter: 'Max Mustermann',
          position: 'Koordinaten',
          reporter: 'Melder',
          select: 'Position bestätigen',
          start: 'Neuer Defibrillator erfassen',
          step_one: '1. Position auswählen',
          step_success: 'Defibrillator erfolgreich erfasst!',
          step_two: '2. Informationen erfassen',
          submit: 'Meldung absenden',
          thanks:
            'Besten Dank für deine Unterstützung! Der Defibrillator wird innerhalb der nächsten Stunden auf der Karte erscheinen.',
          title: 'Defibrillator melden',
          try_again: 'Erneut versuchen',
          yes: 'Ja',
          private: 'Privat',
          permissive: 'Eingeschränkt zugänglich',
          access_info_title: 'Was wird unter "Zugänglich" verstanden?',
          access_info:
            '<strong>Ja:</strong> Die Benutzung ist allgemein erlaubt. <br/><strong>Eingeschränkt zugänglich:</strong> Der Eigentümer duldet die öffentliche Benutzung. Die Erlaubnis oder Duldung kann der Eigentümer jedoch jederzeit widerrufen. <br/><strong>Privat:</strong> Kein Zugang für die breite Öffentlichkeit, Benutzung nach individueller Erlaubnis.',
          more_information: 'Weiterführende Informationen',
        },
      },
    },
  });

export default i18n;
