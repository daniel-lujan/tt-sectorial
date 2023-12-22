type AddCategoryPayload = {
  name: string;
  description: string;
  isActive: boolean;
};

type AddCategoryResponse = {
  _id: string;
};

type AddSubcategoryPayload = {
  categoryId: string;
  name: string;
};

type AddSubcategoryResponse = null;

type AddTopicPayload = AddSubcategoryPayload & {
  subcategoryId: string;
};

type AddTopicResponse = null;
