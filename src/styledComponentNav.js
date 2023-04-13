const Nav = styled.div`
  width: 100%;
  height: 70px;
  background: linear-gradient(170deg, #1bc059, #0d47a1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const Title = styled.div`
  font-size: 50px;
  color: #fff;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  margin-left: 20;
  &:hover {
    color: #0f0f;
  }
`;

const Container = styled.div`
  position: relative;
  cursor: pointer;
`;
const Icon = styled.img`
  height: 48px;
  margin-right: 20px;
`;
const Cart = styled.div`
  background: ${(props) => props.color};
  border-radius: 50%;
  padding: 4px 8px;
  position: absolute;
  right: 10px;
  top: -5px;
  font-size: 12px;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;
