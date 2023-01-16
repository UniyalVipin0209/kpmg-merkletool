import React, { useState } from "react";
import { useEffect } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  getGenrateMerkelTree,
  getHash,
  getProof,
  getRootData,
  verifyProof,
} from "../../store/Admin/action";
import sha256 from "crypto-js/sha256";
// import crypto from "crypto";
import swal from "sweetalert";
import { BiArrowBack } from "react-icons/bi";
import { Collapse, Divider, Tooltip } from "antd";
import { notification } from "antd";

import { Button as AntButton, message, Upload } from "antd";

import "antd/dist/antd.css";

//Menu Control
import { Menu } from "antd";
import {
  AppstoreOutlined,
  CheckCircleOutlined,
  SettingOutlined,
  CopyOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { GrDocumentCsv } from "react-icons/gr";
import { BiCopy, BiSkipNextCircle, BiRefresh } from "react-icons/bi";
import { CopyToClipboard } from "react-copy-to-clipboard";

// import { useSelector } from 'react-redux';
const { Panel } = Collapse;

const openNotification = (_notificationTitle, _desc, msg, _type, placement) => {
  notification.open({
    message: _notificationTitle,
    description: _desc,
    type: _type,
    onClick: () => {
      console.log(msg);
    },
    placement,
  });
};

const MetaFileUpload = () => {
  const dispatch = useDispatch();
  const [myBalance, setBalance] = useState(0);
  const [myUserId, setUSerId] = useState("");

  const [generatedMerkelTree, setMerkelTree] = useState("");
  const [myLeafHash, setLeafHash] = useState("");
  const myState = useSelector((state) => state.admin);
  const [getProofArry, setProofArry] = useState([]);
  const [myRoot, setRoot] = useState("");

  const [btnProofGenerated, setbtnProofGenerated] = useState(false);
  const [multiPopUps, setMultiPops] = useState(true);

  const [stages, setStages] = useState("STAGE1");

  const [myfile, setFile] = useState("");
  const [fileuploaded, setFileUploaded] = useState(false);

  // const [copyValue1, setCopyValue1] = useState("");
  // const [copyValue2, setCopyValue2] = useState("");
  // const [copy, setCopy] = useState(false);

  const [textAreaProof, setTextAreaProof] = useState([]);

  const ValidateFileUpload = (event) => {
    var fileInput = document.getElementById("uploadCsv");

    var filePath = fileInput.value;

    // Allowing file type
    var allowedExtensions = /(\.csv|\.xls)$/i;

    if (!allowedExtensions.exec(filePath)) {
      openNotification(
        "Invalid File",
        "Invalid file type. Please provide CSV or excel file format!!",
        "",
        "error",
        "top"
      );
      fileInput.value = "";
      setFileUploaded(false);
      return false;
    } else {
      // Image preview
      if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          openNotification(
            "File Uploaded Successfully!!",
            `${filePath}.`,
            "",
            "success",
            "topRight"
          );
        };

        reader.readAsDataURL(fileInput.files[0]);
        setFile(event.target.files[0]);
        setFileUploaded(true);
        return true;
      }
    }
  };

  const handleChangeFileUpload = (event) => {
    ValidateFileUpload(event);
  };

  const handleGetMerkleTree = () => {
    dispatch(getGenrateMerkelTree(myfile));
  };

  const handleEncryption = () => {
    if (!checkUserIdEmpty()) {
      openNotification(
        "User Id",
        "Empty value for userId.!!",
        "",
        "error",
        "top"
      );
    }
    dispatch(getHash(myUserId, myBalance));
  };

  useEffect(() => console.log(myfile), [myfile]);

  useEffect(() => {
    console.log("LeafHAsh-- ", myState);
    if (myState.get_merkle_tree !== undefined) {
      if (myState.get_merkle_tree.status === 200) {
        if (multiPopUps) {
          swal("Merkel Tree", "Generated", "success").then(() => {
            // setStages("STAGE2");
            //setBtnAftGen(true);
          });
        }

        setMerkelTree(myState.get_merkle_tree.data);
      } else {
        //swal("Merkel Tree", "Something Went WrongB!", "info");
      }
    } else {
      swal("Merkel Tree", "Something Went Wrong!", "info");
    }
    if (myState !== myLeafHash) {
      setLeafHash(myState.get_hash.data);
    }
    if (getProofArry !== myState.get_proof) {
      console.log("proof -- ", myState?.get_proof);
      setProofArry(myState.get_proof);
    }
    if (myState.get_root !== myRoot) {
      setRoot(myState.get_root);
    }
    // if(myState.verify_proof!=verifyProofData){
    //     if(myState.verify_proof=="Proof validation unsuccessfully !! Try Again"){
    //         setVerifyData(myState.verify_proof)
    //         swal('Proof',"Proof validation unsuccessfully !! Try Again",'error');
    //     }else{
    //         setVerifyData(myState.verify_proof)
    //         swal('Proof',myState.verify_proof,'success');
    //     }
    // }
  }, [myState]);

  // useEffect(() => {
  //   console.log("Copying to TextAreaProof..", copyValue2);
  //   setTextAreaProof(copyValue2);
  //   console.log("Copyied  TextAreaProof..", textAreaProof);
  //   //setTextAreaProof(JSON.parse(copyValue2));
  // }, [copyValue2]);

  const fetchRoot = () => {
    dispatch(getRootData());
  };

  const handleGetProof = () => {
    // console.log("handlegetProof :", stages, getProofArry);
    // console.log("handlegetProof :", getProofArry);
    dispatch(getProof(myLeafHash));
  };

  const checkUserIdEmpty = () => {
    var elementValue = document.getElementById("userId").value;
    if (elementValue !== undefined && elementValue?.length === 0) {
      return false;
    }
    return true;
  };
  const handleChangeUserId = (e) => {
    var elementValue = document.getElementById("userId").value;
    if (elementValue !== undefined && elementValue?.length === 0) {
      openNotification(
        "User Id",
        "UserId is invalid. It cant be empty.!!",
        "",
        "error",
        "top"
      );
      setUSerId("");
    } else {
      setUSerId(e.target.value);
    }
  };

  // const handleTextAreaProof = (e) => {
  //   // console.log("handletextArea ::", e.target.value);
  //   // console.log("textAreaProof b4::", textAreaProof);
  //   setTextAreaProof(e.target.value);
  //   // console.log("textAreaProof A4::", textAreaProof);
  // };
  const verifyProofofReserve = () => {
    console.log("VerifyPoR::", getProofArry);
    dispatch(verifyProof(getProofArry, myRoot, myLeafHash));
  };

  const menuitems = [
    {
      label: "Upload CSV",
      key: "uploadcsv1",
      icon: <GrDocumentCsv color="white" />,
      onClick: (e) => {
        setMultiPops(true);
        setStages("STAGE1");
      },
    },
    {
      label: "Leaf Hash",
      key: "leafhash",
      icon: <AppstoreOutlined color="white" />,

      onClick: () => {
        // setUserInputs(true);
        setUSerId("");
        setBalance(0);
        setMultiPops(false);
        setLeafHash();
        setProofArry([]);
        setStages("STAGE2");
      },
    },

    {
      label: "Verify Proof",
      key: "Verifyproof",
      icon: <CheckCircleOutlined color="white" />,
      disabled: stages === "STAGE4" ? false : true,
      onClick: () => {
        fetchRoot();
        setStages("STAGE4");
      },
    },
  ];

  return (
    <>
      <div className="row">
        <div className="gn-ly-header-middle">
          <Menu mode="horizontal" theme="light" items={menuitems} />
        </div>
      </div>
      <div className="meta-body-layout">
        {stages === "STAGE1" && (
          <div className="file-upload-section2">
            <div className="upload-section">
              <div className="upload-section-csv">Select Transaction CSV</div>

              <label
                htmlFor="uploadCsv"
                className="btn mt-2 text-white d-flex file-box"
              >
                <span className="ml-5">Upload </span>&nbsp;&nbsp;&nbsp;
                <AiOutlineUpload size={19} stroke={12}></AiOutlineUpload>
                <input
                  type="file"
                  accept="csv/*"
                  id="uploadCsv"
                  name="file"
                  multiple
                  style={{ display: "none" }}
                  onChange={handleChangeFileUpload}
                ></input>
              </label>
            </div>
            <div className="seperation-bar"></div>
            <div className="generate-merkle-tree">
              {" "}
              <div className="generate-merkle-tree-header">Merkle Tree</div>
              <div className="buttongroups">
                {fileuploaded && (
                  <button
                    className="btn bg-white"
                    style={{ marginLeft: "7px", marginTop: "4px" }}
                    onClick={() => {
                      handleGetMerkleTree();
                      // setStages("STAGE2")
                    }}
                  >
                    Generate
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {stages === "STAGE1" && generatedMerkelTree !== undefined && (
          <>
            {myRoot && (
              <>
                <div className="divRootHash">
                  <div className="row mt-1">
                    <div className="col-md-4 p-2 ">
                      <label className="text-white marginleft">Root Hash</label>
                    </div>
                    <div className="col-md-8 p-2 ">
                      <input
                        type="lab"
                        className="input-group textbox"
                        value={myRoot}
                        onChange={(e) => setRoot(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="row mt-2">
              <div className="col-md-5 p-2 "></div>
              <div className="col-md-6 p-2 ">
                <button
                  className="btn btn-success marginleft"
                  onClick={() => {
                    fetchRoot();
                    // setStages("STAGE2")
                  }}
                >
                  Fetch Root Hash
                </button>
              </div>
            </div>

            <Divider dashed />

            <Collapse
              bordered={false}
              defaultActiveKey={["1"]}
              className="collapse-panel"
              accordion
            >
              {Object.keys(generatedMerkelTree).map(
                (key, idx) =>
                  generatedMerkelTree[key] !== undefined && (
                    <Panel header={`Level ${idx + 1}`} key={idx + 1}>
                      <div className="panelOuter">
                        {generatedMerkelTree[key].map((value) => (
                          <p key={value}>{value}</p>
                        ))}
                      </div>
                    </Panel>
                  )
              )}
            </Collapse>
          </>
        )}

        {stages === "STAGE2" && (
          <div className="file-upload-section">
            <div className="stage2-style">
              <div className="prevPageLink" onClick={() => setStages("STAGE1")}>
                <BiArrowBack size={19}></BiArrowBack>
              </div>

              <div className="row mt-1">
                <div className="col-md-2 p-2 ">
                  <label className="text-white marginleft">User ID</label>
                </div>
                <div className="col-md-9 p-2 ">
                  <input
                    type="text"
                    defaultValue={myUserId}
                    onChange={(e) => {
                      handleChangeUserId(e);
                    }}
                    className="input-group textbox"
                    id="userId"
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-2 p-2 ">
                  <label className="text-white marginleft">Balance</label>
                </div>
                <div className="col-md-9 p-2 ">
                  <input
                    type="text"
                    value={myBalance}
                    className="input-group textbox"
                    onChange={(e) => setBalance(e.target.value)}
                    id="accBalance"
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-5 p-2"></div>
                <div className="col-md-6 p-2 ">
                  <button
                    className="btn btn-success marginleft"
                    onClick={() => {
                      handleEncryption();
                    }}
                  >
                    Generate Leaf Hash
                  </button>
                </div>
              </div>

              {myLeafHash !== undefined && (
                <>
                  <div className="row mt-2">
                    <div className="col-md-2 p-2 ">
                      <label className="text-white marginleft">Leaf Hash</label>
                    </div>
                    <div className="col-md-8 p-2 ">
                      <input
                        type="text"
                        className="input-group textbox"
                        value={myLeafHash}
                        id="leafHash"
                      />
                    </div>
                    <div className="col-md-2 p-1">
                      <button
                        onClick={() => {
                          setbtnProofGenerated(true);
                          handleGetProof();
                          fetchRoot();
                          setStages("STAGE4");
                        }}
                        className="btn btn-info marginleft"
                        size={6}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {stages === "STAGE4" && (
          <div className="file-upload-section">
            <div className="stage2-style">
              <div className="prevPageLink" onClick={() => setStages("STAGE2")}>
                <BiArrowBack size={19}></BiArrowBack>
              </div>

              <div className="row mt-2">
                <div className="col-md-2 p-2 ">
                  <label className="text-white marginleft">Root</label>
                </div>
                <div className="col-md-9 p-2 ">
                  <input
                    type="text"
                    className="input-group textbox"
                    value={myRoot}
                    onChange={(e) => setRoot(e.target.value)}
                  />
                </div>
              </div>
              {myLeafHash !== undefined && (
                <>
                  <div className="row mt-2">
                    <div className="col-md-2 p-2 ">
                      <label className="text-white marginleft">Leaf Hash</label>
                    </div>
                    <div className="col-md-9 p-2 ">
                      <input
                        type="text"
                        className="input-group textbox"
                        value={myLeafHash}
                      />
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col-md-5 p-2"></div>
                    <div className="col-md-6 p-2 ">
                      <button
                        className="btn btn-success marginleft"
                        onClick={() => {
                          verifyProofofReserve();
                        }}
                      >
                        Verify Proof
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MetaFileUpload;
