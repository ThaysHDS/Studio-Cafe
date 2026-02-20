
export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}
