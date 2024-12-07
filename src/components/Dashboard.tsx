import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Calendar,
  Users,
  FileText,
  Share2,
  Activity,
  PieChart,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Sample data - in a real app, this would come from an API
  const projectData = [
    {
      name: "Transport",
      ongoing: 4,
      completed: 2,
      planned: 3,
      budget: 2500000,
    },
    { name: "Housing", ongoing: 3, completed: 1, planned: 2, budget: 1800000 },
    { name: "Water", ongoing: 2, completed: 3, planned: 1, budget: 1200000 },
    { name: "Energy", ongoing: 1, completed: 2, planned: 4, budget: 2000000 },
  ];

  const recentUpdates = [
    {
      id: 1,
      dept: "Transport",
      update: "Metro Phase 2 timeline updated",
      time: "2h ago",
    },
    {
      id: 2,
      dept: "Housing",
      update: "New affordable housing project initiated",
      time: "4h ago",
    },
    {
      id: 3,
      dept: "Water",
      update: "Pipeline maintenance schedule shared",
      time: "6h ago",
    },
  ];

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          City Department Cooperation Platform
        </h1>
        <div className="flex items-center gap-4">
          <Users className="h-5 w-5" />
          <span className="text-sm">12 Departments Active</span>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="planning">Planning</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">
                  Active Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Activity className="h-8 w-8 text-blue-500 mr-2" />
                  <span className="text-2xl font-bold">24</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">
                  Shared Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Share2 className="h-8 w-8 text-green-500 mr-2" />
                  <span className="text-2xl font-bold">156</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">
                  Upcoming Deadlines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Calendar className="h-8 w-8 text-red-500 mr-2" />
                  <span className="text-2xl font-bold">8</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Project Status by Department</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={projectData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="ongoing" fill="#3b82f6" name="Ongoing" />
                      <Bar
                        dataKey="completed"
                        fill="#22c55e"
                        name="Completed"
                      />
                      <Bar dataKey="planned" fill="#f59e0b" name="Planned" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUpdates.map((update) => (
                    <div
                      key={update.id}
                      className="flex items-start space-x-4 p-3 bg-gray-50 rounded-lg"
                    >
                      <FileText className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="font-medium">{update.dept}</p>
                        <p className="text-sm text-gray-600">{update.update}</p>
                        <p className="text-xs text-gray-400 mt-1">
                          {update.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="projects">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">
                Project Management features will be displayed here
              </h3>
              <p className="text-gray-600">This section would include:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-600">
                <li>Project timeline visualization</li>
                <li>Resource allocation tools</li>
                <li>Inter-department dependencies</li>
                <li>Progress tracking</li>
                <li>Document sharing</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">
                Resource Management features will be displayed here
              </h3>
              <p className="text-gray-600">This section would include:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-600">
                <li>Equipment inventory</li>
                <li>Human resource allocation</li>
                <li>Budget tracking</li>
                <li>Shared asset calendar</li>
                <li>Resource request system</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="planning">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">
                Planning tools will be displayed here
              </h3>
              <p className="text-gray-600">This section would include:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-600">
                <li>Strategic planning tools</li>
                <li>Phase scheduling</li>
                <li>Budget planning</li>
                <li>Risk assessment</li>
                <li>Collaboration workspace</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
