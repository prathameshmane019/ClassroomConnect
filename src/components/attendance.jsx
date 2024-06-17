// import React, { useState } from 'react';
// import { Button, Card, CardContent, CardHeader, Select, DatePicker } from '@shadcn/ui';

// const AttendanceViewer = () => {
//   const [selectedClass, setSelectedClass] = useState('');
//   const [selectedSubject, setSelectedSubject] = useState('');
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   const handleClassChange = (event) => {
//     setSelectedClass(event.target.value);
//   };

//   const handleSubjectChange = (event) => {
//     setSelectedSubject(event.target.value);
//   };

//   const handleDateChange = (dates) => {
//     if (dates.length === 2) {
//       setStartDate(dates[0]);
//       setEndDate(dates[1]);
//     } else {
//       setStartDate(null);
//       setEndDate(null);
//     }
//   };

//   const handleSearch = () => {
//     // Implement search logic based on selectedClass, selectedSubject, startDate, endDate
//     console.log('Searching attendance...');
//   };

//   return (
//     <div className="p-6">
//       <Card className="max-w-lg mx-auto">
//         <CardHeader className="text-xl font-semibold">View Attendance</CardHeader>
//         <CardContent>
//           <div className="grid grid-cols-1 gap-4">
//             <Select
//               label="Select Class"
//               value={selectedClass}
//               onChange={handleClassChange}
//               className="w-full"
//             >
//               <option value="">Select Class</option>
//               <option value="class1">Class 1</option>
//               <option value="class2">Class 2</option>
//               <option value="class3">Class 3</option>
//               {/* Add more options as needed */}
//             </Select>

//             <Select
//               label="Select Subject"
//               value={selectedSubject}
//               onChange={handleSubjectChange}
//               className="w-full"
//             >
//               <option value="">Select Subject</option>
//               <option value="math">Math</option>
//               <option value="science">Science</option>
//               <option value="history">History</option>
//               {/* Add more options as needed */}
//             </Select>

//             <DatePicker
//               label="Select Date Range"
//               range
//               onChange={handleDateChange}
//               className="w-full"
//             />

//             <Button onClick={handleSearch} className="w-full">
//               Search Attendance
//             </Button>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Display area for attendance data */}
//       {/* Implement logic to display attendance data based on selected criteria */}
//     </div>
//   );
// };

// export default AttendanceViewer;
