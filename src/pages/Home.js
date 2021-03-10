import React from "react";
import { IonPage, IonContent, IonIcon } from "@ionic/react";
import SmallHeader from "../components/Header/SmallHeader";
import LargeHeader from "../components/Header/LargeHeader";
import ProductList from "../components/Product/ProductList";
import { personCircleOutline, mailOutline } from "ionicons/icons";

const Home = (props) => {
  return (
    <>
      <IonPage style={{ backgroundColor: "#92949c" }}>
        <SmallHeader title="🛍️ Merchandise Hunt"></SmallHeader>
        <IonContent fullscreen>
          <img
            src="assets/MerchanDiseHunt.png"
            style={{
              width: "15%",
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          />

          <LargeHeader title="ProductHunt" />
          <br></br>
          <ProductList location={props.location}></ProductList>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
