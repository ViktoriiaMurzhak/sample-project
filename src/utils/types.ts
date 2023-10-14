export type Users = {
  name: string;
  id: number;
  company: { name: string };
  phone: string;
  username: string;
  email: string;
  website: string;
};

export type Photos = {
  id: number;
  alt: string;
  photographer: string;
  url: string;
  src: { original: string };
};
