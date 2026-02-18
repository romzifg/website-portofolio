export const profile = {
    name: 'Romzi Farhan Ghozi',
    title: 'Software Engineer | Full Stack Developer',
    bio: 'A mathematician turned software engineer — I build backend systems and find myself most at home when the problem involves data.',
    email: 'romzifarhan29@gmail.com',
    phone: '+62 8956-0214-4608',
    location: 'Depok, Indonesia',
    socials: [
        { name: 'GitHub', url: 'https://github.com/romzifg', icon: 'github' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/romzifg', icon: 'linkedin' },
        { name: 'Instagram', url: 'https://instagram.com/rcode.dev', icon: 'instagram' },
    ]
}

export const bio = "A mathematician turned software engineer. Four years building web and mobile apps taught me that the most interesting problems usually live in the backend — where the data is messy, the queries are slow, and the architecture decisions actually matter."

export const personalCards = [
    {
        icon: '⚙️',
        label: 'Day-to-day stack',
        value: 'React, Express.js, PostgreSQL'
    },
    {
        icon: '🚀',
        label: 'Projects shipped',
        value: '7+ web & mobile apps'
    },
    {
        icon: '🧠',
        label: 'Background',
        value: 'Mathematics — it shows in how I approach problems'
    },
]

export const skills = [
    {
        category: 'Languages',
        items: ['JavaScript', 'TypeScript', 'PHP', 'Python']
    },
    {
        category: 'Frontend',
        items: ['React', 'Flutter', 'Tailwind CSS']
    },
    {
        category: 'Backend',
        items: ['Express.js', 'NestJS', 'Laravel', 'FastAPI', 'Gin']
    },
    {
        category: 'Database',
        items: ['MySQL', 'PostgreSQL', 'Redis']
    },
    {
        category: 'DevOps',
        items: ['Docker', 'Git', 'Linux']
    },
    {
        category: 'Data',
        items: ['Numpy', 'Pandas', 'Airflow']
    },
    {
        category: 'Also worked with',
        items: ['Golang', 'Dart', 'Vue.js', 'Scikit-learn']
    }
]

export const experiences = [
    {
        title: 'Full Stack Developer',
        company: 'PT Sentral Mitra Informatika',
        period: 'Oct 2021 - Present',
        logo: '/assets/smi-logo.png',
        description: "Joined to help modernize a legacy monolith — ended up owning the backend migration to RESTful services, redesigning database schemas, and writing the SQL that now powers the company's operational reports. Day-to-day is a mix of React, Express, and keeping things from breaking in production.",
        tech: ['Laravel', 'React', 'Next', 'Flutter', 'FastAPI', 'Express', 'MySQL', 'PostgreSQL', 'Redis', 'Docker', 'Git'],
        achievements: [
            "Migrated a legacy CodeIgniter internal tool to a modern React + Express stack, improving maintainability and UI consistency across the system.",
            "Delivered multiple web and mobile applications for client needs, covering full cycle from requirement to deployment,",
            "Handled ongoing development and maintenance of internal projects, including bug fixes, feature additions, and codebase improvements.",
        ]
    },
    {
        title: 'Frontend Developer',
        company: 'Project',
        period: 'Jun 2021 - Jul 2021',
        description: "Short-term project building a responsive web app with Next.js. Mostly component work and wiring up REST APIs, but it's where I got serious about how frontend and backend need to agree on data shape early",
        tech: ['React', 'Next.js', 'Material-UI'],
        achievements: [
            'Built reusable component library with React and Material-UI.',
            'Integrated frontend with REST APIs, reducing data fetch errors by standardizing response handling.',
        ],
    },
    {
        title: 'Mathematical Computing Laboratory Assistant ',
        company: 'Bandung Islamic University (UNISBA)',
        period: '2019 - 2020',
        logo: '/assets/unisba-logo.png',
        description: "Taught practical sessions for numerical methods and linear algebra to undergrad students. Probably where I learned that if you can't explain something simply, you don't understand it well enough yet.",
        achievements: [
            'Preparing laboratory materials and assignments for mathematical computing courses.',
        ],
    }
]

export const projects = [
    {
        title: "AI Support Ticketing System",
        description: "Built a ticketing platform that uses NLP to auto-categorize requests, flag priority, and draft initial responses — so support teams spend less time triaging and more time actually solving problems.",
        tech: ["Next", "FastAPI", "PostgreSQL"],
        category: "Web",
        image: "/assets/ai-powered.png"
    },
    {
        title: "Data Processing & Analytics Pipeline",
        description: "Personal project: a pipeline that pulls raw structured data, cleans it, and outputs something an analyst can actually use. Built with Airflow for scheduling and Docker to keep it portable.",
        tech: ["Python", "Pandas", "PostgreSQL", "Airflow", "Docker", "WSL"],
        category: "Data"
    },
    {
        title: "Technician Ticketing Application",
        description: "Internal tool for managing field technician jobs — task assignment, real-time status, equipment tracking, all in one place. Built both the web dashboard and the mobile app the technicians use on-site.",
        tech: ["React", "Express.js", "Flutter", "MySQL"],
        category: "Web/Mobile",
        image: "/assets/technician-ticket.png"
    },
    {
        title: "Document Review Application",
        description: "Replaced an email-based approval process with a proper web app — role-based access, multi-step workflows, and a clear audit trail. Less back-and-forth, fewer things slipping through the cracks.",
        tech: ["React", "Express.js", "MySQL"],
        category: "Web",
        image: "/assets/doc-review.png"
    },
    {
        title: "Visitor Application",
        description: "Mobile app for guest check-in and visit history at the office. Simple scope, but it replaced a paper logbook — which apparently nobody enjoyed maintaining.",
        tech: ["Flutter", "Express.js", "MySQL"],
        category: "Mobile"
    },
    {
        title: "Product Approval Application",
        description: "Web app to manage product submission and approval cycles between teams. Structured the workflow so nothing gets stuck waiting on someone who doesn't know it's their turn.",
        tech: ["Next.js", "Express.js", "MySQL"],
        category: "Web",
        image: "/assets/reg-product.png"
    },
    {
        title: "Field Monitoring Application",
        description: "Dashboard for tracking product performance in the field — data viz, monitoring reports, and trend analysis. Built so non-technical teams could actually read and use the data themselves.",
        tech: ["React", "Laravel", "PostgreSQL"],
        category: "Web",
        image: "/assets/field-monitoring.png"
    }
]