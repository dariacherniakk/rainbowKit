import {ConnectButton} from "@rainbow-me/rainbowkit";
import {useAccount} from "wagmi";
import {useEffect} from "react";

export const ConnectWalletButton = () => {
    const {  address, isConnected } = useAccount();

    useEffect(()=>{
         // Trigger when is disconnected
         if (!isConnected) {
            window.onWalletDisconnect()
        }

        if(!address || !window?.onWalletConnected) return
        
        window.onWalletConnected(address)
        

    },[address, isConnected])

    return <ConnectButton chainStatus="none" showBalance={false}/>
}