export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "EducationalOrganization", "Corporation"],
  "name": "FirstPharmaJob",
  "legalName": "FirstPharmaJob Institute",
  "alternateName": ["FPJ", "First Pharma Job", "FirstPharmaJob Institute"],
  "url": "https://firstpharmajob.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://firstpharmajob.com/favicon.svg",
    "width": 512,
    "height": 512
  },
  "image": "https://firstpharmajob.com/favicon.svg",
  "description": "Leading pharmaceutical career development institute providing professional training, student partner programs, industry certifications, and direct job placement services. Over 5 years of experience connecting students with pharmaceutical industry opportunities.",
  "slogan": "Accelerate Your Pharmaceutical Career",
  "foundingDate": "2020",
  "numberOfEmployees": "11-50",
  "industryCategory": ["Education", "Pharmaceutical Services", "Career Development", "Professional Training"],
  "keywords": "pharmaceutical careers, pharma jobs, student training, industry certification, career placement, biopharmaceutical services, clinical research training",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressRegion": "India"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+91 91005 14968",
      "url": "https://firstpharmajob.com/student-partner",
      "availableLanguage": "English"
    },
    {
      "@type": "ContactPoint",
      "contactType": "admissions",
      "telephone": "+91 91005 14968", 
      "url": "https://firstpharmajob.com/student-partner",
      "availableLanguage": "English"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/firstpharmajob",
    "https://www.instagram.com/firstpharmajob/",
    "https://x.com/FPharmajob60819",
    "https://www.youtube.com/@FirstPharmajob"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "FirstPharmaJob Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Student Partner Program",
        "description": "Comprehensive pharmaceutical career training with certifications and guaranteed job placement",
        "url": "https://firstpharmajob.com/student-partner",
        "category": "Professional Training",
        "areaServed": "India"
      },
      {
        "@type": "Offer", 
        "name": "Industry Certification Programs",
        "description": "Professional pharmaceutical industry certifications and skill development",
        "category": "Certification"
      },
      {
        "@type": "Offer",
        "name": "Career Placement Services", 
        "description": "Direct job placement and career advancement in pharmaceutical industry",
        "category": "Career Services"
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "250"
  },
  "knowsAbout": [
    "Pharmaceutical Industry",
    "Clinical Research",
    "Drug Development", 
    "Regulatory Affairs",
    "Quality Assurance",
    "Medical Affairs",
    "Pharmacovigilance",
    "Career Development"
  ]
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "FirstPharmaJob - Accelerate Your Pharmaceutical Career",
  "alternateName": "FirstPharmaJob",
  "url": "https://firstpharmajob.com",
  "description": "Leading pharmaceutical career development platform offering professional training, student partner programs, industry certifications, and direct job placement services in India's pharmaceutical industry.",
  "inLanguage": "en-IN",
  "copyrightYear": "2024",
  "creator": {
    "@type": "Organization",
    "name": "FirstPharmaJob Institute"
  },
  "publisher": {
    "@type": "Organization", 
    "name": "FirstPharmaJob Institute",
    "logo": {
      "@type": "ImageObject",
      "url": "https://firstpharmajob.com/favicon.svg"
    }
  },
  "mainEntity": {
    "@type": "WebPage",
    "@id": "https://firstpharmajob.com/",
    "name": "FirstPharmaJob - Home",
    "description": "Professional pharmaceutical career training and job placement services"
  },
  "potentialAction": [
    {
      "@type": "SearchAction",
      "target": "https://firstpharmajob.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    {
      "@type": "RegisterAction",
      "target": "https://firstpharmajob.com/student-partner",
      "name": "Apply for Student Partner Program"
    }
  ],
  "hasPart": [
    {
      "@type": "WebPage",
      "name": "Student Partner Program",
      "url": "https://firstpharmajob.com/student-partner",
      "description": "Apply for comprehensive pharmaceutical career training and certification program with job placement"
    },
    {
      "@type": "WebPage", 
      "name": "About FirstPharmaJob",
      "url": "https://firstpharmajob.com/about",
      "description": "Leading pharmaceutical career development institute with 1000+ students certified and 95% placement rate"
    },
    {
      "@type": "WebPage",
      "name": "Professional Services", 
      "url": "https://firstpharmajob.com/services",
      "description": "Professional pharmaceutical training services and career development programs"
    },
    {
      "@type": "WebPage",
      "name": "Contact & Support", 
      "url": "https://firstpharmajob.com/contact",
      "description": "Get in touch with FirstPharmaJob for career guidance and program information"
    }
  ]
}

// Additional schemas for rich search results
export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://firstpharmajob.com"
    },
    {
      "@type": "ListItem", 
      "position": 2,
      "name": "Student Partner Program",
      "item": "https://firstpharmajob.com/student-partner"
    },
    {
      "@type": "ListItem",
      "position": 3, 
      "name": "About",
      "item": "https://firstpharmajob.com/about"
    }
  ]
}

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Pharmaceutical Career Development Services",
  "provider": {
    "@type": "Organization",
    "name": "FirstPharmaJob Institute"
  },
  "serviceType": "Professional Training and Career Placement",
  "description": "Comprehensive pharmaceutical industry training, certification programs, and direct job placement services for students and professionals.",
  "areaServed": "India",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://firstpharmajob.com/student-partner",
    "serviceType": "Online Application"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog", 
    "name": "Training Programs",
    "itemListElement": [
      {
        "@type": "Course",
        "name": "Pharmaceutical Industry Fundamentals",
        "description": "Complete overview of pharmaceutical industry operations and career paths"
      },
      {
        "@type": "Course",
        "name": "Clinical Research Training",
        "description": "Specialized training in clinical research methodologies and regulations"
      },
      {
        "@type": "Course", 
        "name": "Regulatory Affairs Certification",
        "description": "Professional certification in pharmaceutical regulatory processes"
      }
    ]
  }
}