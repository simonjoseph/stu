import React from "react";
import styled from "styled-components";

import Badge from "./Badge";
import PricingInfo from "./PricingInfo";
import PricingChoice from "./PricingChoice";

const Container = styled.div`
  margin: auto;
  margin-top: 20%;
  width: 940px;
  padding: 1rem;
  background-color: #24282A;

  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 6rem;

  > div {
    flex: 1;
  }
`;

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    const price = this.getPrice(props);

    this.state = {
      price
    };
  }

  getPrice = props => 10;

  componentWillReceiveProps(nextProps) {
    const currentPrice = this.getPrice(this.props);
    const nextPrice = this.getPrice(nextProps);

    if (nextPrice && currentPrice !== nextPrice) {
      this.setState({ price: nextPrice });
    }
  }

  setPrice = (price: number) => {
    this.setState({ price });
  };

  getPatronTier = () => {
    const { price } = this.state;

    if (price >= 35) return 4;
    if (price >= 25) return 3;
    if (price >= 15) return 2;
    return 1;
  };

  render() {
    const { price } = this.state;
    const tier = this.getPatronTier();
    const badge = `patron-${tier}`;
    const subscribed = false;

    return (
      <Container>
        <Badge subscribed={subscribed} badge={badge} />
        <Details>
          <PricingInfo />
          <PricingChoice badge={badge} price={price} setPrice={this.setPrice} />
        </Details>
      </Container>
    );
  }
}
