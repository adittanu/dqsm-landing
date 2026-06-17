export interface DocArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
}

export interface DocCategory {
  id: string;
  title: string;
  description: string;
  articleCount: number;
  icon: string;
  articles: DocArticle[];
}

export interface PopularTopic {
  title: string;
  slug: string;
  category: string;
}

export const docCategories: DocCategory[] = [
  {
    id: 'overview',
    title: 'Overview',
    description: 'Get to know DQSM — installation, settings, and everything you need to start building quizzes and surveys.',
    articleCount: 12,
    icon: 'BookOpen',
    articles: [
      { id: 'quick-start', title: 'Quick Start Guide', slug: '/docs/about-quiz-survey-master/quick-start/', excerpt: 'Get up and running with DQSM in minutes. Install the plugin, configure basic settings, and publish your first quiz.' },
      { id: 'what-is-qsm', title: 'What is DQSM?', slug: '/docs/about-quiz-survey-master/what-is-qsm/', excerpt: 'Learn what DQSM is, who it\'s for, and how it can help you create powerful quizzes, surveys, and forms on your WordPress site.' },
      { id: 'how-to-install-addons', title: 'How to Install Addons', slug: '/docs/about-quiz-survey-master/how-to-install-add-ons/', excerpt: 'Step-by-step instructions for purchasing, downloading, and installing DQSM premium and free addons on your website.' },
      { id: 'system-requirements', title: 'System Requirements', slug: '/docs/about-quiz-survey-master/system-requirements/', excerpt: 'Ensure your hosting environment meets the minimum PHP, WordPress, and database requirements for running DQSM smoothly.' },
      { id: 'plugin-settings-overview', title: 'Plugin Settings Overview', slug: '/docs/about-quiz-survey-master/plugin-settings/', excerpt: 'A walkthrough of every global setting in DQSM, from default styles to email templates and result page configurations.' },
    ],
  },
  {
    id: 'how-to-use',
    title: 'How to use DQSM?',
    description: 'Step-by-step guides for creating quizzes and surveys, configuring results, and publishing on your site.',
    articleCount: 11,
    icon: 'ClipboardList',
    articles: [
      { id: 'creating-first-quiz', title: 'Creating Your First Quiz', slug: '/docs/creating-quizzes-and-surveys/creating-your-first-quiz/', excerpt: 'Build a complete quiz from scratch — add questions, configure answers, set up scoring, and publish it on a page.' },
      { id: 'adding-to-site', title: 'Adding Your Quiz to Your Site', slug: '/docs/creating-quizzes-and-surveys/adding-your-quiz-or-survey-to-your-site/', excerpt: 'Learn how to embed your quiz or survey using shortcodes, Gutenberg blocks, or page builder widgets.' },
      { id: 'setting-up-results', title: 'Setting Up Results Pages', slug: '/docs/creating-quizzes-and-surveys/setting-up-results-pages/', excerpt: 'Configure dynamic results pages that display scores, custom messages, and conditional content based on user answers.' },
      { id: 'setting-up-emails', title: 'Setting Up Emails', slug: '/docs/creating-quizzes-and-surveys/setting-up-emails/', excerpt: 'Send automated emails to quiz takers and administrators with customized templates, conditions, and template variables.' },
      { id: 'customizing-design', title: 'Customizing Quiz Design', slug: '/docs/creating-quizzes-and-surveys/customizing-quiz-design/', excerpt: 'Match your brand by adjusting colors, fonts, button styles, and layout options directly within the quiz editor.' },
    ],
  },
  {
    id: 'advanced-topics',
    title: 'Advanced Topics',
    description: 'Take your quizzes further with conditional logic, timers, proctoring, advanced scoring, and custom styling.',
    articleCount: 22,
    icon: 'Zap',
    articles: [
      { id: 'conditional-logic', title: 'Conditional Logic', slug: '/docs/advanced-topics/conditional-logic/', excerpt: 'Show or hide questions based on previous answers using the Logic addon. Build dynamic, branching quiz flows.' },
      { id: 'timer-settings', title: 'Timer Settings', slug: '/docs/advanced-topics/timer-settings/', excerpt: 'Add countdown timers to your quizzes, set per-question or whole-quiz time limits, and configure auto-submit behavior.' },
      { id: 'quiz-proctoring', title: 'Quiz Proctoring', slug: '/docs/advanced-topics/quiz-proctoring/', excerpt: 'Prevent cheating with proctoring features including tab-switch detection, full-screen enforcement, and attempt logging.' },
      { id: 'advanced-scoring', title: 'Advanced Scoring', slug: '/docs/advanced-topics/advanced-scoring/', excerpt: 'Configure weighted scoring, point ranges, penalty for wrong answers, and custom grading scales for assessments.' },
      { id: 'custom-css-styling', title: 'Custom CSS Styling', slug: '/docs/advanced-topics/custom-css-styling/', excerpt: 'Apply custom CSS to override default quiz styles. Includes class reference and examples for common styling tasks.' },
    ],
  },
  {
    id: 'addons',
    title: 'Addons',
    description: 'Extend DQSM with premium and free addons for integrations, analytics, payment, certificates, and more.',
    articleCount: 31,
    icon: 'Puzzle',
    articles: [
      { id: 'ai-integration', title: 'AI Integration', slug: '/docs/add-ons/ai-integration/', excerpt: 'Generate quiz questions automatically using OpenAI and ChatGPT. Create entire quizzes from a topic in seconds.' },
      { id: 'export-results', title: 'Export Results', slug: '/docs/add-ons/export-results/', excerpt: 'Export quiz results to CSV or PDF for offline analysis, reporting, and record-keeping.' },
      { id: 'woocommerce-integration', title: 'WooCommerce Integration', slug: '/docs/add-ons/woocommerce/', excerpt: 'Sell quiz access as WooCommerce products, gate premium quizzes behind payment, and track revenue per quiz.' },
      { id: 'mailchimp-integration', title: 'MailChimp Integration', slug: '/docs/add-ons/mailchimp/', excerpt: 'Automatically add quiz takers to your MailChimp mailing lists with opt-in checkboxes or auto-subscribe settings.' },
      { id: 'certificate-addon', title: 'Certificate Addon', slug: '/docs/add-ons/certificate/', excerpt: 'Award personalized PDF certificates to users who complete quizzes. Fully customizable templates with dynamic fields.' },
    ],
  },
  {
    id: 'question-types',
    title: 'Question Types',
    description: 'Explore every question type available in DQSM — from multiple choice and true/false to file uploads and matching.',
    articleCount: 20,
    icon: 'ListChecks',
    articles: [
      { id: 'multiple-choice', title: 'Multiple Choice', slug: '/docs/question-types/multiple-choice/', excerpt: 'Create single-answer or multi-answer multiple choice questions with optional images, hints, and answer explanations.' },
      { id: 'true-false', title: 'True/False', slug: '/docs/question-types/true-false/', excerpt: 'Simple true or false questions ideal for knowledge checks, quick polls, and binary assessments.' },
      { id: 'fill-in-blank', title: 'Fill in the Blank', slug: '/docs/question-types/fill-in-the-blank/', excerpt: 'Let users type their own answers into blank fields. Supports multiple correct answers and case-sensitive matching.' },
      { id: 'short-answer', title: 'Short Answer', slug: '/docs/question-types/short-answer/', excerpt: 'Collect open-ended text responses from users. Great for surveys, feedback forms, and subjective questions.' },
      { id: 'matching', title: 'Matching Questions', slug: '/docs/question-types/matching/', excerpt: 'Ask users to pair items from two columns. Perfect for vocabulary, definitions, and association exercises.' },
    ],
  },
  {
    id: 'integrations',
    title: 'Integrations',
    description: 'Connect DQSM with your favorite tools — email marketing, spreadsheets, CRM platforms, and automation services.',
    articleCount: 15,
    icon: 'Plug',
    articles: [
      { id: 'mailchimp', title: 'MailChimp', slug: '/docs/integrations/mailchimp/', excerpt: 'Sync quiz responses to MailChimp lists and tags. Set up audience segmentation based on quiz answers.' },
      { id: 'zapier', title: 'Zapier', slug: '/docs/integrations/zapier/', excerpt: 'Trigger Zapier automations when users complete a quiz. Connect DQSM to 5,000+ apps without writing code.' },
      { id: 'google-sheets', title: 'Google Sheets', slug: '/docs/integrations/google-sheets/', excerpt: 'Automatically send quiz submissions to a Google Sheet in real time. Keep all your data organized and accessible.' },
      { id: 'slack', title: 'Slack', slug: '/docs/integrations/slack/', excerpt: 'Get instant Slack notifications when someone completes a quiz. Configure channels, message formats, and conditions.' },
      { id: 'activecampaign', title: 'ActiveCampaign', slug: '/docs/integrations/activecampaign/', excerpt: 'Add quiz takers to ActiveCampaign automations and lists. Map quiz fields to contact properties for targeted follow-ups.' },
    ],
  },
  {
    id: 'qsm-themes',
    title: 'DQSM Themes',
    description: 'Browse and install professionally designed themes to change the look and feel of your quizzes and surveys.',
    articleCount: 12,
    icon: 'Palette',
    articles: [
      { id: 'sapience-theme', title: 'Sapience Theme', slug: '/docs/qsm-themes/sapience/', excerpt: 'A clean, modern theme with spacious layouts and subtle animations. Ideal for professional surveys and assessments.' },
      { id: 'sigma-theme', title: 'Sigma Theme', slug: '/docs/qsm-themes/sigma/', excerpt: 'Bold and vibrant theme designed for engagement. Features prominent progress bars and eye-catching question cards.' },
      { id: 'pixel-theme', title: 'Pixel Theme', slug: '/docs/qsm-themes/pixel/', excerpt: 'A retro-inspired theme with pixel art aesthetics. Perfect for fun quizzes, gaming content, and playful brands.' },
      { id: 'fortune-theme', title: 'Fortune Theme', slug: '/docs/qsm-themes/fortune/', excerpt: 'Elegant theme with a premium feel. Gold accents and refined typography make it great for high-end assessments.' },
      { id: 'pool-theme', title: 'Pool Theme', slug: '/docs/qsm-themes/pool/', excerpt: 'Colorful and playful theme with smooth transitions. Works well for personality quizzes and interactive content.' },
    ],
  },
  {
    id: 'developer',
    title: 'Developer Info & API',
    description: 'Technical reference for developers — hooks, filters, REST API endpoints, JavaScript API, and custom templates.',
    articleCount: 5,
    icon: 'Code',
    articles: [
      { id: 'hooks-filters', title: 'Hooks and Filters', slug: '/docs/developer/hooks-and-filters/', excerpt: 'Complete reference of WordPress hooks and filters available in DQSM for modifying quiz behavior and output.' },
      { id: 'rest-api', title: 'REST API', slug: '/docs/developer/rest-api/', excerpt: 'Interact with DQSM programmatically via the REST API. Create, read, update, and delete quizzes, questions, and results.' },
      { id: 'javascript-api', title: 'JavaScript API', slug: '/docs/developer/javascript-api/', excerpt: 'Frontend JavaScript API for interacting with quizzes on the page. Listen to events, trigger actions, and modify behavior.' },
      { id: 'custom-templates', title: 'Custom Templates', slug: '/docs/developer/custom-templates/', excerpt: 'Create custom question and result page templates by extending DQSM\'s template system with your own PHP files.' },
      { id: 'plugin-extensions', title: 'Plugin Extensions', slug: '/docs/developer/plugin-extensions/', excerpt: 'Build your own DQSM addons. Covers the extension architecture, registering custom question types, and distribution.' },
    ],
  },
  {
    id: 'quick-fixes',
    title: 'Quick Fixes',
    description: 'Troubleshoot common issues fast — display problems, submission errors, and compatibility fixes.',
    articleCount: 1,
    icon: 'Wrench',
    articles: [
      { id: 'quiz-not-displaying', title: 'Quiz Not Displaying', slug: '/docs/quick-fixes/quiz-not-displaying/', excerpt: 'If your quiz or survey isn\'t showing on the front end, check these common causes: shortcode errors, theme conflicts, and caching issues.' },
    ],
  },
];

export const popularTopics: PopularTopic[] = [
  { title: 'Get started with DQSM', slug: '/docs/about-quiz-survey-master/quick-start/', category: 'Overview' },
  { title: 'How to Install Addons', slug: '/docs/about-quiz-survey-master/how-to-install-add-ons/', category: 'Overview' },
  { title: 'How to add quizzes & surveys to your website', slug: '/docs/creating-quizzes-and-surveys/adding-your-quiz-or-survey-to-your-site/', category: 'How to use DQSM?' },
  { title: 'How to set up results page', slug: '/docs/creating-quizzes-and-surveys/setting-up-results-pages/', category: 'How to use DQSM?' },
  { title: 'What are the question types supported', slug: '/docs/question-types/', category: 'Question Types' },
  { title: 'How to set up email automation', slug: '/docs/creating-quizzes-and-surveys/setting-up-emails/', category: 'How to use DQSM?' },
];
