export interface Question {
  type: 'quiz' | 'trueFalse';
  question: string;
  options?: string[];
  correctAnswer: number | boolean;
}

export interface Lesson {
  title: string;
  content: string;
  questions: Question[];
}

export const lessonData: Record<number, Lesson> = {
  1: {
    title: "What is a Home Inspection?",
    content: `A home inspection is a <span class="highlight">thorough examination</span> of a property's condition, typically performed by a <span class="highlight">qualified inspector</span> before a real estate transaction.

The inspection covers <span class="highlight">structural elements, electrical systems, plumbing, HVAC</span>, and more to identify potential issues and safety concerns.

Key aspects include <span class="highlight">visual examination</span> of accessible areas, <span class="highlight">testing of major systems</span>, documentation of findings, and recommendations for repairs.`,
    questions: [
      {
        type: 'quiz',
        question: "What is the <strong>primary purpose</strong> of a home inspection?",
        options: [
          "To determine the property's market value",
          "To identify potential issues and safety concerns",
          "To provide renovation recommendations",
          "To assess property taxes"
        ],
        correctAnswer: 1
      },
      {
        type: 'trueFalse',
        question: "Home inspections <strong>only cover the interior</strong> of a property.",
        correctAnswer: false
      },
      {
        type: 'quiz',
        question: "Who <strong>typically performs</strong> a home inspection?",
        options: [
          "Real estate agent",
          "Qualified inspector",
          "Property owner",
          "Bank representative"
        ],
        correctAnswer: 1
      }
    ]
  },
  2: {
    title: "Types of Inspections",
    content: `There are <span class="highlight">several types</span> of home inspections, each serving different purposes:

<span class="highlight">General Home Inspection</span> covers the entire property comprehensively.

<span class="highlight">Specialized Inspections</span> focus on specific systems like roof, foundation, electrical, plumbing, or HVAC.

<span class="highlight">Pre-listing and New Construction</span> inspections serve specific timing needs in the buying process.`,
    questions: [
      {
        type: 'quiz',
        question: "Which inspection type covers the <strong>entire property</strong>?",
        options: [
          "Specialized inspection",
          "General home inspection",
          "Pre-listing inspection",
          "Foundation inspection"
        ],
        correctAnswer: 1
      },
      {
        type: 'trueFalse',
        question: "Specialized inspections focus on <strong>specific systems or areas</strong>.",
        correctAnswer: true
      }
    ]
  },
  3: {
    title: "Red Flags to Watch For",
    content: `Certain issues discovered during a home inspection should raise <span class="highlight-red">immediate concerns</span>:

<span class="highlight-red">Major Red Flags</span> include foundation cracks, water damage or mold, electrical safety issues, structural problems, and roof damage.

<span class="highlight">Minor Issues</span> include cosmetic damage, minor plumbing leaks, outdated fixtures, and normal wear and tear.

Understanding these <span class="highlight">differences</span> helps in making informed property decisions.`,
    questions: [
      {
        type: 'quiz',
        question: "Which of these is considered a <strong>MAJOR red flag</strong>?",
        options: [
          "Outdated fixtures",
          "Minor plumbing leaks",
          "Foundation cracks",
          "Cosmetic damage"
        ],
        correctAnswer: 2
      },
      {
        type: 'trueFalse',
        question: "<strong>All issues</strong> found in a home inspection are equally serious.",
        correctAnswer: false
      },
      {
        type: 'quiz',
        question: "What should you do when <strong>major red flags</strong> are discovered?",
        options: [
          "Ignore them if the price is good",
          "Consider them in your decision making",
          "Only worry about cosmetic issues",
          "Assume they'll fix themselves"
        ],
        correctAnswer: 1
      }
    ]
  }
};