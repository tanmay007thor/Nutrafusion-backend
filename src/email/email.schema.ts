import mongoose from 'mongoose';

export enum WhereDidYouHearAboutUs {
  Google = 'Google',
  Facebook = 'Facebook',
  Twitter = 'Twitter',
  LinkedIn = 'LinkedIn',
  Friend = 'Friend',
  Other = 'Other',
}

export class Email {
  fullname: string;
  email: string;
  whereDidYouHearAboutUs: WhereDidYouHearAboutUs;
}

export type EmailDocument = Email & mongoose.Document;

export const EmailSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  whereDidYouHearAboutUs: { type: String, enum: Object.values(WhereDidYouHearAboutUs), required: true }
});

export default mongoose.model<EmailDocument>('Email', EmailSchema);
