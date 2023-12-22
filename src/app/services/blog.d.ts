type AddCategoryPayload = {
  name: string;
  description: string;
  isActive: boolean;
};

type AddCategoryResponse = {
  _id: string;
};

type AddSubcategoryPayload = {
  name: string;
};

type AddSubcategoryResponse = null;

type AddTopicPayload = AddSubcategoryPayload;

type AddTopicResponse = null;
