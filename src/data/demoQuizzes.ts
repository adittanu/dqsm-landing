export interface QuizQuestion {
  text: string;
  type: 'radio' | 'checkbox' | 'select' | 'text' | 'number' | 'slider' | 'date' | 'file' | 'html' | 'fillblank' | 'matching';
  options: string[];
  image?: string;
}

export interface QuizResult {
  type: string;
  title: string;
  image: string;
  description: string;
}

export interface DemoQuiz {
  slug: string;
  title: string;
  description: string;
  theme: string;
  featuredImage: string | null;
  sampleNote?: boolean;
  questions: QuizQuestion[];
  results?: QuizResult[];
}
export const demoQuizzes: DemoQuiz[] = [
  {
    slug: 'personality',
    title: 'Find out your Personality Type',
    description:
      'In this Personality quiz, you would be assessed on your Personal, Intellectual, and Emotional affinity. There are 3 personality types- Adventurous, Creative & Empathetic Individuals. Your answers to the following questions would determine your personality type.',
    theme: 'sigma',
    featuredImage: '/images/sigma-img.png',
    sampleNote: true,
    questions: [
      {
        text: 'How do you prefer to spend your weekends?',
        type: 'radio',
        options: ['Exploring new places', 'Engaging in artistic activities', 'Volunteering for a charitable cause'],
      },
      {
        text: 'How do you handle challenges?',
        type: 'radio',
        options: ['Taking risks and embracing the unknown', 'Finding innovative solutions', 'Supporting others and seeking collaborative solutions'],
      },
      {
        text: 'How do you express yourself?',
        type: 'radio',
        options: ['Trying new hobbies or activities', 'Creating art or writing', 'Listening and supporting others'],
      },
    ],
    results: [
      {
        type: 'Adventurous',
        title: "You're a Person of Adventure",
        image: '/images/Adventurous.png',
        description: 'Adventurous individuals are bold, energetic, and always seeking new experiences. They thrive on excitement and are willing to take risks to explore the unknown. They inspire others with their courage and zest for life.',
      },
      {
        type: 'Creative',
        title: "You're a Person of Creativity",
        image: '/images/Creative.png',
        description: 'Creative individuals have a vivid imagination and a unique way of seeing the world. They express themselves through art, writing, and innovative thinking. They are often drawn to beauty and originality in everything they do.',
      },
      {
        type: 'Empathetic',
        title: "You're a Person of Empathy",
        image: '/images/Empathy.png',
        description: 'Empathetic individuals have a deep capacity to understand and share the feelings and experiences of others. They are compassionate, caring, and attentive listeners who genuinely care about the well-being of those around them. They excel in creating supportive and nurturing environments, and they are often driven by a strong desire to help and make a positive difference in the lives of others.',
      },
    ],
  },
  {
    slug: 'trivia',
    title: "Let's take a Fun Trivia Quiz!",
    description:
      'Get ready to test your knowledge and have a blast with our exciting trivia questions. Whether you\'re a seasoned trivia enthusiast or just looking for a fun challenge, this quiz is designed to entertain and engage you. Remember, the most important rule of this quiz is to have fun! So, without further ado, let\'s dive into the world of trivia and see how many correct answers you can score. Good luck and enjoy the journey!',
    theme: 'sigma',
    featuredImage:
      'http://demo.quizandsurveymaster.com/wp-content/uploads/2023/07/fun-trivia-1.png',
    questions: [
      {
        text: 'On Sundays, what is it illegal for a single woman in Florida to do?',
        type: 'radio',
        options: ['Ride a horse', 'Walking on a tightrope', 'Skydiving', 'Bike Riding'],
      },
      {
        text: 'In Georgia, what foods are forbidden to be eaten with a fork?',
        type: 'radio',
        options: ['Spaghetti', 'Tacos', 'Fried Chicken', 'Noodles'],
      },
      {
        text: "In California, you can't legally buy a mousetrap unless you have what?",
        type: 'radio',
        options: ['Rats', 'Hunting license', 'Hat', 'Cheeze cubes'],
      },
      {
        text: 'What is forbidden in the French vineyards?',
        type: 'radio',
        options: ['Airplanes', 'Illegal cars', 'Flying Saucers', 'Cycles'],
      },
      {
        text: 'Which planet is known as the "Red Planet"?',
        type: 'radio',
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      },
      {
        text: 'In Texas, what is it illegal to swear in front of?',
        type: 'radio',
        options: ['Cow', 'Dog', 'Corpse', 'Man'],
      },
    ],
  },
  {
    slug: 'science',
    title: 'Welcome to your Science Quiz',
    description: 'The duration of this exam is 15 minutes.',
    theme: 'pixel',
    featuredImage: null,
    questions: [
      {
        text: 'Read the passage carefully',
        type: 'radio',
        options: [
          'Improving blood circulation',
          'Assisting the body in assimilating the maximum nutrition from food',
          'Increasing the resistance power of the body',
          'Slowing down the process of digestion',
        ],
      },
      {
        text: 'Fill in the Blank',
        type: 'radio',
        options: ['Water', 'House'],
      },
      {
        text: "What is Earth's only natural satellite?",
        type: 'radio',
        options: ['Sun', 'Mars', 'Venus', 'Moon'],
      },
      {
        text: 'What part of the body helps you move?',
        type: 'radio',
        options: ['Eyes', 'Lungs', 'Pancreas', 'Muscles'],
      },
      {
        text: 'Who invented the first functional telephone?',
        type: 'radio',
        options: ['Albert Einstein', 'Nikola Tesla', 'Thomas Alva Edison', 'Alexander Graham Bell'],
      },
      {
        text: 'What part of the plant conducts photosynthesis?',
        type: 'radio',
        options: ['Branch', 'Leaf', 'Root', 'Trunk'],
      },
      {
        text: 'Choose the correct one',
        type: 'radio',
        options: ['Lungs', 'Kidneys', 'Heart', 'Brain'],
      },
      {
        text: 'Where does our food collect after we chew and swallow it?',
        type: 'radio',
        options: ['Small intestine', 'Large intestine', 'Stomach', 'Liver'],
      },
      {
        text: 'Which nutrient plays an essential role in muscle-building?',
        type: 'radio',
        options: ['Protein', 'Carbohydrate', 'Iron', 'Fat'],
      },
      {
        text: 'Plants need which gas to perform photosynthesis?',
        type: 'radio',
        options: ['Hydrogen', 'Carbon monoxide', 'Carbon dioxide', 'Oxygen'],
      },
    ],
  },
  {
    slug: 'tendencies',
    title: 'Find out your Tendency!',
    description:
      "Take the sample quiz to find whether you're an Upholder, Questioner, Obliger, or Rebel.",
    theme: 'pixel',
    featuredImage:
      'http://demo.quizandsurveymaster.com/wp-content/uploads/2023/07/4tendency.webp',
    questions: [
      {
        text: 'When it comes to expectations, I am most likely to',
        type: 'radio',
        options: [
          "Meet them, whether they're from myself or others",
          'Question them and only meet them if they make sense to me',
          'Meet the expectations of others but struggle with meeting my own',
          'Resist expectations and prefer to do things my own way',
        ],
      },
      {
        text: 'How do you feel about rules and deadlines?',
        type: 'radio',
        options: [
          'I embrace rules and deadlines, and I find them helpful',
          'I question rules and deadlines before accepting them',
          'I tend to meet external deadlines but struggle with self-imposed ones',
          'I resist rules and deadlines and prefer to do things my own way',
        ],
      },
      {
        text: 'When making decisions, I am more likely to',
        type: 'radio',
        options: [
          'Seek input and consider the expectations of others',
          'Weigh the pros and cons and make decisions based on reasoning',
          'Consider my own expectations and values',
          'Follow my intuition and do what feels right in the moment',
        ],
      },
      {
        text: 'How do you handle expectations from others?',
        type: 'radio',
        options: [
          'I readily meet them and often exceed them',
          "I consider the expectations and then decide if I'll meet them",
          'I feel obligated to meet them but struggle to prioritize my own expectations',
          'I resist expectations from others and prefer to do things my own way',
        ],
      },
      {
        text: 'When setting goals for yourself, what approach do you take?',
        type: 'radio',
        options: [
          'I set goals and work diligently to achieve them',
          'I question and analyze the goals before committing to them',
          'I struggle to meet my own goals without external accountability',
          'I prefer to go with the flow and dislike setting strict goals',
        ],
      },
    ],
  },
  {
    slug: 'social',
    title: 'Decode the Digital Realm: Embark on the Social Media Quest!',
    description:
      'Get ready to unravel the mysteries of digital connections. From trends to interactions, dive into the fast-paced world of social media. Are you prepared for the thrilling ride?',
    theme: 'sapience',
    featuredImage:
      'http://demo.quizandsurveymaster.com/wp-content/uploads/2023/08/social-media.png',
    questions: [
      {
        text: "Which social media platform has recently introduced 'Reels'?",
        type: 'radio',
        options: ['YouTube', 'facebook', 'Instagram', 'Tic-Tok'],
      },
      {
        text: 'What is the new chatroom based social media app?',
        type: 'radio',
        options: ['Discord', 'Podcast', 'Clubhouse', 'Microsoft Teams'],
      },
      {
        text: 'Which platform has the largest amount of global users?',
        type: 'radio',
        options: ['facebook', 'Twitter', 'LinkedIn', 'Telegram'],
      },
      {
        text: "Which social media company just announced the global launch of 'Take a Break' feature",
        type: 'radio',
        options: ['Pinterest', 'LinkedIn', 'Twitter', 'Instagram'],
      },
      {
        text: 'What type of Instagram post does NOT show up on a user\'s feed?',
        type: 'radio',
        options: ['Reels', 'Carousel', 'Story', 'Guide'],
      },
    ],
  },
  {
    slug: 'marketing',
    title: 'Welcome to the Marketing Trend Quiz!',
    description:
      "Elevate your marketing game with our quiz. Stay in the know about the latest trends and prove your marketing mettle. Let's dive in and decode the world of marketing together!",
    theme: 'fortune',
    featuredImage:
      'http://demo.quizandsurveymaster.com/wp-content/uploads/2023/08/mktng.png',
    questions: [
      {
        text: 'Which market trend should we focus this year?',
        type: 'radio',
        options: [
          'Brand Awareness',
          'Better Customer Service through Social Media',
          'Product Awareness',
          'Increasing revenue through existing customer',
          'Generating new leads',
        ],
      },
      {
        text: 'Which of the following trend is having major impact on marketing?',
        type: 'radio',
        options: ['Lead Generation', 'SEO', 'SMM', 'Video Content', 'Emails'],
      },
      {
        text: "Which of these doesn't show up on interactive content?",
        type: 'radio',
        options: ['Surveys', 'Quizzes', 'Webinar', 'Podcast', 'Polls'],
      },
      {
        text: 'What is the best way to get the engagement rates higher?',
        type: 'radio',
        options: [
          'Checking Data & Demographics of the channel',
          'Creating more interactive content',
          'Buying Engaging users',
          'Running Ads',
        ],
      },
      {
        text: 'What is the biggest advantage of having Marketing Automations?',
        type: 'radio',
        options: [
          'Higher Traffics to Website',
          'Higher number of Leads',
          'Improved Targeting',
          'Higher Conversion',
        ],
      },
      {
        text: 'What is voice search?',
        type: 'radio',
        options: ['Artificial Intelligence', 'Search Engine', 'Browsing Internet through Voice Command'],
      },
    ],
  },
  {
    slug: 'love',
    title: 'Find Your Love Language!',
    description:
      'With this quiz, you\'d get to know how you or your partner express love. We believe every person expresses in different ways, few are noticeable and few are not. But everyone has their own way.',
    theme: 'fortune',
    featuredImage:
      'http://demo.quizandsurveymaster.com/wp-content/uploads/2024/08/heart.jpg',
    questions: [
      {
        text: 'I feel most loved when my partner…',
        type: 'radio',
        options: ['Tells me how important I am to them.', 'Gives me kisses and hugs'],
      },
      {
        text: 'I feel most special to my partner when they…',
        type: 'radio',
        options: [
          'Make room in our budget for the items that are important to me.',
          'Like to do things with me in their spare time.',
        ],
      },
      {
        text: 'I feel special when my partner…',
        type: 'radio',
        options: ['Makes me feel safe.', 'Spoils me with gifts.'],
      },
      {
        text: 'I feel best about my relationship when my partner…',
        type: 'radio',
        options: [
          'Tells me they are proud of me.',
          'Looks after our children or other family members.',
        ],
      },
      {
        text: 'My partner can best show love to me by…',
        type: 'radio',
        options: [
          'Finding fun things for us to do together.',
          'Buying me things I could not afford myself.',
        ],
      },
    ],
  },
];
