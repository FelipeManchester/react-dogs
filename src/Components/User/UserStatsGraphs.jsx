import { VictoryBar, VictoryChart, VictoryPie } from 'victory';

const card = 'rounded-md bg-white p-4 shadow';

const UserStatsGraphs = ({ data }) => {
  const graph = data.map((item) => ({
    x: item.title,
    y: Number(item.acessos),
  }));
  const total = graph.reduce((sum, item) => sum + item.y, 0);

  if (data.length === 0)
    return <p className='mb-8'>Poste uma foto para ver as estatísticas.</p>;

  return (
    <section className='mb-8 grid animate-anime-left gap-8 md:grid-cols-2'>
      <div
        className={`${card} flex items-center text-2xl font-bold md:col-span-2`}
      >
        <p>Acessos: {total}</p>
      </div>
      <div className={card}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: { fillOpacity: 0.9, stroke: '#fff', strokeWidth: 2 },
            labels: { fontSize: 14, fill: '#333' },
          }}
        />
      </div>
      <div className={card}>
        <VictoryChart>
          <VictoryBar alignment='start' data={graph} />
        </VictoryChart>
      </div>
    </section>
  );
};

export default UserStatsGraphs;
