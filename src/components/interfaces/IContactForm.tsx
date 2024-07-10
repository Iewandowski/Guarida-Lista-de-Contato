import { IContact } from "./IContact";

export interface IContactFormProps {
    contact?: IContact | null;
    onSave: (contact: IContact) => void;
  }