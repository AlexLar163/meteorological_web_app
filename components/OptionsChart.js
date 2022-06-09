const OptionsChart = () => {
  return (
    <div className="flex justify-between gap-5">
      <label className="flex-1">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Medición de:
        </span>
        <input
          type="text"
          name="email"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Humedad"
        />
      </label>
      <label className="flex-1">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          correspondiente a:
        </span>
        <input
          type="date"
          name="date"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        />
      </label>
      <label className="flex-1">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          en:
        </span>
        <input
          type="text"
          name="email"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Lugar"
        />
      </label>
    </div>
  );
};
export default OptionsChart;
