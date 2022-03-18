import React from "react";
import moment from "moment";
import styled from "styled-components";

import type { CurrentUser } from "common/types";

import Centered from "../Centered";
import Relative from "../Relative";

import badges from "../../patron-info";

import Range from "./Range";

import Title from "../Title";

const Container = styled.div`padding: 1rem 0;`;

const Input = styled.input`
  transition: 0.3s ease border-color;
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  outline: none;
  border-radius: 4px;
  color: white;
  padding: 0.25em;
  width: inherit;
  box-sizing: border-box;

  border: 1px solid
    ${props => (props.error ? "red" : "rgba(0, 0, 0, 0.1)")};

  &:focus {
    border-color: #6CAEDD;
  }
`;

const PriceInput = styled(Input)`
  font-size: 1.5rem;
  padding-left: 2rem;
  padding-right: 1rem;
  width: 7rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const Month = styled.span`
  position: absolute;
  margin-left: 0.5rem;
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 1);
  left: 100%;
  font-weight: 300;
  bottom: 1.75rem;
`;

const Currency = styled.span`
  position: absolute;
  left: 0.75rem;
  top: 0;
  bottom: 0;
  margin: auto;
  font-size: 1.5rem;
  font-weight: 300;
  padding-top: 8px;
  color: rgba(255, 255, 255, 0.5);
`;

const Notice = styled.p`
  font-size: .875rem;
  text-align: center;
  margin: 2rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
`;

const RealWebsiteLink = styled.a`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 4rem;
`;

const RangeContainer = styled.div`width: 300px;`;

type Props = {
  price: number,
  setPrice: (price: number) => void,
  badge: string,
  loggedIn: boolean
};

export default class PricingChoice extends React.PureComponent {
  props: Props;

  handleEventChange = e => {
    this.props.setPrice(+e.target.value);
  };

  handleRangeChange = value => {
    this.props.setPrice(value);
  };

  render() {
    const { price, badge } = this.props;

    return (
      <Container>
        <Centered horizontal vertical={false}>
          <Title>Pay what you want</Title>
          <Relative>
            <Currency>$</Currency>
            <PriceInput
              onChange={this.handleEventChange}
              value={price}
              type="number"
            />
            <Month>/month</Month>
          </Relative>
          <RangeContainer>
            <Range
              onChange={this.handleRangeChange}
              min={5}
              max={50}
              step={1}
              value={price}
              color={badges[badge].colors[0]}
            />
          </RangeContainer>

          <RealWebsiteLink
            href="https://codesandbox.io/patron"
            target="_blank"
            rel="noreferrer noopener"
          >
            Go to the real page to support CodeSandbox (or click on the badge in
            the header)
          </RealWebsiteLink>
        </Centered>
      </Container>
    );
  }
}
