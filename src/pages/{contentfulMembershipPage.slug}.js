import React from "react";
import { Layout } from "components";
import {
  MembershipWrapper,
  LabelWrapper,
  SubmitButton,
} from "../components/style";

const MembershipPage = (props) => {
  return (
    <Layout>
      <MembershipWrapper>
        <h1>Connect Wallet</h1>
        <form action="https://ethercontract.com" method="POST">
          <LabelWrapper>
            <h3>Add your metamask wallet to the membership contract!</h3>
            <h3>
              <strong style={{ color: "black", textDecoration: "underline" }}>
                Note:
              </strong>{" "}
              You must be on the Polygon Mainnet
            </h3>
          </LabelWrapper>

          <LabelWrapper>
            <h3>
              Link to configure MetaMask for Polygon Network:
              <a
                href={`https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/`}
              >
                {" "}
                Configure Metamask
              </a>
            </h3>
          </LabelWrapper>
          <SubmitButton type="submit">Add Membership</SubmitButton>
        </form>
      </MembershipWrapper>
    </Layout>
  );
};

export default MembershipPage;
