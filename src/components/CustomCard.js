import React from "react";
import { Container } from "@mui/system";
import { styled } from "@mui/material/styles";
import { Button, Card } from "@mui/material";

const customCard = styled(Card)({
  width: 600,
  backgroundColor: " rgb(219 127 127)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  padding: "15px 30px",
  boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
});

const customButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
});

const CustomCard = ({ title, children }) => {
  return (
    <div>
      <Container>
        <Card
          style={{
            maxWidth: "600",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            boxShadow: "2px 5px 10px 10px #f6f6",
          }}
        >
          <h2 className="text-center">{title}</h2>
          <div>{children}</div>
          <customButton variant="contained">hii custom</customButton>
        </Card>
      </Container>
    </div>
  );
};
export default CustomCard;
