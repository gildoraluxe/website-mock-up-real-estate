function recommendService(input) {
  if (input.includes("invest")) return "Investment Advisory";
  if (input.includes("sell")) return "Seller Representation";
  return "Buyer Representation";
}
