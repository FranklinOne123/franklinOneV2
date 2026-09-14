import { SecuritySection } from "./SolutionsClient";


const securitySections: SecuritySection[] = [
  {
    id: "endpoint-security",
    title: "Endpoint Security",
    subtitle: "Device & User Protection",
    subColor: "text-blue-100",
    dataKey: "endpointSecurity",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
    cat: "Cybersecurity, Network, and IT Operation",
    solution_items: [
      {
        id: "Endpoint Protection (EDR/XDR)",
        title: "Endpoint Protection (EDR/XDR)",
        discription: "",
      },
      {
        id: "Mobile Threat Defense (MTD)",
        title: "Mobile Threat Defense (MTD)",
        discription: "",
      },
      {
        id: "AD Assessment",
        title: "AD Assessment",
        discription: "",
      },
      {
        id: "AD Protection",
        title: "AD Protection",
        discription: "",
      },
      {
        id: "Insider Threat Management (ITM)",
        title: "Insider Threat Management (ITM)",
        discription: "",
      },
      {
        id: "Privileged Remote Access (PRA)",
        title: "Privileged Remote Access (PRA)",
        discription: "",
      },
      {
        id: "Endpoint Privilege Management (EPM)",
        title: "Endpoint Privilege Management (EPM)",
        discription: "",
      },
      {
        id: "Privileged Access Management (PAM)",
        title: "Privileged Access Management (PAM)",
        discription: "",
      },
      {
        id: "CyberSecurity Asset Management (CSAM)",
        title: "CyberSecurity Asset Management (CSAM)",
        discription: "",
      },
      {
        id: "Patch Management",
        title: "Patch Management",
        discription: "",
      }
    ]
  },
  {
    id: "network-security",
    title: "Network Security",
    subtitle: "Infrastructure Protection",
    subColor: "text-green-100",
    dataKey: "networkSecurity",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M15,9H9V7.5H15M15,16.5H9V15H15M21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5M19,5H5V19H19V5Z" />
      </svg>
    ),
    cat: "Cybersecurity, Network, and IT Operation",
    solution_items: [
        {
          id: "Secure Web Gateway (SWG)",
          title: "Secure Web Gateway (SWG)",
          discription: "",
        },
        {
          id: "Zero Trust Network Access (ZTNA)",
          title: "Zero Trust Network Access (ZTNA)",
          discription: "",
        },
        {
          id: "Remote Browser Isolation (RBI)",
          title: "Remote Browser Isolation (RBI)",
          discription: "",
        },
        {
          id: "Cloud Access Security Broker (CASB)",
          title: "Cloud Access Security Broker (CASB)",
          discription: "",
        },

        {
          id: "Email Security Solution",
          title: "Email Security Solution",
          discription: "",
        },
        {
          id: "Cloud and Container Security",
          title: "Cloud and Container Security",
          discription: "",
        },
        {
          id: "Runtime Application Self-Protection (RASP) - Mobile Application Shielding",
          title: "Runtime Application Self-Protection (RASP) - Mobile Application Shielding",
          discription: "",
        },
        {
          id: "Runtime Application Self-Protection (RASP) - Web Shielding",
          title: "Runtime Application Self-Protection (RASP) - Web Shielding",
          discription: "",
        },
        {
          id: "Mobile Code Protection",
          title: "Mobile Code Protection",
          discription: "",
        },
        {
          id: "Mobile Threat Analytics",
          title: "Mobile Threat Analytics",
          discription: "",
        }
    ]
  },
  {
    id: "data-security",
    title: "Data Security",
    subtitle: "Information Protection",
    subColor: "text-purple-100",
    dataKey: "dataSecurity",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16V16H8V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z" />
      </svg>
    ),
    cat: "Cybersecurity, Network, and IT Operation",
    solution_items: [
        {
          id: "Data Loss Prevention (DLP) – Endpoint DLP",
          title: "Data Loss Prevention (DLP) – Endpoint DLP",
          discription: "",
        },
        {
          id: "Data Loss Prevention (DLP) – Network DLP",
          title: "Data Loss Prevention (DLP) – Network DLP",
          discription: "",
        },
        {
          id: "Data Loss Prevention (DLP) – Email DLP",
          title: "Data Loss Prevention (DLP) – Email DLP",
          discription: "",
        },
        {
          id: "Data Security Platform",
          title: "Data Security Platform",
          discription: "",
        },
        {
          id: "Database Activity Monitoring (DAM)",
          title: "Database Activity Monitoring (DAM)",
          discription: "",
        },
        {
          id: "Data Sanitization (Data Erasure)",
          title: "Data Sanitization (Data Erasure)",
          discription: "",
        },
        {
          id: "AI Trust, Risk, and Security Management (AI TRiSM) - Enterprise AI Security Platform",
          title: "AI Trust, Risk, and Security Management (AI TRiSM) - Enterprise AI Security Platform",
          discription: "",
        }
    ]
  },
  {
    id: "vulnerability-management",
    title: "Vulnerability Management",
    subtitle: "Security Operations",
    subColor: "text-orange-100",
    dataKey: "vulnerabilityManagement",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,2A3,3 0 0,1 15,5V7H16A2,2 0 0,1 18,9V19A2,2 0 0,1 16,21H8A2,2 0 0,1 6,19V9A2,2 0 0,1 8,7H9V5A3,3 0 0,1 12,2M12,4A1,1 0 0,0 11,5V7H13V5A1,1 0 0,0 12,4M8,9V19H16V9H8M9,11H15V13H9V11M9,15H13V17H9V15Z" />
      </svg>
    ),
    cat: "Cybersecurity, Network, and IT Operation",
    solution_items: [
        {
          id: "Vulnerability Management Detection and Response (VMDR)",
          title: "Vulnerability Management Detection and Response (VMDR)",
          discription: "",
        },
        {
          id: "Security Information and Event Management (SIEM)",
          title: "Security Information and Event Management (SIEM)",
          discription: "",
        },
        {
          id: "Risk Operations Center (ROC)",
          title: "Risk Operations Center (ROC)",
          discription: "",
        },
        {
          id: "Identity Threat Detection and Response (ITDR)",
          title: "Identity Threat Detection and Response (ITDR)",
          discription: "",
        },
        {
          id: "User and Entity Behavior Analytics (UEBA)",
          title: "User and Entity Behavior Analytics (UEBA)",
          discription: "",
        }
    ]
  },
  {
    id: "networking-solutions",
    title: "Networking Solutions",
    subtitle: "Infrastructure, Cloud & Connectivity",
    subColor: "text-teal-100",
    dataKey: "networkingSolutions",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17,3A2,2 0 0,1 19,5V15A2,2 0 0,1 17,17H13V19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H7C5.89,17 5,16.1 5,15V5A2,2 0 0,1 7,3H17Z" />
      </svg>
    ),
    cat: "Cybersecurity, Network, and IT Operation",
    solution_items: [
        {
          id: "Next-Gen Firewall (NGFW)",
          title: "Next-Gen Firewall (NGFW)",
          discription: "",
        },
        {
          id: "SD-WAN",
          title: "SD-WAN",
          discription: "",
        },
        {
          id: "Content Delivery Networks (CDNs)",
          title: "Content Delivery Networks (CDNs)",
          discription: "",
        },
        {
          id: "Web Application Firewalls (WAF)",
          title: "Web Application Firewalls (WAF)",
          discription: "",
        },
        {
          id: "Load Balancing",
          title: "Load Balancing",
          discription: "",
        },
        {
          id: "Distributed Denial of Service (DDoS)",
          title: "Distributed Denial of Service (DDoS)",
          discription: "",
        },
        {
          id: "API Security",
          title: "API Security",
          discription: "",
        },
        {
          id: "Advanced Bot Management",
          title: "Advanced Bot Management",
          discription: "",
        }
    ]
  },
  {
    id: "it-operations",
    title: "Compliance and Audit",
    subtitle: "Compliance and Audit",
    subColor: "text-indigo-100",
    dataKey: "itOperations",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H15A7,7 0 0,1 22,14H23A1,1 0 0,1 24,15V18A1,1 0 0,1 23,19H22A2,2 0 0,1 20,21H5A2,2 0 0,1 3,19V18A2,2 0 0,1 5,16H6V15A3,3 0 0,1 9,18H15V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19H10V17H7C5.89,17 5,16.1 5,15V5A2,2 0 0,1 7,3H17Z" />
      </svg>
    ),
    cat: "Cybersecurity, Network, and IT Operation",
    solution_items: [
        {
          id: "Web Application Scanning (WAS)",
          title: "Web Application Scanning (WAS)",
          discription: "",
        },
        {
          id: "Policy Audit",
          title: "Policy Audit",
          discription: "",
        },
        {
          id: "Audit Fix",
          title: "Audit Fix",
          discription: "",
        },
        {
          id: "File Integrity Monitoring (FIM)",
          title: "File Integrity Monitoring (FIM)",
          discription: "",
        }
    ]
  },
  {
    id: "physical-security",
    title: "Physical Security",
    subtitle: "Access & Surveillance",
    subColor: "text-red-100",
    dataKey: "physicalSecurity",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17,9H7V7A5,5 0 0,1 12,2A5,5 0 0,1 17,7M12,4A3,3 0 0,0 9,7V9H15V7A3,3 0 0,0 12,4M6,20V10H18V20H6Z" />
      </svg>
    ),
    cat: "Physical Security",
    solution_items: [
        {
          id: "Video Management Software (VMS)",
          title: "Video Management Software (VMS)",
          discription: "",
        },
        {
          id: "Access Control",
          title: "Access Control",
          discription: "",
        },
        {
          id: "Automatic License Plate Recognition (ALPR)",
          title: "Automatic License Plate Recognition (ALPR)",
          discription: "",
        },
        {
          id: "Optical Character Recognition (OCR)",
          title: "Optical Character Recognition (OCR)",
          discription: "",
        },
        {
          id: "Surveillance and Analytics",
          title: "Surveillance and Analytics",
          discription: "",
        }
    ]
  }
];

export default securitySections;