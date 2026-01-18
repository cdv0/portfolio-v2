export const data = {
    name: "Cathleen Vu",
    role: "Full Stack Developer & UI/UX Designer",
    location: "Orange County, CA",
    tagline: "I design intuitive user experiences and develop full-stack applications with a strong focus on React for mobile and web.",
    email: "cathleendvu@gmail.com",
    portfolioLink: "https://cathleenvu.com/",
    resumeLink: "https://docs.google.com/document/d/1k8lstwJQP7NQ3rTlA8hDH6WxC2nl49yRE2h563p4nas/edit?usp=sharing",

    navLinks: [
        { label: "Home", href: "/#home", icon: "home" },
        { label: "Skills", href: "/#skills", icon: "skills" },
        { label: "Projects", href: "/#projects", icon: "projects" },
        { label: "Experience", href: "/#experience", icon: "experience" },
        { label: "Education", href: "/#education", icon: "education" },
        { label: "About", href: "/#about", icon: "about" },
        { label: "Contact", href: "/#contact", icon: "contact" }
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
            title: "Elura",
            image: "/Elura.png",
            description: "A native iOS skincare app that lets users scan or search products, view their ingredients, and ranks product quality using a structured ingredient database and rule-based safety scoring to help users quickly understand product safety and effectiveness.",
            detailedDesc: "[In Progress]",
            techStack: ["Swift", "SwiftUI"],
            category: ["engineering", "ui/ux"],
            contribution: [
                "[In Progress]"
            ]
            ,
            role: ["Full-Stack"],
            url: {
                figma: "https://www.figma.com/design/P6ElxjwmnMMbzvjipz1rp1/Elura-Design?node-id=0-1&t=qmr1YdRGUUOzxUAK-1",
                github: "https://github.com/cdv0/elura"
            },
            startDate: "January 2026",
            link: "/projects/elura",
            slug: "elura"
        },
        {
            title: "Portfolio Website",
            image: "/Portfolio.png",
            description: "A custom-built personal portfolio website showcasing my work, skills, and background as a developer and UI/UX designer.",
            detailedDesc: "This portfolio website showcases my projects, skills, and experience in a clean, responsive layout. I designed and built it to focus on clear structure, consistent spacing, and easy navigation, while using it as a self-directed project to strengthen my frontend and UI/UX skills.",
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
            detailedDesc: "This project explores retrieval-based question answering by matching user queries to the most relevant documents and sentences in a corpus. I implemented a TF-IDF and cosine similarity baseline, then improved retrieval quality by integrating and evaluating the Rocchio relevance feedback algorithm. The system was built with a modular pipeline to support experimentation and comparison of ranking methods.",
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
            detailedDesc: "JAC is a mobile app for organizing vehicle ownership and maintenance while helping users discover and evaluate mechanics. I worked as the UI/UX lead and full-stack engineer, owning the Garage system and the core product experience from design through implementation.",
            description: "A mobile application that lets car owners track their vehicle maintenance, upload service records, and discover trusted mechanics. Reviews are marked as 'verified' only when matched with an uploaded service record, ensuring transparency and trust.",
            techStack: ["React Native", "AWS Lambda", "AWS API Gateway", "AWS S3", "AWS DynamoDB", "TypeScript", "Tailwind CSS"],
            role: ["Full-Stack"],
            category: ["engineering", "ui/ux"],
            contribution: 
            [
                "Built the full Garage system, including vehicle CRUD, maintenance records, and data modeling, with end-to-end frontend and backend integration.",
                "Designed and led the UI/UX for the entire app, from user research and wireframes to high-fidelity Figma designs and production-ready components.",
                "Implemented cloud services using AWS (API Gateway, Lambda, S3, DynamoDB) to support secure data storage, media uploads, and scalable APIs.",
                "Drove feature planning and delivery through Agile sprints, maintaining the product and design backlog, running standups, and participating in code reviews to ensure quality and on-time execution."
            ]
            ,
            url: {
                github: "https://github.com/cdv0/JAC",
                figma: "https://www.figma.com/design/gNYIMzeYN7IZJ8u4hFpyNs/JAC?node-id=0-1&t=sFkanXwtwW8iEwhH-1"
            },
            startDate: "January 2025",
            endDate: null,
            link: "/projects/jac",
            slug: "jac",
            showcase: [
            {
                image: "/jac-business-bi.png",
                title: "Product Design Leadership",
                content: "At the start of this end-to-end project, our team conducted user interviews with mechanics and car owners, then translated those insights into user stories and core flows. We also performed market research on indirect competitors such as Yelp and the Better Business Bureau, created paper wireframes, low- to mid-fidelity layouts, and high-fidelity mockups, and defined the final UI system. I helped organize the product and sprint backlogs across four sprints, using a Kanban workflow in Trello and participating in standups and code reviews. As the designated Design Lead, I owned the overall UX/UI direction and visual system."
            },
            {
                image: "/jac-garage-tri.png",
                title: "End-to-End Feature Development: Garage System",
                content: "I was responsible for the Garage feature end-to-end, where users can create, view, update, and delete vehicles, store structured vehicle information, and attach maintenance records to each vehicle. This included building the full frontend flow and connecting it to backend services for data storage and media uploads."
            },
            {
                title: "What I Learned",
                content: "Through this project, I strengthened my skills in TypeScript and React Native, gained hands-on experience with AWS services such as API Gateway, Lambda, S3, and DynamoDB, and learned how to design and ship features in an Agile, sprint-based team environment with code reviews and standups. I also developed strong collaboration and communication skills by working cross-functionally with other engineers and leading sprint planning."
            }
            ]
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
            detailedDesc: "TableTap is a web-based POS system for a small family-owned restaurant, supporting customer ordering and staff menu management. I led the UI/UX design and built the Asset screen, where restaurants manage menu categories and reusable modifier groups. I also designed the data flow and backend structure to support flexible, scalable menu configuration.",
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
                github: "https://github.com/cdv0/TableTap",
                figma: "https://www.figma.com/design/vhPRzK2JqirTCtNcuQUTkO/TableTap?node-id=2-2&t=zmiu7o2w1Uk57i36-1"
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
            detailedDesc: "This project simulates a smart appliance data pipeline, where sensor readings are transmitted over a TCP client–server system, processed, and stored in MongoDB for querying and analysis. I deployed the system on Google Cloud Platform using virtual machines and manual network configuration, gaining hands-on experience with networking, cloud infrastructure, and end-to-end data processing workflows.",
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
                "Led the creation of an agentic AI assistant that goes beyond conversational responses to perform real actions inside the product, such as generating tasks, updating guest information, and executing multi-step workflows using function calling and tool integration.",
                "Conducted in-depth research on prompt engineering, LLM capabilities, and agentic system design to prototype and iterate on a production-ready AI workflow.",
                "Designed and built the main product dashboard, focusing on scalable component architecture, clear information hierarchy, and intuitive user flows.",
                "Developed an AI-driven budget estimation system that helps couples personalize budgets per category by factoring in overall budget, location-based averages, historical user data, preferences, and special requests.",
                "Owned features from ideation to production, creating high-fidelity designs, engineering the final implementations, and refining interactions based on user feedback.",
                "Worked cross-functionally with founders, designers, and engineers to plan features, debug complex issues, and ship improvements in fast-paced sprint cycles.",
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