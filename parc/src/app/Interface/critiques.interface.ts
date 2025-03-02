export interface CritiquesInterface {
  critiques_id?: number;
  attraction_id: number;
  texte: string;
  note: number;
  nom?: string | null;
  prenom?: string | null;
}