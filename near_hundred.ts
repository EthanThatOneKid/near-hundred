const NEAR = 10;

export function nearHundred(n: number): boolean {
  const relativeTo100 = n % 100;
  return relativeTo100 <= NEAR || relativeTo100 >= 100 - NEAR;
}

if (import.meta.main) {
  console.log(nearHundred(parseInt(Deno.args[0])));
}
