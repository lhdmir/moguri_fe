import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMoguri } from "../../features/moguri/moguriSlice";
import "./FirstLogin.css";

import moguri1 from "assets/image/moguri_1-1.png";
import moguri3 from "assets/image/moguri_2-1.png";
import moguri5 from "assets/image/moguri_3-1.png";
import moguri7 from "assets/image/moguri_4-1.png";
import moguri9 from "assets/image/moguri_5-1.png";
import moguri11 from "assets/image/moguri_6-1.png";

const moguriImages = [moguri1, moguri3, moguri5, moguri7, moguri9, moguri11];

const FirstLogin = () => {
  const [selectedMoguri, setSelectedMoguri] = useState(null);
  const [step, setStep] = useState(1);
  const [moguriName, setMoguriName] = useState("");
  const [targetWeight, setTargetWeight] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * moguriImages.length);
    setSelectedMoguri(moguriImages[randomIndex]);
  }, []);

  const handleNextClick = () => {
    if (moguriName.trim() === "") {
      alert("모구리 이름을 입력해주세요!");
    } else {
      console.log(`모구리 이름: ${moguriName}`);
      setStep(2);
    }
  };

  const handleCompleteClick = () => {
    if (targetWeight.trim() === "") {
      alert("목표 몸무게를 입력해주세요!");
    } else {
      console.log(`모구리 이름: ${moguriName}`);
      console.log(`목표 몸무게: ${targetWeight}`);
      dispatch(
        setMoguri({
          id: 1,
          image: selectedMoguri,
          name: moguriName,
          target_weight: parseFloat(targetWeight),
          current_items: {
            accessory: {
              id: 0,
              name: "",
              image_url: "",
            },
            background: {
              id: 201,
              name: "Beach Background",
              image_url: "assets/image/background2.png",
            },
          },
          owned_items: {
            accessories: [],
            backgrounds: [],
          },
        })
      );
      navigate("/home");
    }
  };

  return (
    <div className="first-login-container">
      {step === 1 && (
        <div className="login-box">
          {selectedMoguri && (
            <img src={selectedMoguri} alt="Moguri" className="moguri-image" />
          )}
          <p className="p-FirstLogin">모구리의 이름을 정해주세요!</p>
          <div className="moguri-name">
            <label className="label-first">모구리 이름:</label>
            <input
              type="text"
              placeholder="MOGURI"
              value={moguriName}
              onChange={(e) => setMoguriName(e.target.value)}
              className="input-moguri-name"
            />
          </div>
          <button className="button-first" onClick={handleNextClick}>
            다음
          </button>
        </div>
      )}
      {step === 2 && (
        <div className="login-box">
          <img src={selectedMoguri} alt="Moguri" className="moguri-image" />
          <p className="p-FirstLogin">모구리의 목표 몸무게를 입력해주세요!</p>
          <div className="moguri-weight">
            <label className="label-first">목표 몸무게:</label>
            <input
              type="text"
              placeholder="목표 몸무게"
              value={targetWeight}
              onChange={(e) => setTargetWeight(e.target.value)}
              className="input-moguri-name"
            />
          </div>
          <div className="moguri-weight">
            <button className="button-weight" onClick={handleCompleteClick}>
              완료
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FirstLogin;
