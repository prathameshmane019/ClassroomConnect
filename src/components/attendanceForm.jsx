
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const students = [
  { id: 1, name: 'Aishwarya Deshmukh' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Alice Johnson' },
  { id: 4, name: 'John Doe' },
  { id: 5, name: 'Prathamesh Mane' },
  { id: 6, name: 'Suraj Masa;' },
];

console.table(students)
const AttendanceForm = () => {
  const [attendance, setAttendance] = useState({});

  const handleAttendanceChange = (studentId, status) => {
    setAttendance((prev) => ({
      ...prev,
      [studentId]: status,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(attendance);
  };

  return (
    <Card className="max-w-2xl mx-auto mt-10">
      <CardHeader>
        <CardTitle>Take Attendance</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input type="date" id="date" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="class">Class</Label>
              <Input type="text" id="class" placeholder="Enter class name" required />
            </div>
            <div className="space-y-4">
              {students.map((student) => (
                <div key={student.id} className="flex items-center justify-between">
                  <Label>{student.name}</Label>
                  <div className="space-x-4">
                    <label>
                      <input
                        type="radio"
                        name={`attendance-${student.id}`}
                        value="present"
                        onChange={() => handleAttendanceChange(student.id, 'present')}
                        required
                      />
                      Present
                    </label>
                    <label>
                      <input
                        type="radio"
                        name={`attendance-${student.id}`}
                        value="absent"
                        onChange={() => handleAttendanceChange(student.id, 'absent')}
                      />
                      Absent
                    </label>
                  </div>
                </div>
              ))}
            </div>
            <Button type="submit" className="w-full mt-4">
              Submit Attendance
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default AttendanceForm;
