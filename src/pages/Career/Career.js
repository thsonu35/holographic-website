import React, { useState } from 'react';
import './Careers.css';

const CareerPage = () => {
  const [jobs, setJobs] = useState([
    {
      title: 'Django Developer',
      description: 'Looking for an experienced Django Developer to build scalable web applications.',
      experience: '2+ years',
      type: 'Full-Time',
      mode: 'Remote',
      technology: 'django',
      datePosted: '2024-08-10',
      urgency: 'normal',
    },
    {
      title: 'Ruby on Rails Developer',
      description: 'We need a skilled RoR Developer to work on various backend services.',
      experience: '3+ years',
      type: 'Full-Time',
      mode: 'Hybrid',
      technology: 'ror',
      datePosted: '2024-08-12',
      urgency: 'urgent',
    },
    {
      title: 'MERN Stack Developer',
      description: 'Hiring a MERN Stack Developer to create and maintain frontend and backend solutions.',
      experience: 'Fresher',
      type: 'Intern',
      mode: 'On-Site',
      technology: 'mern',
      datePosted: '2024-08-08',
      urgency: 'normal',
    },
    {
      title: 'Python Developer',
      description: 'Seeking a Python Developer with expertise in data processing and API integrations.',
      experience: '1+ years',
      type: 'Part-Time',
      mode: 'Remote',
      technology: 'python',
      datePosted: '2024-08-15',
      urgency: 'bulk',
    },
    {
      title: 'Junior Python Developer',
      description: 'Looking for a Junior Python Developer to assist in developing new features.',
      experience: 'Fresher',
      type: 'Intern',
      mode: 'Remote',
      technology: 'python',
      datePosted: '2024-08-14',
      urgency: 'normal',
    },
    {
      title: 'RoR Intern',
      description: 'Offering an internship opportunity for freshers interested in Ruby on Rails.',
      experience: 'Fresher',
      type: 'Intern',
      mode: 'On-Site',
      technology: 'ror',
      datePosted: '2024-08-11',
      urgency: 'normal',
    },
  ]);

  const [filters, setFilters] = useState({
    technology: '',
    experience: '',
    jobType: '',
    workMode: '',
    sortBy: '',
  });

  const [selectedJob, setSelectedJob] = useState(null);
  const [applicantDetails, setApplicantDetails] = useState({
    name: '',
    email: '',
    resume: null,
    coverLetter: '',
    certificates: '',
    skills: '',
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleInputChange = (e) => {
    setApplicantDetails({
      ...applicantDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setApplicantDetails({
      ...applicantDetails,
      resume: e.target.files[0],
    });
  };

  const handleApplyClick = (job) => {
    setSelectedJob(job);
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    console.log('Applying for job:', selectedJob.title);
    console.log('Applicant Details:', applicantDetails);
    setSelectedJob(null);
    setApplicantDetails({
      name: '',
      email: '',
      resume: null,
      coverLetter: '',
      certificates: '',
      skills: '',
    });
  };

  const filteredJobs = jobs.filter((job) => {
    return (
      (filters.technology === '' || job.technology === filters.technology) &&
      (filters.experience === '' || job.experience.includes(filters.experience)) &&
      (filters.jobType === '' || job.type.toLowerCase().includes(filters.jobType.toLowerCase())) &&
      (filters.workMode === '' || job.mode.toLowerCase().includes(filters.workMode.toLowerCase())) &&
      (filters.sortBy === '' || job.urgency.includes(filters.sortBy))
    );
  });

  return (
    <div className="careers">
      <h1>Careers</h1>

      {/* Filter Section */}
      <div className="job-filter">
        <div className="filter-group">
          <label htmlFor="technology">Technology</label>
          <select name="technology" id="technology" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="django">Django</option>
            <option value="ror">Ruby on Rails</option>
            <option value="mern">MERN Stack</option>
            <option value="python">Python</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="experience">Experience</label>
          <select name="experience" id="experience" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="fresher">Fresher</option>
            <option value="experienced">Experienced</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="jobType">Job Type</label>
          <select name="jobType" id="jobType" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="full-time">Full-Time</option>
            <option value="part-time">Part-Time</option>
            <option value="intern">Intern</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="workMode">Work Mode</label>
          <select name="workMode" id="workMode" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
            <option value="on-site">On-Site</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="sortBy">Sort By</label>
          <select name="sortBy" id="sortBy" onChange={handleFilterChange}>
            <option value="">Relevance</option>
            <option value="date">Date</option>
            <option value="popularity">Popularity</option>
            <option value="urgent">Urgent Requirements</option>
            <option value="bulk">Bulk Hiring</option>
          </select>
        </div>
      </div>

      {/* Job Listings */}
      <div className="job-listings">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div key={index} className="job-card">
              <h2>{job.title}</h2>
              <p>{job.description}</p>
              <p><strong>Experience:</strong> {job.experience}</p>
              <p><strong>Type:</strong> {job.type}</p>
              <p><strong>Mode:</strong> {job.mode}</p>
              <button onClick={() => handleApplyClick(job)}>Apply</button>
            </div>
          ))
        ) : (
          <p className="status-message">We are not hiring currently.</p>
        )}
      </div>

      {/* Application Form */}
      {selectedJob && (
        <div className="application-form">
          <h2>Apply for {selectedJob.title}</h2>
          <form onSubmit={handleSubmitApplication}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={applicantDetails.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={applicantDetails.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="resume">Resume</label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="coverLetter">Cover Letter</label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                value={applicantDetails.coverLetter}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="certificates">Certificates</label>
              <input
                type="text"
                id="certificates"
                name="certificates"
                value={applicantDetails.certificates}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="skills">Other Skills</label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={applicantDetails.skills}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Submit Application</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CareerPage;
