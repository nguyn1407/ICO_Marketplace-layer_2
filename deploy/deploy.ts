import { deployContract } from "./utils";

// An example of a basic deploy script
// It will deploy a Greeter contract to selected network
// as well as verify it on Block Explorer if possible for the network
export default async function () {
  // const contractArtifactName = "CrowdSale";
  // const constructorArguments = [
  //   "1",
  //   "1",
  //   "0x652C02bE862A244F3BC25eb98B740738f48935cF",
  //   "0x67d77256EDb75ad8cD363A9c8EB2481C5B64ab01",
  // ];
  // await deployContract(contractArtifactName, constructorArguments);

  //const contractArtifactName = "NFT";

  // const contractArtifactName = "NftMarketplace";
  // const constructorArguments = [
  //   "0x67d77256EDb75ad8cD363A9c8EB2481C5B64ab01",
  //   "0x9158C2272AD2Bb3fd02D4deDCc9724882F9CC0dA",
  // ];
  // await deployContract(contractArtifactName, constructorArguments);

  const contractArtifactName = "Auction";
  const constructorArguments = [
    "0x67d77256EDb75ad8cD363A9c8EB2481C5B64ab01",
    "0x9158C2272AD2Bb3fd02D4deDCc9724882F9CC0dA",
  ];
  await deployContract(contractArtifactName, constructorArguments);

  // await deployContract(contractArtifactName);
}
