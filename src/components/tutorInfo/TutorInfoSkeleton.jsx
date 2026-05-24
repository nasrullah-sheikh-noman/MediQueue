import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const TutorInfoSkeleton = () => {
  return (
    <div className="container mx-auto p-6">
      <Card className="w-full overflow-hidden rounded-3xl">
        
        {/* Image Skeleton */}
        <div className="relative h-[350px] w-full">
          <Skeleton className="h-full w-full" />

          {/* overlay text skeleton */}
          <div className="absolute bottom-5 left-5 space-y-2">
            <Skeleton className="h-6 w-48 bg-white/10" />
            <Skeleton className="h-4 w-32 bg-white/10" />
          </div>
        </div>

        {/* Content */}
        <CardHeader className="space-y-2">
          <Skeleton className="h-6 w-1/3" />
        </CardHeader>

        <CardContent className="space-y-6">
          
          {/* Grid info */}
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-2 rounded-2xl border p-4">
                <Skeleton className="h-3 w-1/2" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ))}
          </div>

          {/* fee + button */}
          <div className="flex items-center justify-between rounded-2xl border p-5">
            <div className="space-y-2">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-8 w-24" />
            </div>

            <Skeleton className="h-10 w-32 rounded-xl" />
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default TutorInfoSkeleton;