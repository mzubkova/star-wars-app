import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonItem = () => (
  <ContentLoader
    speed={3}
    width={500}
    height={500}
    viewBox="0 0 500 500"
    backgroundColor="#2d2d2d"
    foregroundColor="#717171"
  >
    <rect x="0" y="0" rx="3" ry="3" width="500" height="100" />
    <rect x="0" y="115" rx="3" ry="3" width="500" height="100" />
    <rect x="0" y="230" rx="3" ry="3" width="500" height="100" />
    <rect x="0" y="345" rx="3" ry="3" width="500" height="100" />
  </ContentLoader>
);

export default React.memo(SkeletonItem);
