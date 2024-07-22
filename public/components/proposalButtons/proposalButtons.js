import "./proposalButtons.css";
import { buscar } from "../search/search";

export const addProposalButtons = (proposals) =>{
  const main = document.querySelector("main");
  const proposalEspace = document.createElement("section");

  proposalEspace.classList.add("proposalEspace");
  for (const proposal of proposals) {
    const proposalButton = document.createElement("button");
    proposalButton.value = proposal;
    proposalButton.textContent = proposal;
    proposalButton.addEventListener("click", function () {
      const input = document.querySelector("[name='search']");
      input.value = proposal;
      buscar(proposal);
    }); 
    proposalButton.classList.add("proposalButton");
    proposalEspace.appendChild(proposalButton);
  }
  main.appendChild(proposalEspace);

}

export const showProposals = () => {
  const proposals = ["nube", "ratón", "derecho"];
  addProposalButtons(proposals);
}