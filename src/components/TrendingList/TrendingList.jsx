

export const TrendingList = ({ trending }) => {
  return (
    <div>
      <ul>
        {trending?.map(({ id, title }) => {
          return (
            <li key={id}>
              <p>{title}</p>
            </li>
          );
        })}
    </ul>
    </div>
  );
}