import { IContact } from "./IContact";

export interface IContactListProps {
    contacts: IContact[];
    onDelete: (id: string) => void;
    onEdit: (contact: IContact) => void;
  }