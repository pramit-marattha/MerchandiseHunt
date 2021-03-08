import React from "react";
import { IonPage, IonContent, IonIcon } from "@ionic/react";
import SmallHeader from "../components/Header/SmallHeader";
import LargeHeader from "../components/Header/LargeHeader";
import ProductList from "../components/Product/ProductList";
import { personCircleOutline, mailOutline } from "ionicons/icons";

const Home = (props) => {
  return (
    <IonPage>
      <SmallHeader title="🛍️ Merchandise Hunt" />
      <IonContent color="medium" fullscreen>
        <LargeHeader title="ProductHunt" />
        <br></br>
        <ProductList location={props.location}></ProductList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
