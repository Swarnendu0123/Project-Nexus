
    const services = document.getElementById("services");
    const purchaseButton = document.getElementById("purchaseButton");

    async function connectWallet() {
        try {
            await ethereum.request({ method: "eth_requestAccounts" });
            alert("Wallet has connected successfully!");
        } catch (error) {
            console.error("Error connecting wallet:", error);
            alert("An error has occurred while connecting the wallet.");
        }
    }

  

    document.getElementById("food").addEventListener('click', event => {
        redirectToExternalLink("https://relaxed-tiramisu-1abddf.netlify.app/food.com");
    });
    document.getElementById("freelance").addEventListener('click', event => {
        redirectToExternalLink("https://relaxed-tiramisu-1abddf.netlify.app/food.com");
    });


    purchaseButton.addEventListener("click", async () => {
        try {
            if (typeof ethereum !== "undefined") {
                const accounts = await ethereum.request({ method: "eth_accounts" });
                if (accounts.length === 0) {
                    await connectWallet();
                } 
            } else {
                alert("Please install Metamask.");
            }
        } catch (error) {
            console.error( error);
        }
    });
