type Topic = {
  _id: string;
  name: string;
};

type SubCategory = {
  _id: string;
  name: string;
  topics: Topic[];
};

type Category = {
  _id: string;
  name: string;
  description: string;
  subcategories: SubCategory[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};
