import { z } from 'zod';

// Define the Variant schema
const VariantValidationSchema = z.object({
  type: z.string().nonempty({ message: "Type is required" }),
  value: z.string().nonempty({ message: "Value is required" }),
});

// Define the Inventory schema
const InventoryValidationSchema = z.object({
  quantity: z.number().int().min(0, { message: "Quantity must be a non-negative integer" }),
  inStock: z.boolean(),
});

// Define the Product schema
const ProductValidationSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  description: z.string().nonempty({ message: "Description is required" }),
  price: z.number().positive({ message: "Price must be a positive number" }),
  category: z.string().nonempty({ message: "Category is required" }),
  tags: z.array(z.string().nonempty({ message: "Tag cannot be empty" })),
  variants: z.array(VariantValidationSchema),
  inventory: InventoryValidationSchema,
});

export default ProductValidationSchema;