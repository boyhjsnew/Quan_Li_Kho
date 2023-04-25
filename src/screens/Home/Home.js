import React, { useEffect } from "react";
import { View } from "react-native";
import Header from "../../components/Header";
import color from "../Home/../../assets/colors/COLORS";
import ContentHeader from "../../components/ContentHeader";
import { useNavigation } from "@react-navigation/native";
import Dashboard from "../../components/Dashboard";
import Reports_Expenses from "../../components/Reports_Expenses";
import Toolbar from "../../components/Toolbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchWarehouse } from "../../redux/actions/getStore";
import { fetchSuppliers } from "../../redux/actions/actionSuppliers/getSuppliers";
import { fetchCustomers } from "../../redux/actions/actionCustomers/getCustomers";
import { fetchProducts } from "../../redux/actions/actionProducts/getProducts";
import insertProducts from "../../redux/actions/actionProducts/insertProducts";
import { fetchDocuments } from "../../redux/actions/actionDocuments.js/getDocuments";
import getTotalQuantity from "../../redux/actions/actionProducts/getQuantity";

export default function Home() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const iconOneClick = () => alert("iconOneClick");
  useEffect(() => {
    fetchSuppliers(dispatch);
  }, [dispatch]);
  useEffect(() => {
    fetchWarehouse(dispatch);
  }, [dispatch]);
  useEffect(() => {
    fetchCustomers(dispatch);
  }, [dispatch]);
  useEffect(() => {
    fetchProducts(dispatch);
  }, [dispatch]);
  useEffect(() => {
    fetchDocuments(dispatch);
  }, [dispatch]);
  const documents = useSelector((state) => state.documentsReducer.items);

  return (
    <View>
      <View>
        <Toolbar
          title="Quản Lý Kho"
          iconOne="menu"
          iconOneClick={iconOneClick}
          iconTwo="file-text"
          iconThree="info-circle"
        />
        <ContentHeader navigation={navigation} documents={documents} />
      </View>
      <View style={{ paddingHorizontal: 14 }}>
        <Dashboard navigation={navigation} />
      </View>

      <View style={{ paddingHorizontal: 14 }}>
        <Reports_Expenses navigation={navigation} />
      </View>
    </View>
  );
}
