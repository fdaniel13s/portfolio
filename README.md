# 🚀 Fernando Daniel Quispe Condori — Data & AI Portfolio

> **Software Engineer & Data/AI Specialist**  
> Especializado en **Data Engineering**, **Data Science & ML en Producción**, y **Sistemas de Inteligencia Artificial Generativa (RAG & Agentes)**.

[![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Python](https://img.shields.io/badge/Python-3.11+-3776AB?style=flat&logo=python&logoColor=white)](https://www.python.org/)
[![Apache Spark](https://img.shields.io/badge/Apache_Spark-Streaming-E25A1C?style=flat&logo=apache-spark&logoColor=white)](https://spark.apache.org/)
[![Kafka](https://img.shields.io/badge/Apache_Kafka-Event_Streams-231F20?style=flat&logo=apache-kafka&logoColor=white)](https://kafka.apache.org/)
[![LangChain](https://img.shields.io/badge/LangChain-GenAI-1C3C3C?style=flat)](https://www.langchain.com/)

---

## 📌 Visión General

Este portafolio profesional ha sido rediseñado con un enfoque de alto impacto en el ecosistema de **Datos e Inteligencia Artificial**. Combina una base sólida en principios de ingeniería de software (Clean Architecture, DDD, APIs de alta concurrencia, CI/CD) con el diseño de plataformas de datos escalables, modelos de Machine Learning explicables y soluciones avanzadas de IA Generativa.

---

## 🏛️ Casos de Estudio y Proyectos Destacados

### 1. 🌾 AgriPredict & CropVision AI (Data Science & Computer Vision)
* **Objetivo:** Detección temprana de patologías foliares y predicción de rendimiento de cosechas mediante modelos de visión artificial y telemetría de campo.
* **Stack:** PyTorch, YOLOv8, FastAPI, PostgreSQL, Docker, Kotlin Jetpack Compose, Vue.js.
* **Impacto:** **94.8% mAP50** en inferencia y estimación de **-35% en pérdidas de cultivo**.

### 2. ⚡ Real-Time FinTech Lakehouse & Fraud Detection (Data Engineering)
* **Objetivo:** Ingesta de eventos transaccionales en tiempo real y arquitectura Lakehouse (Medallion: Bronze/Silver/Gold) para evaluación crediticia de comprobantes de Factoring.
* **Stack:** Apache Kafka, Apache Spark Streaming, Delta Lake, dbt Core, PostgreSQL, DuckDB, Java Spring Boot.
* **Impacto:** **50,000+ eventos/seg**, latencia streaming **< 140ms**, y **100% de calidad validada con dbt**.

### 3. 🤖 DocuMind: Enterprise Factoring & Invoice RAG (Generative AI & LLMs)
* **Objetivo:** Sistema RAG multimodal para extracción estructurada, búsqueda semántica híbrida y auditoría automatizada de comprobantes fiscales no estructurados.
* **Stack:** LangChain, LlamaIndex, Qdrant Vector DB, FastAPI, Pydantic, OpenAI / HuggingFace Embeddings.
* **Impacto:** **98.2% de precisión en extracción de metadatos** y **80% de reducción en tiempos de auditoría**.

### 4. 🛒 EcoMarket: Customer Analytics & MLOps Engine (Data Science & MLOps)
* **Objetivo:** Segmentación RFM automatizada, propensión de compra y recomendador híbrido para productos de rotación rápida.
* **Stack:** Scikit-Learn, LightGBM, XGBoost, SHAP, MLflow, Spring Boot, Angular.
* **Impacto:** **0.912 AUC-ROC** y **+22% en retención de clientes**.

### 5. ☁️ Cloud Data Platform & Automated BI (Data Engineering & Analytics)
* **Objetivo:** Orquestación centralizada de pipelines ELT con validaciones de calidad de datos y tableros interactivos.
* **Stack:** Apache Airflow, dbt Core, Great Expectations, DuckDB, PostgreSQL, Streamlit.
* **Impacto:** **SLA 99.9%** y pruebas continuas de esquemas de datos.

---

## 🛠️ Stack Tecnológico Clasificado

| Dominio | Tecnologías Principales |
| :--- | :--- |
| **Data Engineering** | Apache Spark, PySpark, Apache Kafka, Apache Airflow, dbt Core, Delta Lake, PostgreSQL, DuckDB, Docker |
| **Data Science & ML** | Python, NumPy, Pandas, Scikit-Learn, XGBoost, LightGBM, PyTorch, SHAP, Optuna |
| **Generative AI & LLMs** | LangChain, LlamaIndex, Qdrant Vector DB, Chroma, RAG Híbrido (Dense + BM25), Prompt Engineering |
| **MLOps & Data Quality** | MLflow, Great Expectations, DVC, GitHub Actions CI/CD, AWS (S3, Lambda, EC2) |
| **Visualización & BI** | Streamlit, Power BI, Plotly, Seaborn, Matplotlib, Apache Superset |
| **Software Engineering** | FastAPI, Java Spring Boot, C# .NET Core, Kotlin Compose, TypeScript, Vue.js, Angular |

---

## 🚀 Estructura del Proyecto

```text
portfolio/
├── public/
│   └── images/
│       ├── projects/         # Capturas de casos de estudio
│       └── fernando-quispe.* # Foto de perfil y favicon
├── src/
│   ├── components/
│   │   ├── header.astro            # Barra de navegación con glassmorphism
│   │   ├── hero.astro              # Hero section con métricas de impacto
│   │   ├── data-architecture.astro # Diagrama de capas del ciclo de vida de datos
│   │   ├── skills.astro            # Panel interactivo por dominios de datos
│   │   ├── projects.astro          # Vitrina de proyectos con filtrado dinámico
│   │   ├── experience.astro        # Línea de tiempo académica y profesional
│   │   ├── contact.astro           # Call-to-action con copiado rápido de correo
│   │   ├── footer.astro            # Pie de página y enlaces
│   │   └── theme-toggle.astro      # Selector interactivo de Modo Claro / Oscuro
│   ├── layouts/
│   │   └── main-layout.astro       # Layout principal optimizado con SEO y fuentes
│   └── pages/
│       └── index.astro             # Página de inicio
├── tailwind.config.mjs             # Configuración de Tailwind CSS con paleta Data/AI
└── package.json
```

---

## 💻 Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo local (http://localhost:4321)
npm run dev

# Compilar para producción
npm run build

# Previsualizar la compilación de producción
npm run preview
```

---

## 📬 Contacto & Redes

* **LinkedIn:** [Fernando Quispe](https://www.linkedin.com/in/fernando-quispe-5532901b4/)
* **GitHub:** [@fdaniel13s](https://github.com/fdaniel13s)
* **Correo Electrónico:** [ferndani2718@gmail.com](mailto:ferndani2718@gmail.com)
* **YouTube:** [@danifern2729](https://www.youtube.com/@danifern2729)
* **Currículum Vitae:** [Descargar PDF](https://drive.google.com/file/d/1zpLKsT-llOvlMkJbGSawzjoeXDz0qFOf/view?usp=sharing)

