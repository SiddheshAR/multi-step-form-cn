export type FlowCapability = "recommendation" | "generation" | "review";

export interface FlowMetadata {
  name: string;
  number: number;
  desc: string;
  capabilities: FlowCapability[];
}

const flowMetadata: FlowMetadata[] = [
  {
    name: "Recommendation Only",
    number: 1,
    desc: "This flow has recommendation only.",
    capabilities: ["recommendation", "generation", "review"],
  },
  {
    name: "Recommendation and Generation only",
    number: 2,
    desc: "This flow has recommendation only.",
    capabilities: ["recommendation", "generation"],
  },
  {
    name: "Recommendation,Gen and Review",
    number: 3,
    desc: "This runs full pipeline.",
    capabilities: ["recommendation", "generation", "review"],
  },
  {
    name: "Review Flow",
    number: 4,
    desc: "This flow has review only.",
    capabilities: ["review"],
  },
  {
    name: "Review and Recommendation Flow",
    number: 5,
    desc: "This flow has Recommendation and Generation Flow.",
    capabilities: ["generation", "recommendation"],
  },
  {
    name: "Generation Only",
    number: 6,
    desc: "This flow has generation only.",
    capabilities: ["generation"],
  },
  {
    name: "Gen and Review Flow",
    number: 7,
    desc: "This flow has recommendation only.",
    capabilities: ["generation", "review"],
  },
];

export default flowMetadata;
