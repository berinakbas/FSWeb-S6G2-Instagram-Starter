// MUÜ için bu dosyayı değiştirmenize gerek yok
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faHeart,
  faCircle,
  faCompass,
} from "@fortawesome/free-regular-svg-icons";
import "./AramaCubugu.css";

const AramaCubugu = (props) => {

  const { aramaKriteri, kriterDegisimi, aramaSonucu } = props;

  return (
    <div className="search-bar-wrapper">
      <div className="social">
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <form className="search-form"  onSubmit={aramaSonucu}>
        <input type="text" placeholder="Arama" value={aramaKriteri} onChange={e => kriterDegisimi(e.target.value)} />
        <input type="submit" value="Ara" />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <FontAwesomeIcon icon={faCompass} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
    </div>
  );
};

export default AramaCubugu;