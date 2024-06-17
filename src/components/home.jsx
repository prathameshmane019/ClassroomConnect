
import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-100">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle>Welcome to Attendance Management System</CardTitle>
          <CardDescription>
            Manage attendance effortlessly and efficiently.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">
            Our system provides an easy-to-use interface for tracking attendance, viewing reports, and managing student data.
          </p>
          <Button className="w-full">Get Started</Button>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="link" className="text-blue-600">
            Learn More
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Home;
