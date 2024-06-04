import React from "react";
import { PiFileDocFill, PiFileJpgFill, PiFilePdfFill, PiFileZipFill } from "react-icons/pi";

const files = [
  { name: "Travel Images.psd", date: "Nov 7, 2021", collaborators: 7, icon: <PiFileDocFill /> },
  { name: "True Photos.jpg", date: "Nov 8, 2021", collaborators: 3, icon: <PiFileJpgFill /> },
  { name: "Dashboard Struct.pdf", date: "Nov 9, 2021", collaborators: 8, icon: <PiFilePdfFill /> },
  { name: "Character Illustration.zip", date: "Nov 9, 2021", collaborators: 2, icon: <PiFileZipFill /> },
];

function LastFile() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl"> {/* Increased max-w-md to max-w-lg */}
      <h3 className="text-xl font-semibold mb-4">Last File</h3>
      <ul>
        {files.map((file, index) => (
          <li key={index} className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-100 p-2 rounded-lg text-xl text-gray-500">
                {file.icon}
              </div>
              <div>
                <p className="text-gray-800 font-medium">{file.name}</p>
                <p className="text-gray-500 text-sm">{file.collaborators} collaborators</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {Array(file.collaborators).fill().map((_, i) => (
                <img
                  key={i}
                  src={`https://via.placeholder.com/24?text=${i + 1}`}
                  alt={`collaborator-${i}`}
                  className="rounded-full w-6 h-6 border-2 border-white"
                />
              ))}
            </div>
            <p className="text-gray-500 text-sm ml-4 whitespace-nowrap">{file.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LastFile;
