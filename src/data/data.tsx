export const data = {
    name: "Cathleen Vu",
    role: "Full Stack Developer & UI/UX Designer",
    location: "Orange County, CA",
    tagline: "I design intuitive user experiences and develop full-stack applications with a strong focus on React for mobile and web.",
    email: "cathleendvu@gmail.com",
    portfolioLink: "https://cathleenvu.com/",
    resumeLink: "https://drive.google.com/file/d/1Li1JCPadg7gx8KhZ2288skiIlNOhRCoG/view?usp=sharing",

    navLinks: [
        { label: "Home", href: "#home", icon: "home" },
        { label: "Skills", href: "#skills", icon: "skills" },
        { label: "Projects", href: "#projects", icon: "projects" },
        { label: "Experience", href: "#experience", icon: "experience" },
        { label: "Education", href: "#education", icon: "education" },
        { label: "About", href: "#about", icon: "about" },
        { label: "Contact", href: "#contact", icon: "contact" }
    ],

    about: {
        whatIDo: "As a full-stack developer and UI/UX designer, I specialize in creating user-focused mobile and web applications with React. I also work with Swift/SwiftUI to build responsive experiences natively. My focus is to design and create scalable, user-centered applications that combine strong engineering with purposeful design.",
        aboutMe: `
        Hi, I’m Cathleen Vu, a recent Computer Science graduate who completed my degree in December 2025.

        I began my academic journey in biology and completed a medical assistant program in 2022, but I later discovered a stronger interest in technology and problem solving. That transition led me to computer science, where I found a passion for building mobile and web applications that are intuitive, responsive, and impactful.
        `,
        hobby: "When I'm not programming, you can find me crocheting, attempting hikes, and playing pickleball with friends when I get the chance.",
        ending: "If you ever want to connect or build something together, feel free to reach out!",
        skills: [
            {
                label: "Languages",
                list: ["TypeScript", "Swift", "Python", "C/C++", "JavaScript", "HTML5", "CSS3"],
                color: "ffe0e0",
                icon: "🌎"
            },
            {
                label: "Frameworks & Libraries",
                list: ["React.js", "React Native", "Tailwind CSS", "SwiftUI", "Bootstrap"],
                color: "e9e2ff",
                icon: "📚"
            },
            {
                label: "Databases",
                list: ["MongoDB", "Firebase", "Supabase"],
                color: "e6f7ea",
                icon: "📊"
            },
            {
                label: "Cloud & Backend",
                list: ["AWS", "GCP", "Firebase", "Supabase"],
                color: "fff3d6",
                icon: "☁️"
            },
            {
                label: "Tools",
                list: ["Git", "Figma", "Bubble.io"],
                color: "e6f0ff",
                icon: "✏️"
            }
        ],
    },

    socials: [
    { label: "GitHub", url: "https://github.com/cdv0", icon: "/github-mark.svg" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/cathleen-vu-365220225/", icon: "/LI-In-Bug.png" }
    ],

    projects: [
        {
            title: "Portfolio Website",
            image: "/Portfolio.png",
            description: "A custom-built personal portfolio website showcasing my work, skills, and background as a developer and UI/UX designer.",
            detailedDesc: "This portfolio website was built to showcase my projects, skills, and experience in a clear and organized format. The site is fully responsive and designed to work smoothly across different screen sizes. I focused on clean layout, consistent spacing, and intuitive navigation to make content easy to scan. The project also served as a way to strengthen my frontend development skills and apply UI/UX principles in a real, self-directed build.",
            techStack: ["HTML", "CSS", "JavaScript"],
            category: ["engineering", "ui/ux"],
            contribution: [
                "Implemented a responsive, component-based frontend using React and Tailwind to support multiple screen sizes and clean navigation.",
                "Structured project and content data in a reusable format, enabling dynamic rendering of project pages without duplicating components.",
                "Designed the site layout and interactions, focusing on clarity and visual consistency."
            ]
            ,
            role: ["Frontend"],
            url: {
                github: "https://github.com/cdv0/portfolio-v2",
                liveDemo: "https://www.cathleenvu.com"
            },
            startDate: "November 2025",
            endDate: "November 2025",
            link: "/projects/portfolio",
            slug: "portfolio"
        },
        {
            title: "Retrieval-Based QA System",
            image: "/qa-system.png",
            detailedDesc: "This project implements a retrieval-based question answering system that matches user queries to the most relevant documents and sentences within a text corpus. It uses TF-IDF vectorization and cosine similarity as a baseline retrieval method. To improve accuracy, I integrated the Rocchio relevance feedback algorithm and compared its performance against cosine similarity alone. The system was built with a modular preprocessing and retrieval pipeline to support experimentation. This project highlights how relevance feedback can meaningfully impact retrieval quality.",
            description: "A question answering system that uses information techniques to match user queries with the most relevant textual responses, comparing cosine similarity and Rocchio relevance feedback.",
            techStack: ["Python", "Streamlit"],
            role: ["Information Retrieval"],
            contribution: [
                "Implemented a retrieval-based question answering system using TF-IDF vectorization and cosine similarity to identify the most relevant documents and sentences for a given query.",
                "Built a modular preprocessing and retrieval pipeline, including tokenization, normalization, and vector computation.",
                "Integrated and evaluated the Rocchio relevance feedback algorithm, comparing retrieval performance against the cosine similarity baseline."
            ]
            ,
            category: ["engineering"],
            url: {
                github: "https://github.com/cdv0/retrieval-based-QA-system",
                liveDemo: "https://retrieval-based-q-a-system.streamlit.app/"
            },
            startDate: "November 2025",
            endDate: "November 2025",
            link: "/projects/qa-system",
            slug: "qa-system"
        },
        {
            title: "JAC",
            image: "/JAC.png",
            detailedDesc: "JAC is a mobile application focused on a niche use case: providing a centralized place to view and review car mechanics using structured and verified service history. I owned the full-stack development for vehicles and service records, including data modeling, backend logic, and frontend integration. This allowed users to manage vehicles and attach maintenance records in a consistent, reliable way. I also led the UI/UX design for the entire app, conducting market research, user research, and defining user stories before creating low- and high-fidelity designs in Figma. Additionally, I contributed to frontend development for the settings page and overall interface polish.",
            description: "A mobile application that lets car owners track their vehicle maintenance, upload service records, and discover trusted mechanics. Reviews are marked as 'verified' only when matched with an uploaded service record, ensuring transparency and trust.",
            techStack: ["React Native", "AWS", "TypeScript", "Tailwind"],
            role: ["Full-Stack"],
            category: ["engineering", "ui/ux"],
            contribution: 
            [
                "Implemented CRUD functionality for vehicles and garage service records, including data modeling and frontend integration.",
                "Designed and built the UI/UX for the entire application, creating wireframes and high-fidelity mockups in Figma and translating them into production-ready components.",
                "Led feature planning and execution by organizing the design backlog, assigning tasks, and tracking sprint progress to ensure timely delivery across the team."
            ]
            ,
            url: {
                github: "https://github.com/cdv0/JAC"
            },
            startDate: "January 2025",
            endDate: null,
            link: "/projects/jac",
            slug: "jac"
        },
        // {
        //     title: "Spotify Playlist UX Redesign",
        //     description: "Conducted user interviews with music streaming users to identify usability issues within Spotify's mobile interface. Using the insights gathered, we evaluated the app with Nielsen's 10 Usability Heuristics and redesigned key screens to improve the three core tasks highlighted in our research. The final redesign addresses user pain points and creates a more intuitive, efficient experience.",
        //     techStack: ["HTML", "CSS", "JavaScript"],
        //     category: ["ui/ux"],
        //     url: {
        //         github: "https://github.com/cdv0/spotify-redesign"
        //     },
        //     startDate: "September 2025",
        //     endDate: "November 2025",
        // },
        {
            title: "Table Tap",
            image: "/table-tap.png",
            detailedDesc: "TableTap is a web-based POS system designed for a small family-owned restaurant, supporting both customer ordering and employee menu management. My primary contribution was designing and implementing the Asset screen, where restaurants create menu categories and reusable modifier groups. I designed the underlying data flow and backend structure to support flexible menu configuration without duplicating data. In addition, I led the UI/UX design for the entire application, defining user flows and creating low- and high-fidelity designs before implementation. This project emphasized scalable data modeling and clear, maintainable interfaces.",
            description: "Table Tap is a mobile ordering POS system that lets customers scan a table's QR code, browse the menu, and place orders. Staff receive orders through a backend dashboard, and restaurants can edit their menu through an integrated management interface.",
            techStack: ["React", "TypeScript", "Bootstrap", "Supabase", "AWS"],
            role: ["Full-Stack"],
            category: ["engineering","ui/ux"],
            contribution: 
            [
                "Designed the application UI/UX in Figma, creating flows and mockups for both customer ordering and employee management experiences.",
                "Designed and implemented the menu asset screen, enabling restaurants to create and manage categories and reusable modifier groups.",
                "Implemented frontend logic and data structures to support dynamic menu configuration and modifier group assignment."
            ]
            ,
            url: {
                github: "https://github.com/cdv0/TableTap"
            },
            startDate: "May 2025",
            endDate: null,
            link: "/projects/table-tap",
            slug: "table-tap"
        },
        //{
        //     title: "Steam Game Unlocker",
        //     description: "Collaborated on a Python application that integrates the Goldberg Steam Emulator to let users play Steam games without the Steam client. The tool provides a GUI that automates emulator setup, file configuration, and necessary downloads for offline play of compatible DRM-free titles.",
        //     techStack: ["Python"],
        //     category: ["engineering"],
        //     url: {
        //         github: "https://github.com/WebForks/Steam-Game-Unlocker"
        //     },
        //     startDate: "March 2024",
        //     endDate: "April 2024",
        //     link: "/projects/steam-game-unlocker"
        // },
        {
            title: "End to End IoT Data Processing System",
            image: "/processing-system.png",
            detailedDesc: "This project simulates smart appliance sensor data and processes it through a TCP-based client-server system. Incoming data is transmitted to a server and stored in MongoDB for structured querying and transformation. The system was deployed on Google Cloud Platform using virtual machine instances with manual network configuration. Users interact with the application through a command-line interface to execute predefined queries. This project provided hands-on experience with networking, cloud deployment, and data processing pipelines.",
            description: "An IoT program that processes sensor data from virtual smart appliances over TCP and stores the results in MongoDB. The system runs on GCP VM instances, where users connect via IP and port and use a CLI to run predefined data transformation queries.",
            techStack: ["Python", "MongoDB", "Dataniz", "GCP"],
            role: ["Full-Stack"],
            category: ["engineering"],
            contribution: 
            [
                "Developed a TCP-based server-client system for processing sensor data from virtual smart appliances.",
                "Deployed and configured VM instances on Google Cloud Platform, manually managing server and client execution.",
                "Implemented MongoDB for structured data storage and retrieval."
            ]
            ,
            url: {
                github: "https://github.com/cdv0/End-to-End-IoT-Data-Processing-System"
            },
            startDate: "December 2024",
            endDate: null,
            link: "/projects/processing-system",
            slug: "processing-system"
        },
    ],

    experience: [
        {
            title: "UI/UX Designer",
            company: "Exponent Labs",
            icon: "/exponentlabs.avif",
            location: "Orange County, CA",
            startDate: "November 2025",
            endDate: null,
            bullets: [
                "Assist in creating and maintaining design systems for client projects, including components, typography, and layout standards.",
                "Collaborate with senior designers to translate client requirements into wireframes, UI components, and visual design assets.",
                "Support the design process by preparing mockups, documenting design decisions, and ensuring consistency across screens and user flows.",
            ]
        },
        {
            title: "Product Engineer | Full-Stack Developer | UI/UX Designer",
            icon: "/nuptai.svg",
            location: "Los Angeles, CA",
            company: "Nupt.AI",
            startDate: "March 2025",
            endDate: null,
            bullets: [
            "Designed the UI/UX for the main dashboard and agentic chatbot assistant, focusing on clear user flows and cohesive product experiences.",
            "Developed features in agile, sprint-based workflows by creating design specifications and high-fidelity designs, incorporating feedback, and implementing approved designs end-to-end.",
            "Contributed across the product lifecycle by identifying usability issues, resolving platform bugs, and collaborating closely with the team on feature planning and improvements.",
            ]
        }
    ],

    education: [
        {
            school: "California State University, Long Beach",
            degree: "Bachelor of Science",
            major: "Computer Science",
            location: "Long Beach, CA",
            startDate: "August 2021",
            endDate: "December 2025",
            cumulativeGPA: "3.626",
            image: "/csulb.png",
            imageClass: "w-23 p-3"
        },
        {
            school: "U.S. Colleges",
            degree: "Certificate",
            major: "Clinical Medical Assistant",
            location: "Santa Ana, CA",
            startDate: "June 2021",
            endDate: "November 2021",
            image: "/uscolleges-2.jpeg"
        }
    ]

}