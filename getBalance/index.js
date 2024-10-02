import { ethers } from "ethers"
import dotenv from "dotenv"
dotenv.config()

// Reemplaza con tu URL de Alchemy
const alchemyUrl = process.env.SEPOLIA_URL;

// Crear un proveedor usando la URL de Alchemy
const provider = new ethers.JsonRpcProvider(alchemyUrl);

// Indicar la cuenta de la que se quiere conocer el saldo
const address = process.env.WALLET_ACCOUNT;

// Obtener el saldo de la cuenta
async function getBalance() {
  try {
    const balance = await provider.getBalance(address);
    console.log(address);
    console.log("Saldo de la cuenta:", ethers.formatEther(balance), "ETH");
  } catch (e) {
    console.error("Error al obtener el saldo de la cuenta", e);
  }
}

getBalance();