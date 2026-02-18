export default function MovieDetailLoading() {
  return (
    <div className="flex flex-col gap-0 animate-pulse">
      {/* 1. Header/Banner Skeleton Area */}
      <div className="relative w-full h-[600px] bg-slate-900 flex flex-col sm:flex-row p-6 gap-10 items-center sm:items-start">
        
        {/* Poster Placeholder */}
        <div className="w-[300px] sm:w-[400px] aspect-[2/3] bg-slate-800 rounded-lg shrink-0 shadow-2xl" />

        {/* Text Content Placeholder */}
        <div className="flex-1 w-full space-y-6 mt-10">
          <div className="flex justify-between items-center">
            <div className="h-10 w-1/2 bg-slate-800 rounded-md" /> {/* Title */}
            <div className="h-10 w-16 bg-slate-800 rounded-full" /> {/* Rating Circle */}
          </div>

          <div className="flex gap-4">
            <div className="h-5 w-16 bg-slate-800 rounded" /> {/* Year */}
            <div className="h-5 w-16 bg-slate-800 rounded" /> {/* Runtime */}
          </div>

          <div className="space-y-3">
            <div className="h-8 w-32 bg-slate-800 rounded-md" /> {/* Overview Title */}
            <div className="h-4 w-full bg-slate-800 rounded" />
            <div className="h-4 w-full bg-slate-800 rounded" />
            <div className="h-4 w-2/3 bg-slate-800 rounded" />
          </div>

          <div className="space-y-4">
            <div className="h-8 w-40 bg-slate-800 rounded-md" /> {/* Genres Title */}
            <div className="flex gap-2">
              <div className="h-8 w-20 bg-slate-800 rounded-full" />
              <div className="h-8 w-20 bg-slate-800 rounded-full" />
              <div className="h-8 w-20 bg-slate-800 rounded-full" />
            </div>
          </div>
          
          <div className="h-12 w-48 bg-slate-800 rounded-lg mt-4" /> {/* Trailer Button */}
        </div>
      </div>

      {/* 2. Cast List Skeleton */}
      <div className="p-8 bg-white dark:bg-slate-950">
        <div className="h-8 w-48 bg-slate-200 dark:bg-slate-800 rounded mb-6" />
        <div className="flex gap-4 overflow-hidden">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="shrink-0 space-y-2">
              <div className="w-32 h-44 bg-slate-200 dark:bg-slate-800 rounded-xl" />
              <div className="h-3 w-20 bg-slate-200 dark:bg-slate-800 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}