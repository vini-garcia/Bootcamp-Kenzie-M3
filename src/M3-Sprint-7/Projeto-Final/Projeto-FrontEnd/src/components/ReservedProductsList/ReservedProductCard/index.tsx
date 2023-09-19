import { StyledReserveCard } from "./style";
import bag from "../../../assets/icons/bag.svg";
import check from "../../../assets/icons/check.svg";

export const ReservedProtectedCard = () => {
  return (
    <StyledReserveCard>
      <div>
        <img src={bag} alt="bag-icon"></img>
      </div>
      <div>
        <div>
          <p>Sacola Surpresa</p>
          <img src={check} alt="check-icon"></img>
        </div>
        <span>
          <p>João</p>
          <small>R$ 25,59</small>
        </span>
      </div>
    </StyledReserveCard>
  );
};
