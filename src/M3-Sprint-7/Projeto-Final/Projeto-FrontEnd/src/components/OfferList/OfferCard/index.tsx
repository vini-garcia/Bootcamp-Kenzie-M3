import { useContext, useState } from "react";
import { CommerceContext, IProduct } from "../../../providers/CommerceProvider";
import { EditOfferModal } from "../../Form/EditOfferModal";
import { StyledOfferCard } from "./style";
import bag from "../../../assets/icons/bag.svg";
import edit from "../../../assets/icons/edit.svg";
import trash from "../../../assets/icons/trash.svg";

export interface IOfferProductCard {
  offer: IProduct;
}

export const OfferCard = ({ offer }: IOfferProductCard) => {
  const newPrice = offer.originalPrice - (offer.discount / 100) * offer.originalPrice;

  const { removeOfferFromOfferList } = useContext(CommerceContext);

  const [isEditOfferModalOpen, setIsEditOfferModalOpen] = useState(false);

  return (
    <StyledOfferCard>
      <div>
        <img src={bag} alt=""></img>
        <section>
          <div>
            <span>
              <h4>
                {offer.title}
                <strong> - </strong>
                {offer.quantity}
              </h4>
              <p>
                <strong>R$ </strong>
                {newPrice.toLocaleString("pt-br", { minimumFractionDigits: 2 })}
              </p>
            </span>
          </div>
          <div>
            <p>
              R$
              {offer.originalPrice.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
              })}
            </p>
            <div>
              <button onClick={() => setIsEditOfferModalOpen(true)}>
                <img src={edit} alt="pen-icon" />
              </button>
              {isEditOfferModalOpen ? (
                <EditOfferModal offer={offer} setIsEditOfferModalOpen={setIsEditOfferModalOpen} />
              ) : null}

              <button onClick={() => removeOfferFromOfferList(offer.id)}>
                <img src={trash} alt="trash-icon" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </StyledOfferCard>
  );
};
