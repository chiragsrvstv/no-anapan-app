//@ts-nocheck

export const globalObject = {
  appName: 'ANAPAN AI',
  user: {
    name: 'Issac George',
    client: { name: 'Happiest Minds', logoURL: '', companyURL: '' },
    email: 'issac@happiestminds.com',
    profileImageURL: '',
    plan: 'Enterprise'
  },
  accounts: [
    {
      name: 'Virgin Media O2',
      companyURL: 'virginmediao2.co.uk',
      logoURL: ''
    }
  ],
  feed: [{}],
  orgChart: []
};

// export const getGlobal = (): Promise<typeof globalObject> => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(globalObject), 1000);
//   });
// };

export const getGlobal = () => globalObject;
