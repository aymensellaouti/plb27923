import { Pipe, PipeTransform } from "@angular/core";
const COUR = 26400;
@Pipe({
  name: "usdToBtc",
})
export class UsdToBtcPipe implements PipeTransform {
  transform(amount: number, iSUsdToBtc = true): number {
    return iSUsdToBtc ? amount / COUR : amount * COUR;
  }
}
