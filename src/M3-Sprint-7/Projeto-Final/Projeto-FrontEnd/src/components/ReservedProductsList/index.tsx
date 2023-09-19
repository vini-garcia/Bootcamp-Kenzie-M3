import { ReservedProtectedCard } from "./ReservedProductCard";
import { StyledReserveContainer } from "./style";

export const ReservedProductsList = () => {
  return (
    <>
      <StyledReserveContainer>
        <h3>Reservas</h3>
        <ReservedProtectedCard />
      </StyledReserveContainer>
    </>
  );
};
