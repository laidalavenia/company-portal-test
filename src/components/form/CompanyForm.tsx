import { FormEvent } from "react";
import { INDUSTRY_OPTIONS, EMPLOYEE_SIZE_OPTIONS } from "@/constants";
import { FormInput } from "./FormInput";
import { FormSelect } from "./FormSelect";
import { FormRadioGroup } from "./FormRadioGroup";

interface CompanyFormProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export function CompanyForm({ onSubmit }: CompanyFormProps) {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          Register New Company
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Fill in the details to add a new company to the directory
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <FormInput
          label="Company Name"
          name="name"
          placeholder="Enter company name"
          required
        />

        <FormSelect
          label="Industry Sector"
          name="industry"
          options={INDUSTRY_OPTIONS}
          required
        />

        <FormRadioGroup
          label="Employee Size"
          name="employeeSize"
          options={EMPLOYEE_SIZE_OPTIONS}
          required
        />

        <FormInput
          label="Contact Email"
          name="email"
          type="email"
          placeholder="company@example.com"
          required
        />

        <FormInput
          label="Headquarters City"
          name="city"
          placeholder="Enter city name"
          required
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormInput
            label="Website"
            name="website"
            type="url"
            placeholder="https://company.com"
          />
          <FormInput
            label="Phone Number"
            name="phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Company Description
          </label>
          <textarea
            name="description"
            rows={4}
            placeholder="Brief description of the company..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
          ></textarea>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              name="agreeToTerms"
              required
              className="w-5 h-5 mt-0.5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700 group-hover:text-gray-900">
              I agree to the{" "}
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Privacy Policy
              </a>
              . By submitting this form, I confirm that all information provided
              is accurate.
            </span>
          </label>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <button
            type="submit"
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            <span className="flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Register Company
            </span>
          </button>
          <button
            type="reset"
            className="sm:w-auto px-8 py-4 rounded-lg font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all"
          >
            Reset Form
          </button>
        </div>
      </form>

      {/* Info Cards */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs text-blue-600 font-semibold">
                Fast Process
              </p>
              <p className="text-lg font-bold text-blue-900">Instant</p>
            </div>
          </div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs text-green-600 font-semibold">
                Secure Data
              </p>
              <p className="text-lg font-bold text-green-900">Encrypted</p>
            </div>
          </div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs text-purple-600 font-semibold">Support</p>
              <p className="text-lg font-bold text-purple-900">24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
