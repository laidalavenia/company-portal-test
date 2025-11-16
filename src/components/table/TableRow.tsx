import { Company } from "@/types";

interface TableRowProps {
  company: Company;
}

export function TableRow({ company }: TableRowProps) {
  return (
    <tr className="hover:bg-blue-50 transition-colors">
      <td className="px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
            {company.name.charAt(0)}
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-gray-800 text-sm truncate">
              {company.name}
            </p>
            <p className="text-xs text-gray-500 sm:hidden">
              {company.industry}
            </p>
          </div>
        </div>
      </td>
      <td className="px-4 py-4 hidden sm:table-cell">
        <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
          {company.industry}
        </span>
      </td>
      <td className="px-4 py-4 text-gray-700 text-sm hidden md:table-cell">
        {company.country}
      </td>
      <td className="px-4 py-4 text-gray-700 text-sm hidden lg:table-cell">
        {company.employeeCount.toLocaleString()}
      </td>
    </tr>
  );
}
