"use client";

import { TreePine, AlertTriangle, Droplets, Leaf, TrendingUp, Clock, MapPin, ThermometerSun, Wind, Sprout, Info, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Bar, BarChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import Link from "next/link"

// Mock data for charts
const treeHealthData = [
  { month: "Jan", healthy: 85, moderate: 10, critical: 5 },
  { month: "Feb", healthy: 87, moderate: 9, critical: 4 },
  { month: "Mar", healthy: 82, moderate: 12, critical: 6 },
  { month: "Apr", healthy: 88, moderate: 8, critical: 4 },
  { month: "May", healthy: 90, moderate: 7, critical: 3 },
  { month: "Jun", healthy: 89, moderate: 8, critical: 3 },
]

const activityData = [
  { day: "Mon", uploads: 12, issues: 5 },
  { day: "Tue", uploads: 18, issues: 8 },
  { day: "Wed", uploads: 15, issues: 3 },
  { day: "Thu", uploads: 22, issues: 7 },
  { day: "Fri", uploads: 28, issues: 4 },
  { day: "Sat", uploads: 8, issues: 2 },
  { day: "Sun", uploads: 5, issues: 1 },
]

const recentActivity = [
  { id: 1, type: "tree", title: "Banyan tree uploaded by Priya Sharma", location: "Block A, Engineering Building", time: "2 min ago", status: "Healthy" },
  { id: 2, type: "issue", title: "Broken irrigation pipe reported", location: "Central Garden", time: "15 min ago", status: "Open" },
  { id: 3, type: "tree", title: "Neem tree health updated", location: "Library Lawn", time: "1 hour ago", status: "Moderate" },
  { id: 4, type: "issue", title: "Overflowing dustbin cleared", location: "Hostel B Entrance", time: "2 hours ago", status: "Resolved" },
  { id: 5, type: "tree", title: "Gulmohar added by Rahul Verma", location: "Sports Complex", time: "3 hours ago", status: "Healthy" },
]

const chartConfig = {
  healthy: { label: "Healthy", color: "#2d5016" },
  moderate: { label: "Moderate", color: "#d4af37" },
  critical: { label: "Critical", color: "#dc2626" },
  uploads: { label: "Tree Uploads", color: "#2d5016" },
  issues: { label: "Issues Reported", color: "#d4af37" },
}

const treeCategories = [
  {
    name: "Native Species",
    count: 487,
    location: "Campus Wide",
    gradient: "from-emerald-500 to-green-700",
    icon: "🌳"
  },
  {
    name: "Fruit Trees",
    count: 234,
    location: "Garden Areas",
    gradient: "from-lime-400 to-green-600",
    icon: "🍎"
  },
  {
    name: "Flowering Trees",
    count: 312,
    location: "Main Lawns",
    gradient: "from-teal-400 to-cyan-600",
    icon: "🌸"
  },
  {
    name: "Shade Trees",
    count: 214,
    location: "Pathways",
    gradient: "from-green-600 to-emerald-800",
    icon: "🌲"
  },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf8f3] via-white to-[#f5f5dc]">

      {/* Hero Banner */}
      <section
        className="relative h-64 overflow-hidden rounded-b-3xl"
        style={{
          backgroundImage: 'url(/green-mountains.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a3a1a]/90 to-[#2d5016]/80" />
        <div className="relative h-full flex flex-col justify-center px-8 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Growing a greener campus,<br />one tree at a time
          </h1>
          <p className="text-[#e8e6d9] text-lg mb-6 max-w-2xl">
            Track, monitor, and nurture your campus ecosystem with AI-powered insights
          </p>
        </div>
      </section>

      <div className="p-4 sm:p-6 lg:p-8">

        {/* Stats Cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-none bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2d5016]/10 to-transparent rounded-bl-full" />
            <CardHeader className="flex flex-row items-center justify-between pb-2 relative z-10">
              <CardTitle className="text-sm font-medium text-gray-600">Trees Monitored</CardTitle>
              <div className="p-2 rounded-lg bg-[#2d5016]/10 group-hover:bg-[#d4af37]/20 transition-colors">
                <TreePine className="h-5 w-5 text-[#2d5016] transition-all duration-300 group-hover:scale-110 group-hover:text-[#d4af37]" />
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-4xl font-bold text-[#1a3a1a] mb-1">1,247</div>
              <p className="flex items-center gap-1 text-xs text-gray-600">
                <TrendingUp className="h-3 w-3 text-[#2d5016]" />
                <span className="text-[#2d5016] font-semibold">+23</span> this week
              </p>
            </CardContent>
          </Card>

          <Card className="border-none bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-bl-full" />
            <CardHeader className="flex flex-row items-center justify-between pb-2 relative z-10">
              <CardTitle className="text-sm font-medium text-gray-600">Civic Issues</CardTitle>
              <div className="p-2 rounded-lg bg-[#d4af37]/10 group-hover:bg-[#d4af37]/20 transition-colors">
                <AlertTriangle className="h-5 w-5 text-[#d4af37] transition-all duration-300 group-hover:scale-110" />
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-4xl font-bold text-[#1a3a1a] mb-1">42</div>
              <p className="text-xs text-gray-600">
                <span className="text-[#2d5016] font-semibold">28 resolved</span>, 14 open
              </p>
            </CardContent>
          </Card>

          <Card className="border-none bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full" />
            <CardHeader className="flex flex-row items-center justify-between pb-2 relative z-10">
              <CardTitle className="text-sm font-medium text-gray-600">Water Saved</CardTitle>
              <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                <Droplets className="h-5 w-5 text-blue-600 transition-all duration-300 group-hover:scale-110" />
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-4xl font-bold text-[#1a3a1a] mb-1">24,560</div>
              <p className="text-xs text-gray-600">Liters this month</p>
            </CardContent>
          </Card>

          <Card className="border-none bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2d5016]/10 to-transparent rounded-bl-full" />
            <CardHeader className="flex flex-row items-center justify-between pb-2 relative z-10">
              <CardTitle className="text-sm font-medium text-gray-600">Green Score</CardTitle>
              <div className="p-2 rounded-lg bg-[#2d5016]/10 group-hover:bg-[#d4af37]/20 transition-colors">
                <Leaf className="h-5 w-5 text-[#2d5016] transition-all duration-300 group-hover:scale-110 group-hover:text-[#d4af37]" />
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-4xl font-bold text-[#2d5016] mb-1">87/100</div>
              <p className="text-xs text-gray-600">Campus rating: Excellent</p>
            </CardContent>
          </Card>
        </div>

        {/* Tree Categories - Featured Cards */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-[#1a3a1a]">Tree Categories</h2>
            <Button variant="ghost" className="text-[#2d5016] hover:text-[#d4af37]" asChild>
              <Link href="/trees">View All →</Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {treeCategories.map((category, index) => (
              <Card
                key={index}
                className="border-none shadow-lg overflow-hidden cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-2xl relative h-48"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-90 group-hover:opacity-100 transition-opacity`} />
                <div className="absolute inset-0 bg-[url('/green-mountains.jpg')] bg-cover bg-center opacity-20" />
                <CardContent className="relative h-full flex flex-col justify-between p-6 text-white">
                  <div>
                    <div className="text-4xl mb-2">{category.icon}</div>
                    <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.location}</p>
                  </div>
                  <div className="text-3xl font-bold">{category.count}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Campus Condition Health Index */}
        <Card className="mb-8 border-none shadow-lg bg-white">
          <CardHeader className="pb-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-[#2d5016]/10">
                  <Sprout className="h-5 w-5 text-[#2d5016]" />
                </div>
                <CardTitle className="text-lg font-bold text-[#1a3a1a]">Campus Condition Health Index</CardTitle>
              </div>
              <Badge className="w-fit bg-[#d4af37] text-[#1a3a1a] hover:bg-[#c9b037]">Optimized</Badge>
            </div>
            <CardDescription className="text-gray-600">Real-time environmental conditions across campus sensors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-4 rounded-xl bg-gradient-to-br from-blue-50 to-white p-4 border border-blue-100 transition-all duration-300 hover:shadow-lg cursor-pointer group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 text-white group-hover:scale-110 transition-transform">
                  <Droplets className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-medium">Soil Moisture</p>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-[#1a3a1a]">64%</span>
                    <span className="rounded-full bg-[#2d5016] px-2 py-0.5 text-[10px] font-bold text-white">STABLE</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl bg-gradient-to-br from-green-50 to-white p-4 border border-green-100 transition-all duration-300 hover:shadow-lg cursor-pointer group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500 text-white group-hover:scale-110 transition-transform">
                  <Wind className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-medium">Air Quality (AQI)</p>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-[#1a3a1a]">42</span>
                    <span className="rounded-full bg-[#2d5016] px-2 py-0.5 text-[10px] font-bold text-white">EXCELLENT</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl bg-gradient-to-br from-orange-50 to-white p-4 border border-orange-100 transition-all duration-300 hover:shadow-lg cursor-pointer group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white group-hover:scale-110 transition-transform">
                  <ThermometerSun className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-medium">Ambient Temp</p>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-[#1a3a1a]">28°C</span>
                    <span className="rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-bold text-white">WARM</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Charts Section */}
        <div className="mb-8 grid gap-6 lg:grid-cols-2">
          <Card className="border-none shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="text-[#1a3a1a] flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-[#2d5016]/10">
                  <TrendingUp className="h-4 w-4 text-[#2d5016]" />
                </div>
                Tree Health Trend
              </CardTitle>
              <CardDescription className="text-gray-600">Percentage of trees by health status over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={treeHealthData}>
                    <defs>
                      <linearGradient id="healthyGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2d5016" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#2d5016" stopOpacity={0.1} />
                      </linearGradient>
                      <linearGradient id="moderateGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#d4af37" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#d4af37" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
                    <XAxis dataKey="month" className="text-xs" tick={{ fill: '#6b7280' }} />
                    <YAxis className="text-xs" tick={{ fill: '#6b7280' }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="healthy" stackId="1" stroke="#2d5016" fill="url(#healthyGradient)" />
                    <Area type="monotone" dataKey="moderate" stackId="1" stroke="#d4af37" fill="url(#moderateGradient)" />
                    <Area type="monotone" dataKey="critical" stackId="1" stroke="#dc2626" fill="#dc2626" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="text-[#1a3a1a] flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-[#d4af37]/10">
                  <TreePine className="h-4 w-4 text-[#d4af37]" />
                </div>
                Weekly Activity
              </CardTitle>
              <CardDescription className="text-gray-600">Tree uploads and issues reported this week</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={activityData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
                    <XAxis dataKey="day" className="text-xs" tick={{ fill: '#6b7280' }} />
                    <YAxis className="text-xs" tick={{ fill: '#6b7280' }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="uploads" fill="#2d5016" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="issues" fill="#d4af37" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="border-none shadow-lg bg-white">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-[#1a3a1a] flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-[#2d5016]/10">
                    <Clock className="h-4 w-4 text-[#2d5016]" />
                  </div>
                  Recent Activity
                </CardTitle>
                <CardDescription className="text-gray-600">Latest tree uploads and issue reports</CardDescription>
              </div>
              <Button variant="ghost" className="text-[#2d5016] hover:text-[#d4af37]">
                View All →
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex flex-col gap-2 rounded-xl border border-gray-100 bg-gradient-to-r from-white to-gray-50/50 p-4 sm:flex-row sm:items-center sm:justify-between transition-all duration-300 hover:border-[#d4af37] hover:shadow-md hover:from-[#faf8f3] cursor-pointer group">
                  <div className="flex items-start gap-3">
                    <div className={`mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${activity.type === "tree" ? "bg-gradient-to-br from-[#2d5016] to-[#1a3a1a] text-white" : "bg-gradient-to-br from-[#d4af37] to-[#c9b037] text-[#1a3a1a]"
                      } group-hover:scale-110`}>
                      {activity.type === "tree" ? (
                        <TreePine className="h-5 w-5" />
                      ) : (
                        <AlertTriangle className="h-5 w-5" />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-[#1a3a1a]">{activity.title}</p>
                      <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          {activity.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {activity.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Badge
                    className={
                      activity.status === "Healthy" || activity.status === "Resolved"
                        ? "bg-[#2d5016] text-white hover:bg-[#1a3a1a]"
                        : activity.status === "Moderate"
                          ? "bg-[#d4af37]/20 text-[#d4af37] border-[#d4af37]"
                          : activity.status === "Open"
                            ? "bg-blue-500/20 text-blue-700 border-blue-500"
                            : ""
                    }
                  >
                    {activity.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
