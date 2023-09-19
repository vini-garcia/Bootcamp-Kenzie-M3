interface IOffersCartProps {
  category: string;
  srcLogo: string;
  searchByCategory(category: string): Promise<void>;
}

export const UserDashboardComponent = ({
  category,
  srcLogo,
  searchByCategory,
}: IOffersCartProps) => {
  return (
    <button onClick={() => searchByCategory(category)}>
      <img src={srcLogo} alt={category} />
      <p>{category}</p>
    </button>
  );
};
