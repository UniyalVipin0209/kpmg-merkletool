import React from "react";
import { useState } from "react";
import ethereumIcon from "../../Assets/eth-india/merkel_tree_bitcoin_l.png";
import walletconnect from "../../Assets/eth-india/social.png";

import { message, Modal } from "antd";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { setWalletAddress } from "../../store/Admin/action";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const MetaLogin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const mystate = useSelector((state) => state.admin);

  const [wallet_collection, setCollection] = useState([
    {
      name: "Proceed",
      img: ethereumIcon,
      id: "etherum",
    },
  ]);

  useEffect(() => {
    console.log("State--- ", mystate);
  }, [mystate]);

  const connectWallet = async () => {
    history.push("/file-storage");
    // try {

    //   const { ethereum } = window;

    //   if (!ethereum) {
    //     message.error("Get MetaMask!", 3);
    //   }

    //   const accounts = await ethereum.request({
    //     method: "eth_requestAccounts",
    //   });
    //   console.log('Accounts details - ',accounts)

    //   dispatch(setWalletAddress(accounts[0]));

    //   if(mystate.wallet_address!= null && mystate.wallet_address!=undefined)
    //   swal('Wallet','Already Connected','info').then(()=>{
    //     history.push('/file-storage');});
    //   else
    //   swal('Wallet',
    //   'Connected Successfully', 'success').then(()=>{
    //     history.push('/file-storage');
    //   })
    // //   .success(`Connected ${accounts[0]}`);

    // //   handleOk();
    // //   setStatus(true);
    // //   showModal();
    //   //check if user is connected to rinkeby

    //   //   const rinkebyChainId = "0x4";
    // //   let chainId = await ethereum.request({ method: "eth_chainId" });

    // //   if (chainId !== rinkebyChainId) {
    // //     alert("You are not connected to the Rinkeby Test Network!");
    // //     return;
    // //   }

    // //   setCurrentAccount(accounts[0]);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="multi-wallet-space ">
      <div className="row " style={{ marginTop: "4rem" }}>
        {}
        {wallet_collection.map((val, i) => (
          <div key={"wallets" + i} className="col-md-12 mt-2 p-0">
            <div
              onClick={() => connectWallet()}
              style={{
                width: "100%",
                cursor: "pointer",
                height: "4rem",
                display: "flex",
                alignItems: "center",
                background: "rgba(255, 255, 255, 0.1019607843)",
              }}
            >
              <img
                style={{ width: "3rem", marginLeft: "1rem" }}
                src={val.img}
              />{" "}
              <span style={{ color: "#fff", marginLeft: "1.5rem" }}>
                {val.name}
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* <div className='row mt-4' style={{marginTop:'4rem'}}>
                    <div className='col-md-12'>
                        <btn className='btn bg-white'>Connect to wallet</btn>
                    </div>  
                </div> */}
    </div>
  );
};

export default MetaLogin;
