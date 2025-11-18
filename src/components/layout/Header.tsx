export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
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
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                Company Portal
              </h1>
              <p className="text-xs text-gray-500">Enterprise Management</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-200">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              System Active
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
