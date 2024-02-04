"use client";

import { API_URL } from "../Config";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let raw_data = new FormData(e.currentTarget);
    let data: any = {};
    const URL = API_URL + "CreateUsers";

    for (let [key, value] of raw_data.entries() as any) {
      if (key !== "verify_password") {
        data[key] = value;
      }
    }

    data["createDate"] = new Date().toISOString();

    console.log(data);

    let res = await fetch(URL, {
      body: JSON.stringify(data), // Convert data object to JSON string
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      let data = await res.json();
      console.log(data);
      router.push("/home");
    } else {
      console.error("Error:", res.statusText);
    }
  };

  return (
    <div className="bg-[url('/loginBackground.jpg')] h-full">
      <div className="relative flex flex-col justify-center h-full overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
          <h1 className="text-3xl font-semibold text-center text-gray-700">
            Register for CapSoul
          </h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="label">
                <span className="text-base label-text text-black">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email Address"
                name="email"
                className="w-full input input-bordered"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text text-black">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="w-full input input-bordered"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text text-black">
                  Verify Password
                </span>
              </label>
              <input
                type="verify_password"
                placeholder="Enter Password"
                name="verify_password"
                className="w-full input input-bordered"
              />
            </div>

            <div>
              <button className="btn btn-block bg-blue-900 mt-4" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
