const AreadoCirculo = (): number =>{
  let raio: number = 10;
  const area: number = Math.PI * (raio * raio);
  return area;
}
console.log("A área do círculo é: " + AreadoCirculo())