type AddCategoryPayload = {
  name: string;
  description: string;
  isActive: boolean;
};

type AddCategoryResponse = {
  _id: string;
};

type DeleteCategoryPayload = {
  categoryId: string;
};

type DeleteCategoryResponse = null;

type AddSubcategoryPayload = {
  categoryId: string;
  name: string;
};

type AddSubcategoryResponse = null;

type DeleteSubcategoryPayload = {
  categoryId: string;
  subcategoryId: string;
};

type DeleteSubcategoryResponse = null;

type AddTopicPayload = AddSubcategoryPayload & {
  subcategoryId: string;
};

type AddTopicResponse = null;

type DeleteTopicPayload = {
  categoryId: string;
  subcategoryId: string;
  topicId: string;
};

type DeleteTopicResponse = null;

type ActivateCategoryPayload = {
  id: string;
  value: boolean;
};

type ActivateCategoryResponse = null;
