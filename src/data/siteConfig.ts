export interface SocialLink {
  name: string;
  handle: string;
  url: string;
  description: string;
}

export interface NowItem {
  label: string;
  text: string;
}

export interface NowEntry {
  title: string;
  description: string;
}

export interface SiteConfig {
  siteUrl: string;
  siteName: string;
  title: string;
  description: string;
  author: {
    name: string;
    role: string;
    lead: string;
    bio: string | string[];
    email: string;
    twitterHandle: string;
    avatar?: string;
  };
  socials: SocialLink[];
  now: {
    lastUpdated: string;
    items: NowItem[];
    building: NowEntry[];
    reading: NowEntry[];
    thinking: NowEntry[];
  };
  navigation: Array<{ href: string; label: string }>;
}

export const siteConfig: SiteConfig = {
  siteUrl: 'https://gaurbage.com',
  siteName: 'Gaurbage',
  title: 'Abhijeet Gaur — Software Engineer | Gaurbage',
  description:
    'Abhijeet Gaur is a Software Development Engineer specializing in backend systems, DevOps, and cloud infrastructure. Personal website, technical notes, and projects.',
  author: {
    name: 'Abhijeet Gaur',
    role: 'Software Development Engineer',
    lead:
      'Software engineer · Backend · DevOps · Infra',
    bio: [
      "This is Gaurbage — yes, Gaur + garbage, that's my humor for you. It's my personal corner of the internet, not really a portfolio in the usual sense. I use it to write about things I'm building, things I'm learning, and stuff that survived garbage collection in my head.",
      "I work across the stack, but I’ve always been more curious about what happens behind the scenes.",
    ],
    email: 'abhijeetgaur.dev@gmail.com',
    twitterHandle: '@abhijeetgaurdev',
    avatar: '/abhijeet-gaur.webp',
  },
  socials: [
    {
      name: 'GitHub',
      handle: 'abhijeetgaur-dev',
      url: 'https://github.com/abhijeetgaur-dev',
      description: 'Code, experiments, and open-source contributions',
    },
    {
      name: 'X / Twitter',
      handle: '@abhijeetgaurdev',
      url: 'https://x.com/abhijeetgaurdev',
      description: 'I try to be active on X',
  },
    {
      name: 'LinkedIn',
      handle: 'gaurabhijeet',
      url: 'https://www.linkedin.com/in/gaurabhijeet/',
      description: 'Not so active LinkedIn Profile',
    },
  ],
  now: {
    lastUpdated: 'September 2026',
    items: [
      { label: 'building', text: 'translation portal for i18n keys & environment sync' },
      { label: 'studying', text: 'JavaScript Promises internals under the hood' },
      { label: 'exploring', text: 'AWS AI infrastructure (Bedrock & SageMaker)' },
    ],
    building: [
      {
        title: 'Translation platform',
        description:
          "Building a translation portal for managing i18n keys and their translations. While building it, I'm also exploring how to make it different from existing platforms like Tolgee, and getting into version control systems to manage different environments and keep them in sync.",
      },
      {
        title: 'AWS AI infrastructure',
        description:
          'Digging into how AWS handles AI infrastructure — particularly Bedrock and SageMaker — and understanding how the infrastructure can be used for training and fine-tuning AI models.',
      },
    ],
    reading: [
      {
        title: 'The internals of Promises',
        description:
          'Going down the rabbit hole of how JavaScript Promises came to be, their history, and what actually happens under the hood. Currently reading <a href="https://domenic.me/youre-missing-the-point-of-promises/" target="_blank" rel="noopener noreferrer" class="text-link">You\'re Missing the Point of Promises <span class="arrow">↗</span></a>, <a href="https://promisesaplus.com/" target="_blank" rel="noopener noreferrer" class="text-link">Promises/A+ <span class="arrow">↗</span></a>, and <a href="https://github.com/kriskowal/q" target="_blank" rel="noopener noreferrer" class="text-link">Q <span class="arrow">↗</span></a>, and trying to understand the problem Promises were originally trying to solve.',
      },
      {
        title: 'AWS and AI infrastructure',
        description:
          'Understanding how Bedrock and SageMaker work internally and how AWS provides infrastructure for training and fine-tuning AI models.',
      },
    ],
    thinking: [
      {
        title: 'The Root of All Evil',
        description:
          'Currently making my way through Casey Muratori\'s 2.5-hour talk, <a href="https://www.youtube.com/watch?v=hpj6r6CjJf8" target="_blank" rel="noopener noreferrer" class="text-link">The Root of All Evil <span class="arrow">↗</span></a>. It\'s got me thinking about optimization, software, computers, and how we got here in the first place.',
      },
      {
        title: 'Getting better at the gym',
        description:
          'I\'ve recently changed up my workout plan and am moving more towards hypertrophy and progressively lifting heavier. My progress had started to stall, so I\'m trying to push things a little harder and see where that takes me.',
      },
    ],
  },
  navigation: [
    { href: '/notes', label: 'notes' },
    { href: '/now', label: 'now' },
    { href: '/contact', label: 'contact' },
  ],
};
