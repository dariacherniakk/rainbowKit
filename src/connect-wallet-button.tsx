import {ConnectButton} from "@rainbow-me/rainbowkit";
import {useAccount} from "wagmi";
import {useEffect, useState} from "react";

export const ConnectWalletButton = () => {
    const [connectStatus, setConnectStatus] = useState<'connected' | 'disconnected'>()
    const {address, status} = useAccount();

    useEffect(() => {
        if (!address || !window?.onWalletConnected) return

        window.onWalletConnected(address)
    }, [address])

    useEffect(() => {
        if (status === 'connected') {
            setConnectStatus('connected')
        } else if (status === 'disconnected') {
            if (connectStatus === 'connected' && window?.onWalletDisconnected) window.onWalletDisconnected()
            setConnectStatus('disconnected')
        }
    }, [status]);

    return <ConnectButton chainStatus="none" showBalance= {false}/>
}
