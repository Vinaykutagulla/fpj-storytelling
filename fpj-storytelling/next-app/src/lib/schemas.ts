export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "FirstPharmaJob Institute",
  "alternateName": "FPJ",
  "url": "https://firstpharmajob.com",
  "logo": "https://firstpharmajob.com/favicon.svg",
  "description": "Professional pharmaceutical career training institute offering student partner programs, industry certifications, and direct job placement opportunities.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "url": "https://firstpharmajob.com/student-partner"
  },
  "sameAs": [
    "https://linkedin.com/company/firstpharmajob",
    "https://instagram.com/firstpharmajob"
  ],
  "offers": {
    "@type": "Offer",
    "name": "Student Partner Program",
    "description": "Comprehensive pharmaceutical career training with certifications and job placement",
    "url": "https://firstpharmajob.com/student-partner",
    "category": "Education"
  }
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "FirstPharmaJob",
  "url": "https://firstpharmajob.com",
  "description": "Professional pharmaceutical career training platform",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://firstpharmajob.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}