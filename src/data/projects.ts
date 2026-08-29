export const projects = [
  {
    id: "mumbai-flood",
    number: "01",
    year: "2026",
    eyebrow: "Predictive ML · Risk communication",
    title: "Mumbai Flood Risk",
    titleExtended: "Mumbai Flood Risk Analysis & Prediction System",
    summary:
      "A decision-support prototype that turns area-level flood factors into understandable risk scores, prediction views, and visual monitoring for Mumbai.",
    stack: ["Python", "Linear Regression", "Streamlit", "Folium"],
    metrics: [
      { value: "0.982", label: "R² · compiled data" },
      { value: "0.163", label: "MAE" },
      { value: "0.205", label: "RMSE" },
    ],
    note:
      "Results are from a compiled research dataset and still require validation on independent or real-time observations.",
    primaryImage: {
      src: "/projects/mumbai-flood-dashboard.webp",
      width: 1600,
      height: 714,
      alt: "Mumbai Flood Risk System dashboard showing monitored areas, risk zones, and area-level scores",
    },
    secondaryImage: {
      src: "/projects/mumbai-flood-prediction.webp",
      width: 1300,
      height: 698,
      alt: "Area-based flood-risk prediction view showing a Bandra severity score",
    },
    links: [
      {
        label: "View code",
        href: "https://github.com/Cluemore/mumbai-flood-risk-system-version-1",
      },
    ],
  },
  {
    id: "zero-shot",
    number: "02",
    year: "May 2025",
    eyebrow: "Applied NLP · Individual internship build",
    title: "Zero-Shot Summarization",
    titleExtended: "Zero-Shot News Summarization",
    summary:
      "An individual notebook experiment using pretrained BART to compare three summary formats across five long-form news articles—without project-specific fine-tuning.",
    stack: ["Python", "BART", "Transformers", "ROUGE"],
    metrics: [
      { value: "15", label: "summaries generated" },
      { value: "03", label: "output formats" },
      { value: "05", label: "articles tested" },
    ],
    note:
      "ROUGE was used for exploratory source-overlap analysis; reference-summary benchmarking is a planned refinement.",
    primaryImage: {
      src: "/projects/zero-shot-bart-pipeline.webp",
      width: 1600,
      height: 757,
      alt: "Google Colab notebook showing the BART summarization pipeline and generated output",
    },
    secondaryImage: {
      src: "/projects/zero-shot-results.webp",
      width: 1500,
      height: 512,
      alt: "Notebook output comparing prompt variants and ROUGE source-overlap measurements",
    },
    links: [
      {
        label: "Open notebook",
        href: "https://github.com/Cluemore/TestriQA-Internship-/blob/main/Zero_shot_text_summarization.ipynb",
      },
      {
        label: "View repository",
        href: "https://github.com/Cluemore/TestriQA-Internship-",
      },
    ],
  },
  {
    id: "movie-recommender",
    number: "03",
    year: "2026",
    eyebrow: "Recommendation systems · Deployment",
    title: "Movie Recommender",
    titleExtended: "Movie Recommender System",
    summary:
      "A content-based recommendation experience that ranks similar titles from a precomputed similarity matrix and returns five suggestions through a clean Streamlit interface.",
    stack: ["Python", "Pandas", "Cosine Similarity", "Streamlit"],
    metrics: [
      { value: "05", label: "recommendations" },
      { value: "Live", label: "Streamlit demo" },
      { value: "Top-N", label: "similarity ranking" },
    ],
    note:
      "Built as a focused end-to-end ML application: prepared artifacts, recommendation logic, interface, and cloud deployment.",
    primaryImage: {
      src: "/projects/movie-recommender-ui.webp",
      width: 1484,
      height: 779,
      alt: "Movie Recommender System interface with a cinematic banner and movie selector",
    },
    links: [
      {
        label: "Live demo",
        href: "https://ml-projects-ihkyjv8lbgrv3wf8rwsgfb.streamlit.app/",
      },
      {
        label: "View code",
        href: "https://github.com/Cluemore/ML-projects/tree/main/Movie-Recommender-System",
      },
    ],
  },
] as const;
