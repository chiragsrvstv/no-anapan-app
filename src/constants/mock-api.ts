////////////////////////////////////////////////////////////////////////////////
// 🛑 Nothing in here has anything to do with Nextjs, it's just a fake database
////////////////////////////////////////////////////////////////////////////////

import { faker } from '@faker-js/faker';
import { matchSorter } from 'match-sorter'; // For filtering

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Define the shape of Product data
export type Product = {
  photo_url: string;
  name: string;
  description: string;
  created_at: string;
  price: number;
  id: number;
  category: string;
  updated_at: string;
};

// Mock product data store
export const fakeProducts = {
  records: [] as Product[], // Holds the list of product objects

  // Initialize with sample data
  initialize() {
    const sampleProducts: Product[] = [];
    function generateRandomProductData(id: number): Product {
      const categories = [
        'Electronics',
        'Furniture',
        'Clothing',
        'Toys',
        'Groceries',
        'Books',
        'Jewelry',
        'Beauty Products'
      ];

      return {
        id,
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        created_at: faker.date
          .between({ from: '2022-01-01', to: '2023-12-31' })
          .toISOString(),
        price: parseFloat(faker.commerce.price({ min: 5, max: 500, dec: 2 })),
        photo_url: `https://api.slingacademy.com/public/sample-products/${id}.png`,
        category: faker.helpers.arrayElement(categories),
        updated_at: faker.date.recent().toISOString()
      };
    }

    // Generate remaining records
    for (let i = 1; i <= 20; i++) {
      sampleProducts.push(generateRandomProductData(i));
    }

    this.records = sampleProducts;
  },

  // Get all products with optional category filtering and search
  async getAll({
    categories = [],
    search
  }: {
    categories?: string[];
    search?: string;
  }) {
    let products = [...this.records];

    // Filter products based on selected categories
    if (categories.length > 0) {
      products = products.filter((product) =>
        categories.includes(product.category)
      );
    }

    // Search functionality across multiple fields
    if (search) {
      products = matchSorter(products, search, {
        keys: ['name', 'description', 'category']
      });
    }

    return products;
  },

  // Get paginated results with optional category filtering and search
  async getProducts({
    page = 1,
    limit = 10,
    categories,
    search
  }: {
    page?: number;
    limit?: number;
    categories?: string;
    search?: string;
  }) {
    await delay(1000);
    const categoriesArray = categories ? categories.split('.') : [];
    const allProducts = await this.getAll({
      categories: categoriesArray,
      search
    });
    const totalProducts = allProducts.length;

    // Pagination logic
    const offset = (page - 1) * limit;
    const paginatedProducts = allProducts.slice(offset, offset + limit);

    // Mock current time
    const currentTime = new Date().toISOString();

    // Return paginated response
    return {
      success: true,
      time: currentTime,
      message: 'Sample data for testing and learning purposes',
      total_products: totalProducts,
      offset,
      limit,
      products: paginatedProducts
    };
  },

  // Get a specific product by its ID
  async getProductById(id: number) {
    await delay(1000); // Simulate a delay

    // Find the product by its ID
    const product = this.records.find((product) => product.id === id);

    if (!product) {
      return {
        success: false,
        message: `Product with ID ${id} not found`
      };
    }

    // Mock current time
    const currentTime = new Date().toISOString();

    return {
      success: true,
      time: currentTime,
      message: `Product with ID ${id} found`,
      product
    };
  }
};

export function getTopIntelligence(user: any) {
  // await delay(3000);
  return [
    {
      account: {
        name: 'Virgin Media',
        companyURL: 'https://virginmediao2.co.uk',
        logoURL: '',
        offerings: ''
      },
      data: {
        id: '1233',
        title: `AI and Automation for IT Cost Optimization`,
        message: `
      *   **Opportunity:** Happiest Minds can offer its Product Engineering Services (PDES) to support Virgin Media O2's mobile and IoT initiatives.
      *   **Mobile App Development:** Develop and maintain mobile applications for Virgin Media O2's customers and employees.
      *   **IoT Platform Development:** Build and manage IoT platforms for various applications, such as smart homes and connected cars.
  
  *   **Target Stakeholder:** .
        `,
        stakeholders: [
          {
            id: 'aas',
            name: 'Lei Liang',
            role: 'Principal 5G And IoT Architect',
            social_url: ''
          },
          {
            id: 'aas1',
            name: 'Adrian Firth',
            role: 'Principal Architect - Mobile Data & IoT'
          }
        ]
      }
    },
    {
      account: {
        name: 'Virgin Media',
        companyURL: 'https://virginmediao2.co.uk',
        logoURL: ''
      },
      data: {
        id: '12334',
        title: `AI-Driven Customer Experience & Retention Solutions`,
        message: `
        *   **Opportunity:** Happiest Minds can assist Virgin Media O2 in their cloud journey and digital transformation initiatives.
      *   **Cloud Migration:** Help migrate applications and data to the cloud, ensuring security and compliance.
      *   **Digital Process Automation:** Automate manual processes using technologies like Robotic Process Automation (RPA) and AI.
      *   **Cloud Strategy:** Optimize business outcomes with speed, agility, and resilience through cloud computing capabilities. 
        `,
        stakeholders: [
          {
            id: 'aas1',
            name: 'Julian Davidge',
            role: 'Director, Technology Service & Operations'
          }
        ]
      }
    },
    {
      account: {
        name: 'Virgin Media',
        companyURL: 'https://virginmediao2.co.uk',
        logoURL: ''
      },
      data: {
        id: '12335',
        title: `IT Cost Optimization opportunities due to 5G rollout.`,
        message: `
      *   **Opportunity:** Happiest Minds can offer its Infrastructure Management & Security Services (IMSS) to enhance Virgin Media O2's security posture.
      *   **Managed Security Services:** Provide 24x7 monitoring and threat detection through Happiest Minds' Global Security Operations Centers (GSOC).
      *   **Vulnerability Management:** Conduct regular vulnerability assessments and penetration testing to identify and remediate security weaknesses.
      *   **Compliance:** Help Virgin Media O2 comply with relevant regulations like GDPR and PCI DSS.
      `,
        stakeholders: [
          { id: 'aas', name: 'Henry Tze', role: 'Head Of Devsecops' },
          {
            id: 'aas1',
            name: 'Julian Davidge',
            role: 'Director, Technology Service & Operations'
          }
        ]
      }
    },
    {
      account: {
        name: 'Virgin Media',
        companyURL: 'https://virginmediao2.co.uk',
        logoURL: ''
      },
      data: {
        id: 'radom-13',
        title: `machine learning to predict network congestion, identify potential outages, and optimize resource allocation`,
        message: `
      *   **Opportunity:** Happiest Minds can offer its AI & Cognitive Computing services to help Virgin Media O2:
      *   **Predictive Analytics for Network Performance:** Use machine learning to predict network congestion, identify potential outages, and optimize resource allocation. This directly addresses their need for "Network Expansion and Reliability."
      *   **Personalized Customer Experience:** Analyze customer data to personalize offers, improve customer service interactions, and reduce churn. This aligns with their focus on "Customer Experience."
      *   **Automated Issue Resolution:** Develop AI-powered chatbots and virtual assistants to resolve common customer issues, freeing up human agents for more complex problems.
      `,
        stakeholders: [
          {
            id: 'aas',
            name: 'Shruti Ahuja-Ramamurthy',
            role: 'Head Of BI & Analytics Digital Transformation '
          },
          {
            id: 'aas1',
            name: 'Iftikhar Safdar',
            role: 'RAN Optimisation Evolution - Analytics Lead'
          }
        ]
      }
    },
    {
      account: {
        name: 'Virgin Media',
        companyURL: 'https://virginmediao2.co.uk',
        logoURL: ''
      },
      data: {
        id: '1236',
        title: `Offer Generative AI Business Services (GBS) to improve customer support and content creation.`,
        message: `
      Generative AI Business Services (GBS) to improve customer support and content creation.
      *   **AI-powered Chatbots:** Develop generative AI-powered chatbots to handle customer inquiries and provide personalized support.
      *   **Content Generation:** Automate the creation of marketing materials, product descriptions, and other content using generative AI.
      *   **Target Stakeholder:** Head Of BI & Analytics > Digital Transformation (Shruti Ahuja-Ramamurthy), Chief Commercial Officer (Christian Hindennach).
      `,
        stakeholders: [
          {
            id: 'aas',
            name: 'Shruti Ahuja-Ramamurthy',
            role: 'Head Of BI & Analytics Digital Transformation '
          },
          {
            id: 'aas1',
            name: 'Christian Hindennach',
            role: 'Chief Commercial Officer '
          }
        ]
      }
    }
  ];
}

export function getTrends(user, accounts, from, to) {
  return {
    from: '2025-02-01 00:00:00.000',
    to: '2025-02-19 18:32:45.301',
    account_id: 'abcd2',
    news: [
      {
        title: 'Virgin Media Reports Strong Quarterly Earnings',
        body: 'In its latest earnings report, Virgin Media beat market expectations with robust revenue growth driven by new customer acquisitions and service expansions.',
        date: '2025-02-20 00:00:00.000'
      },
      {
        title: 'Virgin Media Reports Strong Quarterly Earnings',
        body: 'In its latest earnings report, Virgin Media beat market expectations with robust revenue growth driven by new customer acquisitions and service expansions.',
        date: '2025-02-20 00:20:00.000'
      },
      {
        title: 'Sustainability Initiatives Boost Company Image',
        body: 'Virgin Media has launched several eco-friendly initiatives, including energy-efficient data centers and a commitment to reduce carbon emissions by 30% over the next five years.',
        date: '2025-02-20 00:20:00.000'
      }
    ],
    peopleMovements: [
      {
        name: 'David Green',
        role: 'Finance Director',
        past_company: 'Virgin Media',
        current_company: '',
        social_url: 'https://linkedin.com/in',
        past_company_logo:
          'https://prod.ctassets.virginmedia.com/uploads/virgin_media_o_2_logo_2x_be9f212742.png',
        current_company_logo:
          'https://prod.ctassets.virginmedia.com/uploads/virgin_media_o_2_logo_2x_be9f212742.png',
        date: '2025-02-15 14:20:00.000',
        type: 'left'
      },
      {
        name: 'Joshua Walker',
        role: 'Customer Operations Manager',
        past_company: '',
        current_company: 'Virgin Media',
        past_company_logo:
          'https://prod.ctassets.virginmedia.com/uploads/virgin_media_o_2_logo_2x_be9f212742.png',
        current_company_logo:
          'https://prod.ctassets.virginmedia.com/uploads/virgin_media_o_2_logo_2x_be9f212742.png',
        social_url: 'https://linkedin.com/in',
        date: '2025-02-12 18:32:45.301',
        type: 'joined'
      },
      {
        name: 'Emma Thompson',
        role: 'Customer Experience Manager',
        past_company: 'EE',
        current_company: 'Virgin Media',
        past_company_logo:
          'https://prod.ctassets.virginmedia.com/uploads/virgin_media_o_2_logo_2x_be9f212742.png',
        current_company_logo:
          'https://prod.ctassets.virginmedia.com/uploads/virgin_media_o_2_logo_2x_be9f212742.png',
        social_url: 'https://linkedin.com/in',
        date: '2025-02-12 09:45:00.000',
        type: 'joined'
      }
    ]
  };
}

export function getAccountTrends(account: any) {
  return {
    accountSummary: {
      name: 'Virgin Media',
      accountURL: 'https://virginmediao2.co.uk',
      logoURL:
        'https://seeklogo.com/images/V/virgin-media-logo-0D19B92264-seeklogo.com.png',
      offeringsShort:
        'Virgin Media offers a range of telecommunications services in the United Kingdom, including broadband internet, digital television, fixed-line telephone, and mobile telephony....',
      offeringsFull: `Virgin Media offers a range of telecommunications services in the United Kingdom, including broadband internet, digital television, fixed-line telephone, and mobile telephony.
      
*   **Broadband:** Virgin Media provides superfast fiber broadband with options for different speeds and WiFi guarantees[3][4][5]. As of Q2 2023, Virgin Media has approximately 5.8 million customers.
    *   Speeds include 500Mb, 1Gb, and 2Gb broadband.
    *   The company provides greater than ≥490Mbps for >90% of all 500/50Mb customers, ≥900Mbps for >90% of all 1Gb customers, and greater than ≥1800Mbps for >90% of all 2Gb customers at peak time.
*   **Television:** Virgin TV delivers digital cable television services, offering a wide array of channels, including subscription, premium subscription, and pay-per-view options[1].
    *   Virgin TV carries around 300 digital television and radio channels.
    *   The service also provides access to on-demand content, with over 3 million Video on Demand (VoD) customers.
*   **Home Phone:** Virgin Phone offers landline telephone services[1].
    *   Customers can make free home phone calls to Virgin Mobile customers within specified periods[1].
*   **Mobile:** Virgin Media launched the world’s first virtual mobile network[3].
*   **Bundles:** Virgin Media offers bundles that combine broadband and TV services[4].
    *   These bundles provide a single monthly price for both TV and internet services[4].
*   **Additional Benefits**: Priority from O2 with early access to gig tickets, experiences, and exclusive rewards[4]. Optional O2 SIM card for a broadband speed boost and exclusive Volt benefits.
`
    },
    priorities: {},
    identifiedOpportunities: `## **Opportunity 1: AI-Driven Customer Experience & Retention Solutions**
### **Problem Statement: Declining Mobile & Fixed-Line Growth, Customer Churn**
- Virgin Media O2’s **mobile contract base declined by 118,400 in Q2 and 15,300 in Q3 2024**, reflecting challenges in customer retention.
- Fixed-line customer growth was marginal, with **only 15,000 net additions in Q3**, despite increased marketing investment.
- ARPU growth in fixed-line services was **2.2 percent year-over-year in Q3** (£48.33), but mobile ARPU has remained under pressure.

### **Who to reach out to**
- Steve Haighway - Focused on CX, Analytics & ops

  - [https://www.linkedin.com/in/steve-haighway/](https://www.linkedin.com/in/steve-haighway/)
  - Steve Haighway has a **strong background in business operations, sales strategy, and analytics** across **top IT and telecom giants** like **Virgin Media O2, BT, Wipro, and IPsoft**.His experience reflects **deep expertise in sales operations, large deal management, and business transformation.**He has been at Wipro before, and he has been talking about AI frequently. \[3 AI related posts spotted in the last 1 month\]

### **Hiring Trends Indicating Talent Shortage**

- **Number of Open Roles:** 16 in Customer Service & Digital Engagement
- **Key Positions:** Customer Service Advisor, Digital Engagement Manager, AI Chatbot Specialist
- **Insight:** The high number of customer service and digital engagement job postings suggests **Virgin Media O2 is investing in AI-driven automation** but **lacks in-house expertise** to execute these initiatives at scale.

### **Explore: AI-Powered Customer Analytics and Engagement**

Happiest Minds has a **strong practice in AI-driven customer analytics**, leveraging **machine learning models for churn prediction, hyper-personalization, and real-time customer insights**. We recommend this solution because:

- AI-driven churn prediction allows Virgin Media O2 to **identify at-risk customers early**, reducing churn rates and improving retention.
- Hyper-personalized engagement using AI-powered segmentation ensures **better cross-sell and upsell strategies**, improving ARPU.
- Intelligent AI-powered chatbots and virtual agents can **reduce customer support costs by up to 30 percent**, improving response times.

### **Competitor Benchmarking \[BETA\]**

- BT Group’s **AI-driven customer analytics initiatives** resulted in a **4 percent churn reduction and a 5 percent increase in ARPU**.
- Sky UK’s **investment in AI-powered call centers** led to a **20 percent improvement in customer query resolution rates**, reducing customer dissatisfaction.


## **Opportunity 2: AI and Automation for IT Cost Optimization**
### **Problem statement: High IT and Network Investment Costs**
- Virgin Media O2 spent **£1.5 billion in 2024** on **5G, fibre expansion, and IT efficiency programs**, impacting **Adjusted Free Cash Flow (-£196.4M in Q3)**.
- The company’s **network evolution (Nexfibre and 5G)** is capital-intensive, requiring cost-saving initiatives in IT operations.

### **Who to reach out to**
- Jeanie York \[CTO - Strong Digital Transformation background\]

  - [https://www.linkedin.com/in/jeanie-york-828622/](https://www.linkedin.com/in/jeanie-york-828622/)
  - Jeanie’s accomplishments

    - Led technology innovation and solutions for Virgin Media's quad play service portfolio across the UK and Ireland.
    - Managed a significant budget and large teams, including 7 direct reports and over 2,250 full-time employees at Virgin Media.
    - Directed core network planning, engineering, and operations across 10 European countries at Liberty Global.
    - Successfully launched operational support for Mobile and IT customer-facing services at Liberty Global.
    - Improved network reliability and customer experience at CenturyLink by leading the Network Event Management Center.

### **Explore: Intelligent IT Automation and AIOps**

Happiest Minds specializes in **AI-driven IT operations (AIOps) and RPA**, offering enterprise automation solutions that can drive down Virgin Media O2’s IT costs. We recommend this solution because:

- **AIOps can reduce downtime by 25 percent**, proactively resolving IT incidents before they escalate.
- **Robotic Process Automation (RPA) automates high-volume tasks** such as network monitoring, IT helpdesk management, and ticketing, reducing operational expenses.
- **Predictive network analytics** can optimize Virgin Media O2’s infrastructure investments, cutting unplanned downtime by 30 percent.

### **Competitor Benchmarking \[BETA\]**

- Deutsche Telekom reduced **IT operational costs by 18 percent** through AI-driven automation in network operations.
- Vodafone saved **€300 million annually** by implementing robotic process automation for IT workflows, reducing manual intervention by 40 percent.


### **Hiring Trends Indicating Talent Shortage**

- **Number of Open Roles:** 22 in IT & Digital Transformation
- **Key Positions:** IT Systems Engineer, IT Service Manager, DevOps Engineer, Digital Transformation Manager
- **Insight:** The high volume of open IT roles suggests Virgin Media O2 is **struggling with IT inefficiencies and workforce gaps**, requiring automation solutions.





    `,
    contracts: {},
    financialSummary: {}
  };
}

// Initialize sample products
fakeProducts.initialize();
