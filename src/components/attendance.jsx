import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import AttendanceTable from './attendanceTable';

const AttendanceViewer = () => {
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [dateRange, setDateRange] = useState({ from: null, to: null });
    const [attendanceData, setAttendanceData] = useState([]);
    const [sessionDates, setSessionDates] = useState([]);

    const handleSearch = () => {
        const mockAttendanceData = [
            { id: 'S001', name: 'Prathamesh Mane' },
            { id: 'S002', name: 'Aishwarya Deshmukh' },   
            { id: 'S003', name: 'Pratik Mulik' },
            { id: 'S004', name: 'Suraj Masal' },
            { id: 'S005', name: 'Madhav Kamble' },
            { id: 'S006', name: 'Vasudha Navale' },  
            { id: 'S007', name: 'Chaitanya Kale' },
            { id: 'S008', name: 'Prakwal Linge' },
        ];

        const mockSessionDates = [
            '2023-06-01',
            '2023-06-02',
            '2023-06-03', 
            '2023-06-04',
            '2023-06-05',
            '2023-06-06',
            '2023-06-07',
            '2023-06-08',
            '2023-06-09',
          
        ];

        setAttendanceData(mockAttendanceData);
        setSessionDates(mockSessionDates);
    };

    return (
        <div className="p-6">
        
                    <div className="flex gap-4 align-middle items-center ">
                        <Select
                            value={selectedClass}
                            onValueChange={setSelectedClass}
                            className="w-full"
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select Class" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="class1">Class 1</SelectItem>
                                <SelectItem value="class2">Class 2</SelectItem>
                                <SelectItem value="class3">Class 3</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select
                            value={selectedSubject}
                            onValueChange={setSelectedSubject}
                            className="w-full"
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select Subject" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="math">Math</SelectItem>
                                <SelectItem value="science">Science</SelectItem>
                                <SelectItem value="history">History</SelectItem>
                            </SelectContent>
                        </Select>

                        <input
                            type='date'
                            value={dateRange}
                            onChange={setDateRange}
                            className="w-full"
                        />

                        <Button onClick={handleSearch} className="w-full">
                            Search Attendance
                        </Button>
                    </div>
           
            {attendanceData.length > 0 ? (
                <AttendanceTable data={attendanceData} sessionDates={sessionDates} />
            ) : (
                <div className="text-center">
                    <img src="/public/img.svg" height={400} width={400} alt="No data available" className="mx-auto mt-6" />
                </div>
            )}
        </div>
    );
};

export default AttendanceViewer;
