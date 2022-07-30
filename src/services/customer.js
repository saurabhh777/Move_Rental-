export let Customers = [
    {
      name: "ashish",
      phoneNumber: "123456789",
      isGold: true,
      _id: "5k21ca3eeb7f6fbccd471811",
    },
    {
      name: "anupama",
      phoneNumber: "345678912",
      isGold: false,
      _id: "5k21ca3eeb7f6fbccd471812",
    },
    {
      name: "vishal p",
      phoneNumber: "23456789",
      isGold: true,
      _id: "5k21ca3eeb7f6fbccd471813",
    },
    {
      name: "vishal v",
      phoneNumber: "456789123",
      isGold: false,
      _id: "5k21ca3eeb7f6fbccd471814",
    },
   
   {
      name: "sarita",
      phoneNumber: "567891234",
      isGold: true,
      _id: "5k21ca3eeb7f6fbccd471815",
    },
    {
      name: "bhavesh",
      phoneNumber: "678912345",
      isGold: false,
      _id: "5k21ca3eeb7f6fbccd471816",
    },
  ];

  export function getCustomers() {
    return Customers.filter((c) => c);
  }
  
  export function getCustomer(id) {
    return Customers.find((c) => c._id ===id);
 
  }