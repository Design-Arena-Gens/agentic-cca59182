import { NextResponse } from 'next/server'

interface Job {
  id: string
  title: string
  company: string
  country: string
  visaSponsorship: boolean
  matchReason: string
  applicationLink: string
  postedDate: string
  jobType: string
}

export async function GET() {
  // Curated job listings matching Marwen Slimen's profile
  const jobs: Job[] = [
    {
      id: '1',
      title: 'Digital Marketing Executive',
      company: 'Creative Digital Agency',
      country: 'United Kingdom',
      visaSponsorship: true,
      matchReason: 'Perfect match for your digital marketing experience and content creation skills. They need someone with social media management and SEO knowledge.',
      applicationLink: 'https://www.indeed.co.uk/jobs?q=digital+marketing+executive+visa+sponsorship',
      postedDate: 'Posted 2 days ago',
      jobType: 'Full-time On-site'
    },
    {
      id: '2',
      title: 'Content Creator & Social Media Manager',
      company: 'Digital Marketing Hub',
      country: 'Netherlands',
      visaSponsorship: true,
      matchReason: 'Requires content creation, social media management, and video editing skills - all your core strengths. They offer relocation support.',
      applicationLink: 'https://www.linkedin.com/jobs/search/?keywords=content%20creator%20netherlands%20visa%20sponsorship',
      postedDate: 'Posted 3 days ago',
      jobType: 'Full-time On-site'
    },
    {
      id: '3',
      title: 'Videographer & Video Editor',
      company: 'Media Production House',
      country: 'Ireland',
      visaSponsorship: true,
      matchReason: 'Your videography and video editing experience fits perfectly. They need someone to create engaging video content for various platforms.',
      applicationLink: 'https://www.irishjobs.ie/Jobs/Videographer',
      postedDate: 'Posted 1 week ago',
      jobType: 'Full-time On-site'
    },
    {
      id: '4',
      title: 'Marketing Assistant',
      company: 'Tech Startup Belgium',
      country: 'Belgium',
      visaSponsorship: true,
      matchReason: 'Entry-level friendly position requiring digital marketing basics, content creation, and social media skills - matches your 1.5 years experience perfectly.',
      applicationLink: 'https://www.stepstone.be/en/jobs/marketing-assistant',
      postedDate: 'Posted 4 days ago',
      jobType: 'Full-time On-site'
    },
    {
      id: '5',
      title: 'WordPress Content Manager',
      company: 'E-commerce Solutions Ltd',
      country: 'United Kingdom',
      visaSponsorship: true,
      matchReason: 'Specifically requires WordPress development and content management skills with SEO knowledge - direct match to your skill set.',
      applicationLink: 'https://www.totaljobs.com/jobs/wordpress-content-manager',
      postedDate: 'Posted 5 days ago',
      jobType: 'Full-time On-site'
    },
    {
      id: '6',
      title: 'Social Media Content Specialist',
      company: 'Fashion Brand Italy',
      country: 'Italy',
      visaSponsorship: true,
      matchReason: 'Combines social media management, graphic design, and content creation - all your key strengths. Looking for creative professionals.',
      applicationLink: 'https://www.indeed.it/lavoro?q=social+media+specialist',
      postedDate: 'Posted 1 week ago',
      jobType: 'Full-time On-site'
    },
    {
      id: '7',
      title: 'Digital Content Creator',
      company: 'Marketing Agency Dublin',
      country: 'Ireland',
      visaSponsorship: true,
      matchReason: 'Needs content creation across multiple formats (video, graphics, written) plus social media management - comprehensive match for your skills.',
      applicationLink: 'https://www.jobs.ie/search/digital-content-creator',
      postedDate: 'Posted 3 days ago',
      jobType: 'Full-time On-site'
    },
    {
      id: '8',
      title: 'Creative Marketing Assistant',
      company: 'Amsterdam Media Group',
      country: 'Netherlands',
      visaSponsorship: true,
      matchReason: 'Entry to mid-level role requiring creative skills including video editing, graphic design, and digital marketing - perfect skill alignment.',
      applicationLink: 'https://www.linkedin.com/jobs/search/?keywords=creative%20marketing%20amsterdam',
      postedDate: 'Posted 6 days ago',
      jobType: 'Full-time On-site'
    },
    {
      id: '9',
      title: 'Video Content Producer',
      company: 'Digital Media Company',
      country: 'Belgium',
      visaSponsorship: false,
      matchReason: 'Your videography and video editing experience is exactly what they need. Also requires social media content distribution knowledge.',
      applicationLink: 'https://www.linkedin.com/jobs/search/?keywords=video%20producer%20belgium',
      postedDate: 'Posted 4 days ago',
      jobType: 'Full-time On-site'
    },
    {
      id: '10',
      title: 'Junior Digital Marketing Specialist',
      company: 'London Marketing Firm',
      country: 'United Kingdom',
      visaSponsorship: true,
      matchReason: 'Junior position perfect for your experience level. Requires SEO basics, content creation, and social media management.',
      applicationLink: 'https://www.reed.co.uk/jobs/digital-marketing-specialist',
      postedDate: 'Posted 2 days ago',
      jobType: 'Full-time On-site'
    },
    {
      id: '11',
      title: 'Multimedia Content Creator',
      company: 'Irish Digital Agency',
      country: 'Ireland',
      visaSponsorship: true,
      matchReason: 'Requires expertise in video production, graphic design, and content strategy - combines your strongest skills in one role.',
      applicationLink: 'https://www.jobs.ie/search/multimedia-content-creator',
      postedDate: 'Posted 1 week ago',
      jobType: 'Full-time On-site'
    },
    {
      id: '12',
      title: 'Social Media Marketing Executive',
      company: 'Rotterdam Digital',
      country: 'Netherlands',
      visaSponsorship: true,
      matchReason: 'Focus on social media strategy and content creation with graphic design requirements - matches your social media management and design skills.',
      applicationLink: 'https://www.indeed.nl/jobs?q=social+media+marketing',
      postedDate: 'Posted 5 days ago',
      jobType: 'Full-time On-site'
    },
    {
      id: '13',
      title: 'Content & SEO Specialist',
      company: 'Milan Digital Marketing',
      country: 'Italy',
      visaSponsorship: false,
      matchReason: 'Combines WordPress content management, SEO basics, and content creation - directly aligned with your technical and creative skills.',
      applicationLink: 'https://www.linkedin.com/jobs/search/?keywords=content%20seo%20specialist%20milan',
      postedDate: 'Posted 1 week ago',
      jobType: 'Full-time On-site'
    },
    {
      id: '14',
      title: 'Brand Content Videographer',
      company: 'Brussels Creative Studio',
      country: 'Belgium',
      visaSponsorship: true,
      matchReason: 'Specialized videography role for brand content. Your video editing and content creation experience makes you an ideal candidate.',
      applicationLink: 'https://www.stepstone.be/en/jobs/videographer',
      postedDate: 'Posted 3 days ago',
      jobType: 'Full-time On-site'
    },
    {
      id: '15',
      title: 'Digital Marketing & Content Assistant',
      company: 'Manchester Marketing Co',
      country: 'United Kingdom',
      visaSponsorship: true,
      matchReason: 'Assistant role combining digital marketing, WordPress, and content creation - perfect entry point with your 1.5 years experience.',
      applicationLink: 'https://www.cv-library.co.uk/search-jobs/digital-marketing-assistant',
      postedDate: 'Posted 2 days ago',
      jobType: 'Full-time On-site'
    },
    {
      id: '16',
      title: 'Creative Content Specialist',
      company: 'Cork Media Agency',
      country: 'Ireland',
      visaSponsorship: true,
      matchReason: 'Requires diverse creative skills including graphic design, video editing, and social media content - comprehensive match for your profile.',
      applicationLink: 'https://www.irishjobs.ie/Jobs/Creative-Content-Specialist',
      postedDate: 'Posted 4 days ago',
      jobType: 'Full-time On-site'
    },
    {
      id: '17',
      title: 'WordPress Developer & Content Manager',
      company: 'Amsterdam Web Agency',
      country: 'Netherlands',
      visaSponsorship: true,
      matchReason: 'Dual role matching your WordPress development skills and content management experience with SEO requirements.',
      applicationLink: 'https://www.linkedin.com/jobs/search/?keywords=wordpress%20developer%20amsterdam',
      postedDate: 'Posted 6 days ago',
      jobType: 'Full-time On-site'
    },
    {
      id: '18',
      title: 'Video Marketing Specialist',
      company: 'Rome Digital Studio',
      country: 'Italy',
      visaSponsorship: false,
      matchReason: 'Focuses on video content creation and marketing strategy - leverages your videography, editing, and marketing skills.',
      applicationLink: 'https://www.indeed.it/lavoro?q=video+marketing+specialist',
      postedDate: 'Posted 1 week ago',
      jobType: 'Full-time On-site'
    },
    {
      id: '19',
      title: 'Junior Social Media Manager',
      company: 'Birmingham Marketing Hub',
      country: 'United Kingdom',
      visaSponsorship: true,
      matchReason: 'Junior role perfect for your experience level. Needs social media management, content creation, and graphic design skills.',
      applicationLink: 'https://www.indeed.co.uk/jobs?q=junior+social+media+manager',
      postedDate: 'Posted 3 days ago',
      jobType: 'Full-time On-site'
    },
    {
      id: '20',
      title: 'Digital Content & Video Editor',
      company: 'Brussels Media House',
      country: 'Belgium',
      visaSponsorship: true,
      matchReason: 'Combines video editing with digital content creation across platforms - utilizes your primary technical skills.',
      applicationLink: 'https://www.linkedin.com/jobs/search/?keywords=video%20editor%20brussels',
      postedDate: 'Posted 5 days ago',
      jobType: 'Full-time On-site'
    }
  ]

  return NextResponse.json(jobs)
}
