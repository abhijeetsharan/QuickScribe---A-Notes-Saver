import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ViewPaste = () => {
  const { id } = useParams();

  // Retrieve all pastes from Redux store
  const allPastes = useSelector((state) => state.paste.pastes);

  // Find the specific paste by ID
  const paste = allPastes.find((p) => p._id === id);

  return (
    <div className="w-full h-full py-10 max-w-[1200px] mx-auto px-5 lg:px-0">
      {paste ? (
        <div className="bg-white border border-gray-200 rounded-md shadow-lg p-6">
          {/* Title Input */}
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              value={paste.title}
              disabled
              className="w-full border border-gray-300 rounded-md p-3 shadow-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter title here"
            />
          </div>

          {/* Content Textarea */}
          <div>
            <label
              htmlFor="content"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Content
            </label>
            <textarea
              id="content"
              value={paste.content}
              disabled
              rows={15}
              className="w-full border border-gray-300 rounded-md p-4 shadow-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter content here"
            />
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg mt-10">
          Paste not found.
        </div>
      )}
    </div>
  );
};

export default ViewPaste;
