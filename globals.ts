//@ts-nocheck

export const globalObject = {
  appName: 'ANAPAN AI',
  user: {
    name: 'Prakhar Vats',
    client: { name: 'My Org', logoURL: '', companyURL: '' },
    email: 'prakhar@midsummer.com',
    profileImageURL:
      'https://media.licdn.com/dms/image/v2/D4D03AQGCfbxSPLcHOA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1700019670435?e=1746057600&v=beta&t=KAF9isKEXRnTXqz2Fy45Kl1hs4PMcF_2W5rIm6LAHeI',
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
