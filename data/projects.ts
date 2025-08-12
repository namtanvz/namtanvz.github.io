interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  external?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "eDuck",
    description:
      "A Visual Studio Code extension built with React, FastAPI, OpenAI API, and MongoDB that uses Large Language Models (LLMs) to help students learn Python. It provides guided assistance, applies prompt engineering to enhance coding skills, and encourages independent problem-solving and critical thinking.",
    tech: ["Python", "FastAPI", "React", "Typescript", "MongoDB", "Langchain"],
    image: "/projects/educk_proj.png",
  },
  {
    title: "Sneaker Detection",
    description:
      "Developed a sneaker detection application by training and fine-tuning YOLOv5 and YOLOv8 models for precise object detection.",
    tech: ["Python", "FastAPI", "React"],
    github: "https://github.com/Nightsky-na/sneaker_detection",
    image: "/projects/educk_proj.png",
  },
    {
    title: "AquaSense",
    description:
      "An IoT-based Smart Agriculture Monitoring and Control System designed to help farmers efficiently manage their farms. It monitors key environmental factors such as temperature and humidity, tracks water levels in real time, and automates irrigation to optimize water usage. Accessible remotely via a user-friendly dashboard.",
    tech: ["Internet of Things", "Arduino", "Node-RED", "HiveMQ",'InfluxDB',],
  },

];

export default projects;
