import { Company } from "@/types";

interface TableRowProps {
  company: Company;
}

const industryColors: Record<string, string> = {
  Technology: "bg-primary-100 text-primary-700 border-primary-200",
  Finance: "bg-green-100 text-green-700 border-green-200",
  Healthcare: "bg-pink-100 text-pink-700 border-pink-200",
  Manufacturing: "bg-orange-100 text-orange-700 border-orange-200",
  Retail: "bg-purple-100 text-purple-700 border-purple-200",
  Food: "bg-yellow-100 text-yellow-700 border-yellow-200",
  Environment: "bg-teal-100 text-teal-700 border-teal-200",
  Fashion: "bg-rose-100 text-rose-700 border-rose-200",
};

export function TableRow({ company }: TableRowProps) {
  const colorClass =
    industryColors[company.industry] ||
    "bg-gray-100 text-gray-700 border-gray-200";

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white font-semibold flex-shrink-0">
            {company.name.charAt(0)}
          </div>
          <div className="min-w-0">
            <p className="font-medium text-gray-900 text-sm">{company.name}</p>
            <p className="text-xs text-gray-500 sm:hidden mt-0.5">
              {company.industry}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-4 hidden sm:table-cell">
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${colorClass}`}
        >
          {company.industry}
        </span>
      </td>
      <td className="px-5 py-4 text-sm text-gray-700 hidden md:table-cell">
        {company.country}
      </td>
      <td className="px-5 py-4 text-sm text-gray-700 hidden lg:table-cell">
        {company.employeeCount.toLocaleString()}
      </td>
    </tr>
  );
}
