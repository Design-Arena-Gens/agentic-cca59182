'use client'

import { useState, useEffect } from 'react'
import { Briefcase, MapPin, CheckCircle, XCircle, ExternalLink, Loader2, Search } from 'lucide-react'

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

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'visa' | 'no-visa'>('all')

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/jobs')
      const data = await response.json()
      setJobs(data)
    } catch (error) {
      console.error('Error fetching jobs:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredJobs = jobs.filter(job => {
    if (filter === 'visa') return job.visaSponsorship
    if (filter === 'no-visa') return !job.visaSponsorship
    return true
  })

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Job Search Assistant
          </h1>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-3">Marwen Slimen</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold mb-2">Experience:</p>
                <p>1.5+ years in Digital Marketing & Creative Content</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Skills:</p>
                <p>Digital Marketing, Content Creation, Social Media Management, Videography, Video Editing, Graphic Design, WordPress, SEO</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Preferred Countries:</p>
                <p>🇬🇧 UK, 🇳🇱 Netherlands, 🇧🇪 Belgium, 🇮🇪 Ireland, 🇮🇹 Italy</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Target Roles:</p>
                <p>Marketing Assistant, Content Creator, Videographer, Social Media Manager, WordPress Content Manager</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-gray-700 font-semibold">Filter by:</span>
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                filter === 'all'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Jobs ({jobs.length})
            </button>
            <button
              onClick={() => setFilter('visa')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                filter === 'visa'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Visa Sponsorship ({jobs.filter(j => j.visaSponsorship).length})
            </button>
            <button
              onClick={() => setFilter('no-visa')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                filter === 'no-visa'
                  ? 'bg-orange-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              No Visa Info ({jobs.filter(j => !j.visaSponsorship).length})
            </button>
            <button
              onClick={fetchJobs}
              className="ml-auto px-6 py-2 rounded-lg font-medium bg-purple-600 text-white hover:bg-purple-700 transition-all flex items-center gap-2"
            >
              <Search size={18} />
              Refresh Jobs
            </button>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="animate-spin text-blue-600" size={48} />
          </div>
        )}

        {/* Jobs List */}
        {!loading && (
          <div className="space-y-6">
            {filteredJobs.length === 0 ? (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <p className="text-gray-500 text-lg">No jobs found matching your criteria.</p>
              </div>
            ) : (
              filteredJobs.map(job => (
                <div
                  key={job.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6 border-l-4 border-blue-600"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <Briefcase className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">
                            {job.title}
                          </h3>
                          <p className="text-xl text-gray-700 font-semibold">{job.company}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          <MapPin size={16} />
                          {job.country}
                        </span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                          {job.jobType}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          {job.postedDate}
                        </span>
                        {job.visaSponsorship ? (
                          <span className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                            <CheckCircle size={16} />
                            Visa Sponsorship
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                            <XCircle size={16} />
                            Visa Info Not Mentioned
                          </span>
                        )}
                      </div>

                      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 mb-4">
                        <p className="text-sm font-semibold text-gray-700 mb-1">Why You Match:</p>
                        <p className="text-gray-800">{job.matchReason}</p>
                      </div>
                    </div>

                    <div className="lg:ml-4">
                      <a
                        href={job.applicationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg whitespace-nowrap"
                      >
                        Apply Now
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600 text-sm">
          <p>Job listings are curated based on your profile and updated regularly.</p>
          <p className="mt-2">Looking for visa sponsorship opportunities in UK, Netherlands, Belgium, Ireland, and Italy.</p>
        </div>
      </div>
    </main>
  )
}
