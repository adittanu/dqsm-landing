export interface DocArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string[];
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
      {
        id: 'quick-start',
        title: 'Quick Start Guide',
        slug: '/docs/about-quiz-survey-master/quick-start/',
        excerpt: 'Get up and running with DQSM in minutes. Install the plugin, configure basic settings, and publish your first quiz.',
        body: [
          'This guide provides a concise overview of the DQSM plugin. It is intended for users who are already familiar with WordPress, plugins, and plugin administration.',
          'In this guide, you will learn how to install the DQSM plugin, create a quiz, add questions, set up result pages, and embed the quiz into a post or page.',
          '## Installing the Plugin',
          'In your WordPress admin panel, go to Plugins. Click Add New and search for DQSM. Click Install Now, then select Activate. Once the plugin is activated, the DQSM menu will appear in the admin panel.',
          '## Creating a Quiz or Survey',
          'In the WordPress admin panel, click DQSM to open the dashboard. Click Get Started to begin creating a quiz or survey. Select a form type: Quiz, Survey, Exam, Personality Assessment, or Poll template, and then click Proceed.',
          'Choose a theme from the recommended options or click on "See More Themes" to expand the full DQSM Themes selection. Next, proceed to explore recommended add-ons or click on "See More Add-ons" to expand the list of all the DQSM Add-ons. Then, give your quiz a name and configure the additional form settings.',
          '## Adding and Editing Questions',
          'Click the edit icon. In the blank field, enter your question. If needed, add a description by clicking on the "Edit description." Select the Question Type and choose from the 15 available options in DQSM. Along with that, you also get five advanced question types if you purchase the add-on.',
          'Enter the answer(s) in the answer field. The input format will vary based on the selected question type. You can also choose the preferred answer input type from the Answers Type option. To add a limit to the number of answers that will be displayed to quiz takers, you can add the Answer Limit.',
          'You can also include correct answer info, enable a comment box for user input, and provide hint text to guide users. Assign a question category and upload a feature image if required. Repeat the process to add multiple questions. To organize them into different pages, click Create New Page.',
          '## Setting Up Contact Form',
          'The contact form tab allows you to collect your users\' contact information either at the start or end of the quiz. Enable the contact fields that you want to add to the form. Add the placeholder label name for your contact fields. You can also reorder the contact fields\' positions.',
          '## Setting Up Results Pages',
          'The Result Page tab allows you to customize what quiz takers see after completing a quiz. Click on the Results Pages tab. You will see a default result page box that can be customized based on your requirements.',
          'Start by setting up the Conditions (When) section. Select a suitable condition to determine when a specific result page should be shown. You can customize the conditions based on total points or correct percentage.',
          'Next, configure the Then section. Choose how to display results: create a custom result template, select from pre-built templates, or redirect participants to a specific URL.',
          '📌 The results of a quiz or survey will not be displayed if the quiz is in draft mode. Ensure the quiz is published to view the results.',
          '## Adding Your Quiz to Your Post or Page',
          'Once your quiz, survey, or form is published, you can embed it into a post or page using shortcodes, widgets, or the Gutenberg block.',
        ],
      },
      {
        id: 'installing-qsm',
        title: 'Installing DQSM',
        slug: '/docs/about-quiz-survey-master/installing-qsm/',
        excerpt: 'Step-by-step guide to installing the DQSM plugin on your WordPress site from the plugin repository.',
        body: [
          'To install DQSM, navigate to your WordPress admin panel and go to Plugins > Add New. Search for "DQSM" and click Install Now. After installation, click Activate to enable the plugin.',
          'Once activated, you will see the DQSM menu in your WordPress admin sidebar. You can now start creating quizzes and surveys.',
        ],
      },
      {
        id: 'qsm-dashboard',
        title: 'DQSM Dashboard',
        slug: '/docs/about-quiz-survey-master/qsm-dashboard/',
        excerpt: 'Navigate the DQSM dashboard — manage quizzes, view results, and access settings from one central hub.',
        body: [
          'The DQSM Dashboard is your central hub for managing all quizzes and surveys. From here, you can create new quizzes, edit existing ones, view results, and access global plugin settings.',
          'The dashboard provides an overview of all your forms, including their status, number of submissions, and quick-action buttons for editing, duplicating, or deleting.',
        ],
      },
      {
        id: 'grading-system',
        title: 'Grading System',
        slug: '/docs/about-quiz-survey-master/grading-system/',
        excerpt: 'Understand how DQSM\'s grading system works — points, percentages, and custom grading scales.',
        body: [
          'DQSM offers a flexible grading system that lets you assign points to each answer choice. You can configure correct answers, partial credit, and penalty points for wrong answers.',
          'Results can be displayed based on total points earned, percentage correct, or custom conditions you define in the Results Pages tab.',
        ],
      },
      {
        id: 'question-types-overview',
        title: 'Question Types [Overview]',
        slug: '/docs/about-quiz-survey-master/question-types/',
        excerpt: 'An overview of all question types available in DQSM, from multiple choice to file uploads and beyond.',
        body: [
          'DQSM supports 15+ question types out of the box, including Multiple Choice, Multiple Response, True/False, Fill in the Blank, Short Answer, Matching, and more.',
          'Each question type has its own configuration options for answers, scoring, and display. Advanced question types like Polar, Radio Grid, and Checkbox Grid are available with premium add-ons.',
        ],
      },
      {
        id: 'intro-to-template-variables',
        title: 'Intro to Template Variables',
        slug: '/docs/about-quiz-survey-master/intro-to-template-variables/',
        excerpt: 'Learn how to use template variables to dynamically display quiz results, scores, and user data.',
        body: [
          'Template variables in DQSM let you dynamically insert quiz data into results pages and emails. Use variables like %POINT_SCORE%, %CORRECT_SCORE%, %USER_NAME%, and more to personalize the experience.',
          'Variables can be used in results page templates, email bodies, and custom messages displayed to quiz takers.',
        ],
      },
      {
        id: 'using-math-symbols',
        title: 'Using Math Symbols in Questions',
        slug: '/docs/about-quiz-survey-master/using-math-symbols-in-questions/',
        excerpt: 'How to include mathematical symbols and equations in your DQSM quiz questions using LaTeX or HTML entities.',
        body: [
          'DQSM supports mathematical symbols in questions using LaTeX notation or HTML entities. This is useful for creating math quizzes, science assessments, and technical surveys.',
          'You can include fractions, exponents, Greek letters, and complex equations directly in your question text and answer choices.',
        ],
      },
      {
        id: 'intro-to-addons',
        title: 'Intro to Addons',
        slug: '/docs/about-quiz-survey-master/intro-to-add-ons/',
        excerpt: 'Discover the DQSM addon ecosystem — integrations, advanced features, and premium extensions.',
        body: [
          'DQSM addons extend the core plugin with additional features like email marketing integrations, payment gateways, certificates, advanced reporting, and more.',
          'Addons are available as individual purchases or as part of bundle plans. Visit the DQSM addons page to browse all available extensions.',
        ],
      },
      {
        id: 'how-to-install-addons',
        title: 'How to Install Addons?',
        slug: '/docs/about-quiz-survey-master/how-to-install-add-ons/',
        excerpt: 'Step-by-step instructions for purchasing, downloading, and installing DQSM premium and free addons on your website.',
        body: [
          'Have you found an addon that you would like to install on your site? Follow the steps in this guide to checkout, download the addon, and install the addon on your site!',
          '## Addon Installer (New)',
          'DQSM Addon installer is the easiest way to install and activate DQSM addon bundles. It eliminates the need for manually uploading, installing, and activating the addons and does the work in a few clicks.',
          'Download and Install the "DQSM Installer" plugin on your site that has the DQSM plugin. Navigate to DQSM > Extensions > Addon Installer. Here, you can manage all of your addons and themes.',
          'The "All addons" tab houses all of the DQSM\'s addons. Simply activate/deactivate the purchased addons by hitting the toggle button. If you\'re getting an "Upgrade Plan" button on specific addons then that means your current license doesn\'t include the addon — you need to upgrade to a higher plan.',
          'The current license can be changed from the "License Manager" tab. Similarly, theme licenses can be managed from the "Themes" tab. You can configure and manage the installed addon settings from the "Installed" tab.',
          '## License Management',
          'The License Manager tab lets you add and change your purchased licenses. It lets you add and change licenses of all the activated addons and lists out all the active licenses with the Addon Name, Last Validate date, License Key information, and License Settings.',
          'Note: The License Key field only accepts bundle licenses i.e. Licenses of All Access, Pro, Plus, and Basic Bundles. If you\'re trying to activate a non-bundle individual addon key then you must follow the old manual addon installation and activation process.',
          'To find your purchased licenses go to DQSM > Account > Your Purchases. Here you will find all your purchased addons/themes/bundle orders along with crucial information like the order id, date, amount, order details, invoice and license keys.',
          '## Manual Addon Installation Process (Old)',
          'After completing the purchase, you should see a page with your purchase confirmation, and also an emailed receipt will be sent to you within five minutes. Both the Purchase Confirmation page and the email will contain a list of the purchased addons/bundles.',
          'Next, visit individual addon pages to download and install the addons manually. If your purchased plan includes the addon, you will see a "Download Now" button. Click it to download the addon .zip file.',
          'After downloading the .zip file, go to your WordPress dashboard and click on Plugin > Add New. Click "Upload Plugin" and upload the .zip file. After uploading, click "Install Now."',
          'After successful installation, click the "Activate Plugin" button. To activate the addon with your license key, go to DQSM > Extensions > Addons > Installed. Locate your addon and click on the "Settings" button to add the license key and activate.',
        ],
      },
      {
        id: 'faq',
        title: 'Frequently Asked Questions',
        slug: '/docs/about-quiz-survey-master/frequently-asked-questions/',
        excerpt: 'Answers to the most common questions about DQSM — compatibility, pricing, features, and troubleshooting.',
        body: [
          'Find answers to the most commonly asked questions about DQSM, including compatibility with other plugins, pricing information, feature availability, and basic troubleshooting steps.',
        ],
      },
      {
        id: 'account-management',
        title: 'Account Management',
        slug: '/docs/about-quiz-survey-master/account-management/',
        excerpt: 'Manage your DQSM account — licenses, purchases, downloads, and billing information.',
        body: [
          'Manage your DQSM account from the Account page in the plugin dashboard. View your purchased licenses, download addon files, and update billing information.',
          'You can also deactivate licenses on old sites and transfer them to new installations from the account management page.',
        ],
      },
      {
        id: 'gutenberg-block',
        title: 'Use as a Gutenberg Block',
        slug: '/docs/about-quiz-survey-master/use-as-a-gutenberg-block/',
        excerpt: 'How to embed DQSM quizzes and surveys directly using the WordPress Gutenberg block editor.',
        body: [
          'DQSM integrates with the WordPress Gutenberg editor, allowing you to insert quizzes and surveys directly as blocks. After publishing a quiz, open the Gutenberg editor, click Add Block, search for "DQSM," and select the DQSM Block.',
          'From the block settings, select the quiz or survey you want to embed from the dropdown. You can even create and publish a new quiz directly from the block editor.',
        ],
      },
    ],
  },
  {
    id: 'how-to-use',
    title: 'How to use DQSM?',
    description: 'Step-by-step guides for creating quizzes and surveys, configuring results, and publishing on your site.',
    articleCount: 11,
    icon: 'ClipboardList',
    articles: [
      {
        id: 'creating-first-quiz',
        title: 'How to Create a Quiz',
        slug: '/docs/creating-quizzes-and-surveys/creating-your-quiz-or-survey/',
        excerpt: 'Build a complete quiz from scratch — add questions, configure answers, set up scoring, and publish it on a page.',
        body: [
          'To create a quiz in DQSM, navigate to DQSM > Quizzes/Surveys and click "Create New Quiz/Survey." Select the Quiz template and click Proceed. Give your quiz a name and start adding questions.',
          'Configure each question with the appropriate question type, answer choices, and point values. Use the settings tabs to customize the quiz behavior, contact forms, and results pages.',
        ],
      },
      {
        id: 'creating-survey',
        title: 'How to Create a Survey',
        slug: '/docs/creating-quizzes-and-surveys/creating-a-survey/',
        excerpt: 'Create professional surveys with DQSM — choose survey templates, add questions, and collect responses.',
        body: [
          'To create a survey, navigate to DQSM > Quizzes/Surveys and click "Create New Quiz/Survey." Select the Survey template and click Proceed. DQSM provides survey-specific question types and result configurations.',
          'Surveys can include open-ended questions, rating scales, and multiple choice questions. Results are collected and can be viewed in the DQSM dashboard.',
        ],
      },
      {
        id: 'adding-questions',
        title: 'How to Add Questions',
        slug: '/docs/creating-quizzes-and-surveys/adding-and-editing-questions/',
        excerpt: 'Add and edit questions in your DQSM quiz — choose question types, configure answers, and organize with pages.',
        body: [
          'To add questions, open your quiz and navigate to the Questions tab. Click the edit icon to enter your question text. Select the Question Type from the 15+ available options.',
          'Enter answer choices in the answer field. The input format varies based on the question type. You can also set answer limits, enable comment boxes, add hints, and assign question categories.',
          'To organize questions into pages, click "Create New Page." This allows you to group related questions and control the quiz flow.',
        ],
      },
      {
        id: 'adding-timer',
        title: 'Adding a Timer to Your Quiz or Survey',
        slug: '/docs/creating-quizzes-and-surveys/adding-a-timer-to-your-quiz-or-survey/',
        excerpt: 'Add countdown timers to your quizzes — set time limits, configure auto-submit, and display remaining time.',
        body: [
          'DQSM allows you to add a timer to your quiz or survey. Navigate to the Options tab and look for the Timer settings. You can set a time limit for the entire quiz or configure per-question timing.',
          'When the timer expires, the quiz can auto-submit or display a warning message. The remaining time is shown to quiz takers during the quiz.',
        ],
      },
      {
        id: 'contact-form',
        title: 'How to add a Contact Form',
        slug: '/docs/creating-quizzes-and-surveys/adding-contact-form-fields/',
        excerpt: 'Collect user information with contact forms — add name, email, phone, and custom fields to your quiz.',
        body: [
          'The Contact Form tab allows you to collect user information before or after the quiz. Enable the contact fields you want to include, such as name, email, phone, or custom fields.',
          'Add placeholder labels for each field and reorder their positions. You can also configure the contact form to appear at the start or end of the quiz from the Options tab.',
        ],
      },
      {
        id: 'text-sections',
        title: 'How to add Text Sections',
        slug: '/docs/creating-quizzes-and-surveys/writing-and-editing-text-sections/',
        excerpt: 'Add informational text sections between questions — introductions, instructions, and explanatory content.',
        body: [
          'Text sections in DQSM allow you to add informational content between questions. Use them for introductions, instructions, or explanatory text that doesn\'t require an answer.',
          'To add a text section, create a new question and select the "Text/HTML" question type. Enter your content using the text editor, which supports HTML formatting.',
        ],
      },
      {
        id: 'basic-settings',
        title: 'How to edit DQSM Settings',
        slug: '/docs/creating-quizzes-and-surveys/basic-settings/',
        excerpt: 'Configure global and per-quiz settings — display options, submission behavior, and quiz navigation.',
        body: [
          'DQSM settings can be configured globally (affecting all quizzes) or per-quiz. Global settings are found under DQSM > Settings, while per-quiz settings are in the Options tab of each quiz.',
          'Key settings include display options, submission behavior, pagination, progress bars, and quiz navigation controls.',
        ],
      },
      {
        id: 'setting-up-emails',
        title: 'How to Setup Emails',
        slug: '/docs/creating-quizzes-and-surveys/setting-up-emails/',
        excerpt: 'Send automated emails to quiz takers and administrators — configure templates, conditions, and variables.',
        body: [
          'DQSM\'s email system lets you send automated emails to quiz takers and administrators after quiz completion. Navigate to the Emails tab in your quiz editor to configure email settings.',
          'You can create multiple email templates, each with its own conditions (triggers), recipients, subject lines, and message bodies. Use template variables like %POINT_SCORE% and %USER_NAME% to personalize emails.',
        ],
      },
      {
        id: 'setting-up-results',
        title: 'How to Setup Results Page',
        slug: '/docs/creating-quizzes-and-surveys/setting-up-results-pages/',
        excerpt: 'Configure dynamic results pages — display scores, custom messages, and conditional content based on answers.',
        body: [
          'The Results Pages tab lets you customize what users see after completing a quiz. Create multiple result pages with different conditions to show tailored results based on scores or answers.',
          'Each result page has a "When" section (conditions) and a "Then" section (content). Conditions can be based on total points, percentage correct, or specific question answers. Content can include custom messages, template variables, and redirects to external URLs.',
        ],
      },
      {
        id: 'how-to-style',
        title: 'How to Style a Quiz',
        slug: '/docs/creating-quizzes-and-surveys/how-to-style-a-quiz/',
        excerpt: 'Customize the appearance of your quiz — colors, fonts, button styles, and theme selection.',
        body: [
          'DQSM offers multiple ways to style your quiz. Choose from pre-built themes in the Styles tab, or apply custom CSS for complete control over the appearance.',
          'Theme options include colors, fonts, button styles, progress bar appearance, and overall layout. You can also install premium DQSM themes for additional design options.',
        ],
      },
      {
        id: 'adding-to-site',
        title: 'Adding Your Quiz or Survey to Your Site',
        slug: '/docs/creating-quizzes-and-surveys/adding-your-quiz-or-survey-to-your-site/',
        excerpt: 'Learn how to embed your quiz or survey using shortcodes, Gutenberg blocks, or page builder widgets.',
        body: [
          'After publishing your quiz, you can showcase the newly created quiz or survey on a page or post on your website. DQSM provides you with three ways of displaying a quiz or a survey on your website.',
          'Note: Avoid using the same Quiz/Survey Shortcode twice on a single page on your website — it will cause issues. DQSM doesn\'t support displaying two quizzes with the same id on a single page. However, if you want to display multiple quizzes with different Quiz IDs on the same page then it will work.',
          '## Method 1 – Paste Shortcode on Page/Post',
          'In order to display the quiz/survey, you first need to copy its shortcode. Navigate to DQSM > Quizzes/Surveys > click on the Shortcode icon and copy the Embed Shortcode or the Link Shortcode and paste the copied code to a page/post on your website.',
          'When users go to that page or post, the shortcode will be replaced with your quiz if you have used the Embed Shortcode or the users will see a "Click Here" link if you have added the Link Shortcode.',
          '## Method 2 – Display the Quiz as a Widget on your website',
          'To display a quiz/survey on your website with the help of a widget, from the WordPress menu navigate to Appearances > Widget. Drag a "Text" widget to the required location (e.g., Footer or Sidebar).',
          'Give the widget a Title and paste the Quiz Shortcode on the Blank Area. Hit the save button. The widget will now be live, and your users can attempt the quiz/survey directly from the location of your placed widget.',
          '## Method 3 – Displaying Quiz/Survey using Gutenberg Block',
          'After publishing the Quiz/Survey, you can insert the quiz/survey on a page/post using DQSM Block. Click on Add Block > Search "DQSM" > Click on "DQSM Block".',
          'Once the DQSM Block is added, select the quiz or survey you want to embed in the website from the dropdown. Or you can even add a new quiz from here and publish it.',
          'Hit the "Publish" or "Update" Button once you are done, and the quiz/survey will be added to the page/post.',
        ],
      },
    ],
  },
  {
    id: 'question-types',
    title: 'Question Types',
    description: 'Explore every question type available in DQSM — from multiple choice and true/false to file uploads and matching.',
    articleCount: 20,
    icon: 'ListChecks',
    articles: [
      {
        id: 'multiple-choice',
        title: 'Multiple Choice',
        slug: '/docs/question-types/qsm-multiple-choice/',
        excerpt: 'Create single-answer or multi-answer multiple choice questions with optional images, hints, and answer explanations.',
        body: [
          'The Multiple Choice question type allows quiz takers to select one answer from a list of options. You can add images to each answer choice, enable answer explanations, and configure scoring.',
          'To add a Multiple Choice question, select "Multiple Choice" from the Question Type dropdown. Enter your question text and add answer choices. Mark the correct answer(s) and assign point values.',
        ],
      },
      {
        id: 'file-upload',
        title: 'File Upload',
        slug: '/docs/question-types/qsm-file-upload/',
        excerpt: 'Allow users to upload files as answers — images, documents, and other file types with size limits.',
        body: [
          'The File Upload question type allows quiz takers to upload files as their answer. You can configure accepted file types, maximum file size, and the number of files allowed.',
          'This is useful for assignments, portfolio submissions, and any quiz that requires document or image uploads from users.',
        ],
      },
      {
        id: 'date-type',
        title: 'Date',
        slug: '/docs/question-types/qsm-date/',
        excerpt: 'Collect date responses from quiz takers using a date picker input field.',
        body: [
          'The Date question type presents a date picker input for quiz takers. Users can select a date from a calendar interface, making it ideal for scheduling, birthdate collection, and date-based assessments.',
        ],
      },
      {
        id: 'horizontal-multiple-choice',
        title: 'Horizontal Multiple Choice',
        slug: '/docs/question-types/qsm-horizontal-multiple-choice/',
        excerpt: 'Display multiple choice answers in a horizontal layout for a compact, side-by-side presentation.',
        body: [
          'The Horizontal Multiple Choice question type displays answer choices in a horizontal row instead of a vertical list. This is useful for visual surveys, rating scales, and when screen space is limited.',
        ],
      },
      {
        id: 'drop-down',
        title: 'Drop Down',
        slug: '/docs/question-types/qsm-drop-down/',
        excerpt: 'Present answer options in a dropdown select menu for a clean, compact interface.',
        body: [
          'The Drop Down question type displays answer choices in a dropdown select menu. Quiz takers click the dropdown and select their answer from the list of options.',
          'This type is ideal for questions with many answer options or when you want a compact, clean interface.',
        ],
      },
      {
        id: 'small-open-answer',
        title: 'Small Open Answer',
        slug: '/docs/question-types/qsm-small-open-answer/',
        excerpt: 'Collect short text responses from quiz takers with a single-line text input field.',
        body: [
          'The Small Open Answer question type provides a single-line text input for short responses. You can set correct answers for automatic grading or leave it open-ended for survey responses.',
          'Supports multiple correct answers and case-sensitive or case-insensitive matching.',
        ],
      },
      {
        id: 'multiple-response',
        title: 'Multiple Response',
        slug: '/docs/question-types/qsm-multiple-response/',
        excerpt: 'Allow quiz takers to select multiple answers using checkboxes instead of radio buttons.',
        body: [
          'The Multiple Response question type is similar to Multiple Choice but allows quiz takers to select more than one answer. Answers are displayed with checkboxes instead of radio buttons.',
          'You can configure partial credit scoring for questions where multiple answers are correct.',
        ],
      },
      {
        id: 'large-open-answer',
        title: 'Large Open Answer',
        slug: '/docs/question-types/qsm-large-open-answer/',
        excerpt: 'Collect detailed text responses using a multi-line textarea for essays and long-form answers.',
        body: [
          'The Large Open Answer question type provides a multi-line textarea for detailed responses. This is ideal for essay questions, feedback collection, and any question requiring extended text input.',
        ],
      },
      {
        id: 'text-html',
        title: 'Text/HTML',
        slug: '/docs/question-types/qsm-text-html/',
        excerpt: 'Add informational text, images, or HTML content between questions without requiring an answer.',
        body: [
          'The Text/HTML question type allows you to add informational content between questions. Use it for instructions, images, videos, or any HTML content that doesn\'t require a user response.',
          'This is not technically a question — it\'s a content block that helps you structure your quiz with explanatory text.',
        ],
      },
      {
        id: 'number-type',
        title: 'Number',
        slug: '/docs/question-types/qsm-number/',
        excerpt: 'Collect numerical answers with a number input field — ideal for math quizzes and quantitative surveys.',
        body: [
          'The Number question type provides a number input field for numerical responses. You can set a correct numerical answer, acceptable range, or leave it open-ended.',
          'This type is ideal for math quizzes, quantitative surveys, and any question requiring a numeric response.',
        ],
      },
      {
        id: 'accept-type',
        title: 'Accept',
        slug: '/docs/question-types/qsm-accept/',
        excerpt: 'Require users to accept terms, conditions, or agreements before submitting the quiz.',
        body: [
          'The Accept question type requires quiz takers to check a checkbox to indicate acceptance. This is commonly used for terms and conditions, consent forms, and agreement acknowledgments.',
        ],
      },
      {
        id: 'captcha-type',
        title: 'Captcha',
        slug: '/docs/question-types/qsm-captcha/',
        excerpt: 'Add CAPTCHA verification to prevent spam and bot submissions on your quizzes and surveys.',
        body: [
          'The Captcha question type adds a CAPTCHA verification to your quiz, preventing automated bot submissions. This helps protect your quizzes from spam and ensures genuine responses.',
        ],
      },
      {
        id: 'horizontal-multiple-response',
        title: 'Horizontal Multiple Response',
        slug: '/docs/question-types/qsm-horizontal-multiple-response/',
        excerpt: 'Display multiple response checkboxes in a horizontal layout for compact, side-by-side presentation.',
        body: [
          'The Horizontal Multiple Response question type displays checkboxes in a horizontal row, similar to Horizontal Multiple Choice but allowing multiple selections.',
        ],
      },
      {
        id: 'fill-in-blank',
        title: 'Fill In The Blank',
        slug: '/docs/question-types/qsm-fill-in-the-blank/',
        excerpt: 'Let users type answers into blank fields within the question text — supports multiple correct answers.',
        body: [
          'The Fill In The Blank question type lets you create questions with blanks that users must fill in. Type your question with underscores or blank placeholders, and quiz takers type their answers.',
          'Supports multiple correct answers and case-sensitive or case-insensitive matching. Great for vocabulary, spelling, and knowledge recall questions.',
        ],
      },
      {
        id: 'polar-type',
        title: 'Polar',
        slug: '/docs/question-types/qsm-polar/',
        excerpt: 'Present binary choice questions with two opposing options — ideal for agree/disagree and yes/no scales.',
        body: [
          'The Polar question type presents two opposing options on a scale, such as Agree/Disagree or Yes/No. Quiz takers select their position on the polar scale.',
          'This type is useful for opinion surveys, personality assessments, and binary decision questions.',
        ],
      },
      {
        id: 'matching-pairs',
        title: 'Matching Pairs',
        slug: '/docs/question-types/qsm-matching-pairs/',
        excerpt: 'Ask users to pair items from two columns — perfect for vocabulary, definitions, and association exercises.',
        body: [
          'The Matching Pairs question type asks quiz takers to match items from one column with corresponding items in another. Users drag and drop or select to create pairs.',
          'Ideal for vocabulary exercises, definition matching, and association tasks. Each correct pair can be assigned individual point values.',
        ],
      },
      {
        id: 'radio-grid',
        title: 'Radio Grid',
        slug: '/docs/question-types/qsm-radio-grid/',
        excerpt: 'Present a grid of radio buttons for matrix-style questions with rows and columns of options.',
        body: [
          'The Radio Grid question type presents a matrix-style grid where quiz takers select one option per row. Each row represents a sub-question, and columns represent possible answers.',
          'This is useful for Likert scale surveys, rating matrices, and any question requiring systematic evaluation across multiple items.',
        ],
      },
      {
        id: 'checkbox-grid',
        title: 'Checkbox Grid',
        slug: '/docs/question-types/qsm-checkbox-grid/',
        excerpt: 'Display a grid of checkboxes allowing multiple selections per row in a matrix format.',
        body: [
          'The Checkbox Grid question type is similar to Radio Grid but allows multiple selections per row. Quiz takers can check multiple options in each row of the grid.',
          'Ideal for multi-select matrix questions, preference surveys, and detailed evaluation forms.',
        ],
      },
      {
        id: 'sequence-type',
        title: 'Sequence Question Type',
        slug: '/docs/question-types/qsm-sequence-question-type/',
        excerpt: 'Ask users to arrange items in the correct order by dragging and dropping or ranking them.',
        body: [
          'The Sequence question type asks quiz takers to arrange items in the correct order. Users can drag and drop items to create their sequence.',
          'This type is useful for chronological ordering, process steps, ranking exercises, and priority-based questions.',
        ],
      },
      {
        id: 'audio-type',
        title: 'Audio Question Type',
        slug: '/docs/question-types/qsm-audio-question-type/',
        excerpt: 'Embed audio clips in your quiz questions — perfect for language learning and listening comprehension.',
        body: [
          'The Audio question type allows you to embed audio clips in your quiz questions. Quiz takers listen to the audio and answer related questions.',
          'This type is ideal for language learning assessments, listening comprehension tests, and music-related quizzes.',
        ],
      },
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
