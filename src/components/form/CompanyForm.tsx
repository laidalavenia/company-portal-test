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
    <div className="max-w-3xl mx-auto bg-white rounded-lg border border-gray-200 p-6 sm:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Register New Company
        </h2>
        <p className="text-sm text-gray-600">
          Fill in the details to add a new company to the directory
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-5">
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

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company Description
          </label>
          <textarea
            name="description"
            rows={4}
            placeholder="Brief description of the company..."
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm resize-none"
          ></textarea>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="agreeToTerms"
              required
              className="w-4 h-4 mt-0.5 text-primary-600 rounded focus:ring-2 focus:ring-primary-500 border-gray-300"
            />
            <span className="text-sm text-gray-700">
              I agree to the{" "}
              <a
                href="#"
                className="text-primary-600 font-medium hover:underline"
              >
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-primary-600 font-medium hover:underline"
              >
                Privacy Policy
              </a>
            </span>
          </label>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="submit"
            className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
          >
            Register Company
          </button>
          <button
            type="reset"
            className="sm:w-auto px-6 py-2.5 rounded-lg font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Reset Form
          </button>
        </div>
      </form>
    </div>
  );
}
