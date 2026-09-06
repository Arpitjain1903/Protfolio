export interface Project {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  overview: string;
  architecture: string[];
  challenges: string[];
  results: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: "cemformer-x",
    title: "CemFormer-X",
    category: "Flagship / Applied AI & Logistics",
    shortDescription: "A multi-model AI framework for optimizing cement kiln operations and multi-depot logistics.",
    fullDescription: "Cement manufacturing is energy- and carbon-intensive. Plant operators need to balance product quality, operating cost, and CO2 emissions in real time, and separately need to route trucks/orders efficiently across depots — both are traditionally handled by slow, rule-based or manual systems.",
    techStack: ["Python", "PyTorch", "Decision Transformer", "DDQN", "XGBoost", "Pyomo", "Hungarian Algorithm", "Streamlit"],
    metrics: [
      { label: "CO2 & Cost", value: "12% Saved" },
      { label: "Assay Error", value: "<3%" },
      { label: "Plants Validated", value: "3" }
    ],
    overview: "Designed and built as sole architect, CemFormer-X combines supervised surrogate modeling (XGBoost) for real-time clinker quality prediction, Decision Transformer for sequencing kiln operations under cost/emissions targets, MINLP optimization layer (Pyomo) for hard constraints, and Double DQN with Hungarian Algorithm for multi-depot order/fleet matching.",
    architecture: [
      "XGBoost surrogate models trained on clinker chemistry data for real-time quality prediction, avoiding slow lab assay cycles.",
      "Decision Transformer conditioned on target outcomes (cost/quality/emissions) to sequence kiln control actions.",
      "Pyomo-based MINLP optimization layer sitting alongside learned models to enforce hard operational constraints.",
      "Double DQN RL module combined with Hungarian Algorithm solving multi-depot order/fleet matching as an assignment problem.",
      "Interactive Streamlit dashboard visualizing the Pareto front across cost vs. emissions vs. quality."
    ],
    challenges: [
      "Balancing real-time trade-offs between product quality, operating cost, and CO2 emissions.",
      "Enforcing strict physical operational constraints alongside ML-driven control sequences.",
      "Optimizing multi-depot truck/order routing without relying on slow manual assignment systems."
    ],
    results: [
      "Three-model pipeline unifying supervised learning, RL, and classical MINLP optimization.",
      "Real-time inference replacing slower physical lab/manual process cycles.",
      "Interactive Pareto trade-off visualization built for IEEE-style technical manuscript write-up."
    ],
    githubUrl: "https://github.com/Arpitjain1903/cemformer-X",
    featured: true
  },
  {
    slug: "smartinboxrl",
    title: "SmartInboxRL",
    category: "Reinforcement Learning & NLP",
    shortDescription: "A Gymnasium-compatible reinforcement learning environment for benchmarking AI agents on email triage.",
    fullDescription: "There's no standardized benchmark for testing how well LLM/RL agents handle realistic email triage — extracting intent, prioritizing, and taking the correct structured action under messy, ambiguous inputs.",
    techStack: ["Python", "Gymnasium", "Pydantic", "FastAPI", "Docker", "Hugging Face"],
    metrics: [
      { label: "Interface Spec", value: "Gymnasium" },
      { label: "Reward Design", value: "Multi-Score" },
      { label: "Deployment", value: "HF Spaces" }
    ],
    overview: "Sole designer and builder of an OpenEnv/Gymnasium-compatible RL benchmark. Enables standard RL and LLM agents to evaluate email triage intent extraction, priority classification, and structured actions.",
    architecture: [
      "Built to the Gymnasium/OpenEnv interface so any standard RL or LLM-based agent can plug in via reset() and step().",
      "Each email episode requires intent extraction, priority classification, and a discrete/structured action (reply, archive, escalate).",
      "Dense, weighted composite reward combining sub-scores for intent correctness, priority accuracy, action correctness, and response similarity.",
      "Packaged into a Docker container and deployed on Hugging Face Spaces with a baseline evaluation agent."
    ],
    challenges: [
      "Formulating a structured episode framework for ambiguous, unstructured email inputs.",
      "Designing a multi-score reward signal that prevents agent gaming while accurately reflecting triage quality."
    ],
    results: [
      "Standardized, reproducible RL benchmark for real-world NLP and email automation.",
      "Multi-component reward function rather than a single sparse signal.",
      "Publicly deployed and runnable via Hugging Face Spaces."
    ],
    githubUrl: "https://github.com/Arpitjain1903/SmartinboxRL",
    liveUrl: "https://huggingface.co/spaces",
    featured: true
  },
  {
    slug: "threadguard",
    title: "ThreadGuard",
    category: "Voice AI & Social Impact",
    shortDescription: "A voice-first AI system letting garment workers file anonymous labour-rights complaints in their own language.",
    fullDescription: "Many garment workers face literacy and language barriers that prevent them from reporting labour-rights violations through standard (text-based, English-first) channels, and fear retaliation if their identity is exposed.",
    techStack: ["Python", "OpenAI Whisper", "BART-MNLI", "FastAPI", "SQLite"],
    metrics: [
      { label: "Languages", value: "4 Regional" },
      { label: "Classification", value: "Zero-Shot" },
      { label: "Privacy Layer", value: "PII Stripped" }
    ],
    overview: "Sole designer and builder of a multilingual voice-to-action pipeline for anonymous labour-rights complaint processing.",
    architecture: [
      "Voice note recording in Hindi, Tamil, Bengali, or English submitted by workers.",
      "OpenAI Whisper speech-to-text transcription paired with BART-MNLI zero-shot classification without needing labeled category data.",
      "Built-in PII anonymization layer stripping identifying personal details before logging or routing.",
      "Automated routing to appropriate NGO or Labour Department contacts based on complaint type and location across multiple states.",
      "FastAPI backend with SQLite persistence storing complaint records for official follow-up."
    ],
    challenges: [
      "Overcoming literacy and language barriers in traditional text-based complaint forms.",
      "Ensuring strict worker anonymity and PII removal to protect against employer retaliation."
    ],
    results: [
      "End-to-end voice-to-action pipeline with zero typing required.",
      "Multilingual support across 4 major Indian regional languages.",
      "Built-in PII anonymization and automated multi-state authority/NGO routing."
    ],
    githubUrl: "https://github.com/Arpitjain1903/Theradgard",
    featured: true
  },
  {
    slug: "datacleanenv",
    title: "DataCleanEnv",
    category: "Automated Data Engineering & RL",
    shortDescription: "An RL \"gym\" environment for training and benchmarking agents on automated data-cleaning tasks.",
    fullDescription: "Data cleaning is one of the most time-consuming parts of any ML pipeline, and there's no standard way to train or evaluate an agent that automates cleaning decisions (imputation, type casting, deduplication, etc.) end-to-end.",
    techStack: ["Python", "FastAPI", "Docker", "Gymnasium"],
    metrics: [
      { label: "API Protocol", value: "REST API" },
      { label: "Data Generator", value: "Synthetic" },
      { label: "Evaluation", value: "Auto-Grader" }
    ],
    overview: "Sole designer and builder of a synthetic dataset generator, REST-based RL environment API, and baseline benchmark agent for automated data-cleaning tasks.",
    architecture: [
      "Synthetic dirty dataset generator injecting controlled quality issues (nulls, wrong types, duplicates, outliers).",
      "REST API exposing reset(), step(), and state() endpoints over FastAPI for standard gym interaction.",
      "Defined action space for concrete cleaning operations (fill_null, cast_type, drop_duplicates, outlier clipping).",
      "Automated grading harness and baseline reference agent for benchmarking clean-up policies."
    ],
    challenges: [
      "Designing reproducible synthetic data corruption with fine-grained severity controls.",
      "Exposing a fast REST API interface around state transitions and cleaning actions."
    ],
    results: [
      "Configurable synthetic data corruption generator for reproducible benchmarks.",
      "Clean REST API wrapper enabling flexible agent evaluation.",
      "Includes baseline agent and grading harness out of the box."
    ],
    githubUrl: "https://github.com/Arpitjain1903/Data_env",
    featured: false
  },
  {
    slug: "movie-recommendation",
    title: "Content-Based Movie Recommendation System",
    category: "Recommender Systems & NLP",
    shortDescription: "A content-based movie recommender using text similarity over movie metadata.",
    fullDescription: "Recommend movies to a user based on the content/attributes of movies they already like, without needing user-user rating history (avoids the cold-start problem of collaborative filtering).",
    techStack: ["Python", "Pandas", "Scikit-learn", "TF-IDF", "Matplotlib", "Seaborn"],
    metrics: [
      { label: "Filtering", value: "Content-Based" },
      { label: "Similarity", value: "Cosine / TF-IDF" },
      { label: "Cold-Start", value: "Resolved" }
    ],
    overview: "Sole designer and builder of an EDA, NLP preprocessing, and vector similarity movie recommendation pipeline.",
    architecture: [
      "Exploratory data analysis on movie metadata (genres, cast, keywords, overview text) to evaluate distribution and quality.",
      "Preprocessing pipeline cleaning and combining relevant text and categorical fields into unified feature strings.",
      "TF-IDF vectorization of combined movie content paired with Cosine Similarity ranking."
    ],
    challenges: [
      "Resolving the cold-start problem inherent in user-rating-dependent collaborative filtering.",
      "Preprocessing unstructured plot overviews and categorical metadata into high-quality vector representations."
    ],
    results: [
      "Cold-start proof recommendation engine relying purely on item content.",
      "Modular, reusable EDA and feature preprocessing pipeline."
    ],
    githubUrl: "https://github.com/Arpitjain1903/movie-recommendation",
    featured: false
  }
];

