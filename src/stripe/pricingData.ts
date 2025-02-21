import { Price } from "@/types/price";

const boatSoftwareMessage = "We are building a new boat-related software that is coming soon!";

export const pricingData: Price[] = [
  {
    id: "price_1NQk5TLtGdPVhGLecVfQ7mn0",
    unit_amount: 9 * 100,
    nickname: "Basic",
    offers: [
      "Freelancers & Small Teams",
      "Core task management," ,"file sharing,"," and basic proofing.           "
    ],
  },
  {
    id: "price_1NQk55LtGdPVhGLefU8AHqHr",
    unit_amount: 19 * 100,
    nickname: "Pro",
    offers: [
      "Everything in Basic" ,
      "+ Advanced Proofing", 
      "Automated Preflight",
       "& Integrations."
    ],
  },
  {
    id: "price_1NQk4eLtGdPVhGLeZsZDsCNz",
    unit_amount: "Custom Pricing",
    nickname: "Enterprise",
    offers: [
      "Everything in Pro",
      "+ Custom Workflows",
      "API Access",
      "& Dedicated Support."
    ],
    description: "We are building a new boat-related software that is coming soon...!" // Custom message
  },
  
];
console.log(boatSoftwareMessage); 
