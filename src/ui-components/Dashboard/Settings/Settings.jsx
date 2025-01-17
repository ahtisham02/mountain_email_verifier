import React, { useState } from "react";
import { Edit3, User, MapPin, Lock } from "lucide-react";
import img from "../../../assets/img/American_Express.webp";
import { IoClose } from "react-icons/io5";

const EditModal = ({ isOpen, onClose, title, fields, onSave }) => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => {
      acc[field.key] = field.value;
      return acc;
    }, {})
  );
  const [passwordVisible, setPasswordVisible] = useState(false);  

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-11/12 sm:w-2/3 lg:w-1/3 rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">{title}</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700"><IoClose /></button>
        </div>
        <div className="space-y-4">
          {fields.map((field) => (
            <div key={field.key}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.label}
              </label>
              <input
                type="text"
                value={formData[field.key] || ""}
                onChange={(e) => handleChange(field.key, e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-lg">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-btnBackground hover:bg-btnBackgroundhover text-white rounded-lg">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default function UserProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalFields, setModalFields] = useState([]);

  const handleEdit = (section) => {
    let fields = [];
    if (section === "personal") {
      fields = [
        { label: "First Name", value: "Jack", key: "firstName" },
        { label: "Last Name", value: "Adams", key: "lastName" },
        { label: "Email address", value: "jackadams@gmail.com", key: "email" },
        { label: "Phone", value: "(213) 555-1234", key: "phone" },
      ];
      setModalTitle("Edit Personal Information");
    } else if (section === "address") {
      fields = [
        { label: "Country", value: "United States of America", key: "country" },
        { label: "City/State", value: "California, USA", key: "cityState" },
        { label: "Postal Code", value: "ERT 62574", key: "postalCode" },
      ];
      setModalTitle("Edit Address");
    } else if (section === "password") {
      fields = [
        { label: "Password", value: "********", key: "password" },
        { label: "Confirm Password", value: "", key: "confirmPassword" },
      ];
      setModalTitle("Change Password");
    }
    setModalFields(fields);
    setIsModalOpen(true);
  };
  
  const handleSave = (updatedData) => {
    const { password, confirmPassword } = updatedData;
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    console.log("Updated Data:", updatedData);
    // Handle saving the data (e.g., API call)
  };  

  return (
    <div className="bg-gray-50 p-6">
      <EditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
        fields={modalFields}
        onSave={handleSave}
      />
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="md:text-2xl text-xl pt-2 sm:pt-0 font-bold text-gray-800">
            Account Settings
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Update your account details or modify your personal information.
          </p>
        </div>
      </div>

      {/* Profile Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={img}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-800">Jack Adams</h3>
              <p className="text-gray-600">Product Designer</p>
              <p className="text-gray-600">Los Angeles, California, USA</p>
            </div>
          </div>
          <button
            onClick={() => handleEdit("personal")}
            className="flex items-center gap-2 rounded-lg bg-[#FAF5FF] sm:px-3 sm:py-1.5 p-1 border-[1px] border-gray-300 text-gray-500 hover:text-gray-700"
          >
            <Edit3 size={18} /> Edit
          </button>
        </div>
      </div>

      {/* Personal Information Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-[#FAF5FF] sm:p-2 p-1">
              <User size={20} className="sm:w-5 sm:h-5 w-4 h-4 text-btnBackgroundhover" />
            </div>
            <h3 className="text-lg font-bold text-gray-800">Personal Information</h3>
          </div>
          <button
            onClick={() => handleEdit("personal")}
            className="flex items-center gap-2 rounded-lg bg-[#FAF5FF] sm:px-3 sm:py-1.5 p-1 border-[1px] border-gray-300 text-gray-500 hover:text-gray-700"
          >
            <Edit3 size={18} /> Edit
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600 text-sm">First Name</p>
            <p className="font-medium">Jack</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Last Name</p>
            <p className="font-medium">Adams</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Email address</p>
            <p className="font-medium">jackadams@gmail.com</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Phone</p>
            <p className="font-medium">(213) 555-1234</p>
          </div>
        </div>
      </div>

      {/* Address Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-[#FAF5FF] sm:p-2 p-1">
              <MapPin size={20} className="sm:w-5 sm:h-5 w-4 h-4 text-btnBackgroundhover" />
            </div>
            <h3 className="text-lg font-bold text-gray-800">Address</h3>
          </div>
          <button
            onClick={() => handleEdit("address")}
            className="flex items-center gap-2 rounded-lg bg-[#FAF5FF] sm:px-3 sm:py-1.5 p-1 border-[1px] border-gray-300 text-gray-500 hover:text-gray-700"
          >
            <Edit3 size={18} /> Edit
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600 text-sm">Country</p>
            <p className="font-medium">United States of America</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">City/State</p>
            <p className="font-medium">California, USA</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Postal Code</p>
            <p className="font-medium">ERT 62574</p>
          </div>
        </div>
      </div>

      {/* Password Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-[#FAF5FF] sm:p-2 p-1">
              <Lock size={20} className="sm:w-5 sm:h-5 w-4 h-4 text-btnBackgroundhover" />
            </div>
            <h3 className="text-lg font-bold text-gray-800">Password</h3>
          </div>
          <button
            onClick={() => handleEdit("password")}
            className="flex items-center gap-2 rounded-lg bg-[#FAF5FF] sm:px-3 sm:py-1.5 p-1 border-[1px] border-gray-300 text-gray-500 hover:text-gray-700"
          >
            <Edit3 size={18} /> Change Password
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600 text-sm mb-2">Password</p>
            <p className="font-medium">********</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm mb-2">
              For security reasons, your password is hidden.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
