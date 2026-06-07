// ===== PROJECTS DATA =====
// Ordered: DE → CE → DS → AI → ML
const projects = [

  // ══════════════════════════════════════════
  // DATA ENGINEERING (3 projects)
  // ══════════════════════════════════════════
  {
    category: 'de',
    icon: 'fas fa-stream',
    title: 'Kafka Real-Time Stock Market Pipeline',
    desc: 'End-to-end real-time data pipeline processing live stock market feeds using Apache Kafka on AWS EC2. Data streams through S3, is catalogued by Glue, and queried via Athena for instant analytics and reporting.',
    arch: ['Kafka Producer', 'EC2 Broker', 'S3 Data Lake', 'Glue Catalog', 'Athena'],
    tags: ['Apache Kafka', 'AWS EC2', 'Amazon S3', 'AWS Glue', 'Athena', 'Python'],
    link: 'https://github.com/Chile93/Kafka-Stock-Market-Data-Enginnering-Project',
    lang: 'jupyter', langLabel: 'Jupyter'
  },
  {
    category: 'de',
    icon: 'fab fa-youtube',
    title: 'AWS Serverless YouTube Analytics Pipeline',
    desc: 'Scalable serverless data pipeline on AWS to ingest, transform, and analyse YouTube trending data. Leverages AWS Glue, S3, Athena, Lambda, and QuickSight to deliver insights on video trends, views, likes, and engagement patterns.',
    arch: ['S3 Ingest', 'Lambda Trigger', 'Glue ETL', 'Athena Query', 'QuickSight'],
    tags: ['AWS Glue', 'AWS Lambda', 'Amazon S3', 'Athena', 'QuickSight', 'Serverless'],
    link: 'https://github.com/Chile93/AWS-Data-Pipeline-for-YouTube-Analytics',
    lang: 'aws', langLabel: 'AWS'
  },
  {
    category: 'de',
    icon: 'fas fa-water',
    title: 'Azure Water Quality Pipeline — Medallion Architecture',
    desc: 'End-to-end Azure data pipeline processing 1M+ rows of water sensor data from European countries through a Bronze, Silver, and Gold medallion architecture. Infrastructure provisioned via Terraform, transformations built in Azure Databricks with Scala and PySpark, and business insights delivered via Power BI DAX dashboards. Demonstrates production-grade lakehouse design and IaC best practices.',
    arch: ['ADF Ingest', 'Bronze Layer', 'Silver Layer', 'Gold Layer', 'Power BI'],
    tags: ['Azure Databricks', 'Azure Data Factory', 'Terraform', 'Scala', 'PySpark', 'Power BI', 'DAX', 'Medallion Architecture', 'Data Lake Gen2'],
    link: 'https://github.com/Chile93/Water-Quality-Data-Pipeline-using-Azure-Medallion-Architecture',
    lang: 'azure', langLabel: 'Azure'
  },
  {
    category: 'de',
    icon: 'fas fa-music',
    title: 'Spotify Data Pipeline with Apache Airflow',
    desc: 'Automated Spotify API data extraction and ingestion pipeline orchestrated by Apache Airflow running on AWS EC2. Extracted track, artist, and playlist data is transformed with Python and stored in Amazon S3 for downstream analytics. Demonstrates production-grade workflow orchestration, API integration, and scheduled pipeline execution.',
    arch: ['Spotify API', 'Airflow DAG', 'EC2 Orchestration', 'Python Transform', 'S3 Storage'],
    tags: ['Apache Airflow', 'AWS EC2', 'Amazon S3', 'Python', 'REST API', 'ETL', 'Orchestration'],
    link: 'https://github.com/Chile93/Spotify-Airflow-Data-Pipeline',
    lang: 'python', langLabel: 'Python'
  },
    desc: 'Full end-to-end Azure data engineering project ingesting, transforming, and analysing Olympic Games data. Built with Azure Data Factory for orchestration, Azure Data Lake Gen2 for storage, Azure Databricks for transformation, and Azure Synapse Analytics for querying and reporting.',
    arch: ['ADF Ingest', 'Data Lake Gen2', 'Databricks Transform', 'Synapse Analytics', 'Power BI'],
    tags: ['Azure Data Factory', 'Azure Databricks', 'Azure Synapse', 'Data Lake Gen2', 'Power BI'],
    link: 'https://github.com/Chile93/Olympic-Data-Analytics-Azure-End-To-End-Data-Engineering-Project',
    lang: 'azure', langLabel: 'Azure'
  },

  // ══════════════════════════════════════════
  // CLOUD ARCHITECTURE (6 projects)
  // ══════════════════════════════════════════
  {
    category: 'ce',
    icon: 'fas fa-shield-alt',
    title: 'Highly Available AWS Architecture (Reliability Pillar)',
    desc: 'Designed and deployed a production-grade, highly available architecture for MediCare Hub, a medical records application, using multi-AZ deployments, Auto Scaling groups, and RDS Multi-AZ failover aligned with the AWS Well-Architected Reliability Pillar.',
    arch: ['ALB', 'Auto Scaling', 'Multi-AZ EC2', 'RDS Failover', 'CloudWatch'],
    tags: ['EC2', 'ALB', 'Auto Scaling', 'RDS Multi-AZ', 'CloudWatch', 'Route 53'],
    link: 'https://github.com/Chile93/Highly-Available-Architecture-on-AWS-Reliability-Pillar-',
    lang: 'shell', langLabel: 'Shell'
  },
  {
    category: 'ce',
    icon: 'fas fa-dollar-sign',
    title: 'Automated Cost Governance on AWS (Cost Optimisation Pillar)',
    desc: 'Automated governance workflow that detects idle EC2 instances, unattached EBS volumes, outdated snapshots, and load balancers with no traffic. Recommends and safely removes unused resources with full audit controls and SNS notifications.',
    arch: ['CloudWatch Events', 'Lambda', 'SNS Alert', 'Approval Gate', 'Auto Cleanup'],
    tags: ['AWS Lambda', 'CloudWatch', 'SNS', 'Cost Explorer', 'IAM', 'EBS'],
    link: 'https://github.com/Chile93/Automated-Cost-Governance-on-AWS-Cost-Optimization-Pillar-',
    lang: 'html', langLabel: 'HTML'
  },
  {
    category: 'ce',
    icon: 'fas fa-boxes',
    title: 'Serverless Inventory Management (Performance Efficiency Pillar)',
    desc: 'Fully serverless inventory management system built on AWS, demonstrating the Performance Efficiency Pillar of the Well-Architected Framework. Uses Lambda, DynamoDB, API Gateway, and S3 to deliver a scalable, cost-efficient solution with zero server management.',
    arch: ['API Gateway', 'Lambda', 'DynamoDB', 'S3', 'CloudFront'],
    tags: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'S3', 'CloudFront', 'Serverless'],
    link: 'https://github.com/Chile93/Serverless-Inventory-Management-on-AWS-Performance-Efficiency-Pillar-',
    lang: 'aws', langLabel: 'AWS'
  },
  {
    category: 'ce',
    icon: 'fab fa-slack',
    title: 'Real-Time AWS Operations from Slack (Operational Excellence Pillar)',
    desc: 'ChatOps solution enabling real-time AWS infrastructure management directly from Slack. Integrates AWS Lambda, API Gateway, and Systems Manager to allow teams to trigger deployments, query resource status, and manage incidents without leaving their communication platform.',
    arch: ['Slack Command', 'API Gateway', 'Lambda', 'Systems Manager', 'CloudWatch'],
    tags: ['Slack API', 'AWS Lambda', 'API Gateway', 'Systems Manager', 'ChatOps'],
    link: 'https://github.com/Chile93/Real-Time-AWS-Operations-from-Slack-Operational-Excellence-Pillar-',
    lang: 'aws', langLabel: 'AWS'
  },
  {
    category: 'ce',
    icon: 'fas fa-lock',
    title: 'Secure Application Deployment on AWS (Security Pillar)',
    desc: 'Secure, multi-tier application deployment implementing defence-in-depth principles aligned with the AWS Well-Architected Security Pillar. Covers VPC segmentation, private subnets, WAF, AWS Shield, GuardDuty, Security Hub, and encrypted data at rest and in transit.',
    arch: ['WAF / Shield', 'VPC Segmentation', 'GuardDuty', 'Security Hub', 'KMS Encryption'],
    tags: ['VPC', 'WAF', 'GuardDuty', 'Security Hub', 'KMS', 'IAM', 'AWS Shield'],
    link: 'https://github.com/Chile93/Secure-Application-Deployment-on-AWS-Security-Pillar-',
    lang: 'shell', langLabel: 'Shell'
  },
  {
    category: 'ce',
    icon: 'fas fa-graduation-cap',
    title: 'Cloud Developer Nanodegree Projects',
    desc: 'Full suite of cloud-native application projects from the Udacity Cloud Developer Nanodegree, covering serverless REST APIs, containerised microservices on Kubernetes, and CI/CD pipelines with AWS CodePipeline and GitHub Actions.',
    arch: ['Serverless API', 'Docker', 'EKS / Kubernetes', 'CI/CD Pipeline', 'AWS'],
    tags: ['TypeScript', 'Node.js', 'Docker', 'Kubernetes', 'AWS CodePipeline', 'EKS'],
    link: 'https://github.com/Chile93/cloud-developer',
    lang: 'ts', langLabel: 'TypeScript'
  },

  // ══════════════════════════════════════════
  // DATA SCIENCE (7 projects)
  // ══════════════════════════════════════════
  {
    category: 'ds',
    icon: 'fas fa-flask',
    title: 'WorldQuant University — Applied Data Science Lab',
    desc: 'Completed eight end-to-end applied data science projects (90%+ pass threshold each) spanning housing markets, air quality, earthquake damage, bankruptcy prediction, customer segmentation, A/B testing, and stock volatility forecasting across Mexico, Argentina, Kenya, Nepal, Poland, the US, and India. Applied Linear Regression, ARMA/ARIMA/GARCH, LSTM, GRU, BERT, GNN, K-Means/PCA, Random Forest, Gradient Boosting, chi-square A/B testing, and API design, accessing data from CSV, SQL, MongoDB, and REST APIs.',
    arch: ['Data Acquisition', 'EDA / Cleaning', 'ML Modelling', 'Evaluation', 'API / Dashboard'],
    tags: ['Python', 'SQL', 'MongoDB', 'ARIMA', 'GARCH', 'LSTM', 'BERT', 'K-Means', 'A/B Testing', 'API Design'],
    link: 'https://www.credly.com/badges/c15ebc7c-0d4c-4a95-89cc-6b6fd599ba69/linked_in_profile',
    lang: 'python', langLabel: 'Python'
  },
  {
    category: 'ds',
    icon: 'fas fa-chart-line',
    title: 'Financial Sentiment Analysis and Market Forecasting',
    desc: 'MSc dissertation project empowering market forecasting and investment decisions through advanced NLP sentiment analysis on financial news and social media. Combines BERT-based models with time-series forecasting to predict market movements.',
    arch: ['News / Twitter', 'NLP / BERT', 'Sentiment Score', 'Time Series', 'Forecast'],
    tags: ['Python', 'BERT', 'NLP', 'Time Series', 'Transformers', 'Jupyter'],
    link: 'https://github.com/Chile93/Financial-Sentiment-Analysis',
    lang: 'jupyter', langLabel: 'Jupyter'
  },
  {
    category: 'ds',
    icon: 'fas fa-credit-card',
    title: 'Credit Card Churn Prediction',
    desc: 'Machine learning model predicting customer churn for a financial institution using ensemble methods. Achieved high precision with XGBoost and Random Forest, with SHAP explainability to provide transparent, actionable insights for business stakeholders.',
    arch: ['EDA', 'Feature Engineering', 'XGBoost / RF', 'SHAP Explainability', 'Insights'],
    tags: ['XGBoost', 'Random Forest', 'SHAP', 'Scikit-learn', 'Python', 'Jupyter'],
    link: 'https://github.com/Chile93/Credit-Card-Churn-Users-Prediction',
    lang: 'jupyter', langLabel: 'Jupyter'
  },
  {
    category: 'ds',
    icon: 'fas fa-users',
    title: 'Customer Behaviour Segmentation',
    desc: 'Advanced clustering analysis to segment customers by purchasing behaviour, enabling targeted marketing strategies. Applied K-Means, DBSCAN, and hierarchical clustering with rich interactive visualisations and business recommendations.',
    arch: ['Raw Data', 'Feature Engineering', 'Clustering', 'Segment Profiles', 'Strategy'],
    tags: ['Python', 'K-Means', 'DBSCAN', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
    link: 'https://github.com/Chile93/Customer-Behaviour-Segmentation',
    lang: 'python', langLabel: 'Python'
  },
  {
    category: 'ds',
    icon: 'fas fa-fish',
    title: 'Phishing Website Detection',
    desc: 'Machine learning classifier detecting malicious phishing websites by analysing URL structure, domain features, and HTML content. Trained on a large labelled dataset using Random Forest and Gradient Boosting, achieving high accuracy in identifying fraudulent sites.',
    arch: ['URL Feature Extraction', 'Feature Engineering', 'Classification', 'Evaluation', 'Deployment'],
    tags: ['Python', 'Random Forest', 'Gradient Boosting', 'Scikit-learn', 'Cybersecurity', 'ML'],
    link: 'https://github.com/Chile93/Phishing-Website-Detection',
    lang: 'python', langLabel: 'Python'
  },
  {
    category: 'ds',
    icon: 'fas fa-envelope-open-text',
    title: 'Phishing Email Detection',
    desc: 'NLP-based classifier identifying phishing emails using text feature extraction and machine learning. Applies TF-IDF vectorisation and ensemble classifiers to detect social engineering attacks, demonstrating applied NLP skills in a real-world cybersecurity context.',
    arch: ['Email Corpus', 'TF-IDF / NLP', 'Feature Extraction', 'Classifier', 'Evaluation'],
    tags: ['Python', 'NLP', 'TF-IDF', 'Scikit-learn', 'Cybersecurity', 'Text Classification'],
    link: 'https://github.com/Chile93/Phishing-Email-Detection',
    lang: 'python', langLabel: 'Python'
  },
  {
    category: 'ds',
    icon: 'fas fa-heartbeat',
    title: 'Heart Disease Prediction',
    desc: 'Clinical machine learning model predicting the likelihood of heart disease using patient health metrics. Demonstrates strong knowledge of healthcare data, feature engineering, and model interpretability for medical decision support applications.',
    arch: ['Clinical Data', 'Feature Engineering', 'Classification', 'Model Evaluation', 'Insights'],
    tags: ['Python', 'Scikit-learn', 'Logistic Regression', 'Random Forest', 'Healthcare ML'],
    link: 'https://github.com/Chile93/Heart-Disease-Prediction',
    lang: 'python', langLabel: 'Python'
  },
  {
    category: 'ds',
    icon: 'fas fa-shopping-cart',
    title: 'E-Commerce Sales and Discount Analysis',
    desc: 'MSc Big Data and Business Intelligence project analysing e-commerce sales and discount patterns at scale. Built a full analytical pipeline from raw transactional data to actionable business insights on pricing strategy and revenue impact.',
    arch: ['Raw Data', 'ETL Pipeline', 'Statistical Analysis', 'Visualisation', 'Insights'],
    tags: ['Python', 'SQL', 'Big Data', 'Business Intelligence', 'Visualisation', 'Statistics'],
    link: 'https://github.com/Chile93/E-Commerce-Analysis-on-Sales-Discount',
    lang: 'python', langLabel: 'Python'
  },

  // ══════════════════════════════════════════
  // AGENTIC AI (3 projects)
  // ══════════════════════════════════════════
  {
    category: 'ai',
    icon: 'fas fa-comments',
    title: 'Product Recommendation Chatbot with Amazon Bedrock Agents',
    desc: 'Intelligent product recommendation chatbot built using Amazon Bedrock Agents and foundation models. The agent autonomously retrieves product data, understands user preferences through natural conversation, and delivers personalised recommendations using RAG and tool-use capabilities.',
    arch: ['User Query', 'Bedrock Agent', 'Knowledge Base / RAG', 'Lambda Tool', 'Response'],
    tags: ['Amazon Bedrock', 'Bedrock Agents', 'RAG', 'AWS Lambda', 'Foundation Models', 'Agentic AI'],
    link: 'https://github.com/Chile93/Product-Recommendation-chatbot-with-Amazon-Bedrock-Agents',
    lang: 'aws', langLabel: 'AWS'
  },
  {
    category: 'ai',
    icon: 'fas fa-cloud-sun',
    title: 'Weather AI Agent using AWS Bedrock',
    desc: 'Autonomous AI agent that retrieves real-time weather data and delivers intelligent, context-aware forecasts using AWS Bedrock and foundation models. Demonstrates agentic tool use, function calling, and multi-step reasoning to answer complex weather-related queries.',
    arch: ['User Query', 'Bedrock LLM', 'Tool Calling', 'Weather API', 'Structured Response'],
    tags: ['Amazon Bedrock', 'Agentic AI', 'Tool Use', 'Function Calling', 'AWS Lambda', 'Python'],
    link: 'https://github.com/Chile93/Weather-AI-Agent-using-AWS-Bedrock',
    lang: 'aws', langLabel: 'AWS'
  },
  {
    category: 'ai',
    icon: 'fas fa-robot',
    title: 'Flappy Kiro: AI-Assisted Game Development',
    desc: 'Arcade-style endless runner game built entirely using Kiro, an agentic AI IDE. Demonstrates practical knowledge of agentic AI workflows, prompt engineering, iterative AI-assisted development, and deploying a complete application from concept to production.',
    arch: ['Prompt Design', 'Kiro Agent', 'Code Generation', 'Iteration', 'Deployment'],
    tags: ['Agentic AI', 'Kiro IDE', 'JavaScript', 'HTML5 Canvas', 'Prompt Engineering'],
    link: 'https://github.com/Chile93/Flappy-Kiro',
    lang: 'html', langLabel: 'HTML'
  },

  // ══════════════════════════════════════════
  // MACHINE LEARNING (4 projects)
  // ══════════════════════════════════════════
  {
    category: 'ml',
    icon: 'fas fa-map-marker-alt',
    title: 'Landmark Classification and Tagging for Social Media',
    desc: 'Deep learning pipeline that automatically classifies and tags landmark locations in social media images using CNNs and transfer learning. Built as part of the Udacity AWS AI and ML Nanodegree, demonstrating end-to-end model development from data preprocessing to deployment.',
    arch: ['Image Dataset', 'CNN / Transfer Learning', 'Training', 'Evaluation', 'Inference API'],
    tags: ['PyTorch', 'CNN', 'Transfer Learning', 'Computer Vision', 'AWS SageMaker', 'Python'],
    link: 'https://github.com/Chile93/Landmark-Classification-Tagging-for-Social-Media',
    lang: 'jupyter', langLabel: 'Jupyter'
  },
  {
    category: 'ml',
    icon: 'fas fa-cookie-bite',
    title: 'ML Workflow for Scones Unlimited on Amazon SageMaker',
    desc: 'End-to-end ML workflow built on Amazon SageMaker for an image classification use case at Scones Unlimited. Covers data preparation, model training, deployment, and monitoring using SageMaker Pipelines, Lambda, and Step Functions for a fully automated MLOps workflow.',
    arch: ['S3 Data', 'SageMaker Training', 'Model Registry', 'Step Functions', 'Lambda Monitor'],
    tags: ['Amazon SageMaker', 'AWS Step Functions', 'AWS Lambda', 'MLOps', 'Python', 'Image Classification'],
    link: 'https://github.com/Chile93/ML-Workflow-For-Scones-Unlimited-On-Amazon-SageMaker',
    lang: 'jupyter', langLabel: 'Jupyter'
  },
  {
    category: 'ml',
    icon: 'fas fa-pen',
    title: 'Handwritten Digits Classifier with PyTorch',
    desc: 'Deep learning CNN classifier for handwritten digit recognition built with PyTorch on the MNIST dataset. Part of the Udacity AWS AI and ML Nanodegree, demonstrating neural network architecture design, training loops, hyperparameter tuning, and model evaluation.',
    arch: ['MNIST Dataset', 'CNN Architecture', 'Training Loop', 'Hyperparameter Tuning', '99%+ Accuracy'],
    tags: ['PyTorch', 'CNN', 'Deep Learning', 'MNIST', 'AWS SageMaker', 'Python'],
    link: 'https://github.com/Chile93/Developing-a-Handwritten-Digits-Classifier-with-PyTorch',
    lang: 'jupyter', langLabel: 'Jupyter'
  },
  {
    category: 'ml',
    icon: 'fas fa-bicycle',
    title: 'Predict Bike Sharing Demand with AutoGluon',
    desc: 'Automated machine learning project predicting bike sharing demand using AutoGluon on the Kaggle competition dataset. Demonstrates AutoML capabilities, feature engineering, and iterative model improvement, achieving competitive leaderboard scores through systematic experimentation.',
    arch: ['Kaggle Dataset', 'Feature Engineering', 'AutoGluon AutoML', 'Model Stacking', 'Submission'],
    tags: ['AutoGluon', 'AutoML', 'AWS SageMaker', 'Feature Engineering', 'Python', 'Kaggle'],
    link: 'https://github.com/Chile93/Predict-Bike-Sharing-with-AutoGluon',
    lang: 'jupyter', langLabel: 'Jupyter'
  }

];

// ===== RENDER PROJECTS =====
const categoryOrder = { de: 0, ce: 1, ds: 2, ai: 3, ml: 4 };

function renderProjects(filter = 'all') {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const filtered = filter === 'all'
    ? [...projects].sort((a, b) => (categoryOrder[a.category] ?? 9) - (categoryOrder[b.category] ?? 9))
    : projects.filter(p => p.category === filter);

  filtered.forEach((p, i) => {
    const headerClass = `${p.category}-header`;
    const archHTML = p.arch.map((a, idx) =>
      idx < p.arch.length - 1
        ? `<span class="arch-step">${a}</span><i class="fas fa-arrow-right"></i>`
        : `<span class="arch-step">${a}</span>`
    ).join('');
    const tagsHTML = p.tags.map(t => `<span>${t}</span>`).join('');
    const card = document.createElement('div');
    card.className = 'project-card fade-in';
    card.style.transitionDelay = `${i * 0.06}s`;
    const catLabel = { de: 'Data Engineering', ce: 'Cloud Architecture', ds: 'Data Science', ai: 'Agentic AI', ml: 'Machine Learning' };
    card.innerHTML = `
      <div class="card-header ${headerClass}">
        <div class="card-category-badge">${catLabel[p.category] || p.category}</div>
        <div class="card-icons"><i class="${p.icon}"></i></div>
      </div>
      <div class="card-body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="architecture">${archHTML}</div>
        <div class="tech-tags">${tagsHTML}</div>
      </div>
      <div class="card-footer">
        <a href="${p.link}" target="_blank" class="card-link"><i class="fab fa-github"></i> View Code</a>
        <span class="card-lang ${p.lang}">${p.langLabel}</span>
      </div>`;
    grid.appendChild(card);
    setTimeout(() => card.classList.add('visible'), 50 + i * 60);
  });
}

// ===== FILTER BUTTONS =====
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
});

// ===== SKILLS TABS =====
document.querySelectorAll('.skill-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.skill-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.skills-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(`tab-${tab.dataset.tab}`).classList.add('active');
  });
});

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.about-card, .cert-card, .contact-item').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// ===== PARTICLES =====
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  const colors = ['#00d4ff', '#a855f7', '#10b981'];
  for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 2;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random() * 100}%;
      animation-duration:${Math.random() * 15 + 10}s;
      animation-delay:${Math.random() * 10}s;
      background:${colors[Math.floor(Math.random() * colors.length)]};
    `;
    container.appendChild(p);
  }
}

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('input[name="name"]').value;
  const email = form.querySelector('input[name="email"]').value;
  const subject = form.querySelector('input[name="subject"]').value;
  const message = form.querySelector('textarea[name="message"]').value;
  const mailto = `mailto:chinedu.e.agwunobi@gmail.com?cc=chinedu9613@gmail.com&subject=${encodeURIComponent(subject + ' (from ' + name + ')')}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message)}`;
  window.location.href = mailto;
  const btn = form.querySelector('button[type="submit"]');
  btn.innerHTML = '<i class="fas fa-check"></i> Opening Email Client...';
  btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
  setTimeout(() => {
    btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
    btn.style.background = '';
    form.reset();
  }, 3000);
});

// ===== CV DROPDOWN — handled inline in HTML =====

// ===== ROLE TAG CYCLING =====
const roleTags = document.querySelectorAll('.role-tag');
let roleIndex = 0;
setInterval(() => {
  roleTags.forEach(t => t.classList.remove('active'));
  roleIndex = (roleIndex + 1) % roleTags.length;
  roleTags[roleIndex].classList.add('active');
}, 2500);

// ===== INIT =====
renderProjects();
createParticles();
