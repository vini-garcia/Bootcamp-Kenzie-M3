import { StyledCategoryOptionBySelect } from "./style";

interface IOptionProps {
  value: string;
  innerText: string;
}

export const UserDashboardOption = ({ value, innerText }: IOptionProps) => {
  return <StyledCategoryOptionBySelect value={value}>{innerText}</StyledCategoryOptionBySelect>;
};
