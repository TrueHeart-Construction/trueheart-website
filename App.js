import React, { useState, useEffect } from 'react';

// --- DATA ---
// Centralized data for projects, services, and careers.
const projects = [
    {
        id: 'ucluelet-221-minato',
        title: 'Ucluelet 221 Minato',
        image: 'https://placehold.co/1200x800/4a5568/fff?text=Ucluelet+221+Minato',
        value: 'N/A',
        delivery: 'Construction Management',
        description: 'A high-density community using innovative, sustainable IGV-Nexus modular systems.',
        detailedDescription: 'This forward-thinking project in Ucluelet, BC, pioneers the use of the IGV-Nexus system. This modular approach integrates kitchens, bathrooms, HVAC, and all essential services into a single, efficient plug-and-play module. The result is a significant reduction in construction time, cost, and environmental impact. The development will provide a mix of affordable and market-rate housing, addressing the critical needs of the community while setting a new standard for sustainable construction.'
    },
    {
        id: 'sts-ailes-care-centre',
        title: "Sts'Ailes Community Care Centre",
        image: "https://placehold.co/1200x800/888/fff?text=Sts'Ailes+Care+Centre",
        value: '$25M',
        delivery: 'Construction Management',
        description: 'A First Nations-owned and operated healthcare initiative.',
        detailedDescription: "The Éyameth project in Agassiz, BC, is a groundbreaking initiative that merges modern medical services with traditional Indigenous health practices. It provides culturally safe primary care, social services, and Indigenous health supports to both Indigenous and non-Indigenous residents, fostering community well-being and reconciliation. The project is a cornerstone of First Nations self-determination in healthcare."
    },
    {
        id: 'capilano-university-residence',
        title: 'Capilano University Residence',
        image: 'https://placehold.co/1200x800/777/fff?text=Capilano+University',
        value: '$45M',
        delivery: 'Design Build',
        description: 'A 362-bed student housing and dining hall building.',
        detailedDescription: 'This six-storey, 8,250 sq. metre building provides much-needed on-campus housing. It features a 250-seat dining hall, multipurpose rooms, and an Indigenous-focused reflection space. The upper floors house student rooms, lounges, and study areas. Emphasizing sustainability, the project utilized a Wood First approach, incorporating mass timber and targeting Step 4 of the BC Energy Step Code for an 86% reduction in GHG emissions.'
    },
    {
        id: 'grande-prairie-hospital',
        title: 'Grande Prairie Hospital',
        image: 'https://placehold.co/1200x800/555/fff?text=Grande+Prairie+Hospital',
        value: '$560M',
        delivery: 'Construction Management at Risk',
        description: 'A modern, comprehensive healthcare facility in northern Alberta.',
        detailedDescription: 'The Grande Prairie Regional Hospital is a state-of-the-art facility serving a vast region. It replaces the aging Queen Elizabeth II Hospital and offers a wide array of acute and outpatient services, including a 24/7 emergency department, a cancer center with radiation therapy, advanced surgical suites, and comprehensive mental health services. This vital healthcare hub significantly enhances medical care for northern Alberta, reducing the need for patients to travel for specialized treatment.'
    },
    {
        id: 'atlantis-phase-iii',
        title: 'Atlantis Phase III - Bahamas',
        image: 'https://placehold.co/1200x800/666/fff?text=Atlantis+Phase+III',
        value: '$335M',
        delivery: 'Construction Management At Risk',
        description: 'Major expansion including The Cove, Residences, and Aquaventure.',
        detailedDescription: 'This monumental expansion solidified Atlantis as a premier Caribbean destination. The project included the construction of The Cove Atlantis, a luxury hotel; The Residences at Atlantis, high-end condominiums; and the sprawling Aquaventure water park. A key feature was the creation of Dolphin Cay, a world-class marine habitat focused on animal rescue, rehabilitation, and education. The project demanded complex logistical planning and execution in a challenging island environment.'
    },
    {
        id: 'no-3-rd-anderson',
        title: 'No. 3 Rd & Anderson',
        image: 'https://placehold.co/1200x800/999/fff?text=No.+3+Rd+&+Anderson',
        value: '$135M',
        delivery: 'Construction Management',
        description: 'A 319 unit purpose-built rental building in Richmond.',
        detailedDescription: 'This project delivers a significant number of rental units to the Richmond market, including a mix of affordable and market-rate options. The development features three buildings, a three-level parkade, and thoughtful urban design that enhances the local streetscape. It aims to create a vibrant, multi-functional urban experience for residents.'
    },
    {
        id: 'bridgeport-business-centre',
        title: 'Bridgeport Business Centre',
        image: 'https://placehold.co/1200x800/aaa/fff?text=Bridgeport+Business+Centre',
        value: '$55M',
        delivery: 'Construction Management',
        description: 'Sophisticated AAA office space with contemporary interiors.',
        detailedDescription: "Located in Richmond, this AAA office building offers cutting-edge systems and modern interiors. Key features include exclusive outdoor terraces, bike storage, showers, and ample parking. With high ceilings, large open spans for custom configurations, and expansive views of Vancouver and the Fraser River, it represents the pinnacle of contemporary office design."
    }
];

const services = [
    {
        title: 'Pre-Construction',
        icon: 'fas fa-drafting-compass',
        description: "TrueHeart brings a dedicated and collaborative approach to pre-construction, ensuring your project's success from the very beginning. We lay the groundwork for a smooth and rewarding construction experience.",
        points: [
            'Understanding Your Vision & Goals',
            'Thorough Site Analysis & Evaluation',
            'Accurate, Transparent Cost Estimating',
            'Collaborative & Realistic Scheduling',
            'Proactive Risk Identification & Management',
            'Strategic Procurement & Subcontractor Vetting',
            'Open, Honest & Consistent Communication'
        ]
    },
    {
        title: 'Construction',
        icon: 'fas fa-hard-hat',
        description: 'The construction stage marks the transition from meticulous planning to dedicated execution. We embrace this phase with a passionate commitment to bringing your vision to life, guided by our core values.',
        points: [
            'Effective Site Management & Leadership',
            'Active Schedule & Cost Control',
            'Rigorous Quality Management & Inspections',
            'Seamless Subcontractor Coordination',
            'Ongoing Risk Mitigation & Problem Solving',
            'Strict Safety Protocol Enforcement',
            'Detailed Progress Documentation & Reporting'
        ]
    },
    {
        title: 'Post-Construction',
        icon: 'fas fa-clipboard-check',
        description: "A successful project extends far beyond the final nail. Our commitment to excellence shines through in the post-construction phase, where we prioritize a smooth transition and ensure long-term building performance.",
        points: [
            'Meticulous Punch List Completion',
            'Final Inspections & Occupancy Permits',
            'Comprehensive Documentation & O&M Manuals',
            'Thorough Staff Training & Handover',
            'Transparent Financial Closeout & Reporting',
            'Post-Occupancy Performance Monitoring',
            'Ongoing Warranty & Commissioning Support'
        ]
    }
];

const jobOpenings = [
    {
        title: 'Project Manager',
        location: 'North Vancouver, BC',
        description: 'We are seeking an experienced Project Manager to oversee a variety of commercial and residential projects. The ideal candidate will have a strong background in construction management, excellent leadership skills, and a commitment to delivering projects on time and within budget.'
    },
    {
        title: 'Site Superintendent',
        location: 'Penticton, BC',
        description: 'Join our Interior BC team as a Site Superintendent. You will be responsible for daily on-site operations, ensuring safety compliance, coordinating trades, and maintaining the highest quality standards. A proven track record of successful site management is essential.'
    },
    {
        title: 'Project Coordinator',
        location: 'North Vancouver, BC',
        description: 'This entry-level position is perfect for a motivated individual looking to grow their career in construction management. You will support our project managers with documentation, scheduling, and communication, gaining valuable hands-on experience.'
    }
];


// --- COMPONENTS ---

// Header Component
function Header({ setPage }) {
    return (
    <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <button onClick={() => setPage({ page: 'home' })} className="text-2xl font-bold text-gray-900 flex items-center">
                <i className="fas fa-hard-hat text-yellow-600 mr-2"></i>
                <span>TRUEHEART</span>
            </button>
            <div className="hidden md:flex space-x-6 items-center">
                <button onClick={() => setPage({ page: 'home' })} className="text-gray-600 hover:text-yellow-600 transition duration-300">Home</button>
                <button onClick={() => setPage({ page: 'services' })} className="text-gray-600 hover:text-yellow-600 transition duration-300">Services</button>
                <button onClick={() => setPage({ page: 'projects' })} className="text-gray-600 hover:text-yellow-600 transition duration-300">Projects</button>
                 <button onClick={() => setPage({ page: 'careers' })} className="text-gray-600 hover:text-yellow-600 transition duration-300">Careers</button>
                <button onClick={() => setPage({ page: 'contact' })} className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition duration-300">Contact Us</button>
            </div>
        </nav>
    </header>
    );
}

// Footer Component
function Footer() {
    return (
    <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-6 text-center">
            <p>&copy; 2025 TrueHeart Construction Inc. All Rights Reserved.</p>
        </div>
    </footer>
    );
}

// Contact Form Component
function ContactForm({ callGeminiAPI, aiResponse, setAiResponse, isLoading }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [projectVision, setProjectVision] = useState('');
    
    const handleGenerateBrief = async () => {
        if (!projectVision) {
            setAiResponse("Please describe your project vision first.");
            return;
        }
        const prompt = `As a construction management expert from TrueHeart Construction, analyze the following project vision from a potential client. Create a high-level preliminary project brief. The brief should be encouraging and professional. It must include:
        1.  **Project Summary:** A brief, positive interpretation of the client's vision.
        2.  **Key Considerations:** A bulleted list of 3-4 important factors to think about (e.g., site logistics, materials, community impact, potential challenges).
        3.  **Suggested Next Steps:** A short paragraph outlining how TrueHeart would typically proceed (e.g., initial consultation, site evaluation, feasibility study).
        
        Client's Vision: "${projectVision}"
        
        Format the output clearly with Markdown headings.`;
        
        await callGeminiAPI(prompt, setAiResponse);
    }

    return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-6">
            <h2 className="section-title text-3xl font-bold mb-12 text-center text-white" style={{ borderBottomColor: '#ca8a04' }}>Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <div><h3 className="text-xl font-bold text-yellow-500 mb-2">Lower Mainland Office</h3><p>200-120 Lonsdale Avenue<br />North Vancouver, BC V7M 2E8</p></div>
                    <div><h3 className="text-xl font-bold text-yellow-500 mb-2">Interior BC Office</h3><p>129 Nanaimo Ave W<br />Penticton, BC V2A 1N2</p></div>
                    <div><h3 className="text-xl font-bold text-yellow-500 mb-2">Contact Details</h3><p><i className="fas fa-phone mr-2"></i> 604-353-6976</p><p><i className="fas fa-envelope mr-2"></i> info@trueheartconstruction.ca</p></div>
                </div>

                <div>
                     <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                        <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-yellow-500 text-white"/>
                        <input type="email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-yellow-500 text-white"/>
                        <textarea placeholder="Your Message" value={message} onChange={e => setMessage(e.target.value)} rows="4" className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-yellow-500 text-white"></textarea>
                        <button type="submit" className="w-full bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition duration-300">Send Message</button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-gray-700">
                         <h3 className="text-2xl font-bold text-yellow-500 mb-4">Project Vision AI ✨</h3>
                         <p className="mb-4 text-gray-300">Have a project idea? Describe your vision below and our AI can generate a preliminary brief to help you get started.</p>
                         <textarea placeholder="e.g., I want to build a 5-story mixed-use building with retail on the ground floor and affordable apartments above..." value={projectVision} onChange={e => setProjectVision(e.target.value)} rows="5" className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-yellow-500 text-white"></textarea>
                         <button onClick={handleGenerateBrief} disabled={isLoading} className="w-full mt-4 bg-yellow-500 text-gray-900 px-6 py-3 rounded-md hover:bg-yellow-400 transition duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed font-semibold">
                             {isLoading ? 'Generating...' : '✨ Generate Project Brief'}
                         </button>
                    </div>

                    {aiResponse && (
                        <div className="mt-6 p-4 bg-gray-700 rounded-md">
                            <h4 className="font-bold text-lg mb-2 text-yellow-500">AI Generated Brief:</h4>
                            <div className="prose prose-invert text-gray-300" dangerouslySetInnerHTML={{ __html: aiResponse.replace(/\n/g, '<br />') }}></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </section>
    );
}

// Project Card Component
function ProjectCard({ project, setPage }) {
    return (
    <div className="project-card bg-white rounded-lg shadow-lg overflow-hidden relative">
        <img src={project.image.replace('1200x800', '600x400')} alt={project.title} className="w-full h-64 object-cover" />
        <div className="p-6">
            <h3 className="font-bold text-xl">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.delivery}</p>
            <button onClick={() => setPage({ page: 'projectDetail', projectId: project.id })} className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition duration-300">
                View Details
            </button>
        </div>
    </div>
    );
}


// --- PAGES ---

// Home Page Component
function HomePage({ setPage }) {
    return (
    <>
        <section className="bg-cover bg-center h-[60vh] flex items-center justify-center text-white text-center" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://placehold.co/1920x1080/444/fff?text=TrueHeart+Construction')"}}>
            <div className="container mx-auto px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">Building with Purpose and Passion</h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto">Your trusted partner in construction management, delivering high-quality, sustainable, and cost-effective solutions.</p>
            </div>
        </section>

        <section className="bg-white py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                   <div className="p-6"><i className="fas fa-rocket text-4xl text-yellow-600 mb-4"></i><h3 className="font-bold text-xl mb-2">Proactive Responsiveness</h3><p className="text-gray-600">Anticipating needs and acting swiftly to ensure project momentum.</p></div>
                   <div className="p-6"><i className="fas fa-shield-alt text-4xl text-yellow-600 mb-4"></i><h3 className="font-bold text-xl mb-2">Uncompromising Integrity</h3><p className="text-gray-600">Upholding the highest ethical standards in every action.</p></div>
                   <div className="p-6"><i className="fas fa-cogs text-4xl text-yellow-600 mb-4"></i><h3 className="font-bold text-xl mb-2">Excellence in Execution</h3><p className="text-gray-600">A relentless pursuit of quality from groundbreaking to handover.</p></div>
                   <div className="p-6"><i className="fas fa-lightbulb text-4xl text-yellow-600 mb-4"></i><h3 className="font-bold text-xl mb-2">Solution-Oriented Leadership</h3><p className="text-gray-600">Tackling challenges with innovative strategies for success.</p></div>
                </div>
            </div>
        </section>

        <section id="commitment" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="section-title text-3xl font-bold mb-6">Building for Communities</h2>
                        <p className="text-gray-600 text-lg mb-4">TrueHeart Construction is founded on the belief that a home is the cornerstone of a thriving community. We are deeply committed to developing affordable and attainable housing solutions that address the diverse needs of all groups, including a specialized focus on partnerships with First Nations communities.</p>
                        <p className="text-gray-600 mb-6">Our vision is to be a trusted partner, bridging the gap between innovation and tradition. By leveraging hybrid modular solutions, we work collaboratively to build resilient, energy-efficient communities that reflect cultural values and modern living standards, fostering long-term prosperity and creating lasting relationships.</p>
                        <button onClick={() => setPage({ page: 'contact' })} className="bg-yellow-600 text-white px-8 py-3 rounded-md hover:bg-yellow-700 transition duration-300 text-lg">
                            Partner With Us
                        </button>
                    </div>
                    <div>
                        <img src="https://placehold.co/600x450/a0aec0/fff?text=Community+Housing" alt="A modern affordable housing complex" className="rounded-lg shadow-xl"/>
                    </div>
                </div>
            </div>
        </section>

        <section id="services-summary" className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="section-title text-3xl font-bold mb-12">Our Services</h2>
                <p className="max-w-3xl mx-auto text-gray-600 mb-12">From initial concept to final handover, TrueHeart Construction provides comprehensive management for every phase of your project. We ensure a seamless process built on a foundation of collaboration, expertise, and a commitment to your vision.</p>
                <button onClick={() => setPage({ page: 'services' })} className="bg-yellow-600 text-white px-8 py-3 rounded-md hover:bg-yellow-700 transition duration-300 text-lg">
                    Learn More About Our Approach
                </button>
            </div>
        </section>

        <section id="projects" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="section-title text-3xl font-bold mb-12 text-center">TrueHeart Team Project Experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.slice(0, 3).map(p => <ProjectCard key={p.id} project={p} setPage={setPage} />)}
                </div>
                <div className="text-center mt-12">
                    <button onClick={() => setPage({ page: 'projects' })} className="bg-yellow-600 text-white px-8 py-3 rounded-md hover:bg-yellow-700 transition duration-300 text-lg">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    </>
    );
}

// Services Page Component
function ServicesPage() {
    return (
    <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h1 className="section-title text-4xl font-bold">Our Construction Management Services</h1>
                <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">We provide end-to-end construction management, ensuring every project phase is executed with precision, integrity, and a focus on delivering maximum value to our clients. Our methodology is built on a foundation of collaboration and proactive leadership.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map(service => (
                    <div key={service.title} className="bg-gray-50 p-8 rounded-lg shadow-lg border-t-4 border-yellow-600">
                        <div className="flex items-center mb-4">
                            <i className={`${service.icon} text-3xl text-yellow-600`}></i>
                            <h2 className="text-2xl font-bold ml-4">{service.title}</h2>
                        </div>
                        <p className="text-gray-600 mb-6">{service.description}</p>
                        <ul className="space-y-3">
                            {service.points.map(point => (
                                <li key={point} className="flex items-start">
                                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                    <span className="text-gray-700">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}


// Project List Page Component
function ProjectListPage({ setPage }) {
    return (
    <div className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
            <h2 className="section-title text-3xl font-bold mb-12 text-center">Our Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map(p => <ProjectCard key={p.id} project={p} setPage={setPage} />)}
            </div>
        </div>
    </div>
    );
}

// Project Detail Page Component
function ProjectDetailPage({ projectId, setPage, callGeminiAPI, aiResponse, setAiResponse, isLoading }) {
    const project = projects.find(p => p.id === projectId);

    const handleGenerateSummary = async () => {
        const prompt = `Based on the following project description for a TrueHeart Construction project titled "${project.title}", generate a concise summary for a website visitor. The summary should be easy to read and highlight the project's key successes and impact. Format it as a bulleted list.

Project Description: "${project.detailedDescription}"`;
        await callGeminiAPI(prompt, setAiResponse);
    };

    useEffect(() => {
        setAiResponse('');
    }, [projectId, setAiResponse]);

    if (!project) {
        return (
            <div className="container mx-auto px-6 py-20 text-center">
                <h2 className="text-2xl font-bold">Project Not Found</h2>
                <button onClick={() => setPage({ page: 'projects' })} className="mt-4 bg-yellow-600 text-white px-6 py-2 rounded-md hover:bg-yellow-700">
                    Back to Projects
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white py-20">
            <div className="container mx-auto px-6">
                <button onClick={() => setPage({ page: 'projects' })} className="mb-8 text-yellow-600 hover:text-yellow-700 font-semibold">
                    &larr; Back to All Projects
                </button>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3">
                        <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg shadow-xl object-cover" />
                    </div>
                    <div className="lg:col-span-2">
                        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                        <div className="mb-6 text-lg space-y-2">
                            <p><strong className="font-semibold text-gray-800">Value:</strong> <span className="text-gray-600">{project.value}</span></p>
                            <p><strong className="font-semibold text-gray-800">Contract:</strong> <span className="text-gray-600">{project.delivery}</span></p>
                        </div>
                        <h2 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4">Project Overview</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">{project.detailedDescription}</p>
                        
                        <div className="mt-6">
                            <button onClick={handleGenerateSummary} disabled={isLoading} className="w-full bg-yellow-500 text-gray-900 px-6 py-3 rounded-md hover:bg-yellow-400 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold">
                                {isLoading ? 'Generating...' : '✨ Generate AI Summary'}
                            </button>
                            {aiResponse && (
                                <div className="mt-4 p-4 bg-gray-100 rounded-md border border-gray-200">
                                     <h4 className="font-bold text-lg mb-2 text-gray-800">AI Project Insights:</h4>
                                     <div className="prose" dangerouslySetInnerHTML={{ __html: aiResponse.replace(/\*/g, '').replace(/\n/g, '<br />') }}></div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Contact Page Component
function ContactPage({ callGeminiAPI, aiResponse, setAiResponse, isLoading }) {
    return (
    <div className="bg-gray-100">
        <ContactForm callGeminiAPI={callGeminiAPI} aiResponse={aiResponse} setAiResponse={setAiResponse} isLoading={isLoading}/>
    </div>
    );
}

// Careers Page Component
function CareersPage() {
    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="section-title text-4xl font-bold">Join Our Team</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">At TrueHeart Construction, we build more than just structures; we build careers. We are a team of passionate professionals dedicated to excellence, integrity, and collaboration. If you are driven, innovative, and want to be part of a company that values its people and communities, we invite you to explore our open positions.</p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Current Openings</h2>
                    <div className="space-y-8">
                        {jobOpenings.map((job, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-yellow-600">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-2xl font-bold text-gray-800">{job.title}</h3>
                                    <span className="text-gray-500 font-semibold">{job.location}</span>
                                </div>
                                <p className="text-gray-600">{job.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md">
                        <h3 className="font-bold text-lg">How to Apply</h3>
                        <p className="mt-2">To apply for a position, please send your resume and a cover letter to <a href="mailto:info@trueheartconstruction.ca" className="font-semibold underline hover:text-yellow-800">info@trueheartconstruction.ca</a>. Please include the job title in the subject line of your email.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


// --- Main App Component ---
function App() {
    const [page, setPage] = useState({ page: 'home' });
    const [aiResponse, setAiResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const callGeminiAPI = async (prompt, responseSetter) => {
        setIsLoading(true);
        responseSetter("Generating... Please wait.");
        
        try {
            // Securely access the API key from environment variables
            const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
            if (!apiKey) {
                responseSetter("API Key is not configured. Please contact the site administrator.");
                setIsLoading(false);
                return;
            }

            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
            const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
            const payload = { contents: chatHistory };

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                 throw new Error(`API call failed with status: ${response.status}`);
            }

            const result = await response.json();
            
            if (result.candidates && result.candidates.length > 0 &&
              result.candidates[0].content && result.candidates[0].content.parts &&
              result.candidates[0].content.parts.length > 0) {
                const text = result.candidates[0].content.parts[0].text;
                responseSetter(text);
            } else {
                responseSetter("Sorry, I couldn't generate a response. Please try again.");
            }
        } catch (error) {
            console.error("Gemini API call error:", error);
            responseSetter("An error occurred while contacting the AI. Please check the console for details.");
        } finally {
            setIsLoading(false);
        }
    };
    
    useEffect(() => {
        window.scrollTo(0, 0);
        setAiResponse(''); 
    }, [page.page]);

    const renderPage = () => {
        switch (page.page) {
            case 'services':
                return <ServicesPage />;
            case 'projects':
                return <ProjectListPage setPage={setPage} />;
            case 'projectDetail':
                return <ProjectDetailPage projectId={page.projectId} setPage={setPage} callGeminiAPI={callGeminiAPI} aiResponse={aiResponse} setAiResponse={setAiResponse} isLoading={isLoading} />;
            case 'contact':
                return <ContactPage callGeminiAPI={callGeminiAPI} aiResponse={aiResponse} setAiResponse={setAiResponse} isLoading={isLoading} />;
            case 'careers':
                return <CareersPage />;
            case 'home':
            default:
                return <HomePage setPage={setPage} />;
        }
    };

    return (
        <div className="bg-gray-100 text-gray-800 font-sans">
            <Header setPage={setPage} />
            <main>
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
}

export default App;
