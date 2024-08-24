// src/app/SignUp.js
'use client'; // Mark this component as a Client Component

import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student', // Default role
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRoleChange = (e) => {
    setFormData({
      ...formData,
      role: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-200">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <fieldset>
              <legend className="block text-gray-700 text-sm font-bold mb-2">I am a</legend>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="student"
                  name="role"
                  value="student"
                  checked={formData.role === 'student'}
                  onChange={handleRoleChange}
                  className="mr-2"
                />
                <label htmlFor="student" className="text-gray-700 text-sm font-medium">Student</label>
              </div>
              <div className="flex items-center mt-2">
                <input
                  type="radio"
                  id="teacher"
                  name="role"
                  value="teacher"
                  checked={formData.role === 'teacher'}
                  onChange={handleRoleChange}
                  className="mr-2"
                />
                <label htmlFor="teacher" className="text-gray-700 text-sm font-medium">Teacher</label>
              </div>
            </fieldset>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
