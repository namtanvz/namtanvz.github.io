export interface Research {
  title: string;
  authors: string;
  date: string;
  description?: string;
  url?: string;
  tags?: string[];
}

const research: Research[] = [
  {
    title: 'Evaluating lab assistant chatbot on student learning and behaviors in a programming short course',
    authors: 'T Noraset, A Supratak, C Ragkhitwetsagul, N Worathong, S Tuarob',
    date: '2025',
    description: 'Compares two chatbot designs (Unrestricted vs. Assistant) as AI programming-education aids; finds the guided Assistant model produces greater learning gains, despite frequent student exploit attempts and partial prompt-injection vulnerability.',
    url: 'https://www.sciencedirect.com/science/article/pii/S2666920X25001675',
    tags: ['Generative AI', 'Programming Education','Chatbot'],
  },
];

export default research;