function Input({ label, type, placeholder }){
  return (
    <div className="flex flex-col gap-1 w-full sm:w-96">
      <label htmlFor="email" className="font-medium">{label}</label>

      <div className="relative">
        <input
          type={type}
          className="w-full bg-bg-layer rounded-lg border-none px-4 py-3 pe-12 text-sm shadow-md"
          placeholder={placeholder}
        />

        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-grays-component text-opacity-40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
        </span>
      </div>
    </div>
  )
}

export default Input