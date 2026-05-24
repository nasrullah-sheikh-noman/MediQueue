
const TutorsSkeleton = () => {
  return (
    <>
      {Array.from({ length: 14 }).map((_, index) => (
        <div
          key={index}
          className="group overflow-hidden rounded-3xl border bg-white shadow-sm"
        >
          {/* Image Section */}
          <div className="relative h-[280px] w-full overflow-hidden bg-gray-200 animate-pulse">

            {/* subject badge */}
            <div className="absolute left-4 top-4 h-8 w-20 rounded-full bg-gray-300"></div>

            {/* mode badge */}
            <div className="absolute right-4 top-4 h-8 w-24 rounded-full bg-gray-300"></div>

            {/* name + institution */}
            <div className="absolute bottom-5 left-5 space-y-3">
              <div className="h-8 w-44 rounded bg-gray-300"></div>

              <div className="h-4 w-56 rounded bg-gray-300"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-5 p-6">

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">

              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-2xl border bg-muted/40 p-4"
                >
                  <div className="space-y-3 animate-pulse">

                    <div className="h-4 w-20 rounded bg-gray-300"></div>

                    <div className="h-5 w-28 rounded bg-gray-300"></div>

                  </div>
                </div>
              ))}

            </div>

            {/* Fee Section */}
            <div className="flex items-center justify-between rounded-2xl bg-gray-100 p-5">

              <div className="space-y-3 animate-pulse">

                <div className="h-4 w-20 rounded bg-gray-300"></div>

                <div className="h-10 w-28 rounded bg-gray-300"></div>

              </div>

              <div className="h-12 w-36 rounded-2xl bg-gray-300 animate-pulse"></div>

            </div>

          </div>
        </div>
      ))}
    </>
  );
};

export default TutorsSkeleton;