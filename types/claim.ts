import { TeesContract } from "./tees";

export type Claim = {
    open: string;
    title: string;
    image: string;
    specs: string;
    care: string;
    eligibility: string;
    chart: string;
    successful: string;
    link: string;
    contract: TeesContract;
}