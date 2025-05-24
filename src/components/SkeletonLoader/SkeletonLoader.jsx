
import './skeletonLoader.css';

function SkeletonLoader() {
    return (
        <div className="skeleton-page">
            {/* Search Bar Skeleton */}
            <div className="skeleton-search-bar" />

            {/* Product Grid Skeleton */}
            <div className="skeleton-grid">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div className="skeleton-card" key={index}>
                        <div className="skeleton-img" />
                        <div className="skeleton-text short" />
                        <div className="skeleton-text long" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkeletonLoader;
