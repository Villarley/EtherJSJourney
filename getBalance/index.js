import { ethers } from "ethers"

// Reemplaza con tu URL de Alchemy
const alchemyUrl = 'https://eth-mainnet.g.alchemy.com/v2/U7OdE42Acl8VTbyu8AoR3vij_IbR_fyn';

// Crear un proveedor usando la URL de Alchemy
const provider = new ethers.JsonRpcProvider(alchemyUrl);

// Indicar la cuenta de la que se quiere conocer el saldo
const address = "0xDedBf9813E55cad604a035fa99A7DBed29E70359";

// Obtener el saldo de la cuenta
async function getBalance() {
  try {
    const balance = await provider.getBalance(address);
    console.log("Saldo de la cuenta:", ethers.formatEther(balance), "ETH");
  } catch (e) {
    console.error("Error al obtener el saldo de la cuenta", e);
  }
}

getBalance();