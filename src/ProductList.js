import React, { useState } from 'react';

const ProductList = ({ data }) => {
    const [accounts, setAccounts] = useState([]);

    const handlePurchase = async () => {
        try {
            await window.ethereum.request({
                method: 'eth_sendTransaction',
                params: [
                    {
                        from: accounts[0],
                        to: '0x3776f5B89EEfE2d654818a8655Ea763259d14c31',
                        value: '40000000000',
                        gasLimit: '0x5028',
                        maxPriorityFeePerGas: '0x3b9aca00',
                        maxFeePerGas: '0x2540be400',
                    },
                ],
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleConnect = async () => {
        try {
            const connectedAccounts = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });
            setAccounts(connectedAccounts);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="product-list">
            {data.map((product) => (
                <div className="prod-preview" key={product.id}>
                    <div className="upper">
                        <div className="left">
                            <h1>{product.name}</h1>
                            <p>{product.desc}</p>
                        </div>
                        <div className="right">
                            <p>{product.code}</p>
                        </div>
                    </div>
                    <div className="lower">
                        <h1>{product.lancerName}</h1>
                        <button className="enableEthereumButton btn blueButton" onClick={handleConnect}>Connect</button>
                        <button className="sendEthButton btn blueButton" onClick={handlePurchase}>Purchase</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
