import { useEffect, useState } from "react";
import { setter } from "../../function/function";
import Service from "../../services";

function PostComFame(props) {
  const [TextCom, setTextCom] = useState("");

  let reste = 60 - TextCom.length;

  async function btnPostCom() {
    let body = { _id: props.idPersonnage, message: TextCom };
    console.log(body, "depart");
    let postCom = await Service.postComFame(body);
    console.log(postCom, "arrivé");
    setTextCom("");
    props.setMAJ(props.MAJ + 1)
  }

  return (
    <div className="PostComFame">
      <p className="TextCom">Votre Commentaire si vous savez ecrire</p>
      <p className="TextCom">{reste}</p>
      <input type="text" onChange={(e) => setter(setTextCom, e)} value={TextCom}></input>
      <p className="PostBTN" onClick={btnPostCom}>
        Poster
      </p>
    </div>
  );
}

export default PostComFame;
