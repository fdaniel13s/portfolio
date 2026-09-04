/**
 * =========================================================================
 * ARCHIVO DE GESTIÓN DE PROYECTOS (src/data/projects.ts)
 * Mini Casos de Estudio para Software Engineer | Data & AI
 * =========================================================================
 */

export interface ProjectArchitecture {
  sources: string;
  processing: string;
  storage: string;
  intelligence?: string;
  api?: string;
  application?: string;
}

export interface ProjectDecision {
  question: string;
  answer: string;
}

export type ProjectType =
  | 'Academic Project'
  | 'Engineering Project'
  | 'Personal Project'
  | 'Prototype'
  | 'Production-inspired Architecture';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  projectType: ProjectType;
  category: 'data-eng' | 'data-science' | 'gen-ai' | 'software-eng';
  categoryLabel: string;
  image: string;
  problem: string;
  solution: string;
  architecture: ProjectArchitecture;
  decisions: ProjectDecision[];
  results: string[];
  tags: string[];
  github?: string;
  liveDemo?: string;
  featured: boolean;
}

export const CATEGORIES = [
  { id: "all", label: "Todos los Proyectos" },
  { id: "data-eng", label: "Data Engineering" },
  { id: "data-science", label: "Data Science & ML" },
  { id: "gen-ai", label: "Generative AI & LLMs" },
  { id: "software-eng", label: "Software Engineering" }
] as const;

export const projects: Project[] = [
  {
    id: "fintech-lakehouse",
    title: "FinTech Factoring & Lakehouse Architecture",
    shortDescription: "Arquitectura inspirada en Lakehouse con ingesta de eventos, almacenamiento Medallion en Delta Lake y modelado dimensional para operaciones de factoring.",
    projectType: "Production-inspired Architecture",
    category: "data-eng",
    categoryLabel: "Data Engineering",
    image: "/images/projects/fintech-lakehouse.jpg",
    problem: "Las operaciones de factoring y descuento de letras requieren conciliar transacciones de alto volumen y auditar comprobantes sin degradar la base de datos operativa.",
    solution: "Diseño e implementación de un flujo de datos desacoplado donde las transacciones son capturadas por Apache Kafka, procesadas con transformaciones analíticas y organizadas en capas Bronze/Silver/Gold para consultas de negocio.",
    architecture: {
      sources: "Eventos transaccionales de facturas y letras emitidas (API REST / DB)",
      processing: "Apache Kafka (buffer de eventos) + transformaciones en Apache Spark y dbt",
      storage: "Delta Lake (capas Medallion: Bronze raw, Silver limpio, Gold métricas)",
      intelligence: "Reglas de validación contable y scoring de riesgo crediticio",
      api: "API de consulta analítica y reportería",
      application: "Tableros de control financiero y conciliación de cobranza"
    },
    decisions: [
      {
        question: "¿Por qué desacoplar la ingesta transaccional del pipeline analítico?",
        answer: "Para proteger la base de datos OLTP de bloqueos y sobrecarga durante conciliaciones masivas, garantizando que el registro de facturas mantenga alta disponibilidad."
      },
      {
        question: "¿Por qué estructura Medallion (Bronze / Silver / Gold)?",
        answer: "Bronze preserva el histórico inmutable en caso de auditoría o necesidad de reprocesamiento; Silver estandariza tipos y elimina duplicados; Gold expone tablas agregadas para reportes rápidos."
      },
      {
        question: "¿Por qué dbt para la capa de transformación final?",
        answer: "Permite versionar modelos analíticos en SQL bajo control de versiones Git, garantizando pruebas de integridad referencial y documentación de linaje."
      }
    ],
    results: [
      "Pipeline conceptual y funcional para la ingesta y estructuración de comprobantes financieros.",
      "Separación limpia de responsabilidades entre transacciones de negocio y analítica agregada.",
      "Modelos dimensionales testeados para análisis de cobranza y mora."
    ],
    tags: ["Apache Kafka", "Apache Spark", "Delta Lake", "dbt Core", "PostgreSQL", "Docker", "Java Spring Boot"],
    github: "https://github.com/fdaniel13s/RESTFULApi-si642-gestor-factoring",
    featured: true
  },
  {
    id: "agri-predict",
    title: "Chaquitaclla: Telemetría Agrícola & Visión Artificial",
    shortDescription: "Plataforma web y móvil para monitoreo agrícola con arquitectura DDD, integración de telemetría de campo y prototipo de detección foliar con YOLOv8.",
    projectType: "Academic Project",
    category: "data-science",
    categoryLabel: "IoT & Computer Vision",
    image: "/images/projects/agri-cropvision.jpg",
    problem: "Agricultores y técnicos de campo requieren registrar condiciones del cultivo y detectar tempranamente afecciones foliares sin depender de costosos laboratorios externos.",
    solution: "Sistema end-to-end con backend robusto en C# .NET Core bajo Domain-Driven Design (DDD), aplicación móvil nativa en Android para captura en terreno y prototipo de visión computacional para inferencia de anomalías.",
    architecture: {
      sources: "Lecturas de telemetría de suelo/clima y fotos capturadas en campo",
      processing: "Normalización en backend .NET y pipeline de inferencia visual",
      storage: "PostgreSQL (datos relacionales) y almacenamiento de imágenes",
      intelligence: "Prototipo de detección de síntomas foliares con modelo YOLOv8 (PyTorch)",
      api: "API RESTful con C# .NET Core siguiendo principios SOLID y DDD",
      application: "App móvil nativa en Kotlin (Jetpack Compose) + Panel web en Vue.js"
    },
    decisions: [
      {
        question: "¿Por qué Domain-Driven Design (DDD) en el backend?",
        answer: "Permite encapsular la lógica agronómica en entidades de dominio independientes de la base de datos o el framework, facilitando pruebas unitarias y extensiones."
      },
      {
        question: "¿Por qué Jetpack Compose en Kotlin para la app móvil?",
        answer: "Acelera el desarrollo de interfaces móviles reactivas y asegura un rendimiento óptimo en dispositivos móviles utilizados en campo."
      },
      {
        question: "¿Por qué YOLOv8 para el prototipo visual?",
        answer: "Provee un balance idóneo entre velocidad de inferencia en dispositivos de recursos moderados y exactitud en la localización de síntomas sobre hojas."
      }
    ],
    results: [
      "API RESTful completa con casos de uso de dominio agrícola testeados.",
      "App móvil nativa en Kotlin funcional con sincronización hacia el backend.",
      "Pipeline de entrenamiento y evaluación de modelo de detección foliar."
    ],
    tags: ["C#", ".NET Core", "Kotlin", "Jetpack Compose", "Vue.js", "Python", "PyTorch", "YOLOv8", "PostgreSQL", "Docker"],
    github: "https://github.com/fdaniel13s/RESTfulAPI-Chaquitaclla-NETCore",
    featured: true
  },
  {
    id: "documind-rag",
    title: "DocuMind: Asistente RAG para Documentos Financieros",
    shortDescription: "Prototipo de asistente con recuperación semántica aumentada (RAG) y bases vectoriales para consulta y validación estructurada de comprobantes fiscales.",
    projectType: "Prototype",
    category: "gen-ai",
    categoryLabel: "Generative AI & LLMs",
    image: "/images/projects/documind-rag.jpg",
    problem: "La revisión manual de comprobantes tributarios, contratos y facturas en formato no estructurado (PDF/imágenes) es propensa a omisiones y requiere validación contra normativas.",
    solution: "Asistente inteligente que utiliza embeddings densos e indexación en base de datos vectorial para responder preguntas en lenguaje natural sobre documentos cargados, extrayendo campos clave con tipado estricto en Pydantic.",
    architecture: {
      sources: "Comprobantes fiscales y contratos en formato PDF / texto",
      processing: "Extracción, particionado semántico (chunking) y generación de embeddings",
      storage: "Base de datos vectorial Qdrant / Chroma para almacenamiento de vectores",
      intelligence: "Modelos de lenguaje (OpenAI / HuggingFace) integrados mediante LangChain",
      api: "Microservicio backend con FastAPI y esquemas estructurados Pydantic",
      application: "Interfaz web interactiva de consulta documental"
    },
    decisions: [
      {
        question: "¿Por qué RAG en lugar de fine-tuning?",
        answer: "RAG elimina la necesidad de costosos re-entrenamientos y previene alucinaciones, garantizando que cada respuesta cite fragmentos verificables del documento original."
      },
      {
        question: "¿Por qué Qdrant como base de datos vectorial?",
        answer: "Ofrece búsquedas rápidas por similitud semántica combinadas con filtrado eficiente por metadatos (tipo de factura, fecha, emisor)."
      },
      {
        question: "¿Por qué esquemas Pydantic para estructurar respuestas?",
        answer: "Garantiza contratos de salida estrictos con tipos de datos definidos (montos, impuestos, fechas), facilitando la integración con sistemas downstream."
      }
    ],
    results: [
      "Pipeline funcional de extracción, chunking e indexación semántica.",
      "Respuestas contextualizadas basadas exclusivamente en documentos fuente.",
      "Extracción validada de metadatos tributarios clave mediante JSON Schema."
    ],
    tags: ["Python", "FastAPI", "LangChain", "Qdrant", "Pydantic", "OpenAI API", "Docker"],
    github: "https://github.com/fdaniel13s/portfolio",
    featured: true
  },
  {
    id: "ecomarket-analytics",
    title: "EcoMarket: Plataforma Retail & Analítica de Clientes",
    shortDescription: "Aplicación de comercio electrónico con backend en Spring Boot, frontend Angular e integración de análisis de comportamiento y retención de clientes.",
    projectType: "Academic Project",
    category: "data-science",
    categoryLabel: "Software Eng & ML",
    image: "/images/projects/ecomarket-churn.jpg",
    problem: "Los comercios minoristas requieren fidelizar compradores recurrentes y predecir posibles deserciones basándose en patrones históricos de compra y frecuencia de visitas.",
    solution: "Plataforma completa de comercio electrónico para venta de productos de rotación rápida, acompañada de un pipeline de análisis exploratorio, cálculo de métricas RFM y modelos de propensión con Scikit-Learn y XGBoost.",
    architecture: {
      sources: "Registros transaccionales de compras, usuarios y carritos abandonados",
      processing: "Limpieza de datos, ingeniería de variables RFM (Recency, Frequency, Monetary)",
      storage: "PostgreSQL para transacciones OLTP y archivos estructurados para analítica",
      intelligence: "Modelos de clasificación Scikit-Learn / XGBoost con explicabilidad SHAP",
      api: "API RESTful construida con Java y Spring Boot",
      application: "Interfaz de usuario web reactiva desarrollada en Angular"
    },
    decisions: [
      {
        question: "¿Por qué segmentación RFM previa al modelado?",
        answer: "Proporciona una referencia de negocio estándar que sintetiza el comportamiento histórico del cliente antes de alimentar algoritmos supervisados."
      },
      {
        question: "¿Por qué análisis de importancia con SHAP?",
        answer: "Permite transparentar qué variables (días desde la última compra, ticket promedio) influyen con mayor fuerza en la probabilidad de retención o abandono."
      },
      {
        question: "¿Por qué desacoplar backend transaccional de analítica?",
        answer: "Permite que la tienda opere sin fricción en Java Spring Boot mientras los experimentos de Machine Learning se iteran en notebooks reproducibles de Python."
      }
    ],
    results: [
      "Plataforma e-commerce operativa con autenticación, catálogo y checkout.",
      "Pipeline de preprocesamiento e ingeniería de variables con validación cruzada.",
      "Identificación clara de factores que inciden en el abandono mediante gráficos SHAP."
    ],
    tags: ["Java", "Spring Boot", "Angular", "TypeScript", "Python", "Scikit-Learn", "XGBoost", "PostgreSQL"],
    github: "https://github.com/fdaniel13s/RESTfulAPI-Ecomarket-SpringBoot.git",
    featured: true
  },
  {
    id: "cloud-data-platform",
    title: "Data Pipeline & Automated BI Analytics",
    shortDescription: "Prototipo de pipeline analítico orquestado con Apache Airflow, transformaciones SQL en dbt Core, validación de calidad y modelado dimensional.",
    projectType: "Engineering Project",
    category: "data-eng",
    categoryLabel: "Data Engineering & BI",
    image: "/images/projects/cloud-data-platform.jpg",
    problem: "Tableros de control con datos desactualizados o inconsistentes debido a la falta de orquestación centralizada y ausencia de validaciones automatizadas de esquemas.",
    solution: "Flujo ELT automatizado que orquesta la extracción y carga mediante DAGs de Airflow, ejecuta transformaciones modulares con dbt Core, valida integridad de datos y expone métricas para visualización en Power BI.",
    architecture: {
      sources: "Datasets operacionales en CSV/Parquet y tablas relacionales",
      processing: "DAGs de orquestación en Apache Airflow y transformaciones SQL en dbt Core",
      storage: "DuckDB (motor OLAP embebido para desarrollo local) y PostgreSQL",
      intelligence: "Validaciones automáticas de calidad de datos con Great Expectations y tests de dbt",
      api: "Consultas analíticas consolidadas para reportería",
      application: "Modelado para consumo en Power BI / Streamlit"
    },
    decisions: [
      {
        question: "¿Por qué dbt para la transformación de datos?",
        answer: "Introduce buenas prácticas de software (modularidad, control de versiones en Git, tests automáticos de claves y no-nulos) dentro del flujo SQL analítico."
      },
      {
        question: "¿Por qué Airflow para orquestación?",
        answer: "Ofrece manejo robusto de grafos de dependencia (DAGs), programación periódica de cargas y reintentos ante fallas transitorias."
      },
      {
        question: "¿Por qué DuckDB en entornos analíticos locales?",
        answer: "Permite ejecutar consultas analíticas columnares de alta velocidad directamente sobre archivos Parquet sin la sobrecarga de un cluster distribuido."
      }
    ],
    results: [
      "Pipeline ELT modular con dependencias de tareas orquestadas de forma reproducible.",
      "Validaciones continuas de unicidad, no-nulidad e integridad referencial.",
      "Modelo dimensional en estrella preparado para consumo de métricas de negocio."
    ],
    tags: ["Apache Airflow", "dbt Core", "Great Expectations", "DuckDB", "PostgreSQL", "Power BI", "Docker"],
    github: "https://github.com/fdaniel13s/portfolio",
    featured: true
  },
  {
    id: "credit-risk-ai",
    title: "CreditRiskAI: Explainable ML Credit Scoring",
    shortDescription: "Prototipo de evaluación de riesgo crediticio mediante modelos supervisados y análisis de explicabilidad con SHAP para decisiones transparentes.",
    projectType: "Personal Project",
    category: "data-science",
    categoryLabel: "Machine Learning",
    image: "/images/projects/credit-risk-ai.jpg",
    problem: "Los modelos de scoring crediticio de caja negra dificultan la justificación de decisiones ante reguladores y solicitantes de crédito.",
    solution: "Pipeline de Machine Learning para clasificación de riesgo utilizando algoritmos de gradiente (CatBoost / Scikit-Learn), integrando explicabilidad local y global con SHAP para desglosar la contribución de cada variable.",
    architecture: {
      sources: "Datasets de historial financiero y características de solicitantes",
      processing: "Pipeline de preprocesamiento, codificación de variables y balanceo",
      storage: "Artefactos de modelos serializados y tablas de evaluación",
      intelligence: "Clasificador CatBoost / Random Forest con cálculo de valores SHAP",
      api: "Endpoint de inferencia en FastAPI con respuesta estructurada",
      application: "Interfaz interactiva en Streamlit para simulación de escenarios"
    },
    decisions: [
      {
        question: "¿Por qué CatBoost para datos tabulares financieros?",
        answer: "Maneja de manera nativa variables categóricas, ofrece excelente rendimiento frente a datos tabulares no lineales y minimiza el sobreajuste."
      },
      {
        question: "¿Por qué SHAP para interpretabilidad?",
        answer: "Proporciona fundamentos basados en teoría de juegos para explicar exactamente qué factores individuales influyeron en la probabilidad de riesgo de cada caso."
      }
    ],
    results: [
      "Pipeline reproducible de entrenamiento y validación cruzada estratificada.",
      "Módulo de inferencia que devuelve tanto el scoring como los factores de peso individuales.",
      "Dashboard interactivo para exploración de casos y análisis de sensibilidad."
    ],
    tags: ["Python", "CatBoost", "Scikit-Learn", "SHAP", "FastAPI", "Streamlit"],
    github: "https://github.com/fdaniel13s/portfolio",
    featured: false
  }
];
