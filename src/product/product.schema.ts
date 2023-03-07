import mongoose from 'mongoose';

export class Image {
  url: string;
  alt: string;
}

export class Product {
  name: string;
  description: string;
  calories?: number;
  nutriscore?: number;
  rating?: number;
  category: string;
  images: Image[];
  likes ?: number ;
}

export type ProductDocument = Product & mongoose.Document;

const ImageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  alt: { type: String, required: false }
});

export const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  calories: { type: Number, required: false },
  nutriscore: { type: Number, required: false },
  rating: { type: Number, required: false },
  category: { type: String, required: true },
  images: [ImageSchema] , 
  likes :  {type : Number , required : false}
});

export default mongoose.model<ProductDocument>('Product', ProductSchema);
