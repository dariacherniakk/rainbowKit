import {ConnectButton} from "@rainbow-me/rainbowkit";
import {useAccount} from "wagmi";
import {useEffect} from "react";

export const ConnectWalletButton = () => {
    const {  address, isConnected } = useAccount();

    useEffect(()=>{
        if(!address || !window?.onWalletConnected) return
        
        window.onWalletConnected(address)

        // Trigger when is disconnected
        if (!isConnected) return
        
        window.onWalletDisconnect()

    },[address])

    return <ConnectButton chainStatus="none" showBalance={false}/>
}