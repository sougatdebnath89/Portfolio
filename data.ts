export const startYear = 2017;
export const currentYear = new Date().getFullYear();
export const experienceYears = currentYear - startYear;

export const personalInfo = {
  name: "Sougat Debnath",
  title: "Senior .NET Developer & AI Engineer",
  email: "sougatdebnath@gmail.com",
  phone: "+91 9852470757",
  linkedin: "linkedin.com/in/sd-v2",
  linkedinUrl: "https://www.linkedin.com/in/sd-v2/",
  location: "Kolkata, India",
  summary: `I am a dedicated Senior .NET Developer with over ${experienceYears}+ years of experience in Analysis, Design, and Development of enterprise-grade applications. My expertise spans the full Microsoft Stack (ASP.NET Core, MVC, C#), utilizing modern tools like GitHub, Jira, and Copilot. Passionate about the future of technology, I am actively working as an AI Engineer. I specialize in building Agentic AI systems and creating intelligent workflows using Vibe Coding techniques to drive automation and innovation.`
};

export const techStack = {
    "Core & Backend": "C#, .NET Core, ASP.NET MVC, Entity Framework, LINQ, Multithreading, Design Patterns",
    "Tools & DevOps": "Git, GitHub, Jira, CI/CD Deployments, GitHub Copilot, Docker",
    "Frontend": "HTML5, CSS3, jQuery, Bootstrap, Web Forms, AJAX, Razor View Engine",
    "Database": "MS SQL Server, ADO.NET, SQL Sentry, Performance Tuning",
    "AI & Future Tech": "Generative AI, Agentic Workflows, Vibe Coding, LLM Integration, AI Engineering, Prompt Engineering"
};

export const experience = [
  {
    role: ".Net Developer",
    company: "Procentris India Private Limited",
    period: "May 2022 – Present",
    desc: "Developing and maintaining ASP.NET web applications for home healthcare services. Currently working on 'Expert TPA' and a quotation project. Implementing complex business logic and data processing modules using C# and .NET Core while ensuring strict adherence to industry-specific regulations.",
    stack: [".NET Core", "ASP.NET", "MVC", "SQL Server", "Clean Architecture"]
  },
  {
    role: ".Net Developer",
    company: "Chipin IT Solutions Private Limited",
    period: "Dec 2017 – April 2022",
    desc: "Enhanced development processes for event management systems using .NET MVC. Built comprehensive solutions including a Business Suite ERP, CRM for ticket management, and payroll systems. Worked directly with clients to define technical specs.",
    stack: [".NET MVC", "C#", "jQuery", "SQL", "System Architecture"]
  },
  {
    role: ".Net Developer",
    company: "Venom 9",
    period: "Jun 2016 - Nov 2017",
    desc: "Developed technical interfaces and desktop applications using the .NET Framework. Created various management systems for inventory, retail (Food/Fashion), and client record tracking.",
    stack: [".NET Framework", "C# Desktop", "WinForms", "SQL Server"]
  }
];

export const projects = [
  {
    name: "Expert TPA",
    tech: "ASP.NET Core, C#, SQL, Rest API",
    company: "Procentris",
    role: "Software Developer",
    desc: "Third-party administrator platform for managing insurance claims, processing, and policy data. This system handles high-volume transaction processing and integrates with multiple external insurance providers.",
    features: ["Claims Processing Engine", "Policy Management", "Real-time Analytics Dashboard", "Automated Workflow Triggers"]
  },
  {
    name: "Insurance Quotations",
    tech: ".NET Core, MVC, SQL, jQuery",
    company: "Procentris",
    role: "Software Developer",
    desc: "System for generating and managing complex quotations for insurance companies. Allows agents to calculate premiums based on dynamic risk factors and generate PDF proposals instantly.",
    features: ["Dynamic Premium Calculator", "PDF Generation", "Rate Engine Management", "Agent Portal"]
  },
  {
    name: "Arrow (Healthcare)",
    tech: "ASP.NET Core, Entity Framework, SQL",
    company: "Procentris",
    role: "Software Developer",
    desc: "End-to-end home healthcare service platform managing people, data, and finance. It streamlines patient scheduling, caregiver assignment, and billing processes.",
    features: ["Patient Scheduling", "Caregiver Matching", "Billing & Invoicing", "Electronic Health Records (EHR)"]
  },
  {
    name: "Business Suite ERP",
    tech: "C#, .NET, SQL Server, WinForms",
    company: "Chipin",
    role: "Software Developer",
    desc: "Comprehensive desktop ERP with modules for Sales, Purchase, Mfg, Accounting, and HR. Designed for manufacturing SMEs to track resources and production lines.",
    features: ["Inventory Tracking", "General Ledger", "Payroll Processing", "Supply Chain Management"]
  },
  {
    name: "Quick HR",
    tech: "ASP.NET, Web Forms, SQL",
    company: "Chipin",
    role: "Software Developer",
    desc: "Complete payroll management website for company-wide salary and leave tracking. Handles tax calculations, deductions, and generates compliance reports.",
    features: ["Leave Management", "Salary Slip Generation", "Tax Computation", "Employee Self-Service"]
  },
  {
    name: "Bus Monitoring Sys",
    tech: "IoT Integration, SMS/Email Systems",
    company: "Chipin",
    role: "Software Developer",
    desc: "School bus tracking system with QR scanning and real-time parent notifications. Ensures student safety by tracking boarding/deboarding times and location.",
    features: ["Real-time GPS Tracking", "QR Code Attendance", "SMS Alerts", "Route Optimization"]
  },
  {
    name: "CRM Support",
    tech: ".NET MVC, SQL, Bootstrap",
    company: "Chipin",
    role: "Software Developer",
    desc: "Web-based support ticket management system tracking client info and timesheets. Helps support teams prioritize issues and track SLAs.",
    features: ["Ticket Lifecycle Mgmt", "SLA Tracking", "Knowledge Base", "Customer Portal"]
  },
  {
    name: "Quick Cheque",
    tech: "C#, Web Technologies",
    company: "Chipin",
    role: "Software Developer",
    desc: "Online cheque printing utility with both free and paid feature sets. formatting for different bank cheque layouts.",
    features: ["Bank Template Library", "Batch Printing", "Payment History", "Multi-currency Support"]
  },
  {
    name: "Inventory Mgmt Sys",
    tech: "WinForms, C#, SQL Server",
    company: "Venom 9",
    role: "Software Developer",
    desc: "Desktop application for tracking stock levels, orders, and deliveries. Optimized for fast data entry in retail environments.",
    features: ["Stock Alerting", "Barcode Scanning", "Vendor Management", "Purchase Orders"]
  },
  {
    name: "Retail POS System",
    tech: ".NET Framework, WinForms",
    company: "Venom 9",
    role: "Software Developer",
    desc: "Point of Sale system customized for retail outlets in food and fashion sectors. Supports touch screens and peripheral hardware integration.",
    features: ["Touch Interface", "Hardware Integration", "Sales Reporting", "Customer Loyalty"]
  },
  {
    name: "Client Record Tracker",
    tech: "C#, SQL, .NET Desktop",
    company: "Venom 9",
    role: "Software Developer",
    desc: "Secure desktop application for managing client databases and interaction history. Focuses on data privacy and quick retrieval of client records.",
    features: ["Secure Storage", "Interaction Logs", "Document Attachment", "Search Indexing"]
  }
];

export const education = [
    {
        degree: "B.Tech (Electronics & Comm)",
        school: "Hi-Tech Institute of Technology, Bhubaneswar",
        year: "2010 - 2014"
    },
    {
        degree: "Higher Secondary",
        school: "St. Mary's English High School, Jamshedpur",
        year: "2008 - 2009"
    },
    {
        degree: "Secondary",
        school: "St Mary's English High School, Jamshedpur",
        year: "2005 - 2008"
    }
];