interface Experience {
  title: string;
  company: string;
  location: string;
  range: string;
  url: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    title: "Software Developer Intern",
    company: "Omise",
    location: "Bangkok, Thailand",
    range: "Sep 2024 - Feb 2025",
    url: "https://omise.co",
    description: [
      "Resolved flaky tests in a Ruby codebase, improving reliability and reduce runtime.",
      "Developed K6 scripts in JavaScript to perform load testing for Shoryuken.",
      "Utilizing LocalStack to mock the SQS service and WireMock to simulate endpoints.",
    ],
  },
];

export default experiences;
