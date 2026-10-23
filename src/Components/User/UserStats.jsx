import { lazy, Suspense, useEffect } from 'react';
import useFetch from '../../Hooks/useFetch';
import { STATS_GET } from '../../api/auth';
import Error from '../../Helper/Error';
import Loading from '../../Helper/Loading';

// victory is heavy: its code is only downloaded when someone opens this page
const UserStatsGraphs = lazy(() => import('./UserStatsGraphs'));

const UserStats = () => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = STATS_GET();
    request(url, options);
  }, [request]);

  const loadingBox = (
    <div className='relative h-80'>
      <Loading />
    </div>
  );

  if (error) return <Error error={error} />;
  if (loading) return loadingBox;
  if (!data) return null;

  return (
    <Suspense fallback={loadingBox}>
      <UserStatsGraphs data={data} />
    </Suspense>
  );
};

export default UserStats;
