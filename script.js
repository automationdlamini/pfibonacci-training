
/**
 * Pfibonacci Industrial Training Platform & LMS Engine
 * Supports 5 core technical courses, modular learning pages, technical diagrams,
 * reusable quizzes, track selection (T2000 OM / T3000 HMI), and persistent progress tracking via localStorage.
 */

// --- COURSES DATA STRUCTURE ---
const coursesData = [
    {
        id: "computer-fundamentals",
        title: "Computer Fundamentals and Networking",
        description: "Foundation knowledge for the computer, operating system, database, networking and server technologies used in industrial control environments.",
        modules: [
            {
                id: "mod-1",
                number: 1,
                title: "Computer Systems Fundamentals",
                description: "Introduction to what constitutes a computer system, hardware, software, and the Input-Process-Output model.",
                learningObjectives: [
                    "Explain what a computer system is",
                    "Distinguish hardware from software",
                    "Understand the Input → Process → Output model",
                    "Relate computer systems to industrial control environments"
                ],
                sections: [
                    {
                        heading: "1.1 What is a Computer System?",
                        content: "A computer system is not merely a collection of electronic components; it is an integrated combination of hardware, software, data, and users working together to receive input, process information according to stored instructions, store data, and produce meaningful outputs."
                    },
                    {
                        heading: "1.2 The Input-Process-Output Model",
                        content: "In industrial automation and computer science alike, systems operate on the fundamental I-P-O paradigm. Signals and data from the field or user are captured (Input), evaluated and computed by the processing unit (Process), and transmitted to actuators, displays, or storage media (Output)."
                    },
                    {
                        type: "diagram",
                        title: "Computer System Information Flow",
                        nodes: ["Field / User Input", "Central Processing Unit (CPU)", "Memory & Storage", "System Output / Actuator"]
                    },
                    {
                        type: "keyConcept",
                        title: "Key Concept: System Integrity",
                        text: "Industrial computer systems require deterministic performance, high reliability, and clear separation between application software and operating system layers."
                    }
                ],
                quiz: [
                    { 
                        question: "What is a computer system?", 
                        answers: [
                            { text: "Only hardware components", correct: false }, 
                            { text: "Hardware and software working together", correct: true }, 
                            { text: "Only operating system software", correct: false }, 
                            { text: "Only user terminals", correct: false }
                        ],
                        explanation: "A computer system combines hardware, software, data, and operators to execute computational and control tasks."
                    },
                    { 
                        question: "Which component is NOT part of a fundamental computer system?", 
                        answers: [
                            { text: "Hardware", correct: false }, 
                            { text: "Software", correct: false }, 
                            { text: "Data", correct: false }, 
                            { text: "Raw ambient electricity", correct: true }
                        ],
                        explanation: "Electricity powers the system, but the core architectural components of a computer system are hardware, software, data, and users."
                    },
                    { 
                        question: "What does the Input → Process → Output model represent?", 
                        answers: [
                            { text: "The fundamental flow of information, data capture, and execution in a system", correct: true }, 
                            { text: "Network cabling standards", correct: false }, 
                            { text: "Database indexing methods", correct: false }, 
                            { text: "User authentication protocols", correct: false }
                        ],
                        explanation: "I-P-O is the standard engineering model describing how inputs are transformed into actionable outputs."
                    },
                    { 
                        question: "In an industrial control system, who or what typically provides the primary control input?", 
                        answers: [
                            { text: "Only the database server", correct: false }, 
                            { text: "Field instrumentation, sensors, and operators", correct: true }, 
                            { text: "The cooling fans", correct: false }, 
                            { text: "The system logs", correct: false }
                        ],
                        explanation: "Control inputs originate from field sensors, instrumentation, and operator commands."
                    }
                ]
            },
            {
                id: "mod-2",
                number: 2,
                title: "Computer Hardware Architecture",
                description: "Deep dive into CPU architecture, RAM, cache hierarchy, buses, and storage devices.",
                learningObjectives: [
                    "Understand CPU execution cycles",
                    "Distinguish RAM from permanent storage",
                    "Explain memory hierarchy and cache",
                    "Identify server hardware requirements"
                ],
                sections: [
                    {
                        heading: "2.1 Central Processing Unit (CPU)",
                        content: "The CPU is the 'brain' of the computer, containing the Arithmetic Logic Unit (ALU), Control Unit, and high-speed registers. It fetches, decodes, and executes machine instructions."
                    },
                    {
                        heading: "2.2 Memory Hierarchy",
                        content: "Systems utilize a hierarchy of memory ranging from ultra-fast CPU registers and L1/L2 cache to volatile system RAM and non-volatile solid-state storage."
                    },
                    {
                        type: "keyConcept",
                        title: "Key Concept: Volatile vs Non-Volatile",
                        text: "RAM (Random Access Memory) is volatile and loses data upon power loss, whereas hard drives and SSDs provide non-volatile persistent storage."
                    }
                ],
                quiz: [
                    {
                        question: "What is the primary responsibility of the CPU?",
                        answers: [
                            { text: "Executing program instructions and processing data", correct: true },
                            { text: "Providing permanent long-term file storage", correct: false },
                            { text: "Regulating room temperature", correct: false },
                            { text: "Managing local area network cables", correct: false }
                        ],
                        explanation: "The CPU executes instructions and performs mathematical and logical operations."
                    },
                    {
                        question: "What is the characteristic of RAM?",
                        answers: [
                            { text: "Non-volatile storage for backups", correct: false },
                            { text: "Volatile high-speed working memory for active processes", correct: true },
                            { text: "Optical disc reader", correct: false },
                            { text: "Network routing hardware", correct: false }
                        ],
                        explanation: "RAM is volatile memory that holds active operating system tasks and running application data."
                    }
                ]
            },
            {
                id: "mod-3",
                number: 3,
                title: "Software, Operating Systems & System Software",
                description: "Understanding system software, kernel operations, drivers, and application layers.",
                learningObjectives: [
                    "Define the role of an operating system kernel",
                    "Understand device drivers and hardware abstraction",
                    "Distinguish system software from application software"
                ],
                sections: [
                    {
                        heading: "3.1 The Operating System Kernel",
                        content: "The kernel is the core component of an operating system, managing CPU scheduling, memory allocation, security, and hardware communication via device drivers."
                    }
                ],
                quiz: [
                    {
                        question: "What is the main function of an operating system?",
                        answers: [
                            { text: "Manage hardware and software resources", correct: true },
                            { text: "Generate electrical power", correct: false },
                            { text: "Replace physical plant wiring", correct: false },
                            { text: "Design database schemas", correct: false }
                        ],
                        explanation: "An OS acts as an intermediary between user applications and computer hardware."
                    }
                ]
            },
            {
                id: "mod-4",
                number: 4,
                title: "UNIX & Command-Line Fundamentals",
                description: "Navigating UNIX environments, file permissions, processes, and essential CLI commands.",
                learningObjectives: [
                    "Master basic navigation commands (pwd, ls, cd)",
                    "Understand file permissions and ownership",
                    "Manage system processes using ps and kill"
                ],
                sections: [
                    {
                        heading: "4.1 Command Line Interface (CLI)",
                        content: "Industrial engineering stations and servers frequently run UNIX/Linux environments where CLI tools provide precise control and automation capabilities."
                    }
                ],
                quiz: [
                    {
                        question: "Which command displays the present working directory in UNIX?",
                        answers: [
                            { text: "ls", correct: false },
                            { text: "pwd", correct: true },
                            { text: "cd", correct: false },
                            { text: "ps", correct: false }
                        ],
                        explanation: "'pwd' stands for Print Working Directory."
                    }
                ]
            },
            {
                id: "mod-5",
                number: 5,
                title: "Applications, Processes, Servers & Client-Server Architecture",
                description: "Understanding background daemons, running processes, and client-server communication models.",
                learningObjectives: [
                    "Explain client-server architecture",
                    "Define background processes and daemons",
                    "Understand multi-tier system designs"
                ],
                sections: [
                    {
                        heading: "5.1 Client-Server Paradigm",
                        content: "In modern control systems, human-machine interfaces act as clients requesting process data from centralized plant servers."
                    }
                ],
                quiz: [
                    {
                        question: "What is a client in a client-server architecture?",
                        answers: [
                            { text: "A machine or software requesting services", correct: true },
                            { text: "A passive storage cabinet", correct: false },
                            { text: "A power supply unit", correct: false },
                            { text: "A circuit breaker", correct: false }
                        ],
                        explanation: "Clients request data or services from servers."
                    }
                ]
            },
            {
                id: "mod-6",
                number: 6,
                title: "Web Services, HTTP & Tomcat",
                description: "Introduction to web protocols, request-response cycles, and Apache Tomcat application containers.",
                learningObjectives: [
                    "Understand HTTP request and response methods",
                    "Explain the role of web application servers like Tomcat",
                    "Analyze browser-server interactions"
                ],
                sections: [
                    {
                        heading: "6.1 HTTP Protocol",
                        content: "The Hypertext Transfer Protocol governs how web clients and servers exchange information via requests and status responses."
                    }
                ],
                quiz: [
                    {
                        question: "What is HTTP primarily used for?",
                        answers: [
                            { text: "Web communication and data transfer", correct: true },
                            { text: "Hard drive partitioning", correct: false },
                            { text: "PLC ladder logic compilation", correct: false },
                            { text: "Direct sensor calibration", correct: false }
                        ],
                        explanation: "HTTP is the foundational protocol for web traffic."
                    }
                ]
            },
            {
                id: "mod-7",
                number: 7,
                title: "Database Fundamentals & SQL",
                description: "Relational database structures, tables, rows, columns, and basic SQL querying.",
                learningObjectives: [
                    "Understand relational database concepts",
                    "Write basic SELECT queries",
                    "Recognize the role of plant historians and engineering databases"
                ],
                sections: [
                    {
                        heading: "7.1 Relational Databases",
                        content: "Industrial databases store historical plant alarms, trend data, and configuration parameters in structured tables."
                    }
                ],
                quiz: [
                    {
                        question: "What does the SQL SELECT statement do?",
                        answers: [
                            { text: "Retrieve data from a database", correct: true },
                            { text: "Delete physical hardware", correct: false },
                            { text: "Format hard drives", correct: false },
                            { text: "Reboot the operating system", correct: false }
                        ],
                        explanation: "SELECT queries retrieve data from database tables."
                    }
                ]
            },
            {
                id: "mod-8",
                number: 8,
                title: "Networking Fundamentals",
                description: "OSI model, TCP/IP, IP addressing, subnets, switches, and routers in industrial setups.",
                learningObjectives: [
                    "Understand IP addressing and subnet masks",
                    "Differentiate between TCP and UDP",
                    "Recognize industrial networking equipment"
                ],
                sections: [
                    {
                        heading: "8.1 IP Addressing",
                        content: "Every device on an automation network requires a unique IP address to communicate reliably."
                    }
                ],
                quiz: [
                    {
                        question: "What is an IP address?",
                        answers: [
                            { text: "A unique network identifier for a device", correct: true },
                            { text: "A software password", correct: false },
                            { text: "A CPU register", correct: false },
                            { text: "A printer cable type", correct: false }
                        ],
                        explanation: "An IP address uniquely identifies network nodes."
                    }
                ]
            },
            {
                id: "mod-9",
                number: 9,
                title: "Network Configuration, Testing & Troubleshooting",
                description: "Practical network diagnostics using ping, traceroute, ipconfig/ifconfig, and troubleshooting connectivity.",
                learningObjectives: [
                    "Use ping and traceroute for diagnostics",
                    "Verify local network interface configurations",
                    "Isolate industrial communication faults"
                ],
                sections: [
                    {
                        heading: "9.1 Diagnostic Utilities",
                        content: "Tools like ping verify end-to-end packet transmission between engineering stations and controllers."
                    }
                ],
                quiz: [
                    {
                        question: "Which utility is commonly used to test network reachability?",
                        answers: [
                            { text: "ping", correct: true },
                            { text: "format", correct: false },
                            { text: "chmod", correct: false },
                            { text: "ls", correct: false }
                        ],
                        explanation: "ping sends ICMP echo requests to test connectivity."
                    }
                ]
            }
        ]
    },
    {
        id: "process-instrumentation",
        title: "Process Instrumentation Fundamentals",
        description: "Comprehensive study of industrial field instrumentation, measurement principles, analog/binary signals, and actuators.",
        modules: [
            {
                id: "inst-1",
                number: 1,
                title: "Introduction to Process / Field Instrumentation",
                description: "Overview of field devices, sensing principles, transmitters, and control loops.",
                learningObjectives: ["Understand field instrumentation hierarchy", "Differentiate sensors from transmitters"],
                sections: [{ heading: "1.1 Field Instrumentation", content: "Field instruments monitor and control physical process variables." }],
                quiz: [{ question: "What is the role of a field transmitter?", answers: [{ text: "Convert sensor signals to standardized transmission signals", correct: true }, { text: "Consume process steam", correct: false }], explanation: "Transmitters condition and transmit sensor data." }]
            },
            { id: "inst-2", number: 2, title: "Pressure Measurement and Instruments", description: "Bourdon tubes, piezoresistive cells, differential pressure transmitters.", learningObjectives: ["Understand pressure principles"], sections: [{ heading: "2.1 Pressure", content: "Pressure is force per unit area." }], quiz: [{ question: "What does DP stand for in instrumentation?", answers: [{ text: "Differential Pressure", correct: true }, { text: "Digital Power", correct: false }], explanation: "DP measures pressure differences." }] },
            { id: "inst-3", number: 3, title: "Flow Measurement and Instruments", description: "Orifice plates, magnetic flowmeters, Coriolis meters, ultrasonic flow measurement.", learningObjectives: ["Understand volumetric vs mass flow"], sections: [{ heading: "3.1 Flowmeters", content: "Flow measurement is vital for mass balance." }], quiz: [{ question: "What does a magnetic flowmeter require?", answers: [{ text: "Conductive fluid", correct: true }, { text: "Vacuum seal", correct: false }], explanation: "Magmeters rely on Faraday's law of induction for conductive fluids." }] },
            { id: "inst-4", number: 4, title: "Temperature Measurement and Instruments", description: "RTDs (Pt100), thermocouples, pyrometers, and transmitter scaling.", learningObjectives: ["Compare RTDs and thermocouples"], sections: [{ heading: "4.1 Temperature", content: "RTDs change resistance with temperature." }], quiz: [{ question: "What is a Pt100 sensor?", answers: [{ text: "An RTD with 100 ohms resistance at 0°C", correct: true }, { text: "A pressure switch", correct: false }], explanation: "Pt100 is standard industrial RTD." }] },
            { id: "inst-5", number: 5, title: "Level and Position Measurement", description: "Hydrostatic head, radar level transmitters, capacitance probes, and valve position feedback.", learningObjectives: ["Understand continuous level measurement"], sections: [{ heading: "5.1 Level", content: "Level measurement ensures safe vessel operation." }], quiz: [{ question: "How does radar level measurement work?", answers: [{ text: "Time-of-flight of electromagnetic microwave pulses", correct: true }, { text: "Buoyant float weight", correct: false }], explanation: "Radar uses microwave reflection." }] },
            { id: "inst-6", number: 6, title: "Conductivity and Analytical Instrumentation", description: "pH, conductivity, dissolved oxygen, and chemical analysis loops.", learningObjectives: ["Understand water chemistry instrumentation"], sections: [{ heading: "6.1 Analytics", content: "Analytical instruments ensure water purity in boiler circuits." }], quiz: [{ question: "What does conductivity measure?", answers: [{ text: "Ability of a solution to conduct electrical current", correct: true }, { text: "Fluid viscosity", correct: false }], explanation: "Conductivity relates to ionic concentration." }] },
            { id: "inst-7", number: 7, title: "Binary / Digital Instruments and Switches", description: "Pressure switches, level switches, limit switches, and 24V binary signals.", learningObjectives: ["Distinguish analog from binary signals"], sections: [{ heading: "7.1 Switches", content: "Binary switches provide discrete status signals (0 or 1)." }], quiz: [{ question: "What is a typical voltage level for binary industrial control signals?", answers: [{ text: "24V DC", correct: true }, { text: "230V AC direct field power", correct: false }, { text: "12V car battery", correct: false }, { text: "5V TTL", correct: false }], explanation: "24V DC is standard for industrial binary I/O." }] },
            { id: "inst-8", number: 8, title: "Control Valves and Actuators – SIPART / DREHMO", description: "Pneumatic control valves, positioners (SIPART), electric actuators (DREHMO).", learningObjectives: ["Understand valve positioning and feedback"], sections: [{ heading: "8.1 Actuators", content: "SIPART and DREHMO actuators modulate process flow and damper positions." }], quiz: [{ question: "What is the function of a valve positioner like SIPART?", answers: [{ text: "Ensure valve stem position matches control command precisely", correct: true }, { text: "Measure boiler temperature", correct: false }], explanation: "Positioners regulate pneumatic actuator pressure." }] },
            { id: "inst-9", number: 9, title: "Instrument Signals, Wiring, I/O and Troubleshooting", description: "4-20mA loops, HART protocol, shielded cabling, grounding, and loop fault diagnosis.", learningObjectives: ["Troubleshoot 4-20mA current loops"], sections: [{ heading: "9.1 Signal Wiring", content: "4-20mA current loops are immune to voltage drop over long cable runs." }], quiz: [{ question: "What does 4 mA represent in a standard 4-20mA analog loop?", answers: [{ text: "The 0% scale (Low range value)", correct: true }, { text: "Burnout fault condition", correct: false }, { text: "Maximum process span", correct: false }], explanation: "4mA is zero scale live zero." }] }
        ]
    },
    {
        id: "plc-fundamentals",
        title: "PLC Fundamentals – S5 / S7",
        description: "Architecture, scan cycle, organization blocks, memory organization, and programming concepts for Siemens S5 and S7 systems.",
        modules: [
            { id: "plc-1", number: 1, title: "Introduction to PLCs", description: "Evolution of programmable logic controllers in industrial automation.", learningObjectives: ["Understand PLC advantages over relay logic"], sections: [{ heading: "1.1 PLC Overview", content: "PLCs replaced electromechanical relay panels with robust digital processors." }], quiz: [{ question: "What is the primary advantage of a PLC over hardwired relay logic?", answers: [{ text: "Flexibility and reprogrammability without rewiring", correct: true }, { text: "Lower operational voltage", correct: false }], explanation: "PLCs allow software modifications." }] },
            { id: "plc-2", number: 2, title: "PLC Hardware Architecture", description: "CPU, power supply, rack, input/output modules.", learningObjectives: ["Identify PLC hardware modules"], sections: [{ heading: "2.1 Hardware", content: "Modular racks house power supplies, CPUs, and I/O cards." }], quiz: [{ question: "What does a PLC output module do?", answers: [{ text: "Drive actuators, contactors, and solenoids from internal logic", correct: true }, { text: "Read field sensor voltages", correct: false }], explanation: "Outputs switch external loads." }] },
            { id: "plc-3", number: 3, title: "Inputs, Outputs and Field Signals", description: "Digital/analog input modules, signal conversion, optical isolation.", learningObjectives: ["Understand signal conditioning"], sections: [{ heading: "3.1 Field Signals", content: "Isolation protects PLC electronics from field voltage surges." }], quiz: [{ question: "Why is optical isolation used in PLC I/O?", answers: [{ text: "To electrically isolate field circuits from internal CPU logic", correct: true }, { text: "To amplify radio signals", correct: false }], explanation: "Optocouplers prevent electrical damage." }] },
            { id: "plc-4", number: 4, title: "PLC Scan Cycle and Cycle Time", description: "Read inputs -> Execute program -> Write outputs scan sequence.", learningObjectives: ["Explain the deterministic PLC scan cycle"], sections: [{ heading: "4.1 Scan Cycle", content: "The CPU executes cyclic program sweeps continuously." }], quiz: [{ question: "What are the three main phases of a PLC scan cycle?", answers: [{ text: "Read inputs, execute user program, write outputs", correct: true }, { text: "Compile code, boot OS, run diagnostics", correct: false }], explanation: "Cyclic scan reads inputs, runs logic, updates outputs." }] },
            { id: "plc-5", number: 5, title: "PLC Program Organisation and Execution", description: "Structured programming, cyclic execution, system interrupts.", learningObjectives: ["Understand program structure"], sections: [{ heading: "5.1 Organization", content: "Programs are divided into blocks for modular maintenance." }], quiz: [{ question: "Why use structured programming blocks in PLCs?", answers: [{ text: "To improve modularity, reusability, and readability", correct: true }, { text: "To consume more memory", correct: false }], explanation: "Modularity simplifies debugging." }] },
            { id: "plc-6", number: 6, title: "Organisation Blocks – OBs", description: "Startup OBs, cyclic execution OBs, error handling OBs.", learningObjectives: ["Identify OB types in Siemens systems"], sections: [{ heading: "6.1 OBs", content: "Organization blocks interface the operating system with user code." }], quiz: [{ question: "What is the role of OB1 in Siemens S7/programming?", answers: [{ text: "Main cyclic execution block", correct: true }, { text: "Power failure interrupt", correct: false }], explanation: "OB1 runs cyclically in the background." }] },
            { id: "plc-7", number: 7, title: "Data Blocks, Program Blocks, Function Blocks and Other Blocks", description: "DBs, FBs, FCs, instances, and static variables.", learningObjectives: ["Distinguish DBs, FBs, and FCs"], sections: [{ heading: "7.1 Memory Blocks", content: "Function Blocks (FBs) maintain instance data in Data Blocks (DBs)." }], quiz: [{ question: "What distinguishes a Function Block (FB) from a Function (FC)?", answers: [{ text: "FB has dedicated instance data storage (DB)", correct: true }, { text: "FC cannot perform math", correct: false }], explanation: "FBs retain memory across scans via DBs." }] },
            { id: "plc-8", number: 8, title: "Open-Loop / Closed-Loop Control and Loop Execution", description: "PID algorithms, setpoints, feedback, and actuator control loops.", learningObjectives: ["Understand PID control loops"], sections: [{ heading: "8.1 Control Loops", content: "Closed-loop control continuously compares process variable to setpoint." }], quiz: [{ question: "What does PID stand for in control systems?", answers: [{ text: "Proportional-Integral-Derivative", correct: true }, { text: "Pressure-Indicator-Device", correct: false }], explanation: "PID is the standard feedback control algorithm." }] },
            { id: "plc-9", number: 9, title: "PLCs in the DCS and Power Station Automation Environment", description: "Integration of PLCs into distributed control systems and high-availability networks.", learningObjectives: ["Understand DCS hierarchy"], sections: [{ heading: "9.1 Automation Hierarchy", content: "PLCs operate at cell and field control levels within plant-wide DCS architectures." }], quiz: [{ question: "What is the primary role of a DCS in a power station?", answers: [{ text: "Centralized supervision, data acquisition, and plant-wide control", correct: true }, { text: "Only office email management", correct: false }], explanation: "DCS manages integrated plant operations." }] }
        ]
    },
    {
        id: "es680-engineering",
        title: "Engineering Station – ES680",
        description: "Engineering station concepts, Ingres database configuration, hardware parameterization, and S5/S7 engineering workflows.",
        modules: [
            { id: "es-1", number: 1, title: "Introduction to ES680 and the Engineering Environment", description: "Overview of ES680 engineering station role in T2000/TXP systems.", learningObjectives: ["Understand ES680 purpose"], sections: [{ heading: "1.1 ES680 Overview", content: "ES680 is the central engineering repository for plant configuration." }], quiz: [{ question: "What is the main purpose of the ES680 Engineering Station?", answers: [{ text: "System configuration, logic development, and database management", correct: true }, { text: "Operator shift logging", correct: false }], explanation: "ES680 configures control system hardware and software." }] },
            { id: "es-2", number: 2, title: "Project Structure and Documentation Management", description: "Hierarchical project trees, version control, and documentation.", learningObjectives: ["Manage engineering project structures"], sections: [{ heading: "2.1 Project Layout", content: "Projects are organized hierarchically by plant units." }], quiz: [{ question: "Why is structured plant hierarchy important in ES680?", answers: [{ text: "It maps physical plant equipment to software objects logically", correct: true }, { text: "It reduces monitor power consumption", correct: false }], explanation: "Plant hierarchy reflects physical plant topology." }] },
            { id: "es-3", number: 3, title: "Ingres Database and Engineering Data", description: "Ingres relational database backend storing plant signal dictionaries and parameters.", learningObjectives: ["Understand Ingres database usage in ES680"], sections: [{ heading: "3.1 Database Backend", content: "ES680 relies on Ingres to maintain consistent engineering datasets." }], quiz: [{ question: "What database engine does ES680 traditionally use for engineering data?", answers: [{ text: "Ingres", correct: true }, { text: "MySQL", correct: false }, { text: "MongoDB", correct: false }], explanation: "Ingres is the foundational database behind ES680." }] },
            { id: "es-4", number: 4, title: "Hardware and Physical Configuration", description: "Rack layouts, module slot allocation, and power supply sizing.", learningObjectives: ["Configure physical hardware racks"], sections: [{ heading: "4.1 Rack Configuration", content: "Engineers define physical hardware modules within ES680." }], quiz: [{ question: "What must be configured accurately in ES680 before downloading to controllers?", answers: [{ text: "Physical hardware rack and module slot allocations", correct: true }, { text: "Operator chair height", correct: false }], explanation: "Hardware configuration matches physical I/O modules." }] },
            { id: "es-5", number: 5, title: "S5 PLC Configuration and Parameterisation", description: "Configuring S5 controllers, memory cards, and system parameters.", learningObjectives: ["Parameterize S5 controllers"], sections: [{ heading: "5.1 S5 Parameters", content: "System parameters establish controller scan rates and communication buffers." }], quiz: [{ question: "What does S5 parameterization involve?", answers: [{ text: "Setting up CPU operating parameters, timers, and memory limits", correct: true }, { text: "Adjusting control room lighting", correct: false }], explanation: "Parameters configure controller resources." }] },
            { id: "es-6", number: 6, title: "I/O, Signal Definitions and Module/Channel Allocation", description: "Mapping physical terminals to symbolic signal names in the database.", learningObjectives: ["Map physical I/O channels"], sections: [{ heading: "6.1 Signal Mapping", content: "Signals are assigned unique symbolic names and channel addresses." }], quiz: [{ question: "Why is symbolic signal definition important in ES680?", answers: [{ text: "It allows software logic to reference meaningful tag names instead of raw addresses", correct: true }, { text: "It encrypts network packets", correct: false }], explanation: "Symbolic names improve readability and maintainability." }] },
            { id: "es-7", number: 7, title: "Functional Groups and Control Philosophy", description: "Grouping plant components into functional units and interlock groups.", learningObjectives: ["Design functional group hierarchies"], sections: [{ heading: "7.1 Functional Groups", content: "Plant processes are structured into functional groups (e.g. boiler feedwater)." }], quiz: [{ question: "What is a functional group in control engineering?", answers: [{ text: "A collection of equipment and logic working together for a specific sub-process", correct: true }, { text: "A group of engineering desk computers", correct: false }], explanation: "Functional groups modularize plant operation." }] },
            { id: "es-8", number: 8, title: "Logic Viewing, Analysis and Device Behaviour", description: "Tracing control logic, interlocks, and expected field equipment responses.", learningObjectives: ["Analyze control logic execution"], sections: [{ heading: "8.1 Logic Tracing", content: "Engineers inspect logic diagrams to verify interlocks and permissive conditions." }], quiz: [{ question: "What is an interlock in control logic?", answers: [{ text: "A safety condition preventing operation unless safe prerequisites are met", correct: true }, { text: "A network cable coupler", correct: false }], explanation: "Interlocks enforce strict safety and operational prerequisites." }] },
            { id: "es-9", number: 9, title: "Engineering Documentation, Validation, Modification and Workflow", description: "Change management, code generation, compilation, and download workflows.", learningObjectives: ["Execute safe engineering modification workflows"], sections: [{ heading: "9.1 Workflow", content: "Modifications require rigorous validation, compilation, and controlled download." }], quiz: [{ question: "Why is strict change management required in plant engineering?", answers: [{ text: "To prevent unintended plant trips or unsafe operating states", correct: true }, { text: "To increase paper consumption", correct: false }], explanation: "Safety and plant availability depend on disciplined change control." }] }
        ]
    },
    {
        id: "gui-om-hmi",
        title: "GUI – OM (T2000) / HMI (T3000)",
        description: "Operating & Monitoring (T2000 OM) and Human Machine Interface (T3000 HMI). Supports dual track selection.",
        isDualTrack: true,
        tracks: {
            "t2000": {
                title: "T2000 OM (Operating & Monitoring)",
                modules: [
                    { id: "t2-1", number: 1, title: "Introduction to Operating & Monitoring", description: "Role of T2000 OM in operator interaction.", learningObjectives: ["Understand OM fundamentals"], sections: [{ heading: "1.1 OM Overview", content: "T2000 OM provides real-time visualization and control for operators." }], quiz: [{ question: "What is the primary function of T2000 OM?", answers: [{ text: "Enable operators to monitor and control industrial processes", correct: true }, { text: "Compile C++ software code", correct: false }], explanation: "OM is the operator's operational window into the plant." }] },
                    { id: "t2-2", number: 2, title: "OM Project Layout and Plant Hierarchy", description: "Navigating plant hierarchies, unit displays, and group pictures.", learningObjectives: ["Navigate OM project structures"], sections: [{ heading: "2.1 Plant Hierarchy", content: "Displays are organized by plant unit and functional hierarchy." }], quiz: [{ question: "How are process displays typically structured in OM?", answers: [{ text: "Hierarchically from plant overview down to individual device faceplates", correct: true }, { text: "Randomly in a flat list", correct: false }], explanation: "Hierarchical navigation speeds up operator response." }] },
                    { id: "t2-3", number: 3, title: "Process Displays – Static and Dynamic Graphics", description: "Static background schematics and dynamic process value bindings.", learningObjectives: ["Configure dynamic graphic objects"], sections: [{ heading: "3.1 Graphics", content: "Dynamic objects change color, position, or value based on live process tags." }], quiz: [{ question: "What makes a process display dynamic in T2000 OM?", answers: [{ text: "Binding graphic elements to live real-time process signals", correct: true }, { text: "Adding animated cartoon characters", correct: false }], explanation: "Live database tag bindings drive dynamic visuals." }] },
                    { id: "t2-4", number: 4, title: "Signal Mapping – Connecting Plant Data to the GUI", description: "Linking database signals to graphic presentation objects.", learningObjectives: ["Map signals to graphical elements"], sections: [{ heading: "4.1 Signal Binding", content: "Accurate signal mapping ensures correct data visualization." }], quiz: [{ question: "What happens if a signal mapping is incorrect on an OM display?", answers: [{ text: "The graphic will display wrong or invalid process data", correct: true }, { text: "The power transformer will trip", correct: false }], explanation: "Incorrect mapping leads to operator misinformation." }] },
                    { id: "t2-5", number: 5, title: "Faceplates and Device Operation", description: "Standardized faceplates for valves, motors, controllers, and analog loops.", learningObjectives: ["Operate device faceplates"], sections: [{ heading: "5.1 Faceplates", content: "Clicking a plant component opens its dedicated control faceplate." }], quiz: [{ question: "What is a faceplate in industrial HMI/OM systems?", answers: [{ text: "A popup dialog providing detailed status, modes, and control commands for a device", correct: true }, { text: "A metal plate on the computer chassis", correct: false }], explanation: "Faceplates allow detailed interaction with individual equipment." }] },
                    { id: "t2-6", number: 6, title: "Operator Commands, Modes, Permissions and Interlocks", description: "Manual/auto modes, command authorization, and interlock feedback.", learningObjectives: ["Understand operator permissions and modes"], sections: [{ heading: "6.1 Control Modes", content: "Operator commands pass through permission and interlock checks before execution." }], quiz: [{ question: "Why might an operator command be rejected by the control system?", answers: [{ text: "Active interlocks or missing permissives prevent unsafe operation", correct: true }, { text: "The monitor resolution is too low", correct: false }], explanation: "Interlocks protect equipment from unsafe operator actions." }] },
                    { id: "t2-7", number: 7, title: "Alarms, Trends and Process Information", description: "Alarm annunciation, priority handling, historical trends, and event logging.", learningObjectives: ["Manage alarms and trends"], sections: [{ heading: "7.1 Alarms", content: "Alarms alert operators to abnormal plant conditions requiring immediate attention." }], quiz: [{ question: "What is the purpose of alarm prioritization in OM?", answers: [{ text: "To help operators focus on critical plant emergencies first", correct: true }, { text: "To play entertaining alert sounds", correct: false }], explanation: "Prioritization manages operator attention during upsets." }] },
                    { id: "t2-8", number: 8, title: "Configuration Modes and GUI Engineering", description: "Engineering mode tools for modifying displays and adding objects.", learningObjectives: ["Configure OM displays"], sections: [{ heading: "8.1 GUI Engineering", content: "Authorized engineers can modify display graphics and add new process objects." }], quiz: [{ question: "Who typically performs GUI display configuration changes?", authorised: true, answers: [{ text: "Authorized control system engineers", correct: true }, { text: "General plant visitors", correct: false }], explanation: "Display engineering is restricted to authorized personnel." }] },
                    { id: "t2-9", number: 9, title: "Complete Plant Operation – Field to Operator and Back", description: "End-to-end signal loop: Field sensor -> I/O -> PLC -> OM display -> Operator -> Command -> Actuator.", learningObjectives: ["Trace end-to-end plant data flow"], sections: [{ heading: "9.1 Complete Data Flow", content: "Understanding the complete loop from field sensor to operator screen and back to field actuator." }], quiz: [{ question: "In the complete plant control loop, what is the correct return path for an operator command?", answers: [{ text: "Operator -> OM -> Control System/PLC -> Output -> Actuator -> Plant", correct: true }, { text: "Operator -> Keyboard -> Power Grid -> Cloud", correct: false }], explanation: "Commands flow from HMI through controller logic to physical actuators." }] }
                ]
            },
            "t3000": {
                title: "T3000 HMI (Human Machine Interface)",
                modules: [
                    { id: "t3-1", number: 1, title: "Introduction to T3000 HMI and Workbench", description: "Modern T3000 HMI architecture and engineering workbench.", learningObjectives: ["Understand T3000 architecture"], sections: [{ heading: "1.1 T3000 Architecture", content: "T3000 provides an advanced graphical HMI environment for power plant automation." }], quiz: [{ question: "What is T3000 HMI designed for?", answers: [{ text: "Advanced human-machine interfacing and power plant supervision", correct: true }, { text: "Spreadsheet accounting", correct: false }], explanation: "T3000 is Siemens' modern control system HMI platform." }] },
                    { id: "t3-2", number: 2, title: "Project Structure and Plant Hierarchy", description: "T3000 project navigator and plant object trees.", learningObjectives: ["Navigate T3000 projects"], sections: [{ heading: "2.1 Project Tree", content: "Plant objects are structured logically in the T3000 project navigator." }], quiz: [{ question: "How are projects organized in T3000 Workbench?", answers: [{ text: "Using hierarchical plant trees and object libraries", correct: true }, { text: "As a single unstructured text file", correct: false }], explanation: "Hierarchical trees organize plant data efficiently." }] },
                    { id: "t3-3", number: 3, title: "Plant Displays and Graphic Configuration", description: "Creating process schematics and graphical elements in T3000.", learningObjectives: ["Configure T3000 graphics"], sections: [{ heading: "3.1 Graphic Editor", content: "The graphic editor supports vector symbols and dynamic property bindings." }], quiz: [{ question: "What tool is used to create process screens in T3000?", answers: [{ text: "T3000 Graphic Editor / Workbench", correct: true }, { text: "Audio mixing software", correct: false }], explanation: "The graphic editor builds plant schematics." }] },
                    { id: "t3-4", number: 4, title: "Signal Mapping and Process Objects", description: "Connecting HMI graphics to underlying controller process objects.", learningObjectives: ["Map T3000 process objects"], sections: [{ heading: "4.1 Process Objects", content: "Process objects encapsulate both data and behavior for plant equipment." }], quiz: [{ question: "What is a process object in T3000?", answers: [{ text: "An encapsulated software representation linking data, alarms, and behavior", correct: true }, { text: "A physical spare cable", correct: false }], explanation: "Process objects unify data points and faceplate logic." }] },
                    { id: "t3-5", number: 5, title: "Pictograms and Faceplates", description: "Standardized industrial pictograms and interactive faceplate popups.", learningObjectives: ["Utilize T3000 pictograms"], sections: [{ heading: "5.1 Pictograms", content: "Pictograms provide immediate visual status of valves, pumps, and instruments." }], quiz: [{ question: "What is the purpose of standardized pictograms on HMI displays?", answers: [{ text: "Enable rapid recognition of equipment status by operators", correct: true }, { text: "Provide decorative background wallpaper", correct: false }], explanation: "Standardized symbols reduce operator cognitive load." }] },
                    { id: "t3-6", number: 6, title: "Operator Control, Modes and Authorisation", description: "Access control levels, manual/auto operation, and command confirmation.", learningObjectives: ["Manage T3000 operator security levels"], sections: [{ heading: "6.1 Authorisation", content: "Operators must possess appropriate privilege levels to execute control commands." }], quiz: [{ question: "Why are operator authorisation levels enforced in T3000?", answers: [{ text: "To prevent unauthorized or accidental critical plant changes", correct: true }, { text: "To slow down login times", correct: false }], explanation: "Role-based security protects plant integrity." }] },
                    { id: "t3-7", number: 7, title: "Alarms, Trends, Diagnostics and Process Information", description: "Alarm server, long-term archiving, and diagnostic logging in T3000.", learningObjectives: ["Analyze T3000 alarms and trends"], sections: [{ heading: "7.1 Diagnostics", content: "Integrated diagnostic tools allow rapid fault isolation." }], quiz: [{ question: "What does an HMI trend display show?", answers: [{ text: "Historical and real-time variation of process variables over time", correct: true }, { text: "Operator typing speed", correct: false }], explanation: "Trends visualize process dynamics over time." }] },
                    { id: "t3-8", number: 8, title: "T3000 Configuration and Engineering Modes", description: "Switching between runtime operation and configuration engineering modes.", learningObjectives: ["Operate T3000 in engineering mode"], sections: [{ heading: "8.1 Engineering Mode", content: "Configuration changes are performed in engineering mode before deployment to runtime servers." }], quiz: [{ question: "What is the distinction between Runtime and Engineering mode in T3000?", answers: [{ text: "Runtime is for daily plant operation; Engineering is for system configuration", correct: true }, { text: "Runtime uses black-and-white graphics only", correct: false }], explanation: "Runtime is for operators; engineering is for system config." }] },
                    { id: "t3-9", number: 9, title: "Complete T3000 Plant Operation and Data Flow", description: "Comprehensive data flow analysis in modern T3000 power plant automation.", learningObjectives: ["Master T3000 plant-wide data flow"], sections: [{ heading: "9.1 Data Flow", content: "Complete end-to-end integration from field instrumentation to T3000 operator stations." }], quiz: [{ question: "In T3000 systems, how is data transmitted from field controllers to HMI workstations?", answers: [{ text: "Via high-speed industrial plant bus networks", correct: true }, { text: "Via manual USB flash drives", correct: false }], explanation: "Plant bus networks connect controllers and HMI servers." }] }
                ]
            }
        }
    }
];

// --- APP STATE ---
let appState = {
    currentScreen: 'home-screen', // home-screen, dashboard-screen, learning-screen, quiz-screen, result-screen, course-complete-screen
    selectedCourseId: null,
    selectedTrack: 't2000', // for course 5
    currentModuleIndex: 0,
    currentQuizQuestionIndex: 0,
    currentModuleScore: 0,
    // Persistent progress: { courseId: { moduleId: { completed: boolean, bestScore: number, attempts: number } } }
    progress: {}
};

// Storage key versioned per requirements
const STORAGE_KEY = 'pfibonacci_training_progress_v1';

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    initEventListeners();
    renderHome();
});

function loadProgress() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            appState.progress = JSON.parse(saved);
        }
    } catch (e) {
        console.error("Could not load progress from localStorage", e);
        appState.progress = {};
    }
}

function saveProgress() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appState.progress));
    } catch (e) {
        console.error("Could not save progress to localStorage", e);
    }
}

function initEventListeners() {
    // Global nav links
    document.getElementById('nav-home').onclick = (e) => { e.preventDefault(); showScreen('home-screen'); renderHome(); };
    document.getElementById('nav-courses').onclick = (e) => { e.preventDefault(); showScreen('home-screen'); renderHome(); };
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(screenId);
    if (target) target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- TRAINING HOME / COURSE CATALOGUE ---
function renderHome() {
    appState.currentScreen = 'home-screen';
    showScreen('home-screen');

    // Calculate overall training progress across all courses/modules
    let totalModulesAll = 0;
    let completedModulesAll = 0;

    coursesData.forEach(course => {
        const mods = getCourseModules(course);
        totalModulesAll += mods.length;
        mods.forEach(m => {
            if (isModuleCompleted(course.id, m.id)) {
                completedModulesAll++;
            }
        });
    });

    const percentAll = totalModulesAll > 0 ? Math.round((completedModulesAll / totalModulesAll) * 100) : 0;
    document.getElementById('overall-progress-text').innerText = `${completedModulesAll} / ${totalModulesAll} Modules Completed (${percentAll}%)`;
    document.getElementById('overall-progress-fill').style.width = `${percentAll}%`;

    // Render Course Catalogue Grid
    const grid = document.getElementById('course-catalogue-grid');
    grid.innerHTML = '';

    coursesData.forEach(course => {
        const mods = getCourseModules(course);
        let completedCount = 0;
        mods.forEach(m => {
            if (isModuleCompleted(course.id, m.id)) completedCount++;
        });
        const coursePercent = mods.length > 0 ? Math.round((completedCount / mods.length) * 100) : 0;

        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
            <div>
                <div class="course-meta">${mods.length} Modules • Professional Training</div>
                <h3>${course.title}</h3>
                <p>${course.description}</p>
            </div>
            <div class="course-footer">
                <div class="course-stats-row">
                    <span>Progress: ${completedCount}/${mods.length}</span>
                    <span>${coursePercent}%</span>
                </div>
                <div class="mini-progress-bar">
                    <div class="mini-progress-fill" style="width: ${coursePercent}%"></div>
                </div>
                <button class="btn btn-primary" style="width: 100%; justify-content: center;" onclick="openCourseDashboard('${course.id}')">
                    ${completedCount > 0 ? 'Continue Training' : 'Start Course'} →
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function getCourseModules(course) {
    if (course.isDualTrack) {
        return course.tracks[appState.selectedTrack].modules;
    }
    return course.modules;
}

function isModuleCompleted(courseId, moduleId) {
    return appState.progress[courseId]?.[moduleId]?.completed === true;
}

// --- COURSE DASHBOARD ---
function openCourseDashboard(courseId) {
    appState.selectedCourseId = courseId;
    appState.currentScreen = 'dashboard-screen';
    showScreen('dashboard-screen');
    renderCourseDashboard();
}

function renderCourseDashboard() {
    const course = coursesData.find(c => c.id === appState.selectedCourseId);
    if (!course) return;

    document.getElementById('dashboard-course-title').innerText = course.title;
    document.getElementById('dashboard-course-desc').innerText = course.description;

    // Dual track selector if applicable
    const trackArea = document.getElementById('track-selector-area');
    trackArea.innerHTML = '';
    if (course.isDualTrack) {
        trackArea.innerHTML = `
            <div style="margin-bottom: 20px;">
                <label style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; color: var(--pfib-text-light); display: block; margin-bottom: 8px;">Select Training Track:</label>
                <div class="track-selector-box">
                    <button class="track-btn ${appState.selectedTrack === 't2000' ? 'active' : ''}" onclick="switchTrack('t2000')">T2000 OM (Operating & Monitoring)</button>
                    <button class="track-btn ${appState.selectedTrack === 't3000' ? 'active' : ''}" onclick="switchTrack('t3000')">T3000 HMI (Human Machine Interface)</button>
                </div>
            </div>
        `;
    }

    const mods = getCourseModules(course);
    let completedCount = 0;
    mods.forEach(m => {
        if (isModuleCompleted(course.id, m.id)) completedCount++;
    });

    document.getElementById('dashboard-modules-count').innerText = `${completedCount} / ${mods.length} Completed`;
    document.getElementById('dashboard-progress-percent').innerText = `${mods.length > 0 ? Math.round((completedCount / mods.length) * 100) : 0}%`;

    const listContainer = document.getElementById('module-row-list');
    listContainer.innerHTML = '';

    mods.forEach((mod, index) => {
        const completed = isModuleCompleted(course.id, mod.id);
        const inProgress = appState.progress[course.id]?.[mod.id]?.attempts > 0;

        let statusClass = 'not-started';
        let statusText = '○ Not Started';
        if (completed) {
            statusClass = 'completed';
            statusText = '✓ Completed';
        } else if (inProgress) {
            statusClass = 'in-progress';
            statusText = '● In Progress';
        }

        const row = document.createElement('div');
        row.className = 'module-row-card';
        row.innerHTML = `
            <div class="module-row-info">
                <div class="module-number-badge">Module ${mod.number}</div>
                <div class="module-row-title">
                    <h3>${mod.title}</h3>
                    <p>${mod.description}</p>
                </div>
            </div>
            <div class="module-row-status">
                <span class="status-pill ${statusClass}">${statusText}</span>
                <button class="btn ${completed ? 'btn-outline' : 'btn-primary'}" onclick="startModuleLearning('${course.id}', ${index})">
                    ${completed ? 'Review Module' : (statusClass === 'in-progress' ? 'Continue' : 'Start Module')} →
                </button>
            </div>
        `;
        listContainer.appendChild(row);
    });
}

function switchTrack(trackKey) {
    appState.selectedTrack = trackKey;
    renderCourseDashboard();
}

// --- MODULE LEARNING PAGE ---
function startModuleLearning(courseId, moduleIndex) {
    appState.selectedCourseId = courseId;
    appState.currentModuleIndex = moduleIndex;
    appState.currentScreen = 'learning-screen';
    showScreen('learning-screen');
    renderModuleLearning();
}

function renderModuleLearning() {
    const course = coursesData.find(c => c.id === appState.selectedCourseId);
    if (!course) return;
    const mods = getCourseModules(course);
    const mod = mods[appState.currentModuleIndex];
    if (!mod) return;

    // Render Left Sidebar Navigation
    const sidebarList = document.getElementById('learning-sidebar-list');
    sidebarList.innerHTML = '';
    mods.forEach((m, idx) => {
        const isComp = isModuleCompleted(course.id, m.id);
        const isCurr = idx === appState.currentModuleIndex;
        const li = document.createElement('li');
        li.className = `sidebar-nav-item ${isCurr ? 'active' : ''} ${isComp ? 'completed' : ''}`;
        li.innerHTML = `
            <span>${isComp ? '✓' : (isCurr ? '▶' : '○')}</span>
            <div>
                <div style="font-size: 0.75rem; color: var(--pfib-text-light);">Module ${m.number}</div>
                <div style="font-weight: 600; line-height: 1.2;">${m.title}</div>
            </div>
        `;
        li.onclick = () => startModuleLearning(course.id, idx);
        sidebarList.appendChild(li);
    });

    document.getElementById('learning-course-title-display').innerText = course.title;
    document.getElementById('learning-mod-number-display').innerText = `Module ${mod.number} of ${mods.length}`;
    document.getElementById('learning-mod-title-display').innerText = mod.title;

    // Render main content body
    const bodyContainer = document.getElementById('learning-content-body');
    let htmlContent = `
        <div style="margin-bottom: 25px;">
            <h2 style="font-size: 1.3rem; color: var(--pfib-blue); margin-bottom: 12px;">Learning Objectives</h2>
            <ul style="margin-left: 20px;">
                ${(mod.learningObjectives || []).map(obj => `<li>${obj}</li>`).join('')}
            </ul>
        </div>
    `;

    if (mod.sections && mod.sections.length > 0) {
        mod.sections.forEach(sec => {
            if (sec.type === 'keyConcept') {
                htmlContent += `
                    <div class="callout-box key-concept">
                        <strong>${sec.title || 'Key Concept'}</strong>
                        <p style="margin: 0;">${sec.text}</p>
                    </div>
                `;
            } else if (sec.type === 'diagram') {
                htmlContent += `
                    <div class="tech-diagram-container">
                        <div class="tech-diagram-title">${sec.title || 'Technical Diagram'}</div>
                        <div class="flowchart-vertical">
                            ${sec.nodes.map((node, i) => `
                                <div class="flowchart-node">${node}</div>
                                ${i < sec.nodes.length - 1 ? '<div class="flowchart-arrow">↓</div>' : ''}
                            `).join('')}
                        </div>
                    </div>
                `;
            } else {
                if (sec.heading) {
                    htmlContent += `<h2>${sec.heading}</h2>`;
                }
                if (sec.content) {
                    htmlContent += `<p>${sec.content}</p>`;
                }
            }
        });
    } else {
        htmlContent += `
            <p>Comprehensive technical training content for <strong>${mod.title}</strong> is structured for self-paced industrial engineering study.</p>
            <div class="callout-box practical">
                <strong>Practical Application</strong>
                <p style="margin: 0;">Review the core engineering principles above before proceeding to the knowledge assessment quiz.</p>
            </div>
        `;
    }

    bodyContainer.innerHTML = htmlContent;

    // Action buttons
    const footerAction = document.getElementById('learning-action-footer');
    footerAction.innerHTML = `
        <button class="btn btn-secondary" onclick="openCourseDashboard('${course.id}')">← Return to Course Dashboard</button>
        <button class="btn btn-primary" onclick="startModuleQuiz('${course.id}', ${appState.currentModuleIndex})">Proceed to Module Quiz Assessment →</button>
    `;
}

// --- QUIZ ENGINE ---
function startModuleQuiz(courseId, moduleIndex) {
    appState.selectedCourseId = courseId;
    appState.currentModuleIndex = moduleIndex;
    appState.currentQuizQuestionIndex = 0;
    appState.currentModuleScore = 0;
    appState.currentScreen = 'quiz-screen';
    showScreen('quiz-screen');
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const course = coursesData.find(c => c.id === appState.selectedCourseId);
    if (!course) return;
    const mods = getCourseModules(course);
    const mod = mods[appState.currentModuleIndex];
    if (!mod || !mod.quiz || mod.quiz.length === 0) {
        // If no quiz questions, auto complete
        completeModuleSuccessfully();
        return;
    }

    const qIndex = appState.currentQuizQuestionIndex;
    const question = mod.quiz[qIndex];

    document.getElementById('quiz-mod-title').innerText = `${mod.title} — Assessment`;
    document.getElementById('quiz-q-counter').innerText = `Question ${qIndex + 1} of ${mod.quiz.length}`;
    document.getElementById('quiz-progress-fill').style.width = `${((qIndex + 1) / mod.quiz.length) * 100}%`;
    document.getElementById('quiz-question-text').innerText = question.question;

    const optionsContainer = document.getElementById('quiz-options-container');
    optionsContainer.innerHTML = '';
    
    document.getElementById('quiz-feedback-box').innerHTML = '';
    document.getElementById('quiz-feedback-box').style.display = 'none';
    document.getElementById('quiz-next-btn').style.display = 'none';

    question.answers.forEach((ans, ansIdx) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.innerText = ans.text;
        btn.onclick = () => selectQuizAnswer(ansIdx, ans.correct, question.explanation);
        optionsContainer.appendChild(btn);
    });
}

function selectQuizAnswer(selectedIndex, isCorrect, explanation) {
    const course = coursesData.find(c => c.id === appState.selectedCourseId);
    const mods = getCourseModules(course);
    const mod = mods[appState.currentModuleIndex];
    const question = mod.quiz[appState.currentQuizQuestionIndex];

    const optionButtons = document.querySelectorAll('.quiz-option-btn');
    optionButtons.forEach((btn, idx) => {
        btn.disabled = true;
        if (question.answers[idx].correct) {
            btn.classList.add('correct');
        } else if (idx === selectedIndex && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    if (isCorrect) {
        appState.currentModuleScore++;
    }

    const feedbackBox = document.getElementById('quiz-feedback-box');
    feedbackBox.style.display = 'block';
    feedbackBox.className = `quiz-explanation-box ${isCorrect ? 'correct' : 'incorrect'}`;
    feedbackBox.innerHTML = `
        <strong>${isCorrect ? '✓ Correct Answer' : '✗ Incorrect'}</strong>
        <p style="margin: 6px 0 0;">${explanation || 'Review the module learning material for further details.'}</p>
    `;

    const nextBtn = document.getElementById('quiz-next-btn');
    nextBtn.style.display = 'inline-flex';
    
    const isLastQuestion = appState.currentQuizQuestionIndex >= mod.quiz.length - 1;
    nextBtn.innerText = isLastQuestion ? 'Complete Module Assessment →' : 'Next Question →';
    nextBtn.onclick = () => {
        if (!isLastQuestion) {
            appState.currentQuizQuestionIndex++;
            renderQuizQuestion();
        } else {
            finishModuleAssessment();
        }
    };
}

function finishModuleAssessment() {
    const course = coursesData.find(c => c.id === appState.selectedCourseId);
    const mods = getCourseModules(course);
    const mod = mods[appState.currentModuleIndex];
    const totalQ = mod.quiz.length;
    const score = appState.currentModuleScore;
    const percent = Math.round((score / totalQ) * 100);
    const passed = percent >= 50; // pass threshold 50% or configurable

    // Save progress
    if (!appState.progress[course.id]) {
        appState.progress[course.id] = {};
    }
    const existing = appState.progress[course.id][mod.id] || { bestScore: 0, attempts: 0 };
    appState.progress[course.id][mod.id] = {
        completed: passed || existing.completed,
        bestScore: Math.max(score, existing.bestScore),
        attempts: (existing.attempts || 0) + 1
    };
    saveProgress();

    // Show result screen
    appState.currentScreen = 'result-screen';
    showScreen('result-screen');

    document.getElementById('result-mod-title').innerText = mod.title;
    document.getElementById('result-score-val').innerText = `${score}/${totalQ}`;
    document.getElementById('result-percentage').innerText = `${percent}% Score`;
    
    const msgEl = document.getElementById('result-message-text');
    if (passed) {
        msgEl.innerText = "Congratulations! You have successfully passed the module assessment.";
        msgEl.style.color = "var(--correct-green)";
    } else {
        msgEl.innerText = "Assessment score below passing threshold. Review the learning material and retry.";
        msgEl.style.color = "var(--wrong-red)";
    }

    const actionsEl = document.getElementById('result-action-buttons');
    
    // Check if next module exists
    const hasNext = appState.currentModuleIndex < mods.length - 1;

    actionsEl.innerHTML = `
        <button class="btn btn-outline" onclick="startModuleLearning('${course.id}', ${appState.currentModuleIndex})">Review Module Content</button>
        <button class="btn btn-secondary" onclick="openCourseDashboard('${course.id}')">Return to Course Dashboard</button>
        ${hasNext ? `<button class="btn btn-primary" onclick="startModuleLearning('${course.id}', ${appState.currentModuleIndex + 1})">Next Module →</button>` : `<button class="btn btn-primary" onclick="openCourseDashboard('${course.id}')">View Course Completion →</button>`}
    `;
}

function completeModuleSuccessfully() {
    const course = coursesData.find(c => c.id === appState.selectedCourseId);
    const mods = getCourseModules(course);
    const mod = mods[appState.currentModuleIndex];

    if (!appState.progress[course.id]) appState.progress[course.id] = {};
    appState.progress[course.id][mod.id] = { completed: true, bestScore: 1, attempts: 1 };
    saveProgress();
    openCourseDashboard(course.id);
}

// --- APP FOOTER & METADATA ---
// Handled in HTML structure & CSS
