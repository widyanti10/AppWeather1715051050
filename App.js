import React from 'react';
import VolumeBalok from "./src/components/VolumeBalok";
import HelloWorld from "./src/components/HelloWorld";
import BelajarLayout from "./src/01Layout/BelajarLayout";
import LayoutLatihan from "./src/01Layout/LayoutLatihan";
import DaftarMahasiswa from "./src/02Komponen/DaftarMahasiswa";
import Menu from "./src/02Komponen/AppKasir/Menu";
import TugasSiak from "./src/02Komponen/TugasSiak";
import Cuaca1 from "./src/04API/Cuaca1";
import Cuaca2 from "./src/04API/Cuaca2";

export default class App  extends React.Component {
  render() {
    return(
      <Cuaca1 />
    );
    }
  }
