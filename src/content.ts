import type { Content } from './components/Sections';

export const content: Content = {
  name: 'Vikram Rajan',
  role: 'Cloud Architect',
  tagline: 'Architecting scalable cloud systems',
  photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  email: 'vikram@cloudblueprint.io',
  phone: '+91 98450 12345',
  location: 'Bengaluru, India',
  languages: ['English', 'Hindi', 'Tamil'],
  socials: [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'AWS Blog', href: 'https://aws.amazon.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
  ],
  about: [
    'I am a cloud architect with 8 years of experience designing, migrating and operating scalable infrastructure on AWS, Azure and GCP. I turn brittle legacy systems into resilient, cost-efficient cloud platforms.',
    'My approach is blueprint-first: I document the target architecture, prove it with working prototypes, and smooth the migration path so teams move without fear. I care as much about cost, security and observability as I do about uptime.',
  ],
  services: [
    { title: 'Cloud Architecture', desc: 'Designing scalable, resilient architectures across AWS, Azure and GCP that grow with the business.', icon: '☁️' },
    { title: 'Migration & Modernization', desc: 'Lift-and-shift to full re-architecture, with surgical runbooks that move workloads without downtime.', icon: '🔄' },
    { title: 'Infrastructure as Code', desc: 'Terraform and CloudFormation that deliver new environments in minutes instead of weeks.', icon: '🧱' },
    { title: 'Cost Optimization', desc: 'FinOps reviews, right-sizing and waste elimination that cut cloud spend without touching performance.', icon: '💰' },
    { title: 'Security & Compliance', desc: 'Zero-trust landing zones, encryption and audit-ready guardrails for regulated industries.', icon: '🛡️' },
    { title: 'Kubernetes Platforms', desc: 'Self-service developer platforms on EKS, GKE and AKS with GitOps and full observability built in.', icon: '⚓' },
  ],
  skills: [
    { name: 'AWS', level: 95, note: 'Solutions Architect' },
    { name: 'Azure', level: 85, note: 'Architecture & AKS' },
    { name: 'GCP', level: 80, note: 'GKE, BigQuery' },
    { name: 'Kubernetes', level: 90, note: 'EKS / clusters' },
    { name: 'Terraform', level: 88, note: 'IaC at scale' },
    { name: 'Docker', level: 92, note: 'Containerization' },
  ],
  skillsIcons: [
    { name: 'Terraform', note: 'IaC everywhere', icon: '🧱' },
    { name: 'Kubernetes', note: 'EKS · GKE · AKS', icon: '⚓' },
    { name: 'Observability', note: 'Prometheus · Grafana', icon: '📊' },
    { name: 'Serverless', note: 'Lambda · Cloud Functions', icon: '⚡' },
  ],
  stats: [
    { label: 'Systems migrated', value: 40, suffix: '+' },
    { label: 'Average cost saving', value: 38, suffix: '%', prefix: '' },
    { label: 'Uptime maintained', value: 99, suffix: '.99%' },
    { label: 'Production workloads', value: 200, suffix: '+' },
  ],
  experience: [
    {
      role: 'Principal Cloud Architect',
      company: 'Cloudminds Inc.',
      period: '2022 — Present',
      desc: 'Lead architecture for a SaaS platform serving 500k users. Migrated to a multi-region AWS architecture, cutting costs 40% and lifting availability to 99.99%.',
    },
    {
      role: 'Senior Cloud Engineer',
      company: 'ByteBridge',
      period: '2019 — 2022',
      desc: 'Designed Kubernetes-based microservices platform and automated infrastructure delivery with Terraform and CI/CD pipelines.',
    },
    {
      role: 'Systems Engineer',
      company: 'LegacyCorp',
      period: '2017 — 2019',
      desc: 'Operated on-premise data centers and led the first move of workloads to the public cloud, proving the business case.',
    },
  ],
  education: [
    {
      degree: 'B.Tech — Computer Science',
      school: 'Vellore Institute of Technology',
      period: '2013 — 2017',
      desc: 'Core systems, networks and distributed computing — the foundation of everything I build now.',
    },
    {
      degree: 'PG Certification — Cloud Architecture',
      school: 'International Institute of Information Technology',
      period: '2019 — 2020',
      desc: 'Deep-dive into multi-cloud design patterns, container orchestration and platform engineering.',
    },
  ],
  certificates: [
    'AWS Certified Solutions Architect — Professional',
    'Microsoft Azure Solutions Architect Expert',
    'Google Professional Cloud Architect',
    'Certified Kubernetes Administrator (CKA)',
  ],
  awards: [
    { title: 'AWS Community Builder', detail: 'Selected by AWS for ongoing contribution to open-source infrastructure projects and architecture content.', year: '2024' },
    { title: 'Cloud Innovation Award', detail: 'Recognised internally for the multi-region resilience design that won the largest deal in company history.', year: '2023' },
    { title: 'Speaker — AWS re:Invent', detail: 'Invited to present a session on cost-efficient Kubernetes for a live audience of architects.', year: '2022' },
  ],
  cards: [
    {
      title: 'Legacy to AWS Migration',
      desc: 'Migrated a monolith ERP to microservices on EKS with blue/green deploys. Reduced costs 40% and improved release velocity 5x.',
      stack: 'AWS, EKS, Terraform',
      metric: '-40% cost',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    },
    {
      title: 'Multi-Region Resilience',
      desc: 'Designed an active-active multi-region architecture with automated failover. Achieved 99.99% availability for a fintech client.',
      stack: 'Route53, Aurora, Lambda',
      metric: '99.99% uptime',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    },
    {
      title: 'Kubernetes Platform',
      desc: 'Built a self-service internal developer platform on Kubernetes with GitOps, cutting environment setup from days to minutes.',
      stack: 'K8s, ArgoCD, Terraform',
      metric: '5x faster deploys',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
    },
  ],
  projects: [
    {
      title: 'Financial Data Lake',
      desc: 'Built a serverless data lake on AWS for a stock-analysis startup, processing 50M daily events at a fraction of the SQL-warehouse cost.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=500&fit=crop',
      tags: ['AWS', 'Data', 'Serverless'],
    },
    {
      title: 'Zero-Downtime Migration',
      desc: 'Moved a 40-service microservices platform to GKE through blue/green cutovers with zero user-facing downtime.',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=500&fit=crop',
      tags: ['Migration', 'GKE', 'CI/CD'],
    },
    {
      title: 'Multi-Cloud Landing Zone',
      desc: 'Designed a secure landing zone shared by AWS and Azure with SSO, guardrails and cost governance from day one.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop',
      tags: ['IaC', 'Security', 'Governance'],
    },
  ],
  hobbies: [
    { name: 'Homelab', note: 'Runs a 12-node Kubernetes cluster at home', icon: '🖥️' },
    { name: 'Photography', note: 'Street and landscape on long hikes', icon: '📷' },
    { name: 'Chess', note: 'State-level club player', icon: '♟️' },
    { name: 'F1 Racing', note: 'Watches every grid, argues every pit call', icon: '🏎️' },
  ],
  testimonials: [
    {
      quote:
        'Vikram designed our cloud architecture with a clarity I have rarely seen. The migration was smooth, documented and on budget.',
      author: 'Anita Desai',
      role: 'CTO, Cloudminds Inc.',
    },
    {
      quote:
        'He balances innovation with pragmatism — always recommending the simplest architecture that will actually scale.',
      author: 'Michael Chen',
      role: 'VP Engineering, ByteBridge',
    },
  ],
  footnote: '© Vikram Rajan · React, TypeScript & Framer Motion',
  ticker: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform', 'Cost Optimization'],

  blogPosts: [
    { title: 'Multi-Cloud Strategy: Beyond the Hype', excerpt: 'Practical considerations for implementing a multi-cloud architecture that delivers real business value.', date: '2024-01-10', tags: ['Cloud', 'Architecture'], readTime: '10 min' },
    { title: 'Cost Optimization in the Cloud', excerpt: 'Proven strategies for reducing cloud spend without compromising performance or reliability.', date: '2023-12-28', tags: ['FinOps', 'AWS', 'Azure'], readTime: '7 min' },
  ],

  faqItems: [
    { question: 'Which cloud platforms do you specialize in?', answer: 'I have deep expertise in AWS and Azure, with solid experience in GCP. I help clients choose the right platform based on their specific needs.' },
    { question: 'How do you approach cloud migration?', answer: 'I follow a phased approach starting with assessment, then pilot migration, followed by full migration with optimization and ongoing management.' },
    { question: 'What is your approach to cloud security?', answer: 'I implement defense-in-depth strategies including identity management, encryption, network security, and compliance monitoring.' },
    { question: 'How do you optimize cloud costs?', answer: 'I use reserved instances, spot instances, auto-scaling, right-sizing, and cost monitoring tools to optimize spending.' },
  ],

  skillsDetailed: [
    { category: 'Cloud Platforms', items: [
      { name: 'AWS', level: 95, note: 'Solutions Architect Pro' },
      { name: 'Azure', level: 90, note: 'Solutions Architect' },
      { name: 'GCP', level: 80 },
    ]},
    { category: 'Infrastructure', items: [
      { name: 'Terraform', level: 92 },
      { name: 'Kubernetes', level: 88 },
      { name: 'CloudFormation', level: 85 },
    ]},
  ],

  contactMethods: [
    { type: 'Email', value: 'cloud.architect@email.com', icon: '📧', href: 'mailto:cloud.architect@email.com' },
    { type: 'AWS Community', value: 'aws.amazon.com/developer', icon: '☁️', href: 'https://aws.amazon.com' },
  ],
};