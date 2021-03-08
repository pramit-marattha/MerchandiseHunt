import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import SmallHeader from "../components/Header/SmallHeader";
import LargeHeader from "../components/Header/LargeHeader";
import ProductList from "../components/Product/ProductList";

const Home = (props) => {
  return (
    <IonPage>
      <SmallHeader title="Product Hunt" />
      <IonContent color="medium" fullscreen>
        <LargeHeader title="ProductHunt" />
        <br></br>
        <ProductList location={props.location}></ProductList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
