import { Container } from "../styles/style";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { dbService } from "fbase";

const Write = ({ userObj }) => {
  // const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const [cardObj, setCardObj] = useState({
    name: userObj.displayName,
    job: "",
    phone: "",
    mail: "",
    desc: "",
  });

  useEffect(() => {
    dbService.collection("card").doc(userObj.uid).get()
      .then((doc) => {
        console.log(doc)
        // setCardObj(doc.data().desc === "" ? "" : doc.data().desc)
      });

  }, []);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setCardObj(value);
  };

  return (
    <Container>
      <div style={{
        marginTop: "95px",
        height: "29px",
        fontSize: "22px",
        fontWeight: "bold",
        fontFamily: "YeonSung"

      }}>명함에 들어갈 정보를 입력해 주세요.</div>
      <InputWrap>
        {/* 이미지 넣는 부분 */}
        <Input value={cardObj.name} onChange={onChange} />
        <Input value={cardObj.job} onChange={onChange} placeholder="직책" required />
        <Input value={cardObj.phone} onChange={onChange} placeholder="연락처" type="tel" pattern="010-[0-9]{4}-[0-9]{4}" required />
        <Input value={cardObj.email} onChange={onChange} placeholder="이메일" type="email" required />
        <TextArea value={cardObj.desc} onChange={onChange} placeholder="간단한 인사말" />
      </InputWrap>
      <button>명함 만들기</button>
    </Container>
  );
};

export default Write;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom:25px;
`

const Input = styled.input`
  width: 230px;
  height: 25px;
  background-color: #FCF4E9;
  color:  #000000;
  margin-bottom: 10px;

  border-color: transparent;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #BAB8B5;
  padding-left: 10px;
  text-align: center;
  font-family: "YeonSung";

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;

  ::placeholder {
    color: #BAB8B5;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 33px;
    text-align: center; 
  }

  :focus {
      outline: none;
  }
`

const TextArea = styled.textarea`
  width: 230px;
  min-height: 93px;
  background-color: #FCF4E9;
  color:  #000000;

  border-color: transparent;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #BAB8B5;
  padding-left: 10px;
  text-align: center;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  font-family: "YeonSung";
  resize: none;
  white-space: pre-wrap;
  ::placeholder {
    color: #BAB8B5;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 33px;
    text-align: center; 
  }

  :focus {
      outline: none;
  }
`