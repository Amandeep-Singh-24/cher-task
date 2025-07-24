export interface Question {
  type: 'quiz' | 'trueFalse';
  question: string;
  options?: string[];
  correctAnswer: number | boolean;
  studyContent: string;
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
        correctAnswer: 1,
        studyContent: `The <span class="highlight">primary purpose</span> of a home inspection is to <span class="highlight">identify potential issues and safety concerns</span> in a property.

This helps buyers make <span class="highlight">informed decisions</span> about their purchase and understand what repairs or maintenance may be needed.

Unlike appraisals, inspections focus on <span class="highlight">condition and safety</span>, not market value or tax assessments.`
      },
      {
        type: 'trueFalse',
        question: "Home inspections <strong>only cover the interior</strong> of a property.",
        correctAnswer: false,
        studyContent: `Home inspections are <span class="highlight">comprehensive examinations</span> that cover both <span class="highlight">interior and exterior</span> areas of a property.

Inspectors examine <span class="highlight">exterior elements</span> like roofing, siding, foundation, landscaping, and drainage systems.

<span class="highlight">Interior coverage</span> includes electrical, plumbing, HVAC, flooring, walls, ceilings, and built-in appliances.`
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
        correctAnswer: 1,
        studyContent: `Home inspections should be performed by <span class="highlight">qualified, licensed inspectors</span> who have specialized training and certification.

These professionals are <span class="highlight">independent third parties</span> who provide objective assessments without conflicts of interest.

<span class="highlight">Certification requirements</span> vary by state, but most inspectors complete formal training programs and ongoing education.`
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
        correctAnswer: 1,
        studyContent: `A <span class="highlight">General Home Inspection</span> is the most comprehensive type, covering the <span class="highlight">entire property</span> from foundation to roof.

This inspection examines <span class="highlight">all major systems</span> including structural, electrical, plumbing, HVAC, and exterior components.

It's the <span class="highlight">standard inspection</span> most buyers request and provides a complete overview of the property's condition.`
      },
      {
        type: 'trueFalse',
        question: "Specialized inspections focus on <strong>specific systems or areas</strong>.",
        correctAnswer: true,
        studyContent: `<span class="highlight">Specialized inspections</span> are targeted examinations that focus on <span class="highlight">specific systems or areas</span> of concern.

Common specialized inspections include <span class="highlight">roof, foundation, electrical, plumbing, HVAC, pest, and environmental</span> assessments.

These are often recommended when <span class="highlight">general inspections</span> identify potential issues that need deeper investigation by specialists.`
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
        correctAnswer: 2,
        studyContent: `<span class="highlight-red">Foundation cracks</span> are considered a <span class="highlight-red">major red flag</span> because they can indicate serious structural issues.

<span class="highlight-red">Major red flags</span> include foundation problems, water damage, electrical hazards, structural issues, and roof damage.

<span class="highlight">Minor issues</span> like outdated fixtures or cosmetic damage are less concerning and typically easier to address.`
      },
      {
        type: 'trueFalse',
        question: "<strong>All issues</strong> found in a home inspection are equally serious.",
        correctAnswer: false,
        studyContent: `<span class="highlight">Not all inspection issues</span> are equally serious - there's a clear distinction between <span class="highlight-red">major red flags</span> and <span class="highlight">minor issues</span>.

<span class="highlight-red">Major issues</span> affect safety, structural integrity, or require expensive repairs.

<span class="highlight">Minor issues</span> are typically cosmetic, involve normal wear and tear, or are inexpensive to fix.`
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
        correctAnswer: 1,
        studyContent: `When <span class="highlight-red">major red flags</span> are discovered, you should <span class="highlight">carefully consider them</span> in your decision-making process.

Options include <span class="highlight">negotiating repairs</span>, requesting price reductions, seeking specialist inspections, or walking away from the deal.

<span class="highlight-red">Never ignore major issues</span> - they typically worsen over time and can be expensive or dangerous if left unaddressed.`
      }
    ]
  }
};