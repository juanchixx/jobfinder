"use client";

import { useState, useEffect, FormEvent } from 'react';
import { Input } from '@/components/ui/input';

// import { Button } from '../buttoncomponents/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const jobSites = [
  "jobs.lever.co",
  "board.greenhouse.io",
  "jobs.ashbyhq.com",
  "jobs.jobvite.com",
  "myworkdayjobs.com",
  "careers.jobscore.com",
  "ats.comparably.com",
];

  const [jobDescription, setJobDescription] = useState('');
  const [selectedSite, setSelectedSite] = useState('jobs.lever.co');

  // ✅ Load saved search on mount
  useEffect(() => {
    const savedDescription = localStorage.getItem('jobDescription');
    const savedSite = localStorage.getItem('selectedSite');

    if (savedDescription) setJobDescription(savedDescription);
    if (savedSite) setSelectedSite(savedSite);
  }, []);

  // ✅ Save search data when user changes input or site
  useEffect(() => {
    localStorage.setItem('jobDescription', jobDescription);
  }, [jobDescription]);

  useEffect(() => {
    localStorage.setItem('selectedSite', selectedSite);
  }, [selectedSite]);

  // ✅ Google site search
  const handleSearch = () => {
    if (jobDescription && selectedSite) {
      const query = `site:https://${selectedSite} ${jobDescription}`;
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
        query
      )}`;
      window.open(searchUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/85 to-indigo-900/90 backdrop-blur-sm"></div>
      </div>

      {/* Decorative icons */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 opacity-10">
          <Briefcase className="w-32 h-32 text-white" />
        </div>
        <div className="absolute top-40 right-20 opacity-10">
          <Briefcase className="w-40 h-40 text-white rotate-12" />
        </div>
        <div className="absolute bottom-40 left-20 opacity-10">
          <Briefcase className="w-36 h-36 text-white -rotate-12" />
        </div>
        <div className="absolute bottom-20 right-40 opacity-10">
          <Briefcase className="w-28 h-28 text-white rotate-45" />
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-5">
          <Briefcase className="w-48 h-48 text-white" />
        </div>
        <div className="absolute top-1/3 right-1/3 opacity-5">
          <Briefcase className="w-44 h-44 text-white -rotate-45" />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center p-8 z-10">
        <Card className="w-full max-w-2xl shadow-2xl bg-white/95 backdrop-blur-md border-0">
          <CardContent className="p-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-2xl shadow-lg">
                  <Search className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-4xl mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Job Search Tool
              </h1>
              <p className="text-muted-foreground">
                Find your dream job across multiple platforms
              </p>
            </div>

            {/* Form */}
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">
                  Job Description
                </label>
                <Input
                  placeholder="e.g., React Developer, Product Manager, Designer"
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  className="h-12 bg-input-background border-border/50 focus:border-blue-500 transition-colors"
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">
                  Select Job Site
                </label>
                <Select value={selectedSite} onValueChange={setSelectedSite}>
                  <SelectTrigger className="h-12 bg-input-background border-border/50 focus:border-blue-500 transition-colors">
                    <SelectValue placeholder="Select a job site" />
                  </SelectTrigger>
                  <SelectContent>
                    {jobSites.map((site) => (
                      <SelectItem key={site} value={site}>
                        {site}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={handleSearch}
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all"
              >
                <Search className="w-5 h-5 mr-2" />
                SEARCH
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="z-10 pb-6 text-center">
        <p className="text-white/90 text-sm">
          Made by{' '}
          <a
            href="https://juanmdiaz.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-300 transition-colors font-medium"
          >
            Juan M Diaz
          </a>
        </p>
      </footer>
    </div>
  );
}
