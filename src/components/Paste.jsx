import { Copy, Share2, Edit2, Eye, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  // Filter pastes based on the search term
  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (pasteId) => {
    dispatch(removeFromPastes(pasteId));
    toast.success("Paste deleted successfully!");
  };

  const handleCopy = (content) => {
    navigator.clipboard.writeText(content).then(() => {
      toast.success("Copied to clipboard!");
    }).catch(() => {
      toast.error("Failed to copy content.");
    });
  };

  const handleShare = (paste) => {
    if (navigator.share) {
      navigator.share({
        title: paste.title,
        text: paste.content,
      }).then(() => {
        toast.success("Content shared successfully!");
      }).catch(() => {
        toast.error("Failed to share content.");
      });
    } else {
      toast.error("Sharing is not supported on this device.");
    }
  };

  // Function to format the date
  const formatDate = (dateString) => {
    if (!dateString) return "No date available";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  return (
    <div className="w-full h-full py-10 max-w-[1200px] mx-auto px-5 lg:px-0">
      {/* Search Box */}
      <div className="w-full flex justify-center mb-5">
        <input
          type="search"
          placeholder="Search Here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md border border-gray-300 rounded-md p-3 shadow-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Paste List */}
      <div className="flex flex-col gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((paste) => (
            <div
              key={paste._id || paste.id}
              className="bg-white border border-gray-200 rounded-md shadow-md p-6"
            >
              <div className="text-xl font-semibold text-gray-800">
                {paste.title}
              </div>
              <p className="text-gray-600 mt-3">{paste.content}</p>
              <div className="flex gap-4 mt-4">
                <NavLink
                  to={`/?pasteId=${paste._id || paste.id}`}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Edit2 size={18} />
                  Edit
                </NavLink>
                <NavLink
                  to={`/pastes/${paste._id || paste.id}`}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  <Eye size={18} />
                  View
                </NavLink>
                <button
                  onClick={() => handleDelete(paste.id)}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  <Trash2 size={18} />
                  Delete
                </button>
                <button
                  onClick={() => handleCopy(paste.content)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                >
                  <Copy size={18} />
                  Copy
                </button>
                <button
                  onClick={() => handleShare(paste)}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  <Share2 size={18} />
                  Share
                </button>
              </div>
              <div className="text-sm text-gray-400 mt-2">
                {formatDate(paste.createdAt)}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 text-lg mt-10">
            No pastes found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Paste;
