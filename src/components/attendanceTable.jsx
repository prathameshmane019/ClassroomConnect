import React from 'react';

const AttendanceTable = ({ data, sessionDates }) => {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2">Student ID</th>
            <th className="border border-gray-200 px-4 py-2">Student Name</th>
            {sessionDates?.map((date, index) => (
              <th key={index} className="border border-gray-200 px-4 py-2">
                {date}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((student, studentIndex) => (
            <tr key={studentIndex} className="hover:bg-gray-50">
              <td className="border border-gray-200 px-4 py-2">{student.id}</td>
              <td className="border border-gray-200 px-4 py-2">{student.name}</td>
              {sessionDates?.map((date, dateIndex) => (
                <td key={dateIndex} className="border border-gray-200 px-4 py-2 text-center">
                  <input
                    type="radio"
                    name={`attendance-${student.id}-${date}`}
                    value="present"
                  /> Present
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
