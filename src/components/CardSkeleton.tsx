import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const CardSkeleton = ({ count, className }: { count: number; className?: string }) => {
  return (
    <SkeletonTheme highlightColor="#444">
      <div className="columns is-mobile is-multiline">
        {Array.from({ length: count }).map((_, idx) => (
          <div key={idx} className={`column ${className}`}>
            <Skeleton height={150}></Skeleton>
            <Skeleton count={2} />
          </div>
        ))}
      </div>
    </SkeletonTheme>
  );
};
