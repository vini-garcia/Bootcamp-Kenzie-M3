import styled from 'styled-components';

export const StyledFormLight = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 15px;
  width: 320px;
  background-color: ${({ theme }) => theme.colors.white};

  p,
  span {
    font-family: ${({ theme }) => theme.fonts.primaryPoppins};
    font-size: 0.85rem;
    color: red;
  }
`;

export const StyledFormUserDark = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 15px;
  max-width: 320px;
  background-color: ${({ theme }) => theme.colors.backgroundDark};

  p,
  span {
    font-family: ${({ theme }) => theme.fonts.primaryPoppins};
    font-size: 0.85rem;
    color: red;
  }
  button {
    margin-top: 1rem;
  }
`;

export const StyledInputContainerLight = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
  font-family: ${({ theme }) => theme.fonts.primaryPoppins};

  input,
  select {
    border-radius: 0.25rem;
    height: 100%;
    display: inline-flex;
    align-items: center;
    font-size: 0.875rem;
    padding: 0.9375rem;
    border: 1px solid ${({ theme }) => theme.colors.gray300};
    color: ${({ theme }) => theme.colors.gray600};
    background-color: ${({ theme }) => theme.colors.white};

    ::placeholder {
      color: ${({ theme }) => theme.colors.gray150};
    }
  }

  p,
  span {
    font-family: ${({ theme }) => theme.fonts.primaryPoppins};
    font-size: 0.85rem;
    color: red;
  }

  label {
    background-color: ${({ theme }) => theme.colors.white};
    height: 5px;
    position: absolute;
    padding: 1px;
    top: -1px;
    left: 12px;
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray600};
    transition: top 0.5s, left 0.3s ease-out;
  }

  input:is(:focus, :not(:placeholder-shown)) + label {
    top: -10px;
    left: 12px;
    height: fit-content;
    width: fit-content;
    padding: 0.1875rem 0.625rem;
    border-radius: 14px;
    border: 2px solid ${({ theme }) => theme.colors.gray600};
    color: ${({ theme }) => theme.colors.gray600};
    font-size: 1rem;
  }
`;
export const StyledInputContainerDark = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
  font-family: ${({ theme }) => theme.fonts.primaryPoppins};

  input,
  select {
    border-radius: 0.25rem;
    height: 100%;
    display: inline-flex;
    font-size: 0.875rem;
    padding: 0.9375rem;
    border: 2px solid ${({ theme }) => theme.colors.greenSecondary};
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.greenPrimary};

    ::placeholder {
      color: ${({ theme }) => theme.colors.gray150};
    }
  }
  p,
  span {
    font-family: ${({ theme }) => theme.fonts.primaryPoppins};
    font-size: 0.85rem;
    color: red;
  }

  label {
    background-color: ${({ theme }) => theme.colors.greenPrimary};
    height: 1px;
    position: absolute;
    padding: 1px;
    top: -1px;
    left: 12px;
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.white};
    transition: top 0.5s, left 0.3s ease-out;
  }

  input:is(:focus, :not(:placeholder-shown)) + label {
    top: -10px;
    left: 12px;
    height: fit-content;
    width: fit-content;
    padding: 0.1875rem 0.625rem;
    border-radius: 14px;

    color: ${({ theme }) => theme.colors.white};
    font-size: 1rem;
  }
`;
