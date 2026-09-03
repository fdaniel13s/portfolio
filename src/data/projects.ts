/**
 * =========================================================================
 * ARCHIVO DE GESTIÓN DE PROYECTOS (src/data/projects.ts)
 * =========================================================================
 * 
 * 💡 CÓMO ACTUALIZAR TUS PROYECTOS:
 * 1. Para cambiar una FOTO:
 *    - Coloca tu nueva imagen en la carpeta: public/images/projects/
 *    - En este archivo, cambia la propiedad "image" con la ruta: "/images/projects/tu-imagen.png"
 * 
 * 2. Para cambiar la DESCRIPCIÓN o TÍTULO:
 *    - Edita directamente los campos "title" y "description".
 * 
 * 3. Para agregar un NUEVO PROYECTO:
 *    - Copia uno de los bloques y pégalo en la lista con un nuevo "id".
 * =========================================================================
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'data-eng' | 'data-science' | 'gen-ai' | 'software-eng';
  categoryLabel: string;
  image: string; // Ruta de la imagen (ej: "/images/projects/mi-foto.png")
  tags: string[]; // Lista de tecnologías
  github?: string; // Enlace al repositorio GitHub (opcional)
  liveDemo?: string; // Enlace a la demo en vivo o despliegue (opcional)
  featured?: boolean; // true para destacar en la parte superior
  metrics?: { label: string; value: string }; // Métrica clave destacada (opcional)
}

export const CATEGORIES = [
  { id: "all", label: "Todos los Proyectos" },
  { id: "data-eng", label: "Data Engineering" },
  { id: "data-science", label: "Data Science & ML" },
  { id: "gen-ai", label: "Generative AI & LLMs" },
] as const;

export const projects: Project[] = [
  {
    id: "fintech-lakehouse",
    title: "Real-Time FinTech Lakehouse & Fraud Detection",
    description: "Pipeline streaming con Arquitectura Medallion en Delta Lake y Apache Kafka para validación de facturas comerciales (Factoring), detección de anomalías y modelado analítico con dbt.",
    category: "data-eng",
    categoryLabel: "Data Engineering",
    image: "/images/projects/fintech-lakehouse.jpg",
    tags: ["Apache Kafka", "Apache Spark", "Delta Lake", "dbt Core", "PostgreSQL", "Docker"],
    github: "https://github.com/fdaniel13s/RESTFULApi-si642-gestor-factoring",
    featured: true,
    metrics: { label: "Throughput", value: "50k+ ev/s" }
  },
  {
    id: "agri-predict",
    title: "AgriPredict & CropVision AI",
    description: "Sistema de visión por computadora y analítica predictiva para detección temprana de plagas agrícolas y monitoreo de estrés hídrico mediante telemetría IoT y modelos YOLOv8.",
    category: "data-science",
    categoryLabel: "Data Science & Vision",
    image: "/images/projects/agri-cropvision.jpg",
    tags: ["Python", "PyTorch", "YOLOv8", "FastAPI", "PostgreSQL", "Vue.js", "Docker"],
    github: "https://github.com/fdaniel13s/RESTfulAPI-Chaquitaclla-NETCore",
    featured: true,
    metrics: { label: "Precisión mAP50", value: "94.8%" }
  },
  {
    id: "documind-rag",
    title: "DocuMind: Enterprise Factoring & Invoice RAG",
    description: "Asistente inteligente con RAG multimodal y bases de datos vectoriales para análisis automatizado, extracción de entidades y auditoría tributaria sobre comprobantes fiscales y contratos.",
    category: "gen-ai",
    categoryLabel: "Generative AI & LLMs",
    image: "/images/projects/documind-rag.jpg",
    tags: ["LangChain", "LlamaIndex", "Qdrant Vector DB", "FastAPI", "Python", "Pydantic"],
    github: "https://github.com/fdaniel13s/portfolio",
    featured: true,
    metrics: { label: "Ahorro de Tiempo", value: "80%" }
  },
  {
    id: "ecomarket-analytics",
    title: "EcoMarket: Churn Prediction & Recommendation",
    description: "Plataforma de predicción de abandono de clientes (Churn) con XGBoost/LightGBM, segmentación RFM explicable mediante SHAP y motor de recomendaciones de ofertas en tiempo real.",
    category: "data-science",
    categoryLabel: "Data Science & MLOps",
    image: "/images/projects/ecomarket-churn.jpg",
    tags: ["Python", "Scikit-Learn", "XGBoost", "SHAP", "MLflow", "Spring Boot", "Angular"],
    github: "https://github.com/fdaniel13s/RESTfulAPI-Ecomarket-SpringBoot.git",
    featured: false,
    metrics: { label: "AUC-ROC Churn", value: "0.912" }
  },
  {
    id: "cloud-data-platform",
    title: "Cloud Data Platform & Automated BI Analytics",
    description: "Orquestación centralizada de flujos de datos con Apache Airflow, validaciones automatizadas de calidad con Great Expectations y modelado analítico dimensional con dbt Core.",
    category: "data-eng",
    categoryLabel: "Data Engineering",
    image: "/images/projects/cloud-data-platform.jpg",
    tags: ["Apache Airflow", "dbt Core", "Great Expectations", "DuckDB", "PostgreSQL", "Docker"],
    github: "https://github.com/fdaniel13s/portfolio",
    featured: false,
    metrics: { label: "SLA Disponibilidad", value: "99.9%" }
  },
  {
    id: "credit-risk-ai",
    title: "CreditRiskAI: Explainable ML Credit Scoring",
    description: "Motor de scoring crediticio con modelos ensamblados (CatBoost + Random Forest) y explicabilidad algorítmica total con SHAP para transparencia y cumplimiento normativo financiero.",
    category: "data-science",
    categoryLabel: "Machine Learning & Stats",
    image: "/images/projects/credit-risk-ai.jpg",
    tags: ["Python", "CatBoost", "Scikit-Learn", "SHAP", "FastAPI", "Streamlit"],
    github: "https://github.com/fdaniel13s/portfolio",
    featured: false,
    metrics: { label: "Gini Score", value: "0.78" }
  }
];
