import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router";

const RegisterAttendee = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    // logic to handle login
    console.log(user); // Now it will show the correct email and password
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center  p-4">
      <Card className="w-full max-w-md bg-slate-800 text-slate-100 rounded-[30px]">
        <CardHeader className="space-y-4">
          <div className="flex justify-center">
            <Link to="/">
              <img
                src="event-logo.svg"
                alt="Event Management Logo"
                className="h-24 w-24 rounded-full object-cover mb-4"
              />
            </Link>
          </div>
          <CardTitle className="text-2xl text-center text-slate-100">
            Event Management Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2 ">
              <label className="text-sm font-medium text-slate-200">
                First name
              </label>
              <input
                type="text"
                value={user.firstName}
                onChange={(e) =>
                  setUser((prevUser) => ({
                    ...prevUser,
                    firstName: e.target.value,
                  }))
                }
                className="w-full p-2 rounded-xl bg-slate-700 border border-slate-600 focus:border-blue-400 focus:outline-none text-slate-100"
                placeholder="First name"
                required
              />
            </div>
            <div className="space-y-2 ">
              <label className="text-sm font-medium text-slate-200">
                Last name
              </label>
              <input
                type="text"
                value={user.lastName}
                onChange={(e) =>
                  setUser((prevUser) => ({
                    ...prevUser,
                    lastName: e.target.value,
                  }))
                }
                className="w-full p-2 rounded-xl bg-slate-700 border border-slate-600 focus:border-blue-400 focus:outline-none text-slate-100"
                placeholder="Last name"
                required
              />
            </div>
            <div className="space-y-2 ">
              <label className="text-sm font-medium text-slate-200">
                Email
              </label>
              <input
                type="email"
                value={user.email}
                onChange={(e) =>
                  setUser((prevUser) => ({
                    ...prevUser,
                    email: e.target.value,
                  }))
                }
                className="w-full p-2 rounded-xl bg-slate-700 border border-slate-600 focus:border-blue-400 focus:outline-none text-slate-100"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-200">
                Password
              </label>
              <input
                type="password"
                value={user.password}
                onChange={(e) =>
                  setUser((prevUser) => ({
                    ...prevUser,
                    password: e.target.value,
                  }))
                }
                className="w-full p-2 rounded-xl bg-slate-700 border border-slate-600 focus:border-blue-400 focus:outline-none text-slate-100"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-xl transition-colors mt-6"
            >
              Register
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterAttendee;
