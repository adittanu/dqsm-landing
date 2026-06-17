import type { FeatureRow, Feature } from '@/types';

export const featureRows: FeatureRow[] = [
  {
    id: 'create',
    eyebrow: 'Build',
    title: 'Create Quizzes and Surveys with Ease',
    body: 'Create engaging quizzes and surveys with the Quiz and Survey Master plugin. Customize question types and design to match your website\u2019s style.',
    bullets: ['Quick Installation and Setup', '18+ Question Types', 'Customize results pages'],
    image: '',
    imageAlt: 'Quiz builder interface mockup',
  },
  {
    id: 'addons',
    eyebrow: 'Extend',
    title: 'Extend your Form with Addons',
    body: 'Enhance your quizzes and surveys with over 40 addons from the Quiz and Survey Master plugin. Enjoy advanced features and premium themes to match your website\u2019s style.',
    bullets: ['Export and Import Quizzes', 'Create online assessments & tests', 'Premium Quiz Themes'],
    image: '',
    imageAlt: 'Premium addons collection',
    reverse: true,
  },
  {
    id: 'integrations',
    eyebrow: 'Connect',
    title: 'Effortless and Easy Integrations',
    body: 'Boost engagement and conversions with seamless integrations. Connect with email marketing platforms, payment gateways, and automation services to maximize results.',
    bullets: ['Connect to MailChimp, MailerLite, Drip, etc.', 'Send quiz results to Google Sheets', 'Connect WooCommerce Products with Quizzes'],
    image: '',
    imageAlt: 'Integration connections',
  },
];

export const discoverFeatures: Feature[] = [
  { title: 'Multiple question types', body: 'Create quizzes and surveys with lots of different types of questions, like multiple choice, multiple response, drop-down etc.' },
  { title: 'Multipage quizzes & surveys', body: 'Organize your questions into separate pages and group them however you like. You can even show a progress bar.' },
  { title: 'Personalise results page', body: 'Customize your quiz results page however you like. That way, you can give your visitors a personalized experience.' },
  { title: 'Create multilingual quiz', body: 'Create quizzes in any language you want! You have the freedom to make your quizzes in any language you choose.' },
  { title: 'Randomize questions', body: 'You can set up your quizzes to give random questions to each user. That way, every person will get a unique set of questions.' },
  { title: 'Set Timer', body: 'Add a timer to your quizzes, surveys, and forms to make them more interesting for your visitors.' },
];
